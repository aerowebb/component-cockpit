import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { CreateProcurementRequestInput } from '../../../../../../shared/types/api-input-types/logistic/create-procurement-request-input.interface';
import { BidtProcReqItemDTO } from '../../../../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtWarehouseDTO } from '../../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LogisticsService } from '../../../../logistics.service';
import { MaterialRequestManagementFormService } from '../../material-request-management-form.service';

@Component({
  selector: 'aw-change-warehouse-and-quantity-popup-form',
  templateUrl: './change-warehouse-and-quantity-popup-form.component.html'
})
export class ChangeWarehouseAndQuantityPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public procurementRequest: BidtProcurementRequestDTO;
  @Input()
  public procurementRequestItem: BidtProcReqItemDTO;
  @Input()
  public oldQuantity: number;
  @Input()
  public totalQuantity: number;
  @Output()
  public onValidated: EventEmitter<void>;

  public currentSupplierWarehouse: BidtWarehouseDTO;
  public warehouses: LabelValue<BidtWarehouseDTO>[];
  public newWarehouse: BidtWarehouseDTO | undefined;

  public newQuantity: number;

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    private readonly materialRequestManagementFormService: MaterialRequestManagementFormService,
    private readonly logisticsService: LogisticsService
  ) {
    super(ComponentOpenMode.Read, 'ChangeWarehouseAndQuantityPopupFormComponent');
    this.onValidated = new EventEmitter<void>();
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.newQuantity = this.oldQuantity;
    this.warehouses = [];
    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        if (site && !!site.siteId) {
          this.materialRequestManagementFormService
            .getWarehousesBySiteId(site.siteId)
            .subscribe((warehousesList: BidtWarehouseDTO[]) => {
              this.warehouses = warehousesList
                .filter(
                  (warehouse: BidtWarehouseDTO) =>
                    !!warehouse.whCode &&
                    !!warehouse.whName &&
                    !!warehouse.whCategory &&
                    warehouse.whCategory === AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE
                )
                .map((warehouse) => {
                  return {
                    label: `${warehouse.whCode} - ${warehouse.whName}`,
                    value: warehouse
                  };
                })
                .sort((s1, s2) => s1.label.localeCompare(s2.label));
            });
        }
      }
    });
    if (this.procurementRequestItem.bidtWarehouseId === null && !!this.procurementRequest.bidtWarehouseIssue) {
      this.currentSupplierWarehouse = this.procurementRequest.bidtWarehouseIssue;
    } else if (!!this.procurementRequestItem.bidtWarehouseId) {
      this.logisticsService.getWarehouseById(this.procurementRequestItem.bidtWarehouseId).subscribe({
        next: (warehouse: BidtWarehouseDTO) => {
          this.currentSupplierWarehouse = warehouse;
        }
      });
    }
  }

  public validate(): void {
    if (this.totalQuantity === this.newQuantity) {
      // maj warehouse procurement
      if (!!this.newWarehouse) {
        if (this.procurementRequestItem.bidtWarehouseId === null) {
          this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = this.newWarehouse.wareHouseId as number;
          this.procurementRequest.bidtWarehouseIssue = this.newWarehouse;
          this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
            next: () => {
              this.onValidated.emit();
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnChangeSupplier'));
              this.cancel();
            }
          });
        } else {
          this.procurementRequestItem.bidtWarehouseId = this.newWarehouse.wareHouseId as number;
          this.logisticsService.addOrUpdateItem(this.procurementRequestItem).subscribe({
            next: () => {
              this.onValidated.emit();
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnChangeSupplier'));
              this.cancel();
            }
          });
        }
      }
    } else if (this.totalQuantity > this.newQuantity) {
      // update current item quantity (remove)
      const newQty: number = Number(this.procurementRequestItem.requestedQuantity) - this.newQuantity;
      this.logisticsService
        .updateProcurementRequestItemQuantity({
          itemId: this.procurementRequestItem.id as number,
          newQuantity: newQty.toString(),
          oldQuantity: this.procurementRequestItem.requestedQuantity as string
        })
        .subscribe({
          next: () => {
            // create item proc with warehouse data and new quanti
            if (!!this.procurementRequestItem.birePnPnCode) {
              const input: CreateProcurementRequestInput = {
                bidtProcurementRequest: this.procurementRequest,
                pnCode: this.procurementRequestItem.birePnPnCode,
                quantity: this.newQuantity.toString()
              };
              this.logisticsService.createProcurementRequestItem(input).subscribe((newItem: BidtProcReqItemDTO) => {
                if (!!this.newWarehouse) {
                  newItem.bidtWarehouseId = this.newWarehouse.wareHouseId as number;
                  this.logisticsService.addOrUpdateItem(newItem).subscribe({
                    next: () => {
                      this.onValidated.emit();
                      this.messageService.showSuccessMessage(
                        this.getTranslateKey('successOnChangeSupplierAndQuantity')
                      );
                      this.cancel();
                    }
                  });
                }
              });
            }
          }
        });
    }
  }

  public cancel(): void {
    this.display = false;
  }
}
