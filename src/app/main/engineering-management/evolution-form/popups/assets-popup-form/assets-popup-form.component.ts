import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireConcernedAssetDTO } from '../../../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

import { AssetsPopupFormService } from './assets-popup-form.service';

@Component({
  selector: 'aw-assets-popup-form',
  templateUrl: './assets-popup-form.component.html'
})
export class AssetsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireConcernedAssetDTO> | null;

  @Input()
  public isReadOnlyForm: boolean;

  @Input()
  public isNewAsset: boolean;

  @Output()
  public onCreate: EventEmitter<BireConcernedAssetDTO>;

  @Output()
  public onUpdate: EventEmitter<BireConcernedAssetDTO>;

  public newEvol: BireConcernedAssetDTO;
  public displayDialog: boolean;
  public selectedEvolutions: BireConcernedAssetDTO[];
  public instruction: SelectItem[];
  public isEditable: boolean;

  public constructor(
    public assetsPopupFormService: AssetsPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'AssetPopupDialog');

    this.onCreate = new EventEmitter<BireConcernedAssetDTO>();
    this.onUpdate = new EventEmitter<BireConcernedAssetDTO>();

    this.displayDialog = false;
    this.selectedEvolutions = [];
    this.newEvol = {};

    this.loadInstructions();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.newEvol = this.componentData.object;
      if (!!this.componentData.selectedRow) {
        this.selectedEvolutions = this.componentData.selectedRow;
      }
    }
  }

  public onShow() {
    this.display = true;
  }

  public onHide(): void {
    this.newEvol = {};
    this.display = false;
  }

  private loadInstructions(): void {
    this.assetsPopupFormService.getAssetActionType().subscribe(
      (results) => {
        this.instruction = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInstructions'));
      }
    );
  }

  public onValidate(): void {
    if (this.isScreenValid()) {
      if (this.newEvol.assetPn || this.newEvol.assetSn) {
        if (this.isNewAsset) {
          this.onCreate.emit(this.newEvol);
          this.display = false;
        } else {
          this.onUpdate.emit(this.newEvol);
          this.display = false;
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  /**
   * Is screen valid
   */
  private isScreenValid() {
    if (this.newEvol.assetPn || this.newEvol.assetSn) {
      return true;
    }

    return false;
  }
}
