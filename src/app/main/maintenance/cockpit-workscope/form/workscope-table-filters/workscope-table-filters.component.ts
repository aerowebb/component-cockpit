import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireItemForWorkscopeTreeDTO } from '../../../../../shared/types/api-output-types/workscope-component/bire-item-for-workscope-tree-dto.interface';
import { WorkscopeTreeData } from '../../../../../shared/types/api-output-types/workscope-component/workscope-tree-data-output';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

interface WorkscopeTableFilter {
  selectedSerialize?: number[];
  selectedWorkscope?: number[];
  family?: string;
  item?: string;
  sn?: string;
  pn?: string;
  woCode?: string;
  designation?: string;
  impact?: string;
  functionCode?: string;
}

interface DropdownListInterface {
  familyList: string[];
  itemList?: LabelValue<string>[];
  pnList: string[];
  functionCodeList: string[];
  impactList: string[];
  woList: string[];
}

interface InventoryDTO {
  pn?: string;
  sn?: string;
  woCode?: string;
  quantity?: string;
  workScopingOrder?: string;
  trackingNumber?: string;
  tn?: string;
  icon?: string;
  serialized?: boolean;
}

@Component({
  selector: 'aw-workscope-table-filters',
  templateUrl: './workscope-table-filters.component.html',
  styleUrls: ['../shared/shared.scss']
})
export class WorkscopeTableFilterComponent extends GenericComponent {
  private static readonly SERIALIZE: number = 0;
  private static readonly NOT_SERIALIZE: number = 1;
  private static readonly WORKSCOPE: number = 0;
  private static readonly NOT_WORKSCOPE: number = 1;

  @Input('searchCriteria')
  public set setSearchCriteria(data: WorkscopeTableFilter) {
    if (!!data) {
      this.searchCriteria = data;

      if (!!this.searchCriteria.selectedSerialize) {
        this.selectedSerialize = this.searchCriteria.selectedSerialize;
      }

      if (!!this.searchCriteria.selectedWorkscope) {
        this.selectedWorkscope = this.searchCriteria.selectedWorkscope;
      }

      if (!!this.searchCriteria.family) {
        this.listInterface.itemList = [];
        this.loadItemList();
      }

      if (!!this.searchCriteria.item) {
        this.selectedItem = { label: this.searchCriteria.item, value: this.searchCriteria.item };
      }
    }
  }

  @Input('workscopeTreeData')
  public set setTreeData(data: WorkscopeTreeData[]) {
    if (!!data && this.updateCounter === 0) {
      this.buildTree(data);
      if (!!this.searchCriteria.family) {
        this.loadItemList();
      } else {
        this.listInterface.itemList = [...this.itemListClone];
      }
      this.cloneListInterface = _cloneDeep(this.listInterface);
    }
  }

  @Input()
  public familyCodeMap: Map<string, string>;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public searchCriteria: WorkscopeTableFilter;

  public serializeList: LabelValue<number>[];
  public workscopeList: LabelValue<number>[];
  private itemFamilyList: LabelValue<string>[];

  public selectedSerialize: number[];
  public selectedWorkscope: number[];
  private itemListClone: LabelValue<string>[];
  public selectedItem: LabelValue<string> | undefined;

  public listInterface: DropdownListInterface;
  private cloneListInterface: DropdownListInterface;

  private updateCounter: number = 0;

  public constructor(public sessionService: SessionService, public translateService: TranslateService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'WorkscopeTableFilterComponent';
  }

  public filter(): void {
    if (!!this.selectedItem) {
      // Avoiding setting of undefined in item
      this.searchCriteria.item = this.selectedItem.label;
    }
    this.onFilter.emit();
  }

  public reset(): void {
    this.selectedItem = undefined;
    this.listInterface.itemList = [...this.cloneListInterface.itemList];
    this.searchCriteria = {};
    this.selectedSerialize = [WorkscopeTableFilterComponent.SERIALIZE, WorkscopeTableFilterComponent.NOT_SERIALIZE];
    this.selectedWorkscope = [WorkscopeTableFilterComponent.WORKSCOPE, WorkscopeTableFilterComponent.NOT_WORKSCOPE];
    this.onReset.emit();
  }

  private init(): void {
    this.onFilter = new EventEmitter<void>();
    this.onReset = new EventEmitter<void>();

    this.initDropdown();
  }

  /*********************************************
   * INITILIZE DROPDOWNS
   ********************************************/
  private initDropdown() {
    this.itemFamilyList = [];
    this.itemListClone = [];

    this.serializeList = [
      { label: this.translateService.instant(this.getTranslateKey('serialized')), value: 0 },
      { label: this.translateService.instant(this.getTranslateKey('notSerialized')), value: 1 }
    ];

    this.workscopeList = [
      { label: this.translateService.instant(this.getTranslateKey('workscope')), value: 0 },
      { label: this.translateService.instant(this.getTranslateKey('notWorkscope')), value: 1 }
    ];

    this.listInterface = {
      familyList: [],
      functionCodeList: [],
      impactList: [],
      pnList: [],
      woList: []
    };

    if (!this.searchCriteria) {
      this.searchCriteria = {};
    }

    this.selectedSerialize = [WorkscopeTableFilterComponent.SERIALIZE, WorkscopeTableFilterComponent.NOT_SERIALIZE];
    this.selectedWorkscope = [WorkscopeTableFilterComponent.WORKSCOPE, WorkscopeTableFilterComponent.NOT_WORKSCOPE];
  }

  /**************************************************
   * SET DATA FOR DROPDOWN
   *************************************************/
  private buildTree(data: WorkscopeTreeData[]): WorkscopeTreeData[] {
    const toReturn: WorkscopeTreeData[] = [];

    data.forEach((elt: WorkscopeTreeData) => {
      const eleClone = elt.data;

      if (!!eleClone) {
        if (!!eleClone.item && !!eleClone.itemFamilyCode) {
          this.itemFamilyList.push({
            label: eleClone.item,
            value: eleClone.itemFamilyCode
          });
        }

        this.setDropdowns(eleClone);
      }
      toReturn.push({
        data: eleClone,
        children: this.buildTree(elt.children || []),
        bireItemDTO: elt.bireItemDTO
      });
    });

    return toReturn;
  }

  private setDropdowns(eleClone: BireItemForWorkscopeTreeDTO) {
    if (!!this.listInterface) {
      if (!!eleClone.item) {
        const isPresent = this.itemListClone.filter((res) => res.value === eleClone.item);
        if (isPresent.length === 0) {
          this.itemListClone.push({
            label: eleClone.item,
            value: eleClone.item
          });
        }
      }

      if (!!eleClone.itemFamilyCode) {
        const isPresent = this.listInterface.familyList.filter((res) => res === eleClone.itemFamilyCode);

        if (isPresent.length === 0) {
          this.listInterface.familyList.push(eleClone.itemFamilyCode);
        }
      }

      if (!!eleClone.impact) {
        const isPresent = this.listInterface.impactList.filter((res) => res === eleClone.impact);

        if (isPresent.length === 0) {
          this.listInterface.impactList.push(eleClone.impact);
        }
      }

      if (!!eleClone.functionCode) {
        const isPresent = this.listInterface.functionCodeList.filter((res) => res === eleClone.functionCode);

        if (isPresent.length === 0) {
          this.listInterface.functionCodeList.push(eleClone.functionCode);
        }
      }

      if (!!eleClone.inventoriesList && eleClone.inventoriesList.length > 0) {
        eleClone.inventoriesList.forEach((inventory: InventoryDTO) => {
          if (!!inventory.pn) {
            const isPNPresent = this.listInterface.pnList.filter((res) => res === inventory.pn);

            if (isPNPresent.length === 0) {
              this.listInterface.pnList.push(inventory.pn);
            }
          }

          if (!!inventory.workScopingOrder) {
            const isWOPresent = this.listInterface.woList.filter((res) => res === inventory.workScopingOrder);

            if (isWOPresent.length === 0) {
              this.listInterface.woList.push(inventory.workScopingOrder);
            }
          }
        });
      }
    }

    this.updateCounter += 1;
  }

  /*****************************************************
   * FILTER ITEM LIST ON BASIS OF FAMILY
   *****************************************************/
  public loadItemList() {
    const dtoList = this.itemFamilyList.filter(
      (res) => !!this.searchCriteria.family && res.value === this.searchCriteria.family
    );

    if (!!dtoList && dtoList.length > 0) {
      this.listInterface.itemList = [...dtoList];
    } else {
      this.listInterface.itemList = [];
    }
  }

  /********************************************
   * Filter List
   *******************************************/
  public searchFamilyList(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.familyList) {
      dataArr = this.cloneListInterface.familyList.filter((family) =>
        family.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      dataArr = this.cloneListInterface.familyList || [];
    }

    this.listInterface.familyList = [...dataArr];
  }

  public resetItemList(resetFamily: boolean) {
    if (resetFamily) {
      this.searchCriteria.family = undefined;
    }
    this.searchCriteria.item = undefined;
    if (!!this.searchCriteria.family) {
      this.loadItemList();
    } else {
      this.listInterface.itemList = [...this.itemListClone];
    }
  }

  public searchPNList(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.pnList) {
      dataArr = this.cloneListInterface.pnList.filter((pn) => pn.toLowerCase().startsWith(ev.query.toLowerCase()));
    } else {
      dataArr = this.cloneListInterface.pnList || [];
    }

    this.listInterface.pnList = [...dataArr];
  }

  /**********************************************
   * Filter Item List
   *********************************************/
  public searchItemList(ev) {
    const list = this.getItemListForFamily();
    if (!!ev && !!ev.query && !!list) {
      this.listInterface.itemList = list.filter((res) => res.label.toLowerCase().startsWith(ev.query.toLowerCase()));
    } else {
      this.listInterface.itemList = [...this.listInterface.itemList];
    }
  }

  private getItemListForFamily() {
    let list: LabelValue<string>[] = this.cloneListInterface.itemList || [];
    if (!!this.searchCriteria.family) {
      list = this.itemFamilyList.filter(
        (res) => !!this.searchCriteria.family && res.value === this.searchCriteria.family
      );
    }

    return list;
  }

  public searchFunctionCodeList(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.functionCodeList) {
      dataArr = this.cloneListInterface.functionCodeList.filter((code) =>
        code.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      dataArr = this.cloneListInterface.functionCodeList || [];
    }

    this.listInterface.functionCodeList = [...dataArr];
  }

  public searchImpactList(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.impactList) {
      dataArr = this.cloneListInterface.impactList.filter((impact) =>
        impact.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      dataArr = this.cloneListInterface.impactList || [];
    }

    this.listInterface.impactList = [...dataArr];
  }

  public searchWoList(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneListInterface && !!this.cloneListInterface.woList) {
      dataArr = this.cloneListInterface.woList.filter((wo) => wo.toLowerCase().startsWith(ev.query.toLowerCase()));
    } else {
      dataArr = this.cloneListInterface.woList || [];
    }

    this.listInterface.woList = [...dataArr];
  }

  /******************************************
   * MULTI SELECT FILTER HANDLING
   *****************************************/
  public onChangeSerializeFilter() {
    this.searchCriteria.selectedSerialize = this.selectedSerialize;
  }

  public onChangeWorkscopeFilter() {
    this.searchCriteria.selectedWorkscope = this.selectedWorkscope;
  }
}
