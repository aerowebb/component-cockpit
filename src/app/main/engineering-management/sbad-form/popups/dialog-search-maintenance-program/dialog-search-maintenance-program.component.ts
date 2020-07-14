import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ColumnAlignment, TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { BireMaintenancePlanConstants } from '../../../../../shared/constants/bire-maintenance-plan-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { FindFamilyVariantInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { FindBireMaintenancePlansByCriteriaInput } from '../../../../../shared/types/api-input-types/task-management/find-bire-maintenance-plans-by-criteria-input.interface';
import { GetVariantOutputDTO } from '../../../../../shared/types/api-output-types/engineering-data-exchange/get-variant-output-dto.interface';
import { MaintenanceProgramReports } from '../../../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { MaintenanaceProgramTableDTO } from '../../../../../shared/types/api-output-types/task-management/maintenanace-program-table-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

import { MaintenanceProgramSearchService } from './../../../maintenance-program-search/maintenance-program-search.service';

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
  maintenanceProgram?: BireMaintenancePlanDTO;
}

@Component({
  selector: 'aw-dialog-search-maintenance-program-popup',
  templateUrl: './dialog-search-maintenance-program.component.html'
})
export class DialogSearchMaintenanceProgramComponent extends DialogComponent {
  public MAINTENANCE_PLAN = { ...BireMaintenancePlanConstants };

  @Output()
  public onSelected: EventEmitter<BireMaintenancePlanDTO>;

  public familyVariants: LabelValue<GetVariantOutputDTO>[];
  public maintenanceProgramTableDataSource: TableDataSource<MaintenanceProgramRow>;
  public searchObject: FindBireMaintenancePlansByCriteriaInput;
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
  public tabService: TabService;
  public serializationService: SerializationService;
  public tableSelection: BireMaintenancePlanDTO;
  public favoriteService: FavoriteService;
  public loaderService: LoaderService;
  public messageService: MessageService;

  public constructor(
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly maintenanceProgramSearchService: MaintenanceProgramSearchService,
    private readonly propertiesService: PropertiesService,
    public dateService: DateService
  ) {
    super(ComponentOpenMode.Write, ComponentConstants.ENG_MAINTENANCE_PROGRAM_SEARCH);
    this.onSelected = new EventEmitter<BireMaintenancePlanDTO>();
    this.familyVariants = [];
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

  public onShow() {
    this.display = true;
  }

  public resetSearchCriteria(): void {
    this.selectedFamilyVariant = undefined;
    this.searchObject = {
      bireMaintenancePlanDTO: {},
      bireVariantVersionDTO: {}
    };
  }

  private initMaintenanceProgramTableDataSource(): void {
    this.maintenanceProgramTableDataSource = new TableDataSource({
      allowMultiSelect: false,
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

  public cancel(): void {
    this.display = false;
    super.closeDialog();
  }

  public validate(): void {
    this.onSelected.emit(this.maintenanceProgramTableDataSource.dataSelection[0].maintenanceProgram);
    super.closeDialog();
  }

  private setMaintenanceProgramTable(result: SearchResultsDTO<MaintenanaceProgramTableDTO>): void {
    if (!!result) {
      const mpList: MaintenanceProgramRow[] = [];
      let status;
      result.list.forEach((maintenanceProgram) => {
        if (
          !!maintenanceProgram &&
          !!maintenanceProgram.bireMaintenancePlanDTO &&
          !!maintenanceProgram.bireMaintenancePlanDTO.planCode &&
          !!maintenanceProgram.bireMaintenancePlanDTO.planName
        ) {
          status = !!maintenanceProgram.bireMaintenancePlanDTO.statusState
            ? this.statusMap.get(maintenanceProgram.bireMaintenancePlanDTO.statusState)
            : '';

          const maintenanceRow: MaintenanceProgramRow = {
            maintenanceProgram: maintenanceProgram.bireMaintenancePlanDTO,
            code: maintenanceProgram.bireMaintenancePlanDTO.planCode,
            name: maintenanceProgram.bireMaintenancePlanDTO.planName,
            revisionNumber: maintenanceProgram.bireMaintenancePlanDTO.planRevisionNumber,
            type: maintenanceProgram.planType,
            revisionDate:
              maintenanceProgram.bireMaintenancePlanDTO.planRevisionDate &&
              this.dateService.dateToString(maintenanceProgram.bireMaintenancePlanDTO.planRevisionDate),
            status,
            approvalDate:
              maintenanceProgram.bireMaintenancePlanDTO.planApprovalDate &&
              this.dateService.dateToString(maintenanceProgram.bireMaintenancePlanDTO.planApprovalDate),
            validityEndDate:
              maintenanceProgram.bireMaintenancePlanDTO.planValidityEndDate &&
              this.dateService.dateToString(maintenanceProgram.bireMaintenancePlanDTO.planValidityEndDate),
            ampStatus: maintenanceProgram.ampstatus,
            applicableMaintenancePlanCode: maintenanceProgram.applicableMaintenancePlanCode,
            isRMPHaveRelatedOMP: maintenanceProgram.isRMPHaveRelatedOMP,
            isAMPHaveRelatedOMP: maintenanceProgram.isAMPHaveRelatedOMP,
            recommendedMaintenancePlanCode: maintenanceProgram.recommendedMaintenancePlanCode
          };

          if (!maintenanceProgram.bireMaintenancePlanDTO.ampplanCode) {
            maintenanceRow.ampStatus = undefined;
          }

          mpList.push(maintenanceRow);
        }
      });
      this.maintenanceProgramTableDataSource.setData(mpList);
    }
    this.maintenanceProgramTableDataSource.dataSelection = [];
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
}
