import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BidoEquipmentOVSOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchEquipmentService } from './dialog-search-equipment.service';

/**
 * DEPRECATED: use `aw-dialog-equipment-list`
 */
@Component({
  selector: 'aw-dialog-search-equipment',
  templateUrl: 'dialog-search-equipment.component.html'
})
export class DialogSearchEquipmentComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidoEquipmentOVSOutputDTO>;
  public selectedObjectList: BidoEquipmentOVSOutputDTO[];
  public searchObject: BidoEquipmentDTO;

  // DropDown
  public propertyFunctions: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];

  @Input('equipment-code')
  public set qualificationCode(code: string) {
    this.searchObject = {};
    this.searchObject.equipmentCode = code;
  }

  @Input()
  public selectionMultiple: boolean;

  @Output()
  public onSelected = new EventEmitter<BidoEquipmentOVSOutputDTO | BidoEquipmentOVSOutputDTO[]>();

  @Input()
  public isGroundEquipment: boolean;

  @Input()
  public equipmentFunction: string;

  @Input()
  public searchAllEquipment: string;

  @Input()
  public pnChoose: string;

  public selectionMode = 'single';

  public constructor(
    public dialogSearchAssetService: DialogSearchEquipmentService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'equipmentPopin');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObjectList = [];

    this.selectionMultiple = false;

    this.resultsTableCols = [
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' }
    ];
  }

  public ngOnInit(): void {
    if (this.pnChoose) {
      this.searchObject.pnCode = this.pnChoose;
    }
    if (this.selectionMultiple) {
      this.selectionMode = 'multiple';
    } else {
      this.selectionMode = 'single';
    }

    this.loadDropdowns();

    if (!this.isGroundEquipment) {
      this.resultsTableCols.splice(1, 0, { field: 'registration', alignment: 'left' });
    }
  }

  @Input('equipment-code')
  public set assetCode(assetCode: string) {
    this.searchObject.equipmentCode = assetCode;
  }

  @Input('family-variant')
  public set familyVariant(familyVariant: string) {
    this.searchObject.familyVariantCode = familyVariant;
  }

  /*
    <summary>Search work package for operator or owner</summary>
    */
  public searchEquipments(): void {
    if (this.isGroundEquipment) {
      this.searchObject.equipmentFunction = this.equipmentFunction;
    }

    let observable;
    if (!this.isGroundEquipment) {
      if (!this.searchAllEquipment) {
        observable = this.dialogSearchAssetService.findBidoEquipmentsBySearchCriteria(this.searchObject);
      } else {
        observable = this.dialogSearchAssetService.findAllBidoEquipmentsBySearchCriteria(this.searchObject);
      }
    } else {
      observable = this.dialogSearchAssetService.findGroundEquipmentsBySearchCriteria(this.searchObject);
    }
    observable.subscribe(
      (results) => {
        if (results) {
          results.list.forEach((element) => {
            LabelValueUtils.stringValueToLabel<BidoEquipmentOVSOutputDTO>(
              element,
              'equipmentFunction',
              this.propertyFunctions
            );
            LabelValueUtils.stringValueToLabel<BidoEquipmentOVSOutputDTO>(
              element,
              'operationalStatus',
              this.propertyStatus
            );
          });
          this.resultsTable = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    if (this.selectionMultiple) {
      this.selectedObjectList.forEach((elt) => {
        LabelValueUtils.labelToStringValue<BidoEquipmentOVSOutputDTO>(elt, 'equipmentFunction', this.propertyFunctions);
        LabelValueUtils.labelToStringValue<BidoEquipmentOVSOutputDTO>(elt, 'operationalStatus', this.propertyStatus);
      });
    } else {
      LabelValueUtils.labelToStringValue<BidoEquipmentOVSOutputDTO>(
        JSON.parse(JSON.stringify(this.selectedObjectList)) as BidoEquipmentOVSOutputDTO,
        'equipmentFunction',
        this.propertyFunctions
      );
      LabelValueUtils.labelToStringValue<BidoEquipmentOVSOutputDTO>(
        JSON.parse(JSON.stringify(this.selectedObjectList)) as BidoEquipmentOVSOutputDTO,
        'operationalStatus',
        this.propertyStatus
      );
    }

    this.onSelected.emit(this.selectedObjectList);
    this.display = false;
  }

  public disableValidate(): boolean {
    return this.selectedObjectList.length === 0;
  }

  public loadStatus() {
    this.propertyStatus = [];
    const observable = !this.isGroundEquipment
      ? this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP)
      : this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP);

    observable.subscribe(
      (results) => {
        if (results) {
          this.propertyStatus = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnStatusList'));
      }
    );
  }

  public loadFunctions() {
    const observable = !this.isGroundEquipment
      ? this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP)
      : this.dialogSearchAssetService.fetchGroundEquipmentFunctionList();

    observable.subscribe(
      (results) => {
        if (results) {
          this.propertyFunctions = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFunctionList'));
      }
    );
  }

  private loadDropdowns() {
    // Load DropDown
    this.loadFunctions();
    this.loadStatus();
  }
}
