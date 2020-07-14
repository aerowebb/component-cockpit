import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireFamilyDTOId } from '../../../shared/types/api-types/bire-family-dto-id.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { BireRatingDTOId } from '../../../shared/types/api-types/bire-rating-dto-id.interface';
import { BireRatingDTO } from '../../../shared/types/api-types/bire-rating-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TabObjectIdUtils } from '../../../shared/utils/tab-object-id-utils';
import { FamilySearchService } from '../family-search/family-search.service';

import { FamilyFormService } from './family-form.service';

@Component({
  selector: 'aw-family-form',
  styleUrls: ['./family-form.component.scss'],
  templateUrl: './family-form.component.html'
})
export class FamilyFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  // Tab id
  public tabModificationId: string;
  public tabRatingId: string;

  public currentTabId: string;
  public ratingTableFilteredRowsNb: number;
  public modificationTableFilteredRowsNb: number;

  // New object ?
  public delRow: number;

  // For modification tab
  public showModificationPopup: boolean;
  public currentModification: BireModificationDTO;
  public currentModificationIndex: number;
  public dataModiciation: PopupEntry<BireModificationDTO>;

  // For rating tab
  public showRatingPopup: boolean;
  public currentRating: BireRatingDTO;
  public currentRatingIndex: number;
  public dataRating: PopupEntry<BireRatingDTO>;

  // DTO objects from database
  public family: BireFamilyDTO;
  public bireModifications: BireModificationDTO[];
  public bireRatings: BireRatingDTO[];

  // DTO objects for display
  public familyDisplayed: BireFamilyDTO;
  public modificationsTableDataSource: TableDataSource<BireModificationDTO>;
  public ratingsTableDataSource: TableDataSource<BireRatingDTO>;

  // DTO objects for database
  public familyId: BireFamilyDTOId;
  private bireModificationAddedList: BireModificationDTO[];
  private bireModificationUpdatedList: BireModificationDTO[];
  private bireModificationDeletedList: BireModificationDTOId[];
  private bireRatingAddedList: BireRatingDTO[];
  private bireRatingUpdatedList: BireRatingDTO[];
  private bireRatingDeletedList: BireRatingDTOId[];

  // DropDown list of label
  public propertyFamilyFunction: LabelValue<string>[];

  // For tab context
  public subTitle: string;

  private readonly engineValue: string;

  public isLoadingRating: boolean;
  public isLoading: boolean;

  public resultsTable: SearchResultsDTO<BireFamilyDTO>;
  public showSaveSpinner: boolean;

  public familyStructureTypeDisplay: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly familyFormService: FamilyFormService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    private readonly familySearchService: FamilySearchService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.initObjects();

    // Fill table column information
    this.initModificationsTableDataSource();
    this.initRatingsTableDataSource();

    this.delRow = 0;

    // Tab Id
    this.tabModificationId = 'modification';
    this.tabRatingId = 'rating';
    this.currentTabId = this.tabModificationId;

    this.engineValue = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;

    // Loading all DropDown list
    this.loadDropDownLists();

    // Lang change events
    // this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {});

    this.isLoadingRating = false;
    this.isLoading = false;

    this.dataModiciation = {
      componentId: 'FamilyFormComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };

    this.dataRating = {
      componentId: 'FamilyFormComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
  }

  public getComponentName(): string {
    return 'FamilyFormComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      let context = '';
      if (this.componentData.objectId) {
        const tempContext = TabObjectIdUtils.bireFamilyDTOIdToString(
          this.serializationService.deserialize(this.componentData.objectId)
        ).split(TabObjectIdUtils.DEFAULT_SEPARATOR);
        tempContext.forEach((element) => {
          context += element + TabObjectIdUtils.CONTEXT_SEPARATOR;
        });
        context = context.substring(0, context.length - 1);
        this.subTitle = context;
        this.findBireFamily();
      } else {
        context = 'tab.createMode';
      }

      this.displayComponentContext(context, this.isCreateOpenMode);
    } else {
      // TODO
    }

    this.getFamilyList();
  }

  private initModificationsTableDataSource(): void {
    this.modificationsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'modificationType',
          translateKey: this.getTranslateKey('modificationType')
        },
        {
          field: 'modificationNumber',
          translateKey: this.getTranslateKey('modificationNumber')
        },
        {
          field: 'modificationRevisionNumber',
          translateKey: this.getTranslateKey('modificationRevisionNumber')
        },
        {
          field: 'modificationDocumentUrl',
          translateKey: this.getTranslateKey('modificationDocumentUrl')
        },
        {
          field: 'modificationTitle',
          translateKey: this.getTranslateKey('modificationTitle')
        }
      ],
      data: []
    });
  }

  private initRatingsTableDataSource(): void {
    this.ratingsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'ratingCode',
          translateKey: this.getTranslateKey('ratingCode'),
          alignment: ColumnAlignment.LEFT,
          width: '50%'
        },
        {
          field: 'ratingName',
          translateKey: this.getTranslateKey('ratingName'),
          alignment: ColumnAlignment.LEFT,
          width: '50%'
        }
      ],
      data: []
    });
  }

  private initObjects() {
    // Init DTO objects
    this.family = {};
    this.bireModifications = [];
    this.bireRatings = [];

    // Init Displayed Objects
    this.familyDisplayed = {};
    this.familyDisplayed.structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;

    this.initDtoObjectForDatabase();
  }

  private initDtoObjectForDatabase() {
    this.bireModificationAddedList = [];
    this.bireModificationUpdatedList = [];
    this.bireModificationDeletedList = [];
    this.bireRatingAddedList = [];
    this.bireRatingUpdatedList = [];
    this.bireRatingDeletedList = [];
  }

  public cancel(): void {
    if (this.isCreateOpenMode) {
      this.initObjects();
    } else {
      this.initObjects();
      this.componentData.openMode = ComponentOpenMode.Read;
      this.ngOnInit();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public refresh(): void {
    this.ngOnInit();
  }

  /***********************************************************************************
   * Modification Tab
   ***********************************************************************************/
  public openModificationTab(): void {
    this.currentTabId = this.tabModificationId;
  }
  public createModification(): void {
    this.dataModiciation = {
      componentId: 'FamilyFormComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showModificationPopup = true;
  }
  public editModification(): void {
    if (this.modificationsTableDataSource.dataSelectionCount === 1) {
      // Copy all the selectedModification[0] field into currentModification one by one
      this.currentModification = { ...this.modificationsTableDataSource.dataSelection[0] };
      this.currentModificationIndex = this.modificationsTableDataSource.dataSrc.indexOf(
        this.modificationsTableDataSource.dataSelection[0]
      );
      this.dataModiciation = {
        componentId: 'FamilyFormComponent',
        selectedRow: undefined,
        object: this.currentModification,
        openMode: ComponentOpenMode.Write
      };
    }
    this.showModificationPopup = true;
  }
  public openModification(): void {
    if (this.modificationsTableDataSource.dataSelectionCount === 1) {
      // Copy all the selectedModification[0] field into currentModification one by one
      this.currentModification = { ...this.modificationsTableDataSource.dataSelection[0] };

      this.currentModificationIndex = this.modificationsTableDataSource.dataSrc.indexOf(
        this.modificationsTableDataSource.dataSelection[0]
      );
      this.dataModiciation = {
        componentId: 'FamilyFormComponent',
        selectedRow: undefined,
        object: this.currentModification,
        openMode: ComponentOpenMode.Read
      };
    }
    this.showModificationPopup = true;
  }

  /*
        Modication handler functions
    */
  public addNewModfication(modification: BireModificationDTO) {
    const searchInDisplayedList = this.modificationsTableDataSource.dataSrc.find(
      (value) =>
        value.modificationType === modification.modificationType &&
        value.modificationNumber === modification.modificationNumber &&
        value.modificationRevisionNumber === modification.modificationRevisionNumber
    );
    if (!searchInDisplayedList) {
      this.bireModificationAddedList.push(modification);
      this.modificationsTableDataSource.addData([modification]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
    }
    this.showModificationPopup = false;
  }

  public updateModification(udpatedModification: BireModificationDTO) {
    let isFound = false;
    const previousModificationObject = this.modificationsTableDataSource[this.currentModificationIndex];
    const searchInAddedList = this.bireModificationAddedList.find(
      (value) =>
        value.modificationType === previousModificationObject.modificationType &&
        value.modificationNumber === previousModificationObject.modificationNumber &&
        value.modificationRevisionNumber === previousModificationObject.modificationRevisionNumber
    );
    const searchInUpdatedList = this.bireModificationUpdatedList.find(
      (value) =>
        value.modificationType === previousModificationObject.modificationType &&
        value.modificationNumber === previousModificationObject.modificationNumber &&
        value.modificationRevisionNumber === previousModificationObject.modificationRevisionNumber
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireModificationAddedList.indexOf(searchInAddedList);
      this.modificationsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.modificationsTableDataSource.dataSelection[0].modificationNumber !==
            udpatedModification.modificationNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationRevisionNumber !==
            udpatedModification.modificationRevisionNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationType !==
            udpatedModification.modificationType &&
          res.modificationType === udpatedModification.modificationType &&
          res.modificationRevisionNumber === udpatedModification.modificationRevisionNumber &&
          res.modificationNumber === udpatedModification.modificationNumber
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireModificationAddedList[indexInAddedList] = udpatedModification;
      }
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireModificationUpdatedList.indexOf(searchInUpdatedList);
      this.modificationsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.modificationsTableDataSource.dataSelection[0].modificationNumber !==
            udpatedModification.modificationNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationRevisionNumber !==
            udpatedModification.modificationRevisionNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationType !==
            udpatedModification.modificationType &&
          res.modificationType === udpatedModification.modificationType &&
          res.modificationRevisionNumber === udpatedModification.modificationRevisionNumber &&
          res.modificationNumber === udpatedModification.modificationNumber
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireModificationUpdatedList[indexInUpdatedList] = udpatedModification;
      }
    } else {
      this.modificationsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.modificationsTableDataSource.dataSelection[0].modificationNumber !==
            udpatedModification.modificationNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationRevisionNumber !==
            udpatedModification.modificationRevisionNumber &&
          this.modificationsTableDataSource.dataSelection[0].modificationType !==
            udpatedModification.modificationType &&
          res.modificationType === udpatedModification.modificationType &&
          res.modificationRevisionNumber === udpatedModification.modificationRevisionNumber &&
          res.modificationNumber === udpatedModification.modificationNumber
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireModificationUpdatedList.push(udpatedModification);
      }
    }
    this.modificationsTableDataSource.dataSelection = [];
    if (!isFound) {
      this.modificationsTableDataSource.replaceData(
        this.modificationsTableDataSource.dataSelection[0],
        udpatedModification
      );
    }
    this.showModificationPopup = false;
  }

  public deleteSelectedModification() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedModifications'),
      accept: () => {
        this.modificationsTableDataSource.dataSelection.forEach((element) => {
          const modificationId: BireModificationDTOId = {
            familyCode: element.familyCode,
            structureType: element.structureType,
            modificationNumber: element.modificationNumber,
            modificationRevisionNumber: element.modificationRevisionNumber,
            modificationType: element.modificationType
          };
          const searchInAddedList = this.bireModificationAddedList.find(
            (value) =>
              value.modificationType === element.modificationType &&
              value.modificationNumber === element.modificationNumber &&
              value.modificationRevisionNumber === element.modificationRevisionNumber
          );
          const searchInUpdatedList = this.bireModificationUpdatedList.find(
            (value) =>
              value.modificationType === element.modificationType &&
              value.modificationNumber === element.modificationNumber &&
              value.modificationRevisionNumber === element.modificationRevisionNumber
          );
          if (searchInAddedList) {
            const indexInAddedList = this.bireModificationAddedList.indexOf(searchInAddedList);
            this.bireModificationAddedList.splice(indexInAddedList, 1);
          } else if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireModificationUpdatedList.indexOf(searchInUpdatedList);
            this.bireModificationUpdatedList.splice(indexInUpdatedList, 1);
            this.bireModificationDeletedList.push(modificationId);
          } else {
            this.bireModificationDeletedList.push(modificationId);
          }
          const indexInDisplayedList = this.modificationsTableDataSource.dataSrc.indexOf(element);
          this.modificationsTableDataSource.dataSrc.splice(indexInDisplayedList, 1);
        });
        this.modificationsTableDataSource.dataSelection = [];
      }
    });
  }

  /***********************************************************************************
   * Rating Tab
   ***********************************************************************************/
  public openRatingTab(): void {
    this.currentTabId = this.tabRatingId;
  }
  public createRating(): void {
    this.dataRating = {
      componentId: 'FamilyFormComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showRatingPopup = true;
  }
  public editRating(): void {
    if (this.ratingsTableDataSource.dataSelectionCount === 1) {
      this.currentRating = { ...this.ratingsTableDataSource.dataSelection[0] };
      this.currentRatingIndex = this.ratingsTableDataSource.dataSrc.indexOf(
        this.ratingsTableDataSource.dataSelection[0]
      );
      this.dataRating = {
        componentId: 'SbadFormComponent',
        selectedRow: undefined,
        object: this.currentRating,
        openMode: ComponentOpenMode.Write
      };
    }
    this.showRatingPopup = true;
  }
  public openRating(): void {
    if (this.ratingsTableDataSource.dataSelectionCount === 1) {
      this.currentRating = { ...this.ratingsTableDataSource.dataSelection[0] };
      this.currentRatingIndex = this.ratingsTableDataSource.dataSrc.indexOf(
        this.ratingsTableDataSource.dataSelection[0]
      );
      this.dataRating = {
        componentId: 'SbadFormComponent',
        selectedRow: undefined,
        object: this.currentRating,
        openMode: ComponentOpenMode.Read
      };
    }
    this.showRatingPopup = true;
  }

  /*
        Sb variant handler functions
    */
  public addNewRating(newRating: BireRatingDTO) {
    const searchInDisplayedList = this.ratingsTableDataSource.dataSrc.find(
      (value) => value.ratingCode === newRating.ratingCode && value.ratingName === newRating.ratingName
    );
    if (!searchInDisplayedList) {
      this.bireRatingAddedList.push(newRating);
      this.ratingsTableDataSource.addData([newRating]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRatingExisting'));
    }
    this.showRatingPopup = false;
  }

  public deleteSelectedRating() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedRatings'),
      accept: () => {
        this.ratingsTableDataSource.dataSelection.forEach((element) => {
          const searchInAddedList = this.bireRatingAddedList.find(
            (value) => value.ratingCode === element.ratingCode && value.ratingName === element.ratingName
          );
          const searchInUpdatedList = this.bireRatingUpdatedList.find(
            (value) => value.ratingCode === element.ratingCode && value.ratingName === element.ratingName
          );
          if (searchInAddedList) {
            const indexInAddedList = this.bireRatingAddedList.indexOf(searchInAddedList);
            this.bireRatingAddedList.splice(indexInAddedList, 1);
          } else {
            if (!!element.ratingCode && !!element.familyCode && !!element.structureType) {
              const ratingId: BireRatingDTOId = {
                ratingCode: element.ratingCode,
                familyCode: element.familyCode,
                structureType: element.structureType
              };
              if (searchInUpdatedList) {
                const indexInUpdatedList = this.bireRatingUpdatedList.indexOf(searchInUpdatedList);
                this.bireRatingUpdatedList.splice(indexInUpdatedList, 1);
                this.bireRatingDeletedList.push(ratingId);
              } else {
                this.bireRatingDeletedList.push(ratingId);
              }
            } else {
              super.throwUnboundLocalError('deleteSelectedRating', 'element');
            }
          }
          const indexInDisplayedList = this.ratingsTableDataSource.dataSrc.indexOf(element);
          this.ratingsTableDataSource.dataSrc.splice(indexInDisplayedList, 1);
          this.ratingsTableDataSource.setData(this.ratingsTableDataSource.dataSrc);
          this.ratingsTableDataSource.update();
        });
        this.ratingsTableDataSource.dataSelection = [];
      }
    });
  }
  public updateRating(udpatedRating: BireRatingDTO) {
    const previousRatingObject = this.ratingsTableDataSource.data[this.currentRatingIndex];
    let isFound = false;
    const searchInAddedList = this.bireRatingAddedList.find(
      (value) =>
        value.ratingCode === previousRatingObject.ratingCode && value.ratingName === previousRatingObject.ratingName
    );
    const searchInUpdatedList = this.bireRatingUpdatedList.find(
      (value) =>
        value.ratingCode === previousRatingObject.ratingCode && value.ratingName === previousRatingObject.ratingName
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireRatingAddedList.indexOf(searchInAddedList);
      this.ratingsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.ratingsTableDataSource.dataSelection[0].ratingCode !== udpatedRating.ratingCode &&
          res.ratingCode === udpatedRating.ratingCode
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireRatingAddedList[indexInAddedList] = udpatedRating;
      }
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireRatingUpdatedList.indexOf(searchInUpdatedList);
      this.ratingsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.ratingsTableDataSource.dataSelection[0].ratingCode !== udpatedRating.ratingCode &&
          res.ratingCode === udpatedRating.ratingCode
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireRatingUpdatedList[indexInUpdatedList] = udpatedRating;
      }
    } else {
      this.ratingsTableDataSource.dataSrc.forEach((res) => {
        if (
          this.ratingsTableDataSource.dataSelection[0].ratingCode !== udpatedRating.ratingCode &&
          res.ratingCode === udpatedRating.ratingCode
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireRatingUpdatedList.push(udpatedRating);
      }
    }
    if (!isFound) {
      this.ratingsTableDataSource.replaceData(this.ratingsTableDataSource.dataSelection[0], udpatedRating);
    }
    this.ratingsTableDataSource.dataSelection = [];
    this.showRatingPopup = false;
  }

  /***********************************************************************************
   * BackEnd functions
   ***********************************************************************************/
  private loadDropDownLists(): void {
    this.loadStructureTypeValue();
    this.loadFamilyFunctions();
  }

  private loadStructureTypeValue(): void {
    this.propertiesService
      .getValueByKey(GenericPropertyConstants.STRUCTURE_TYPE_VALUE_BY_KEY, AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY)
      .subscribe(
        (results) => {
          if (results) {
            this.familyStructureTypeDisplay = results;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnStructureType'));
        }
      );
  }

  private loadFamilyFunctions(): void {
    this.propertiesService.getValue('getFamilyFunctionMap').subscribe(
      (results) => {
        if (results) {
          this.propertyFamilyFunction = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFamilyFunctionList'));
      }
    );
  }

  private findBireFamily(): void {
    // Retrieve the family Id object by deserialization
    if (!!this.componentData && !!this.componentData.objectId) {
      this.familyId = this.serializationService.deserialize(this.componentData.objectId);

      this.familyFormService.findBireFamilyByFamilyId(this.familyId.familyCode, this.familyId.structureType).subscribe(
        (result: BireFamilyDTO) => {
          this.family = result;
          if (!!this.family) {
            this.findBireModificationByBireFamily(this.family);
            if (!!this.family && !!this.family.familyCode && !!this.family.structureType) {
              this.findBireRatingByBireFamily(this.family);
            }
          }
          this.familyDisplayed = { ...this.family };
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireFamily'));
        }
      );
    } else {
      super.throwUnboundLocalError('findBireFamily', 'this.componentData.objectId');
    }
  }

  private getFamilyList() {
    this.familySearchService.findAllBireFamilys().subscribe((result) => {
      this.resultsTable = result;
    });
  }

  private findBireModificationByBireFamily(bireFamily: BireFamilyDTO): void {
    this.isLoading = true;
    this.familyFormService.findBireModificationByBireFamily(bireFamily).subscribe(
      (results: BireModificationDTO[]) => {
        this.bireModifications = [...results];
        this.modificationsTableDataSource.setData(results);
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindModifications'));
        this.isLoading = false;
      }
    );
  }

  private findBireRatingByBireFamily(bireFamily: BireFamilyDTO): void {
    this.isLoadingRating = true;
    if (!!bireFamily && !!bireFamily.familyCode && !!bireFamily.structureType) {
      this.familyFormService.findBireRatingByBireFamily(bireFamily.familyCode, bireFamily.structureType).subscribe(
        (results: BireRatingDTO[]) => {
          this.bireRatings = [...results];
          this.ratingsTableDataSource.setData(results);
          this.isLoadingRating = false;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindModifications'));
          this.isLoadingRating = false;
        }
      );
    } else {
      super.throwUnboundLocalError('findBireRatingByBireFamily', 'bireFamily');
    }
  }

  private isOneRequiredFieldNull() {
    return !this.familyDisplayed.familyCode || !this.familyDisplayed.structureType || !this.familyDisplayed.familyName;
  }

  public saveFamilyData(): void {
    if (this.isOneRequiredFieldNull()) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnRequiredField'));
    } else {
      if (!this.validateDuplicateFamily()) {
        // Parse the familyId
        if (!!this.familyDisplayed.familyCode && !!this.familyDisplayed.structureType) {
          this.familyId = {
            familyCode: this.familyDisplayed.familyCode,
            structureType: this.familyDisplayed.structureType
          };

          // Add the link between the family and the modification added elements
          this.bireModificationAddedList.forEach((element) => {
            element.familyCode = this.familyId.familyCode;
            element.structureType = this.familyId.structureType;
          });
          // Add the link between the family and the rating added elements
          this.bireRatingAddedList.forEach((element) => {
            element.familyCode = this.familyId.familyCode;
            element.structureType = this.familyId.structureType;
          });

          this.showSaveSpinner = true;
          this.familyFormService
            .saveFamilyData(
              this.familyDisplayed,
              this.bireModificationAddedList,
              this.bireModificationUpdatedList,
              this.bireModificationDeletedList,
              this.bireRatingAddedList,
              this.bireRatingUpdatedList,
              this.bireRatingDeletedList
            )
            .subscribe(
              (result) => {
                if (
                  !!this.familyDisplayed &&
                  !!this.familyDisplayed.familyCode &&
                  !!this.familyDisplayed.structureType
                ) {
                  // SUCCEED CASE
                  const bireFamilyId: BireFamilyDTOId = {
                    familyCode: this.familyDisplayed.familyCode,
                    structureType: this.familyDisplayed.structureType
                  };
                  let objectId = '';
                  if (!!bireFamilyId) {
                    objectId = this.serializationService.serialize(bireFamilyId);
                  }
                  let context = '';
                  const tempContext = TabObjectIdUtils.bireFamilyDTOIdToString(
                    this.serializationService.deserialize(objectId)
                  ).split(TabObjectIdUtils.DEFAULT_SEPARATOR);
                  tempContext.forEach((element) => {
                    context += element + TabObjectIdUtils.CONTEXT_SEPARATOR;
                  });
                  context = context.substring(0, context.length - 1);
                  this.subTitle = context;
                  this.componentData.objectId = this.serializationService.serialize(bireFamilyId);
                  this.findBireFamily();
                  this.updateOpenMode(ComponentOpenMode.Write);
                  this.componentData.openMode = ComponentOpenMode.Write;
                  this.displayComponentContext(context, this.isCreateOpenMode);

                  this.initializeObjectsAfterSave();

                  // TODO: Update evolutions with a new callback ?
                  // Reload evolution

                  this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessSave'));
                }
                this.showSaveSpinner = false;
              },
              () => {
                // FAILED
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnSave'));
                this.showSaveSpinner = false;
              }
            );
        } else {
          super.throwUnboundLocalError('saveFamilyData', 'this.familyDisplayed');
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('duplicateFamilyCode'));
      }
    }
  }

  private validateDuplicateFamily(): boolean {
    let isFound = false;
    this.resultsTable.list.forEach((res: BireFamilyDTO) => {
      if (res.familyCode === this.familyDisplayed.familyCode) {
        isFound = true;
      }
    });

    if (isFound) {
      if (!this.componentData.objectId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private initializeObjectsAfterSave() {
    // Clean the added lists
    this.bireModificationAddedList = [];
    this.bireRatingAddedList = [];

    // Clean the udated lists
    this.bireModificationUpdatedList = [];
    this.bireRatingUpdatedList = [];

    // Reset database object with displayed object
    this.family = { ...this.familyDisplayed };
    this.bireModifications = [...this.modificationsTableDataSource.dataSrc];
    this.bireRatings = [...this.ratingsTableDataSource.dataSrc];
  }

  public isEngine(): boolean {
    return this.family.familyFunction === this.engineValue;
  }

  public redirectToURL(site) {
    window.open(site);
  }
}
