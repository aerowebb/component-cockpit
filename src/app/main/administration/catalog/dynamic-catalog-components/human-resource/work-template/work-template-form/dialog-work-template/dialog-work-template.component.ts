import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../../shared/services/message.service';
import { CustomBidtLaborTemplateHoursDTO } from '../../../../../../../../shared/types/api-types/custom-bidt-labor-template-hours-dto.interface';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { WorkTemplateService } from '../../work-template.service';

@Component({
  selector: 'aw-dialog-work-template',
  templateUrl: './dialog-work-template.component.html'
})
export class DialogWorkTemplateComponent extends DialogComponent implements OnInit {
  @Input()
  public data: CustomBidtLaborTemplateHoursDTO;

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onCreate: EventEmitter<CustomBidtLaborTemplateHoursDTO>;

  @Output()
  public onUpdate: EventEmitter<CustomBidtLaborTemplateHoursDTO>;

  public readonly componentId: string;
  public hrOptions: SelectItem[];
  public minOptions: SelectItem[];
  public dayOption: SelectItem[];
  public bHr: string;
  public bMin: string;
  public eHr: string;
  public eMin: string;

  public constructor(
    private readonly workTemplateService: WorkTemplateService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogWorkTemplateComponent');
    this.onCreate = new EventEmitter<CustomBidtLaborTemplateHoursDTO>();
    this.onUpdate = new EventEmitter<CustomBidtLaborTemplateHoursDTO>();
    this.hrOptions = [];
    this.dayOption = [];
    this.minOptions = [];
  }

  public ngOnInit() {
    if (!this.data) {
      this.data = {};
    } else {
      if (!!this.data && !!this.data.gthHourOfBeginning && !!this.data.gthHourOfEnd) {
        this.bHr = this.data.gthHourOfBeginning.split(':')[0];
        this.bMin = this.data.gthHourOfBeginning.split(':')[1];
        this.eHr = this.data.gthHourOfEnd.split(':')[0];
        this.eMin = this.data.gthHourOfEnd.split(':')[1];
      } else {
        super.throwUnboundLocalError('ngOnInit', 'this.data');
      }
    }
    this.renderTimeDropDown();
  }

  /**
   * Rendering dropdown
   */
  private renderTimeDropDown() {
    this.workTemplateService.getDayMap().subscribe((result) => {
      this.dayOption = result.map((obj) => {
        const item: SelectItem = {
          label: obj.label,
          value: Number(obj.value)
        };

        return item;
      });
    });

    const hr = 24;
    for (let i = 0; i < hr; i++) {
      this.hrOptions.push({
        label: i.toString(),
        value: i.toString()
      });
    }

    const min = 61;
    const inc = 5;
    for (let i = 0; i < min; i = i + inc) {
      this.minOptions.push({
        label: i.toString(),
        value: i.toString()
      });
    }
  }

  /**
   * Event called on validate click
   */
  public associate(): void {
    if (this.isScreenValid()) {
      if (this.isTimeChronological()) {
        const sec = 3600;
        const min = 60;

        let dayOfWeek = '';
        this.dayOption.forEach((res) => {
          if (
            this.data.thDayOfWeek !== null &&
            this.data.thDayOfWeek !== undefined &&
            res.value === this.data.thDayOfWeek
          ) {
            dayOfWeek = res.label || '';
          }
        });

        const customBidtLaborTemplateHoursDTO: CustomBidtLaborTemplateHoursDTO = {
          bidtLaborTemplateId: this.data.bidtLaborTemplateId,
          gthDayOfWeek: dayOfWeek,
          gthHourOfBeginning: `${this.bHr}:${this.bMin}`,
          gthHourOfEnd: `${this.eHr}:${this.eMin}`,
          thDayOfWeek: this.data.thDayOfWeek,
          thHourOfBeginning: parseInt(this.bHr, 10) * sec + parseInt(this.bMin, 10) * min,
          thHourOfEnd: parseInt(this.eHr, 10) * sec + parseInt(this.eMin, 10) * min
        };

        // Checking the mode of open
        if (this.openMode === ComponentOpenMode.Create) {
          this.createHourEntry(customBidtLaborTemplateHoursDTO);
        } else {
          this.updateHourEntry(customBidtLaborTemplateHoursDTO);
        }

        this.display = false;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('hoursNotChronological'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnRequiredField'));
    }
  }

  /**
   * Is entered time Valid
   */
  private isTimeChronological(): boolean {
    if (Number(this.eHr) === Number(this.bHr)) {
      if (Number(this.eMin) < Number(this.bMin)) {
        return false;
      }
    } else {
      if (Number(this.eHr) < Number(this.bHr)) {
        return false;
      }
    }

    return true;
  }

  private isScreenValid(): boolean {
    if (
      this.data.thDayOfWeek !== undefined &&
      this.bHr !== undefined &&
      this.bMin !== undefined &&
      this.eHr !== undefined &&
      this.eMin !== undefined
    ) {
      return true;
    }

    return false;
  }

  private createHourEntry(dto) {
    this.onCreate.emit(dto);
  }

  private updateHourEntry(dto) {
    this.onUpdate.emit(dto);
  }

  public cancel(): void {
    this.display = false;
  }
}
