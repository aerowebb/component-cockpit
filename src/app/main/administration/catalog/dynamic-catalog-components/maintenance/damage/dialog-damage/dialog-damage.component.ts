import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireDamageDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/bire-damage-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { DamageService } from '../damage.service';

@Component({
  selector: 'aw-dialog-damage',
  templateUrl: './dialog-damage.component.html'
})
export class DialogDamageComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public damageList: BireDamageDTO[];

  @Input()
  public data: BireDamageDTO;

  @Output()
  public onValidated: EventEmitter<BireDamageDTO>;

  @Output()
  public onUpdate: EventEmitter<BireDamageDTO>;

  public bireDamageDTO: BireDamageDTO;
  public unitCodeList: SelectItem[];

  public constructor(
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService,
    public readonly damageService: DamageService
  ) {
    super(ComponentOpenMode.Read, 'DialogDamageComponent');
    this.onValidated = new EventEmitter<BireDamageDTO>();
    this.onUpdate = new EventEmitter<BireDamageDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);

    if (!this.data) {
      this.data = {};
    } else {
      this.bireDamageDTO = { ...this.data };
    }
    this.fillDropDown();
  }

  private fillDropDown() {
    this.damageService.findAllBireUnitMeasures().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BireUnitMeasureDTO) => {
        labelValue.push({
          // tslint:disable-next-line:no-string-literal
          label: res['label'],
          // tslint:disable-next-line:no-string-literal
          value: res['value']
        });
      });

      this.unitCodeList = labelValue.sort((a, b) =>
        !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
      );
    });
  }

  private isScreenValidated() {
    if (!this.bireDamageDTO.damageCode || this.bireDamageDTO.damageCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireDamageDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.damageList.forEach((res) => {
          if (res.damageCode === this.bireDamageDTO.damageCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireDamageDTO };
          this.onValidated.emit(this.data);
          this.closeDialog();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
        }
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }
}
