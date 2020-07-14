import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidmAttributeConstants } from '../../../../../../shared/constants/bidm-attribute-constants';
import { GenericPropertyConstants as gpc } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidmProjectAttributeDTO } from '../../../../../../shared/types/api-types/bidm-project-attribute-dto.interface';
import { BidmProjectDTOId } from '../../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { WorkPackageSearchService } from '../../../search/work-package-search.service';
import { WorkPackageService } from '../../../work-package.service';

@Component({
  selector: 'aw-wp-last-update-popup',
  styleUrls: ['./wp-last-update-pop-up.component.scss'],
  templateUrl: './wp-last-update-pop-up.component.html'
})
export class LastUpdatePopupComponent extends DialogComponent implements OnInit {
  @Input()
  public bidmProjectDTO: BidmProjectDTO;

  @Input()
  public customers: SearchResultsDTO<BidoCustomerDTO>;

  public displayValue: boolean;

  public readonly componentId: string;
  public statusList: SelectItem[];
  public typeList: SelectItem[];
  public attributeList: BidmProjectAttributeDTO[];

  public status: string;
  public type: string;
  public customerName: string;
  public systemSourceIdValue: string;
  public systemSourceReferenceValue: string;

  public constructor(
    public sessionService: SessionService,
    private readonly wpService: WorkPackageService,
    private readonly wpSearchService: WorkPackageSearchService
  ) {
    super(ComponentOpenMode.Read, 'WorkPackageLastUpdateComponent');
  }

  public ngOnInit() {
    this.systemSourceIdValue = '';
    this.systemSourceReferenceValue = '';

    if (!!this.bidmProjectDTO) {
      const removedstatuses = [
        AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED,
        AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
      ];

      this.wpService.loadStatusList(removedstatuses).subscribe((result) => {
        this.statusList = result;
        this.status = SelectItemUtils.formatSelectItem(this.bidmProjectDTO.statusState, this.statusList);
      });

      this.wpService.loadGenProps(gpc.WORK_PACKAGE_TYPE_MAP).subscribe((r) => {
        this.typeList = r;
        this.type = SelectItemUtils.formatSelectItem(this.bidmProjectDTO.projectType, this.typeList);
      });

      const bidmProjectDTOId: BidmProjectDTOId = {
        projectId: StringUtils.isNullOrEmpty(this.bidmProjectDTO.projectId) ? '' : `${this.bidmProjectDTO.projectId}`
      };

      this.wpSearchService.findBidmProjectAttributesByWorkOrder(bidmProjectDTOId).subscribe((result) => {
        this.attributeList = result;
        const attributeSystemSourceId = this.attributeList.find(
          (attribute) => attribute.attributeName === BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_ID
        );
        this.systemSourceIdValue =
          !!attributeSystemSourceId && !!attributeSystemSourceId.attributeValue
            ? attributeSystemSourceId.attributeValue
            : '';

        const attributeSystemSourceReference = this.attributeList.find(
          (attribute) => attribute.attributeName === BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_REFERENCE
        );

        this.systemSourceReferenceValue =
          !!attributeSystemSourceReference && !!attributeSystemSourceReference.attributeValue
            ? attributeSystemSourceReference.attributeValue
            : '';
      });

      if (!!this.customers) {
        const selectedItem = this.customers.list.find(
          (customer) => customer.customerCode === this.bidmProjectDTO.bidoCustomerCode
        );
        this.customerName =
          !!selectedItem && !!selectedItem.customerName
            ? `${selectedItem.customerName} (${this.bidmProjectDTO.bidoCustomerCode})`
            : !!this.bidmProjectDTO.bidoCustomerCode
            ? `${this.bidmProjectDTO.bidoCustomerCode}`
            : '';
      }
    }
  }
}
