import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { CockpitInspectionInput } from '../../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { BirePackEvolutionInput } from '../../../../../shared/types/api-input-types/product-structure-management/bire-pack-evolution-input.interface';
import { ConfigurationPackListInput } from '../../../../../shared/types/api-input-types/product-structure-management/configuration-pack-list-input.interface';
import { BirePackEvolutionOutput } from '../../../../../shared/types/api-output-types/product-structure-management/bire-pack-evolution-output.interface';
import { ConfTableOutput } from '../../../../../shared/types/api-output-types/workscope-component/conf-table-output.interface';
import { ConfigurationsEvolutionOutput } from '../../../../../shared/types/api-output-types/workscope-component/configurations-evolution-output.interface';
import { ItemConfigurationOutput } from '../../../../../shared/types/api-output-types/workscope-component/item-configuration-output.interface';
import { BireConfigurationDTO } from '../../../../../shared/types/api-types/bire-configuration-dto.interface';
import { BireEvolutionDTOId } from '../../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemVersionDTO } from '../../../../../shared/types/api-types/bire-item-version-dto.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { CockpitWorkscopeFormService } from '../cockpit-workscope-form.service';

interface ConfTableOutputRow extends ConfTableOutput {
  max?: number;
}

export interface ConfigurationsEvolutionRow {
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  evolutionDesignation?: string;
  category?: string;
  compliance?: string;
  mod?: string;
  ad?: string;
  sb?: string;
  items?: string;
  itemsDesc?: string | undefined;
  isMandatory?: boolean;
  inMinConf?: boolean;
  inConf2?: boolean;
  inConf3?: boolean;
  isDisabled?: boolean;
  _obj?: ConfigurationsEvolutionOutput;
}

interface EvolutionLinkedToConfiguration {
  evolutionList: BirePackEvolutionOutput[];
  configuration: string;
  item?: string;
}

@Component({
  selector: 'aw-manage-configuration-form',
  styleUrls: ['../shared/shared.scss', './manage-configuration-form.component.scss'],
  templateUrl: './manage-configuration-form.component.html'
})
export class ManageConfigurationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public projectNumber: number;
  public itemConfigurationTable: ItemConfigurationOutput[];
  public itemConfigurationTableClone: ItemConfigurationOutput[];
  public itemConfigurationTableCols: TableColumn[];
  public configurationReportTable: ConfTableOutputRow[];
  public configurationReportTableCols: TableColumn[];
  public configurationEvolutionTable: ConfigurationsEvolutionRow[];
  public configurationEvolutionTableOnLoad: ConfigurationsEvolutionRow[];
  public configurationEvolutionTableCols: TableColumn[];
  public targetNumberList: LabelValue<string>[];
  public variantNameList: LabelValue<string>[];
  public selectedTargetConfiguration: string;
  public selectedTargetVariantName: string | undefined;
  public isLoadingItemConfiguration: boolean;
  public isLoadingConfigurationReport: boolean;
  public isLoadingConfigurationEvolution: boolean;
  public confList: SelectItem[];
  public selectedConf: string | undefined;
  public filterList: SelectItem[];
  public selectedFilter: string | undefined;
  public iwbTargetConfiguration: BireConfigurationDTO[];
  private evolutionLinkedToConfList: EvolutionLinkedToConfiguration[];

  public conf1: string = 'conf1';
  public conf2: string = 'conf2';
  public conf3: string = 'conf3';
  private categoryMandatory: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly cockpitWorkscopeFormService: CockpitWorkscopeFormService,
    public readonly sessionService: SessionService,
    public readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MANAGE_CONFIGURATION_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    const context = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : undefined;

    if (!!context) {
      this.displayComponentContext(`N°${context}`, this.isCreateOpenMode);
    }

    this.init();
    this.renderTreeTableColumns();
    this.fetchTablesData();
  }

  /**********************************
   * INITIALIZATION
   **********************************/
  private init() {
    this.targetNumberList = [];
    this.variantNameList = [];
    this.itemConfigurationTable = [];
    this.itemConfigurationTableClone = [];
    this.configurationEvolutionTable = [];
    this.configurationReportTable = [];
    this.iwbTargetConfiguration = [];
    this.evolutionLinkedToConfList = [];
    this.confList = [
      { label: String(this.translateService.instant(this.getTranslateKey('conf1'))), value: 'conf1' },
      { label: String(this.translateService.instant(this.getTranslateKey('conf2'))), value: 'conf2' },
      { label: String(this.translateService.instant(this.getTranslateKey('conf3'))), value: 'conf3' }
    ];
    this.filterList = [
      { label: String(this.translateService.instant(this.getTranslateKey('all'))), value: '0' },
      { label: String(this.translateService.instant(this.getTranslateKey('applied'))), value: '1' },
      { label: String(this.translateService.instant(this.getTranslateKey('notApplied'))), value: '2' }
    ];

    this.categoryMandatory = this.translateService.instant(this.getTranslateKey('mandatory'));
    this.selectedFilter = '0';
    this.selectedTargetConfiguration = '3';
    this.selectedConf = 'conf1';
  }

  /**********************************
   * TREE TABLE COLUMNS
   **********************************/
  private renderTreeTableColumns() {
    this.setConfigurationColumns();
    this.selectedTargetConfiguration = '1';

    this.configurationReportTableCols = [
      { field: 'conf1', alignment: 'center', width: '18%' },
      { field: 'conf2', alignment: 'center', width: '18%' },
      { field: 'conf3', alignment: 'center', width: '18%' }
    ];

    this.configurationEvolutionTableCols = [
      { field: 'items', alignment: 'left', width: '10%' },
      { field: 'apply', alignment: 'center', width: '5%' },
      { field: 'evolutionNumber', alignment: 'left', width: '10%' },
      { field: 'evolutionDesignation', alignment: 'left', width: '20%' },
      { field: 'category', alignment: 'left', width: '15%' },
      { field: 'compliance', alignment: 'left', width: '10%' },
      { field: 'mod', alignment: 'left', width: '10%' },
      { field: 'sb', alignment: 'left', width: '10%' },
      { field: 'ad', alignment: 'left', width: '10%' }
    ];
  }

  /**********************************
   * FETCH PROJECT DETAILS
   **********************************/
  private fetchTablesData() {
    this.projectNumber = parseInt(this.serializationService.deserialize(this.componentData.objectId as string), 10);
    if (!!this.projectNumber) {
      const inputData: CockpitInspectionInput = {
        projectNumber: this.projectNumber
      };
      const projectNumber = this.projectNumber;
      if (projectNumber) {
        this.isLoadingConfigurationEvolution = true;
        this.isLoadingConfigurationReport = true;
        this.isLoadingItemConfiguration = true;

        this.cockpitWorkscopeFormService
          .getWorkscopeTargetNumberAndVariantName(inputData)
          .pipe(
            finalize(() => {
              this.isLoadingConfigurationEvolution = false;
              this.isLoadingConfigurationReport = false;
              this.isLoadingItemConfiguration = false;
            })
          )
          .subscribe((result) => {
            if (result) {
              this.targetNumberList = [
                { label: String(this.translateService.instant(this.getTranslateKey('conf1'))), value: '1' },
                { label: String(this.translateService.instant(this.getTranslateKey('conf2'))), value: '2' },
                { label: String(this.translateService.instant(this.getTranslateKey('conf3'))), value: '3' }
              ];

              if (result.variantNameList) {
                this.variantNameList = result.variantNameList;
                this.selectedTargetVariantName =
                  !!this.variantNameList && this.variantNameList.length > 0 ? this.variantNameList[0].value : undefined;
              }
              if (result.itemConfigurationOutputList) {
                result.itemConfigurationOutputList.forEach((data) => {
                  if (!!data.iwbTargetConfigList1) {
                    data.iwbTargetConfigList1.sort((a, b) => (!!a.label && !!b.label && a.label > b.label ? 1 : -1));
                  }

                  if (!!data.iwbTargetConfigList2) {
                    data.iwbTargetConfigList2.sort((a, b) => (!!a.label && !!b.label && a.label > b.label ? 1 : -1));
                  }

                  if (!!data.iwbTargetConfigList3) {
                    data.iwbTargetConfigList3.sort((a, b) => (!!a.label && !!b.label && a.label > b.label ? 1 : -1));
                  }

                  const dto = { label: '', value: undefined };
                  if (!!data.iwbTargetConfigList1 && data.iwbTargetConfigList1.length > 0) {
                    data.iwbTargetConfigList1.unshift(dto);
                  }
                  if (!!data.iwbTargetConfigList2 && data.iwbTargetConfigList2.length > 0) {
                    data.iwbTargetConfigList2.unshift(dto);
                  }
                  if (!!data.iwbTargetConfigList3 && data.iwbTargetConfigList3.length > 0) {
                    data.iwbTargetConfigList3.unshift(dto);
                  }
                });

                this.itemConfigurationTable = result.itemConfigurationOutputList;
                this.itemConfigurationTableClone = _cloneDeep(this.itemConfigurationTable);
              }
              if (result.configurationReportList) {
                this.configurationReportTable = result.configurationReportList.map((obj) => {
                  const row: ConfTableOutputRow = obj;
                  if (obj.conf1 && obj.conf2 && obj.conf3) {
                    row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
                  }

                  return row;
                });

                this.configurationReportTable.push(
                  {
                    name: this.translateService.instant(this.getTranslateKey('incomingLogbook')),
                    conf1: 0,
                    conf2: 0,
                    conf3: 0
                  },
                  {
                    name: this.translateService.instant(this.getTranslateKey('itemConfToApply')),
                    conf1: 0,
                    conf2: 0,
                    conf3: 0
                  }
                );
              }
              if (result.configurationEvolutionDTOList) {
                this.configurationEvolutionTable = result.configurationEvolutionDTOList.map((obj) => {
                  const configurationsEvolutionRow: ConfigurationsEvolutionRow = {
                    ad: obj.ad,
                    category: obj.category,
                    compliance: obj.compliance,
                    evolutionDesignation: obj.evolutionDesignation,
                    evolutionNumber: obj.evolutionNumber,
                    evolutionRevisionNumber: obj.evolutionRevisionNumber,
                    isMandatory: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.mandatory,
                    inConf2: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inConf2,
                    inConf3: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inConf3,
                    inMinConf: obj.iwbMinimalEvolution && obj.iwbMinimalEvolution.inMinConf,
                    items: obj.items,
                    itemsDesc:
                      obj.iwbMinimalEvolution &&
                      obj.iwbMinimalEvolution.configurableItemsImpactedList &&
                      obj.iwbMinimalEvolution.configurableItemsImpactedList.length
                        ? obj.iwbMinimalEvolution.configurableItemsImpactedList[0].name
                        : '',
                    mod: obj.mod,
                    sb: obj.sb,
                    _obj: obj
                  };

                  return configurationsEvolutionRow;
                });

                this.renderEvolutionTable(true);
                this.updateAppliedReportCounter();
                this.iwbTargetConfiguration = result.iwbTargetConfiguration || [];
                this.findEvolutionLinkedToConfiguration(this.iwbTargetConfiguration);
              }
            }
          });
      }
    }
  }

  /*********************************************
   * EVOLUTIONS LINKED TO CONFIGURATION
   ********************************************/
  private findEvolutionLinkedToConfiguration(configurationList: BireConfigurationDTO[]) {
    this.evolutionLinkedToConfList = [];

    // Remove duplicate configurations occuring due to 3 conf
    const configurations: BireConfigurationDTO[] = [];
    configurationList.forEach((res) => {
      const found = configurations.some((conf) => conf.configurationCode === res.configurationCode);
      if (!found) {
        configurations.push(res);
      }
    });

    configurations.forEach((res) => {
      if (res.configurationCode) {
        const isConfExist = this.evolutionLinkedToConfList.some(
          (evolutions) => evolutions.configuration === res.configurationCode
        );

        if (!isConfExist) {
          const input: ConfigurationPackListInput = {
            bireItemVersionDTO: res as BireItemVersionDTO,
            configurationCode: res.configurationCode
          };

          this.cockpitWorkscopeFormService
            .findBireConfigurationPacksByItemVersionAndConfigurationCode(input)
            .subscribe((packList) => {
              if (!!packList && packList.length > 0) {
                // FIND PACKS HERE
                packList.forEach((pack) => {
                  const packInput: BirePackEvolutionInput = {
                    bireItemDTO: res as BireItemDTO,
                    packBaseOptionCode: pack.packBaseOptionCode
                  };

                  this.cockpitWorkscopeFormService
                    .findBirePackEvolutionsByItemAndPackBaseOptionCodeItem(packInput)
                    .subscribe((evolutions: BirePackEvolutionOutput[]) => {
                      this.evolutionLinkedToConfList.push({
                        evolutionList: evolutions,
                        configuration: res.configurationCode as string,
                        item: `${res.chapter}-${res.section}-${res.subject}-${res.sheet}-${res.marks}`
                      });
                    });
                });
              }
            });
        }
      }
    });
  }

  private setConfigReportTable() {
    const CONFIG_INDEX_LOGBOOK = 3;
    const INCOMING_LOGBOOK = this.translateService.instant(this.getTranslateKey('incomingLogbook')) as string;

    if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1) {
      this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 = 0;
    }
    if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2) {
      this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 = 0;
    }
    if (!this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3) {
      this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 = 0;
    }

    this.configurationEvolutionTableOnLoad.forEach((obj) => {
      if (obj.category === INCOMING_LOGBOOK) {
        if (obj.inMinConf) {
          this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 = this.configurationReportTable[
            CONFIG_INDEX_LOGBOOK
          ].conf1
            ? (this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf1 as number) + 1
            : 1;
        }

        if (obj.inConf2) {
          this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 = this.configurationReportTable[
            CONFIG_INDEX_LOGBOOK
          ].conf2
            ? (this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf2 as number) + 1
            : 1;
        }

        if (obj.inConf3) {
          this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 = this.configurationReportTable[
            CONFIG_INDEX_LOGBOOK
          ].conf3
            ? (this.configurationReportTable[CONFIG_INDEX_LOGBOOK].conf3 as number) + 1
            : 1;
        }
      }
    });

    const data = this.configurationReportTable[CONFIG_INDEX_LOGBOOK] as ConfTableOutputRow;
    this.configurationReportTable[CONFIG_INDEX_LOGBOOK].max = Math.max(
      data.conf1 as number,
      data.conf2 as number,
      data.conf3 as number
    );
  }

  private renderEvolutionTable(updateTable: boolean) {
    this.sortEvolution();
    this.selectConfig();

    if (updateTable) {
      this.setConfigReportTable();
    }
  }

  private sortEvolution() {
    if (!this.configurationEvolutionTableOnLoad || this.configurationEvolutionTableOnLoad.length === 0) {
      this.configurationEvolutionTableOnLoad = _cloneDeep(this.configurationEvolutionTable);
    }
    this.configurationEvolutionTableOnLoad.sort((a: ConfigurationsEvolutionRow, b: ConfigurationsEvolutionRow) => {
      if (!!a.items && !!b.items) {
        if (a.items < b.items) {
          return -1;
        } else if (a.items > b.items) {
          return 1;
        } else {
          return 0;
        }
      }

      return 0;
    });
  }

  public selectConfig() {
    if (this.selectedConf === this.conf1) {
      this.configurationEvolutionTableOnLoad.forEach((obj) => {
        obj.isDisabled = obj.isMandatory;
      });
    }
  }

  /*************************************************
   * Change event on conf change
   ************************************************/
  public onChangeMinConf(rowData: ConfigurationsEvolutionRow) {
    const SELECTED = this.translateService.instant(this.getTranslateKey('selected')) as string;
    const AVAILABLE = this.translateService.instant(this.getTranslateKey('available')) as string;
    const incomingLogbook = this.translateService.instant(this.getTranslateKey('incomingLogbook')) as string;

    if (!!rowData.category && rowData.category.toLowerCase() !== incomingLogbook.toLowerCase()) {
      if (this.selectedConf === this.conf1) {
        rowData.category = rowData.inMinConf ? SELECTED : AVAILABLE;
      } else if (this.selectedConf === this.conf2) {
        rowData.category = rowData.inConf2 ? SELECTED : AVAILABLE;
      } else if (this.selectedConf === this.conf3) {
        rowData.category = rowData.inConf3 ? SELECTED : AVAILABLE;
      }
    }

    let changeIndex = -1;
    this.configurationEvolutionTable.filter((res, index) => {
      if (
        res.items === rowData.items &&
        res.evolutionNumber === rowData.evolutionNumber &&
        res.evolutionRevisionNumber === rowData.evolutionRevisionNumber
      ) {
        changeIndex = index;
      }
    });

    if (changeIndex !== -1) {
      this.configurationEvolutionTable[changeIndex] = rowData;
    }
    this.configurationEvolutionTable = _cloneDeep(this.configurationEvolutionTable);
    this.updateAppliedReportCounter();
  }

  public setConfigurationColumns() {
    this.itemConfigurationTableCols = [
      { field: 'bireItemText', alignment: 'left', width: '36%' },
      { field: 'conf2', alignment: 'left', width: '32%' },
      { field: 'conf3', alignment: 'left', width: '32%' }
    ];
  }

  public openEvolutionLink(evolution: ConfigurationsEvolutionRow): void {
    if (evolution && evolution.evolutionNumber && evolution.evolutionRevisionNumber) {
      const bireEvolutionId: BireEvolutionDTOId = {
        evolutionNumber: evolution.evolutionNumber,
        evolutionRevisionNumber: evolution.evolutionRevisionNumber
      };
      this.openEvolution(bireEvolutionId, ComponentOpenMode.Read);
    }
  }

  private openEvolution(objectId: BireEvolutionDTOId | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************************
   * Action on change configuration
   **********************************************/
  public onChangeConfiguration(rowData: ItemConfigurationOutput, index: number, confCode: string) {
    const selected = this.translateService.instant(this.getTranslateKey('selected')) as string;
    const conf3 = 3;
    const ITEM_CONFIG_TO_APPLY_INDEX = 4;

    // History Data
    const data = this.itemConfigurationTableClone.filter((res) => res.bireItemText === rowData.bireItemText);

    // Check the conf code
    const code = !!confCode
      ? confCode
      : data.length > 0 && index === 1
      ? data[0].conf1
      : index === 2
      ? data[0].conf2
      : data[0].conf3;
    const evolutionData = this.evolutionLinkedToConfList.filter((res) => res.configuration === code);
    this.updateTableForLastConfiguration(index, rowData);

    if (!!evolutionData && evolutionData.length > 0) {
      const evolutionList = evolutionData[0].evolutionList.map(({ evolutionNumber }) => evolutionNumber);
      this.setValuesToConfigToApply(0, 0, 0);

      const INDUCED_BY_SELECTION = this.translateService.instant(this.getTranslateKey('induceBySelection')) as string;
      const AVAILABLE = this.translateService.instant(this.getTranslateKey('available')) as string;

      if (!!data && !!rowData && data.length > 0 && evolutionList.length > 0) {
        const itemData = data[0]; // History Data
        this.configurationEvolutionTable.filter((ev) => {
          if (ev.items === rowData.bireItemText && ev.category !== this.categoryMandatory) {
            if (index === 2 && evolutionList.indexOf(ev.evolutionNumber) !== -1) {
              if (!!rowData.conf2 && !itemData.conf2) {
                ev.inConf2 = true;
                if (ev.category !== selected) {
                  ev.category = INDUCED_BY_SELECTION;
                }
              } else if (!rowData.conf2 && !!itemData.conf2) {
                ev.inConf2 = false;
                ev.category = AVAILABLE;
              } else if (!!rowData.conf2 && !!itemData.conf2) {
                if (ev.items === itemData.bireItemText) {
                  ev.inConf2 = false;
                  ev.category = AVAILABLE;
                }
                if (ev.items === rowData.bireItemText) {
                  ev.inConf2 = true;
                  if (ev.category !== selected) {
                    ev.category = INDUCED_BY_SELECTION;
                  }
                }
              }
            } else if (index === conf3 && evolutionList.indexOf(ev.evolutionNumber) !== -1) {
              if (!!rowData.conf3 && !itemData.conf3) {
                ev.inConf3 = true;

                if (ev.category !== selected) {
                  ev.category = INDUCED_BY_SELECTION;
                }
              } else if (!rowData.conf3 && !!itemData.conf3) {
                ev.inConf3 = false;

                ev.category = AVAILABLE;
              } else if (!!rowData.conf3 && !!itemData.conf3) {
                if (ev.items === itemData.bireItemText) {
                  ev.inConf3 = false;
                  ev.category = AVAILABLE;
                }
                if (ev.items === rowData.bireItemText) {
                  ev.inConf3 = true;

                  if (ev.category !== selected) {
                    ev.category = INDUCED_BY_SELECTION;
                  }
                }
              }
            }
          }
        });
      }

      this.configurationEvolutionTableOnLoad = _cloneDeep(this.configurationEvolutionTable);
      this.renderEvolutionTable(false);

      this.updateAppliedReportCounter();
    }

    this.itemConfigurationTableClone = _cloneDeep(this.itemConfigurationTable);
    // Update Counters
    this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX] = this.updateItemConfigToApplyCounters();
    const itemConf = this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX] as ConfTableOutputRow;

    this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].max = Math.max(
      itemConf.conf1 as number,
      itemConf.conf2 as number,
      itemConf.conf3 as number
    );

    this.selectFilter();
  }

  /*************************************
   * Update for last configuration
   *************************************/
  private updateTableForLastConfiguration(index: number, rowData: ItemConfigurationOutput) {
    const AVAILABLE = this.translateService.instant(this.getTranslateKey('available')) as string;

    // History Data
    const itemData = this.itemConfigurationTableClone.filter((res) => res.bireItemText === rowData.bireItemText);

    if (!!itemData && itemData.length > 0) {
      const data = itemData[0];
      // Check the conf code
      const code = index === 2 ? data.conf2 : data.conf3;
      if (!!code) {
        const evolutionData = this.evolutionLinkedToConfList.filter((res) => res.configuration === code);

        if (!!evolutionData && evolutionData.length > 0) {
          // Find list of evolution for that configuration
          const evolutionList = evolutionData[0].evolutionList.map(({ evolutionNumber }) => evolutionNumber);

          // Filter out the evolution of that item and remove it from selection
          this.configurationEvolutionTable.filter((ev) => {
            if (ev.items === rowData.bireItemText && ev.category !== this.categoryMandatory) {
              if (index === 2 && ev.inConf2 && evolutionList.indexOf(ev.evolutionNumber) !== -1) {
                ev.inConf2 = false;
                ev.category = AVAILABLE;
              }
            }
          });
        }
      }
      this.updateAppliedReportCounter();
    }
  }

  private updateItemConfigToApplyCounters() {
    const row: ConfTableOutputRow = {
      name: this.translateService.instant(this.getTranslateKey('itemConfToApply')),
      conf1: 0,
      conf2: 0,
      conf3: 0
    };

    this.itemConfigurationTable.forEach((res) => {
      if (!!res.conf1) {
        (row.conf1 as number)++;
      }
      if (!!res.conf2) {
        (row.conf2 as number)++;
      }
      if (!!res.conf3) {
        (row.conf3 as number)++;
      }
    });

    return row;
  }

  private setValuesToConfigToApply(conf1: number, conf2: number, conf3: number) {
    const ITEM_CONFIG_TO_APPLY_INDEX = 4;

    if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf1) {
      this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf1 = conf1;
    }
    if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf2) {
      this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf2 = conf2;
    }
    if (!this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf3) {
      this.configurationReportTable[ITEM_CONFIG_TO_APPLY_INDEX].conf3 = conf3;
    }
  }

  /***********************************************
   * Filter
   ***********************************************/
  public selectFilter() {
    if (this.selectedConf === this.conf1) {
      this.configurationEvolutionTableOnLoad.forEach((obj) => {
        obj.isDisabled = obj.isMandatory;
      });
    }

    switch (this.selectedFilter) {
      case '0': {
        this.configurationEvolutionTableOnLoad = _cloneDeep(this.configurationEvolutionTable);
        break;
      }
      case '1': {
        this.configurationEvolutionTableOnLoad = this.configurationEvolutionTable.filter((res) => {
          if (this.selectedConf === 'conf1') {
            return res.inMinConf === true;
          }
          if (this.selectedConf === 'conf2') {
            return res.inConf2 === true;
          }
          if (this.selectedConf === 'conf3') {
            return res.inConf3 === true;
          }
        });
        break;
      }
      case '2': {
        this.configurationEvolutionTableOnLoad = this.configurationEvolutionTable.filter((res) => {
          if (this.selectedConf === 'conf1') {
            return res.inMinConf === false;
          }
          if (this.selectedConf === 'conf2') {
            return res.inConf2 === false;
          }
          if (this.selectedConf === 'conf3') {
            return res.inConf3 === false;
          }
        });
        break;
      }
      default:
        break;
    }

    this.configurationEvolutionTableOnLoad = _cloneDeep(this.configurationEvolutionTableOnLoad);
    this.renderEvolutionTable(false);
  }

  private updateAppliedReportCounter() {
    // Resetting the counter
    this.setAppliedCounter(0, 0, 0, 0, 0, 0);

    // Updating applied counters
    let appliedInConf1 = 0;
    let appliedInConf2 = 0;
    let appliedInConf3 = 0;

    // Updating Incoming Counters
    let incomingConf1 = 0;
    let incomingConf2 = 0;
    let incomingConf3 = 0;

    this.configurationEvolutionTable.forEach((res) => {
      if (res.inMinConf) {
        appliedInConf1++;

        if (res.category === this.translateService.instant(this.getTranslateKey('incomingLogbook'))) {
          incomingConf1++;
        }
      }
      if (res.inConf2) {
        appliedInConf2++;

        if (res.category === this.translateService.instant(this.getTranslateKey('incomingLogbook'))) {
          incomingConf2++;
        }
      }
      if (res.inConf3) {
        appliedInConf3++;

        if (res.category === this.translateService.instant(this.getTranslateKey('incomingLogbook'))) {
          incomingConf3++;
        }
      }
    });

    this.setAppliedCounter(appliedInConf1, appliedInConf2, appliedInConf3, incomingConf1, incomingConf2, incomingConf3);
  }

  /**********************************************
   * Set APPLIED Counter
   **********************************************/
  private setAppliedCounter(
    conf1: number,
    conf2: number,
    conf3: number,
    inconf1: number,
    inconf2: number,
    inconf3: number
  ) {
    const appliedIndex = 1;
    const incomingLogbookIndex = 3;

    // Resetting the counter
    this.configurationReportTable = this.configurationReportTable.map((obj, index) => {
      const row: ConfTableOutputRow = obj;
      if (index === appliedIndex) {
        obj.conf1 = conf1;
        obj.conf2 = conf2;
        obj.conf3 = conf3;
        if (obj.conf1 && obj.conf2 && obj.conf3) {
          row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
        }
      }

      if (index === incomingLogbookIndex) {
        obj.conf1 = inconf1;
        obj.conf2 = inconf2;
        obj.conf3 = inconf3;
        if (obj.conf1 && obj.conf2 && obj.conf3) {
          row.max = Math.max(obj.conf1, obj.conf2, obj.conf3);
        }
      }

      return row;
    });
  }
}
