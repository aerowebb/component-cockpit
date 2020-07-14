import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { finalize, map, mergeMap } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BirePartUpdateGuidelineDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { DeaDiaService } from '../dea-dia.service';

export interface BirePartUpdateGuidelineRow extends BirePartUpdateGuidelineDTO {
  articleDesignation: string;
  pugTypeLabel: string;
  pugStatusLabel: string;
}

@Component({
  selector: 'aw-dea-dia-search',
  templateUrl: './dea-dia-search.component.html'
})
export class DeaDiaSearchComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly component: typeof DeaDiaSearchComponent;

  public guidelineSearch: BirePartUpdateGuidelineDTO;

  public guidelineTableDataSource: TableDataSource<BirePartUpdateGuidelineRow>;
  public isLoading: boolean = false;

  public partGuidelineTypes: LabelValue<string>[];
  public partGuidelineStatus: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly deadiaService: DeaDiaService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.component = DeaDiaSearchComponent;
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_DEA_DIA_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  private init(): void {
    this.guidelineSearch = {};
    this.initGuidelineTableDataSource();
    this.loadPartGuidelineTypes();
    this.loadPartGuidelineStatus();
  }

  public openPartNumber(pnCode: string): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId: pnCode,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.guidelineTableDataSource.dataSelection = [];
  }

  public openSelectedPartNumber() {
    this.guidelineTableDataSource.dataSelection.forEach((row) => this.openPartNumber(row.pnCode as string));
  }

  public openGuideline(rowData: BirePartUpdateGuidelineRow): void {
    const labelKey = 'transaction.DeaDiaFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_DEA_DIA_FORM,
      objectId: !!rowData ? this.serializationService.serialize(rowData as BirePartUpdateGuidelineDTO) : undefined,
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private initGuidelineTableDataSource(): void {
    this.guidelineTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'pnCode',
          translateKey: this.getTranslateKey('pnCode')
        },
        {
          field: 'pugCode',
          translateKey: this.getTranslateKey('pugCode')
        },
        {
          field: 'pugTypeLabel',
          translateKey: this.getTranslateKey('pugType')
        },
        {
          field: 'pugStatusLabel',
          translateKey: this.getTranslateKey('pugStatus')
        },
        {
          field: 'isUrgent',
          translateKey: this.getTranslateKey('isUrgent')
        },
        {
          field: 'articleDesignation',
          translateKey: this.getTranslateKey('articleDesignation')
        }
      ],
      data: []
    });
  }

  private getLabelValueByValue<T>(references: LabelValue<T>[], value: T): LabelValue<T> | undefined {
    if (!!references) {
      return references.find((lv) => lv.value === value);
    }
  }

  public search(): void {
    this.guidelineTableDataSource.setData([]);
    this.isLoading = true;
    this.deadiaService
      .findBirePartUpdateGuidelinesBySearchCriteria(this.guidelineSearch)
      .pipe(
        mergeMap((birePartUpdateGuidelineDTOArray: BirePartUpdateGuidelineDTO[]) =>
          from(birePartUpdateGuidelineDTOArray).pipe(
            mergeMap((birePartUpdateGuidelineDTO: BirePartUpdateGuidelineDTO) =>
              this.deadiaService.findBirePn({ pnCode: birePartUpdateGuidelineDTO.pnCode as string }).pipe(
                map((birePnDTO: BirePnDTO) => {
                  const pugType = !!birePartUpdateGuidelineDTO.pugType
                    ? this.getLabelValueByValue(this.partGuidelineTypes, birePartUpdateGuidelineDTO.pugType)
                    : undefined;
                  const pugStatus = !!birePartUpdateGuidelineDTO.pugStatus
                    ? this.getLabelValueByValue(this.partGuidelineStatus, birePartUpdateGuidelineDTO.pugStatus)
                    : undefined;
                  const rowData: BirePartUpdateGuidelineRow = {
                    ...birePartUpdateGuidelineDTO,
                    pugTypeLabel: !!pugType ? pugType.label : '',
                    pugStatusLabel: !!pugStatus ? pugStatus.label : '',
                    articleDesignation: birePnDTO.articleDesignation as string
                  };

                  return rowData;
                })
              )
            )
          )
        )
      )
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((rowData: BirePartUpdateGuidelineRow) => {
        this.guidelineTableDataSource.addData([rowData]);
      });
  }

  public resetSearchCriteria(): void {
    this.guidelineSearch = {};
  }

  private loadPartGuidelineTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PART_GUIDELINE_TYPE_MAP).subscribe(
      (results) => {
        this.partGuidelineTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPartGuidelineTypes'));
      }
    );
  }

  private loadPartGuidelineStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.GUIDELINE_STATUS_MAP).subscribe(
      (results) => {
        this.partGuidelineStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPartGuidelineStatus'));
      }
    );
  }
}
