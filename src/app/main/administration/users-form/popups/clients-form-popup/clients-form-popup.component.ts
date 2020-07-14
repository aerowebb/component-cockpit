import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { LoginService } from '../../../../../login/login.service';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { ValidateSapUserInput } from '../../../../../shared/types/api-input-types/administration-users/bido-user-check-sap-user-input.interface';
import { BidoMandantUserDTO } from '../../../../../shared/types/api-types/bido-mandant-user-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../../shared/utils/select-item-utils';
import { UsersFormService } from '../../users-form.service';

@Component({
  selector: 'aw-clients-form-popup',
  templateUrl: './clients-form-popup.component.html',
  styleUrls: ['./clients-form-popup.component.scss']
})
export class ClientsFormPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public clients: BidoMandantUserDTO;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onAdded: EventEmitter<BidoMandantUserDTO>;

  public readonly componentId: string;

  public selectedClients: BidoMandantUserDTO[];
  public clientList: SelectItem[];
  public selectedClientValue: string;

  public constructor(
    private readonly loginService: LoginService,
    private readonly messageService: MessageService,
    private readonly usersFormService: UsersFormService
  ) {
    super(ComponentOpenMode.Write, 'ClientsFormPopupComponent');

    this.onAdded = new EventEmitter<BidoMandantUserDTO>();
    this.selectedClients = [];
    this.clientList = [];
    this.selectedClientValue = '';
    this.loadClientList();
  }

  public ngOnInit() {
    if (!this.clients) {
      this.clients = {};
    }
  }

  public add(): void {
    if (!!this.clients && this.clients.sapUser) {
      const input: ValidateSapUserInput = {
        client: this.clients.bidMandant,
        userName: this.clients.sapUser
      };
      this.usersFormService.checkSapUser(input).subscribe(
        (result) => {
          if (result) {
            this.onAdded.emit(this.clients);
            this.display = false;
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnSapUser'));
          }
        },
        (error) => {
          this.display = false;
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSapUser'));
        }
      );
    } else {
      this.onAdded.emit(this.clients);
      this.display = false;
    }
  }

  public cancel(): void {
    this.display = false;
  }
  private loadClientList(): void {
    this.loginService.getClients().subscribe((results) => {
      this.clientList = !!results ? SelectItemUtils.fromKeyValues(results) : [];
      if (!!this.clients) {
        this.clients.bidMandant = ListUtils.isEmpty(this.clientList) ? '' : this.clientList[0].value;
      }
    });
  }

  public enableAssociateButton(): boolean {
    if (!!this.clients && !!this.clients.bidMandant && this.clients.bidMandant.trim().length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
