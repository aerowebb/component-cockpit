import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';

import { WorkOrdersFormService } from '../../../../../main/maintenance/work-orders/form/work-orders-form.service';
import { WorkPackageSearchService } from '../../../../../main/maintenance/work-package/search/work-package-search.service';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidmProjectDTOId } from '../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { MoveWorkOrdersInput } from '../../../../../shared/types/api-types/move-work-order-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-work-package-list',
  templateUrl: './work-package-list-dialog.component.html'
})
export class WorkPackageListDialogComponent extends DialogComponent implements OnInit {
  @Input()
  private readonly _workPackage: BidmProjectDTO;

  @Input()
  public selectedWorkOrders: TreeNode[];

  @Output()
  public onTransferOfWO: EventEmitter<BidmProjectDTO>;

  public searchObject: BidmProjectDTO;
  public workPackagesList: LabelValue<BidmProjectDTO>[];
  public selectedWorkPackage: BidmProjectDTO | undefined;
  public workOrderList: BidmWorkOrderDTO[];

  public moveWorkOrderInput: MoveWorkOrdersInput;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    private readonly wpSearchService: WorkPackageSearchService,
    public readonly translateService: TranslateService,
    private readonly workOrdersFormService: WorkOrdersFormService
  ) {
    super(ComponentOpenMode.Write, 'WorkPackageListDialogComponent');
    this.onTransferOfWO = new EventEmitter<BidmProjectDTO>();
  }
  public ngOnInit() {
    this.searchObject = {};
    this.moveWorkOrderInput = {};
    this.workPackagesList = [];
    this.getWorkPackagesList();
  }

  /**
   * This method is used to get the work packages which has to be displayed in list of popup.
   * This is based on the following Criteria :
   *
   * 1. The WPs displayed in the list are the WPs that have the same related asset of the original WP.
   * 2. The WPs displayed in the list are the WPs that are assigned to the same person as the person of the original WP.
   * 3. The WPs displayed in the list are the WPs with the statuses "released", "on going" or "performed".
   *    WPs with other statuses must not be proposed.
   */
  public getWorkPackagesList(): void {
    this.searchObject.assetCode = this._workPackage.assetCode;
    this.wpSearchService.findBidmProjectsBySearchCriteria(this.searchObject).subscribe((result) => {
      if (!!result) {
        const workPackages: BidmProjectDTO[] = result.list.filter(
          (workPackage) =>
            workPackage.receivingAssignedTo === this._workPackage.receivingAssignedTo &&
            (workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED ||
              workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING ||
              workPackage.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED)
        );

        workPackages.forEach((workPackage) => {
          this.workPackagesList.push({
            label: `${workPackage.projectNumber}`,
            value: workPackage
          });
        });

        this.display = true;
      }
    });
  }

  /**
   * This method is used to transfer the work order(s) to the selected work package.
   */
  public transferWorkOrder(): void {
    this.moveWorkOrderInput = {};

    if (!!this.selectedWorkPackage && !!this.selectedWorkPackage.projectId) {
      const projectId: string = this.selectedWorkPackage.projectId;
      const bidmProjectDTOId: BidmProjectDTOId = {
        projectId
      };

      const bidmWorkOrderDTOIds: BidmWorkOrderDTOId[] = [];

      this.workOrderList = this.flatDeep(this.selectedWorkOrders);
      this.workOrderList.forEach((workOrder) => {
        const objectId: BidmWorkOrderDTOId = {
          projectId: !!workOrder.projectId ? workOrder.projectId : '',
          woId: !!workOrder.woId ? workOrder.woId : ''
        };
        bidmWorkOrderDTOIds.push(objectId);
      });

      this.moveWorkOrderInput = {
        bidmProjectDTOId,
        bidmWorkOrderDTOIds
      };

      this.workOrdersFormService.moveWorkOrders(this.moveWorkOrderInput).subscribe(
        (result) => {
          this.display = false;
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnTransferWO'));
          this.onTransferOfWO.emit(this._workPackage);
        },
        (error) => {
          this.display = false;
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnTransferWO'));
        }
      );
    }
  }

  /**
   * This method is to flatten the tree to get the WorkOrder(s)
   */
  private flatDeep(tree: TreeNode[]): BidmWorkOrderDTO[] {
    return tree.reduce(
      (acc, val) => [...acc, ...(val ? [val.data] : []), ...(val.children ? this.flatDeep(val.children) : [])],
      []
    );
  }

  public isValidateEnabled() {
    return this.selectedWorkPackage;
  }

  public cancel(): void {
    this.display = false;
  }
}
