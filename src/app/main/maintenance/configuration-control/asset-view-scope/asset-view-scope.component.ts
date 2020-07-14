import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindCsnAndTsnValuesInput } from '../../../../shared/types/api-input-types/airworthiness-management/find-csn-and-tsn-values-input.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { ConfigurationControlService } from '../configuration-control.service';

@Component({
  selector: 'aw-configuration-control-asset-view-scope',
  styleUrls: ['../share.scss'],
  templateUrl: './asset-view-scope.component.html'
})
export class AssetViewScopeComponent extends GenericComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  public isAssetAircraft: boolean;

  @Input()
  public isAssetEngine: boolean;

  @Input()
  public isAssetEquipment: boolean;

  @Input()
  public isGroundEquipment: boolean;

  @Input()
  public set alert(value: string) {
    if (!!value) {
      this._alert = value;

      this.onLoad();
    }
  }
  public get alert(): string {
    return this._alert;
  }

  @Input()
  public set asset(value: BidoEquipmentDTO) {
    if (!!value) {
      this._asset = value;

      this.onLoad();
    }
  }
  public get asset(): BidoEquipmentDTO {
    return this._asset;
  }

  public alertLoading: boolean;
  public assetCsn: string;
  public assetLoading: boolean;
  public assetStatus: string;
  public assetTsn: string;
  public csnLabel: string;
  public tsnLabel: string;

  private _alert: string;
  private _asset: BidoEquipmentDTO;
  public groundEquipmentTypes: LabelValue<string>[];

  public constructor(
    private readonly configurationControlService: ConfigurationControlService,
    private readonly propertiesService: PropertiesService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;

    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'AppliedConfigurationManagementAssetViewScopeComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.alertLoading = false;
    this.assetCsn = '';
    this.assetLoading = false;
    this.assetStatus = '';
    this.assetTsn = '';
    this.csnLabel = '';
    this.tsnLabel = '';

    this._alert = '';
    this._asset = {};

    this.loadCsnLabel();
    this.loadTsnLabel();
  }

  public onLoad(): void {
    if (this.asset.equipmentCode) {
      this.loadCsnAndTsnValues(this.asset.equipmentCode);
    }

    this.setAssetStatus();
    if (this.isGroundEquipment) {
      this.loadGroundEquipmentFunctionList();
    }
  }

  // ****************************************************************************

  public openAsset(): void {
    if (this.asset.equipmentCode) {
      if (this.isAssetAircraft) {
        this.openAircraft(this.asset.equipmentCode);
      } else if (this.isAssetEngine) {
        this.openEngine(this.asset.equipmentCode);
      } else if (this.isAssetEquipment) {
        this.openEquipment(this.asset.equipmentCode);
      }
    }
  }

  private loadCsnAndTsnValues(equipmentCode: string): void {
    this.assetLoading = true;

    const input: FindCsnAndTsnValuesInput = {
      equipmentCode
    };
    this.configurationControlService
      .findCsnAndTsnValues(input)
      .pipe(
        finalize(() => {
          this.assetLoading = false;
        })
      )
      .subscribe((result) => {
        if (result) {
          this.assetCsn = StringUtils.orEmpty(result.csn);
          this.assetTsn = StringUtils.orEmpty(result.tsn);
        }
      });
  }

  private loadCsnLabel(): void {
    this.configurationControlService.getStandardCycleCounterLabel().subscribe((result) => {
      this.csnLabel = StringUtils.orEmpty(result);
    });
  }

  private loadTsnLabel(): void {
    this.configurationControlService.getStandardTimeCounterLabel().subscribe((result) => {
      this.tsnLabel = StringUtils.orEmpty(result);
    });
  }

  private loadGroundEquipmentFunctionList() {
    this.configurationControlService.fetchGroundEquipmentFunctionList().subscribe((results) => {
      this.groundEquipmentTypes = results;
    });
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setAssetStatus(): void {
    if (this.isAssetAircraft) {
      const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
      this.configurationControlService.getStatusMap(familyVariantInput).subscribe((results) => {
        const status = ListUtils.orEmpty(results).find((elt) => elt.value === this._asset.operationalStatus);
        this.assetStatus = status ? status.label : '';
      });
    } else {
      this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
        const status = ListUtils.orEmpty(results).find((elt) => elt.value === this._asset.operationalStatus);
        this.assetStatus = status ? status.label : '';
      });
    }
  }
}
