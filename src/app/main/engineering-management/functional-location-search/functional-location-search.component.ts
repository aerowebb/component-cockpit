import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { BidoFlDTOId } from '../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { ObjectUtils } from '../../../shared/utils/object-utils';

import { FunctionalLocationSearchService } from './functional-location-search.service';

@Component({
  selector: 'aw-functional-location-search',
  templateUrl: './functional-location-search.component.html'
})
export class FunctionalLocationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly PROPERTY_ID = 1;
  public readonly propertyValueId = 1092;

  public isLoading: boolean;
  public familyVariants: LabelValue<string>[];
  public flFunctions: LabelValue<string>[];
  public searchObject: FindBidoFlsBySearchCriteriaInput;
  public familyVariant: string;
  public showFunctionalLocationModelDialog: boolean;
  public displayModelPopin: boolean;
  public isReadOnlyForm: boolean;
  private readonly resultsTableExportName: string;
  public globalFilterTxt: string | undefined;
  public resultsTableDataSource: TableDataSource<BidoFlDTO>;

  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly sessionService: SessionService,
    private readonly functionalLocationSearchService: FunctionalLocationSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.isLoading = false;
    this.familyVariants = [];
    this.flFunctions = [];

    this.searchObject = {
      bidoFlDTOCriteria: {},
      familyVariantCode: undefined,
      modelCode: undefined
    };
    this.isReadOnlyForm = false;
    this.displayModelPopin = false;

    this.loadfamilyVariant();
    this.loadFlFunction();
    this.showFunctionalLocationModelDialog = false;
    this.resultsTableExportName = 'functionLocation-search-list';
    this.initResultsTableDataSource();
  }

  public getComponentName(): string {
    return 'FunctionalLocationSearchComponent';
  }

  // To bind dropdown family variant
  private loadfamilyVariant(): void {
    this.functionalLocationSearchService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
      // this.searchObject.familyVariantCode = list[0].value;
      this.familyVariants = list || [];
    });
  }

  // To bind dropdown function
  private loadFlFunction(): void {
    forkJoin({
      flFunctions: this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP),
      authorizedFunctions: this.functionalLocationSearchService.fetchPropertyValuesTableData(
        FunctionalLocationSearchComponent.PROPERTY_ID
      )
    }).subscribe((results) => {
      const flFunctions = results.flFunctions || [];
      const authorizedFunctions = results.authorizedFunctions.find(
        (cpt) => `${cpt.enPropertiesValueId}` === `${this.propertyValueId}`
      );
      this.flFunctions = flFunctions.filter(
        (fl) =>
          authorizedFunctions &&
          authorizedFunctions.propertiesValue &&
          authorizedFunctions.propertiesValue.split(';').find((s) => s === fl.value)
      );
    });
  }

  public showDialog() {
    this.displayModelPopin = true;
    this.searchObject = this.searchObject;
  }

  /*
     <summary>Set selected customer code in corresponding input box</summary>
     */
  public setSelectedCode(returnedObject, type) {
    if (type === 'model') {
      this.searchObject.modelCode = returnedObject.modelCode;
      this.displayModelPopin = false;
    }
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initResultsTableDataSource(): void {
    const defaultSortMethod = (data1: BidoFlDTO, data2: BidoFlDTO, field: string) => {
      let value1;
      let value2;
      value1 = data1[field];
      value2 = data2[field];

      let result: number;
      if (field === 'flOrderNumber') {
        result = this.sortByOrderNumber(data1, data2);
      } else {
        if (!ObjectUtils.isDefined(value1) && ObjectUtils.isDefined(value2)) {
          result = -1;
        } else if (ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
          result = 1;
        } else if (!ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          result = JSON.stringify(value1).localeCompare(JSON.stringify(value2));
        }
      }

      return result;
    };
    this.resultsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'flCode',
          translateKey: this.getTranslateKey('flCode'),
          width: '15%'
        },
        {
          field: 'flDescription',
          translateKey: this.getTranslateKey('flDescription'),
          width: '25%'
        },
        {
          field: 'flFunction',
          translateKey: this.getTranslateKey('flFunction'),
          width: '15%'
        },
        {
          field: 'flIsMel',
          translateKey: this.getTranslateKey('flIsMel'),
          width: '7%'
        },
        {
          field: 'flNominalQuantity',
          translateKey: this.getTranslateKey('flNominalQuantity'),
          width: '14%'
        },
        {
          field: 'flRequiredQuantity',
          translateKey: this.getTranslateKey('flRequiredQuantity'),
          width: '14%'
        },
        {
          field: 'flOrderNumber',
          translateKey: this.getTranslateKey('flOrderNumber'),
          width: '10%'
        }
      ],
      data: [],
      itemsPerPage: 30,
      customSort: defaultSortMethod
    });
  }

  public resetSearchCriteria(): void {
    this.searchObject = {
      bidoFlDTOCriteria: {},
      familyVariantCode: undefined,
      modelCode: undefined
    };
    this.loadfamilyVariant();
  }

  /* Search functional location */
  public search(): void {
    this.loadFunctionalLocations();
  }

  // To bind the table function locations
  private loadFunctionalLocations(bidoFlCriteria?: BidoFlDTO): void {
    let criteria: FindBidoFlsBySearchCriteriaInput;
    if (bidoFlCriteria) {
      criteria = {
        bidoFlDTOCriteria: bidoFlCriteria
      };
    } else {
      criteria = {
        bidoFlDTOCriteria: this.searchObject.bidoFlDTOCriteria,
        familyVariantCode: this.familyVariant ? [this.familyVariant] : undefined,
        modelCode: this.searchObject.modelCode
      };
    }
    this.isLoading = true;
    this.functionalLocationSearchService.searchFunctionalLocationList(criteria).subscribe(
      (results) => {
        if (results) {
          results.list.forEach((result) => {
            if (
              result.flFunction &&
              this.flFunctions.filter((flFunctions) => flFunctions.value === result.flFunction)[0]
            ) {
              result.flFunction = this.flFunctions.filter(
                (flFunctions) => flFunctions.value === result.flFunction
              )[0].label;
            }
          });
          if (
            criteria.bidoFlDTOCriteria.flFunction &&
            (this.isHardpoint(criteria.bidoFlDTOCriteria.flFunction) ||
              this.isOMESpecifDassault(criteria.bidoFlDTOCriteria.flFunction))
          ) {
            const tmpNullOrder = results.list.filter((fl) => !fl.flOrderNumber && fl.flOrderNumber !== 0);
            results.list = results.list.filter((fl) => !!fl.flOrderNumber);
            results.list.sort(this.sortByOrderNumber);
            results.list = results.list.concat(tmpNullOrder);
          }
          this.resultsTableDataSource.setData(results.list);
        }
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFLResults'));
        this.isLoading = false;
      }
    );
  }

  private sortByOrderNumber(fl1: BidoFlDTO, fl2: BidoFlDTO): number {
    if (fl1 && fl1.flOrderNumber) {
      if (fl2 && fl2.flOrderNumber) {
        return fl1.flOrderNumber > fl2.flOrderNumber ? 1 : -1;
      }
    }

    return 0;
  }

  public openFunctionalLocationLink(functionLocation: BidoFlDTO) {
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
      this.openFunctionalLocation(selectedObjectId, ComponentOpenMode.Read);
    }
  }

  /* Open Functional Location form for selected rows in consult mode */
  public openSelectedFunctionalLocation(): void {
    this.resultsTableDataSource.dataSelection.forEach((functionLocation) => {
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
        this.openFunctionalLocation(selectedObjectId, ComponentOpenMode.Read);
      }
    });
  }

  /* Delete selected functional location */
  public deleteSelectedFunctionalLocation(): void {
    if (this.resultsTableDataSource.hasDataSelection) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          const selectedBireFunctionalLocationDTOId = new Array<BidoFlDTOId>();
          this.resultsTableDataSource.dataSelection.forEach((functionLocation) => {
            if (functionLocation) {
              if (!!functionLocation.flCode) {
                const bireFunctionalLocationDTOId: BidoFlDTOId = {
                  flCode: functionLocation.flCode
                };
                selectedBireFunctionalLocationDTOId.push(bireFunctionalLocationDTOId);
              } else {
                super.throwUnboundLocalError('deleteSelectedFunctionalLocation', 'functionLocation.flCode');
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
        this.resultsTableDataSource.sanitizedData.map((data) => {
          const fieldsLess = { ...data };
          delete fieldsLess.flFlCode;
          delete fieldsLess.flItems;
          delete fieldsLess.flDelayCategory;
          delete fieldsLess.flComments;
          delete fieldsLess.statusDate;
          delete fieldsLess.statusState;
          delete fieldsLess.statusUser;

          return fieldsLess;
        }),
        this.resultsTableExportName,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  // To open create popup for function location
  public openNewFunctionalLocation(): void {
    this.openFunctionalLocation(undefined, ComponentOpenMode.Create);
  }

  // tslint:disable-next-line:no-any
  private openFunctionalLocation(objectId: any | null, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.FunctionalLocationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FunctionalLocationFormComponent',
      objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.resultsTableDataSource.dataSelection = [];
  }

  public resetFilter(): void {
    this.globalFilterTxt = undefined;
  }

  public hasOneSelectedDataAndTypeOfHardpointOrOME(): boolean {
    if (this.flFunctions && this.resultsTableDataSource.dataSelectionCount === 1) {
      const flFunction = this.getFlFunctionValueFromLabel(this.resultsTableDataSource.dataSelection[0].flFunction);
      if (flFunction) {
        return !!(
          (this.isHardpoint(flFunction) || this.isOMESpecifDassault(flFunction)) &&
          this.resultsTableDataSource.dataSelection[0].flOrderNumber
        );
      }
    }

    return false;
  }
  private getFlFunctionValueFromLabel(flFunction: string | undefined): string {
    return this.flFunctions
      .filter((fl) => fl.label === this.resultsTableDataSource.dataSelection[0].flFunction)
      .map((fl) => fl.value)[0];
  }
  private isHardpoint(flFunction: string): boolean {
    return flFunction === this.aWPropertiesConstants.ITEM_FAMILY_CODE_HARDPOINT_KEY;
  }

  public isOMESpecifDassault(flFunction: string): boolean {
    return this.sessionService.isSpecificDassault && flFunction === this.aWPropertiesConstants.FAMILY_FUNCTION_OME_KEY;
  }

  public decOrderNumber() {
    if (this.hasOneSelectedDataAndTypeOfHardpointOrOME()) {
      const fl = { ...this.resultsTableDataSource.dataSelection[0] };
      if (fl.flOrderNumber && fl.flOrderNumber > 1) {
        fl.flOrderNumber = fl.flOrderNumber - 1;
        this.updateFl(fl);
      }
    }
  }

  public incOrderNumber() {
    if (this.hasOneSelectedDataAndTypeOfHardpointOrOME()) {
      const fl = { ...this.resultsTableDataSource.dataSelection[0] };
      if (fl.flOrderNumber) {
        fl.flOrderNumber = fl.flOrderNumber + 1;
        this.updateFl(fl);
      }
    }
  }

  private updateFl(fl: BidoFlDTO) {
    const flFunction = this.flFunctions.find(
      (_fl) => _fl.label === this.resultsTableDataSource.dataSelection[0].flFunction
    );
    if (flFunction) {
      fl.flFunction = flFunction.value;
    }
    this.functionalLocationSearchService.createUpdateFl(fl).subscribe((_fl) => {
      const bidoFlDTOCriteria: BidoFlDTO = { flFunction: this.getFlFunctionValueFromLabel(fl.flFunction) };
      this.loadFunctionalLocations(bidoFlDTOCriteria);
    });
  }

  public showConfigurationSheet(): boolean {
    if (this.searchObject.bidoFlDTOCriteria) {
      return (
        this.searchObject.bidoFlDTOCriteria.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_OME_KEY ||
        this.searchObject.bidoFlDTOCriteria.flFunction === AWPropertiesConstants.FAMILY_FUNCTION_OME_COMPONENT_KEY
      );
    }

    return false;
  }

  public onFlFunctionsSelected(): void {
    this.searchObject.bidoFlDTOCriteria.flIsInConfSheet = false;
  }
}
