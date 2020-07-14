import { Component, OnInit } from '@angular/core';

import { LabelValueHelper } from '../../../../modules/purchase-contract/utils/label-value-helper';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { OperationalConfigurationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/operational-configuration-output-dto';
import { BidoFlDTOId } from '../../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FunctionalLocationSearchService } from '../../../engineering-management/functional-location-search/functional-location-search.service';

import { OperationalConfigurationSearchService } from './operational-configuration-search.service';

interface OperationalConfigurationRow extends OperationalConfigurationOutputDTO {
  flCode?: string;
  familyVariantLabel?: string;
  flDescription?: string;
  statusStateLabel?: string;
}

@Component({
  selector: 'aw-operational-configuration-search',
  templateUrl: './operational-configuration-search.component.html'
})
export class OperationalConfigurationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public familyVariants: LabelValue<string>[];
  public flFunctions: LabelValue<string>[];
  public flStatusList: LabelValue<string>[];
  public searchObject: FindBidoFlsBySearchCriteriaInput;
  public familyVariantCode: string;
  public showFunctionalLocationModelDialog: boolean;
  public displayModelPopin: boolean;
  public isReadOnlyForm: boolean;
  private readonly resultsTableExportName: string;
  public globalFilterTxt: string | undefined;
  public resultsTableDataSource: TableDataSource<OperationalConfigurationRow>;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly operationalConfigurationSearchService: OperationalConfigurationSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.familyVariants = [];
    this.flFunctions = [];
    this.flStatusList = [];

    this.searchObject = {
      bidoFlDTOCriteria: {},
      familyVariantCode: undefined
    };
    this.isReadOnlyForm = false;
    this.displayModelPopin = false;

    this.loadfamilyVariant();
    this.loadFlFunction();
    this.loadFlStatusList();
    this.showFunctionalLocationModelDialog = false;
    this.resultsTableExportName = 'operationalConfiguration-search-list';
    this.initResultsTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_SEARCH;
  }

  // To bind dropdown family variant
  private loadfamilyVariant(): void {
    this.functionalLocationSearchService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
      this.familyVariants = list || [];
    });
  }

  // To bind dropdown function
  private loadFlFunction(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.flFunctions = results || [];
    });
  }

  private loadFlStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLOC_STATUS_MAP).subscribe((results) => {
      this.flStatusList = results || [];
    });
  }

  public showDialog() {
    this.displayModelPopin = true;
    this.searchObject = this.searchObject;
  }

  /*
     <summary>Set selected customer code in corresponding input box</summary>
     */

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initResultsTableDataSource(): void {
    this.resultsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'flCode',
          translateKey: this.getTranslateKey('flCode')
        },
        {
          field: 'familyVariantLabel',
          translateKey: this.getTranslateKey('familyVariantCode')
        },
        {
          field: 'flDescription',
          translateKey: this.getTranslateKey('flDescription')
        },
        {
          field: 'statusStateLabel',
          translateKey: this.getTranslateKey('statusState')
        }
      ],
      data: []
    });
  }

  public resetSearchCriteria(): void {
    this.searchObject = {
      bidoFlDTOCriteria: {},
      familyVariantCode: undefined
    };
    this.loadfamilyVariant();
  }

  /* Search functional location */
  public search(): void {
    this.loadFunctionalLocations();
  }

  // To bind the table function locations
  private loadFunctionalLocations(): void {
    this.searchObject.bidoFlDTOCriteria.flIsOpeConf = true;
    const criteria: FindBidoFlsBySearchCriteriaInput = {
      bidoFlDTOCriteria: this.searchObject.bidoFlDTOCriteria,
      familyVariantCode: this.familyVariantCode ? [this.familyVariantCode] : undefined
    };

    this.operationalConfigurationSearchService.searchOperationalConfigurationList(criteria).subscribe(
      (results) => {
        if (results) {
          const rows = results.list.map(
            (result): OperationalConfigurationRow => ({
              bidoFlDTO: result.bidoFlDTO,
              flCode: result.bidoFlDTO ? result.bidoFlDTO.flCode : '',
              flDescription: result.bidoFlDTO ? result.bidoFlDTO.flDescription : '',
              familyVariantCode: result.familyVariantCode,
              familyVariantLabel: LabelValueHelper.getLabelByValue(this.familyVariants, result.familyVariantCode),
              statusStateLabel: LabelValueHelper.getLabelByValue(
                this.flStatusList,
                (result.bidoFlDTO || {}).statusState
              )
            })
          );
          this.resultsTableDataSource.setData(rows);
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFLResults'));
      }
    );
  }

  public openOperationalconfigurationLink(functionLocation: BidoFlDTO) {
    if (functionLocation) {
      const matchingFlFunction = this.flFunctions.find(
        (flFunction) => flFunction.label === functionLocation.flFunction
      );
      const selectedObjectId: BidoFlDTO = {
        flCode: functionLocation.flCode,
        flDescription: functionLocation.flDescription,
        flFunction: matchingFlFunction ? matchingFlFunction.value : undefined,
        flIsMel: functionLocation.flIsMel,
        flNominalQuantity: functionLocation.flNominalQuantity,
        flRequiredQuantity: functionLocation.flRequiredQuantity,
        flComments: functionLocation.flComments,
        flDelayCategory: functionLocation.flDelayCategory
      };
      this.openOperationalconfiguration(selectedObjectId, ComponentOpenMode.Read);
    }
  }

  /* Open Functional Location form for selected rows in consult mode */
  public openSelectedOperationalconfiguration(): void {
    this.resultsTableDataSource.dataSelection.forEach((opConfigRow) => {
      if (opConfigRow && opConfigRow.bidoFlDTO) {
        const selectedObjectId: BidoFlDTO = { ...opConfigRow.bidoFlDTO };
        this.openOperationalconfiguration(selectedObjectId, ComponentOpenMode.Read);
      }
    });
  }

  /* Delete selected functional location */
  public deleteSelectedOperationalConfiguration(): void {
    if (this.resultsTableDataSource.hasDataSelection) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          const selectedBireFunctionalLocationDTOId = new Array<BidoFlDTOId>();
          this.resultsTableDataSource.dataSelection.forEach((opConfigRow) => {
            if (opConfigRow && opConfigRow.bidoFlDTO) {
              const flCode = opConfigRow.bidoFlDTO.flCode;
              if (!!flCode) {
                const bireFunctionalLocationDTOId: BidoFlDTOId = {
                  flCode
                };
                selectedBireFunctionalLocationDTOId.push(bireFunctionalLocationDTOId);
              } else {
                super.throwUnboundLocalError('deleteSelectedOperationalConfiguration', 'functionLocation.flCode');
              }
            }
          });
          this.functionalLocationSearchService.removeFunctionalLocation(selectedBireFunctionalLocationDTOId).subscribe(
            (result) => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
            },
            () => {
              this.messageService.showErrorMessage('global.deleteErrorMsg');
            }
          );

          this.resultsTableDataSource.deleteDataSelection();
        }
      });
    }
  }

  public exportTable(): void {
    if (!!this.componentData) {
      this.exportService.toExcel(
        this.resultsTableDataSource.sanitizedData.map((opConfRow) => ({
          familyVariant: opConfRow.familyVariantLabel,
          flDescription: opConfRow.bidoFlDTO ? opConfRow.bidoFlDTO.flDescription : undefined,
          statusState: opConfRow.statusStateLabel
        })),
        this.resultsTableExportName,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  // To open create popup for function location
  public openNewFunctionalLocation(): void {
    this.openOperationalconfiguration(undefined, ComponentOpenMode.Create);
  }

  // tslint:disable-next-line:no-any
  private openOperationalconfiguration(objectId: any | null, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_FORM,
      objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.resultsTableDataSource.dataSelection = [];
  }

  public resetFilter(): void {
    this.globalFilterTxt = undefined;
  }
}
