import { Component, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../shared/services/message.service';
import { SessionService } from '../../../shared/services/session.service';
import { ChangePasswordInput } from '../../../shared/types/api-input-types/change-password/change-password-input-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';

import { DialogChangePasswordService } from './dialog-change-password.service';

@Component({
  selector: 'aw-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss']
})
export class DialogChangePasswordComponent extends DialogComponent implements OnInit {
  public login: string;
  public formData: ChangePasswordInput;
  public confirmation: string | undefined;

  public constructor(
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly dialogChangePasswordService: DialogChangePasswordService
  ) {
    super(ComponentOpenMode.Read, 'DialogChangePasswordComponent');
    this.formData = {};
  }

  public ngOnInit() {
    if (this.sessionService.loggedUser) {
      this.login = this.sessionService.loggedUser.login;
      this.formData.login = this.login;
    }
  }

  public validate() {
    if (this.formData.oldPassword === this.formData.newPassword) {
      this.messageService.showWarningMessage(this.getTranslateKey('samePasswordError'));
    } else if (this.confirmation !== this.formData.newPassword) {
      this.messageService.showWarningMessage(this.getTranslateKey('passwordNotMatching'));
    } else {
      this.dialogChangePasswordService.changePasswordUser(this.formData).subscribe(
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('succesMessage'));
          this.closeDialog();
        },
        (err) => {
          // tslint:disable-next-line: no-unsafe-any
          this.messageService.showErrorMessage(err.error.errorDetail);
        }
      );
    }
  }

  public isChecked(): boolean {
    if (!this.formData.newPassword || !this.formData.oldPassword || !this.confirmation) {
      return true;
    } else {
      return false;
    }
  }
}
