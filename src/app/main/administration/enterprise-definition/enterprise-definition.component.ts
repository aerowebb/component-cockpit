import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable, forkJoin, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { EnterpriseDefinitionElementDTO } from '../../../shared/types/api-types/enterprise-definition-element-dto.interface';
import { TreeNodeDTO } from '../../../shared/types/api-types/tree-node-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ListUtils } from '../../../shared/utils/list-utils';

import { EnterpriseDefinitionService } from './enterprise-definition.service';

@Component({
  selector: 'aw-enterprise-definition',
  templateUrl: './enterprise-definition.component.html'
})
export class EnterpriseDefinitionComponent extends PageComponent<PageComponentData> {
  public addItems: MenuItem[];
  public companyTypes: LabelValue<string>[];
  public enterpriseDefinitionTable: TreeNodeDTO<EnterpriseDefinitionElementDTO>[];
  public enterpriseDefinitionTableCols: TableColumn[];
  public enterpriseDefinitionTableSelection: TreeNodeDTO<EnterpriseDefinitionElementDTO> | undefined;
  public warehouseTypes: LabelValue<string>[];
  public workshopTypes: LabelValue<string>[];

  public isLoadingEnterpriseDefinitionTable: boolean;
  public isSaving: boolean;
  public showCompanyDialog: boolean;
  public showSiteDialog: boolean;
  public showWarehouseDialog: boolean;
  public showWorkshopDialog: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly enterpriseDefinitionService: EnterpriseDefinitionService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.ADM_ENTERPRISE_DEFINITION;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public deleteSelection(): void {
    if (this.enterpriseDefinitionTableSelection) {
      const element = this.enterpriseDefinitionTableSelection.data;

      let delete$: Observable<void> | undefined;
      if (element.isCompany) {
        if (ListUtils.orEmpty(this.enterpriseDefinitionTableSelection.children).length === 0) {
          delete$ = this.deleteCompany(element);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('companyHasChildren'));
        }
      } else if (element.isSite) {
        if (ListUtils.orEmpty(this.enterpriseDefinitionTableSelection.children).length === 0) {
          delete$ = this.deleteSite(element);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('siteHasChildren'));
        }
      } else {
        delete$ = this.deleteWarehouse(element);
      }

      if (delete$) {
        this.confirmationService.confirmDelete({
          messageKey: 'global.deleteConfirmationMsg',
          accept: () => {
            (delete$ as Observable<void>).subscribe({
              next: () => {
                this.reload();
              }
            });
          }
        });
      }
    }
  }

  public editSelection(): void {
    if (this.enterpriseDefinitionTableSelection) {
      const element = this.enterpriseDefinitionTableSelection.data;

      this.showCompanyDialog = element.isCompany;
      this.showSiteDialog = element.isSite;
      this.showWarehouseDialog = element.isWarehouse;
      this.showWorkshopDialog = element.isWorkshop;
    }
  }

  public openSelection(): void {
    if (this.enterpriseDefinitionTableSelection) {
      const element = this.enterpriseDefinitionTableSelection.data;

      if (element.isSite) {
        this.openSite(element);
      }
      if (element.isWarehouse) {
        this.openWarehouse(element);
      } else if (element.isWorkshop) {
        this.openWorkshop(element);
      }
    }
  }

  public reload(): void {
    this.onBeforeLoad();
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  private deleteCompany(element: EnterpriseDefinitionElementDTO): Observable<void> {
    return this.enterpriseDefinitionService.deleteCompany(element.id).pipe(
      concatMap(() => {
        this.messageService.showSuccessMessage('successOnDeleteCompany');

        return of(undefined);
      })
    );
  }

  private deleteSite(element: EnterpriseDefinitionElementDTO): Observable<void> {
    return this.enterpriseDefinitionService.deleteSite([element.id]).pipe(
      concatMap(() => {
        this.messageService.showSuccessMessage('successOnDeleteSite');

        return of(undefined);
      })
    );
  }

  private deleteWarehouse(element: EnterpriseDefinitionElementDTO): Observable<void> {
    return this.enterpriseDefinitionService.deleteWarehouse([element.id]).pipe(
      concatMap(() => {
        this.messageService.showSuccessMessage('successOnDeleteWarehouse');

        return of(undefined);
      })
    );
  }

  private load(): void {
    forkJoin({
      enterpriseDefinition: this.enterpriseDefinitionService.loadEnterpriseDefinition(),
      companyTypes:
        this.companyTypes.length === 0
          ? this.propertiesService.getValue(GenericPropertyConstants.COMPANY_TYPE_MAP)
          : of(this.companyTypes),
      warehouseTypes:
        this.warehouseTypes.length === 0
          ? this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_TYPE_MAP)
          : of(this.warehouseTypes),
      workshopTypes:
        this.workshopTypes.length === 0
          ? this.propertiesService.getValue(GenericPropertyConstants.WORKSHOP_TYPE_MAP)
          : of(this.workshopTypes)
    }).subscribe({
      next: ({ enterpriseDefinition, companyTypes, warehouseTypes, workshopTypes }) => {
        this.enterpriseDefinitionTable = enterpriseDefinition;

        this.companyTypes = companyTypes;
        this.warehouseTypes = warehouseTypes;
        this.workshopTypes = workshopTypes;
      }
    });
  }

  private onBeforeLoad(): void {
    this.enterpriseDefinitionTable = [];
    this.enterpriseDefinitionTableSelection = undefined;
    this.isLoadingEnterpriseDefinitionTable = true;
    this.showCompanyDialog = false;
    this.showSiteDialog = false;
    this.showWarehouseDialog = false;
    this.showWorkshopDialog = false;
  }

  private onBeforeLoadOnce(): void {
    this.companyTypes = [];
    this.warehouseTypes = [];
    this.workshopTypes = [];

    this.setAddItems();
    this.setEnterpriseDefinitionTableCols();
  }

  private openSite(element: EnterpriseDefinitionElementDTO): void {
    const objectId: BidtSiteDTO = {
      siteId: element.id,
      siteCode: element.code,
      siteName: element.name
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_SITE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openWarehouse(element: EnterpriseDefinitionElementDTO): void {
    const objectId: BidtWarehouseDTO = {
      wareHouseId: element.id,
      whCode: element.code,
      whName: element.name
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_WAREHOUSE_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openWorkshop(element: EnterpriseDefinitionElementDTO): void {
    const objectId: BidtWarehouseDTO = {
      wareHouseId: element.id,
      whCode: element.code,
      whName: element.name
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'WorkshopFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setAddItems(): void {
    const companyKey = 'company';
    const siteKey = 'site';
    const warehouseKey = 'warehouse';
    const workshopKey = 'workshop';
    this.translateService.get([companyKey, siteKey, warehouseKey, workshopKey]).subscribe({
      next: (results) => {
        this.addItems = [
          {
            label: results[companyKey],
            command: () => {
              this.showCompanyDialog = true;
            }
          },
          {
            label: results[siteKey],
            command: () => {
              this.showSiteDialog = true;
            }
          },
          {
            label: results[warehouseKey],
            command: () => {
              this.showWarehouseDialog = true;
            }
          },
          {
            label: results[workshopKey],
            command: () => {
              this.showWorkshopDialog = true;
            }
          }
        ];
      }
    });
  }

  private setEnterpriseDefinitionTableCols(): void {
    this.enterpriseDefinitionTableCols = [
      { field: 'code', alignment: 'left', width: '20%' },
      { field: 'name', alignment: 'left', width: '50%' },
      { field: 'level', alignment: 'left', width: '10%' },
      { field: 'type', alignment: 'left', width: '20%' }
    ];
  }
}
