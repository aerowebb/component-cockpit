import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireMeasureReferenceDTOId } from '../../../../../../shared/types/api-types/bire-measure-reference-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { ReferenceMeasurementService } from './reference-measurement.service';

@Component({
  selector: 'aw-reference-measurement',
  templateUrl: './reference-measurement.component.html'
})
export class ReferenceMeasurementComponent extends DynamicCatalog implements OnInit {
  public refMeasurementTableDataSource: TableDataSource<BireMeasureReferenceDTO>;

  public selectedRefMgmtDialogData: BireMeasureReferenceDTO;

  public refMeasurementDialogOpenMode: ComponentOpenMode;
  public showRefMgmtDialog: boolean;

  private bireMeasureReferenceDTOAddedList: BireMeasureReferenceDTO[];
  private bireMeasureReferenceDTOUpdatedList: BireMeasureReferenceDTO[];

  private selectedRefMeasurementCodeEdit: string;
  private unitCodeList: SelectItem[];
  private mrCategoryList: SelectItem[];

  public constructor(
    private readonly referenceMeasurementService: ReferenceMeasurementService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.refMeasurementTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'counterCode',
          translateKey: this.getTranslateKey('counterCode'),
          width: '10%'
        },
        {
          field: 'unitCode',
          translateKey: this.getTranslateKey('unitCode'),
          width: '6%'
        },
        {
          field: 'mrCategory',
          translateKey: this.getTranslateKey('mrCategory'),
          width: '7%'
        },
        {
          field: 'counterRemarks',
          translateKey: this.getTranslateKey('counterRemarks'),
          width: '40%'
        },
        {
          field: 'minRemainPercent',
          translateKey: this.getTranslateKey('minRemainPercent'),
          width: '14%'
        },
        {
          field: 'isCounter',
          translateKey: this.getTranslateKey('isCounter'),
          width: '10%'
        },
        {
          field: 'propagationAllowed',
          translateKey: this.getTranslateKey('propagationAllowed'),
          alignment: ColumnAlignment.CENTER,
          width: '13%'
        }
      ],
      data: []
    });
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Read;
    this.bireMeasureReferenceDTOAddedList = [];
    this.bireMeasureReferenceDTOUpdatedList = [];
  }

  public ngOnInit() {
    this.fillDropDown();
  }

  /**
   * Fill dropdown
   */
  private fillDropDown() {
    // Filling Unit code list
    this.referenceMeasurementService.findAllBireUnitMeasures().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BireUnitMeasureDTO) => {
        labelValue.push({
          // tslint:disable-next-line:no-string-literal
          label: res['label'],
          // tslint:disable-next-line:no-string-literal
          value: res['value']
        });
      });
      // labelValue.unshift({ label: '', value: undefined });
      this.unitCodeList = labelValue;
    });

    // Filling Mr Category List
    this.propertiesService.getValue('getRefMeasureCategoryMap').subscribe((results) => {
      this.mrCategoryList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

      this.mrCategoryList.unshift({ label: '', value: undefined });

      this.loadRefMgmtTable();
    });
  }

  /**
   * Filter List by label/value
   */
  private unitCodeListFilter(filterType, val): string {
    let value;
    if (filterType === 'label') {
      this.unitCodeList.filter((ev) => {
        if (!!ev.label && !!ev.value && ev.value === val) {
          value = ev.value === val ? ev.label : '';
        }
      });
    } else {
      this.unitCodeList.filter((ev) => {
        if (ev.label === val) {
          value = ev.label === val ? ev.value : '';
        }
      });
    }

    return value;
  }

  /**
   * Filter List by label/value
   */
  private mrCategoryListFilter(filterType, val): string {
    let value;
    if (filterType === 'label') {
      if (this.mrCategoryList.length > 0) {
        this.mrCategoryList.filter((ev) => {
          if (!!ev.label && !!ev.value && ev.value === val) {
            value = ev.value === val ? ev.label : '';
          }
        });
      }
    } else {
      if (this.mrCategoryList.length > 0) {
        this.mrCategoryList.filter((ev) => {
          if (ev.label === val) {
            value = ev.label === val ? ev.value : '';
          }
        });
      }
    }

    return value;
  }

  /**
   * Load Ref Measurement Table
   */
  private loadRefMgmtTable(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.refMeasurementTableDataSource.setData([]);
    const bireMeasureReferenceDTO: BireMeasureReferenceDTO = {};
    this.referenceMeasurementService
      .findBireMeasureReferencesBySearchCriteria(bireMeasureReferenceDTO)
      .subscribe((results) => {
        // Convert category value to label
        results.forEach((res) => {
          res.mrCategory = this.mrCategoryListFilter('label', res.mrCategory);
        });

        this.refMeasurementTableDataSource.addData(results);

        if (!flag) {
          if (this.bireMeasureReferenceDTOAddedList) {
            this.bireMeasureReferenceDTOAddedList.forEach((r) => {
              this.refMeasurementTableDataSource.addData([r]);
            });
          }

          // TO reenter modified entry in table
          if (this.bireMeasureReferenceDTOUpdatedList) {
            this.refMeasurementTableDataSource.dataSrc.forEach((res) => {
              this.bireMeasureReferenceDTOUpdatedList.forEach((entry) => {
                if (res.counterCode === entry.counterCode) {
                  this.refMeasurementTableDataSource.replaceData(res, entry);
                }
              });
            });
          }
          this.refMeasurementTableDataSource.dataSelection = [];
        }
      });
  }

  public getComponentName(): string {
    return 'ReferenceMeasurementComponent';
  }

  /**
   * On Add button click
   */
  public addReferenceMeasurement() {
    this.selectedRefMgmtDialogData = {};
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Create;
    this.showRefMgmtDialog = true;
  }

  /**
   * On add table row
   */
  public onAddReferenceMeasurement(ev: BireMeasureReferenceDTO) {
    const event = { ...ev };
    event.unitCode = this.unitCodeListFilter('label', event.unitCode);
    event.mrCategory = this.mrCategoryListFilter('label', event.mrCategory);
    this.refMeasurementTableDataSource.addData([event]);
    ev.unitCode = event.unitCode;
    this.bireMeasureReferenceDTOAddedList.push(ev);
  }

  /**
   * Delete selected Measurements
   */
  public deleteSelectedRefMeasurement() {
    const partialMessageKey =
      this.refMeasurementTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedMeasurements'
        : 'confirmDeleteSelectedMeasurement';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireMeasureReferenceDTOId: BireMeasureReferenceDTOId[] = [];
        this.refMeasurementTableDataSource.dataSelection.forEach((res) => {
          if (!!res.counterCode) {
            bireMeasureReferenceDTOId.push({ counterCode: res.counterCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedRefMeasurement', 'res.counterCode');
          }

          const inAddedList = this.bireMeasureReferenceDTOAddedList.filter((element, index) => {
            return res.counterCode === element.counterCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireMeasureReferenceDTOAddedList.forEach((entry, index) => {
              if (entry.counterCode === res.counterCode) {
                foundAddedIndex = index;
              }
            });
            this.bireMeasureReferenceDTOAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireMeasureReferenceDTOUpdatedList.filter((element, index) => {
            return res.counterCode === element.counterCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireMeasureReferenceDTOUpdatedList.forEach((entry, index) => {
              if (entry.counterCode === res.counterCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireMeasureReferenceDTOUpdatedList.splice(foundUpdatedIndex, 1);
          }
        });

        this.referenceMeasurementService.removeBireMeasureReference(bireMeasureReferenceDTOId).subscribe(
          (results) => {
            // Removing from table
            this.refMeasurementTableDataSource.deleteDataSelection();
            this.refMeasurementTableDataSource.dataSelection = [];
          },
          (err) => {
            if (!!err.error) {
              this.messageService.showErrorMessage(err.error.errorDetail);
            }
          }
        );
      }
    });
  }

  /**
   * Edit Selected Reason
   */
  public editSelectedRefMeasurement() {
    this.selectedRefMeasurementCodeEdit = '';
    const event = this.refMeasurementTableDataSource.dataSelection[0];
    event.unitCode = this.unitCodeListFilter('value', event.unitCode);
    event.mrCategory = this.mrCategoryListFilter('value', event.mrCategory);
    this.selectedRefMgmtDialogData = event;
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Write;
    this.showRefMgmtDialog = true;
    const selMeasureCode = this.refMeasurementTableDataSource.dataSelection[0].counterCode;
    if (!!selMeasureCode) {
      this.selectedRefMeasurementCodeEdit = selMeasureCode;
    }
  }

  /**
   * On update table row
   */
  public onUpdateRefMeasurement(ev: BireMeasureReferenceDTO) {
    this.refMeasurementTableDataSource.dataSrc.forEach((res, index) => {
      if (res.counterCode === this.selectedRefMeasurementCodeEdit) {
        const eventClone = { ...ev };
        const cat = this.mrCategoryListFilter('label', eventClone.mrCategory);
        const unit = this.unitCodeListFilter('label', eventClone.unitCode);
        eventClone.mrCategory = cat;
        eventClone.unitCode = unit;
        this.refMeasurementTableDataSource.replaceData(res, eventClone);
      }
    });

    ev.unitCode = this.unitCodeListFilter('label', ev.unitCode);
    // Check if new entry is edited
    let isNew = false;
    this.bireMeasureReferenceDTOAddedList.forEach((res, index) => {
      if (res.unitCode === ev.unitCode) {
        isNew = true;
        this.bireMeasureReferenceDTOAddedList.splice(index, 1);
      }
    });

    // Check if edited item is again edited
    if (!isNew) {
      this.bireMeasureReferenceDTOUpdatedList.forEach((res, index) => {
        if (res.unitCode === ev.unitCode) {
          this.bireMeasureReferenceDTOUpdatedList.splice(index, 1);
        }
      });
      this.bireMeasureReferenceDTOUpdatedList.push(ev);
    } else {
      this.bireMeasureReferenceDTOAddedList.push(ev);
    }
    this.refMeasurementTableDataSource.dataSelection = [];
  }

  /**
   * Saving Reason Return Data
   */
  public save() {
    if (this.isSaveValid(this.bireMeasureReferenceDTOAddedList, this.bireMeasureReferenceDTOUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireMeasureReferenceDTOAddedList: this.bireMeasureReferenceDTOAddedList,
        bireMeasureReferenceDTOUpdatedList: this.bireMeasureReferenceDTOUpdatedList
      };

      this.referenceMeasurementService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireMeasureReferenceDTOAddedList = [];
        this.bireMeasureReferenceDTOUpdatedList = [];
        this.refMeasurementTableDataSource.dataSelection = [];
      });
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.refMeasurementTableDataSource.dataSelection = [];
    this.bireMeasureReferenceDTOAddedList = [];
    this.bireMeasureReferenceDTOUpdatedList = [];
    this.loadRefMgmtTable(true);
  }
}
