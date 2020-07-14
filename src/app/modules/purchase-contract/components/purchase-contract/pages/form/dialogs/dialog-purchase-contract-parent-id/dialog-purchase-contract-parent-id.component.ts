import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { TableDataSource } from '../../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../../shared/types/label-value.interface';
import { PurchaseContractPropertyConstants } from '../../../../../../constants/properties/purchase-contract-property-constants';
import { BidtPurchaseContractDTO } from '../../../../../../dtos/bidt-purchase-contract-dto.interface';
import { FindBidtPurchaseContractsByCriteriaInput } from '../../../../../../dtos/input/find-bidt-purchase-contracts-by-criteria-input.interface';
import { PurchaseContractService } from '../../../../../../services/purchase-contract.service';
import { LabelValueHelper } from '../../../../../../utils/label-value-helper';

@Component({
  selector: 'aw-dialog-purchase-contract-parent-id',
  templateUrl: './dialog-purchase-contract-parent-id.component.html'
})
export class DialogPurchaseContractParentIdComponent extends DialogComponent implements OnInit {
  public parentContractTableDataSource: TableDataSource<BidtPurchaseContractDTO>;
  public searchObject: FindBidtPurchaseContractsByCriteriaInput;
  public totalFilteredRows: number;
  public isLoading: boolean;
  public statusList: LabelValue<string>[];

  @Output()
  public onSelected = new EventEmitter<BidtPurchaseContractDTO>();

  public constructor(
    public purchaseContractService: PurchaseContractService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogPurchaseContractParentIdComponent');

    this.onSelected = new EventEmitter<BidtPurchaseContractDTO>();
    this.totalFilteredRows = 0;
    this.searchObject = { pcCreationDateInterval: {} };
    this.isLoading = false;

    this.initParentContractTableDataSource();
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
    this.loadStatusList();
  }

  private initParentContractTableDataSource(): void {
    this.parentContractTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'pcNumber',
          translateKey: this.getTranslateKey('pcNumber')
        },
        {
          field: 'pcLabel',
          translateKey: this.getTranslateKey('pcLabel')
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('statusState')
        },
        {
          field: 'pcLegalCommitment',
          translateKey: this.getTranslateKey('pcLegalCommitment')
        },
        {
          field: 'pcCreationDateStart',
          translateKey: this.getTranslateKey('pcCreationDateStart')
        }
      ],
      data: []
    });
  }

  public cancel(): void {
    super.closeDialog();
  }

  private loadStatusList(): void {
    this.propertiesService
      .getValue(PurchaseContractPropertyConstants.CONTRACT_STATUS_MAP)
      .subscribe((result) => (this.statusList = result));
  }

  public search(): void {
    this.loadContracts();
  }

  private loadContracts(): void {
    this.isLoading = true;
    this.purchaseContractService
      .findBidtPurchaseContractByCriteria(this.searchObject)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((results) => {
        if (results) {
          this.parentContractTableDataSource.setData(results.list);
          this.parentContractTableDataSource.dataSrc.forEach((element) => {
            element.statusState = LabelValueHelper.getLabelByValue(this.statusList, element.statusState);
          });
        }
      });
  }

  public onValidate(): void {
    this.onSelected.emit(this.parentContractTableDataSource.dataSelection[0]);
    super.closeDialog();
  }

  public onCancel(): void {
    this.parentContractTableDataSource.setData([]);
    this.totalFilteredRows = 0;
    this.closeDialog();
  }
}
