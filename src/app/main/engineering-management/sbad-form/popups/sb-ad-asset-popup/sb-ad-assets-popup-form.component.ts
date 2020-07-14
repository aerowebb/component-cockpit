import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireConcernedAssetDTO } from '../../../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-sb-ad-assets-popup-form',
  templateUrl: './sb-ad-assets-popup-form.component.html'
})
export class SbAdAssetsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data') public componentData: PopupEntry<BireConcernedAssetDTO> | null;

  @Input() public isNewAsset: boolean;

  @Input() public sbAssets: string;

  @Output() public onCreate: EventEmitter<BireConcernedAssetDTO> = new EventEmitter<BireConcernedAssetDTO>();

  @Output() public onUpdate: EventEmitter<BireConcernedAssetDTO> = new EventEmitter<BireConcernedAssetDTO>();

  public assetObject: BireConcernedAssetDTO;

  public propertyActionType: SelectItem[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');

    this.loadActionTypes();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.assetObject = this.componentData.object as BireConcernedAssetDTO;
      this.updateOpenMode(this.componentData.openMode);
    }
  }

  public onShow() {
    this.display = true;
  }

  public onValidate(): void {
    if (this.isRequiredFiledFill()) {
      if (this.isNewAsset) {
        this.onCreate.emit(this.assetObject);
        this.display = false;
      } else {
        this.onUpdate.emit(this.assetObject);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getComponentName() + '.assetPnOrSnMandatory');
    }
  }

  private loadActionTypes(): void {
    this.propertiesService.getValue('getAssetActionTypeMap').subscribe(
      (results) => {
        this.propertyActionType = results;
      },
      () => {
        if (this.componentData !== null) {
          this.messageService.showErrorMessage(this.componentData.componentId + '.errorOnActionTypeList');
        }
      }
    );
  }

  private isRequiredFiledFill(): boolean {
    return !!this.assetObject.assetSn || !!this.assetObject.assetPn;
  }
}
