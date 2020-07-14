import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BidoCustomerEvolutionDTO } from '../../../../../shared/types/api-types/bido-customer-evolution-dto.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { SelectItemUtils } from '../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { BusinessPartnerFormService } from '../business-partner-form.service';

@Component({
  selector: 'aw-dialog-business-partner-customer-evolution',
  templateUrl: './dialog-business-partner-customer-evolution.component.html'
})
export class DialogBusinessPartnerCustomerEvolutionComponent extends DialogComponent implements OnInit {
  @Input()
  public customerEvolution: BidoCustomerEvolutionDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BidoCustomerEvolutionDTO>;

  public customizedCompliances: SelectItem[];

  public evolutionTableData: DialogTableData<BireEvolutionDTO>;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public showEvolutionDialog: boolean;

  public constructor(
    private readonly businessPartnerFormService: BusinessPartnerFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogBusinessPartnerCustomerEvolutionComponent');

    this.onValidated = new EventEmitter<BidoCustomerEvolutionDTO>();

    this.showEvolutionDialog = false;

    this.initEvolutionTableData();
    this.initKeyMap();
    this.loadCustomizedCompliances();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.customerEvolution) {
      this.resetCustomerEvolution();
    }
  }

  public openEvolutionDialog(): void {
    if (this.isReadOpenMode) {
      this.showEvolutionDialog = false;
    } else {
      this.showEvolutionDialog = true;
    }
  }

  public resetCustomerEvolution(): void {
    this.customerEvolution = {};
  }

  public validate(): void {
    if (
      StringUtils.isNullOrEmpty(this.customerEvolution.evolutionNumber) ||
      StringUtils.isNullOrEmpty(this.customerEvolution.evolutionRevisionNumber)
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.customerEvolution);
      this.closeDialog();
    }
  }

  private initEvolutionTableData(): void {
    const evolutionTableCols: TableColumn[] = [
      { field: 'evolutionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', alignment: 'left', width: '7.5rem', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', alignment: 'center', width: '5rem', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', alignment: 'left', width: '20rem', filterMode: TableColumnFilterMode.Input }
    ];

    this.evolutionTableData = {
      componentId: 'DialogEvolution',
      tableCols: evolutionTableCols,
      tableRows: this.businessPartnerFormService.findBireEvolutionsByEvolutionCriteria(
        {},
        undefined,
        undefined,
        undefined
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private initKeyMap(): void {
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('evolutionCompliance', this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP));
    this.keyMap.set('evolutionType', this.propertiesService.getValue(GenericPropertyConstants.EVOLUTION_TYPE_MAP));
  }

  private loadCustomizedCompliances(): void {
    this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP).subscribe((results) => {
      this.customizedCompliances = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  /**************************************************************************
   * Evolution Dialog
   *************************************************************************/

  public onSelectedEvolution(customerEvolution: BireEvolutionDTO): void {
    if (!!customerEvolution) {
      this.customerEvolution.evolutionNumber = customerEvolution.evolutionNumber;
      this.customerEvolution.evolutionRevisionNumber = customerEvolution.evolutionRevisionNumber;
    }
  }
}
