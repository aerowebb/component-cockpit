import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveSettingInput } from '../../../../shared/types/api-input-types/user-profile-management/save-setting-input.interface';
import { SettingCustomDTO } from '../../../../shared/types/api-output-types/user-profile-management/setting-custom-dto.interface';
import { SettingTableDTO } from '../../../../shared/types/api-output-types/user-profile-management/setting-table-dto.interface';
import { BidoPropertiesDTO } from '../../../../shared/types/api-types/bido-properties-dto.interface';
import { BidoPropertiesValueDTO } from '../../../../shared/types/api-types/bido-properties-value-dto.interface';
import { BsdeAwCustomDTO } from '../../../../shared/types/api-types/bsde-aw-custom-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { SettingsFormService } from './settings-form.service';

interface SectionRow {
  sectionTitle: string;
  sectionRowData: SettingCustomDTO[][];
}

@Component({
  selector: 'aw-settings-form',
  templateUrl: './settings-form.component.html'
})
export class SettingsFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly GENERAL_CONFIGURATION_ANCHOR_ID: string = 'generalConfigurationAnchor';
  public static readonly INSPECTOR_WORKBENCH_ANCHOR_ID: string = 'inspectorWorkBenchAnchor';
  public static readonly ENGINEERING_DATA_ANCHOR_ID: string = 'engineeringDataAnchor';
  public static readonly FLEET_MANAGEMENT_ANCHOR_ID: string = 'fleetManagementAnchor';
  public static readonly MAINTENANCE_OPERATIONS_ANCHOR_ID: string = 'maintenanceOperationsAnchor';
  public static readonly INSTALLATION_PARAMETERS_ANCHOR_ID: string = 'installationParametersAnchor';
  private static readonly AEROWEB_CONFIG_PROPERTY_ID = '1';

  public readonly component: typeof SettingsFormComponent;
  public readonly tabGeneralConfigurationId: string;
  public readonly tabInspectorWorkBenchId: string;
  public readonly tabEngineeringDataId: string;
  public readonly tabFleetManagementAnchorId: string;
  public readonly tabMaintenanceOperationsId: string;
  public readonly tabInstallationParametersId: string;

  public propertyValuesTableDataSource: TableDataSource<BidoPropertiesValueDTO>;
  public currentPropertyValue: BidoPropertiesValueDTO | undefined;
  public currentPropertyValueIndex: number | undefined;
  public customizePropertyList: SettingTableDTO[];

  public iwList: SettingTableDTO[];
  public emList: SettingTableDTO[];
  public fmList: SettingTableDTO[];
  public meList: SettingTableDTO[];
  public ipList: SettingTableDTO[];

  public iwListArr: SectionRow[];
  public emListArr: SectionRow[];
  public fmListArr: SectionRow[];
  public meListArr: SectionRow[];
  public ipListArr: SectionRow[];

  // Table of content ***********************************************************
  @ViewChild(SettingsFormComponent.GENERAL_CONFIGURATION_ANCHOR_ID)
  public generalConfigurationEltRef: ElementRef;

  @ViewChild(SettingsFormComponent.INSPECTOR_WORKBENCH_ANCHOR_ID)
  public inspectorWorkBenchEltRef: ElementRef;

  @ViewChild(SettingsFormComponent.ENGINEERING_DATA_ANCHOR_ID)
  public engineeringDataEltRef: ElementRef;

  @ViewChild(SettingsFormComponent.FLEET_MANAGEMENT_ANCHOR_ID)
  public fleetManagementEltRef: ElementRef;

  @ViewChild(SettingsFormComponent.MAINTENANCE_OPERATIONS_ANCHOR_ID)
  public maintenanceOperationsEltRef: ElementRef;

  @ViewChild(SettingsFormComponent.INSTALLATION_PARAMETERS_ANCHOR_ID)
  public installationParametersEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly settingsFormService: SettingsFormService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = SettingsFormComponent;

    this.customizePropertyList = [];
    this.iwList = [];
    this.emList = [];
    this.fmList = [];
    this.meList = [];
    this.ipList = [];
    this.iwListArr = [];
    this.emListArr = [];
    this.fmListArr = [];
    this.meListArr = [];
    this.ipListArr = [];

    super.registerPageTocEntryObservable();
    this.initPropertyValuesTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_SETTINGS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(ComponentOpenMode.Read);
    this.loadSettings();
  }

  public cancelSettings(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.loadSettings();
  }

  public editSettings(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadSettings(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    this.propertyValuesTableDataSource.setData([]);
    // get aerweb config properties
    const bidoPropertiesDTO: BidoPropertiesDTO = {
      propertiesId: SettingsFormComponent.AEROWEB_CONFIG_PROPERTY_ID,
      propertiesName: 'aerowebb_configuration',
      propertiesType: 'TECHNICAL',
      isInternationalized: false
    };
    this.settingsFormService.findBidoPropertyValuesByPropertyId(bidoPropertiesDTO).subscribe((result) => {
      if (!!result) {
        this.propertyValuesTableDataSource.addData(result);
      }
    });
    // Get customizing data
    this.settingsFormService.getCustomizationData().subscribe((result) => {
      if (!!result) {
        this.customizePropertyList = result;

        this.customizePropertyList.forEach((obj) => {
          obj.data.forEach((obj1) => {
            if (obj1.customValueList && obj1.bsdeAwCustomDTO.propertyDefaultValue) {
              let matchFound = 0;
              obj1.customValueList.forEach((val) => {
                if (val.value === obj1.bsdeAwCustomDTO.propertyDefaultValue) {
                  val.label = `${val.label} (default)`;
                  matchFound++;
                }
              });
              if (!matchFound) {
                const listOption: LabelValue<string> = {
                  label: `${obj1.bsdeAwCustomDTO.propertyDefaultValue} (default)`,
                  value: obj1.bsdeAwCustomDTO.propertyDefaultValue
                };
                obj1.customValueList.push(listOption);
              }
            }
          });
        });

        this.iwList = [];
        this.emList = [];
        this.fmList = [];
        this.meList = [];
        this.ipList = [];
        this.iwListArr = [];
        this.emListArr = [];
        this.fmListArr = [];
        this.meListArr = [];
        this.ipListArr = [];

        this.iwList = result.filter((obj) => {
          return obj.groupTitle === 'iw';
        });
        this.makeRowsFromList(this.iwList, this.iwListArr);

        this.emList = result.filter((obj) => {
          return obj.groupTitle === 'em';
        });
        this.makeRowsFromList(this.emList, this.emListArr);

        this.fmList = result.filter((obj) => {
          return obj.groupTitle === 'fm';
        });
        this.makeRowsFromList(this.fmList, this.fmListArr);

        this.meList = result.filter((obj) => {
          return obj.groupTitle === 'me';
        });
        this.makeRowsFromList(this.meList, this.meListArr);

        this.ipList = result.filter((obj) => {
          return obj.groupTitle === 'ip';
        });
        this.makeRowsFromList(this.ipList, this.ipListArr);

        this.setTableOfContent();
      }
    });
  }

  private makeRowsFromList(list: SettingTableDTO[], resultArr: SectionRow[]) {
    for (let k = 0; k < list.length; k++) {
      const sectionRowObj: SectionRow = {
        sectionTitle: list[k].title,
        sectionRowData: []
      };
      const rowArr: SettingCustomDTO[] = [];

      for (let i = 0; i < list[k].data.length; i++) {
        if (list[k].data[i]) {
          rowArr.push(list[k].data[i]);
        }
      }

      sectionRowObj.sectionRowData.push(rowArr);
      resultArr.push(sectionRowObj);
    }
  }

  private initPropertyValuesTableDataSource(): void {
    this.propertyValuesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'propertiesKey',
          translateKey: this.getTranslateKey('propertiesKey'),
          width: '35%'
        },
        {
          field: 'isStandard',
          translateKey: this.getTranslateKey('isStandard'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        },
        {
          field: 'propertiesValue',
          translateKey: this.getTranslateKey('propertiesValue'),
          width: '55%'
        }
      ],
      data: []
    });
  }

  public saveSettings(): void {
    const bsdeAwCustomDTOs: BsdeAwCustomDTO[] = [];
    const propertyTableDtos: BidoPropertiesValueDTO[] = [];
    this.customizePropertyList.forEach((obj) => {
      if (obj.data) {
        obj.data.forEach((customDto) => {
          bsdeAwCustomDTOs.push(customDto.bsdeAwCustomDTO);
        });
      }
    });

    this.propertyValuesTableDataSource.dataSrc.forEach((obj) => {
      if (obj.propertiesKey !== null && obj.propertiesKey !== undefined) {
        propertyTableDtos.push(obj);
      }
    });

    const saveSettingInput: SaveSettingInput = {
      bidoPropertiesValueDTO: propertyTableDtos,
      bsdeAwCustomDTO: bsdeAwCustomDTOs
    };

    this.showSaveSpinner = true;
    this.settingsFormService.updateSettings(saveSettingInput).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateSettings'));
        this.loadSettings();
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  /**************************************************************************
   * Table Of Content
   *************************************************************************/

  private setTableOfContent(): void {
    const generalConfigurationKey = this.getTranslateKey('generalConfiguration');
    const inspectorWorkBenchKey = this.getTranslateKey('inspectorWorkbench');
    const engineeringDataKey = this.getTranslateKey('engineeringManagement');
    const fleetManagementKey = this.getTranslateKey('fleetManagement');
    const maintenanceOperationsKey = this.getTranslateKey('maintenanceOperations');
    const installationParametersKey = this.getTranslateKey('installationParameters');
    this.translateService
      .get([
        generalConfigurationKey,
        inspectorWorkBenchKey,
        engineeringDataKey,
        fleetManagementKey,
        maintenanceOperationsKey,
        installationParametersKey
      ])
      .subscribe((results: string[]) => {
        const generalConfigurationLabel = !!results ? results[generalConfigurationKey] : 'General Configuration';
        const inspectorWorkBenchLabel = !!results ? results[inspectorWorkBenchKey] : 'Inspector Work Bench';
        const engineeringDataLabel = !!results ? results[engineeringDataKey] : 'Engineering Data';
        const fleetManagementLabel = !!results ? results[fleetManagementKey] : 'Fleet Management';
        const maintenanceOperationsLabel = !!results ? results[maintenanceOperationsKey] : 'Maintenance Operations';
        const installationParametersLabel = !!results ? results[installationParametersKey] : 'Installation Parameters';

        this.toc = [
          {
            id: 'generalConfigurationAnchor',
            anchor: this.generalConfigurationEltRef,
            label: generalConfigurationLabel
          },
          {
            id: 'inspectorWorkBenchAnchor',
            anchor: this.inspectorWorkBenchEltRef,
            label: inspectorWorkBenchLabel
          },
          {
            id: 'engineeringDataAnchor',
            anchor: this.engineeringDataEltRef,
            label: engineeringDataLabel
          },
          {
            id: 'fleetManagementAnchor',
            anchor: this.fleetManagementEltRef,
            label: fleetManagementLabel
          },
          {
            id: 'maintenanceOperationsAnchor',
            anchor: this.maintenanceOperationsEltRef,
            label: maintenanceOperationsLabel
          }
        ];

        if (this.ipList && this.ipList.length > 0) {
          this.toc.push({
            id: 'installationParametersAnchor',
            anchor: this.installationParametersEltRef,
            label: installationParametersLabel
          });
        }
      });
  }

  public addPropertyValue() {
    const bidoPropertiesValueDTO: BidoPropertiesValueDTO = {
      isStandard: false,
      propertiesKey: undefined,
      propertiesValue: undefined,
      propertiesId: SettingsFormComponent.AEROWEB_CONFIG_PROPERTY_ID
    };
    this.propertyValuesTableDataSource.addData([bidoPropertiesValueDTO]);
  }

  public deleteSelectedPropertyValue() {
    const partialMessageKey = 'global.deleteConfirmationMsg';

    this.confirmationService.confirmDelete({
      messageKey: partialMessageKey,
      accept: () => {
        this.propertyValuesTableDataSource.deleteDataSelection();
      }
    });
  }

  public disablePropertyTypeDeleteButton(): boolean {
    let result: boolean;

    if (this.propertyValuesTableDataSource.dataSelectionCount === 0) {
      result = true;
    } else {
      const properties: BidoPropertiesValueDTO[] = this.propertyValuesTableDataSource.dataSelection.filter(
        (value) => value.isStandard
      );
      result = properties.length === 0 ? false : true;
    }

    return result;
  }
}
