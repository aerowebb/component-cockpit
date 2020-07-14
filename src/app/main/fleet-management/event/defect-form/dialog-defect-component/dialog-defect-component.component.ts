import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { FindAllBirePnByCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtStockMvtDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../../shared/utils/bido-family-variant-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { EventService } from '../../event.service';

@Component({
  selector: 'aw-dialog-defect-component',
  templateUrl: './dialog-defect-component.component.html'
})
export class DialogDefectComponentComponent extends DialogComponent implements OnInit {
  @Input()
  public component: BidtStockMvtDTO;
  @Input()
  public decisionList: SelectItem[];
  @Input()
  public masterEquipment: BidoEquipmentDTO | undefined;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public pnTypeList: LabelValue<string>[];
  @Output()
  public onValidated: EventEmitter<BidtStockMvtDTO>;

  public decision: string | undefined;
  public isRequestForPart: boolean;

  public partTableData: DialogTableData<BirePnDTO>;
  public showPartDialog: boolean;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly eventService: EventService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogDefectComponentComponent');

    this.onValidated = new EventEmitter<BidtStockMvtDTO>();

    this.decision = undefined;
    this.decisionList = [];
    this.isRequestForPart = false;
    this.masterEquipment = undefined;
    this.pnTypeList = [];

    this.showPartDialog = false;
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.component) {
      this.component = {};
    }

    // tslint:disable-next-line:no-string-literal
    if (!!this.component['decision']) {
      this.decisionList.filter((res) => {
        // tslint:disable-next-line:no-string-literal
        if (res.label === this.component['decision']) {
          this.decision = res.value;
        }
      });
    } else {
      if (this.component.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT) {
        this.decision = AWPropertiesConstants.DECISION_BBIS_INSTALL_KEY;
      } else if (this.component.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT) {
        this.decision = AWPropertiesConstants.DECISION_BBTWS_REMOVE_KEY;
      }
    }
  }

  public onSelectPart(pn: BirePnDTO): void {
    this.component.birePnPnCode = pn.pnCode;
  }

  public openPart(): void {
    const partTableCols: TableColumn[] = [
      { field: 'pnCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'articleDesignation', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '20rem' }
    ];

    const criteria: FindAllBirePnByCriteriaInput = {};
    if (!!this.masterEquipment) {
      criteria.familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
        this.masterEquipment.familyVariantCode
      );
      criteria.variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(
        this.masterEquipment.familyVariantCode
      );
    }
    const selectedPnType = this.pnTypeList.find((pnType) => pnType.label.toLowerCase() === 'part');
    if (!!selectedPnType) {
      criteria.birePnDTO = {};
      criteria.birePnDTO.pnType = selectedPnType.value;
    }

    this.partTableData = {
      componentId: this.getComponentName() + '.partDialog',
      tableCols: partTableCols,
      tableRows: this.eventService.findAllBirePnByCriteria(criteria),
      dataKey: 'pnCode',
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };

    this.showPartDialog = true;
  }

  public validate(): void {
    if (StringUtils.isNullOrEmpty(this.component.birePnPnCode)) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.component.stockMvtQuantity = !!this.component.stockMvtQuantity ? this.component.stockMvtQuantity : '0';
      this.component.mvtStatus = this.isRequestForPart ? AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY : undefined;
      if (!!this.decision) {
        this.component.stockMvtWay =
          this.decision === AWPropertiesConstants.DECISION_BBIS_INSTALL_KEY
            ? BidtStockMvtConstants.MVT_WAY_DEBIT
            : BidtStockMvtConstants.MVT_WAY_CREDIT;
      }

      this.onValidated.emit(this.component);
      this.closeDialog();
    }
  }

  public changeRequestForPart() {
    if (this.decision !== '7-ins') {
      this.isRequestForPart = false;
    }
  }
}
