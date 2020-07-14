import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { SaveCauseRemovalInput } from '../../../../../shared/types/api-input-types/maintenance-component-cockpit/save-cause-removal-input.interface';
import { ManageCauseRemovalOutputDTO } from '../../../../../shared/types/api-output-types/task-management/manage-cause-removal-output-dto.interface';
import { BireReturnReasonDTO } from '../../../../../shared/types/api-types/bire-return-reason-dto.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { CockpitWorkscopeFormService } from '../cockpit-workscope-form.service';

interface RemovalCausesDTO {
  code?: string;
  name?: string;
  description?: string;
  type?: string;
  isReturnReasonSelected?: boolean;
  isSelectionReadOnly?: boolean;
  _obj?: ManageCauseRemovalOutputDTO;
}

@Component({
  selector: 'aw-manage-removal-causes-form',
  styleUrls: ['../shared/shared.scss'],
  templateUrl: './manage-removal-causes-form.component.html'
})
export class ManageRemovalCausesFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public projectNumber: number;
  public panelLoading: boolean;
  public tableLoading: boolean;
  public showSaveSpinner: boolean;
  public subtitle: string;
  public removalCausesTable: RemovalCausesDTO[];
  public removalCausesTableCols: TableColumn[];
  public selectedCauses: RemovalCausesDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly cockpitWorkscopeFormService: CockpitWorkscopeFormService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.setTableColumns();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MANAGE_REMOVAL_CAUSES_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
    this.loadRemovalCauses();
  }

  /**********************************
   * INITIALIZATION
   **********************************/
  private init() {
    const context = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : undefined;

    if (!!context) {
      this.displayComponentContext(`N°${context}`, this.isCreateOpenMode);
    }

    this.removalCausesTable = [];
    this.selectedCauses = [];
  }

  private setTableColumns() {
    this.removalCausesTableCols = [
      { field: 'code', alignment: 'left', width: '25%' },
      { field: 'name', alignment: 'left', width: '25%' },
      { field: 'description', alignment: 'center', width: '25%' },
      { field: 'type', alignment: 'left', width: '25%' }
    ];
  }

  private loadRemovalCauses() {
    this.projectNumber = parseInt(this.serializationService.deserialize(this.componentData.objectId as string), 10);
    if (!!this.projectNumber) {
      this.panelLoading = true;

      if (!!this.projectNumber) {
        this.tableLoading = true;
        this.cockpitWorkscopeFormService
          .findBireReturnReasonsByItem(this.projectNumber)
          .pipe(
            finalize(() => {
              this.tableLoading = false;
            })
          )
          .subscribe((result) => {
            this.removalCausesTable = result.map((obj) => {
              return this.transformToCustomTable(obj);
            });
            this.tableLoading = false;
          });
      }
    }
  }

  private transformToCustomTable(row: ManageCauseRemovalOutputDTO): RemovalCausesDTO {
    const rowObj: RemovalCausesDTO = {
      _obj: row,
      code: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonCode,
      description: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonDescription,
      name: row.bireReturnReasonDTO && row.bireReturnReasonDTO.returnReasonName,
      type: row.causeTypeValue,
      isReturnReasonSelected: row.isReturnReasonSelected,
      isSelectionReadOnly: row.isSelectionReadOnly
    };

    return rowObj;
  }

  public save(): void {
    // Building input - only keeping checked elements
    const returnReasonForProjectList: BireReturnReasonDTO[] = [];
    this.removalCausesTable.forEach((elmt) => {
      if (elmt.isReturnReasonSelected && elmt._obj && elmt._obj.bireReturnReasonDTO) {
        returnReasonForProjectList.push(elmt._obj.bireReturnReasonDTO);
      }
    });

    const input: SaveCauseRemovalInput = {
      projectNumber: this.projectNumber,
      returnReasonDataList: returnReasonForProjectList
    };

    this.showSaveSpinner = true;
    this.cockpitWorkscopeFormService
      .saveCauseRemovalList(input)
      .pipe(
        finalize(() => {
          this.tableLoading = false;
          this.showSaveSpinner = false;
        })
      )
      .subscribe(
        (result) => {
          // this.updateOpenMode(ComponentOpenMode.Read);
          this.messageService.showSuccessMessage('global.successOnSave');
        },
        (error) => {
          const httpError = error as HttpErrorResponse;
          if (!!httpError.error && !!httpError.error.errorDesc) {
            this.messageService.showErrorMessage(httpError.error.errorDesc);
          }
        }
      );
  }
}
