import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { BireConcernedAssetDTO } from '../../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';

import { ModificationAssetsPopupFormService } from './modification-assets-popup-form.service';

@Component({
  selector: 'aw-modification-assets-popup-form',
  templateUrl: './modification-assets-popup-form.component.html'
})
export class ModificationAssetsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireConcernedAssetDTO> | null;
  @Output()
  public onCreate: EventEmitter<BireConcernedAssetDTO>;

  public newAsset: BireConcernedAssetDTO;
  public assetObject: BireConcernedAssetDTO;
  public contentTable: BireConcernedAssetDTO[];
  public selectedAssets: BireConcernedAssetDTO[];
  public showAdvancedCriteria: boolean;
  public instruction: LabelValue<string>[];

  public constructor(
    public modificationAssetsPopupFormService: ModificationAssetsPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ModificationFormComponent');

    this.onCreate = new EventEmitter<BireConcernedAssetDTO>();

    this.contentTable = [];
    this.selectedAssets = [];
    this.newAsset = {};
    this.loadActionType();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.object) {
      this.newAsset = this.componentData.object;
      this.updateOpenMode(this.componentData.openMode);
    }
  }

  public onCancel() {
    this.closeDialog();
  }

  public onSave(): void {
    if (!this.isReadOpenMode && this.isValidFields()) {
      this.onCreate.emit(this.newAsset);
      this.closeDialog();
    }
  }

  private loadActionType(): void {
    this.modificationAssetsPopupFormService.getAssetActionType().subscribe(
      (results) => {
        this.instruction = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInstructions'));
      }
    );
  }

  private isValidFields(): boolean {
    return (
      this.newAsset != undefined &&
      !(
        this.newAsset.assetPn == undefined &&
        this.newAsset.assetSn == undefined &&
        this.newAsset.assetActionType == undefined
      )
    );
  }
}
