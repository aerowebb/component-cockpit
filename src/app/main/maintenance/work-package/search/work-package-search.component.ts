import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { AssetSearchService } from '../../../../main/fleet-management/asset/search/asset-search.service';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants as gpc } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PageService } from '../../../../shared/services/page.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { DialogWorkOrderEditService } from '../form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkPackageService } from '../work-package.service';

import { WorkPackageSearchService } from './work-package-search.service';

interface ResultRow {
  id?: string;
  number?: number;
  name?: string;
  type?: string;
  asset?: string;
  status?: string;
  mroCenter?: string;
  workshop?: string;
  assignedTo?: string;
  operation?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  dueDate?: Date;
  receivingNumber?: string;
  workPackage: BidmProjectDTO;
}

@Component({
  selector: 'aw-work-package-search',
  styleUrls: ['./work-package-search.component.scss'],
  templateUrl: './work-package-search.component.html'
})
export class WorkPackageSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: BidmProjectDTO;
  public resultTable: SearchResultsDTO<ResultRow>;
  public resultTableCols: TableColumn[];
  public selectedWorkPackages: ResultRow[];
  public isTableLoading: boolean;
  public dateCriteriaList: SelectItem[];
  public statusList: SelectItem[];
  public mroCenterList: SelectItem[];
  public workShopList: SelectItem[];
  public typeList: SelectItem[];
  public operationList: SelectItem[];
  public userList: SelectItem[];
  public propertySourceSystemId: LabelValue<string>[];
  public showAdvancedCriteria: boolean;
  public showEquipmentDialog: boolean = false;
  public hasPMRights: boolean = false;
  public globalSearch: boolean = false;
  public currentLang: string;

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
    public sessionService: SessionService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly pageService: PageService,
    private readonly wpSearchService: WorkPackageSearchService,
    private readonly wpService: WorkPackageService,
    private readonly assetSearchService: AssetSearchService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.checkPMRights();

    this.resultTable = { list: [], moreResults: false };
    this.selectedWorkPackages = [];
    this.propertySourceSystemId = [];
    this.workShopList = [];

    this.showAdvancedCriteria = false;

    this.initResultTableCols();
    this.resetSearchCriteria();

    this.wpService.loadMROCenterList().subscribe((result) => (this.mroCenterList = result));
    this.wpService.loadGenProps(gpc.WORK_PACKAGE_TYPE_MAP).subscribe((r) => (this.typeList = r));
    this.wpService.loadOperationList().subscribe((result) => (this.operationList = result));
    this.wpService.loadUserList().subscribe((result) => (this.userList = result));
    this.wpSearchService.loadDateCriteriaList().subscribe((result) => (this.dateCriteriaList = result));

    this.dialogWorkOrderEditService.loadWareHouses().subscribe((result) => {
      this.workShopList = result.map((warehouse) => {
        return {
          label: warehouse.whName,
          value: warehouse.wareHouseId
        };
      });
    });

    const bireId: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.ASSET_SYSTEM_SOURCE_ID.toString()
    };
    this.assetSearchService.getAssetSourceSystemIdList(bireId).subscribe(
      (results) => {
        this.propertySourceSystemId = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
      }
    );

    this.currentLang = this.translateService.currentLang;
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_PACKAGE_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    const removedstatuses: string[] = [];
    if (!this.globalSearch) {
      removedstatuses.push(AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED);
      removedstatuses.push(AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED);
    }
    this.wpService.loadStatusList(removedstatuses).subscribe((result) => (this.statusList = result));
  }

  private checkPMRights(): void {
    this.wpSearchService
      .hasManagePMRights({ useCaseCode: BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT })
      .subscribe((hasPMRights) => {
        this.hasPMRights = hasPMRights;
      });
  }

  private initResultTableCols(): void {
    this.resultTableCols = [
      { field: 'number', alignment: 'left', width: '7%' },
      { field: 'name', alignment: 'left', width: '18%' },
      { field: 'type', alignment: 'left', width: '5%' },
      { field: 'asset', alignment: 'left', width: '15%' },
      { field: 'status', alignment: 'left', width: '10%' },
      { field: 'assignedTo', alignment: 'left', width: '15%' },
      { field: 'startDate', alignment: 'left', width: '10%' },
      { field: 'dueDate', alignment: 'left', width: '10%' },
      { field: 'endDate', alignment: 'left', width: '10%' }
    ];
  }
  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public search(): void {
    this.isTableLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.searchObject.defaultStatusFilter = !this.globalSearch;
    this.wpSearchService.findBidmProjectsBySearchCriteria(this.searchObject).subscribe((result) => {
      this.isTableLoading = false;

      this.setResultTable(result);

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  private setResultTable(result: SearchResultsDTO<BidmProjectDTO>): void {
    if (!!result) {
      this.resultTable.moreResults = result.moreResults;
      this.resultTable.list = result.list.map((workPackage) => {
        const resultRow: ResultRow = {
          id: workPackage.projectId,
          number: workPackage.projectNumber,
          name: workPackage.projectName,
          type: SelectItemUtils.formatSelectItem(workPackage.projectType, this.typeList),
          asset: workPackage.assetName,
          status: SelectItemUtils.formatSelectItem(workPackage.statusState, this.statusList),
          mroCenter: SelectItemUtils.formatSelectItem(workPackage.bireRepairCenterCode, this.mroCenterList),
          workshop: SelectItemUtils.formatNumberSelectItem(workPackage.bidtWarehouseId, this.workShopList),
          assignedTo: SelectItemUtils.formatSelectItem(workPackage.receivingAssignedTo, this.userList),
          operation: SelectItemUtils.formatSelectItem(workPackage.bidoOperationCode, this.operationList),
          description: workPackage.projectDescription,
          startDate: workPackage.projectStartDate,
          endDate: workPackage.projectEndDate,
          dueDate: workPackage.projectDueDate,
          receivingNumber: workPackage.receivingNumber,
          workPackage
        };

        return resultRow;
      });
    }

    this.selectedWorkPackages = [];
  }

  public openNewWorkPackage(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Create,
      objectId: undefined
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openSelectedWorkPackages(curWorkPackage?: ResultRow): void {
    const selectedWorkPackages = curWorkPackage ? [curWorkPackage] : this.selectedWorkPackages;
    selectedWorkPackages.forEach((wp) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({ wpId: wp.id })
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public deleteWorkPackages(): void {
    const partialMessageKey =
      this.selectedWorkPackages.length > 1 ? 'confirmDeleteSelectedWorkPackages' : 'confirmDeleteSelectedWorkPackage';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const observables = this.selectedWorkPackages
          .map((row) => row.workPackage)
          .map((workPackage) => this.wpSearchService.removeBidmProject({ projectId: workPackage.projectId as string }));
        forkJoin(observables).subscribe(() => {
          this.messageService.showSuccessMessage(
            this.getTranslateKey(
              this.selectedWorkPackages.length > 1 ? 'successOnRemoveWorkPackages' : 'successOnRemoveWorkPackage'
            )
          );

          this.selectedWorkPackages = [];
          this.search();
        });
      }
    });
  }

  public openEquipmentDialog(): void {
    this.showEquipmentDialog = true;
  }
  public onSelectEquipment(equipment: BidoEquipmentLWO): void {
    this.searchObject.assetCode = equipment.equipmentCode;
  }

  public onStartDateCriteriaChange() {
    if (!this.searchObject.startDateCriteria) {
      this.searchObject.projectStartDate = undefined;
    }
  }
  public onEndDateCriteriaChange() {
    if (!this.searchObject.endDateCriteria) {
      this.searchObject.projectEndDate = undefined;
    }
  }

  public openAsset(workPackage: BidmProjectDTO): void {
    if (!StringUtils.isNullOrEmpty(workPackage.assetCode)) {
      this.pageService.openAsset(workPackage.assetCode, workPackage.equipmentFunction);
    }
  }
  /**
   * To get the list of workshops on selection of MRO center
   */
  public getWorkShops(): void {
    if (!!this.searchObject.bireRepairCenterCode && !StringUtils.isEmpty(this.searchObject.bireRepairCenterCode)) {
      this.dialogWorkOrderEditService.loadWarehouseList(this.searchObject.bireRepairCenterCode).subscribe((result) => {
        this.workShopList = result.map((workCenter) => {
          return {
            label: workCenter.label,
            value: Number(workCenter.value)
          };
        });
      });
    } else {
      this.searchObject.bidtWarehouseId = undefined;
      this.dialogWorkOrderEditService.loadWareHouses().subscribe((result) => {
        this.workShopList = result.map((warehouse) => {
          return {
            label: warehouse.whName,
            value: warehouse.wareHouseId
          };
        });
      });
    }
  }
}
