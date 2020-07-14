import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { ControlConfigurationInput } from '../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { SaveBidoFleetInput } from '../../../shared/types/api-input-types/fleet-management/save-bido-fleet-input.interface';
import { ControlConfigurationOutput } from '../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { AccessRightQueryDTO } from '../../../shared/types/api-types/access-right-query-dto.interface';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentTableDTO } from '../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { BidoFleetDTOId } from '../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidoFleetEquipmentDTO } from '../../../shared/types/api-types/bido-fleet-equipment-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';
import { AirworthinessControlFormComponentInput } from '../../maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { FleetSearchService } from '../fleet-search/fleet-search.service';

import { FleetFormService } from './fleet-form.service';

interface AssetRow extends BidoEquipmentTableDTO {
  status?: string;
  remainingCycles?: number;
  remainingHours?: number;
  calendarLimit?: Date;
}

@Component({
  selector: 'aw-fleet-form',
  templateUrl: './fleet-form.component.html'
})
export class FleetFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly tabGeneralId: string;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public fleet: BidoFleetDTO;

  public showStatusPopup: boolean;

  // General tab
  public customerName: string;
  public newAsset: BidoEquipmentTableDTO;
  public assetsTableDataSource: TableDataSource<AssetRow>;

  public isReadOnlyAssetSelectionDialog: boolean;
  public showAssetSelectionDialog: boolean;
  public showMultipleAssetsSelectionDialog: boolean;

  public showQuickSearchBusinessPartnerPopup: boolean;

  public currentTabId: string;

  public fleetContextId: string;

  public functions: LabelValue<string>[];
  public operationalStatuses: LabelValue<string>[];

  public okForUpdate: boolean;

  public okForConsult: boolean;
  public showStatusUpdatesPopup: boolean;

  public isFleetCheck: boolean;
  public isLoading: boolean;
  public listControlConfigIn: ControlConfigurationInput[];
  public showSaveSpinner: boolean;
  public checkGlobalResult: string[];
  public remainingCycles: number[];
  public remainingHours: number[];
  public calendarLimit: Date[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly sessionService: SessionService,
    private readonly fleetFormService: FleetFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly fleetSearchService: FleetSearchService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.checkGlobalResult = [];
    this.remainingCycles = [];
    this.remainingHours = [];
    this.calendarLimit = [];
    this.showStatusPopup = false;

    this.tabGeneralId = 'general';
    this.currentTabId = this.tabGeneralId;

    this.showQuickSearchBusinessPartnerPopup = false;

    this.isReadOnlyAssetSelectionDialog = false;
    this.showAssetSelectionDialog = false;
    this.showMultipleAssetsSelectionDialog = false;

    this.customerName = '';

    this.newAsset = {
      bidoEquipmentDTO: {},
      type: ''
    };

    this.functions = [];
    this.operationalStatuses = [];

    this.initAssetsTableDataSource();
    this.loadFunctions();
    this.loadOperationalStatus();

    this.fleet = {};

    this.okForConsult = false;
    this.okForUpdate = false;
    this.showStatusUpdatesPopup = false;
    this.isFleetCheck = false;
    this.listControlConfigIn = [];
    this.controlConfigConstants = ControlConfigConstants;
    this.isLoading = false;
  }

  public getComponentName(): string {
    return 'FleetFormComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData.objectId) {
        const fleetCode = this.serializationService.deserialize(this.componentData.objectId).fleetCode;
        const fleetName = this.serializationService.deserialize(this.componentData.objectId).fleetName;
        const fleetContext =
          !this.isCreateOpenMode &&
          this.componentData &&
          this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).fleetName
            ? `${fleetCode} - ${fleetName}`
            : `${fleetCode}`;
        const fleetContextId = fleetContext;
        this.displayComponentContext(fleetContextId, this.isCreateOpenMode);

        this.loadFleet();
      } else {
        this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
      }
    }
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  public initOnCreate(): void {
    this.customerName = '';

    this.newAsset = {
      bidoEquipmentDTO: {},
      type: ''
    };

    this.fleet = {};
  }

  public cancelFleet(): void {
    if (this.isCreateOpenMode) {
      this.initOnCreate();
    } else {
      this.isFleetCheck = false;
      this.reloadFleet();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public editFleet(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public loadFleet(): void {
    if (!!this.componentData.objectId) {
      const fleetTemp: BidoFleetDTOId = {
        fleetId: this.serializationService.deserialize(this.componentData.objectId).fleetId
      };

      this.fleetFormService.findBidoFleet(fleetTemp).subscribe(
        (result) => {
          this.fleet = result.bidoFleetOutputDTO.bidoFleetDTO;

          this.fleet.creationDate = this.fleet.creationDate ? new Date(this.fleet.creationDate.toString()) : undefined;

          this.customerName = result.bidoFleetOutputDTO.customerName;

          this.assetsTableDataSource.setData(this.setBidoEquipmentTableDtoRootProperties(result.bidoEquipmentTableDTO));
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadFleet'));
        }
      );
    } else {
      super.throwUnboundLocalError('loadFleet', 'this.componentData.objectId');
    }
  }

  public reloadFleet(): void {
    if (this.isFleetCheck) {
      this.isFleetCheck = false;
      this.initAssetsTableDataSource();
      this.checkFleet();
    }
    this.fleet = {};
    this.initAssetsTableDataSource();
    this.loadFleet();
  }

  public saveFleet(): void {
    if (!this.fleet.fleetCode) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');

      return;
    } else {
      if (this.componentData.openMode === 0) {
        this.fleetSearchService.getBidoFleetsBySearchCriteria({}).subscribe((results) => {
          const inDB = results.list.some((result) => result.fleetCode === this.fleet.fleetCode);

          if (!inDB) {
            this.save();
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('fleetCodeExists'));
          }
        });
      } else if (this.componentData.openMode === 1) {
        this.fleetSearchService.getBidoFleetsBySearchCriteria({}).subscribe((results) => {
          const inDB = results.list.some((result) => result.fleetCode === this.fleet.fleetCode);
          if (!inDB) {
            this.messageService.showErrorMessage('global.internalServerError');
          } else {
            this.save();
          }
        });
      }
    }
  }

  public openSelectedAssets(): void {
    this.assetsTableDataSource.dataSelection.forEach((asset) => {
      if (!!asset.equipmentCode) {
        this.openConfigurationControl(asset.equipmentCode);
      }
    });
  }

  private openConfigurationControl(equipmentCode: string): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [equipmentCode]
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public checkFleet(): void {
    if (!!this.assetsTableDataSource && !!this.assetsTableDataSource.hasData) {
      this.isLoading = true;
      this.assetsTableDataSource.dataSrc.forEach((asset) => {
        if (!!asset.equipmentCode) {
          const controlConfig: ControlConfigurationInput = {
            checkConfiguration: true,
            checkFl: true,
            checkLogbook: true,
            checkMel: true,
            checkPotential: true,
            checkReferential: true,
            checkStructure: true,
            equipmentCode: asset.equipmentCode,
            projectId: undefined,
            withAllCounters: true,
            withFunctionalLocations: true,
            withMelFlag: true
          };
          this.listControlConfigIn.push(controlConfig);
        }
      });

      const observableList: Observable<ControlConfigurationOutput>[] = [];

      this.listControlConfigIn.forEach((config) => {
        observableList.push(this.fleetFormService.controlConfiguration(config));
      });

      forkJoin(observableList).subscribe((results) => {
        results.forEach((element) => {
          this.checkGlobalResult.push(this.calculateCheckGlobalResultForAssetStructureNode(element));
          this.remainingCycles.push(element.smallestRemainingInCyclesValue as number);
          this.remainingHours.push(element.smallestRemainingInHoursValue as number);
          this.calendarLimit.push(element.closestCalendarLimitDate as Date);
        });
        this.loadFleet();
        this.isLoading = false;
        this.listControlConfigIn = [];
      });
    }
    this.isFleetCheck = true;
    this.initAssetsTableDataSource();
  }

  private calculateCheckGlobalResultForAssetStructureNode(asset: ControlConfigurationOutput): string {
    const checkList = [
      asset.checkCoreResult,
      asset.checkConfigurationResult,
      asset.checkStructureResult,
      asset.checkPotentialResult,
      asset.checkReferentialResult,
      asset.checkMelResult,
      asset.checkLogbookResult,
      asset.checkFlResult
    ];
    if (!!asset.children) {
      asset.children.forEach((child) => {
        checkList.push(this.calculateCheckGlobalResultForAssetStructureNode(child));
      });
    }

    checkList.filter((check) => ObjectUtils.isDefined(check));

    return checkList.some((check) => check === ControlConfigConstants.ICON_RED)
      ? ControlConfigConstants.ICON_RED
      : checkList.some((check) => check === ControlConfigConstants.ICON_YELLOW)
      ? ControlConfigConstants.ICON_YELLOW
      : ControlConfigConstants.ICON_GREEN;
  }

  private save(): void {
    const saveAssetList: BidoFleetEquipmentDTO[] = [];
    this.assetsTableDataSource.dataSrc.forEach((asset) => {
      saveAssetList.push({
        fleetId: this.fleet.fleetId,
        equipmentCode: asset.bidoEquipmentDTO.equipmentCode,
        statusState: AWPropertiesConstants.OBJECT_STATUS_UPDATED_KEY,
        statusDate: this.fleet.statusDate,
        statusUser: this.fleet.statusUser
      });
    });

    const saveId: SaveBidoFleetInput = {
      bidoFleetDTO: this.fleet
    };

    if (saveAssetList.length > 0) {
      saveId.bidoFleetEquipmentDTOList = saveAssetList;
    }

    this.showSaveSpinner = true;
    this.fleetFormService.saveFleet(saveId).subscribe(
      (res) => {
        const context = this.fleet.fleetName
          ? `${this.fleet.fleetCode} - ${this.fleet.fleetName}`
          : `${this.fleet.fleetCode}`;
        this.fleetSearchService
          .getBidoFleetsBySearchCriteria({ fleetCode: this.fleet.fleetCode })
          .subscribe((results) => {
            const id = results.list[0] && results.list[0].fleetId;
            if (!!id) {
              this.fleetFormService.findBidoFleet({ fleetId: id }).subscribe(
                (result) => {
                  this.fleet = result.bidoFleetOutputDTO.bidoFleetDTO;

                  this.fleet.creationDate = this.fleet.creationDate
                    ? new Date(this.fleet.creationDate.toString())
                    : undefined;

                  this.customerName = result.bidoFleetOutputDTO.customerName;

                  this.assetsTableDataSource.setData(
                    this.setBidoEquipmentTableDtoRootProperties(result.bidoEquipmentTableDTO)
                  );

                  this.componentData.objectId = this.serializationService.serialize(this.fleet);
                  this.updateOpenMode(ComponentOpenMode.Write);
                  this.displayComponentContext(context, this.isCreateOpenMode);
                  this.componentData.openMode = 1;
                },
                () => {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadFleet'));
                }
              );
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadFleet'));
            }
          });

        this.assetsTableDataSource.dataSelection = [];

        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveFleet'));
        this.showSaveSpinner = false;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveFleet'));
        this.showSaveSpinner = false;
      }
    );
  }

  private initAssetsTableDataSource(): void {
    if (!this.isFleetCheck) {
      this.assetsTableDataSource = new TableDataSource({
        allowMultiSelect: true,
        columns: [
          {
            field: 'sn',
            translateKey: this.getTranslateKey('sn'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'pnCode',
            translateKey: this.getTranslateKey('pnCode'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'registration',
            translateKey: this.getTranslateKey('registration'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'equipmentDesignation',
            translateKey: this.getTranslateKey('equipmentDesignation'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'familyVariantCode',
            translateKey: this.getTranslateKey('familyVariantCode'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'operatorCustomerCode',
            translateKey: this.getTranslateKey('operatorCustomerCode'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'ownerCustomerCode',
            translateKey: this.getTranslateKey('ownerCustomerCode'),
            alignment: ColumnAlignment.CENTER
          },
          {
            field: 'operationalStatus',
            translateKey: this.getTranslateKey('operationalStatus'),
            alignment: ColumnAlignment.CENTER
          }
        ],
        data: []
      });
    } else {
      this.assetsTableDataSource = new TableDataSource({
        allowMultiSelect: true,
        columns: [
          {
            field: 'status',
            translateKey: this.getTranslateKey('status'),
            alignment: ColumnAlignment.CENTER,
            width: '7%'
          },
          {
            field: 'sn',
            translateKey: this.getTranslateKey('sn'),
            alignment: ColumnAlignment.CENTER,
            width: '6%'
          },
          {
            field: 'pnCode',
            translateKey: this.getTranslateKey('pnCode'),
            alignment: ColumnAlignment.CENTER,
            width: '8%'
          },
          {
            field: 'registration',
            translateKey: this.getTranslateKey('registration'),
            alignment: ColumnAlignment.CENTER,
            width: '8%'
          },
          {
            field: 'equipmentDesignation',
            translateKey: this.getTranslateKey('equipmentDesignation'),
            alignment: ColumnAlignment.CENTER,
            width: '6%'
          },
          {
            field: 'familyVariantCode',
            translateKey: this.getTranslateKey('familyVariantCode'),
            alignment: ColumnAlignment.CENTER,
            width: '11%'
          },
          {
            field: 'operatorCustomerCode',
            translateKey: this.getTranslateKey('operatorCustomerCode'),
            alignment: ColumnAlignment.CENTER,
            width: '8%'
          },
          {
            field: 'ownerCustomerCode',
            translateKey: this.getTranslateKey('ownerCustomerCode'),
            alignment: ColumnAlignment.CENTER,
            width: '8%'
          },
          {
            field: 'operationalStatus',
            translateKey: this.getTranslateKey('operationalStatus'),
            alignment: ColumnAlignment.CENTER,
            width: '10%'
          },
          {
            field: 'remainingCycles',
            translateKey: this.getTranslateKey('remainingCycles'),
            alignment: ColumnAlignment.CENTER,
            width: '10%'
          },
          {
            field: 'remainingHours',
            translateKey: this.getTranslateKey('remainingHours'),
            alignment: ColumnAlignment.CENTER,
            width: '9%'
          },
          {
            field: 'calendarLimit',
            translateKey: this.getTranslateKey('calendarLimit'),
            alignment: ColumnAlignment.CENTER,
            width: '9%'
          }
        ],
        data: []
      });
    }
  }

  private setBidoEquipmentTableDtoRootProperties(table: BidoEquipmentTableDTO[]): AssetRow[] {
    const assetsRow: AssetRow[] = [];
    table.forEach((asset, index) => {
      const row: AssetRow = {
        status: this.isFleetCheck ? this.checkGlobalResult[index] : '',
        bidoEquipmentDTO: asset.bidoEquipmentDTO,
        familyVariantCode: asset.bidoEquipmentDTO.familyVariantCode,
        operatorCustomerCode: asset.bidoEquipmentDTO.operatorCustomerCode,
        ownerCustomerCode: asset.bidoEquipmentDTO.ownerCustomerCode,
        pnCode: asset.bidoEquipmentDTO.pnCode,
        sn: asset.bidoEquipmentDTO.sn,
        registration: asset.bidoEquipmentDTO.registration,
        operationalStatus: asset.bidoEquipmentDTO.operationalStatus,
        equipmentDesignation: asset.bidoEquipmentDTO.equipmentDesignation,
        equipmentCode: asset.bidoEquipmentDTO.equipmentCode,
        type: asset.type,
        remainingCycles: this.isFleetCheck ? this.remainingCycles[index] : undefined,
        remainingHours: this.isFleetCheck ? this.remainingHours[index] : undefined,
        calendarLimit: this.isFleetCheck ? this.calendarLimit[index] : undefined
      };
      assetsRow.push(row);
    });
    this.checkGlobalResult = [];

    return assetsRow;
  }

  /*************************************************************************
   * General tab
   *************************************************************************/

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public deleteAssets(): void {
    const partialMessageKey =
      this.assetsTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedAssets' : 'confirmDeleteSelectedAsset';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.assetsTableDataSource.setData(
          this.assetsTableDataSource.dataSrc.filter((asset) => {
            return !this.assetsTableDataSource.dataSelection.includes(asset);
          })
        );
        this.assetsTableDataSource.dataSelection = [];
      }
    });
  }

  public openAssetsForm(asset: BidoEquipmentTableDTO): void {
    const input: AccessRightQueryDTO = {};

    if (asset.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
      input.useCaseCode = BidoFunctionTypeConstants.UC_FM_AIRCRAFT;
      this.getRights(input);
    } else {
      input.useCaseCode = BidoFunctionTypeConstants.UC_FM_EQUIPMENT;
      this.getRights(input);
    }

    if (!!asset.bidoEquipmentDTO.equipmentCode) {
      if (this.okForUpdate || this.okForConsult) {
        if (asset.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
          this.goToAircraft(asset.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        } else if (asset.bidoEquipmentDTO.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
          this.goToEngine(asset.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        } else {
          this.goToEquipment(asset.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
        }
      }
    }
  }

  private getRights(input: AccessRightQueryDTO): void {
    forkJoin({
      updateRights: this.fleetFormService.hasUpdateRights(input),
      displayRights: this.fleetFormService.hasDisplayRights(input)
    }).subscribe((result) => {
      if (result.updateRights) {
        this.okForUpdate = true;
      } else if (result.displayRights) {
        this.okForConsult = true;
      }
    });
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*************************************************************************
   * Dialog Search Customer
   *************************************************************************/

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    if (Object.keys(event).length === 0) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
    this.fleet.customerCode = event.customerCode;
    if (!!event.customerName) {
      this.customerName = event.customerName;
    }
  }

  /*************************************************************************
   * Asset selection popup
   *************************************************************************/

  public addAsset(): void {
    this.showAssetSelectionDialog = true;
  }

  public onAddAsset(asset: BidoEquipmentTableDTO): void {
    const searchInDisplayedTable = this.assetsTableDataSource.dataSrc.find(
      (value) => value.bidoEquipmentDTO.equipmentCode === asset.bidoEquipmentDTO.equipmentCode
    );

    const assets: BidoEquipmentTableDTO[] = [];
    assets.push(asset);

    if (!searchInDisplayedTable) {
      const modifiedAsset = this.setBidoEquipmentTableDtoRootProperties(assets)[0];
      LabelValueUtils.stringValueToLabel<BidoEquipmentTableDTO>(modifiedAsset, 'type', this.functions);
      LabelValueUtils.stringValueToLabel<BidoEquipmentTableDTO>(
        modifiedAsset,
        'operationalStatus',
        this.operationalStatuses
      );
      this.assetsTableDataSource.addData([modifiedAsset]);
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('equipmentAlreadyInFleet'));
    }
  }

  private loadFunctions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe(
      (results) => {
        this.functions = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetFunctions');
      }
    );
  }

  private loadOperationalStatus(): void {
    this.propertiesService.getValue('getOperationalStatusMap').subscribe(
      (results) => {
        this.operationalStatuses = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetFunctions');
      }
    );
  }

  /*************************************************************************
   * Multiple assets selection popup
   *************************************************************************/

  public addAssetByCriteria(): void {
    this.showMultipleAssetsSelectionDialog = true;
  }

  public onAddMultipleAssets(criteria: BidoEquipmentDTO): void {
    this.fleetFormService.findBidoEquipmentsBySearchCriteria(criteria).subscribe((results) => {
      results.forEach((result) => {
        const searchInDisplayedTable = this.assetsTableDataSource.dataSrc.some(
          (value) => value.bidoEquipmentDTO.equipmentCode === result.bidoEquipmentDTO.equipmentCode
        );

        if (!searchInDisplayedTable) {
          const assets: BidoEquipmentTableDTO[] = [];
          assets.push(result);

          const modifiedAsset = this.setBidoEquipmentTableDtoRootProperties(assets)[0];
          LabelValueUtils.stringValueToLabel<BidoEquipmentTableDTO>(modifiedAsset, 'type', this.functions);
          LabelValueUtils.stringValueToLabel<BidoEquipmentTableDTO>(
            modifiedAsset,
            'operationalStatus',
            this.operationalStatuses
          );
          this.assetsTableDataSource.addData([modifiedAsset]);
        }
      });
    });
  }

  public openStatusPopup(): void {
    this.showStatusPopup = true;
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }
}
