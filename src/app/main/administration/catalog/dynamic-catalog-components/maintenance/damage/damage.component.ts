import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireDamageDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-damage-dto.interface';
import { BireDamageDTOId } from '../../../../../../shared/types/api-types/bire-damage-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { DamageService } from './damage.service';

@Component({
  selector: 'aw-damage',
  templateUrl: './damage.component.html'
})
export class DamageComponent extends DynamicCatalog implements OnInit {
  public damageTableDataSource: TableDataSource<BireDamageDTO>;
  public damageDialogOpenMode: ComponentOpenMode;
  public showDamageDialog: boolean;
  private unitCodeList: SelectItem[];

  public selectedDamageDialogData: BireDamageDTO;

  private bidoDamageUpdatedList: BireDamageDTO[];
  private bidoDamageAddedList: BireDamageDTO[];

  private selectedDamageCodeToEdit: string;
  public constructor(
    private readonly damageService: DamageService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.bidoDamageAddedList = [];
    this.bidoDamageUpdatedList = [];
    this.damageDialogOpenMode = ComponentOpenMode.Read;
    this.showDamageDialog = false;
  }

  public ngOnInit() {
    this.damageTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'damageCode', translateKey: this.getTranslateKey('damageCode') },
        {
          field: 'unitCode',
          translateKey: this.getTranslateKey('unitCode')
        },
        {
          field: 'damageDescription',
          translateKey: this.getTranslateKey('damageDescription')
        }
      ],
      data: []
    });

    this.unitCodeList = [];
    this.loadDamageTableData();
    this.fillDropDown();
  }

  /**
   * Get dropdown data
   */
  private fillDropDown() {
    this.damageService.findAllBireUnitMeasures().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BireUnitMeasureDTO) => {
        labelValue.push({
          // tslint:disable-next-line:no-string-literal
          label: res['label'],
          // tslint:disable-next-line:no-string-literal
          value: res['value']
        });
      });

      this.unitCodeList = labelValue;
    });
  }

  public getComponentName(): string {
    return 'DamageComponent';
  }

  /**
   * Filter to get drop down value/label
   */
  private filterUnitCodeList(filterType, val): string {
    let value;
    if (filterType === 'label') {
      this.unitCodeList.filter((ev) => {
        if (ev.value === val) {
          value = ev.value === val ? ev.label : undefined;
        }
      });
    } else {
      this.unitCodeList.filter((ev) => {
        if (ev.label === val) {
          value = ev.label === val ? ev.value : undefined;
        }
      });
    }

    return value;
  }

  /**
   * Render damage table data
   */
  private loadDamageTableData(isFromRefresh?: boolean) {
    const flag = isFromRefresh ? true : false;
    this.damageTableDataSource.setData([]);
    this.damageService.findBireDamagesByCriteria().subscribe((results) => {
      this.damageTableDataSource.addData(results);
      if (!flag) {
        if (this.bidoDamageAddedList) {
          this.bidoDamageAddedList.forEach((entry) => {
            this.damageTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bidoDamageUpdatedList) {
          this.damageTableDataSource.dataSrc.forEach((res, index) => {
            this.bidoDamageUpdatedList.forEach((entry) => {
              if (res.damageCode === entry.damageCode) {
                this.damageTableDataSource.replaceData(res, entry);
              }
            });
          });
        }
      }
    });
  }

  /**
   * Open Popup for damage
   */
  public addDamage() {
    this.selectedDamageDialogData = {};
    this.damageDialogOpenMode = ComponentOpenMode.Create;
    this.showDamageDialog = true;
  }

  /**
   * edit selected damage
   */
  public editSelectedDamage() {
    this.selectedDamageCodeToEdit = '';
    const cloneObj = [...this.damageTableDataSource.dataSelection];
    const unitCodeCopy = this.filterUnitCodeList('value', cloneObj[0].unitCode);
    this.selectedDamageDialogData = { ...cloneObj[0] };
    this.selectedDamageDialogData.unitCode = unitCodeCopy;
    this.damageDialogOpenMode = ComponentOpenMode.Write;
    this.showDamageDialog = true;
    const selDamageCode = cloneObj[0].damageCode;
    if (!!selDamageCode) {
      this.selectedDamageCodeToEdit = selDamageCode;
    }
  }

  /**
   * delete selected damage
   */
  public deleteSelecteddamage() {
    const partialMessageKey =
      this.damageTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDamages'
        : 'confirmDeleteSelectedDamage';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireDamageDTOId: BireDamageDTOId[] = [];
        this.damageTableDataSource.dataSelection.forEach((res) => {
          if (!!res.damageCode) {
            const damageId: BireDamageDTOId = { damageCode: res.damageCode };
            bireDamageDTOId.push(damageId);
          }

          const inAddedList = this.bidoDamageAddedList.filter((element, index) => {
            return res.damageCode === element.damageCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bidoDamageAddedList.forEach((entry, index) => {
              if (entry.damageCode === res.damageCode) {
                foundAddedIndex = index;
              }
            });
            this.bidoDamageAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bidoDamageUpdatedList.filter((element, index) => {
            return res.damageCode === element.damageCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bidoDamageUpdatedList.forEach((entry, index) => {
              if (entry.damageCode === res.damageCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bidoDamageUpdatedList.splice(foundUpdatedIndex, 1);
          }
        });

        this.damageTableDataSource.deleteDataSelection();

        this.damageService.removeBireDamage(bireDamageDTOId).subscribe((results) => {
          this.damageTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Event to capture added damage
   */
  public onAddDamage(ev: BireDamageDTO) {
    const event: BireDamageDTO = { ...ev };
    event.unitCode = this.filterUnitCodeList('label', event.unitCode);
    this.damageTableDataSource.addData([event]);
    this.bidoDamageAddedList.push(event);
  }

  /**
   * Event to capture updated damage
   */
  public updateDamage(ev: BireDamageDTO) {
    this.damageTableDataSource.dataSrc.forEach((res) => {
      if (res.damageCode === this.selectedDamageCodeToEdit) {
        const evt: BireDamageDTO = { ...ev };
        evt.unitCode = this.filterUnitCodeList('label', evt.unitCode);
        this.damageTableDataSource.replaceData(res, ev);
      }
    });
    let isNew = false;
    this.bidoDamageAddedList.forEach((res, index) => {
      if (res.damageCode === ev.damageCode) {
        isNew = true;
        this.bidoDamageAddedList.splice(index, 1);
      }
    });

    ev.unitCode = this.filterUnitCodeList('label', ev.unitCode);
    if (!isNew) {
      this.bidoDamageUpdatedList.forEach((res, index) => {
        if (res.damageCode === ev.damageCode) {
          this.bidoDamageUpdatedList.splice(index, 1);
        }
      });
      this.bidoDamageUpdatedList.push(ev);
    } else {
      this.bidoDamageAddedList.push(ev);
    }
    this.damageTableDataSource.dataSelection = [];
  }

  /**
   * Saving Reason Return Data
   */
  public save() {
    if (this.isSaveValid(this.bidoDamageAddedList, this.bidoDamageUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bidoDamageAddedList: this.bidoDamageAddedList,
        bidoDamageUpdatedList: this.bidoDamageUpdatedList
      };

      this.damageService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bidoDamageAddedList = [];
        this.bidoDamageUpdatedList = [];
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
   * Refresh Table
   */
  public refresh() {
    this.bidoDamageAddedList = [];
    this.bidoDamageUpdatedList = [];
    this.loadDamageTableData(true);
  }
}
