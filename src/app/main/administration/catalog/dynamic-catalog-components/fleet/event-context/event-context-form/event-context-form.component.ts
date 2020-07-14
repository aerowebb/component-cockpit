import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../../shared/services/tab.service';
import { SaveCatalogInput } from '../../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidoExtensionContextSymptomOutputDTO } from '../../../../../../../shared/types/api-output-types/catalog/bido-extension-context-symptom-output-dto.interface';
import { BidoExtensionDTOId } from '../../../../../../../shared/types/api-types/bido-extension-dto-id.interface';
import { BidoExtensionDTO } from '../../../../../../../shared/types/api-types/bido-extension-dto.interface';
import { BidoParameterDTO } from '../../../../../../../shared/types/api-types/bido-parameter-dto.interface';
import { SearchResultsDTO } from '../../../../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../../../../../shared/utils/label-value-utils';
import { CatalogService } from '../../../../catalog.service';
import { EventContextService } from '../event-context.service';

@Component({
  selector: 'aw-event-context-form',
  templateUrl: './event-context-form.component.html'
})
export class EventContextFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public context: BidoExtensionDTO;
  public parametersTableDataSource: TableDataSource<BidoParameterDTO>;

  public currentParameter: BidoParameterDTO;
  public currentParameterIndex: number | undefined;

  public tabParametersId: string;
  public currentTabId: string;

  public existingContexts: string[];

  public showParametersPopup: boolean;

  public isNewParameter: boolean | undefined;

  public eventContextAddedList: BidoExtensionContextSymptomOutputDTO;
  public eventContextUpdatedList: BidoExtensionContextSymptomOutputDTO;

  public units: LabelValue<string>[];

  public eventContextTable: SearchResultsDTO<BidoExtensionDTO>;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly eventContextService: EventContextService,
    private readonly catalogService: CatalogService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();

    this.getExistingContextCodes();

    this.loadUnitDropdown();
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const eventContext = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).extensionCode;

      this.displayComponentContext(eventContext, this.isCreateOpenMode);

      this.loadContext();
    }
  }

  public getComponentName(): string {
    return 'EventContextFormComponent';
  }

  public disableSave(): boolean {
    const value =
      this.context.extensionCode &&
      this.context.extensionCode.trim().length !== 0 &&
      this.context.extensionName &&
      this.context.extensionName.trim().length !== 0
        ? false
        : true;

    return value;
  }

  public loadUnitDropdown(): void {
    this.eventContextService.loadUnitDropdown().subscribe((results) => {
      results.forEach((res) => {
        const unit: LabelValue<string> = {
          label: '',
          value: ''
        };
        unit.label = res.value;
        unit.value = res.label;
        this.units.push(unit);
      });
      this.parametersTableDataSource.dataSrc.forEach((element) => {
        this.units.forEach((u) => {
          if (element.unit === u.value) {
            element.unit = u.label;
          }
        });
      });
    });
  }

  private init(): void {
    this.context = {};

    this.currentTabId = this.tabParametersId;

    this.parametersTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'code',
          translateKey: this.getTranslateKey('code'),
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'name',
          translateKey: this.getTranslateKey('name'),
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'unit',
          translateKey: this.getTranslateKey('unit'),
          alignment: ColumnAlignment.LEFT
        }
      ],
      data: []
    });
    this.currentParameter = {};
    this.currentParameterIndex = undefined;

    this.existingContexts = [];

    this.showParametersPopup = false;

    this.isNewParameter = undefined;

    this.eventContextAddedList = {};
    this.eventContextUpdatedList = {};

    this.units = [];

    this.eventContextTable = { list: [], moreResults: false };

    this.loadEventContextTableData();
  }

  public loadContext(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      const bidoExtensionDTOId: BidoExtensionDTOId = {
        extensionCode: this.serializationService.deserialize(this.componentData.objectId).extensionCode
      };
      this.eventContextService.loadContext(bidoExtensionDTOId).subscribe((results) => {
        this.eventContextService.loadUnitDropdown().subscribe((result) => {
          if (!!results.bidoExtensionDTO) {
            // this.units = result || [];
            result.forEach((res) => {
              const unit: LabelValue<string> = {
                label: '',
                value: ''
              };
              unit.label = res.value;
              unit.value = res.label;
              this.units.push(unit);
            });

            this.context = results.bidoExtensionDTO;
            this.parametersTableDataSource.setData(results.bidoParameterDTO || []);
            this.parametersTableDataSource.dataSrc.forEach((element) => {
              this.units.forEach((u) => {
                if (element.unit === u.value) {
                  element.unit = u.label;
                }
              });
            });
          } else {
            super.throwUnboundLocalError('loadContext', 'results.bidoExtensionDTO');
          }
        });
      });
    }
  }

  public getExistingContextCodes(): void {
    this.eventContextService.loadEventContextList().subscribe((results) => {
      results.list.forEach((result) => {
        if (result.extensionType === 'C' && !!result.extensionCode) {
          this.existingContexts.push(result.extensionCode);
        }
      });
    });
  }

  public reloadContext(): void {
    this.init();
    this.loadContext();
  }

  public editContext(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public loadEventContextTableData(): void {
    this.eventContextService.loadEventContextList().subscribe((results) => {
      results.list.forEach((result) => {
        if (result.extensionType === 'C') {
          this.eventContextTable.list.push(result);
        }
      });
    });
  }

  public saveContext(): void {
    if (
      !this.context.extensionCode ||
      !this.context.extensionName ||
      this.context.extensionCode.trim().length === 0 ||
      this.context.extensionName.trim().length === 0
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.eventContextService.loadEventContextList().subscribe((results) => {
        results.list.forEach((result) => {
          if (result.extensionType === 'C') {
            this.eventContextTable.list.push(result);
          }
        });
        const create = 0;
        const update = 1;
        this.context.extensionType = 'C';
        this.parametersTableDataSource.dataSrc.forEach((parameter) => {
          parameter.extensionCode = this.context.extensionCode;
        });
        if (!!this.componentData && this.componentData.openMode === create) {
          if (!!this.context.extensionCode && this.existingContexts.includes(this.context.extensionCode)) {
            this.messageService.showErrorMessage(this.getTranslateKey('codeAlreadyExists'));
          } else {
            this.eventContextAddedList = {
              bidoExtensionDTO: this.context,
              bidoParameterDTO: this.parametersTableDataSource.dataSrc
            };
            const saveCatalogInput: SaveCatalogInput = {
              bidoExtensionAddedList: this.eventContextAddedList
            };

            this.showSaveSpinner = true;
            this.catalogService.saveCatalog(saveCatalogInput).subscribe(
              (result) => {
                this.eventContextTable = { list: [], moreResults: false };
                this.messageService.showSuccessMessage('global.successOnSave');
                if (!!this.componentData && !!this.context.extensionCode) {
                  this.displayComponentContext(this.context.extensionCode, this.isCreateOpenMode);
                  this.updateOpenMode(ComponentOpenMode.Write);
                  this.componentData.openMode = 1;
                  this.componentData.objectId = this.serializationService.serialize(this.context);
                } else {
                  super.throwUnboundLocalError('saveCatalog', 'this.context.extensionCode');
                }
                this.showSaveSpinner = false;
              },
              () => {
                this.eventContextTable = { list: [], moreResults: false };
                this.messageService.showErrorMessage('global.errorOnSave');
                this.showSaveSpinner = false;
              }
            );
          }
        } else if (!!this.componentData && this.componentData.openMode === update) {
          let dataInDB = false;
          this.eventContextTable.list.forEach((context) => {
            if (context.extensionCode === this.context.extensionCode) {
              dataInDB = true;
            }
          });
          if (dataInDB) {
            this.eventContextUpdatedList = {
              bidoExtensionDTO: this.context,
              bidoParameterDTO: this.parametersTableDataSource.dataSrc
            };

            const saveCatalogInput: SaveCatalogInput = {
              bidoExtensionUpdatedList: this.eventContextUpdatedList
            };

            this.showSaveSpinner = true;
            this.catalogService.saveCatalog(saveCatalogInput).subscribe(
              (result) => {
                this.eventContextTable = { list: [], moreResults: false };
                if (!!this.componentData) {
                  this.messageService.showSuccessMessage('global.successOnSave');
                  this.updateOpenMode(ComponentOpenMode.Write);
                  this.componentData.objectId = this.serializationService.serialize(this.context);
                } else {
                  super.throwUnboundLocalError('saveCatalog', 'this.componentData');
                }
                this.showSaveSpinner = false;
              },
              () => {
                this.eventContextTable = { list: [], moreResults: false };
                this.messageService.showErrorMessage('global.errorOnSave');
                this.showSaveSpinner = false;
              }
            );
          } else {
            this.messageService.showErrorMessage('global.internalServerError');
          }
        }
      });
    }
  }

  public cancelContext(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadContext();
  }

  public openParametersTab(): void {
    this.currentTabId = this.tabParametersId;
  }

  /*******
   * Popup
   *******/

  public addNewParameter(): void {
    this.showParametersPopup = true;
    this.currentParameter = {};
    this.isNewParameter = true;
  }

  public editParameter(): void {
    this.showParametersPopup = true;
    const parameterToUpdate = { ...this.parametersTableDataSource.dataSelection[0] };
    LabelValueUtils.labelToStringValue<BidoParameterDTO>(parameterToUpdate, 'unit', this.units);
    this.currentParameter = parameterToUpdate;

    this.currentParameterIndex = this.parametersTableDataSource.dataSrc.findIndex(
      (p) => p.code === this.currentParameter.code
    );
    this.isNewParameter = false;
  }

  public deleteParameters(): void {
    this.parametersTableDataSource.deleteDataSelection();
    this.parametersTableDataSource.dataSelection = [];
    this.messageService.showSuccessMessage('global.deleteSuccessMsg');
  }

  public createParameter(event: BidoParameterDTO) {
    const inParameterTable = this.parametersTableDataSource.dataSrc.filter(
      (parameter) => parameter.code === event.code
    );
    if (inParameterTable.length === 0) {
      LabelValueUtils.stringValueToLabel<BidoParameterDTO>(event, 'unit', this.units);
      this.parametersTableDataSource.addData([event]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('codeAlreadyExists'));
    }
  }

  public updateParameter(event: BidoParameterDTO) {
    if (this.currentParameterIndex !== null && this.currentParameterIndex !== undefined) {
      LabelValueUtils.stringValueToLabel<BidoParameterDTO>(event, 'unit', this.units);
      this.parametersTableDataSource.replaceData(
        this.parametersTableDataSource.dataSrc[this.currentParameterIndex],
        event
      );
      this.currentParameterIndex = undefined;
      this.parametersTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updateParameter', 'this.currentParameterInxex');
    }
  }
}
