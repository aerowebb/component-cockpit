import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { FindBidoVariantVersionsInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-bido-variant-versions-input.interface';
import { FindBireItemsBySearchCriteriaFMInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-bire-items-by-search-criteria-fm-input.interface';
import { HistoryBidoEquipmentFromDate } from '../../../../../../shared/types/api-input-types/fleet-management/history-bido-equipment-from-date.interface';
import { UpdateEngineModelInput } from '../../../../../../shared/types/api-input-types/fleet-management/update-engine-model-input-dto.interface';
import { UpdatePopUpFieldsEquipmentDTO } from '../../../../../../shared/types/api-input-types/fleet-management/update-popup-fields-equipment-dto.interface';
import { PartsSearchInput } from '../../../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEvolutionDTO } from '../../../../../../shared/types/api-types/bido-evolution-dto.interface';
import { BireFamilyDTO } from '../../../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantDTO } from '../../../../../../shared/types/api-types/bire-variant-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { BireFamilyVariantUtil } from '../../../../../../shared/utils/bire-family-variant-utils';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';

import { EditDataPopupFormService } from './edit-data-popup-form.service';

interface EngineData {
  ratingCode?: string;
  ratingName?: string;
  modelCode?: string;
  modelName?: string;
}

@Component({
  selector: 'aw-edit-data-popup-form',
  templateUrl: './edit-data-popup-form.component.html',
  styleUrls: ['./edit-data-popup-form.component.scss']
})
export class EditDataPopupFormComponent extends DialogComponent implements OnInit {
  @Input() public propertyOperationalStatus: LabelValue<string>[];
  @Input() public propertyZones: LabelValue<string>[];
  @Input() public propertyCountries: LabelValue<string>[];
  @Input() public propertyAllCountries: LabelValue<string>[];
  @Input() public editPopupData: BidoEquipmentDTO;
  @Input() public operationalFlag: boolean;
  @Input() public familyFlag: boolean;
  @Input() public snFlag: boolean;
  @Input() public pnFlag: boolean;
  @Input() public geoFlag: boolean;
  @Input() public ratingFlag: boolean;
  @Input() public modelFlag: boolean;
  @Input() public rating: string | undefined;
  @Input() public modelCode: string | undefined;
  @Input() public registrationFlag: boolean;
  @Input() public isAircraft: boolean;
  @Input() public isEngine: boolean;
  @Input() public isTool: boolean;
  @Output()
  public onValidated: EventEmitter<BidoEquipmentDTO>;
  @Output()
  public onValdiatedEngineData: EventEmitter<EngineData>;
  public pnCodeData: BidoEquipmentDTO;
  public maxDate: Date;
  public statusDate: Date;
  public name: String;
  public formData: BidoEquipmentDTO;
  public showFamilyCodeDialog: boolean;
  public showPnCodeDialog: boolean;
  public dialogTableDataFamilyCode: DialogTableData<BireFamilyDTO>;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public dialogTableDataPnCode: DialogTableData<BirePnDTO>;
  public criteria: FindBireItemsBySearchCriteriaFMInput;
  public showRatingDialog: boolean;
  public showModelDialog: boolean;
  public familyCode: string | undefined;
  public variantCode: string | undefined;
  public structureType: string | undefined;
  public engineData: EngineData;
  public showEvolutionPopup: boolean;
  public showEvolutionPopupPrevious: boolean;
  public modelInputData: UpdateEngineModelInput;
  public evolutionType: string | undefined;

  public showValidateSpinner: boolean;
  public partsSearch: PartsSearchInput;

  public constructor(
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly editDataPopupFormService: EditDataPopupFormService
  ) {
    super(ComponentOpenMode.Write, 'EditDataPopupFormComponent');
    this.onValidated = new EventEmitter<BidoEquipmentDTO>();
    this.onValdiatedEngineData = new EventEmitter<EngineData>();
    this.formData = {};
    this.showFamilyCodeDialog = false;
    this.showRatingDialog = false;
    this.showModelDialog = false;
    this.showPnCodeDialog = false;
    this.showEvolutionPopup = false;
    this.showEvolutionPopupPrevious = false;
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.editDataPopupFormService.getFamilyFunctionMap());
    this.keyMap.set('structureType', this.editDataPopupFormService.getStructureTypeMap());
    this.engineData = {};
    this.modelInputData = {
      sbIntroducingLastModel: {},
      sbIntroucingModel: {}
    };
    this.evolutionType = undefined;
    this.partsSearch = {};
  }

  public ngOnInit() {
    this.maxDate = new Date();
    this.loadDate();
    LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
      this.editPopupData,
      'operationalStatus',
      this.propertyOperationalStatus
    );
    LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(this.editPopupData, 'country', this.propertyCountries);
  }

  public loadDate() {
    const date = new Date();
    this.statusDate = date;
  }

  public reloadvalue() {
    const digit = 10;
    if (!!this.editPopupData && !!this.editPopupData.equipmentCode) {
      setTimeout(() => {
        const data: HistoryBidoEquipmentFromDate = {
          equipmentCode: !!this.editPopupData.equipmentCode ? this.editPopupData.equipmentCode : '',
          changeDate: this.statusDate
        };
        this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
          (results) => {
            this.editPopupData.operationalStatus = results.fFBidoEquipmentDTO.operationalStatus;
            this.editPopupData.familyVariantCode = results.fFBidoEquipmentDTO.familyVariantCode;
            this.editPopupData.sn = results.fFBidoEquipmentDTO.sn;
            this.editPopupData.registration = results.fFBidoEquipmentDTO.registration;
            this.editPopupData.pnCode = results.fFBidoEquipmentDTO.pn;
            this.editPopupData.zone = results.fFBidoEquipmentDTO.zone;
            this.editPopupData.country = results.fFBidoEquipmentDTO.country;
            this.rating = results.fFBidoEquipmentDTO.familyRatingCode;
            this.modelCode = results.fFBidoEquipmentDTO.modelCode;
            LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
              this.editPopupData,
              'operationalStatus',
              this.propertyOperationalStatus
            );
            LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(this.editPopupData, 'country', this.propertyCountries);
          },
          (err) => {
            // FAILED
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }, digit);
    }
  }
  public searchFamilyCode() {
    let bire: FindBidoVariantVersionsInput = {};
    this.showFamilyCodeDialog = true;

    const familyTable: TableColumn[] = [
      { field: 'familyFunction', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'familyCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'familyName', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'variantCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'variantName', alignment: 'left', filterMode: TableColumnFilterMode.Input }
    ];
    if (this.isAircraft && !this.isEngine && !this.isTool) {
      bire = {
        pnCode: this.editPopupData.pnCode,
        module: BidoFunctionTypeConstants.MODULE_FAMILY,
        useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
      };
    }
    if (this.isEngine && !this.isAircraft && !this.isTool) {
      bire = {
        pnCode: this.editPopupData.pnCode,
        module: BidoFunctionTypeConstants.MODULE_FAMILY,
        useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
      };
    }
    if (!this.isEngine && !this.isAircraft && !this.isTool) {
      bire = {
        pnCode: this.editPopupData.pnCode,
        module: BidoFunctionTypeConstants.MODULE_FAMILY,
        useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        familyFunction: ''
      };
    }
    if (!this.isEngine && !this.isAircraft && this.isTool) {
      bire = {
        pnCode: undefined, // this.editPopupData.pnCode,
        module: BidoFunctionTypeConstants.MODULE_FAMILY,
        useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        familyFunction: AWPropertiesConstants.FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY
      };
    }
    this.dialogTableDataFamilyCode = {
      componentId: 'EquipmentPopupDialog',
      tableCols: familyTable,
      tableRows: this.editDataPopupFormService.findBidoVariantVersions(bire),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchPNCode() {
    this.showPnCodeDialog = true;
    let familyCode;
    let structureType;
    let variantCode;
    if (this.editPopupData.familyVariantCode) {
      const familyTab: string[] = this.editPopupData.familyVariantCode.split('-');
      familyCode = familyTab[0];
      structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;
      variantCode = familyTab[1];
    }

    let toolSearch = false;
    let pnType: string | undefined;
    if (!!this.editPopupData.equipmentFunction) {
      if (this.editPopupData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY) {
        toolSearch = true;
      } else if (
        this.editPopupData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY
      ) {
        pnType = AWPropertiesConstants.PN_TYPE_GROUND_SUPPORT_EQUIPMENT_KEY;
      } else if (this.editPopupData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY) {
        pnType = AWPropertiesConstants.PN_TYPE_PILOT_EQUIPMENT_KEY;
      } else {
        pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
      }
    }

    this.partsSearch = {
      familyVariantSelected: BireFamilyVariantUtil.buildFamilyVariantCodeWithStructureType(
        familyCode,
        structureType,
        variantCode
      ),
      type: pnType,
      toolSearch
    };
  }
  public setSelectedPnCode(selectedObject: BirePnDTO) {
    if (selectedObject) {
      if (this.pnFlag) {
        this.formData.pnCode = selectedObject.pnCode;
      }
      if (this.modelFlag) {
        this.modelInputData.pnCode = selectedObject.pnCode;
      }
      const criteria = this.setBireInput();
      this.editDataPopupFormService.findBireItemsBySearchCriteriaFM(criteria).subscribe(
        (results) => {
          if (results.list.length === 1) {
            this.setSelectedItems(results.list[0]);
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetLocation'));
        }
      );
    }
    this.showPnCodeDialog = false;
  }

  public setSelectedCode(sbadEvolution: BidoEvolutionDTO): void {
    if (!!sbadEvolution && !!this.modelInputData.sbIntroucingModel) {
      this.modelInputData.sbIntroucingModel.evolutionNumber = sbadEvolution.evolutionNumber;
      this.modelInputData.sbIntroucingModel.evolutionRevisionNumber = sbadEvolution.evolutionRevisionNumber;
      this.modelInputData.sbIntroucingModel.evolutionType = sbadEvolution.evolutionType;
    }
  }

  public setSelectedCodePrevious(sbadEvolution: BidoEvolutionDTO): void {
    if (!!sbadEvolution && !!this.modelInputData.sbIntroducingLastModel) {
      this.modelInputData.sbIntroducingLastModel.evolutionNumber = sbadEvolution.evolutionNumber;
      this.modelInputData.sbIntroducingLastModel.evolutionRevisionNumber = sbadEvolution.evolutionRevisionNumber;
      this.modelInputData.sbIntroducingLastModel.evolutionType = sbadEvolution.evolutionType;
    }
  }
  public setSelectedItems(selectedObject: BireItemDTO) {
    if (this.editPopupData) {
      if (selectedObject) {
        this.editPopupData.familyVariantCode = `${selectedObject.familyCode}-${selectedObject.variantCode}`;
        this.editPopupData.section = selectedObject.section;
        this.editPopupData.marks = selectedObject.marks;
        this.editPopupData.chapter = selectedObject.chapter;
        this.editPopupData.sheet = selectedObject.sheet;
        this.editPopupData.subject = selectedObject.subject;
        this.editPopupData.statusDate = selectedObject.statusDate;
        this.editPopupData.statusUser = selectedObject.statusUser;
        this.editPopupData.statusState = selectedObject.statusState;
        // this.itemNumber= selectedObject.itemNumber;
        this.editPopupData.equipmentDesignation = selectedObject.name;
        this.editPopupData.functionCode = selectedObject.functionCode;
      }
    }
  }

  private setBireInput(): FindBireItemsBySearchCriteriaFMInput {
    const chapter = this.editPopupData.chapter ? this.editPopupData.chapter + '%' : undefined;
    const section = this.editPopupData.section ? this.editPopupData.section + '%' : undefined;
    const sheet = this.editPopupData.sheet ? this.editPopupData.sheet + '%' : undefined;
    const subject = this.editPopupData.subject ? this.editPopupData.subject + '%' : undefined;
    const marks = this.editPopupData.marks ? this.editPopupData.marks + '%' : undefined;

    const familyTab: string[] | undefined = !!this.editPopupData.familyVariantCode
      ? this.editPopupData.familyVariantCode.split('-')
      : undefined;
    const bire: BireItemDTO = {
      familyCode: !!familyTab ? familyTab[0] : undefined,
      structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
      variantCode: !!familyTab ? familyTab[1] : undefined,
      chapter,
      sheet,
      section,
      subject,
      marks
    };
    this.criteria = {
      bireItemDTOCriteria: bire,
      pnCode: this.editPopupData.pnCode,
      useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    return this.criteria;
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.formData.familyVariantCode = `${selectedObject.familyCode}-${selectedObject.variantCode}`;
    }
    this.showFamilyCodeDialog = false;
  }
  public changeZone() {
    if (this.formData.zone) {
      this.formData.country = undefined;
      const zoneLabel: string = this.selectPropertyZone(this.formData.zone);
      this.propertyCountries = [];
      this.editDataPopupFormService.findCountriesByZone(zoneLabel).subscribe(
        (results) => {
          results.forEach((element) => {
            let countryElement: LabelValue<string>;
            const key: string = element.value;
            const mapLabel: string[] = element.label.split(';');
            const country: string = mapLabel[0];

            countryElement = {
              label: country,
              value: key
            };
            this.propertyCountries.push(countryElement);
          });
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
        }
      );
    } else {
      this.formData.zone = undefined;
      this.formData.country = undefined;
      this.propertyCountries = this.propertyAllCountries;
    }
  }

  private selectPropertyZone(equipmentZone: string | undefined): string {
    if (!!equipmentZone) {
      const selectedPropertyZone = this.propertyZones.find((zone) => zone.value === equipmentZone);

      return !!selectedPropertyZone && !!selectedPropertyZone.label ? selectedPropertyZone.label : '';
    } else {
      return '';
    }
  }
  public openEvolutionPopup(): void {
    this.showEvolutionPopup = true;
  }
  public openEvolutionPopupPrevious(): void {
    this.showEvolutionPopupPrevious = true;
  }

  public changeCountry() {
    if (this.formData.country) {
      const countryName: string = this.selectCountry(this.formData.country);
      this.editDataPopupFormService.findZoneByCountries(countryName).subscribe(
        (results) => {
          results.forEach((element) => {
            this.formData.zone = element.label;
          });
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCountryZone'));
        }
      );
    } else {
      this.formData.zone = undefined;
      this.propertyCountries = this.propertyAllCountries;
    }
  }

  private selectCountry(country: string | undefined): string {
    if (!!country) {
      const selectedCountry = this.propertyCountries.find((propertyCountry) => propertyCountry.value === country);

      return !!selectedCountry && !!selectedCountry.label ? selectedCountry.label : '';
    } else {
      return '';
    }
  }

  public searchRatingCode() {
    const familyTab: string[] | undefined = !!this.editPopupData.familyVariantCode
      ? this.editPopupData.familyVariantCode.split('-')
      : undefined;
    this.familyCode = !!familyTab ? familyTab[0] : undefined;
    this.variantCode = !!familyTab ? familyTab[1] : undefined;
    this.structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;
    this.showRatingDialog = true;
  }
  public onValidateRating(event) {
    this.engineData = {
      ratingCode: event.ratingCode
    };
  }
  public searchModelCode() {
    const familyTab: string[] | undefined = !!this.editPopupData.familyVariantCode
      ? this.editPopupData.familyVariantCode.split('-')
      : undefined;
    this.familyCode = !!familyTab ? familyTab[0] : undefined;
    this.variantCode = !!familyTab ? familyTab[1] : undefined;
    this.showModelDialog = true;
  }
  public onValidateModel(event) {
    this.engineData = {
      modelCode: event.modelCode
    };
  }

  public isChecked(): boolean {
    if (
      !this.formData.operationalStatus &&
      !this.formData.familyVariantCode &&
      !this.formData.sn &&
      !this.formData.registration &&
      !this.formData.pnCode &&
      !this.formData.country &&
      !this.formData.zone &&
      !this.engineData.ratingCode &&
      !this.engineData.modelCode &&
      !!this.modelInputData.sbIntroucingModel &&
      !this.modelInputData.sbIntroucingModel.evolutionNumber
    ) {
      return true;
    } else {
      return false;
    }
  }

  public onValidate() {
    if (this.operationalFlag) {
      LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(
        this.formData,
        'operationalStatus',
        this.propertyOperationalStatus
      );
      if (this.editPopupData.operationalStatus === this.formData.operationalStatus) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        LabelValueUtils.labelToStringValue<BidoEquipmentDTO>(
          this.formData,
          'operationalStatus',
          this.propertyOperationalStatus
        );
        const updatedData: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.operationalStatus,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'OPERATIONAL_STATUS',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.showValidateSpinner = true;
        this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
          () => {
            const date = new Date();
            if (!!this.editPopupData.equipmentCode) {
              const data: HistoryBidoEquipmentFromDate = {
                equipmentCode: this.editPopupData.equipmentCode,
                changeDate: date
              };
              this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                (results) => {
                  this.editPopupData.operationalStatus = results.fFBidoEquipmentDTO.operationalStatus;
                  this.onValidated.emit(this.editPopupData);
                  this.showValidateSpinner = false;
                  this.closeDialog();
                },
                (error) => {
                  this.messageService.showErrorMessage(error.error.errorDesc);
                  this.showValidateSpinner = false;
                }
              );
            }
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDesc);
            this.showValidateSpinner = false;
          }
        );
      }
    }

    if (this.familyFlag) {
      if (this.editPopupData.familyVariantCode === this.formData.familyVariantCode) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        const updatedData: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.familyVariantCode,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'FAMILY_VARIANT',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.showValidateSpinner = true;
        this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
          () => {
            const date = new Date();
            if (!!this.editPopupData.equipmentCode) {
              const data: HistoryBidoEquipmentFromDate = {
                equipmentCode: this.editPopupData.equipmentCode,
                changeDate: date
              };
              this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                (results) => {
                  this.editPopupData.familyVariantCode = results.fFBidoEquipmentDTO.familyVariantCode;
                  this.onValidated.emit(this.editPopupData);
                  this.showValidateSpinner = false;
                  this.closeDialog();
                },
                (err) => {
                  this.messageService.showErrorMessage(err.error.errorDesc);
                  this.showValidateSpinner = false;
                }
              );
            }
          },
          (err) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpdate'));
            this.showValidateSpinner = false;
          }
        );
      }
    }
    if (this.snFlag) {
      if (this.editPopupData.sn === this.formData.sn) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        const updatedData: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.sn,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'SN',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.showValidateSpinner = true;
        this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
          () => {
            const date = new Date();
            if (!!this.editPopupData.equipmentCode) {
              const data: HistoryBidoEquipmentFromDate = {
                equipmentCode: this.editPopupData.equipmentCode,
                changeDate: date
              };
              this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                (results) => {
                  this.editPopupData.sn = results.fFBidoEquipmentDTO.sn;
                  this.onValidated.emit(this.editPopupData);
                  this.showValidateSpinner = false;
                  this.closeDialog();
                },
                (err) => {
                  this.messageService.showErrorMessage(err.error.errorDesc);
                  this.showValidateSpinner = false;
                }
              );
            }
          },
          (err) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpdate'));
            this.showValidateSpinner = false;
          }
        );
      }
    }
    if (this.registrationFlag) {
      if (this.editPopupData.registration === this.formData.registration) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        const updatedData: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.registration,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'REGISTRATION',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.showValidateSpinner = true;
        this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
          () => {
            const date = new Date();
            if (!!this.editPopupData.equipmentCode) {
              const data: HistoryBidoEquipmentFromDate = {
                equipmentCode: this.editPopupData.equipmentCode,
                changeDate: date
              };
              this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                (results) => {
                  this.editPopupData.registration = results.fFBidoEquipmentDTO.registration;
                  this.onValidated.emit(this.editPopupData);
                  this.showValidateSpinner = false;
                  this.closeDialog();
                },
                (err) => {
                  this.showValidateSpinner = false;
                  this.messageService.showErrorMessage(err.error.errorDesc);
                }
              );
            }
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDesc);
            this.showValidateSpinner = false;
          }
        );
      }
    }
    if (this.pnFlag) {
      if (this.editPopupData.pnCode === this.formData.pnCode) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        const updatedData: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.pnCode,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'PN',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.showValidateSpinner = true;
        this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
          () => {
            const date = new Date();
            if (!!this.editPopupData.equipmentCode) {
              const data: HistoryBidoEquipmentFromDate = {
                equipmentCode: this.editPopupData.equipmentCode,
                changeDate: date
              };
              this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                (results) => {
                  this.editPopupData.pnCode = results.fFBidoEquipmentDTO.pn;
                  this.onValidated.emit(this.editPopupData);
                  this.showValidateSpinner = false;
                  this.closeDialog();
                },
                (err) => {
                  this.messageService.showErrorMessage(err.error.errorDesc);
                  this.showValidateSpinner = false;
                }
              );
            }
          },
          (err) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpdate'));
            this.showValidateSpinner = false;
          }
        );
      }
    }
    if (this.geoFlag) {
      if (this.editPopupData.zone === this.formData.zone) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueSame'));
      } else {
        const updatedDataZone: UpdatePopUpFieldsEquipmentDTO = {
          changeDate: this.statusDate,
          newFieldValue: this.formData.zone,
          equipmentCode: this.editPopupData.equipmentCode,
          fieldName: 'ZONE',
          oldFieldValue: this.editPopupData.familyVariantCode
        };
        this.editDataPopupFormService.updatePopupData(updatedDataZone).subscribe(() => {
          const date = new Date();
          if (!!this.editPopupData.equipmentCode) {
            const updatedDataCountry: UpdatePopUpFieldsEquipmentDTO = {
              changeDate: this.statusDate,
              newFieldValue: this.formData.country,
              equipmentCode: this.editPopupData.equipmentCode,
              fieldName: 'COUNTRY',
              oldFieldValue: this.editPopupData.familyVariantCode
            };
            this.showValidateSpinner = true;
            this.editDataPopupFormService.updatePopupData(updatedDataCountry).subscribe(
              () => {
                if (!!this.editPopupData.equipmentCode) {
                  const data: HistoryBidoEquipmentFromDate = {
                    equipmentCode: this.editPopupData.equipmentCode,
                    changeDate: date
                  };
                  this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
                    (results) => {
                      this.editPopupData.country = results.fFBidoEquipmentDTO.country;
                      this.editPopupData.zone = results.fFBidoEquipmentDTO.zone;
                      this.onValidated.emit(this.editPopupData);
                      this.showValidateSpinner = false;
                      this.closeDialog();
                    },
                    (err) => {
                      this.messageService.showErrorMessage(err.error.errorDesc);
                      this.showValidateSpinner = false;
                    }
                  );
                }
              },
              (err) => {
                this.messageService.showErrorMessage(err.error.errorDesc);
                this.showValidateSpinner = false;
              }
            );
          }
        });
      }
    }
    if (this.modelFlag) {
      const updatedData: UpdateEngineModelInput = {
        changeDate: this.statusDate,
        modelCode: this.engineData.modelCode,
        equipmentCode: this.editPopupData.equipmentCode,
        pnCode: this.editPopupData.pnCode,
        sbIntroucingModel: this.modelInputData.sbIntroucingModel
      };
      this.editDataPopupFormService.UpdateEngineModel(updatedData).subscribe(
        () => {
          const date = new Date();
          if (!!this.editPopupData.equipmentCode) {
            const data: HistoryBidoEquipmentFromDate = {
              equipmentCode: this.editPopupData.equipmentCode,
              changeDate: date
            };
            this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
              (results) => {
                this.engineData.modelCode = results.fFBidoEquipmentDTO.modelCode;
                this.engineData.modelName = results.modelName;
                this.onValdiatedEngineData.emit(this.engineData);
                this.closeDialog();
              },
              (err) => {
                this.messageService.showErrorMessage(err.error.errorDesc);
              }
            );
          }
        },
        (err) => {
          this.messageService.showErrorMessage(err.error.errorDesc);
        }
      );
    }
    if (this.ratingFlag) {
      const updatedData: UpdatePopUpFieldsEquipmentDTO = {
        changeDate: this.statusDate,
        newFieldValue: this.engineData.ratingCode,
        equipmentCode: this.editPopupData.equipmentCode,
        oldFieldValue: this.editPopupData.familyVariantCode,
        fieldName: 'RATING'
      };
      this.editDataPopupFormService.updatePopupData(updatedData).subscribe(
        () => {
          const date = new Date();
          if (!!this.editPopupData.equipmentCode) {
            const data: HistoryBidoEquipmentFromDate = {
              equipmentCode: this.editPopupData.equipmentCode,
              changeDate: date
            };
            this.editDataPopupFormService.findBidoEquipmentbyDate(data).subscribe(
              (results) => {
                this.engineData.ratingCode = results.fFBidoEquipmentDTO.familyRatingCode;
                this.engineData.ratingName = results.ratingName;
                this.onValdiatedEngineData.emit(this.engineData);
                this.closeDialog();
              },
              (err) => {
                this.messageService.showErrorMessage(err.error.errorDesc);
              }
            );
          }
        },
        (err) => {
          this.messageService.showErrorMessage(err.error.errorDesc);
        }
      );
    }
  }
}
