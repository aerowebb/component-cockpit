import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { LogisticsService } from '../../../main/logistics/logistics.service';
import { DialogWorkOrderEditService } from '../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkOrderOVSInputDTO } from '../../../shared/types/api-output-types/ovs-popup/work-order-ovs-input-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { SessionService } from '../../services/session.service';
import { UsersForWorkOrderInput } from '../../types/api-input-types/user-profile-management/users-for-work-order.interface';
import { BidmWorkOrderDTO } from '../../types/api-types/bidm-work-order-dto.interface';
import { BidoUserDTO } from '../../types/api-types/bido-user-dto.interface';
import { BidtSiteDTO } from '../../types/api-types/bidt-site-dto.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

import { DialogSearchWorkOrderService } from './dialog-search-work-order.service';

@Component({
  selector: 'aw-dialog-search-work-order',
  templateUrl: 'dialog-search-work-order.component.html'
})
export class DialogSearchWorkOrderComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<BidmWorkOrderDTO>;
  public selectedObject: BidmWorkOrderDTO;
  public searchObject: WorkOrderOVSInputDTO;
  public isLoading: boolean;
  public bidtSiteId: string | undefined;

  // DropDown
  public propertyWoType: LabelValue<string>[];
  public sites: LabelValue<string>[];
  public status: LabelValue<string>[];
  public userList: SelectItem[];
  public warehouses: LabelValue<number>[];
  public sitesList: BidtSiteDTO[];

  @Output()
  public onSelected = new EventEmitter<BidmWorkOrderDTO>();

  @Input()
  public sourceSearchObject: WorkOrderOVSInputDTO;

  public showPnDialog: boolean;
  public pn: BirePnDTO | undefined;
  public disable: boolean;

  public constructor(
    public dialogSearchWorkOrderService: DialogSearchWorkOrderService,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly messageService: MessageService,
    private readonly logisticsService: LogisticsService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchWorkOrderComponent');
    this.isLoading = false;
    this.resultsTable = {
      list: [],
      moreResults: false
    };

    this.searchObject = {
      projectCriteria: {},
      workOrderCriteria: {}
    };

    this.selectedObject = {};
    this.showPnDialog = false;

    this.resultsTableCols = [
      { field: 'bidmProjectNumber', alignment: 'left', width: '100px' },
      { field: 'woCode', alignment: 'left', width: '100px' },
      { field: 'woType', alignment: 'left', width: '100px' },
      { field: 'calculatedStatus', alignment: 'left', width: '100px' },
      { field: 'woDescription', alignment: 'left', width: '250px' }
    ];
    this.propertyWoType = [];
    this.status = [];
    this.sites = [];
    this.warehouses = [];

    this.loadPrCategories();
    this.loadSites();
    this.loadStatus();
    this.loadUser();
  }

  public ngOnInit(): void {
    if (!!this.sourceSearchObject) {
      this.bidtSiteId = this.sourceSearchObject.projectCriteria.bireRepairCenterCode;

      this.updateWarehouses();
      this.searchObject.workOrderCriteria.bidtWarehouseId = this.sourceSearchObject.workOrderCriteria.bidtWarehouseId;
      this.disable = true;
    }
  }

  public searchWorkOrders(): void {
    this.isLoading = true;
    const site = this.sitesList.find((s) => s.siteId === Number(this.bidtSiteId));
    if (!!site) {
      this.searchObject.projectCriteria.bireRepairCenterCode = site.siteCode;
    }
    this.dialogSearchWorkOrderService.findWorkOrder(this.searchObject).subscribe(
      (results) => {
        if (results) {
          this.resultsTable = results;
          this.isLoading = false;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.selectedObject = {};
    this.display = false;
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedObject = {};
  }

  // Clean all the object on rerender
  public onShow(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.woCode;
  }

  private loadPrCategories(): void {
    this.dialogSearchWorkOrderService.getAirmWorkOrderTypeList().subscribe(
      (result) => {
        this.propertyWoType = result;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetWoTypeList'));
      }
    );
  }

  private loadSites(): void {
    this.sitesList = [];
    this.logisticsService.findAllBireSite().subscribe({
      next: (sites) => {
        this.sitesList = sites;
        this.sites = sites
          .map((res) => {
            return {
              label: `${res.siteCode} - ${res.siteName}`,
              value: !!res.siteId ? res.siteId.toString() : ''
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private loadStatus(): void {
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_SIMULATED,
      label: this.translateService.instant('simulated') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED,
      label: this.translateService.instant('planned') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED,
      label: this.translateService.instant('released') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING,
      label: this.translateService.instant('onGoing') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED,
      label: this.translateService.instant('toBeConfirmed') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED,
      label: this.translateService.instant('performed') as string
    });
    this.status.push({
      value: AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE,
      label: this.translateService.instant('closed') as string
    });
  }

  private loadUser(): void {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    };

    this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe((data: BidoUserDTO[]) => {
      this.userList = data.map((user) => {
        return {
          label: `${user.lastname} ${user.firstname}`,
          value: user.userId
        };
      });
    });
  }

  private loadWarehouses(siteId: number): void {
    this.logisticsService.getWarehousesBySiteId(siteId).subscribe({
      next: (warehouses) => {
        this.warehouses = warehouses
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode}` + (warehouse.whName ? ` - ${warehouse.whName}` : ''),
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  public updateWarehouses(): void {
    this.searchObject.workOrderCriteria.bidtWarehouseId = undefined;
    this.warehouses = [];

    if (this.bidtSiteId && !isNaN(Number(this.bidtSiteId))) {
      this.loadWarehouses(Number(this.bidtSiteId));
    }
  }

  public openPnDialog(): void {
    this.showPnDialog = true;
  }

  public onSelectPn(pn: BirePnDTO): void {
    this.pn = pn;
    this.searchObject.workOrderCriteria.assetPn = this.pn.articleDesignation;
  }

  public erasePn(): void {
    this.pn = undefined;
    this.searchObject.workOrderCriteria.assetPn = undefined;
  }
}
