import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { BireMaintenancePlanConstants } from '../../../shared/constants/bire-maintenance-plan-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { CompareMaintenancePlansInput } from '../../../shared/types/api-input-types/task-business/compare-maintenance-plans-input.interface';
import { FindBireMaintenancePlansByCriteriaInput } from '../../../shared/types/api-input-types/task-management/find-bire-maintenance-plans-by-criteria-input.interface';
import { GetVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-variant-output-dto.interface';
import { MaintenanceProgramReports } from '../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { MaintenanaceProgramTableDTO } from '../../../shared/types/api-output-types/task-management/maintenanace-program-table-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { MaintenanceProgramSearchService } from './maintenance-program-search.service';

interface MaintenanceProgramRow {
  code: string;
  name: string;
  revisionNumber?: string;
  type?: string;
  revisionDate?: string;
  status?: string;
  approvalDate?: string;
  validityEndDate?: string;
  ampStatus?: string;
  isRMPHaveRelatedOMP?: boolean;
  isAMPHaveRelatedOMP?: boolean;
  applicableMaintenancePlanCode?: string;
  recommendedMaintenancePlanCode?: string;
}

interface MaintenanceProgramExport {
  code: string;
  name: string;
  revisionNumber?: string;
  type?: string;
  revisionDate?: string;
  status?: string;
  approvalDate?: string;
  validityEndDate?: string;
  ampStatus?: string;
}

const MIN_SELECTION_FOR_COMPARISON = 2;

@Component({
  selector: 'aw-maintenance-program-search',
  styleUrls: ['./maintenance-program-search.component.scss'],
  templateUrl: './maintenance-program-search.component.html'
})
export class MaintenanceProgramSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly MAINTENANCE_TABLE_EXPORT_NAME: string = 'maintenance-program-list';

  public MAINTENANCE_PLAN = { ...BireMaintenancePlanConstants };

  public familyVariants: LabelValue<GetVariantOutputDTO>[];
  public maintenanceProgramTableDataSource: TableDataSource<MaintenanceProgramRow>;
  public searchObject: FindBireMaintenancePlansByCriteriaInput;
  public showAdvancedCriteria: boolean;
  public showCompareReportPopup: boolean;
  public reportText: MaintenanceProgramReports;
  public selectedFamilyVariant: GetVariantOutputDTO | undefined;
  public isDeleteButtonDisabled: boolean;
  public isEditButtonDisabled: boolean;
  public enableComapreAMP: boolean;
  public enableComapreRMP: boolean;
  public enableComapreAMPagainstRMP: boolean;
  public statusMap: Map<string, string>;
  public hasManageRights: boolean;
  public hasDisplayRights: boolean;
  public hasUpdateRights: boolean;
  public isLoading: boolean;
  public isReportLoading: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly maintenanceProgramSearchService: MaintenanceProgramSearchService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    public dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.familyVariants = [];
    this.showAdvancedCriteria = false;
    this.showCompareReportPopup = false;
    this.isDeleteButtonDisabled = true;
    this.isEditButtonDisabled = true;
    this.enableComapreAMP = false;
    this.enableComapreAMPagainstRMP = false;
    this.enableComapreRMP = false;
    this.reportText = {};
    this.statusMap = new Map<string, string>();

    this.loadRights();
    this.loadStatus();
    this.loadFamilyVariants();
    this.resetSearchCriteria();
    this.initMaintenanceProgramTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_MAINTENANCE_PROGRAM_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  public resetSearchCriteria(): void {
    this.selectedFamilyVariant = undefined;
    this.searchObject = {
      bireMaintenancePlanDTO: {},
      bireVariantVersionDTO: {}
    };
  }

  public exportTable(): void {
    if (!!this.componentData) {
      const list: MaintenanceProgramExport[] = this.maintenanceProgramTableDataSource.sanitizedData.map((obj) => {
        const exportObj: MaintenanceProgramExport = {
          code: obj.code,
          name: obj.name,
          revisionNumber: obj.revisionNumber,
          type: obj.type,
          revisionDate: obj.revisionDate,
          status: obj.status,
          approvalDate: obj.approvalDate,
          validityEndDate: obj.validityEndDate,
          ampStatus: this.getAmpStatus(obj.ampStatus)
        };

        return exportObj;
      });

      this.exportService.toExcel(
        list,
        MaintenanceProgramSearchComponent.MAINTENANCE_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private getAmpStatus(status?: string): string {
    if (status === 'green') {
      return 'OK';
    } else if (status === 'red') {
      return 'NOK';
    } else if (status === 'yellow') {
      return 'WARNING';
    }

    return '';
  }

  private initMaintenanceProgramTableDataSource(): void {
    this.maintenanceProgramTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'code',
          translateKey: this.getTranslateKey('code'),
          width: '15%'
        },
        {
          field: 'name',
          translateKey: this.getTranslateKey('name'),
          width: '23%'
        },
        {
          field: 'revisionNumber',
          translateKey: this.getTranslateKey('revisionNumber'),
          width: '5%'
        },
        {
          field: 'type',
          translateKey: this.getTranslateKey('type'),
          width: '5%'
        },
        {
          field: 'revisionDate',
          translateKey: this.getTranslateKey('revisionDate'),
          width: '10%'
        },
        {
          field: 'status',
          translateKey: this.getTranslateKey('status'),
          width: '10%'
        },
        {
          field: 'approvalDate',
          translateKey: this.getTranslateKey('approvalDate'),
          width: '10%'
        },
        {
          field: 'validityEndDate',
          translateKey: this.getTranslateKey('validityEndDate'),
          width: '12%'
        },
        {
          field: 'ampStatus',
          translateKey: this.getTranslateKey('ampStatus'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ],
      data: []
    });
  }

  private loadStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe((results) => {
      results.forEach((element) => {
        this.statusMap.set(element.value, element.label);
      });
    });
  }

  private loadFamilyVariants(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.maintenanceProgramSearchService
      .findBireFamilyVariantDropdownForMaintenanceProgram(familyVariantInput)
      .subscribe((results) => {
        results.forEach((element) => {
          let label = element.familyName ? element.familyName : element.familyCode;
          label = `${label}-${element.structureType}`;
          label = `${label}-${element.variantName ? element.variantName : element.variantCode}`;
          const variantLabelValue: LabelValue<GetVariantOutputDTO> = {
            label,
            value: element
          };
          this.familyVariants.push(variantLabelValue);
        });
      });
  }

  public deleteMaintenancePrograms(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        const tempMaintenanceId: BireMaintenancePlanDTO[] = [];
        this.maintenanceProgramTableDataSource.dataSelection.forEach((maintenanceProgram) => {
          if (!!maintenanceProgram && !!maintenanceProgram.code) {
            const maintenanceProgramId: BireMaintenancePlanDTO = {
              planCode: maintenanceProgram.code,
              ampplanCode: maintenanceProgram.applicableMaintenancePlanCode
            };

            if (!!maintenanceProgramId) {
              tempMaintenanceId.push(maintenanceProgramId);
            }
          }
        });

        this.maintenanceProgramSearchService.removeBireMaintenancePlan(tempMaintenanceId).subscribe(() => {
          this.search();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMaintenanceProgram'));
        });

        this.maintenanceProgramTableDataSource.dataSelection = [];
      }
    });
  }

  public validateMaintenanceProgramOptions(): void {
    this.enableComapreAMP = false;
    this.enableComapreRMP = false;
    this.enableComapreAMPagainstRMP = false;

    this.maintenanceProgramTableDataSource.dataSelection.forEach((tableRow) => {
      // this.isEditButtonDisabled = false;
      this.isDeleteButtonDisabled = false;
      // Disable Update for Approved RMPs with approved AMPs
      // if (tableRow.type === 'RMP' && tableRow.status === 'Approved' && tableRow.ampStatus === 'green') {
      //   this.isEditButtonDisabled = true;
      // }
      // Disable delete for RMP with AMP assigned to Assets
      if (
        tableRow.type === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
        !!tableRow.applicableMaintenancePlanCode &&
        tableRow.isAMPHaveRelatedOMP
      ) {
        this.isDeleteButtonDisabled = true;
      }
      // Disable delete for RMP assigned to Assets
      if (
        tableRow.type === BireMaintenancePlanConstants.PLAN_TYPE_RMP &&
        !!!tableRow.applicableMaintenancePlanCode &&
        tableRow.isRMPHaveRelatedOMP
      ) {
        this.isDeleteButtonDisabled = true;
      }
      // Disable delete for AMP assigned to Assets
      if (tableRow.type === BireMaintenancePlanConstants.PLAN_TYPE_AMP && tableRow.isAMPHaveRelatedOMP) {
        this.isDeleteButtonDisabled = true;
      }
    });
    // enable table navigation menus
    if (this.maintenanceProgramTableDataSource.dataSelectionCount === MIN_SELECTION_FOR_COMPARISON) {
      let noOfAmps = 0;
      let noOfRmps = 0;
      let selectedAMPCodeForRMP: string | undefined;
      let selectedAMPCode: string | undefined;
      this.maintenanceProgramTableDataSource.dataSelection.forEach((maintenanceProgram) => {
        if (maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
          noOfAmps += 1;
          selectedAMPCode = maintenanceProgram.code;
        }
        if (maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_RMP) {
          noOfRmps += 1;
          selectedAMPCodeForRMP = maintenanceProgram.applicableMaintenancePlanCode;
        }
      });
      if (noOfAmps > 1) {
        this.enableComapreAMP = true;
      } else if (noOfRmps > 1) {
        this.enableComapreRMP = true;
      } else if (noOfRmps === 1 && noOfAmps === 1 && selectedAMPCodeForRMP === selectedAMPCode) {
        this.enableComapreAMPagainstRMP = true;
      }
    }
  }

  public openNewMaintenanceProgram(): void {
    this.openMaintenanceProgram(undefined, ComponentOpenMode.Create);
  }

  private openMaintenanceProgram(objectId: MaintenanceProgramRow | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
      openMode
    };

    if (!!objectId) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: objectId.code
      };
      data.objectId = this.serializationService.serialize(birePlanDTOId);
    }

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openSelectedMaintenancePrograms(): void {
    this.maintenanceProgramTableDataSource.dataSelection.forEach((program) => {
      if (!!program) {
        this.openMaintenanceProgram(program, ComponentOpenMode.Read);
      }
    });
  }

  public openSelectedUpdatesList(): void {
    this.maintenanceProgramTableDataSource.dataSelection.forEach((program) => {
      if (!!program) {
        this.openUpdatesList(program, ComponentOpenMode.Read);
      }
    });
  }

  private openUpdatesList(objectId: MaintenanceProgramRow | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_UPDATES_LIST,
      openMode
    };
    if (!!objectId) {
      const birePlanDTO: BireMaintenancePlanDTO = {
        planCode: objectId.code,
        planName: objectId.name,
        statusState: objectId.status
      };
      data.objectId = this.serializationService.serialize(birePlanDTO);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMaintenanceProgramLink(maintenanceProgramRow: MaintenanceProgramRow): void {
    this.openMaintenanceProgram(maintenanceProgramRow, ComponentOpenMode.Read);
  }

  public search(): void {
    this.maintenanceProgramTableDataSource.setData([]);
    if (this.selectedFamilyVariant) {
      this.searchObject.bireVariantVersionDTO = {
        familyCode: this.selectedFamilyVariant.familyCode,
        structureType: this.selectedFamilyVariant.structureType,
        variantCode: this.selectedFamilyVariant.variantCode,
        variantName: this.selectedFamilyVariant.variantName
      };
    } else {
      this.searchObject.bireVariantVersionDTO = {};
    }
    this.isLoading = true;
    this.maintenanceProgramSearchService.findBireMaintenancePlansByCriteria(this.searchObject).subscribe((result) => {
      this.setMaintenanceProgramTable(result);
      this.isLoading = false;
    });
  }

  private setMaintenanceProgramTable(result: SearchResultsDTO<MaintenanaceProgramTableDTO>): void {
    if (!!result) {
      const mpList: MaintenanceProgramRow[] = [];
      let status;
      result.list.forEach((maintenanaceProgram) => {
        if (
          !!maintenanaceProgram &&
          !!maintenanaceProgram.bireMaintenancePlanDTO &&
          !!maintenanaceProgram.bireMaintenancePlanDTO.planCode &&
          !!maintenanaceProgram.bireMaintenancePlanDTO.planName
        ) {
          status = !!maintenanaceProgram.bireMaintenancePlanDTO.statusState
            ? this.statusMap.get(maintenanaceProgram.bireMaintenancePlanDTO.statusState)
            : '';

          const maintenanceRow: MaintenanceProgramRow = {
            code: maintenanaceProgram.bireMaintenancePlanDTO.planCode,
            name: maintenanaceProgram.bireMaintenancePlanDTO.planName,
            revisionNumber: maintenanaceProgram.bireMaintenancePlanDTO.planRevisionNumber,
            type: maintenanaceProgram.planType,
            revisionDate:
              maintenanaceProgram.bireMaintenancePlanDTO.planRevisionDate &&
              this.dateService.dateToString(maintenanaceProgram.bireMaintenancePlanDTO.planRevisionDate),
            status,
            // approvalNumber: maintenanaceProgram.bireMaintenancePlanDTO.planApprovalNumber,
            approvalDate:
              maintenanaceProgram.bireMaintenancePlanDTO.planApprovalDate &&
              this.dateService.dateToString(maintenanaceProgram.bireMaintenancePlanDTO.planApprovalDate),
            validityEndDate:
              maintenanaceProgram.bireMaintenancePlanDTO.planValidityEndDate &&
              this.dateService.dateToString(maintenanaceProgram.bireMaintenancePlanDTO.planValidityEndDate),
            ampStatus: maintenanaceProgram.ampstatus,
            applicableMaintenancePlanCode: maintenanaceProgram.applicableMaintenancePlanCode,
            isRMPHaveRelatedOMP: maintenanaceProgram.isRMPHaveRelatedOMP,
            isAMPHaveRelatedOMP: maintenanaceProgram.isAMPHaveRelatedOMP,
            recommendedMaintenancePlanCode: maintenanaceProgram.recommendedMaintenancePlanCode
          };

          if (!maintenanaceProgram.bireMaintenancePlanDTO.ampplanCode) {
            maintenanceRow.ampStatus = undefined;
          }

          mpList.push(maintenanceRow);
        }
      });
      this.maintenanceProgramTableDataSource.setData(mpList);
    }
    this.maintenanceProgramTableDataSource.dataSelection = [];
  }

  public compareRmp(): void {
    if (this.maintenanceProgramTableDataSource.dataSelectionCount === MIN_SELECTION_FOR_COMPARISON) {
      const getRmps = this.maintenanceProgramTableDataSource.dataSelection.filter((maintenanceProgram) => {
        return maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_RMP;
      });

      if (getRmps.length === MIN_SELECTION_FOR_COMPARISON) {
        const plan: CompareMaintenancePlansInput = {
          planCode: this.maintenanceProgramTableDataSource.dataSelection[0].code,
          applicableMaintenancePlanCode: this.maintenanceProgramTableDataSource.dataSelection[1].code,
          isRmpAndAmp: false
        };

        this.isReportLoading = true;
        const observables: Observable<MaintenanceProgramReports>[] = [];
        if (this.sessionService.isSpecificMHIAEL) {
          observables.push(this.maintenanceProgramSearchService.compareMaintenancePlansByDeltaTasks(plan));
        } else {
          observables.push(this.maintenanceProgramSearchService.compareMaintenancePlans(plan));
        }
        forkJoin(observables).subscribe((result) => {
          this.reportText = result[0];
          this.showCompareReportPopup = true;
          this.isReportLoading = false;
        });
      }
    }
  }

  public compareAmp(): void {
    if (this.maintenanceProgramTableDataSource.dataSelectionCount === MIN_SELECTION_FOR_COMPARISON) {
      const getAmps = this.maintenanceProgramTableDataSource.dataSelection.filter((maintenanceProgram) => {
        return maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_AMP;
      });

      if (getAmps.length === MIN_SELECTION_FOR_COMPARISON) {
        const plan: CompareMaintenancePlansInput = {
          planCode: this.maintenanceProgramTableDataSource.dataSelection[0].code,
          applicableMaintenancePlanCode: this.maintenanceProgramTableDataSource.dataSelection[1].code,
          isRmpAndAmp: false
        };
        this.isReportLoading = true;
        this.maintenanceProgramSearchService.compareMaintenancePlans(plan).subscribe((result) => {
          this.reportText = result;
          this.showCompareReportPopup = true;
          this.isReportLoading = false;
        });
      }
    }
  }

  public compareRmpWithAmp(): void {
    if (this.maintenanceProgramTableDataSource.dataSelectionCount === MIN_SELECTION_FOR_COMPARISON) {
      let isAMP = false;
      let isRMP = false;
      const plan: CompareMaintenancePlansInput = {
        isRmpAndAmp: true
      };
      let selectedAMP: string | undefined;
      this.maintenanceProgramTableDataSource.dataSelection.forEach((maintenanceProgram) => {
        if (maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_AMP) {
          isAMP = true;
          plan.applicableMaintenancePlanCode = maintenanceProgram.code;
        } else if (maintenanceProgram.type === BireMaintenancePlanConstants.PLAN_TYPE_RMP) {
          isRMP = true;
          plan.planCode = maintenanceProgram.code;
          selectedAMP = maintenanceProgram.applicableMaintenancePlanCode;
        }
      });

      if (isAMP && isRMP && plan.applicableMaintenancePlanCode === selectedAMP) {
        this.isReportLoading = true;
        this.maintenanceProgramSearchService.compareMaintenancePlans(plan).subscribe((result) => {
          this.reportText = result;
          this.showCompareReportPopup = true;
          this.isReportLoading = false;
        });
      }
    }
  }

  private loadRights(): void {
    this.maintenanceProgramSearchService.hasManageRights().subscribe((results) => {
      this.hasManageRights = results;
    });
    this.maintenanceProgramSearchService.hasDisplayRights().subscribe((results) => {
      this.hasDisplayRights = results;
    });
    this.maintenanceProgramSearchService.hasUpdateRights().subscribe((results) => {
      this.hasUpdateRights = results;
    });
  }
  private openChangeRecord(objectId: string, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_CHANGE_RECORD_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public changeRecord(): void {
    this.maintenanceProgramTableDataSource.dataSelection.forEach((program) => {
      if (!!program && !!program.code) {
        this.openChangeRecord(program.code, ComponentOpenMode.Read);
      }
    });
  }
}
