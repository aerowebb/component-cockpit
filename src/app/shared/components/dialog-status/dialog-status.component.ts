import { Component, Input, OnInit } from '@angular/core';

import { DialogComponent } from '../../../shared/types/dialog-component';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { LabelValue } from '../../types/label-value.interface';

@Component({
  selector: 'aw-dialog-status',
  templateUrl: './dialog-status.component.html'
})
export class DialogStatusComponent<T> extends DialogComponent implements OnInit {
  @Input() public item: T;

  @Input() public itemId: string;

  @Input('isStatusEditable') public isStatusEditable: boolean;

  @Input('isObjectTypeOfBireSbDTO') public readonly isObjectTypeOfBireSbDTO: boolean;

  @Input('isObjectTypeOfBireEvolutionDTO') public readonly isObjectTypeOfBireEvolutionDTO: boolean;

  @Input('isObjectTypeOfBireMaintenancePlanDTO') public readonly isObjectTypeOfBireMaintenancePlanDTO: boolean;

  @Input('isSapSession') private readonly isSapSession: boolean;

  public statusList: LabelValue<string>[];

  public readonly componentId: string;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogStatusComponent');
  }

  public ngOnInit() {
    this.loadStatusList();
  }

  public close(): void {
    this.display = false;
  }

  private loadStatusList(): void {
    const statusState = 'statusState';
    this.propertiesService
      .getObjectStatusList(
        this.isObjectTypeOfBireSbDTO,
        this.isObjectTypeOfBireEvolutionDTO,
        this.isObjectTypeOfBireMaintenancePlanDTO,
        this.item[statusState],
        this.isSapSession
      )
      .subscribe(
        (result) => {
          this.statusList = result;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadStatusList'));
        }
      );
  }
}
