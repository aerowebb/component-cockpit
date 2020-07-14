import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { BidoFlDTO } from '../../types/api-types/bido-fl-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

import { DialogSearchFunctionalLocationService } from './dialog-search-functional-location.service';

@Component({
  selector: 'aw-dialog-search-functional-location',
  templateUrl: 'dialog-search-functional-location.component.html'
})
export class DialogSearchFunctionalLocationComponent extends DialogComponent implements OnInit {
  public static readonly PROPERTY_ID = 1;

  public flFunctions: LabelValue<string>[];
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidoFlDTO>;
  public selectedObject: BidoFlDTO;
  public searchObject: FindBidoFlsBySearchCriteriaInput;

  @Input()
  public title: string;

  @Input()
  public familyVariant: string[];

  @Input()
  public authorizedFunctionsId?: number;

  @Input()
  public onlyValidatedConfOpe: boolean = false;

  @Input()
  public includeUndefinedFunction: boolean = true;

  @Output()
  public onSelected = new EventEmitter<BidoFlDTO>();

  public constructor(
    public dialogSearchFunctionalLocationService: DialogSearchFunctionalLocationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchFunctionalLocationComponent');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.flFunctions = [];
    this.searchObject = {
      bidoFlDTOCriteria: {},
      familyVariantCode: undefined,
      modelCode: undefined
    };
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'flCode', alignment: 'left', width: '15%' },
      { field: 'flDescription', alignment: 'left', width: '25%' },
      { field: 'flFunction', alignment: 'left', width: '10%' },
      { field: 'flIsMel', alignment: 'center', width: '10%' },
      { field: 'flIsOpeConf', alignment: 'center', width: '10%' },
      { field: 'flNominalQuantity', alignment: 'left', width: '15%' },
      { field: 'flRequiredQuantity', alignment: 'left', width: '15%' }
    ];
  }

  public ngOnInit(): void {
    this.loadFlFunction();
  }

  /*
    <summary>Search contacts for operator or owner</summary>
    */
  public searchFunctionalLocation(): void {
    this.searchObject.familyVariantCode = this.familyVariant;

    this.dialogSearchFunctionalLocationService.searchFunctionalLocationList(this.searchObject).subscribe(
      (results) => {
        if (results) {
          this.selectedObject = {};
          if (this.includeUndefinedFunction) {
            this.resultsTable = results;
          } else {
            const resCopy = { ...results };
            resCopy.list = results.list.filter((elem) => !!elem.flFunction);
            this.resultsTable = resCopy;
          }
          if (this.searchObject.bidoFlDTOCriteria.flIsOpeConf && this.onlyValidatedConfOpe) {
            this.resultsTable.list = this.resultsTable.list.filter(
              (fl) => fl.statusState === AWPropertiesConstants.FLOC_STATUS_VALIDATED_KEY
            );
          }
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  // To bind dropdown function
  private loadFlFunction(): void {
    if (!this.authorizedFunctionsId) {
      this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
        this.flFunctions = results;
      });
    } else {
      forkJoin({
        flFunctionsRef: this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP),
        authorizedFunctions: this.dialogSearchFunctionalLocationService.fetchPropertyValuesTableData(
          DialogSearchFunctionalLocationComponent.PROPERTY_ID
        )
      }).subscribe((results) => {
        const authorizedFunctions = results.authorizedFunctions.find(
          (cpt) => `${cpt.enPropertiesValueId}` === `${this.authorizedFunctionsId}`
        );
        if (authorizedFunctions) {
          this.flFunctions =
            results.flFunctionsRef.filter((lv) => {
              if (authorizedFunctions.propertiesValue) {
                return authorizedFunctions.propertiesValue.split(';').includes(lv.value);
              } else {
                return false;
              }
            }) || [];
        }
      });
    }
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.display = false;
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedObject = {};
  }

  // Clean all the object on rerender
  public onShow(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.flCode;
  }
}
