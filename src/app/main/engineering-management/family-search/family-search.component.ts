import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireFamilyDTOId } from '../../../shared/types/api-types/bire-family-dto-id.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';

import { FamilySearchService } from './family-search.service';

@Component({
  selector: 'aw-family-search',
  templateUrl: './family-search.component.html',
  styleUrls: ['./family-search.component.scss']
})
export class FamilySearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public filteredRowsNb: number;
  public familyTableDataSource: TableDataSource<BireFamilyDTO>;
  public exportMethods: MenuItem[];

  public familyStructureType: string;
  public propertyFamilyFunction: LabelValue<string>[];

  public resultsTableExportName: string;
  public isLoading: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly familySearchService: FamilySearchService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'Family list';

    this.filteredRowsNb = 0;
    this.exportMethods = [];
    this.initFamilyTableDataSource();
    this.setExportMethods();

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.setExportMethods();
    });

    this.isLoading = false;
  }

  public getComponentName(): string {
    return 'FamilySearchComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.isLoading = true;
    forkJoin({
      familyFunctionList: this.propertiesService.getValue('getFamilyFunctionMap'),
      structureTypeValue: this.propertiesService.getValueByKey('getStructureTypeValueByKey',
      AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY ),
      familyList: this.familySearchService.findAllBireFamilys()
    }).subscribe(
      (result) => {
        this.propertyFamilyFunction = result.familyFunctionList;
        this.familyStructureType = result.structureTypeValue;
        result.familyList.list.forEach((element) => {
          element.structureTypeDisplay = this.familyStructureType;
          LabelValueUtils.stringValueToLabel(element, 'familyFunction', this.propertyFamilyFunction);
        });
        this.familyTableDataSource.setData(result.familyList.list);
        this.familyTableDataSource.update();
        this.familyTableDataSource.dataSrc.sort((a, b) =>
        !!a.familyCode && !!b.familyCode && a.familyCode > b.familyCode ? 1 : -1
      );
        this.filteredRowsNb = result.familyList.list.length;
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearchAllBireFamily'));
        this.isLoading = false;
      }
    );
    this.displayComponentContext('global.search', true);
  }

  private initFamilyTableDataSource(): void {
    this.familyTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyCode',
          translateKey: this.getTranslateKey('familyCode'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'familyName',
          translateKey: this.getTranslateKey('familyName'),
          alignment: ColumnAlignment.LEFT,
          width: '40%'
        },
        {
          field: 'structureTypeDisplay',
          translateKey: this.getTranslateKey('structureTypeDisplay'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'familyFunction',
          translateKey: this.getTranslateKey('familyFunction'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        }
      ],
      data: []
    });
  }

  public deleteSelectedFamily(): void {
    const deleteMessage =
      this.familyTableDataSource.dataSelectionCount > 1 ?
      'confirmDeleteSelectedFamilys' : 'confirmDeleteSelectedFamily';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(deleteMessage),
      accept: () => {
        this.familySearchService.removeBireFamilys(this.familyTableDataSource.dataSelection).subscribe(
          (result) => {
            if (this.familyTableDataSource.dataSelectionCount > 1) {
              this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteFamilies'));
            } else {
              this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteFamily'));
            }
            this.familyTableDataSource.dataSelection = [];
            this.search();
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteFamily'));
          }
        );
      }
    });
  }

  public search() {
    this.isLoading = true;

    this.familySearchService.findAllBireFamilys().subscribe(
      (results) => {
        results.list.forEach((element) => {
          element.structureTypeDisplay = this.familyStructureType;
          LabelValueUtils.stringValueToLabel(element, 'familyFunction', this.propertyFamilyFunction);
        });
        this.familyTableDataSource.setData(results.list);
        this.familyTableDataSource.update();
        this.familyTableDataSource.dataSrc.sort((a, b) =>
        !!a.familyCode && !!b.familyCode && a.familyCode > b.familyCode ? 1 : -1
      );
        this.filteredRowsNb = results.list.length;
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearchAllBireFamily'));
        this.isLoading = false;
      }
    );
  }

  public refresh() {
    this.search();
  }

  public openNewFamily(): void {
    this.openFamily(undefined, ComponentOpenMode.Create);
  }

  public openFamilyLink(bireFamily: BireFamilyDTO): void {
    if (bireFamily && bireFamily.familyCode && bireFamily.structureType) {
      const bireFamilyId: BireFamilyDTOId = {
        familyCode: bireFamily.familyCode,
        structureType: bireFamily.structureType
      };
      this.openFamily(bireFamilyId, ComponentOpenMode.Read);
    }
  }

  public openSelectedFamily(): void {
    this.familyTableDataSource.dataSelection.forEach((bireFamily) => {
      if (bireFamily && bireFamily.familyCode && bireFamily.structureType) {
        const bireFamilyId: BireFamilyDTOId = {
          familyCode: bireFamily.familyCode,
          structureType: bireFamily.structureType
        };
        this.openFamily(bireFamilyId, ComponentOpenMode.Read);
      }
    });
    this.familyTableDataSource.dataSelection = [];
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  private openFamily(objectId: BireFamilyDTOId | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.FamilyFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FamilyFormComponent',
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public exportTable(): void {
    if (!!this.componentData) {
      this.exportService.toExcel(
        this.modifyExportColumns(this.familyTableDataSource.dataSrc),
        this.resultsTableExportName,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private modifyExportColumns(resultArr: BireFamilyDTO[]): BireFamilyDTO[] {
    const exportArr: BireFamilyDTO[] = [];
    resultArr.forEach((res) => {
      const json: BireFamilyDTO = {};
      const keys = Object.keys(res);
      keys.forEach((key) => {
        if (key !== 'variantName' && key !== 'variantCode' && key !== 'structureType') {
          json[key] = res[key];
        }
      });
      exportArr.push(json);
    });

    return exportArr;
  }

  private setExportMethods(): void {
    this.exportMethods = [
      {
        label: this.translateService.instant('global.excel'),
        icon: 'fa-file-excel-o'
        // command: () => {}
      },
      {
        label: this.translateService.instant('global.pdf'),
        icon: 'fa-file-pdf-o'
        // command: () => {}
      }
    ];
  }
}
