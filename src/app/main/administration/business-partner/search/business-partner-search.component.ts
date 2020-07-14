import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { BusinessPartnerSearchService } from './business-partner-search.service';

interface CustomerRow {
  country: string;
  customerCode: string;
  customerName: string;
  customerType: string;
  isOperator: boolean | undefined;
  isOwner: boolean | undefined;
}

@Component({
  selector: 'aw-business-partner-search',
  templateUrl: './business-partner-search.component.html'
})
export class BusinessPartnerSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly CUSTOMER_TABLE_EXPORT_NAME: string = 'business-partner-list';

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.BUSINESS_PARTNER_SEARCH_CRITERIA_ID;

  public countries: LabelValue<string>[];
  public customerTableDataSource: TableDataSource<CustomerRow>;
  public customerTypes: LabelValue<string>[];
  public searchCriteria: BidoCustomerDTO;
  public searchCriteriaCalculated: boolean;
  public searchCriteriaToSave: BidoCustomerDTO;

  public showAdvancedSearchCriteria: boolean;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly businessPartnerSearchService: BusinessPartnerSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.onBeforeLoad();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_BUSINESS_PARTNER_SEARCH;
  }

  public onBeforeLoad(): void {
    this.init();
    this.initCustomerTableDataSource();
    this.loadReferentialData();
  }

  // //////////////////////////////////////////////////////////////////////////

  public deleteCustomers(customers: CustomerRow[]): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        customers.length === 1 ? 'confirmDeleteSelectedBusinessPartner' : 'confirmDeleteSelectedBusinessPartners'
      ),
      accept: () => {
        const observables = customers.map((customer) =>
          this.businessPartnerSearchService.removeBidoCustomer({
            customerCode: customer.customerCode
          })
        );
        forkJoin(observables).subscribe({
          next: () => {
            this.customerTableDataSource.deleteDataSelection();

            this.messageService.showSuccessMessage(
              this.getTranslateKey(
                customers.length === 1 ? 'successOnDeleteBusinessPartner' : 'successOnDeleteBusinessPartners'
              )
            );
          }
        });
      }
    });
  }

  public exportCustomerTable(): void {
    this.exportService.toExcel(
      this.customerTableDataSource.sanitizedData,
      BusinessPartnerSearchComponent.CUSTOMER_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria = event.criteria as BidoCustomerDTO | undefined;
    if (criteria) {
      // FIXME: Do not load criteria first time if we come from stock alert page
      if (!this.componentData.objectId) {
        this.searchCriteria = criteria;
      } else {
        this.componentData.objectId = undefined;
      }

      this.search();
    } else {
      this.clearSearchCriteria();
    }
  }

  public openCustomer(objectId: string): void {
    this.businessPartnerSearchService.openCustomer(objectId);
  }

  public openNewCustomer(): void {
    this.businessPartnerSearchService.openCustomer(undefined);
  }

  public openCustomers(customers: CustomerRow[]): void {
    customers.forEach((customer) => {
      this.businessPartnerSearchService.openCustomer(customer.customerCode as string);
    });
  }

  private loadReferentialData(): void {
    forkJoin({
      countries: ListUtils.isEmpty(this.countries) ? this.propertiesService.getCountries() : of(this.countries),
      customerTypes: ListUtils.isEmpty(this.customerTypes)
        ? this.propertiesService.getValue(GenericPropertyConstants.CUSTOMER_TYPE_MAP)
        : of(this.customerTypes)
    }).subscribe((result) => {
      this.countries = result.countries;
      this.customerTypes = result.customerTypes;
    });
  }

  public search(): void {
    this.customerTableDataSource.setData([]);
    this.customerTableDataSource.isLoading = true;

    this.businessPartnerSearchService
      .findBidoCustomersBySearchCriteria(this.searchCriteria)
      .pipe(
        map((result) => {
          return result.list
            .filter((customer) => !StringUtils.isNullOrEmpty(customer.customerCode))
            .map((customer, i) => {
              const customerRow: CustomerRow = {
                country: this.formatCountry(customer.country),
                customerCode: customer.customerCode as string,
                customerName: StringUtils.orEmpty(customer.customerName),
                customerType: this.formatCustomerType(customer.customerType),
                isOperator: customer.isOperator,
                isOwner: customer.isOwner
              };

              return customerRow;
            });
        }),
        finalize(() => {
          this.customerTableDataSource.isLoading = false;

          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
        })
      )
      .subscribe((customers) => {
        this.customerTableDataSource.setData(customers);
        this.customerTableDataSource.addReferenceDataToColumn('country', this.countries);
        this.customerTableDataSource.addReferenceDataToColumn('customerType', this.customerTypes);
      });
  }

  private clearSearchCriteria(): void {
    this.searchCriteria = {};
  }

  public saveSearchCriteriaAsked(): void {
    this.searchCriteriaToSave = this.searchCriteria;
  }

  private init(): void {
    this.countries = [];
    this.customerTypes = [];
    this.searchCriteria = {};
    this.showAdvancedSearchCriteria = false;
  }

  private initCustomerTableDataSource(): void {
    this.customerTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'customerCode', width: '20%' },
        {
          field: 'customerName',
          translateKey: this.getTranslateKey('customerName'),
          width: '20%'
        },
        {
          field: 'isOwner',
          alignment: ColumnAlignment.CENTER,
          translateKey: this.getTranslateKey('isOwner'),
          width: '10%'
        },
        {
          field: 'isOperator',
          alignment: ColumnAlignment.CENTER,
          translateKey: this.getTranslateKey('isOperator'),
          width: '10%'
        },
        {
          field: 'customerType',
          translateKey: this.getTranslateKey('customerType'),
          width: '20%'
        },
        {
          field: 'country',
          translateKey: this.getTranslateKey('country'),
          width: '20%'
        }
      ]
    });
  }

  private formatCountry(countryKey: string | undefined): string {
    if (!!countryKey) {
      const matchingCountry = this.countries.find((country) => country.value === countryKey);

      return !!matchingCountry ? StringUtils.orEmpty(matchingCountry.label) : '';
    } else {
      return '';
    }
  }

  private formatCustomerType(customerTypeKey: string | undefined): string {
    if (!!customerTypeKey) {
      const matchingCustomerType = this.customerTypes.find((customerType) => customerType.value === customerTypeKey);

      return !!matchingCustomerType ? StringUtils.orEmpty(matchingCustomerType.label) : '';
    } else {
      return '';
    }
  }
}
