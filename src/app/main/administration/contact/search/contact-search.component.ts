import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ContactListOutputDTO } from '../../../../shared/types/api-output-types/administration-contact/contact-list-output-dto.interface';
import { BidoContactDTOId } from '../../../../shared/types/api-types/bido-contact-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { ContactSearchService } from './contact-search.service';

@Component({
  selector: 'aw-contact-search',
  templateUrl: './contact-search.component.html'
})
export class ContactSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public contactTableDataSource: TableDataSource<ContactListOutputDTO>;
  public showCustomerDialog: boolean;
  public customerTableData: DialogTableData<BidoCustomerDTO>;
  public bidoCustomerDTO: BidoCustomerDTO;
  public contactName: string;
  public filterTxt: string | undefined;
  public isLoading: boolean;

  public criteriaToSave: BidoCustomerDTO;
  public criteriaName: string | undefined;

  public readonly CONTACT_SEARCH_CRITERIA_ID: string = AppConstants.CONTACT_SEARCH_CRITERIA_ID;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly contactSearchService: ContactSearchService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.showCustomerDialog = false;

    this.initContactTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_CONTACT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.bidoCustomerDTO = {};
    this.isLoading = false;
    this.displayComponentContext('global.search', true);
  }

  private initContactTableDataSource(): void {
    this.contactTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'businessPartner',
          translateKey: this.getTranslateKey('businessPartner')
        },
        {
          field: 'contactName',
          translateKey: this.getTranslateKey('contactName')
        },
        {
          field: 'title',
          translateKey: this.getTranslateKey('title')
        },
        {
          field: 'phone1',
          translateKey: this.getTranslateKey('phone1')
        },
        {
          field: 'phone2',
          translateKey: this.getTranslateKey('phone2')
        }
      ],
      data: []
    });
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: BidoCustomerDTO | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }

    this.criteriaName = event.name;
    this.bidoCustomerDTO.customerCode = criteria.customerCode;
    this.contactName = criteria.customerName as string;
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: BidoCustomerDTO = {
      customerCode: this.bidoCustomerDTO.customerCode,
      customerName: this.contactName
    };

    this.criteriaToSave = criteriaToSave;
  }

  /** Resetting Search Filters */
  public resetSearchCriteria(): void {
    this.bidoCustomerDTO = {};
    this.contactName = '';
  }

  public openCustomerDialog(): void {
    this.showCustomerDialog = true;
  }

  /** Getting Selected Business Partner */
  public onSelectedCustomer(event): void {
    this.bidoCustomerDTO = event;
  }

  /** Search Contact By Criteria */
  public search(): void {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.contactTableDataSource.setData([]);
    const bidoContactDTO = {
      customerCode: this.bidoCustomerDTO.customerCode,
      contactName: this.contactName
    };

    this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe((result) => {
      this.isLoading = false;
      this.renderContactTable(result);
      this.contactTableDataSource.dataSelection = [];
    });
  }

  /** Filling contact table */
  private renderContactTable(result): void {
    const contactListDTO: ContactListOutputDTO[] = [];
    result.forEach((results) => {
      results.bidoContactDTO.businessPartner = results.businessPartner;
      contactListDTO.push(results.bidoContactDTO);
    });

    this.contactTableDataSource.setData(contactListDTO);
    this.contactTableDataSource.update();
  }

  /** Create Event */
  public openNewContact(): void {
    this.openContacts(undefined, ComponentOpenMode.Create);
  }

  /** Open Selected Contact */
  private openContacts(objectId: ContactListOutputDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_CONTACT_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /** Open Contacts per screen */
  public openSelectedContacts(): void {
    this.contactTableDataSource.dataSelection.forEach((contact) => {
      if (!!contact) {
        this.openContacts(contact, ComponentOpenMode.Read);
      }
    });
  }

  /** Delete selected contacts */
  public deleteContacts(): void {
    const confirmMessageKey =
      this.contactTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedContact'
        : 'confirmDeleteSelectedContacts';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const bidoContactDTOId: BidoContactDTOId[] = [];
        this.contactTableDataSource.dataSelection.forEach((results) => {
          if (!!results.contactName) {
            const bidoContact: BidoContactDTOId = {
              contactName: results.contactName
            };
            bidoContactDTOId.push(bidoContact);
          } else {
            super.throwUnboundLocalError('deleteContacts', 'results.contactName');
          }
        });

        this.contactSearchService.deleteContacts(bidoContactDTOId).subscribe((result) => {
          this.search();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteContact'));
        });

        this.contactTableDataSource.dataSelection = [];
      }
    });
  }

  /** Reset Table filter */
  public resetFilter(): void {
    this.filterTxt = undefined;
  }

  public resetCustomer(): void {
    this.bidoCustomerDTO = {};
  }
}
