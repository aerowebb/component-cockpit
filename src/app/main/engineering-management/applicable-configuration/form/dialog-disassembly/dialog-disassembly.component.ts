import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireUnmountAssemblyDTO } from '../../../../../shared/types/api-types/bire-unmount-assembly-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-disassembly',
  templateUrl: './dialog-disassembly.component.html'
})
export class DialogDisassemblyComponent extends DialogComponent implements OnInit {
  @Input()
  public disassemblyGroup: BireUnmountAssemblyDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BireUnmountAssemblyDTO>;

  public constructor(
    // private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogDisassemblyComponent');

    this.onValidated = new EventEmitter<BireUnmountAssemblyDTO>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.disassemblyGroup) {
      this.disassemblyGroup = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!this.disassemblyGroup.unmountCode || this.disassemblyGroup.unmountCode.length === 0) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.disassemblyGroup);
      this.display = false;
    }
  }
}
