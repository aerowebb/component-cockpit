import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, of } from 'rxjs';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SelectOptionUtils } from '../../../../shared/utils/select-option-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { EnterpriseDefinitionService } from '../enterprise-definition.service';

@Component({
  selector: 'aw-enterprise-definition-warehouse',
  templateUrl: './warehouse.component.html'
})
export class EnterpriseDefinitionWarehouseDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public isWorkshopCategory: boolean;

  @Input()
  public warehouseId?: number;

  @Output()
  public onSave: EventEmitter<void>;

  public companies: LabelValue<number>[];
  public companyId: number | undefined;
  public countries: LabelValue<string>[];
  public providingWarehouses: LabelValue<number>[];
  public sitesByCompany: LabelValue<number>[];
  public warehouse: BidtWarehouseDTO;
  public warehouseTypes: LabelValue<string>[];

  private sites: BidtSiteDTO[];

  public constructor(
    private readonly enterpriseDefinitionService: EnterpriseDefinitionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'EnterpriseDefinitionWarehouseDialogComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public onChangeCompany(): void {
    this.warehouse.bidtSiteId = undefined;

    this.setSitesByCompany();
    this.setProvidingWarehouses();
  }

  public onChangeSite(): void {
    this.warehouse.bidtWarehouseId = undefined;

    this.setProvidingWarehouses();
  }

  public save(): void {
    this.enterpriseDefinitionService.saveWarehouse({ bidtWarehouseDTO: this.warehouse }).subscribe({
      next: () => {
        this.onSave.emit();
        this.messageService.showSuccessMessage('successOnSaveWarehouse');

        this.closeDialog();
      }
    });
  }

  // ////////////////////////////////////////////////////////////////////////////

  private onBeforeLoad(): void {
    this.companyId = undefined;
    this.warehouse = {};
  }

  private onBeforeLoadOnce(): void {
    this.companies = [];
    this.companyId = undefined;
    this.countries = [];
    this.providingWarehouses = [];
    this.sites = [];
    this.sitesByCompany = [];
    this.warehouseTypes = [];
    this.warehouse = {};
    this.isWorkshopCategory = false;

    this.onSave = new EventEmitter<void>();
  }

  private load(): void {
    forkJoin({
      companies: this.companies.length === 0 ? this.enterpriseDefinitionService.loadCompanies({}) : of(this.companies),
      countries:
        this.countries.length === 0
          ? this.propertiesService.getValue(GenericPropertyConstants.COUNTRY_ZONE_MAP)
          : of(this.countries),
      sites: this.sites.length === 0 ? this.enterpriseDefinitionService.loadSites({}) : of(this.sites),
      warehouse: this.warehouseId ? this.enterpriseDefinitionService.getWarehouseById(this.warehouseId) : of(undefined),
      warehouseTypes:
        this.warehouseTypes.length === 0
          ? this.propertiesService.getValue(
              this.isWorkshopCategory
                ? GenericPropertyConstants.WORKSHOP_TYPE_MAP
                : GenericPropertyConstants.WAREHOUSE_TYPE_MAP
            )
          : of(this.warehouseTypes)
    }).subscribe({
      next: ({ companies, countries, sites, warehouse, warehouseTypes }) => {
        this.warehouse = warehouse || {};
        this.warehouse.whCategory =
          this.warehouse.whCategory ||
          (this.isWorkshopCategory
            ? AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
            : AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE);

        this.companies = companies.sort(SelectOptionUtils.sort);
        this.countries = countries
          .map((country) => {
            return {
              label: country.label.split(';')[0],
              value: country.value
            };
          })
          .sort(SelectOptionUtils.sort);
        this.sites = sites;
        this.warehouseTypes = warehouseTypes.sort(SelectOptionUtils.sort);

        if (this.warehouse.bidtSiteId) {
          this.enterpriseDefinitionService.getSiteById(this.warehouse.bidtSiteId).subscribe({
            next: (site) => {
              this.companyId = site.bidtCompanyId;

              this.setSitesByCompany();
              this.setProvidingWarehouses();
            }
          });
        }
      }
    });
  }

  private setProvidingWarehouses(): void {
    if (this.warehouse.bidtSiteId) {
      this.enterpriseDefinitionService.getWarehousesBySiteId(this.warehouse.bidtSiteId).subscribe({
        next: (warehouses) => {
          this.providingWarehouses = warehouses
            .map((warehouse) => {
              return {
                label: StringUtils.orEmpty(warehouse.whName),
                value: warehouse.wareHouseId as number
              };
            })
            .sort(SelectOptionUtils.sort);
        }
      });
    } else {
      this.providingWarehouses = [];
    }
  }

  private setSitesByCompany(): void {
    this.sitesByCompany = this.companyId
      ? this.sites
          .filter((site) => site.bidtCompanyId === this.companyId)
          .map((site) => {
            return {
              label: !StringUtils.isNullOrEmpty(site.siteName)
                ? `${site.siteCode} - ${site.siteName}`
                : (site.siteCode as string),
              value: site.siteId as number
            };
          })
          .sort(SelectOptionUtils.sort)
      : [];
  }
}
