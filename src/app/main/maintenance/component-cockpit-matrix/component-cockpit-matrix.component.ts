import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep, maxBy as _maxBy } from 'lodash-es';
import { SelectItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { InspectionMatrixOutput } from '../../../shared/types/api-output-types/inspection-matrix-output.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';

import { ComponentCockpitMatrixService } from './component-cockpit-matrix.service';

interface ComponentCockpitMatrixFilter {
  mroCenterList?: string;
  customerList?: string;
  matchingList?: string;

  sentenceList?: string;
  decisionList?: string;
  typeList?: string;
  statusList?: string[];

  familyVariantCriteria?: string;
  itemCriteria?: string;
  pnCriteria?: string;
}

@Component({
  selector: 'aw-component-cockpit-matrix',
  templateUrl: './component-cockpit-matrix.component.html',
  styleUrls: ['./component-cockpit-matrix.component.scss']
})
export class ComponentCockpitMatrixComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  public cockpitMatrixTable: InspectionMatrixOutput[];
  public cockpitMatrixTableDisplayed: InspectionMatrixOutput[];
  public cockpitMatrixTableCols: TableColumn[];
  public selectedCockpitMatrixRows: InspectionMatrixOutput[];
  public currentCockpitMatrix: InspectionMatrixOutput;
  public showDialogComponentCockpitMatrix: boolean;
  public isLoading: boolean;
  public showImportPopup: boolean;
  public sentenceList: LabelValue<string>[];
  public decisionList: LabelValue<string>[];
  public typeList: LabelValue<string>[];
  public mroList: LabelValue<string>[];
  public familyList: LabelValue<string>[];
  public variantList: LabelValue<string>[];
  public customerList: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  public matchingList: LabelValue<string>[];
  public familyVariantListToFilter: LabelValue<string>[];
  public itemListToFilter: LabelValue<string>[];
  public pnListToFilter: LabelValue<string>[];
  public cockpitMatrixRowsToBeDeleted: string[];
  public showSaveSpinner: boolean;

  // Filter
  public searchSubAssemblyGlobalFilterChanged: Subject<string>;

  // Overlay
  public progressList: SelectItem[];
  public itemFamiliesList: SelectItem[];
  public configurationList: SelectItem[];
  public mroCenterList: SelectItem[];
  public searchCriteria: ComponentCockpitMatrixFilter;
  public searchGlobalFilter: string;
  public filtersVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    public componentCockpitMatrixService: ComponentCockpitMatrixService,
    public confirmationService: ConfirmationService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.currentCockpitMatrix = {};
    this.showDialogComponentCockpitMatrix = false;
    this.cockpitMatrixTable = [];
    this.cockpitMatrixRowsToBeDeleted = [];
    this.cockpitMatrixTableCols = [
      { field: 'lineNumber', alignment: 'left', width: '3%' },
      { field: 'sentence', alignment: 'left', width: '12%' },
      { field: 'type', alignment: 'left', width: '10%' },
      { field: 'mroCenter', alignment: 'left', width: '12%' },
      { field: 'customer', alignment: 'left', width: '14%' },
      { field: 'matching', alignment: 'left', width: '10%' },
      { field: 'decision', alignment: 'left', width: '12%' },
      { field: 'favoriteCombination', alignment: 'left', width: '7%' },
      { field: 'favouriteDecision', alignment: 'left', width: '7%' },
      { field: 'status', alignment: 'left', width: '10%' }
    ];
    this.selectedCockpitMatrixRows = [];
    this.sentenceList = [];
    this.decisionList = [];
    this.typeList = [];
    this.mroList = [];
    this.familyList = [];
    this.variantList = [];
    this.customerList = [];
    this.statusList = [];
    this.matchingList = [];
    this.showImportPopup = false;

    this.loadSentence();
    this.loadDecision();
    this.loadType();
    this.loadStatus();
    this.loadCustomer();
    this.loadFamily();
    this.loadMatching();
    this.loadMro();

    this.loadComponentCockpitMatrixTable();
    this.filtersVisible = true;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.searchCriteria = {};
    this.setControlGlobalFilter();

    this.displayComponentContext('global.search', false);
  }

  public getComponentName(): string {
    return 'ComponentCockpitMatrixComponent';
  }

  // open excel template
  public openTemplatePopup(): void {
    this.showImportPopup = true;
  }

  private loadComponentCockpitMatrixTable(): void {
    this.isLoading = true;
    this.componentCockpitMatrixService.getInspectionMatrix().subscribe(
      (results) => {
        this.cockpitMatrixTable = results;
        this.cockpitMatrixTableDisplayed = _cloneDeep(this.cockpitMatrixTable);

        this.familyVariantListToFilter = results
          .filter((e) => e.family)
          .map((elmt) => {
            let familyVariant = '';
            if (elmt.family && elmt.variant) {
              familyVariant = familyVariant.concat(elmt.family, ' ', elmt.variant);
            }
            const retVal: LabelValue<string> = {
              label: familyVariant,
              value: familyVariant
            };

            return retVal;
          });

        this.itemListToFilter = results
          .filter((e) => e.item)
          .map((elmt) => {
            const retVal: LabelValue<string> = {
              label: elmt.item !== undefined ? elmt.item : '',
              value: elmt.item !== undefined ? elmt.item : ''
            };

            return retVal;
          });

        this.pnListToFilter = results
          .filter((e) => e.pn)
          .map((elmt) => {
            const retVal: LabelValue<string> = {
              label: elmt.pn !== undefined ? elmt.pn : '',
              value: elmt.pn !== undefined ? elmt.pn : ''
            };

            return retVal;
          });

        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  public save(): void {
    let errorMessage = '';
    this.cockpitMatrixTable.forEach((row, index) => {
      if (!row.sentence || !row.decision) {
        errorMessage = this.getTranslateKey('showValidationMsg');
      }
      // Reset line number for save operation
      row.lineNumber = (index + 1).toString();
    });
    if (errorMessage) {
      this.messageService.showErrorMessage(errorMessage);

      return;
    }

    this.showSaveSpinner = true;
    this.componentCockpitMatrixService.saveInspectionMatrix(this.cockpitMatrixTable).subscribe(
      () => {
        this.componentCockpitMatrixService.removeBidoPreferenceUser(this.cockpitMatrixRowsToBeDeleted).subscribe(() => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveComponentCockpitMatrix'));
          this.loadComponentCockpitMatrixTable();
          this.selectedCockpitMatrixRows = [];
          this.cockpitMatrixRowsToBeDeleted = [];
        });
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  public addCockpitMatrixRecord(): void {
    if (this.cockpitMatrixTable) {
      const maxValObj = _maxBy(this.cockpitMatrixTable, (row) => {
        return Number(row.lineNumber);
      });
      const maxVal: number = maxValObj && maxValObj.lineNumber ? Number(maxValObj.lineNumber) + 1 : 1;
      const obj: InspectionMatrixOutput = {
        lineNumber: maxVal.toString(),
        favoriteCombination: false,
        favouriteDecision: false
      };
      this.cockpitMatrixTable.unshift(obj);
    }
  }

  public deleteCockpitMatrixRecord(): void {
    this.selectedCockpitMatrixRows.forEach((res) => {
      if (!!res.bidoPreferenceUserDTO && res.bidoPreferenceUserDTO.preferenceUserId) {
        this.cockpitMatrixRowsToBeDeleted.push(res.bidoPreferenceUserDTO.preferenceUserId);
      }
      const rowIndex = this.cockpitMatrixTable.indexOf(res);
      this.cockpitMatrixTable.splice(rowIndex, 1);
    });
    this.selectedCockpitMatrixRows = [];
  }

  public deleteSingleCockpitMatrixRecord(matrixRecord: InspectionMatrixOutput): void {
    if (!!matrixRecord.bidoPreferenceUserDTO && matrixRecord.bidoPreferenceUserDTO.preferenceUserId) {
      this.cockpitMatrixRowsToBeDeleted.push(matrixRecord.bidoPreferenceUserDTO.preferenceUserId);
    }
    let rowIndex = this.cockpitMatrixTableDisplayed.indexOf(matrixRecord);
    this.cockpitMatrixTableDisplayed.splice(rowIndex, 1);

    rowIndex = this.cockpitMatrixTable.indexOf(matrixRecord);
    this.cockpitMatrixTable.splice(rowIndex, 1);
  }

  public updateCockpitMatrix(cockpitMatrix: InspectionMatrixOutput): void {
    if (this.currentCockpitMatrix && this.currentCockpitMatrix.lineNumber) {
      // update of main table
      const referingEntry = this.getInspectionMatrixByRowId(
        this.currentCockpitMatrix.lineNumber,
        this.cockpitMatrixTable
      );
      if (referingEntry) {
        referingEntry.family = cockpitMatrix.family;
        referingEntry.variant = cockpitMatrix.variant;
        referingEntry.item = cockpitMatrix.item;
        referingEntry.pn = cockpitMatrix.pn;
      }

      // update of displayed table
      const displayedEntry = this.getInspectionMatrixByRowId(
        this.currentCockpitMatrix.lineNumber,
        this.cockpitMatrixTableDisplayed
      );
      if (displayedEntry) {
        displayedEntry.family = cockpitMatrix.family;
        displayedEntry.variant = cockpitMatrix.variant;
        displayedEntry.item = cockpitMatrix.item;
        displayedEntry.pn = cockpitMatrix.pn;
      }
    }
  }

  public reloadMatrix() {
    this.loadComponentCockpitMatrixTable();
  }

  public openReferentialDialog(cockpitMatrix: InspectionMatrixOutput) {
    this.showDialogComponentCockpitMatrix = true;
    this.currentCockpitMatrix = { ...cockpitMatrix };
  }

  private loadSentence(): void {
    this.propertiesService.getValue(GenericPropertyConstants.SENTENCE_MAP_FOR_BBIS).subscribe((results) => {
      this.sentenceList = results;
    });
  }

  public loadDecision(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DECISION_MAP_FOR_BBIS).subscribe((results) => {
      this.decisionList = results;
    });
  }

  private loadType(): void {
    this.componentCockpitMatrixService.fillMatrixType().subscribe((results) => {
      this.typeList = results;
    });
  }

  private loadMatching(): void {
    this.componentCockpitMatrixService.fillMatrixMatching().subscribe((results) => {
      this.matchingList = results;
    });
  }

  private loadStatus(): void {
    this.componentCockpitMatrixService.fillMatrixStatus().subscribe((results) => {
      this.statusList = results;
    });
  }

  private loadMro(): void {
    this.componentCockpitMatrixService.getMrocenter().subscribe((results) => {
      this.mroList = results;
    });
  }

  private loadCustomer(): void {
    this.componentCockpitMatrixService.getCustomer().subscribe((results) => {
      this.customerList = results;
    });
  }

  private loadFamily(): void {
    this.componentCockpitMatrixService.getFamily().subscribe((results) => {
      this.familyList = results;
    });
  }

  public getTypeState(row: InspectionMatrixOutput) {
    return row.type === 'a.2';
  }

  // tslint:disable-next-line:no-any
  public toggleRowDetailsVisibility(row: any): void {
    row.expand = !row.expand;
  }

  // tslint:disable-next-line:no-any
  public uploadExcel(excelData: any): void {
    return;
  }

  /*********************************************
   * Sentence Label Conversion
   *********************************************/
  public getSentenceValue(label: string): string | undefined {
    const dto = this.sentenceList.filter((res) => res.value === label);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * Decision Label Conversion
   *********************************************/
  public getDecisionValue(value: string): string | undefined {
    const dto = this.decisionList.filter((res) => res.value === value);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * Type Label Conversion
   *********************************************/
  public getTypeValue(value: string): string | undefined {
    const dto = this.typeList.filter((res) => res.value === value);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * Customer Label Conversion
   *********************************************/
  public getCustomerValue(value: string): string | undefined {
    const dto = this.customerList.filter((res) => res.value === value);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * MRO Center Label Conversion
   *********************************************/
  public getMROCenterValue(value: string): string | undefined {
    const dto = this.mroList.filter((res) => res.value === value);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * Matching Label Conversion
   *********************************************/
  public getMatchingValue(value: string): string | undefined {
    const dto = this.matchingList.filter((res) => res.value === value);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /**********************************
   * FILTER FUNCTIONALITY
   **********************************/
  public resetTableFilters() {
    this.searchGlobalFilter = '';
    this.searchCriteria = {};
  }

  private setControlGlobalFilter(): void {
    this.resetTableFilters();
    this.searchSubAssemblyGlobalFilterChanged = new Subject();
    this.searchSubAssemblyGlobalFilterChanged
      .pipe(debounceTime(ComponentCockpitMatrixComponent.SEARCH_TEXT_DEBOUNCE_TIME), takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.updateDisplayOfMatrix();
      });
  }

  private updateDisplayOfMatrix(): void {
    this.cockpitMatrixTableDisplayed = [];
    this.cockpitMatrixTableDisplayed = _cloneDeep(this.cockpitMatrixTable);
    this.cockpitMatrixTableDisplayed = this.cockpitMatrixTableDisplayed.filter((elt) => {
      return this.treeNodeMatchFilters(elt, this.searchCriteria);
    });
  }

  public filterWithCriteria() {
    this.searchGlobalFilter = '';
    if (Object.keys(this.searchCriteria).length === 0) {
      this.cockpitMatrixTableDisplayed = _cloneDeep(this.cockpitMatrixTable);
    } else {
      this.searchSubAssemblyGlobalFilterChanged.next();
    }
  }

  private treeNodeMatchFilters(
    nodeData: InspectionMatrixOutput,
    searchCriteria: ComponentCockpitMatrixFilter
  ): boolean {
    // ---- 1. Filters on Target Referential Data ----
    // ---- 1.1 Family-Variant
    let familyFilter = true;
    if (searchCriteria.familyVariantCriteria) {
      if (!!nodeData.family && !!nodeData.variant) {
        let nodeDataFamilyVariant = '';
        nodeDataFamilyVariant = nodeDataFamilyVariant.concat(nodeData.family, ' ', nodeData.variant);
        familyFilter = searchCriteria.familyVariantCriteria === nodeDataFamilyVariant;
      } else {
        familyFilter = false;
      }
    }

    // ---- 1.2 Item
    let itemFilter = true;
    if (searchCriteria.itemCriteria) {
      if (!!nodeData.item) {
        itemFilter = searchCriteria.itemCriteria === nodeData.item;
      } else {
        itemFilter = false;
      }
    }

    // ---- 1.3 P/N
    let pnFilter = true;
    if (searchCriteria.pnCriteria) {
      if (!!nodeData.pn) {
        pnFilter = searchCriteria.pnCriteria === nodeData.pn;
      } else {
        pnFilter = false;
      }
    }

    //  ---- 2. Filters on Conditions ----
    // ---- 2.1 Customer
    let customerFilter = true;
    if (searchCriteria.customerList) {
      if (!!nodeData.customer) {
        customerFilter = searchCriteria.customerList === nodeData.customer;
      } else {
        customerFilter = false;
      }
    }

    // ---- 2.2 MRO Center
    let mroCenterFilter = true;
    if (searchCriteria.mroCenterList) {
      if (!!nodeData.mroCenter) {
        mroCenterFilter = searchCriteria.mroCenterList === nodeData.mroCenter;
      } else {
        mroCenterFilter = false;
      }
    }

    // ---- 2.3 Matching
    let matchingFilter = true;
    if (searchCriteria.matchingList) {
      if (!!nodeData.matching) {
        matchingFilter = searchCriteria.matchingList === nodeData.matching;
      } else {
        matchingFilter = false;
      }
    }

    // ---- Filters on Actions ----
    // ---- 3.1 Sentence
    let sentenceFilter = true;
    if (searchCriteria.sentenceList) {
      if (!!nodeData.sentence) {
        sentenceFilter = searchCriteria.sentenceList === nodeData.sentence;
      } else {
        sentenceFilter = false;
      }
    }

    // ---- 3.2 Decision
    let decisionFilter = true;
    if (searchCriteria.decisionList) {
      if (!!nodeData.decision) {
        decisionFilter = searchCriteria.decisionList === nodeData.decision;
      } else {
        decisionFilter = false;
      }
    }

    // ---- 3.3 Type
    let typeFilter = true;
    if (searchCriteria.typeList) {
      if (!!nodeData.type) {
        typeFilter = searchCriteria.typeList === nodeData.type;
      } else {
        typeFilter = false;
      }
    }

    return (
      familyFilter &&
      itemFilter &&
      pnFilter &&
      customerFilter &&
      mroCenterFilter &&
      matchingFilter &&
      sentenceFilter &&
      decisionFilter &&
      typeFilter
    );
  }

  private getInspectionMatrixByRowId(rowId: string, referingTable: InspectionMatrixOutput[]): InspectionMatrixOutput {
    return referingTable.filter((e) => e.lineNumber === rowId)[0];
  }
}
