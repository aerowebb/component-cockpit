import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveCatalogInput } from '../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoSubscriptionDTO } from '../../../../shared/types/api-types/bido-subscription-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { EventSubscriptionService } from '../event-subscription.service';

@Component({
  selector: 'aw-event-subscripton-form',
  templateUrl: './event-subscripton-form.component.html'
})
export class EventSubscriptonFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public subscription: BidoSubscriptionDTO;
  public operatorName: string | undefined;

  public eventTypes: LabelValue<string>[];
  public familyVariants: LabelValue<string>[];
  public eventPriorities: LabelValue<string>[];

  public tabContactsId: string;
  public currentTabId: string;

  public contactsTableDataSource: TableDataSource<BidoContactDTO>;
  public currentContact: BidoContactDTO;
  public currentContactIndex: number | undefined;

  public existingSubscriptions: string[];

  public showQuickSearchBusinessPartnerPopup: boolean;

  public showContactsPopup: boolean;

  public eventSubscriptionsTable: SearchResultsDTO<BidoSubscriptionDTO>;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly eventSubscriptionService: EventSubscriptionService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.tabContactsId = 'contacts';
    this.initContactsTableDataSource();
    this.init();
  }

  private initContactsTableDataSource(): void {
    this.contactsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'customerCode', translateKey: this.getTranslateKey('customerCode'), width: '40%' },
        { field: 'customerName', translateKey: this.getTranslateKey('customerName'), width: '30%' },
        { field: 'contactName', translateKey: this.getTranslateKey('contactName'), width: '30%' }
      ],
      data: []
    });
  }

  public init(): void {
    this.subscription = {};
    this.operatorName = undefined;

    this.eventTypes = [];
    this.familyVariants = [];

    this.eventSubscriptionsTable = { list: [], moreResults: false };

    this.currentTabId = this.tabContactsId;

    this.contactsTableDataSource.dataSelection = [];
    this.currentContact = {};
    this.currentContactIndex = undefined;

    this.existingSubscriptions = [];

    this.loadEventTypes();
    this.loadFamilyVariants();
    this.loadEventPriorities();

    this.getExistingSubscriptionNames();

    this.showQuickSearchBusinessPartnerPopup = false;
    this.showContactsPopup = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const subscriptionContext = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).subscriptionName;

      this.displayComponentContext(subscriptionContext, this.isCreateOpenMode);

      this.loadSubscription();
    }
  }

  public loadEventTypes(): void {
    this.eventSubscriptionService.loadEventTypes().subscribe(
      (results) => {
        this.eventTypes = results;
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingEventTypes');
      }
    );
  }

  public loadFamilyVariants(): void {
    this.eventSubscriptionService.loadFamilyVariants().subscribe(
      (results) => {
        results.forEach((result) => {
          const label1 = result.familyname ? result.familyname : result.familyCode;
          const label2 = result.variantName ? result.variantName : result.variantCode;
          const label = `${label1}-${label2}`;
          const value = BidoFamilyVariantUtils.buildFamilyVariantCode(result.familyCode, result.variantCode);
          if (!!label && !!value) {
            const familyVariant: LabelValue<string> = {
              label,
              value
            };
            this.familyVariants.push(familyVariant);
          } else {
            super.throwUnboundLocalError('loadFamilyVariants', 'label && value');
          }
        });
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
      }
    );
  }

  public loadEventPriorities(): void {
    this.propertiesService.getValue('getEventPriorityMap').subscribe(
      (results) => {
        this.eventPriorities = results;
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingEventPriorities');
      }
    );
  }

  public loadSubscription(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      const subscriptionId = this.serializationService.deserialize(this.componentData.objectId).subscriptionId;
      this.eventSubscriptionService.loadSubscription(subscriptionId).subscribe((results) => {
        if (!!results.bidoSubscriptionDTO && !!results.bidoContactDTO) {
          const bidoCustomerDTO: BidoCustomerDTO = {
            customerCode: results.bidoSubscriptionDTO.operatorCode
          };
          this.eventSubscriptionService.findBidoCustomersBySearchCriteria(bidoCustomerDTO).subscribe((result) => {
            if (result) {
              this.operatorName = result.list[0].customerName;
            }
          });
          this.subscription = results.bidoSubscriptionDTO;
          this.subscription.subscriptionId = subscriptionId;
          this.contactsTableDataSource.setData(results.bidoContactDTO);
          this.contactsTableDataSource.update();
        }
      });
    }
  }

  public getExistingSubscriptionNames(): void {
    this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe((results) => {
      results.list.forEach((result) => {
        if (!!result.subscriptionName) {
          this.existingSubscriptions.push(result.subscriptionName);
        } else {
          super.throwUnboundLocalError('getExistingSubscriptionName', 'result.subscriptionName');
        }
      });
    });
  }

  public getComponentName(): string {
    return 'EventSubscriptonFormComponent';
  }

  public reloadSubscription(): void {
    this.init();
    this.loadSubscription();
  }

  public editSubscription(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public saveSubscription(): void {
    this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe((subscriptionData) => {
      this.eventSubscriptionsTable = subscriptionData;

      const input: SaveCatalogInput = {
        bidoSubscriptionList: {
          bidoSubscriptionDTO: this.subscription,
          bidoContactDTO: this.contactsTableDataSource.data
        }
      };
      const create = 0;
      const update = 1;
      if (!this.subscription.subscriptionName || this.subscription.subscriptionName.trim().length === 0) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else if (!this.contactsTableDataSource.hasData) {
        this.messageService.showErrorMessage(this.getTranslateKey('addContact'));
      } else {
        if (!!this.componentData && this.componentData.openMode === create) {
          if (this.existingSubscriptions.includes(this.subscription.subscriptionName)) {
            this.messageService.showErrorMessage(this.getTranslateKey('nameAlreadyUsed'));
          } else {
            this.showSaveSpinner = true;
            this.eventSubscriptionService.saveCatalog(input).subscribe(
              (result) => {
                this.messageService.showSuccessMessage('global.successOnSave');
                this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe((results) => {
                  results.list.forEach((re) => {
                    if (
                      !!input.bidoSubscriptionList &&
                      !!input.bidoSubscriptionList.bidoSubscriptionDTO &&
                      re.subscriptionName === input.bidoSubscriptionList.bidoSubscriptionDTO.subscriptionName &&
                      re.subscriptionId
                    ) {
                      this.eventSubscriptionService.loadSubscription(re.subscriptionId).subscribe((res) => {
                        if (
                          !!res.bidoSubscriptionDTO &&
                          !!res.bidoContactDTO &&
                          !!res.bidoSubscriptionDTO.operatorCode
                        ) {
                          const bidoCustomerDTO: BidoCustomerDTO = {
                            customerCode: !!res.bidoSubscriptionDTO && res.bidoSubscriptionDTO.operatorCode
                          };
                          this.eventSubscriptionService
                            .findBidoCustomersBySearchCriteria(bidoCustomerDTO)
                            .subscribe((r) => {
                              if (r) {
                                this.operatorName = r.list[0].customerName;
                              }
                            });
                          this.subscription = res.bidoSubscriptionDTO;
                          this.contactsTableDataSource.setData(res.bidoContactDTO);
                          this.contactsTableDataSource.update();
                        }
                      });
                    }
                  });
                });
                if (!!this.componentData) {
                  this.componentData.objectId = this.serializationService.serialize(this.subscription);
                  if (!!this.subscription.subscriptionName) {
                    this.displayComponentContext(this.subscription.subscriptionName, this.isWriteOpenMode);
                    this.updateOpenMode(ComponentOpenMode.Write);
                    this.componentData.openMode = 1;
                  } else {
                    super.throwUnboundLocalError('saveSubscription', 'this.subscription.subscriptionName');
                  }
                } else {
                  super.throwUnboundLocalError('saveSubscription', 'this.componentData');
                }
                this.showSaveSpinner = false;
              },
              () => {
                this.messageService.showErrorMessage('global.errorOnSave');
                this.showSaveSpinner = false;
              }
            );
          }
        } else if (!!this.componentData && this.componentData.openMode === update) {
          let dataInDB = false;
          this.eventSubscriptionsTable.list.forEach((sub) => {
            if (sub.subscriptionName === this.subscription.subscriptionName) {
              dataInDB = true;
            }
          });
          if (dataInDB) {
            this.showSaveSpinner = true;
            this.eventSubscriptionService.saveCatalog(input).subscribe(
              (result) => {
                this.messageService.showSuccessMessage('global.successOnSave');
                this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe((results) => {
                  results.list.forEach((re) => {
                    if (
                      !!input.bidoSubscriptionList &&
                      !!input.bidoSubscriptionList.bidoSubscriptionDTO &&
                      !!re.subscriptionId &&
                      re.subscriptionName === input.bidoSubscriptionList.bidoSubscriptionDTO.subscriptionName
                    ) {
                      this.eventSubscriptionService.loadSubscription(re.subscriptionId).subscribe((res) => {
                        if (
                          !!res.bidoSubscriptionDTO &&
                          !!res.bidoSubscriptionDTO.operatorCode &&
                          !!res.bidoContactDTO
                        ) {
                          const bidoCustomerDTO: BidoCustomerDTO = {
                            customerCode: res.bidoSubscriptionDTO.operatorCode
                          };
                          this.eventSubscriptionService
                            .findBidoCustomersBySearchCriteria(bidoCustomerDTO)
                            .subscribe((r) => {
                              if (r) {
                                this.operatorName = r.list[0].customerName;
                              }
                            });
                          this.subscription = res.bidoSubscriptionDTO;
                          this.contactsTableDataSource.setData(res.bidoContactDTO);
                          this.contactsTableDataSource.update();
                        }
                      });
                    }
                  });
                });
                this.updateOpenMode(ComponentOpenMode.Write);
                if (!!this.componentData) {
                  this.componentData.objectId = this.serializationService.serialize(this.subscription);
                }
                this.showSaveSpinner = false;
              },
              () => {
                this.messageService.showErrorMessage('global.errorOnSave');
                this.showSaveSpinner = false;
              }
            );
          } else {
            this.messageService.showErrorMessage('global.internalServerError');
          }
        }
      }
    });
  }

  public cancelSubscription(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadSubscription();
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  public openContactsTab(): void {
    this.currentTabId = this.tabContactsId;
  }

  /*******
   * Popup
   *******/

  public addNewContact(): void {
    this.showContactsPopup = true;
    this.currentContact = {};
  }

  public deleteContact(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.contactsTableDataSource.dataSelection.forEach((selectedContact) => {
          this.contactsTableDataSource.setData(
            this.contactsTableDataSource.data.filter((contact) => contact.contactName !== selectedContact.contactName)
          );
          this.contactsTableDataSource.update();
        });
        this.contactsTableDataSource.dataSelection = [];
      }
    });
  }

  public createContact(event: BidoContactDTO): void {
    const inContactsTable = this.contactsTableDataSource.data.filter(
      (contact) => contact.contactName === event.contactName
    );
    if (inContactsTable.length === 0) {
      this.contactsTableDataSource.addData([event]);
    }
  }

  /*************************************************************************
   * Dialog Search Customer
   *************************************************************************/

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    if (Object.keys(event).length === 0) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
    this.subscription.operatorCode = event.customerCode;
    this.operatorName = event.customerName;
  }
}
