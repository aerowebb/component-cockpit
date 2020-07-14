import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { BireTilDTO } from '../../../../../../shared/types/api-types/bire-til-dto.interface';
import { BireTilItemDTO } from '../../../../../../shared/types/api-types/bire-til-item-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../../form/item-form.service';

@Component({
  selector: 'aw-til-popup',
  templateUrl: './til-popup.component.html'
})
export class TilPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireTilItemDTO> | null;

  @Output()
  public onCreate: EventEmitter<BireTilItemDTO>;

  public bireTilItemDTO: BireTilItemDTO;
  public tilList: LabelValue<string>[];
  public description: string | undefined;

  private bireTils: BireTilDTO[];

  public constructor(
    private readonly itemFormService: ItemFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'TilPopupComponent');

    this.onCreate = new EventEmitter<BireTilItemDTO>();
    this.init();
  }

  /**
   * Init screen
   */
  private init() {
    this.bireTilItemDTO = {};
    this.tilList = [];
    this.bireTils = [];
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
    }

    // Get dropdown list
    this.itemFormService.findAllBireTils().subscribe((results: BireTilDTO[]) => {
      const list: LabelValue<string>[] = [];
      results.forEach((element: BireTilDTO) => {
        if (!!element && element.technicalLevel !== undefined) {
          list.push({
            label: element.tilName as string,
            value: element.technicalLevel.toString() as string
          });
        }
      });
      this.tilList = list;
      this.bireTils = results;

      if (this.componentData) {
        this.bireTilItemDTO =
          !!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)
            ? this.componentData.object
            : {};

        this.setDescription();
      }
    });
  }

  /**
   * Set description field
   */
  public setDescription() {
    if (!!this.bireTilItemDTO.technicalLevel) {
      this.description = undefined;
      const bireTilDTO = this.bireTils.filter((res) => {
        // tslint:disable-next-line:triple-equals
        return res.technicalLevel == this.bireTilItemDTO.technicalLevel;
      })[0];

      this.description = bireTilDTO.tilDescription as string;
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.bireTilItemDTO);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidTechicalLevelisRequired'));
    }
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.init();
    this.display = false;
  }

  private isEmpty(obj): boolean {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (!!this.bireTilItemDTO.technicalLevel) {
      return true;
    }

    return false;
  }
}
