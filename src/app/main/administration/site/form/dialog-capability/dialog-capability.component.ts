import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { FindAllBirePnByCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BsdeSitePnTilDTO } from '../../../../../shared/types/api-types/bsde-site-pn-til-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { SiteFormService } from '../site-form.service';

@Component({
  selector: 'aw-dialog-capability',
  templateUrl: './dialog-capability.component.html'
})
export class DialogCapabilityComponent extends DialogComponent implements OnInit {
  public technicalLevels: LabelValue<string>[];
  @Input()
  public capabilityTemp: BsdeSitePnTilDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BsdeSitePnTilDTO>;

  public partNumberTableData: DialogTableData<BirePnDTO>;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public showPartNumberDialog: boolean;

  public capability: BsdeSitePnTilDTO;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly siteFormService: SiteFormService,
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Read, 'DialogCapabilityComponent');
    this.technicalLevels = [];
    this.onValidated = new EventEmitter<BsdeSitePnTilDTO>();

    this.showPartNumberDialog = false;
    this.capability = {};
  }

  private loadTechnicalLevel(): void {
    this.siteFormService.findAllBireTils().subscribe((results) => {
      results.forEach((result) => {
        if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
          const tempName: LabelValue<string> = {
            value: result.technicalLevel.toString(),
            label: result.tilName
          };
          this.technicalLevels.push(tempName);
        }
      });

      if (this.capabilityTemp != undefined) {
        this.capability = this.capabilityTemp;
      }
    });
  }

  public ngOnInit(): void {
    this.loadTechnicalLevel();
    this.updateOpenMode(this.openMode);

    if (!this.capability) {
      this.capability = {};
      this.capability.tat = 0;
      this.capability.cost = '0';
    }
  }

  public openPartNumberDialog(): void {
    this.showPartNumberDialog = true;
    this.initPartNumberTableData();
  }

  public validate(): void {
    if (
      StringUtils.isNullOrEmpty(this.capability.pnCode) ||
      StringUtils.isNullOrEmpty(this.capability.technicalLevel)
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      // Checking if part Number typed is valid or not
      this.isPartNumberValid((cb) => {
        if (cb === '') {
          return;
        } else {
          this.capability.pnCode = cb.pnCode;
          this.onValidated.emit(this.capability);
          this.closeDialog();
        }
      });
    }
  }

  private isPartNumberValid(callback) {
    const criteria: FindAllBirePnByCriteriaInput = {};
    if (this.capability.pnCode) {
      criteria.birePnDTO = {};
      criteria.birePnDTO.pnCode = this.capability.pnCode;
    }

    this.siteFormService.findAllBirePnByCriteria(criteria).subscribe((res) => {
      if (res.list.length === 0) {
        callback('');
      }
      res.list.map((result) => {
        if (
          !!this.capability.pnCode &&
          !!result.pnCode &&
          this.capability.pnCode.toLowerCase() === result.pnCode.toLowerCase()
        ) {
          callback(result);
        }
      });
    });
  }

  private initPartNumberTableData(): void {
    const partNumberTableCols: TableColumn[] = [
      { field: 'pnCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'articleDesignation', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '20rem' },
      { field: 'manufacturerOtanCode', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'otanPnReference', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '10rem' },
      { field: 'quantityUnit', alignment: 'left', filterMode: TableColumnFilterMode.Input, width: '8rem' }
    ];
    const criteria: FindAllBirePnByCriteriaInput = {};
    if (this.capability.pnCode) {
      criteria.birePnDTO = {};
      criteria.birePnDTO.pnCode = this.capability.pnCode;
    }
    this.partNumberTableData = {
      componentId: this.getComponentName() + '.partDialog',
      tableCols: partNumberTableCols,
      tableRows: this.siteFormService.findAllBirePnByCriteria(criteria),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public onSelectedPartNumber(birePnDTO: BirePnDTO): void {
    if (!!birePnDTO) {
      this.capability.pnCode = birePnDTO.pnCode;
    }
  }
}
