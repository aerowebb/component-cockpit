import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ContactListOutputDTO } from '../../../../shared/types/api-output-types/administration-contact/contact-list-output-dto.interface';
import { SaveContactInput } from '../../../../shared/types/api-types/save-contact-input-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ContactSearchService } from '../search/contact-search.service';

import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'aw-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public contactListOutputDTO: ContactListOutputDTO;
  public showCustomerDialog: boolean;
  public businessPartnerName: string | undefined; // TODO: not in DTO

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly contactFormService: ContactFormService,
    private readonly contactSearchService: ContactSearchService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    // Historic popup
    this.showStatusUpdatesPopup = false;

    this.contactListOutputDTO = {};
    this.showCustomerDialog = false;
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_CONTACT_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();
    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const context = !!this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId).contactName
        : 'tab.createMode';
      this.displayComponentContext(context, this.isCreateOpenMode);

      this.loadContact();
    }
  }

  public openCustomerDialog(): void {
    if (this.isCreateOpenMode) {
      this.showCustomerDialog = true;
    } else {
      this.showCustomerDialog = false;
    }
  }

  /** Loading contact info */
  private loadContact(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      const contactListOutput: ContactListOutputDTO = this.serializationService.deserialize(
        this.componentData.objectId
      );
      const bidoContactDTO = {
        customerCode: contactListOutput.customerCode,
        contactName: contactListOutput.contactName
      };

      this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe((result) => {
        this.contactListOutputDTO = result[0].bidoContactDTO;
      });
    }
  }

  /** Edit Contact */
  public editContact(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  private init(): void {
    this.contactListOutputDTO = {};
    this.businessPartnerName = undefined;
  }

  /** Refresh Screen */
  public reloadContact(): void {
    const bidoContactDTO = {
      customerCode: this.contactListOutputDTO.customerCode,
      contactName: this.contactListOutputDTO.contactName
    };

    this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe((result) => {
      this.contactListOutputDTO = result[0].bidoContactDTO;
    });
  }

  /** Cancel Changes */
  public cancelContact(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
      this.reloadContact();
    } else {
      this.init();
    }
  }

  /** Saving Contact */
  public saveContact(): void {
    if (this.validateContact()) {
      const isUpdate = !!this.componentData && this.componentData.openMode === ComponentOpenMode.Create ? '' : 'update';

      // TODO getting blank DTO
      const contactDTO: ContactListOutputDTO = {
        address: '',
        businessPartner: '',
        contactName: '',
        country: '',
        customerCode: '',
        email: '',
        fax: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        primaryContact: false,
        statusDate: new Date(),
        statusState: '',
        statusUser: '',
        title: '',
        town: ''
      };

      for (const p in this.contactListOutputDTO) {
        // tslint:disable-next-line:prefer-conditional-expression
        if (this.contactListOutputDTO.hasOwnProperty(p)) {
          if (p === 'email') {
            contactDTO[p] = this.contactListOutputDTO[p];
            contactDTO[p] = contactDTO.email;
          } else {
            contactDTO[p] = this.contactListOutputDTO[p];
          }
        }
      }

      const saveContactInput: SaveContactInput = {
        bidoContactDTO: contactDTO,
        isForUpdate: isUpdate
      };

      this.showSaveSpinner = true;
      this.contactFormService.saveContact(saveContactInput).subscribe((result) => {
        let messageKey = 'successOnUpdateContact';
        if (!!this.componentData && isUpdate === '') {
          messageKey = 'successOnSaveContact';
          const bidoContactDTO = {
            customerCode: this.contactListOutputDTO.customerCode,
            contactName: `${this.contactListOutputDTO.firstName} ${this.contactListOutputDTO.lastName}`
          };
          this.componentData.objectId = this.serializationService.serialize(bidoContactDTO);
          this.componentData.openMode = ComponentOpenMode.Read;
        }
        this.messageService.showSuccessMessage(this.getTranslateKey(messageKey));
        this.ngOnInit();
        this.showSaveSpinner = false;
      });
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      this.showSaveSpinner = false;

      return;
    }
  }

  /** Validate Contact Form */
  private validateContact(): boolean {
    if (
      !this.contactListOutputDTO.firstName ||
      !this.contactListOutputDTO.lastName ||
      !this.contactListOutputDTO.customerCode
    ) {
      return false;
    } else {
      return true;
    }
  }

  /** On selecting business partner */
  public onSelectedCustomer(event): void {
    this.contactListOutputDTO.customerCode = event.customerCode;
    this.businessPartnerName = event.customerName;
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public resetCustomerCode(): void {
    this.contactListOutputDTO.customerCode = '';
    this.businessPartnerName = undefined;
  }
}
