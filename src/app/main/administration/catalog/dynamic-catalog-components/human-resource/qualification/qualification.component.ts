import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { QualificationListTableOutputDTO } from '../../../../../../shared/types/api-output-types/catalog/qualification-list-table-output-dto.interface';
import { BidtQualificationDTO } from '../../../../../../shared/types/api-types/bidt-qualification-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { DTOUtils } from '../../../../../../shared/utils/dto-utils';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { QualificationService } from './qualification.service';

interface QualificationDTO {
  qualificationCode?: string;
  qualificationTitle?: string;
  qualificationDegre?: string;
  qualificationDescription?: string;
  qualificationType?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  isStandard?: boolean;
  id?: number;
  averageHourRate?: number;
  averageHourlyRateValue?: string;
  qualificationListTableOutputDTO: QualificationListTableOutputDTO;
}

@Component({
  selector: 'aw-qualification',
  templateUrl: './qualification.component.html'
})
export class QualificationComponent extends DynamicCatalog implements OnInit {
  public qualificationsTable: SearchResultsDTO<QualificationListTableOutputDTO>;
  public databaseQualifications: SearchResultsDTO<QualificationListTableOutputDTO>;
  public allQualifications: SearchResultsDTO<QualificationListTableOutputDTO>;

  public currentQualification: QualificationListTableOutputDTO | undefined;
  public currentQualificationIndex: number | undefined;

  public qualificationTableForViewingDataSource: TableDataSource<QualificationDTO>;

  public addedList: QualificationDTO[];

  public qualificationTypes: LabelValue<string>[];

  public searchObject: BidtQualificationDTO;

  public showQualificationForm: boolean;
  public isNewQualification: boolean | undefined;
  public viewMode: boolean | undefined;
  public editModeIsStandard: boolean | undefined;

  public constructor(
    private readonly qualificationService: QualificationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.qualificationTableForViewingDataSource = new TableDataSource({
      columns: [
        { field: 'qualificationCode', translateKey: this.getTranslateKey('qualificationCode') },
        { field: 'qualificationDegre', translateKey: this.getTranslateKey('qualificationDegre') },
        { field: 'qualificationTitle', translateKey: this.getTranslateKey('qualificationTitle') },
        { field: 'qualificationType', translateKey: this.getTranslateKey('qualificationType') },
        { field: 'averageHourlyRateValue', translateKey: this.getTranslateKey('averageHourlyRateValue') },
        { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), alignment: ColumnAlignment.CENTER }
      ],
      data: []
    });

    this.currentQualification = undefined;
    this.currentQualificationIndex = undefined;

    this.addedList = [];

    this.qualificationTypes = [];

    this.searchObject = {};

    this.showQualificationForm = false;
    this.isNewQualification = undefined;
    this.viewMode = undefined;
    this.editModeIsStandard = undefined;

    this.loadTypeDropdown();
  }

  public ngOnInit() {
    this.loadQualificationsList();
  }

  public getComponentName(): string {
    return 'QualificationComponent';
  }

  public refresh(): void {
    this.qualificationsTable = { list: [], moreResults: false };
    this.currentQualification = undefined;
    this.currentQualificationIndex = undefined;
    this.addedList = [];
    this.searchObject = {};
    this.loadQualificationsList();
  }

  public save(): void {
    const bidtQualificationDTOs: BidtQualificationDTO[] = [];
    this.qualificationsTable.list.forEach((q) => {
      if (!!q.bidtQualificationDTO) {
        const inAddedList = this.addedList.filter(
          (element) => !!q.bidtQualificationDTO && q.bidtQualificationDTO.id === element.id
        );
        if (inAddedList.length !== 0) {
          q.bidtQualificationDTO.id = undefined;
        }
        LabelValueUtils.labelToStringValue<BidtQualificationDTO>(
          q.bidtQualificationDTO,
          'qualificationType',
          this.qualificationTypes
        );
        // const qual = { ...q };
        bidtQualificationDTOs.push(q.bidtQualificationDTO);
      }
    });

    const saveInput: SaveCatalogInput = {
      bidtQualificationDTOAddOrUpdateList: bidtQualificationDTOs
    };
    this.catalogService.saveCatalog(saveInput).subscribe(
      (_result) => {
        this.messageService.showSuccessMessage('global.successOnSave');
        this.refresh();
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnSave');
      }
    );
  }

  // Qualification form popup ///////////////////////

  public addQualification(): void {
    this.isNewQualification = true;
    this.editModeIsStandard = undefined;
    this.showQualificationForm = true;
    this.viewMode = false;
    this.currentQualification = {
      bidtQualificationDTO: {}
    };
  }

  public viewSelectedQualification(): void {
    this.isNewQualification = false;
    this.editModeIsStandard = undefined;
    this.showQualificationForm = true;
    this.viewMode = true;
    const qualificationForViewing: QualificationListTableOutputDTO = {
      ...this.qualificationTableForViewingDataSource.dataSelection[0].qualificationListTableOutputDTO
    };
    if (!!qualificationForViewing.bidtQualificationDTO) {
      LabelValueUtils.labelToStringValue<BidtQualificationDTO>(
        qualificationForViewing.bidtQualificationDTO,
        'qualificationType',
        this.qualificationTypes
      );
      this.currentQualification = qualificationForViewing;
    } else {
      super.throwUnboundLocalError('viewSelectedQualification', 'qualificationForViewing.bidtQualificationDTO');
    }
  }

  public editSelectedQualification(): void {
    this.isNewQualification = false;
    this.viewMode = undefined;
    this.showQualificationForm = true;
    this.editModeIsStandard = this.qualificationTableForViewingDataSource.dataSelection[0].isStandard;
    const qualListDTO = this.qualificationTableForViewingDataSource.dataSelection[0].qualificationListTableOutputDTO;
    this.currentQualificationIndex = this.qualificationTableForViewingDataSource.dataSrc.findIndex(
      (q) =>
        !!q.qualificationListTableOutputDTO &&
        !!qualListDTO &&
        DTOUtils.equalsQualificationListTableOutputDTO(q.qualificationListTableOutputDTO, qualListDTO)
    );
    const qualificationForViewing: QualificationListTableOutputDTO = {
      ...this.qualificationTableForViewingDataSource.dataSelection[0].qualificationListTableOutputDTO
    };
    if (!!qualificationForViewing.bidtQualificationDTO) {
      LabelValueUtils.labelToStringValue<BidtQualificationDTO>(
        qualificationForViewing.bidtQualificationDTO,
        'qualificationType',
        this.qualificationTypes
      );
      this.currentQualification = qualificationForViewing;
      this.qualificationTableForViewingDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('editSelectedQualification', 'qualificationForViewing.bidtQualificationDTO');
    }
  }

  public disablePropertyTypeDeleteButton(): boolean {
    let result: boolean;

    if (!this.qualificationTableForViewingDataSource.hasDataSelection) {
      result = false;
    } else {
      let qualifications: QualificationListTableOutputDTO[];
      qualifications = this.qualificationTableForViewingDataSource.dataSelection
        .filter((q) => q.isStandard)
        .map((qualification) => {
          return qualification.qualificationListTableOutputDTO;
        });

      result = qualifications.length === 0;
    }

    return result;
  }

  public deleteSelectedQualification(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        const databaseQualificationsDeletionInput: number[] = [];
        this.qualificationTableForViewingDataSource.dataSelection.forEach((q) => {
          let addedIndex = -1;
          const inAddedList = this.addedList.filter((element, index) => {
            if (q.id === element.id) {
              addedIndex = index;
            }

            return q.id === element.id;
          });
          const inDatabaseList = this.databaseQualifications.list.filter((element) => {
            return !!element.bidtQualificationDTO && q.id === element.bidtQualificationDTO.id;
          });

          if (inAddedList.length !== 0) {
            this.qualificationTableForViewingDataSource.deleteDataSelection();
            this.qualificationsTable.list = this.qualificationsTable.list.filter(
              (element) => element.bidtQualificationDTO.id !== q.id
            );
            this.addedList.splice(addedIndex, 1);
          }
          if (inDatabaseList.length !== 0) {
            this.qualificationTableForViewingDataSource.deleteDataSelection();
            this.qualificationsTable.list = this.qualificationsTable.list.filter(
              (element) => !!element.bidtQualificationDTO && element.bidtQualificationDTO.id !== q.id
            );

            if (q.id !== null && q.id !== undefined) {
              databaseQualificationsDeletionInput.push(q.id);
            } else {
              super.throwUnboundLocalError('deleteSuccessFulQualification', 'q.id');
            }
          }
        });

        if (databaseQualificationsDeletionInput.length !== 0) {
          this.qualificationService.deleteQualifications(databaseQualificationsDeletionInput).subscribe();
        }

        this.qualificationTableForViewingDataSource.dataSelection = [];
      }
    });
  }

  public createQualification(event: QualificationListTableOutputDTO): void {
    if (!!event && !!event.bidtQualificationDTO) {
      LabelValueUtils.stringValueToLabel<BidtQualificationDTO>(
        event.bidtQualificationDTO,
        'qualificationType',
        this.qualificationTypes
      );
      const qualificationForViewing: QualificationDTO = {
        qualificationCode: event.bidtQualificationDTO.qualificationCode,
        qualificationTitle: event.bidtQualificationDTO.qualificationTitle,
        qualificationDegre: event.bidtQualificationDTO.qualificationDegre,
        qualificationDescription: event.bidtQualificationDTO.qualificationDescription,
        qualificationType: event.bidtQualificationDTO.qualificationType,
        statusState: event.bidtQualificationDTO.statusState,
        statusUser: event.bidtQualificationDTO.statusUser,
        statusDate: event.bidtQualificationDTO.statusDate,
        isStandard: event.bidtQualificationDTO.standard,
        id: event.bidtQualificationDTO.id,
        averageHourRate: event.bidtQualificationDTO.averageHourRate,
        averageHourlyRateValue: event.averageHourlyRateValue,
        qualificationListTableOutputDTO: event
      };
      qualificationForViewing.id = Math.random();
      event.bidtQualificationDTO.id = qualificationForViewing.id;
      this.qualificationsTable.list = [...this.qualificationsTable.list, event];
      this.allQualifications.list = [...this.allQualifications.list, event];
      this.qualificationTableForViewingDataSource.addData([qualificationForViewing]);
      this.addedList.push(qualificationForViewing);
    } else {
      super.throwUnboundLocalError('createQualification', 'event.bidtQualificationDTO');
    }
  }

  public updateQualification(event: QualificationListTableOutputDTO): void {
    if (
      !!event &&
      !!event.bidtQualificationDTO &&
      this.currentQualificationIndex !== null &&
      this.currentQualificationIndex !== undefined
    ) {
      LabelValueUtils.stringValueToLabel<BidtQualificationDTO>(
        event.bidtQualificationDTO,
        'qualificationType',
        this.qualificationTypes
      );
      this.qualificationsTable.list[this.currentQualificationIndex] = event;
      this.allQualifications.list[this.currentQualificationIndex] = event;
      const qualificationForViewing: QualificationDTO = {
        qualificationCode: event.bidtQualificationDTO.qualificationCode,
        qualificationTitle: event.bidtQualificationDTO.qualificationTitle,
        qualificationDegre: event.bidtQualificationDTO.qualificationDegre,
        qualificationDescription: event.bidtQualificationDTO.qualificationDescription,
        qualificationType: event.bidtQualificationDTO.qualificationType,
        statusState: event.bidtQualificationDTO.statusState,
        statusUser: event.bidtQualificationDTO.statusUser,
        statusDate: event.bidtQualificationDTO.statusDate,
        isStandard: event.bidtQualificationDTO.standard,
        id: event.bidtQualificationDTO.id,
        averageHourRate: event.bidtQualificationDTO.averageHourRate,
        averageHourlyRateValue: event.averageHourlyRateValue,
        qualificationListTableOutputDTO: event
      };
      this.qualificationTableForViewingDataSource.replaceData(
        this.qualificationTableForViewingDataSource.dataSrc[this.currentQualificationIndex],
        qualificationForViewing
      );
      const inAddedList = this.addedList.some((qualification) => qualification.id === qualificationForViewing.id);
      if (inAddedList) {
        const indexInAddedList = this.addedList.findIndex(
          (qualification) => qualification.id === qualificationForViewing.id
        );
        this.addedList[indexInAddedList] = qualificationForViewing;
      }
    } else {
      super.throwUnboundLocalError(
        'updateQualification',
        'event.bidtQualificationDTO && this.currentQualificationIndex'
      );
    }
  }

  ////////////////////////////////////////////////////

  public loadQualificationsList(): void {
    this.qualificationsTable = { list: [], moreResults: false };
    this.databaseQualifications = { list: [], moreResults: false };
    this.allQualifications = { list: [], moreResults: false };
    this.qualificationTableForViewingDataSource.setData([]);
    this.qualificationService.loadQualificationsList().subscribe((results) => {
      const qualifications = { ...results };
      qualifications.list.forEach((q) => {
        if (!!q.bidtQualificationDTO) {
          LabelValueUtils.stringValueToLabel<BidtQualificationDTO>(
            q.bidtQualificationDTO,
            'qualificationType',
            this.qualificationTypes
          );
          this.qualificationsTable.list.push(q);
        } else {
          super.throwUnboundLocalError('loadQualificationsList', 'q.bidtQualificationDTO');
        }
      });
      this.qualificationsTable.moreResults = qualifications.moreResults;
      this.allQualifications = { ...this.qualificationsTable };
      this.allQualifications.list.forEach((q) => {
        if (!!q.bidtQualificationDTO) {
          const qualificationForViewing: QualificationDTO = {
            qualificationCode: q.bidtQualificationDTO.qualificationCode,
            qualificationTitle: q.bidtQualificationDTO.qualificationTitle,
            qualificationDegre: q.bidtQualificationDTO.qualificationDegre,
            qualificationDescription: q.bidtQualificationDTO.qualificationDescription,
            qualificationType: q.bidtQualificationDTO.qualificationType,
            statusState: q.bidtQualificationDTO.statusState,
            statusUser: q.bidtQualificationDTO.statusUser,
            statusDate: q.bidtQualificationDTO.statusDate,
            isStandard: q.bidtQualificationDTO.standard,
            id: q.bidtQualificationDTO.id,
            averageHourRate: q.bidtQualificationDTO.averageHourRate,
            averageHourlyRateValue: q.averageHourlyRateValue,
            qualificationListTableOutputDTO: q
          };
          this.qualificationTableForViewingDataSource.addData([qualificationForViewing]);
          this.databaseQualifications = results;
        } else {
          super.throwUnboundLocalError('loadQualificationsList', 'q.bidtQualificationDTO');
        }
      });
    });
  }

  public loadTypeDropdown(): void {
    this.propertiesService.getValue('getHrQualificationTypeMap').subscribe((results) => {
      this.qualificationTypes = results || [];
    });
  }
}
