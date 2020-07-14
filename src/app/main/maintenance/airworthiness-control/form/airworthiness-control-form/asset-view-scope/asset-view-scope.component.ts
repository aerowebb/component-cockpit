import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { AirworthinessRow } from '../types/airworthiness-row.interface';

@Component({
  selector: 'aw-airworthiness-table-asset-view-scope',
  styleUrls: ['../../share.scss'],
  templateUrl: './asset-view-scope.component.html'
})
export class AssetViewScopeComponent extends GenericComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  public airworthinessTableColCsnLabel: string;

  @Input()
  public airworthinessTableColTsnLabel: string;

  @Input()
  public globalAlertListLoading: boolean;

  @Input()
  public isAssetAircraft: boolean;

  @Input()
  public isAssetEngine: boolean;

  @Input()
  public isAssetEquipment: boolean;

  @Input()
  public set asset(value: BidoEquipmentDTO) {
    if (!!value) {
      this._asset = value;

      this.setAssetStatus();
    }
  }
  public get asset(): BidoEquipmentDTO {
    return this._asset;
  }

  @Input()
  public set assetAirworthiness(value: AirworthinessRow) {
    if (!!value) {
      this._assetAirworthiness = value;
    }
  }
  public get assetAirworthiness(): AirworthinessRow {
    return this._assetAirworthiness;
  }

  @Output()
  public onNavigate: EventEmitter<void>;

  public status: string;

  private _asset: BidoEquipmentDTO;
  private _assetAirworthiness: AirworthinessRow;

  public constructor(private readonly propertiesService: PropertiesService) {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;

    this.init();
  }

  public getComponentName(): string {
    return 'AssetViewScopeComponent';
  }

  public openTopAsset(): void {
    this.onNavigate.emit();
  }

  private init(): void {
    this._asset = {};
    this._assetAirworthiness = new AirworthinessRow();

    this.onNavigate = new EventEmitter<void>();
  }

  private setAssetStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      const status = ListUtils.orEmpty(results).find((elt) => elt.value === this._asset.operationalStatus);
      this.status = status ? status.label : '';
    });
  }
}
