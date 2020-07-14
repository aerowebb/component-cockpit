import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BireItemMaintenanceDTO } from '../../../../../../shared/types/api-types/bire-item-maintenance-dto.interface';
import { BireTilItemDTO } from '../../../../../../shared/types/api-types/bire-til-item-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../../form/item-form.service';

@Component({
  selector: 'aw-statistics-popup',
  templateUrl: './statistics-popup.component.html'
})
export class StatisticsPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireItemMaintenanceDTO> | null;

  @Output()
  public onCreate: EventEmitter<BireItemMaintenanceDTO>;

  @Output()
  public onUpdate: EventEmitter<BireItemMaintenanceDTO>;

  public bireItemMaintenanceDTO: BireItemMaintenanceDTO;

  public repairCenterList: LabelValue<string>[];
  public maintenanceTypeList: LabelValue<string>[];
  public kPourcentList: LabelValue<string>[];
  public isEditable: boolean = true;

  public constructor(
    public sessionService: SessionService,
    private readonly itemFormService: ItemFormService,
    private readonly messageService: MessageService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, 'StatisticsPopupComponent');

    this.onCreate = new EventEmitter<BireTilItemDTO>();
    this.onUpdate = new EventEmitter<BireTilItemDTO>();
    this.init();
  }

  /**
   * Init screen
   */
  private init() {
    this.bireItemMaintenanceDTO = {};
    this.repairCenterList = [];
    this.maintenanceTypeList = [];
    this.kPourcentList = [];
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
        this.isEditable = false;
        // tslint:disable-next-line:no-string-literal
        this.bireItemMaintenanceDTO['dataKeyId'] = this.componentData.object['dataKeyId'];
        this.bireItemMaintenanceDTO = this.componentData.object;
      } else {
        this.bireItemMaintenanceDTO.probability = 0;
      }
    }
    // Get dropdown list
    this.initilizeDropdowns();
  }

  private initilizeDropdowns() {
    // K Pourcent List
    this.itemFormService.findBireKPourcentList().subscribe((results: LabelValue<string>[]) => {
      this.kPourcentList = results;
      if (!!this.componentData && this.isEmpty(this.componentData.object)) {
        this.bireItemMaintenanceDTO.kPourcentCode = results[0].value;
      }
    });

    // Maintenance Type
    this.itemFormService.findBireMaintenanceEnvironmentsList().subscribe((results: LabelValue<string>[]) => {
      this.maintenanceTypeList = results;
      if (!!this.componentData && this.isEmpty(this.componentData.object)) {
        this.bireItemMaintenanceDTO.environmentCode = results[0].value;
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
      if (!!this.componentData && this.isEmpty(this.componentData.object)) {
        this.bireItemMaintenanceDTO.repairCenterCode = results[0].value;
      }
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      if (this.maxProbaility()) {
        if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
          this.onUpdate.emit(this.bireItemMaintenanceDTO);
        } else {
          this.onCreate.emit(this.bireItemMaintenanceDTO);
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('entryOfProbability'));
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

  private maxProbaility() {
    const max = 1000000;
    const min = 0;
    if (
      !!this.bireItemMaintenanceDTO.probability &&
      (this.bireItemMaintenanceDTO.probability > max || this.bireItemMaintenanceDTO.probability < min)
    ) {
      return false;
    }

    return true;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (
      !!this.bireItemMaintenanceDTO.repairCenterCode &&
      !!this.bireItemMaintenanceDTO.environmentCode &&
      !!this.bireItemMaintenanceDTO.kPourcentCode
    ) {
      return true;
    }

    return false;
  }
}
