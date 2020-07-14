import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { GetParentsByEquipmentRecursivelyAtDateInputDTO } from '../../../../shared/types/api-input-types/install-asset/get-parents-by-equipment-recursively-at-date-input-dto.interface';
import { GetEquipmentsAssociatedToFlCodeDTO } from '../../../../shared/types/api-output-types/fleet-business/get-equipments-associated-to-fl-code-dto.interface';
import { AssetsToBeInstalledOutputDTO } from '../../../../shared/types/api-output-types/fleet-history/assets-to-be-installed-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { InstallAssetService } from '../install-asset.service';

@Component({
  selector: 'aw-dialog-install-asset',
  templateUrl: './dialog-install-asset.component.html'
})
export class DialogInstallAssetComponent extends DialogComponent implements OnInit {
  @Input()
  public selectedAsset: AssetsToBeInstalledOutputDTO | undefined;

  @Input()
  public superiorCode: string | undefined;

  @Input()
  public date: Date | undefined;

  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<AssetsToBeInstalledOutputDTO>;

  @Input()
  public isSuperiorAircraft: boolean;

  public assetSelected: AssetsToBeInstalledOutputDTO;

  private superiorBidoEquipment: BidoEquipmentDTO;

  public functionLocationList: LabelValue<string>[];
  public itemList: LabelValue<string>[];
  public positionList: LabelValue<string>[];

  public isFunctionalItemStructure: boolean;
  public impactInstalledBase: boolean;
  public isFLFree: boolean = true;

  public constructor(
    private readonly installAssetService: InstallAssetService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogInstallAssetComponent');
    this.onValidated = new EventEmitter<AssetsToBeInstalledOutputDTO>();
    this.superiorBidoEquipment = {};
    this.assetSelected = {};
  }

  public ngOnInit() {
    this.positionList = [];
    this.functionLocationList = [];
    this.itemList = [];

    this.getFunctionalItemStructure();
    this.getImpactInstalledBase();

    if (!!this.selectedAsset) {
      this.assetSelected = { ...this.selectedAsset };
      this.initilizeDialog();
    }
  }

  /**
   * Rendering dialog dropdowns
   */
  private initilizeDialog() {
    this.findBidoEquipment();

    this.getPositionDropdownList();

    // Item dropdown
    this.getItemDropdownList();
  }

  /**
   * Fill Position dropdown list
   */
  private getPositionDropdownList() {
    // tslint:disable-next-line:no-string-literal
    if (!!this.assetSelected) {
      // tslint:disable-next-line:no-string-literal
      if (this.assetSelected['assetFunctionType'] === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        this.propertiesService.getValue(GenericPropertyConstants.ENGINE_POSITION_MAP).subscribe((results) => {
          this.positionList = results;
          this.assetSelected.position = this.positionList.length !== 0 ? this.positionList[0].value : undefined;
        });
      } else {
        this.propertiesService.getValue(GenericPropertyConstants.POSITION_MAP).subscribe((results) => {
          this.positionList = results;
          this.assetSelected.position = this.positionList.length !== 0 ? this.positionList[0].value : undefined;
        });
      }
    }
    this.assetSelected.position = this.positionList.length !== 0 ? this.positionList[0].value : undefined;
  }

  /**
   * Render Item Dropdown
   */
  private getItemDropdownList() {
    if (!!this.assetSelected && !!this.assetSelected.assetPn && !!this.date && !!this.superiorCode) {
      const getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO = {
        assetCode: [this.assetSelected.assetPn],
        date: this.date,
        superiorCode: this.superiorCode
      };

      this.installAssetService.getItemDataList(getParentsByEquipmentRecursivelyAtDateInputDTO).subscribe((result) => {
        if (result.length > 0) {
          this.itemList = result;
          if (!!this.selectedAsset) {
            if (!this.selectedAsset.itemDataCode) {
              const data = result.filter((res) => !!res.value);
              this.assetSelected.itemDataCode = data[0].value;
              this.getFunctionLocationDropdownList();
            } else {
              this.resetList();
            }
          }
        } else {
          this.assetSelected.itemDataCode = undefined;
          this.assetSelected.funLocCode = undefined;
          this.getFunctionLocationDropdownList();
        }
      });
    }
  }

  /**
   * Render function location dropdown
   */
  private getFunctionLocationDropdownList() {
    if (!!this.date && !!this.superiorCode) {
      const getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO = {
        date: this.date,
        superiorCode: this.superiorCode
      };

      this.installAssetService
        .getFunctionalLocationDataMap(getParentsByEquipmentRecursivelyAtDateInputDTO)
        .subscribe((result) => {
          result.unshift({
            label: '',
            value: ''
          });
          this.functionLocationList = result;
          if (result.length > 0) {
            // Show sel
            if (!this.assetSelected.funLocCode) {
              this.assetSelected.funLocCode = result.length !== 0 ? this.functionLocationList[0].value : undefined;
            } else {
              const labelValueDto = result.filter((res) => res.label === this.assetSelected.funLocCode);

              if (!!labelValueDto) {
                this.assetSelected.funLocCode = labelValueDto[0].value;
              }
            }
          }
        });
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private findBidoEquipment() {
    const bidoId: BidoEquipmentDTOId = {
      equipmentCode: this.superiorCode
    };
    this.installAssetService.findBidoEquipment(bidoId).subscribe((res) => {
      this.superiorBidoEquipment = res;
      this.isSuperiorAircraft =
        res.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY ? true : false;

      if (!!this.selectedAsset) {
        if (!this.selectedAsset.itemDataCode) {
          this.getFunctionLocationDropdownList();
        } else {
          this.resetList();
        }
      }
    });
  }

  /**
   * On Validate
   */
  public onValidate() {
    if (this.validatePopup()) {
      this.selectedAsset = { ...this.assetSelected };
      this.onValidated.emit(this.selectedAsset);
      this.display = false;
    }
  }

  public getItemList() {
    if (!!this.superiorBidoEquipment && !!this.selectedAsset && !!this.assetSelected.funLocCode) {
      const dto: GetEquipmentsAssociatedToFlCodeDTO = {
        date: this.date,
        superiorCode: this.superiorCode,
        pnCode: this.selectedAsset.assetPn,
        fatherFamilyVariantCode: this.superiorBidoEquipment.familyVariantCode,
        functionLocationCode: this.assetSelected.funLocCode
      };
      this.installAssetService.isFLFree(dto).subscribe((resp) => {
        if (!resp) {
          this.messageService.showErrorMessage(this.getTranslateKey('tooltipNominalQuantity'));
          this.isFLFree = resp;
        } else {
          this.isFLFree = true;
          this.itemList = [];
          this.installAssetService.getItemRelatedToFLCode(dto).subscribe((res) => {
            if (res.length > 0) {
              this.itemList = res;
            } else {
              this.assetSelected.itemDataCode = undefined;
            }
          });
        }
      });
    } else {
      this.isFLFree = true;
      // Item dropdown
      this.getItemDropdownList();
    }
  }

  public resetList() {
    if (!this.assetSelected.itemDataCode) {
      this.assetSelected.funLocCode = undefined;
      this.getFunctionLocationDropdownList();
    } else {
      if (!!this.superiorBidoEquipment && !!this.selectedAsset) {
        const dto: GetEquipmentsAssociatedToFlCodeDTO = {
          date: this.date,
          superiorCode: this.superiorCode,
          pnCode: this.selectedAsset.assetPn,
          fatherFamilyVariantCode: this.superiorBidoEquipment.familyVariantCode,
          itemCode: this.assetSelected.itemDataCode
        };

        this.installAssetService.getFunctionalLocationLinkedToItem(dto).subscribe((res) => {
          if (res.length > 0) {
            this.functionLocationList = res;
            // this.assetSelected.funLocCode = res[0].value;
          }
        });
      }
    }
  }

  private getFunctionalItemStructure() {
    this.installAssetService.isFunctionalItemStructure().subscribe((result) => {
      this.isFunctionalItemStructure = result;
    });
  }

  private getImpactInstalledBase() {
    if (this.selectedAsset) {
      const getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO = {
        assetCode: [],
        date: this.date as Date,
        superiorCode: this.selectedAsset.assetCode as string
      };
      this.installAssetService
        .isLastConfigurationChange(getParentsByEquipmentRecursivelyAtDateInputDTO)
        .subscribe((result) => {
          this.impactInstalledBase = result;
        });
    }
  }

  private validatePopup(): boolean {
    if (this.isFunctionalItemStructure && this.impactInstalledBase) {
      if (!this.assetSelected.itemDataCode) {
        this.messageService.showErrorMessage(this.getTranslateKey('itemCodeRequired'));

        return false;
      } else {
        // TODO for function CODE
      }
    }

    return true;
  }
}
