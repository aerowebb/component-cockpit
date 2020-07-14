import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BireItemSiteDTO } from '../../../../../../shared/types/api-types/bire-item-site-dto.interface';
import { BireTilItemDTO } from '../../../../../../shared/types/api-types/bire-til-item-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../../form/item-form.service';

@Component({
  selector: 'aw-repair-center-popup',
  templateUrl: './repair-center-popup.component.html'
})
export class RepairCenterPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireItemSiteDTO> | null;

  @Output()
  public onCreate: EventEmitter<BireItemSiteDTO>;

  @Output()
  public onUpdate: EventEmitter<BireItemSiteDTO>;

  public bireItemSiteDTO: BireItemSiteDTO;

  public repairCenterList: LabelValue<string>[];
  public exchangeTypeList: LabelValue<string>[];
  public isEditable: boolean = true;

  public constructor(
    private readonly itemFormService: ItemFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'RepairCenterPopupComponent');

    this.onCreate = new EventEmitter<BireTilItemDTO>();
    this.onUpdate = new EventEmitter<BireTilItemDTO>();
    this.init();
  }

  /**
   * Init screen
   */
  private init() {
    this.bireItemSiteDTO = {};
    this.repairCenterList = [];
    this.exchangeTypeList = [];
  }

  public ngOnInit() {
    // Get dropdown list
    this.initilizeDropdowns();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
        this.isEditable = false;
        this.bireItemSiteDTO = this.componentData.object;
      }
    }
  }

  private initilizeDropdowns() {
    // exchangeTypeList
    this.propertiesService.getValue(GenericPropertyConstants.EXCHANGE_TYPE_MAP).subscribe((results) => {
      this.exchangeTypeList = results;

      if (this.componentData) {
        this.bireItemSiteDTO =
          !!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)
            ? this.componentData.object
            : {};
      }
    });

    // Repair Center List
    this.itemFormService.findAllBireSites().subscribe((results: LabelValue<string>[]) => {
      results.forEach((res) => {
        res.label = `${res.value}-${res.label}`;
        if (res.value === 'Air base 1') {
          res.label = 'Air base 1';
        }
      });
      this.repairCenterList = results;
      if (this.componentData) {
        this.bireItemSiteDTO =
          !!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)
            ? this.componentData.object
            : {};
      }
      if (!!this.componentData && this.isEmpty(this.componentData.object)) {
        this.bireItemSiteDTO.repairCenterCode = results[0].value;
      }
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      if (!!this.componentData && this.isEmpty(this.componentData.object)) {
        this.onCreate.emit(this.bireItemSiteDTO);
      } else {
        this.onUpdate.emit(this.bireItemSiteDTO);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
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
    if (!!this.bireItemSiteDTO.repairCenterCode) {
      return true;
    }

    return false;
  }
}
