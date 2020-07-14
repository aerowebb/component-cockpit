import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoFunctionTypeDTO } from '../../../../../shared/types/api-types/bido-function-type-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { UsersFormService } from '../../users-form.service';

@Component({
  selector: 'aw-assign-family-popup-form',
  templateUrl: './assign-family-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignFamiliesPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public displayChange: EventEmitter<boolean>;
  @Input('component-data')
  public componentData: PopupEntry<BidoFunctionTypeDTO[]>;
  @Output()
  public onValidated: EventEmitter<BidoFunctionTypeDTO[]>;
  public displayValue: boolean;
  public isEditable: boolean;
  public familyTableDataSource: TableDataSource<BidoFunctionTypeDTO>;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public usersFormService: UsersFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignFamiliesPopupFormComponent');
    this.onValidated = new EventEmitter<BidoFunctionTypeDTO[]>();
    this.displayChange = new EventEmitter<boolean>();

    this.initFamilyTableDataSource();
  }

  public ngOnInit() {
    this.loadFamilies();
  }

  public getTypeName(): string {
    return 'AssignFamiliesPopupFormComponent';
  }

  public associate(): void {
    this.onValidated.emit(this.familyTableDataSource.dataSelection);
    this.closeDialog();
  }

  public cancel(): void {
    this.display = false;
  }

  private initFamilyTableDataSource(): void {
    this.familyTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'functionCode',
          translateKey: this.getTranslateKey('functionCode'),
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'functionName',
          translateKey: this.getTranslateKey('functionName'),
          alignment: ColumnAlignment.LEFT
        }
      ],
      data: []
    });
  }

  private loadFamilies(): void {
    const input = 'FAMILY';
    let families: BidoFunctionTypeDTO[] = [];
    this.usersFormService.findAllBidoFunctionTypesByModule(input).subscribe((results) => {
      results.forEach((element) => {
        families.push(element.bidoFunctionTypeDTO);
      });

      if (families.length > 0) {
        families = families.sort((n1, n2): number => {
          if (n1.functionCode && n2.functionCode) {
            if (n1.functionCode.toLowerCase().trim() > n2.functionCode.toLowerCase().trim()) {
              return 1;
            }
            if (n1.functionCode.toLowerCase().trim() < n2.functionCode.toLowerCase().trim()) {
              return -1;
            }
          }

          return 0;
        });
      }
      this.familyTableDataSource.setData(families);
      if (!!this.componentData) {
        const functionCodes = (this.componentData.object as BidoFunctionTypeDTO[]).map(
          (operator) => operator.functionCode
        );
        this.familyTableDataSource.dataSelection = this.familyTableDataSource.dataSrc.filter((operator) =>
          functionCodes.includes(operator.functionCode)
        );
      }
    });
  }
}
