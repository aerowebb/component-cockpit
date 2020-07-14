import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../shared/services/message.service';
import { FindAssetListConfigurationEventDTO } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-configuration-event-dto.interface';
import { FindAssetListInput } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-input.interface';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';

import { AssetsSelectionDialogService } from './assets-selection-dialog.service';

@Component({
  selector: 'aw-assets-selection-dialog',
  templateUrl: './assets-selection-dialog.component.html',
  styleUrls: ['./assets-selection-dialog.component.scss']
})
export class AssetsSelectionDialogComponent extends DialogComponent {
  public static readonly assetValue: string = 'asset';
  public static readonly fleetValue: string = 'fleet';

  public readonly component: typeof AssetsSelectionDialogComponent;
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  @Input()
  public showAssetsSelectionDialog: boolean;

  @Output()
  public onSelected = new EventEmitter<FindAssetListConfigurationEventDTO[]>();

  public showCustomerQuickSearchPopup: boolean;
  public displayValue: boolean;

  public minimize: boolean;

  public isLoading: boolean;

  public radio: string;
  public oldRadioValue: string;
  public searchObject: FindAssetListInput;

  public assetTypes: LabelValue<string>[];
  public familyVariants: LabelValue<string>[];
  public opStatuses: LabelValue<string>[];
  public warehouses: LabelValue<string>[];
  public functions: LabelValue<string>[];
  public fleets: LabelValue<string>[];

  public totalFilteredRows: number;
  public assetsTableCols: TableColumn[];
  public assetsTable: SearchResultsDTO<FindAssetListConfigurationEventDTO>;
  public selectedAssets: FindAssetListConfigurationEventDTO[];

  public constructor(
    private readonly assetSelectionDialogService: AssetsSelectionDialogService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'assetsSelectionDialog');
    this.component = AssetsSelectionDialogComponent;
    this.awPropertiesConstants = AWPropertiesConstants;

    this.showCustomerQuickSearchPopup = false;
    this.displayChange = new EventEmitter<boolean>();

    this.minimize = false;
    this.radio = this.component.assetValue;
    this.oldRadioValue = this.component.assetValue;
    this.searchObject = {};

    this.assetTypes = [];
    this.familyVariants = [];
    this.opStatuses = [];
    this.warehouses = [];
    this.functions = [];
    this.fleets = [];

    this.assetsTable = {
      list: [],
      moreResults: false
    };
    this.totalFilteredRows = 0;
    this.selectedAssets = [];

    this.assetsTableCols = [
      { field: 'equipmentText', width: '250px' },
      { field: 'equipmentFamilyVariantCode', width: '100px' },
      { field: 'equipmentRegistration', width: '100px' },
      { field: 'equipmentPn', width: '100px' },
      { field: 'equipmentDesignation', width: '110px' },
      { field: 'equipmentFunction', width: '90px' },
      { field: 'equipmentSn', width: '100px' },
      { field: 'equipmentSupAsset', width: '110px' },
      { field: 'equipmentOwner', width: '90px' },
      { field: 'equipmentOperator', width: '90px' },
      { field: 'equipmentLocation', width: '90px' }, // to be added in backend
      { field: 'equipmentOperationalStatus', width: '150px' },
      { field: 'equipmentCode', width: '150px' }
    ];

    this.loadDropdowns();

    this.isLoading = false;
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.totalFilteredRows = event.filteredValue.length;
  }

  // Fetching Dropdown data
  public loadDropdowns(): void {
    // Asset type dropdown
    this.assetSelectionDialogService.getAssetTypeList().subscribe((results) => {
      this.assetTypes = results || [];
      this.searchObject.assetType = this.assetTypes[0].value;
      this.hitFamilyVariantDropdownApi(this.searchObject.assetType);
      this.hitOperationalStatusDropdownApi(this.searchObject.assetType);
    });

    // Warehouse dropdown
    this.assetSelectionDialogService.getWarehouseDropdownList().subscribe((results) => {
      this.warehouses = results || [];
    });

    // Function dropdown
    this.assetSelectionDialogService.getFunctionList().subscribe((results) => {
      this.functions = results || [];
    });

    // Fleet dropdown
    this.assetSelectionDialogService.getBidoFleetsBySearchCriteria({}).subscribe((result) => {
      result.list.forEach((bidoFleetDTO) => {
        const fleet: LabelValue<string> = {
          label: !!bidoFleetDTO.fleetName
            ? `${bidoFleetDTO.fleetCode} - ${bidoFleetDTO.fleetName}`
            : (bidoFleetDTO.fleetCode as string),
          value: bidoFleetDTO.fleetId as string
        };
        this.fleets.push(fleet);
      });
    });
  }

  // tslint:disable-next-line:no-any
  public onChangeAssetType(event: any) {
    if (event.value === '' || !this.notUndefinedAndNull(event.value)) {
      // Family variant dropdown
      this.hitFamilyVariantDropdownApi(event.value);
      this.hitOperationalStatusDropdownApi(event.value);
    }
  }

  private hitFamilyVariantDropdownApi(assetType: string) {
    this.assetSelectionDialogService.getFamilyVariantList(assetType).subscribe((results) => {
      this.familyVariants = results || [];
    });
  }

  private hitOperationalStatusDropdownApi(assetType: string) {
    this.assetSelectionDialogService.getOperationalStatusList(assetType).subscribe((results) => {
      this.opStatuses = results || [];
    });
  }

  private notUndefinedAndNull(property: string): boolean {
    const value = property !== undefined && property !== null ? false : true;

    return value;
  }

  public onCancel(): void {
    this.display = false;
  }

  public onValidate(): void {
    this.onSelected.emit(this.selectedAssets);
    this.display = false;
  }

  public openCustomerQuickSearchDialog(): void {
    this.showCustomerQuickSearchPopup = true;
  }

  public resetSearchCriteria(): void {
    this.radio = this.component.assetValue;
    this.searchObject.assetType = this.assetTypes[0].label;
    this.hitFamilyVariantDropdownApi(this.assetTypes[0].value);
    this.searchObject = {};
  }

  public searchAssets(): void {
    this.minimize = true;
    this.isLoading = true;

    this.assetSelectionDialogService.findAssetList(this.searchObject).subscribe((results) => {
      this.assetsTable = results;
      this.totalFilteredRows = this.assetsTable.list.length;
      this.isLoading = false;
    });
  }

  public radioButtonClick(newRadioValue: string) {
    if (this.oldRadioValue !== newRadioValue) {
      this.searchObject = {};
      if (newRadioValue === this.component.assetValue) {
        this.searchObject.assetType = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
      }
      this.oldRadioValue = newRadioValue;
      this.radio = newRadioValue;
      this.assetsTable.list = [];
    }
  }

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    if (Object.keys(event).length === 0) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
    this.searchObject.operationCriteria = event.customerCode;
  }
}
