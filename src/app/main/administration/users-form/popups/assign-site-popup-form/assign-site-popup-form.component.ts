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
  selector: 'aw-assign-site-popup-form',
  templateUrl: './assign-site-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignSitesPopupFormComponent extends DialogComponent implements OnInit {
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
  public onValidated: EventEmitter<BidoFunctionTypeDTO[]>;
  @Output()
  public displayChange: EventEmitter<boolean>;
  @Input('component-data')
  public componentData: PopupEntry<BidoFunctionTypeDTO[]>;

  public displayValue: boolean;
  public isEditable: boolean;
  public siteTableDataSource: TableDataSource<BidoFunctionTypeDTO>;
  public showReportPopup: boolean;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public usersFormService: UsersFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignSitesPopupFormComponent');
    this.onValidated = new EventEmitter<BidoFunctionTypeDTO[]>();
    this.displayChange = new EventEmitter<boolean>();

    this.initSiteTableDataSource();
  }

  public ngOnInit() {
    this.loadSites();
  }

  public getTypeName(): string {
    return 'AssignSitesPopupFormComponent';
  }

  public associate(): void {
    this.onValidated.emit(this.siteTableDataSource.dataSelection);
    this.closeDialog();
  }

  public cancel(): void {
    this.display = false;
  }

  private initSiteTableDataSource(): void {
    this.siteTableDataSource = new TableDataSource({
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

  private loadSites(): void {
    const input = 'SITE';
    let sites: BidoFunctionTypeDTO[] = [];
    this.usersFormService.findAllBidoFunctionTypesByModule(input).subscribe((results) => {
      results.forEach((element) => {
        sites.push(element.bidoFunctionTypeDTO);
      });

      if (sites.length > 0) {
        sites = sites.sort((n1, n2): number => {
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
      this.siteTableDataSource.setData(sites);
      if (!!this.componentData) {
        const functionCodes = (this.componentData.object as BidoFunctionTypeDTO[]).map(
          (operator) => operator.functionCode
        );
        this.siteTableDataSource.dataSelection = this.siteTableDataSource.dataSrc.filter((operator) =>
          functionCodes.includes(operator.functionCode)
        );
      }
    });
  }
}
