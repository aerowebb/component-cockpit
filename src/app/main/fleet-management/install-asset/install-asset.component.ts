import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Table } from 'primeng/table';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { CheckInstallInput } from '../../../shared/types/api-input-types/fleet-business/check-install-input.interface';
import { InstallEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/install-equipment-input.interface';
import { AssetInstalledInput } from '../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { CounterMeasureInputDTO } from '../../../shared/types/api-input-types/install-asset/counter-measure-input-dto.interface';
import { EvolutionLinkedToAssetInputDTO } from '../../../shared/types/api-input-types/install-asset/evolution-linked-to-asset-input-dto.interface';
import { GetParentsByEquipmentRecursivelyAtDateInputDTO } from '../../../shared/types/api-input-types/install-asset/get-parents-by-equipment-recursively-at-date-input-dto.interface';
import { InstallAssetOutputDTO } from '../../../shared/types/api-output-types/fleet-business/install-asset-output-dto.interface';
import { AssetsToBeInstalledOutputDTO } from '../../../shared/types/api-output-types/fleet-history/assets-to-be-installed-output-dto.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { InstallEquipmentOutputWithReportDTO } from '../../../shared/types/api-output-types/install-asset/install-equipment-output-with-report-dto.interface';
import { MeasureProgressUIDTO } from '../../../shared/types/api-output-types/install-asset/measure-progress-ui-dto.interface';
import { EventOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionDTO } from '../../../shared/types/api-types/bido-equipment-evolution-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';

import { InstallAssetService } from './install-asset.service';

interface AssetsTableRow {
  report?: boolean | undefined;
  assetPn?: string;
  assetSn?: string;
  assetDesignation?: string;
  assetStatusValue?: string;
  assetStatusLabel?: string;
  assetFamilyVariant?: string;
  assetFunctionType?: string;
  assetOperationalStatus?: string;
  assetFunLocCode?: string;
  superiorPn?: string;
  superiorSN?: string;
  superiorDesignation?: string;
  superiorAsset?: string;
  equipmentFunction?: string;
  itemDataCode?: string;
  position?: string;
  funLocCode?: string;
  alert?: boolean;
  exceptionMessage?: string;
  assetCode?: string;
  assestFatherCode?: string;
  isAircraft?: boolean;
  alertMessage?: string | undefined;
  reportMessage?: string | undefined;
  assetsDTO?: InstallAssetOutputDTO | undefined;
  _obj?: BidoEquipmentOVSOutputDTO;
}

@Component({
  selector: 'aw-install-asset',
  styleUrls: ['./install-asset.component.scss'],
  templateUrl: './install-asset.component.html'
})
export class InstallAssetComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ADDITIONAL_INFORMATION_ANCHOR_ID: string = 'additionalInformationAnchor';
  public static readonly ASSETS_TO_BE_INSTALLED_ANCHOR_ID: string = 'assetsToBeInstalledAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';

  public readonly component: typeof InstallAssetComponent;

  @ViewChild(InstallAssetComponent.ADDITIONAL_INFORMATION_ANCHOR_ID)
  public additionalFields: ElementRef;

  @ViewChild(InstallAssetComponent.ASSETS_TO_BE_INSTALLED_ANCHOR_ID)
  public assetToInstallGrid: ElementRef;

  @ViewChild(InstallAssetComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInfoAnchor: ElementRef;

  public saveDone: boolean;

  public dialogAddAssetVisible: boolean;

  private superiorAsset: BidoEquipmentDTO | undefined;
  public superiorAssetCode: string | undefined;

  public selectedAssetRow: AssetsToBeInstalledOutputDTO | undefined;
  public selectedAssetRowIndex: number | undefined;
  public showQuickSearchEquipmentPopup: boolean;
  public showQuickSearchEventPopup: boolean;
  public showAdvancedFields: boolean;
  public showInstallAssetPopup: boolean;
  public showEditPanel: boolean;
  public enableReport: boolean = false;
  public showInstallReportPopup: boolean = false;
  public showAdvancedCriteria: boolean;
  public selectedSuperiorAssetDTO: BidoEquipmentOVSOutputDTO;

  public resultsTable: AssetsTableRow[];
  public resultsTableCols: TableColumn[];
  public resultsTableColsClone: TableColumn[];

  public familyVariant: string | undefined;
  public propertyVariant: LabelValue<string>[];
  public propertyOperationalStatus: LabelValue<string>[];
  public fixStatusList: LabelValue<string>[];

  public functionalLocation: string;

  public isSaveAllowed: boolean;
  public date: Date;
  public newOperationalStatus: string;

  public isReadOnly: boolean;
  public isSuperiorAircraft: boolean = false;

  public eventCode: string;
  public description: string;
  public readingHours: string;
  public readingMin: string;
  public subject: string;
  public eventType: string | undefined;
  public eventSubject: string | undefined;
  public superiorAssetDesignation: string;
  public superiorAtaCode: string | undefined;
  public superiorAssetName: string;
  public isScheduled: boolean;
  public generateEvent: boolean;

  public evolutionsLinked: BidoEquipmentEvolutionDTO[];
  public newEvolutionsLinked: BidoEquipmentEvolutionDTO[];
  public canceledMeasureProgress: MeasureProgressUIDTO[];
  public createMeasureProgress: MeasureProgressUIDTO[];
  public assetToInstall: BidoEquipmentDTO;
  public evolutionsTableCols: TableColumn[];
  public counterTableCols: TableColumn[];
  public assetsToBeInstalled: AssetsToBeInstalledOutputDTO[];
  public asstesAfterInstalling: InstallAssetOutputDTO[];
  public equipmentInput: InstallEquipmentInput;
  public installEquipmentOutputWithReportDTO: InstallEquipmentOutputWithReportDTO;

  public assetsToInstall: AssetInstalledInput;
  public isLoading: boolean = false;
  public selectedAnchor: string | undefined;
  public toc: PageTocEntry[];

  public disableSave: boolean;
  public showSaveSpinner: boolean;
  public isGroundEquipment: boolean;
  public equipmentFunctionToSearch : string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly installAssetService: InstallAssetService,
    private readonly translateService: TranslateService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = InstallAssetComponent;

    super.registerPageTocEntryObservable();

    this.dialogAddAssetVisible = false;

    this.saveDone = false;

    this.isLoading = false;
    this.showInstallAssetPopup = false;
    this.showEditPanel = false;
    this.isReadOnly = false;
    this.showAdvancedCriteria = false;

    this.equipmentInput = {
      informationsDTO: {}
    };

    this.showAdvancedFields = false;
    this.resultsTable = [];
    this.generateEvent = true;
    this.isScheduled = false;
    this.isSaveAllowed = true;

    this.superiorAtaCode = undefined;

    this.propertyVariant = [];
    this.fixStatusList = [];
    this.propertyOperationalStatus = [];
    this.familyVariant = undefined;

    this.showQuickSearchEquipmentPopup = false;
    this.showQuickSearchEventPopup = false;

    this.selectedAnchor = undefined;

    this.assetsToBeInstalled = [];
    this.selectedAssetRow = undefined;
    this.selectedAssetRowIndex = undefined;
    this.installEquipmentOutputWithReportDTO = {};

    // Initialize Installation Date
    this.date = new Date();
    this.readingHours = this.date.getHours().toString();
    this.readingMin = this.date.getMinutes().toString();

    this.resultsTableCols = [
      { field: 'assetPn', alignment: 'left' },
      { field: 'assetSn', alignment: 'left' },
      { field: 'assetDesignation', alignment: 'left' },
      { field: 'assetStatusLabel', alignment: 'left' },
      { field: 'funLocCode', alignment: 'left' },
      { field: 'itemDataCode', alignment: 'left' },
      { field: 'position', alignment: 'left' },
      { field: 'superiorAsset', alignment: 'left' },
      { field: 'alert', alignment: 'left' }
    ];

    this.resultsTableColsClone = JSON.parse(JSON.stringify(this.resultsTableCols));

    this.evolutionsTableCols = [
      { field: 'equipmentCode', alignment: 'left', width: '10rem' },
      { field: 'evolutionType', alignment: 'left', width: '10rem' },
      { field: 'evolutionNumber', alignment: 'left', width: '10rem' },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '10rem' },
      { field: 'applicationDate', alignment: 'left', width: '10rem' },
      { field: 'isPartiallyApplied', alignment: 'left', width: '5rem' },
      { field: 'dateRemove', alignment: 'left', width: '10rem' },
      { field: 'isNotApplicable', alignment: 'left', width: '5rem' }
    ];

    this.counterTableCols = [
      { field: 'asset', alignment: 'left' },
      { field: 'counterCode', alignment: 'left' },
      { field: 'date', alignment: 'left' },
      { field: 'valueBefore', alignment: 'left' },
      { field: 'valueAfter', alignment: 'left' }
    ];

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  public getComponentName(): string {
    return 'InstallAssetComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    // this.displayComponentContext('global.search', true);
    this.loadDropDownLists();

    if (!!this.componentData && !!this.componentData.objectId) {
      this.assetsToInstall = this.serializationService.deserialize(this.componentData.objectId);
      if (this.assetsToInstall) {
        this.equipmentInput.informationsDTO.eventDate = this.assetsToInstall.date
          ? new Date(this.assetsToInstall.date)
          : undefined;

        if (this.assetsToInstall.superiorAssetCode) {
          this.loadSuperiorEquipment(this.assetsToInstall.superiorAssetCode);
        }

        if (!ListUtils.isNullOrEmpty(this.assetsToInstall.assetCode)) {
          this.loadAssets();
        }
      }
    }

    this.toc = [
      {
        id: 'mainInformationAnchor',
        anchor: this.mainInfoAnchor,
        label: 'Main Information'
      },
      {
        id: 'assetsToBeInstalledAnchor',
        anchor: this.assetToInstallGrid,
        label: 'Assets to be Installed'
      },
      {
        id: 'additionalInformationAnchor',
        anchor: this.additionalFields,
        label: 'Additional Information'
      }
    ];
  }

  private loadSuperiorEquipment(equipmentCode: string): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode
    };
    this.installAssetService.findBidoEquipment(input).subscribe((result) => {
      this.superiorAsset = result;
      // this.superiorAssetCode = BidoEquipmentUtils.createAssetName(this.superiorAsset); // This is commented as it show be assetCode and not name
      this.superiorAssetCode = result.equipmentCode;

      const event: BidoEquipmentOVSOutputDTO = {
        equipmentCode: result.equipmentCode,
        equipmentDesignation: result.equipmentDesignation,
        equipmentFunction: result.equipmentFunction,
        familyVariantCode: result.familyVariantCode,
        operationalStatus: result.operationalStatus,
        pnCode: result.pnCode,
        modelCode: result.modelCode,
        operatorCustomerCode: result.operatorCustomerCode,
        ownerCustomerCode: result.ownerCustomerCode,
        sn: result.sn,
        registration: result.registration
      };

      this.setSelectedAsset(event);
      this.getFixNewStatusDropdownList();
      this.equipmentInput.equipmentCodeFather = this.superiorAsset.equipmentCode;

      this.setAsGroundEquipment(result);
      this.loadDropDownLists();
    });
  }

  private setAsGroundEquipment(result: BidoEquipmentDTO) {
    if (
      !!result.equipmentFunction &&
      (result.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
        result.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
        result.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY)
    ) {
      this.equipmentFunctionToSearch = result.equipmentFunction;
      this.isGroundEquipment = true;
    }
  }

  public addAsset(): void {
    this.dialogAddAssetVisible = true;
  }

  public checkAssets(): void {
    this.resultsTable.forEach((row) => {
      if (this.superiorAsset && this.superiorAsset.equipmentCode && this.equipmentInput.informationsDTO.eventDate) {
        const date = new Date(
          this.equipmentInput.informationsDTO.eventDate.getFullYear(),
          this.equipmentInput.informationsDTO.eventDate.getMonth(),
          this.equipmentInput.informationsDTO.eventDate.getDate(),
          this.equipmentInput.informationsDTO.eventDate.getHours(),
          this.equipmentInput.informationsDTO.eventDate.getMinutes(),
          0,
          0
        );
        const input: CheckInstallInput = {
          equipmentCode: row.assetCode as string,
          fatherEquipmentCode: this.superiorAsset.equipmentCode,
          installationDate: date
        };
        this.installAssetService.checkInstall(input).subscribe((result) => {
          row.alert = result.status;
          row.alertMessage = result.message;

          this.resultsTable = [...this.resultsTable];
        });
      }
    });
  }

  public reload(event?: AssetsToBeInstalledOutputDTO): void {
    const assetCodes = this.resultsTable
      .map((elt) => elt.assetCode)
      .filter((elt) => ObjectUtils.isDefined(elt)) as string[];
    const assetInput: AssetInstalledInput = {
      assetCode: assetCodes,
      date: this.equipmentInput.informationsDTO.eventDate
    };
    this.installAssetService.findAssetInstallList(assetInput).subscribe((result) => {
      this.assetsToBeInstalled = [...result];
      this.resultsTable = this.convertIntoRowType(result);
      // this.enableSave(result);
      this.isLoading = false;

      this.resultsTable.forEach((row, index) => {
        if (event && event.assetCode === row.assetCode) {
          this.resultsTable[index] = { ...event };
        }

        if (
          row.assetCode &&
          this.superiorAsset &&
          this.superiorAsset.equipmentCode &&
          this.equipmentInput.informationsDTO.eventDate
        ) {
          const date = new Date(
            this.equipmentInput.informationsDTO.eventDate.getFullYear(),
            this.equipmentInput.informationsDTO.eventDate.getMonth(),
            this.equipmentInput.informationsDTO.eventDate.getDate(),
            this.equipmentInput.informationsDTO.eventDate.getHours(),
            this.equipmentInput.informationsDTO.eventDate.getMinutes(),
            0,
            0
          );
          const input: CheckInstallInput = {
            equipmentCode: row.assetCode,
            fatherEquipmentCode: this.superiorAsset.equipmentCode,
            installationDate: date
          };
          this.installAssetService.checkInstall(input).subscribe((resultCI) => {
            row.alert = resultCI.status;
            row.alertMessage = resultCI.message;

            this.resultsTable = [...this.resultsTable];
          });

          this.selectedAssetRow = undefined;
          this.selectedAssetRowIndex = undefined;
        }
      });
    });
  }

  public onAddAsset(newAssetList: BidoEquipmentOVSOutputDTO[]): void {
    const assetCodes = newAssetList
      .map((elt) => elt.equipmentCode)
      .filter((elt) => ObjectUtils.isDefined(elt)) as string[];
    const assetInput: AssetInstalledInput = {
      assetCode: assetCodes,
      date: this.equipmentInput.informationsDTO.eventDate
    };

    this.installAssetService.findAssetInstallList(assetInput).subscribe((result) => {
      this.assetsToBeInstalled = [...result];
      this.resultsTable = [...this.resultsTable, ...this.convertIntoRowType(result)];
      // this.enableSave(result);
      this.isLoading = false;

      this.resultsTable.forEach((row) => {
        if (
          row._obj &&
          row._obj.equipmentCode &&
          this.superiorAsset &&
          this.superiorAsset.equipmentCode &&
          this.equipmentInput.informationsDTO.eventDate
        ) {
          const date = new Date(
            this.equipmentInput.informationsDTO.eventDate.getFullYear(),
            this.equipmentInput.informationsDTO.eventDate.getMonth(),
            this.equipmentInput.informationsDTO.eventDate.getDate(),
            this.equipmentInput.informationsDTO.eventDate.getHours(),
            this.equipmentInput.informationsDTO.eventDate.getMinutes(),
            0,
            0
          );
          const input: CheckInstallInput = {
            equipmentCode: row._obj.equipmentCode,
            fatherEquipmentCode: this.superiorAsset.equipmentCode,
            installationDate: date
          };
          this.installAssetService.checkInstall(input).subscribe((resultCI) => {
            row.alert = resultCI.status;
            row.alertMessage = resultCI.message;

            this.resultsTable = [...this.resultsTable];
          });

          this.selectedAssetRow = undefined;
          this.selectedAssetRowIndex = undefined;
        }
      });

      if (!this.checkAssetListStatus()) {
        this.disableSave = true;
      } else {
        this.disableSave = false;
      }
      this.getFixNewStatusDropdownList();
    });
  }

  public openAsset(row: AssetsTableRow): void {
    if (row && row.assetCode) {
      if (this.isAssetAircraft(row)) {
        this.openAircraft(row.assetCode);
      } else if (this.isAssetEngine(row)) {
        this.openEngine(row.assetCode);
      } else if (this.isAssetEquipment(row)) {
        this.openEquipment(row.assetCode);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenAsset'));
    }
  }

  public isAssetAircraft(asset: AssetsTableRow): boolean {
    return !!asset.assetFunctionType && asset.assetFunctionType === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isAssetEngine(asset: AssetsTableRow): boolean {
    return !!asset.assetFunctionType && asset.assetFunctionType === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  public isAssetEquipment(asset: AssetsTableRow): boolean {
    return !!asset.assetFunctionType && !this.isAssetAircraft(asset) && !this.isAssetEngine(asset);
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public getStatusLabel(value): string {
    if (!!value) {
      const dto = this.fixStatusList.filter((res) => {
        return res.value === value;
      });

      return !!dto && !!dto[0] ? dto[0].label : '';
    } else {
      return '';
    }
  }

  /**
   * Method call to fill the asset information
   */
  public loadAssets() {
    this.selectedAssetRow = undefined;
    this.showEditPanel = false;
    this.equipmentInput.newOperationalStatus = undefined;
    this.equipmentInput.informationsDTO = {};

    this.eventType = '';
    this.eventSubject = '';

    if (!!this.equipmentInput && this.equipmentInput.informationsDTO) {
      this.equipmentInput.informationsDTO.eventDate = new Date();
      this.equipmentInput.informationsDTO.generateEvent = true;
    }

    this.resetTable();
  }

  private resetTable() {
    this.isLoading = true;
    const assetCodes: string[] = [];
    if (
      !!this.equipmentInput &&
      !!this.equipmentInput.informationsDTO &&
      !!this.assetsToInstall &&
      !!this.assetsToInstall.assetCode
    ) {
      this.assetsToInstall.assetCode.forEach((code) => {
        if (!!code) {
          assetCodes.push(code);
        }
      });

      const assetInput: AssetInstalledInput = {
        assetCode: assetCodes,
        date: this.equipmentInput.informationsDTO.eventDate
      };
      this.installAssetService.findAssetInstallList(assetInput).subscribe((result) => {
        this.assetsToBeInstalled = [...result];
        this.resultsTable = this.convertIntoRowType(result);
        // this.enableSave(result);
        this.isLoading = false;
        // this.bindEvolutionsTables();
        // this.getCounterMeasureList();
        if (!this.checkAssetListStatus()) {
          this.disableSave = true;
        } else {
          this.disableSave = false;
        }
      });
    }
  }

  private returnLabel(value: AssetsToBeInstalledOutputDTO): LabelValue<string> {
    const dto = this.propertyOperationalStatus.filter((res: LabelValue<string>) => {
      if (value.assetStatusValue === res.value) {
        return res;
      }
    });

    return dto[0];
  }

  private convertIntoRowType(assets: AssetsToBeInstalledOutputDTO[]): AssetsTableRow[] {
    const assetsTable: AssetsTableRow[] = [];
    let isGroundEquipmentFound = false;
    assets.forEach((row) => {
      if (!!row) {
        const assetRow: AssetsTableRow = {
          assetPn: row.assetPn,
          assetSn: row.assetSn,
          assetDesignation: row.assetDesignation,
          assetStatusLabel: !!this.returnLabel(row) ? this.returnLabel(row).label : '',
          assetStatusValue: row.assetStatusValue,
          assetFamilyVariant: row.assetFamilyVariant,
          assetFunctionType: row.assetFunctionType,
          assetFunLocCode: row.funLocCode,
          assetOperationalStatus: !!row.equipment ? row.equipment.operationalStatus : undefined,
          superiorPn: row.superiorPn,
          superiorSN: row.superiorSN,
          superiorDesignation: row.superiorDesignation,
          superiorAsset: row.superiorEquipment ? BidoEquipmentUtils.createAssetName(row.superiorEquipment) : undefined,
          funLocCode: row.funLocCode,
          itemDataCode: row.itemDataCode,
          position: row.position,
          assestFatherCode: row.assestFatherCode,
          assetCode: row.assetCode,
          isAircraft: row.isAircraft,
          alert: row.alert,
          alertMessage:
            row.exceptionMessage &&
            row.exceptionMessage.replace('com.twomoro.aerowebb.exception.AeroWebbException:', '')
        };
        assetsTable.push(assetRow);

        // Checking equipment Type

        if (
          !isGroundEquipmentFound &&
          (row.assetFunctionType === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
            row.assetFunctionType === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
            row.assetFunctionType === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY)
        ) {
          isGroundEquipmentFound = true;
          this.isGroundEquipment = true;
          this.equipmentFunctionToSearch = row.assetFunctionType;
        }
      }
    });

    // Refresh the dropdown
    this.loadDropDownLists();

    return assetsTable;
  }

  /**
   * Reload asset information on superior asset selection
   */
  public reloadAssets() {
    const assetCodes: string[] = [];
    if (
      !!this.assetsToInstall &&
      !!this.assetsToInstall.assetCode &&
      !!this.equipmentInput &&
      !!this.equipmentInput.informationsDTO
    ) {
      this.assetsToInstall.assetCode.forEach((code) => {
        assetCodes.push(code);
      });

      const assetInput: AssetInstalledInput = {
        assetCode: assetCodes,
        date: this.equipmentInput.informationsDTO.eventDate
      };
      this.installAssetService.findAssetInstallList(assetInput).subscribe((result) => {
        this.assetsToBeInstalled = [...result];
        this.resultsTable = this.convertIntoRowType(result);
        this.enableSave(result);
        this.isLoading = false;
        this.bindEvolutionsTables();
        this.getCounterMeasureList();
      });
    }
  }

  /**
   * Check if save is valid or not
   */
  private enableSave(assets: AssetsToBeInstalledOutputDTO[]) {
    let checkRowAlert = 0;
    assets.forEach((asset) => {
      checkRowAlert = asset.alert
        ? // tslint:disable-next-line:no-string-literal
          asset['assetStatusValue'] === '3-spa' || !asset['assetStatusValue']
          ? checkRowAlert + 1
          : checkRowAlert
        : checkRowAlert;
    });

    if (checkRowAlert === assets.length) {
      this.isSaveAllowed = true;
    }

    if (checkRowAlert < assets.length) {
      this.isSaveAllowed = false;
    }
  }

  /***********************
   * ACTIONS
   ***********************/

  public searchAsset() {
    if (this.isSaveAllowed) {
      this.showQuickSearchEquipmentPopup = true;
    }
  }

  public resetSuperiorAssetField(ev: Event) {
    if (this.isSaveAllowed) {
      this.equipmentInput.equipmentCodeFather = undefined;
      this.superiorAssetCode = undefined;
      this.equipmentInput.fixStatusFromAsset = undefined;
      this.equipmentInput.informationsDTO.subject = undefined;
      this.resetTable();
      ev.stopPropagation();
    }
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    if (!!event) {
      this.selectedSuperiorAssetDTO = event;
      this.fixStatusList = [];
      this.equipmentInput.equipmentCodeFather = !!event.equipmentCode ? event.equipmentCode : '';
      this.superiorAssetCode = !!event.equipmentCode ? event.equipmentCode : '';
      this.superiorAtaCode = !!event.ataCode ? event.ataCode : '';
      this.superiorAssetDesignation = !!event.equipmentDesignation ? event.equipmentDesignation : '';

      this.isSuperiorAircraft =
        event.equipmentFunction === 'Aircraft' ? this.hidePositionCol() : this.setOriginalCols();

      // Call to fetch counter
      this.getCounterMeasureList(event);
      this.getFixNewStatusDropdownList();
      this.addSuperiorToAssetGrid(event);
      if (this.isSaveAllowed) {
        this.fillSubject(event);
      }
    }
  }

  private setOriginalCols(): boolean {
    this.resultsTableCols = JSON.parse(JSON.stringify(this.resultsTableColsClone));

    return false;
  }

  /**
   * Hide Position Column in case aircraft is selected
   */
  private hidePositionCol(): boolean {
    this.resultsTableCols.filter((res, index) => {
      if (res.field === 'position') {
        this.resultsTableCols.splice(index, 1);
      }
    });

    return true;
  }

  /**
   * Fill Subject in additional information tab
   */
  private fillSubject(event: BidoEquipmentOVSOutputDTO) {
    if (!!this.equipmentInput && !!this.equipmentInput.informationsDTO) {
      let subject = '';
      this.resultsTable.forEach((row) => {
        if (row) {
          if (!event.pnCode && !row.superiorSN) {
            if (!!row.assetPn && !row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
                row.assetPn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${event.familyVariantCode}; `;
            } else if (!!row.assetPn && !!row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${row.assetPn}/${
                row.assetSn
              }  ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${event.familyVariantCode}; `;
            } else if (!row.assetPn && !!row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('sn'))} ${
                row.assetSn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${event.familyVariantCode}; `;
            } else {
              subject += `${row.assetFamilyVariant} ${this.translateService.instant(
                this.getTranslateKey('installedOn')
              )} ${event.familyVariantCode}; `;
            }
          } else if (!event.pnCode && !!row.superiorSN) {
            const fvCode = event.familyVariantCode;
            if (!!row.assetPn && !row.assetSn) {
              if (!!event.registration) {
                subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
                  row.assetPn
                } ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}| ${
                  event.registration
                }; `;
              } else {
                subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
                  row.assetPn
                } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${
                  event.familyVariantCode
                }| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}; `;
              }
            } else if (!!row.assetPn && !!row.assetSn) {
              if (!!event.registration) {
                subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${row.assetPn}/${
                  row.assetSn
                } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${fvCode}|
                ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}| ${event.registration}; `;
              } else {
                subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${row.assetPn}/${
                  row.assetSn
                } ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}; `;
              }
            } else if (!row.assetPn && !!row.assetSn) {
              if (!!event.registration) {
                subject += `${this.translateService.instant(this.getTranslateKey('sn'))} ${
                  row.assetSn
                } ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}| ${
                  event.registration
                }; `;
              } else {
                subject += `${this.translateService.instant(this.getTranslateKey('sn'))} ${
                  row.assetSn
                } ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}; `;
              }
            } else {
              if (!!event.registration) {
                subject += `${row.assetFamilyVariant} ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}| ${
                  event.registration
                }; `;
              } else {
                subject += `${row.assetFamilyVariant} ${this.translateService.instant(
                  this.getTranslateKey('installedOn')
                )} ${fvCode}| ${this.translateService.instant(this.getTranslateKey('msn'))} ${event.sn}; `;
              }
            }
          } else if (!!event.pnCode && !row.superiorSN) {
            subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
              row.assetPn
            } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${this.translateService.instant(
              this.getTranslateKey('pnCode')
            )} ${event.pnCode}; `;
          } else {
            if (!!row.assetPn && !row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
                row.assetPn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${this.translateService.instant(
                this.getTranslateKey('pnCode')
              )} ${event.pnCode}/${event.sn}; `;
            } else if (!!row.assetPn && !!row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${row.assetPn}/${
                row.assetSn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${this.translateService.instant(
                this.getTranslateKey('pnCode')
              )} ${event.pnCode}/${event.sn}; `;
            } else if (!row.assetPn && !!row.assetSn) {
              subject += `${this.translateService.instant(this.getTranslateKey('sn'))} ${
                row.assetSn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${this.translateService.instant(
                this.getTranslateKey('pnCode')
              )} ${event.pnCode}/${event.sn}; `;
            } else {
              subject += `${this.translateService.instant(this.getTranslateKey('pnCode'))} ${
                row.assetPn
              } ${this.translateService.instant(this.getTranslateKey('installedOn'))} ${this.translateService.instant(
                this.getTranslateKey('pnCode')
              )} ${event.pnCode}/${event.sn}; `;
            }
          }
        }
      });

      this.equipmentInput.informationsDTO.subject = subject;
    }
  }

  /**
   * Fill Superior Details in main asset table
   */
  private addSuperiorToAssetGrid(event: BidoEquipmentOVSOutputDTO) {
    this.resultsTable.forEach((row) => {
      row.superiorDesignation = event.equipmentDesignation;
      row.superiorPn = event.pnCode;
      row.superiorSN = event.sn;
      row.equipmentFunction = event.equipmentFunction;
    });
  }

  /**
   * Render fix new status dropdown
   */
  private getFixNewStatusDropdownList() {
    const assetCodes: string[] = [];
    if (!!this.superiorAssetCode) {
      this.resultsTable.forEach((res) => {
        if (!!res && !!res.assetCode) {
          assetCodes.push(res.assetCode);
        }
      });

      const getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO = {
        assetCode: [...assetCodes],
        date: this.date,
        superiorCode: this.superiorAssetCode
      };

      this.installAssetService
        .getParentsByEquipmentRecursivelyAtDate(getParentsByEquipmentRecursivelyAtDateInputDTO)
        .subscribe((result) => {
          this.fixStatusList = result;
          if (result.length > 0) {
            if (result.length === 1) {
              this.equipmentInput.fixStatusFromAsset = this.fixStatusList[0].value;
            } else {
              const data = result.filter((res) => {
                return res.value === this.superiorAssetCode;
              });

              if (!!data) {
                this.equipmentInput.fixStatusFromAsset = this.superiorAssetCode;
              }
            }
          }
        });
    }
  }

  public searchEventCode() {
    if (!this.saveDone) {
      this.showQuickSearchEventPopup = true;
    }
  }

  public resetEventField(ev: Event) {
    if (!this.saveDone) {
      this.equipmentInput.informationsDTO.linkedEventCode = undefined;
      this.eventType = undefined;
      this.eventSubject = undefined;
      ev.stopPropagation();
    }
  }

  /**
   * Set event information in additional tab
   */
  public setSelectedEvent(event: EventOVSOutputDTO) {
    if (!!event && !!event.eventType) {
      if (!!this.equipmentInput && !!this.equipmentInput.informationsDTO) {
        this.equipmentInput.informationsDTO.linkedEventCode = event.eventCode;
      }
      this.eventType = event.eventType;
      this.eventSubject = event.eventSubject;
    }
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  private loadDropDownLists(): void {
    const observable = !this.isGroundEquipment
      ? this.installAssetService.getOperationalStatusMap()
      : this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP);

    observable.subscribe(
      (results) => {
        this.propertyOperationalStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperationalStatus'));
      }
    );
  }

  /**
   * Bind Evolution Tables
   */
  public bindEvolutionsTables(): void {
    const assetInput: EvolutionLinkedToAssetInputDTO[] = [];
    this.resultsTable.forEach((res) => {
      if (
        !!res &&
        !!res.assetCode &&
        !!res.assetFamilyVariant &&
        !!res.assetPn &&
        !!this.equipmentInput &&
        !!this.equipmentInput.informationsDTO &&
        !!this.equipmentInput.informationsDTO.eventDate
      ) {
        const evolutionLinked: EvolutionLinkedToAssetInputDTO = {
          assetCode: res.assetCode,
          familyVariantCode: res.assetFamilyVariant,
          pnCode: res.assetPn,
          eventDate: this.equipmentInput.informationsDTO.eventDate
        };
        assetInput.push(evolutionLinked);
      }
    });

    this.installAssetService.getEvolutionsLinkedToAsset(assetInput).subscribe(
      (results) => {
        const proposedEvolution: BidoEquipmentEvolutionDTO[] = [];
        const evolutionLinked: BidoEquipmentEvolutionDTO[] = [];
        results.forEach((res) => {
          res.proposedBidoEquipmentEvolutionList.forEach((row) => {
            if (!!row) {
              proposedEvolution.push(row);
            }
          });
          res.bidoEquipmentEvolutionList.forEach((row) => {
            if (!!row) {
              evolutionLinked.push(row);
            }
          });
        });
        this.newEvolutionsLinked = [...proposedEvolution];
        this.evolutionsLinked = [...evolutionLinked];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutions'));
      }
    );
  }

  private getCounterMeasureList(event?: BidoEquipmentOVSOutputDTO) {
    const counterMeasureInput: CounterMeasureInputDTO[] = [];
    this.resultsTable.forEach((res) => {
      if (
        !!event &&
        !!event.equipmentCode &&
        !!res &&
        !!res.assetCode &&
        !!res.assetFamilyVariant &&
        !!res.assetPn &&
        !!this.equipmentInput &&
        !!this.equipmentInput.informationsDTO &&
        !!this.equipmentInput.informationsDTO.eventDate
      ) {
        const counterMesureInput: CounterMeasureInputDTO = {
          equipmentCode: res.assetCode,
          equipmentCodeFather: event.equipmentCode,
          date: this.equipmentInput.informationsDTO.eventDate
        };
        counterMeasureInput.push(counterMesureInput);
      } else if (res.superiorPn) {
        if (
          !!res &&
          !!res.assetCode &&
          !!res.assestFatherCode &&
          !!this.equipmentInput &&
          !!this.equipmentInput.informationsDTO &&
          !!this.equipmentInput.informationsDTO.eventDate
        ) {
          const counterMesureInput: CounterMeasureInputDTO = {
            equipmentCode: res.assetCode,
            equipmentCodeFather: res.assestFatherCode,
            date: this.equipmentInput.informationsDTO.eventDate
          };
          counterMeasureInput.push(counterMesureInput);
        }
      }
    });

    this.installAssetService.getCounterMeasureList(counterMeasureInput).subscribe(
      (results) => {
        if (!!results) {
          const cancelMeasure: MeasureProgressUIDTO[] = [];
          const createMeasure: MeasureProgressUIDTO[] = [];
          results.forEach((resp) => {
            resp.measureToCancel.forEach((row) => {
              cancelMeasure.push(row);
            });
            resp.measureToCreate.forEach((row) => {
              createMeasure.push(row);
            });
          });
          this.canceledMeasureProgress = [...cancelMeasure];
          this.createMeasureProgress = [...createMeasure];
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutions'));
      }
    );
  }

  private checkAssetListStatus(): boolean {
    return this.resultsTable.every((row) => ObjectUtils.isDefined(row.alert) && (row.alert as boolean));
  }

  public saveSuperiorAsset() {
    if (
      !this.superiorAssetCode ||
      !this.equipmentInput.newOperationalStatus ||
      !this.equipmentInput.informationsDTO.eventDate
    ) {
      this.messageService.showErrorMessage('global.missingFields');
    } else if (!this.checkDate()) {
      this.messageService.showErrorMessage(this.getTranslateKey('dateError'));
    } else if (!this.checkAssetListStatus()) {
      this.disableSave = true;
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnAssetStatus'));
    } else {
      const dateObj = new Date(
        this.equipmentInput.informationsDTO.eventDate.getFullYear(),
        this.equipmentInput.informationsDTO.eventDate.getMonth(),
        this.equipmentInput.informationsDTO.eventDate.getDate(),
        this.equipmentInput.informationsDTO.eventDate.getHours(),
        this.equipmentInput.informationsDTO.eventDate.getMinutes(),
        0,
        0
      );
      const installObj: InstallEquipmentInput[] = [];
      this.resultsTable.forEach((asset) => {
        if (asset) {
          const equipment: InstallEquipmentInput = {
            informationsDTO: this.equipmentInput.informationsDTO,
            equipmentCode: asset.assetCode,
            assetPn: asset.assetPn,
            equipmentCodeFather: this.equipmentInput.equipmentCodeFather,
            newOperationalStatus: this.equipmentInput.newOperationalStatus,
            equipmentToInstallFunction: asset.assetFunctionType,
            familyVariant: asset.assetFamilyVariant,
            newPosition: !!asset.position ? asset.position : undefined,
            flCode: !!asset.funLocCode ? asset.funLocCode : undefined,
            itemKey: !!asset.itemDataCode ? asset.itemDataCode : undefined,
            date: dateObj,
            fixStatusFromAsset: this.equipmentInput.fixStatusFromAsset,
            isSNEnabled: true,
            assetFunLocCode: this.equipmentInput.flCode,
            assetOperationalStatus: this.equipmentInput.assetOperationalStatus
          };
          installObj.push(equipment);
        }
      });

      this.showSaveSpinner = true;
      this.installAssetService.installEquipment(installObj).subscribe(
        (result) => {
          if (!!result && !!result.installAssetOutputDTO) {
            this.installEquipmentOutputWithReportDTO = result;
            // const assetResult: InstallAssetOutputDTO[] = result.installAssetOutputDTO;
            // this.asstesAfterInstalling = [...assetResult];
            // this.enableReport = true;
            // this.isSaveAllowed = false;
            // this.isReadOnly = true;
            // this.showEditPanel = false;
            this.saveDone = true;
            this.disableSave = true;

            this.resultsTable.forEach((row) => {
              const match = (result.installAssetOutputDTO as InstallAssetOutputDTO[]).find(
                (elt) => elt.equipmentCode === row.assetCode
              );
              if (match) {
                row.report = match.isInstalled;
                row.reportMessage = match.installMessageException;
                row.superiorAsset = BidoEquipmentUtils.createAssetName(this.superiorAsset);
              }
            });

            this.messageService.showSuccessMessage(this.getTranslateKey('messageOnSave'));
            this.showSaveSpinner = false;
          }
        },
        () => {
          this.resultsTable.forEach((row) => {
            row.report = false;
          });
          this.resultsTable = [...this.resultsTable];
          this.showSaveSpinner = false;
        }
      );
    }
  }

  public deleteAsset(): void {
    this.resultsTable = this.resultsTable.filter((_, index) => index !== this.selectedAssetRowIndex);
    this.selectedAssetRow = undefined;
    this.selectedAssetRowIndex = undefined;
    if (!this.checkAssetListStatus()) {
      this.disableSave = true;
    } else {
      this.disableSave = false;
    }
    this.getFixNewStatusDropdownList();
  }

  /**
   * Modify Asset Table Column to add report column
   */
  // private modifyTableCols(assetAfterInstall: InstallAssetOutputDTO[]) {
  //   assetAfterInstall.forEach((asset) => {
  //     const tableRow = this.resultsTable.find((row) => {
  //       return row.assetCode === asset.equipmentCode;
  //     });
  //     if (!!tableRow) {
  //       tableRow.superiorPn = this.selectedSuperiorAssetDTO.pnCode;
  //       tableRow.superiorDesignation = this.selectedSuperiorAssetDTO.equipmentDesignation;
  //       tableRow.superiorSN = this.selectedSuperiorAssetDTO.sn;
  //       tableRow.report = asset.isInstalled;
  //       tableRow.reportMessage =
  //         asset.installMessageException &&
  //         asset.installMessageException.replace('com.twomoro.aerowebb.exception.AeroWebbException:', '');
  //     }
  //   });

  //   const item: TableColumn = { field: 'report', alignment: 'left' };
  //   this.resultsTableCols.splice(0, 0, item);
  //   this.resultsTableCols.splice(this.resultsTableCols.length - 1, 1);
  // }

  /**
   * Display install report
   */
  public report() {
    this.showInstallReportPopup = true;
  }

  private checkDate(): boolean {
    return (
      !!this.equipmentInput.informationsDTO &&
      !!this.equipmentInput.informationsDTO.eventDate &&
      moment(this.equipmentInput.informationsDTO.eventDate).isBefore(moment())
    );
  }

  /**
   * After asset row Edit
   */
  public onRowEdit(event: AssetsToBeInstalledOutputDTO) {
    // this.resultsTable.forEach((row, index) => {
    //   if (row.assetCode === event.assetCode) {
    //     this.resultsTable[index] = { ...event };
    //   }
    // });
    // this.showEditPanel = false;
    this.reload(event);
  }

  public editSelectedAsset() {
    if (!!this.superiorAssetCode) {
      this.showInstallAssetPopup = true;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public onAssetRowSelect(rowIndex: number) {
    this.selectedAssetRowIndex = rowIndex;

    // if (this.equipmentInput.equipmentCodeFather) {
    //   this.showEditPanel = true;
    // }
  }

  public onAssetRowUnselect() {
    this.selectedAssetRowIndex = undefined;
    this.showEditPanel = false;
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }
}
