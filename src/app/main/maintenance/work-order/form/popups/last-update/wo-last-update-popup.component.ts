import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

import { BidmWoAttributeDTO } from '../../../../../../../../generated_files/api-types/bidm-wo-attribute-dto.interface';
import { BidmAttributeConstants } from '../../../../../../shared/constants/bidm-attribute-constants';
import { GenericPropertyConstants as gpc } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidmWorkOrderDTOId } from '../../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { WorkOrderFormService } from '../../work-order-form.service';

@Component({
  selector: 'aw-wo-last-update-popup',
  styleUrls: ['./wo-last-update-popup.component.scss'],
  templateUrl: './wo-last-update-popup.component.html'
})
export class WOLastUpdatePopupComponent extends DialogComponent implements OnInit {
  @Input()
  public workOrder: BidmWorkOrderDTO;

  public displayValue: boolean;

  public readonly componentId: string;
  public typeList: SelectItem[];
  public type: string;
  public statusList: SelectItem[];
  public status: string;
  public attributeList: BidmWoAttributeDTO[];
  public systemSourceIdValue: string;
  public systemSourceReferenceValue: string;

  public constructor(public sessionService: SessionService, private readonly woFormService: WorkOrderFormService) {
    super(ComponentOpenMode.Read, 'WorkOrderLastUpdateComponent');
  }

  public ngOnInit() {
    this.systemSourceIdValue = '';
    this.systemSourceReferenceValue = '';

    if (!!this.workOrder) {
      const bidmWorkOrderDTOId: BidmWorkOrderDTOId = {
        projectId: StringUtils.isNullOrEmpty(this.workOrder.projectId) ? '' : `${this.workOrder.projectId}`,
        woId: StringUtils.isNullOrEmpty(this.workOrder.woId) ? '' : `${this.workOrder.woId}`
      };

      this.woFormService.findWorkOrderAttributes(bidmWorkOrderDTOId).subscribe((r) => {
        this.attributeList = r;
        const attributeSystemSourceId = this.attributeList.find(
          (attribute) => attribute.attributeName === BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_ID
        );
        const attributeSystemSourceReference = this.attributeList.find(
          (attribute) => attribute.attributeName === BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_REFERENCE
        );

        this.systemSourceIdValue =
          !!attributeSystemSourceId && !!attributeSystemSourceId.attributeValue
            ? attributeSystemSourceId.attributeValue
            : '';

        this.systemSourceReferenceValue =
          !!attributeSystemSourceReference && !!attributeSystemSourceReference.attributeValue
            ? attributeSystemSourceReference.attributeValue
            : '';
      });

      this.woFormService.loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP).subscribe((r) => {
        this.typeList = r;
        this.type = SelectItemUtils.formatSelectItem(this.workOrder.woType, this.typeList);
      });

      this.woFormService.loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP).subscribe((r) => {
        this.statusList = r;
        this.status = SelectItemUtils.formatSelectItem(this.workOrder.statusState, this.statusList);
      });
    }
  }
}
