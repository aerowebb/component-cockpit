import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveBireConversionMatrixInputDTO } from '../../../../shared/types/api-input-types/unit-conversion-matrix/bire-unit-conversion-matrix-create-dto.interface';
import { BireConversionMatrixDTO } from '../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireConversionMatrixValueDTO } from '../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-value-dto.interface';
import { BireCmVariantDTO } from '../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-variant-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { UnitConversionMatrixService } from '../unit-conversion-matrix.service';

@Component({
  selector: 'aw-unit-conversion-matrix-form',
  templateUrl: './unit-conversion-matrix-form.component.html',
  styleUrls: ['./unit-conversion-matrix-form.component.scss']
})
export class UnitConversionMatrixFormComponent extends PageComponent<PageComponentData> implements OnInit {
  public cmId: number = 0;

  // Creation of Unit Conversion
  public ucmObject: SaveBireConversionMatrixInputDTO;
  public baseInformation: BireConversionMatrixDTO;

  // Concerned Families
  public concernedFamiliesTableCols: TableColumn[];
  public dataApplicabilities: PopupEntry<BireCmVariantDTO>;
  public currentApplicabilities: BireCmVariantDTO;
  public currentApplicabilitiesIndex: number;
  public isNewApplicabilities: boolean;
  public showApplicabilitiesDialog: boolean;
  public bireCMVariantAddedList: BireCmVariantDTO[] | undefined;
  public selectedBireCMVariant: BireCmVariantDTO[];

  //  Unit Conversion matrix table
  public isNewUcm: boolean;
  public ucmTable: BireConversionMatrixValueDTO[] | undefined;
  public ucmTableCols: TableColumn[];
  public selectedUcmRows: BireConversionMatrixValueDTO[];
  public currentUcm: BireConversionMatrixValueDTO | undefined;
  public currentUcmIndex: number;
  private unitConversionMatrixRowAddedList: BireConversionMatrixValueDTO[];
  public showDialogUnitConversionMatrix: boolean;

  public isLoading: boolean;

  public showSaveSpinner: boolean;
  public currentLang: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public dateService: DateService,
    public translateService: TranslateService,
    public unitConversionMatrixService: UnitConversionMatrixService,
    public confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.ucmObject = {};
    this.baseInformation = {};

    this.concernedFamiliesTableCols = [
      { field: 'familyCode', alignment: 'left' },
      { field: 'structureType', alignment: 'left' },
      { field: 'variantCode', alignment: 'left' },
      { field: 'isDefault', alignment: 'left' }
    ];

    this.selectedBireCMVariant = [];
    this.bireCMVariantAddedList = [];

    this.currentUcm = undefined;
    this.ucmTable = [];
    this.ucmTableCols = [
      { field: 'unitCode', alignment: 'center' },
      { field: 'fhEquivalent', alignment: 'center' }
    ];
    this.selectedUcmRows = [];
    this.unitConversionMatrixRowAddedList = [];

    this.showApplicabilitiesDialog = false;
    this.showDialogUnitConversionMatrix = false;

    this.isLoading = false;

    this.currentLang = this.translateService.currentLang;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (this.componentData.objectId) {
      const objectId = this.serializationService.deserialize(this.componentData.objectId);
      this.cmId = objectId.cmId;
      this.getUnitConversionMatrix(this.cmId);
    } else {
      this.ucmObject = {};
      this.baseInformation = {};
    }

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'UnitConversionMatrixFormComponent';
  }

  /**
   * This function get the Unit Conversion matrix based on cm Id
   */
  public getUnitConversionMatrix(cmId: number): void {
    this.unitConversionMatrixService.getUnitConversionMatrix(cmId).subscribe((results) => {
      if (!!results) {
        this.baseInformation = results;
        this.bireCMVariantAddedList = !!results.variants ? results.variants : [];
        this.ucmTable = !!results.values ? results.values : [];
      }
    });
  }

  /**
   * This function save the full object for ConversionMatrix
   */
  public saveBireConversionMatrix(): void {
    if (this.checkUnitConversionMatrixFields()) {
      this.ucmObject = {
        bireConversionMatrixDTO: this.baseInformation,
        bireConversionMatrixValueDTOs: this.ucmTable,
        bireCmVariantDTOs: this.bireCMVariantAddedList
      };

      this.showSaveSpinner = true;
      this.unitConversionMatrixService
        .saveConversionMatrix(this.ucmObject)
        .subscribe((result) => {
          if (!!result) {
            this.baseInformation = result;
            this.ucmTable = result.values;
            this.bireCMVariantAddedList = result.variants;
            this.updateOpenMode(ComponentOpenMode.Read);
          }
        })
        .add(() => {
          this.showSaveSpinner = false;
        });
    }
  }

  /**
   * This function edit the Unit Conversion Matrix
   */
  public editUnitConversionMatrix() {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  /************************************
   * Unit Conversion Matrix Tab Actions
   ************************************/

  public createUcmRecord(): void {
    this.currentUcm = undefined;
    this.isNewUcm = true;
    this.showDialogUnitConversionMatrix = true;
  }

  public editUcmRecord(): void {
    if (!!this.ucmTable && this.selectedUcmRows.length === 1) {
      this.currentUcm = { ...this.selectedUcmRows[0] };
      this.isNewUcm = false;
      this.currentUcmIndex = this.ucmTable.indexOf(this.selectedUcmRows[0]);
      this.showDialogUnitConversionMatrix = true;
    }
  }

  public deleteUcmRecord(): void {
    const partialMessageKey =
      this.selectedUcmRows.length > 1 ? 'confirmDeleteSelectedRows' : 'confirmDeleteSelectedRow';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const idArr: number[] = [];
        this.unitConversionMatrixService.removeBidoPreferenceUser(idArr).subscribe(() => {
          if (!!this.ucmTable) {
            const messageKey = this.selectedUcmRows.length > 1 ? 'successOnDeleteRows' : 'successOnDeleteRow';
            this.messageService.showSuccessMessage(this.getTranslateKey(messageKey));
            this.ucmTable = this.ucmTable.filter((ucmRow) => {
              return !this.selectedUcmRows.includes(ucmRow);
            });
            this.selectedUcmRows = [];
          }
        });
      }
    });
  }

  public addNewUcm(ucm: BireConversionMatrixValueDTO): void {
    if (!!ucm && !!this.ucmTable) {
      const foundIndex = this.unitConversionMatrixRowAddedList.findIndex((value) => value.unitCode === ucm.unitCode);

      if (foundIndex === -1) {
        this.unitConversionMatrixRowAddedList.push(ucm);
        this.ucmTable = [...this.ucmTable, ucm];
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('warningonsameunit'));
      }
    }
  }

  public updateUcm(ucm: BireConversionMatrixValueDTO): void {
    if (!!ucm && !!this.ucmTable) {
      const foundIndexInTable = this.ucmTable.findIndex(
        (value) => value.unitCode === ucm.unitCode && value.fhEquivalent === ucm.fhEquivalent
      );

      if (foundIndexInTable === -1) {
        const foundIndex = this.unitConversionMatrixRowAddedList.findIndex(
          (value) => value.unitCode === ucm.unitCode && value.fhEquivalent === ucm.fhEquivalent
        );

        if (foundIndex !== -1) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningonsameunit'));
        } else {
          this.unitConversionMatrixRowAddedList[foundIndex] = ucm;
          this.ucmTable[this.currentUcmIndex] = ucm;
          this.selectedUcmRows = [];
        }
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('warningonsameunit'));
      }
    }
  }

  public reloadMatrix() {
    this.unitConversionMatrixRowAddedList = [];
  }

  /*******************************************
   * Ends : Unit Conversion Matrix Tab Actions
   ******************************************/

  /**
   * This functions checks the mandatory fields
   */
  private checkUnitConversionMatrixFields(): boolean {
    if (StringUtils.isNullOrEmpty(this.baseInformation.cmCode)) {
      this.messageService.showWarningMessage(this.getTranslateKey('noMandatoryData'));

      return false;
    } else if (StringUtils.isNullOrEmpty(this.baseInformation.cmName)) {
      this.messageService.showWarningMessage(this.getTranslateKey('noMandatoryData'));

      return false;
    }

    return true;
  }

  /**
   * Concerned Families  Tab
   */

  public createApplicabilities(): void {
    this.currentApplicabilities = {};
    this.showApplicabilitiesDialog = true;
    this.isNewApplicabilities = true;
    this.dataApplicabilities = {
      componentId: this.getComponentName(),
      selectedRow: undefined,
      object: this.currentApplicabilities,
      openMode: ComponentOpenMode.Write
    };
  }

  /**
   * This function opens the selected applicability.
   */
  public openApplicabilities(): void {
    if (this.selectedBireCMVariant.length === 1) {
      this.currentApplicabilities = { ...this.selectedBireCMVariant[0] };
      this.showApplicabilitiesDialog = true;
      this.dataApplicabilities = {
        componentId: this.getComponentName(),
        selectedRow: [this.selectedBireCMVariant[0]],
        object: this.currentApplicabilities,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  /**
   * This method deletes the selected applicability(s)
   */
  public deleteApplicabilities(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedRows'),
      accept: () => {
        this.selectedBireCMVariant.forEach((selectedCmVariant) => {
          if (!!this.bireCMVariantAddedList) {
            const indexInDisplayedList = this.bireCMVariantAddedList.indexOf(selectedCmVariant);
            if (indexInDisplayedList > -1) {
              this.bireCMVariantAddedList.splice(indexInDisplayedList, 1);
            }
          }
        });
        this.selectedBireCMVariant = [];
      }
    });
  }
  /**
   *  Conversion Matrix variant handler functions
   */
  public addNewCMVariant(newCMVariant: BireCmVariantDTO) {
    if (!!this.bireCMVariantAddedList) {
      const searchInDisplayedList = this.bireCMVariantAddedList.find(
        (value) => value.variantCode === newCMVariant.variantCode && value.familyCode === newCMVariant.familyCode
      );
      if (!searchInDisplayedList) {
        this.bireCMVariantAddedList.push(newCMVariant);
      }
    }
  }

  /**
   * This method sets the default Family variant for UCM.
   */
  public setAsDefaultFamilyVariant(): void {
    if (this.bireCMVariantAddedList) {
      this.bireCMVariantAddedList.forEach((cmVariant) => {
        cmVariant.isDefault = false;
      });

      if (!!this.selectedBireCMVariant) {
        this.selectedBireCMVariant[0].isDefault = true;
      }
    }
  }
}
