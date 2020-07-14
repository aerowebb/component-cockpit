import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AccessibleFunctionsConstants } from '../../../../shared/constants/accessible-functions-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ReportConstants } from '../../../../shared/constants/report-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ImportAttributeInput } from '../../../../shared/types/api-input-types/administration-attributes/import-attribute-bido-input.interface';
import { ImportAttributeValuesBireInput } from '../../../../shared/types/api-input-types/administration-attributes/import-attribute-value-bire-input-interface';
import { AttributeTransferDTO } from '../../../../shared/types/api-types/attribute-transfer-dto.interface';
import { AttributeValueDTO } from '../../../../shared/types/api-types/attribute-value-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BireAttributeDTOId } from '../../../../shared/types/api-types/bire-attribute-dto-id.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { ReportDTO } from '../../../../shared/types/api-types/report-dto.interface';
import { ReportMessageDTO } from '../../../../shared/types/api-types/report-message-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AttributesSearchComponent } from '../search/attributes-search.component';

import { AttributesFormService } from './attributes-form.service';

enum AttributeCategory {
  Engineering = 1,
  Fleet
}

enum ValueType {
  Text = 'Text',
  Boolean = 'Boolean',
  Date = 'Date',
  EnumeratedValueList = 'List'
}

interface AttributesFormsInput {
  attributeDescriptionEn?: string;
  attributeDescriptionFr?: string;
  attributeCategory?: string;
  attributeType?: string;
  isStandard?: boolean;
  attributeNameEn?: string;
  attributeNameFr?: string;
  attributeId?: string;
}
interface EngineeringDataRow {
  textEn: string;
  textFr: string;
  obj: AttributeValueDTO;
}
interface FleetDataRow {
  textEn: string;
  textFr: string;
  obj: AttributeValueDTO;
}
@Component({
  selector: 'aw-attributes-form',
  styleUrls: ['./attributes-form.component.scss'],
  templateUrl: './attributes-form.component.html'
})
export class AttributesFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly componentName: string;
  public optionValue: string;
  public engineeringValueList: AttributeValueDTO[];
  public engineeringImportInput: BireAttributeDTO;
  public fleetValueList: AttributeValueDTO[];
  public enginerringattributeFormInput: BireAttributeDTO;
  public fleetattributeFormInput: BidoAttributeDTO;
  public fleetTableDataSource: TableDataSource<FleetDataRow>;
  public engineeringTableDataSource: TableDataSource<EngineeringDataRow>;
  public showListPopup: boolean;
  public categoryValue: string;
  public isEngineering: boolean;
  public enableSelectButton: boolean;
  public engineeringCategoryList: LabelValue<string>[];
  public fleetCategoryList: LabelValue<string>[];
  public attributesFormsInput: AttributesFormsInput;
  public context: string;
  public engineeringAttributeId: BireAttributeDTOId;
  public fleetAttributeId: BidoAttributeDTOId;
  public selectModule: string;
  public dialogOpenMode: ComponentOpenMode;
  public currentEngineeringData: AttributeValueDTO | undefined;
  public currentFleetData: AttributeValueDTO | undefined;
  public engineeringData: BireAttributeDTO[];
  public fleetData: BidoAttributeDTO | undefined;
  private currentEngineeringIndex: number;
  private currentFleetIndex: number;
  public file: BireDocumentDTO;
  public fileName: string | undefined;

  public selectedAttributeCategory: AttributeCategory;
  public searchCategoryList: SelectItem[];

  public selectedValueType: string;
  public valueTypeList: SelectItem[];

  public pageSubtitle: string | undefined;

  public saving: boolean;
  public attributePopupDataInput: AttributeValueDTO | undefined;
  public fleetDataInput: AttributeValueDTO | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly attributesFormService: AttributesFormService,
    private readonly propertiesService: PropertiesService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.componentName = 'AttributesFormComponent';

    this.currentEngineeringData = undefined;
    this.currentFleetData = undefined;
    this.fleetData = undefined;
    this.currentEngineeringIndex = -1;
    this.currentFleetIndex = -1;
    this.engineeringValueList = [];
    this.fleetValueList = [];

    this.pageSubtitle = undefined;
    this.attributePopupDataInput = undefined;
    this.fleetDataInput = undefined;

    this.initEngineeringTableDataSource();
    this.initFleetTableDataSource();
    this.setAttributeCategoryList();
    this.setValueTypeList();
    this.initSearchObject();
  }

  private initSearchObject(): void {
    this.selectedAttributeCategory = AttributeCategory.Engineering;
    this.selectedValueType = ValueType.Text;
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_ATTRIBUTES_FORM;
  }

  public showValuesManagement(): boolean {
    return this.selectedValueType === ValueType.EnumeratedValueList;
  }

  public get isSaveRequired(): boolean {
    if (!!this.attributesFormsInput) {
      return (this.attributesFormsInput.isStandard as boolean) ? this.showValuesManagement() : true;
    }

    return true;
  }

  private initEngineeringTableDataSource(): void {
    this.engineeringTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'textEn',
          translateKey: this.getTranslateKey('textEn')
        },
        {
          field: 'textFr',
          translateKey: this.getTranslateKey('textFr')
        }
      ],
      data: []
    });
  }

  private initFleetTableDataSource(): void {
    this.fleetTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'textEn',
          translateKey: this.getTranslateKey('textEn')
        },
        {
          field: 'textFr',
          translateKey: this.getTranslateKey('textFr')
        }
      ],
      data: []
    });
  }

  private setValueTypeList(): void {
    const textKey = this.getTranslateKey('text');
    const booleanKey = this.getTranslateKey('boolean');
    const dateKey = this.getTranslateKey('date');
    const listKey = this.getTranslateKey('list');
    this.translateService.get([textKey, booleanKey, dateKey, listKey]).subscribe((results) => {
      const textLabel = !!results ? results[textKey] : 'Text';
      const booleanLabel = !!results ? results[booleanKey] : 'Boolean';
      const dateLabel = !!results ? results[dateKey] : 'Date';
      const listLabel = !!results ? results[listKey] : 'Enumerated Values List';
      this.valueTypeList = [
        { label: textLabel, value: ValueType.Text },
        { label: booleanLabel, value: ValueType.Boolean },
        { label: dateLabel, value: ValueType.Date },
        { label: listLabel, value: ValueType.EnumeratedValueList }
      ];
    });
  }

  private setAttributeCategoryList(): void {
    const engineeringKey = this.getTranslateKey('engineering');
    const fleetKey = this.getTranslateKey('fleet');
    this.translateService.get([engineeringKey, fleetKey]).subscribe((results) => {
      const engineeringLabel = !!results ? results[engineeringKey] : 'Engineering';
      const fleetLabel = !!results ? results[fleetKey] : 'Fleet';
      this.searchCategoryList = [];
      this.sessionService
        .getAccessibleFunctions([AccessibleFunctionsConstants.ATTRIBUTES_TRANSACTION])
        .subscribe((categoryResults: { [entryComponent: string]: string[] }) => {
          const categories: string[] =
            categoryResults.accessibleFunctionsPerEntryComponent[AccessibleFunctionsConstants.ATTRIBUTES_TRANSACTION];
          if (categories.includes(AttributesSearchComponent.ENGINEERING_TAB)) {
            this.searchCategoryList = this.searchCategoryList.concat({
              label: engineeringLabel,
              value: AttributeCategory.Engineering
            });
          }
          if (categories.includes(AttributesSearchComponent.FLEET_TAB)) {
            this.searchCategoryList = this.searchCategoryList.concat({
              label: fleetLabel,
              value: AttributeCategory.Fleet
            });
          }
        });
    });
  }

  protected getTranslateKey(key: string): string {
    return super.getTranslateKey(key, this.componentName);
  }

  public ngOnInit() {
    super.ngOnInit();
    this.updateOpenMode(this.componentData.openMode);
    this.saving = false;
    if (!!this.componentData.objectId) {
      this.enableSelectButton = false;
      this.isEngineering = this.serializationService.deserialize(this.componentData.objectId).isEngineering;
      if (this.isEngineering) {
        this.selectedAttributeCategory = AttributeCategory.Engineering;
        this.loadEngineeringDropDowns();
        this.loadEngineeringAttributesData();
      } else {
        this.selectedAttributeCategory = AttributeCategory.Fleet;
        this.loadFleetDropDowns();
        this.loadFleetAttributesData();
      }
    } else {
      this.isEngineering = true;
      this.enableSelectButton = true;
      this.loadEngineeringDropDowns();
      this.loadFleetDropDowns();
    }

    this.initObjects();
    this.selectModule = 'engineering';
    this.attributesFormsInput.attributeType = 'Text';
    this.showListPopup = false;
    this.attributesFormsInput.attributeCategory = '1-all';
  }

  public reset() {
    this.attributesFormsInput.attributeCategory = '1-all';
    this.attributesFormsInput.attributeNameFr = undefined;
    this.attributesFormsInput.attributeNameEn = undefined;
    this.attributesFormsInput.attributeType = 'Text';
    this.attributesFormsInput.attributeDescriptionEn = undefined;
    this.attributesFormsInput.attributeDescriptionFr = undefined;
  }

  public checkAttributeCategory(): void {
    this.reset();
    this.isEngineering = this.selectedAttributeCategory === AttributeCategory.Engineering;
  }

  public checkModuleEngineering() {
    this.reset();
    this.isEngineering = true;
  }

  public checkModuleFleet() {
    this.reset();
    this.isEngineering = false;
  }

  public loadEngineeringDropDowns() {
    this.engineeringCategoryList = [];
    this.propertiesService.getValue(GenericPropertyConstants.MCH_ATTRIBUTE_CATEGORY_MAP).subscribe((results) => {
      this.engineeringCategoryList = results;
    });
  }

  public loadFleetDropDowns() {
    this.fleetCategoryList = [];
    this.propertiesService.getValue(GenericPropertyConstants.ATTRIBUTE_CATEGORY_MAP).subscribe((results) => {
      this.fleetCategoryList = results;
    });
  }

  public initObjects() {
    this.fileName = '';
    this.attributesFormsInput = {};
    this.enginerringattributeFormInput = {
      attributeId: '',
      attributeNameEn: undefined,
      attributeNameFr: undefined,
      bireAttributeValueDatas: []
    };
    this.fleetattributeFormInput = {
      attributeId: '',
      attributeNameEn: undefined,
      attributeNameFr: undefined,
      bidoAttributeValueDatas: []
    };
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

  private loadPageSubtitle(): void {
    this.pageSubtitle =
      this.translateService.currentLang === 'en'
        ? this.attributesFormsInput.attributeNameEn
        : this.attributesFormsInput.attributeNameFr;
  }

  public loadEngineeringAttributesData() {
    if (!!this.componentData.objectId) {
      this.engineeringValueList = [];
      const data: AttributeTransferDTO = this.serializationService.deserialize(this.componentData.objectId);
      if (data.engineeringAttributeId) {
        this.engineeringAttributeId = {
          attributeId: data.engineeringAttributeId.attributeId
        };
        this.attributesFormService
          .getEnginerringAttribiuteData(this.engineeringAttributeId)
          .subscribe((results: BireAttributeDTO) => {
            if (results) {
              // Sort attribute list as per text english
              if (!!results.bireAttributeValueDatas) {
                results.bireAttributeValueDatas.sort(ArrayUtils.compareValues('textEn'));
              }

              this.enginerringattributeFormInput = results;
              this.loadEnginerringListData(this.enginerringattributeFormInput);
              this.attributesFormsInput = {
                attributeDescriptionEn: results.attributeDescriptionEn,
                attributeDescriptionFr: results.attributeDescriptionFr,
                attributeCategory: results.attributeCategory,
                attributeType: results.attributeType,
                isStandard: results.isStandard,
                attributeNameEn: results.attributeNameEn,
                attributeNameFr: results.attributeNameFr
              };
              this.loadPageSubtitle();
              if (results.attributeType) {
                this.selectedValueType = results.attributeType;
              }
              if (this.attributesFormsInput.attributeNameEn) {
                this.displayComponentContext(this.attributesFormsInput.attributeNameEn, this.isCreateOpenMode);
              }
            }
          });
      }
    }
  }

  public loadFleetAttributesData() {
    if (!!this.componentData.objectId) {
      this.fleetValueList = [];
      const data: AttributeTransferDTO = this.serializationService.deserialize(this.componentData.objectId);
      if (data.fleetAttributeId) {
        this.fleetAttributeId = {
          attributeId: data.fleetAttributeId.attributeId
        };
        this.attributesFormService.getFleetAttribiuteData(this.fleetAttributeId).subscribe((results) => {
          if (results) {
            // Sort attribute list as per text english
            if (!!results.bidoAttributeValueDatas) {
              results.bidoAttributeValueDatas.sort(ArrayUtils.compareValues('textEn'));
            }
            this.fleetattributeFormInput = results;
            this.loadFleetListData(this.fleetattributeFormInput);
            this.attributesFormsInput = {
              attributeDescriptionEn: results.attributeDescriptionEn,
              attributeDescriptionFr: results.attributeDescriptionFr,
              attributeCategory: results.attributeCategory,
              attributeType: results.attributeType,
              isStandard: results.isStandard,
              attributeNameEn: results.attributeNameEn,
              attributeNameFr: results.attributeNameFr
            };
            this.loadPageSubtitle();
            if (results.attributeType) {
              this.selectedValueType = results.attributeType;
            }
            if (this.attributesFormsInput.attributeNameEn) {
              this.displayComponentContext(this.attributesFormsInput.attributeNameEn, this.isCreateOpenMode);
            }
          }
        });
      }
    }
  }

  public loadEnginerringListData(engineeringData: BireAttributeDTO) {
    if (!!engineeringData.bireAttributeValueDatas) {
      this.engineeringValueList = engineeringData.bireAttributeValueDatas;
      this.engineeringTableDataSource.setData(
        this.engineeringValueList.map((data) => {
          const row: EngineeringDataRow = {
            textEn: data.textEn,
            textFr: data.textFr,
            obj: data
          };

          return row;
        })
      );
    }
  }

  public loadFleetListData(fleetData: BidoAttributeDTO) {
    if (!!fleetData.bidoAttributeValueDatas) {
      this.fleetValueList = fleetData.bidoAttributeValueDatas;
      this.fleetTableDataSource.setData(
        this.fleetValueList.map((data) => {
          const row: FleetDataRow = {
            textEn: data.textEn,
            textFr: data.textFr,
            obj: data
          };

          return row;
        })
      );
    }
  }

  public createEngineeringList() {
    this.currentEngineeringIndex = -1;
    this.attributePopupDataInput = undefined;
    this.currentEngineeringData = undefined;
    this.showListPopup = true;
    this.dialogOpenMode = ComponentOpenMode.Create;
  }

  public createFleetList() {
    this.currentFleetIndex = -1;
    this.attributePopupDataInput = undefined;
    this.currentFleetData = undefined;
    this.showListPopup = true;
    this.dialogOpenMode = ComponentOpenMode.Create;
  }

  public editEngineeringList() {
    if (!!this.engineeringTableDataSource.dataSelection && this.engineeringTableDataSource.dataSelectionCount === 1) {
      this.currentEngineeringIndex = this.engineeringTableDataSource.data.findIndex(
        (x) =>
          x.obj.textEn === this.engineeringTableDataSource.dataSelection[0].textEn &&
          x.obj.textFr === this.engineeringTableDataSource.dataSelection[0].textFr
      );
      this.attributePopupDataInput = {
        attributeId: this.engineeringTableDataSource.dataSelection[0].obj.attributeId,
        attributeValue: this.engineeringTableDataSource.dataSelection[0].obj.attributeValue,
        textEn: this.engineeringTableDataSource.dataSelection[0].textEn,
        textFr: this.engineeringTableDataSource.dataSelection[0].textFr
      };
      this.showListPopup = true;
      this.dialogOpenMode = ComponentOpenMode.Write;
    }
  }

  public editFleetList() {
    if (!!this.fleetTableDataSource.dataSelection && this.fleetTableDataSource.dataSelectionCount === 1) {
      this.currentFleetIndex = this.fleetTableDataSource.data.findIndex(
        (x) =>
          x.textEn === this.fleetTableDataSource.dataSelection[0].textEn &&
          x.textFr === this.fleetTableDataSource.dataSelection[0].textFr
      );

      this.attributePopupDataInput = {
        attributeId: this.fleetTableDataSource.dataSelection[0].obj.attributeId,
        attributeValue: this.fleetTableDataSource.dataSelection[0].obj.attributeValue,
        textEn: this.fleetTableDataSource.dataSelection[0].textEn,
        textFr: this.fleetTableDataSource.dataSelection[0].textFr
      };

      this.showListPopup = true;
      this.dialogOpenMode = ComponentOpenMode.Write;
    }
  }

  public onAddEngineeringdata(attributeValue: AttributeValueDTO) {
    let isDuplicateData = false;
    if (this.isEngineering) {
      if (!!attributeValue && !!attributeValue.attributeId) {
        isDuplicateData = this.engineeringTableDataSource.dataSrc.some((element) => {
          return (
            element.obj.attributeValue !== attributeValue.attributeValue &&
            element.textEn === attributeValue.textEn &&
            element.textFr === attributeValue.textFr
          );
        });
      } else {
        isDuplicateData = this.engineeringTableDataSource.dataSrc.some((element, index) => {
          return (
            this.currentEngineeringIndex !== index &&
            element.textEn === attributeValue.textEn &&
            element.textFr === attributeValue.textFr
          );
        });
      }

      if (isDuplicateData) {
        this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
      } else {
        this.addEditEngineeringData(attributeValue);
        this.engineeringTableDataSource.dataSelection = [];
      }
    } else {
      if (!!attributeValue && !!attributeValue.attributeId) {
        isDuplicateData = this.fleetValueList.some((element) => {
          return (
            element.attributeValue !== attributeValue.attributeValue &&
            element.textEn === attributeValue.textEn &&
            element.textFr === attributeValue.textFr
          );
        });
      } else {
        isDuplicateData = this.fleetValueList.some((element, index) => {
          return (
            this.currentEngineeringIndex !== index &&
            element.textEn === attributeValue.textEn &&
            element.textFr === attributeValue.textFr
          );
        });
      }

      if (isDuplicateData) {
        this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
      } else {
        this.addEditFleetData(attributeValue);
        this.fleetTableDataSource.dataSelection = [];
      }
    }
  }

  public addFleetData(engineeringData: AttributeValueDTO): FleetDataRow {
    const row: FleetDataRow = {
      textEn: engineeringData.textEn,
      textFr: engineeringData.textFr,
      obj: engineeringData
    };

    return row;
  }

  public addData(engineeringData: AttributeValueDTO): EngineeringDataRow {
    const row: EngineeringDataRow = {
      textEn: engineeringData.textEn,
      textFr: engineeringData.textFr,
      obj: engineeringData
    };

    return row;
  }

  public deleteEngineeringList() {
    const partialMessageKey =
      this.engineeringTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedValues'
        : 'confirmDeleteSelectedValue';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.engineeringValueList = this.engineeringValueList.filter((list) => {
          return !this.engineeringTableDataSource.dataSelection.some((row) => {
            return !!list.textEn && !!row.textEn && list.textEn === row.textEn;
          });
        });
        this.engineeringTableDataSource.setData(
          this.engineeringTableDataSource.data.filter((data) => {
            return !this.engineeringTableDataSource.dataSelection.some((row) => {
              return data.textEn === row.textEn;
            });
          })
        );
        this.engineeringTableDataSource.dataSelection = [];
      }
    });
  }

  public deleteFleetList() {
    const partialMessageKey =
      this.fleetTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedValues' : 'confirmDeleteSelectedValue';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.fleetValueList = this.fleetValueList.filter((list) => {
          return !this.fleetTableDataSource.dataSelection.some((row) => {
            return !!list.textEn && !!row.textEn && list.textEn === row.textEn;
          });
        });
        this.fleetTableDataSource.setData(
          this.fleetTableDataSource.data.filter((data) => {
            return !this.fleetTableDataSource.dataSelection.some((row) => {
              return data.textEn === row.textEn;
            });
          })
        );
        this.fleetTableDataSource.dataSelection = [];
      }
    });
  }

  public isEngineeringAttribute(): boolean {
    return this.selectedAttributeCategory === AttributeCategory.Engineering;
  }

  public validate() {
    this.saving = true;
    if (this.isEngineeringAttribute()) {
      this.engineeringValueList.forEach((value) => {
        value.attributeId = !!this.componentData.objectId ? this.engineeringAttributeId.attributeId : '';
      });
      this.enginerringattributeFormInput = {
        attributeId: !!this.componentData.objectId ? this.engineeringAttributeId.attributeId : '',
        attributeDescriptionEn: this.attributesFormsInput.attributeDescriptionEn,
        attributeDescriptionFr: this.attributesFormsInput.attributeDescriptionFr,
        attributeCategory: this.attributesFormsInput.attributeCategory,
        attributeType: this.selectedValueType,
        attributeNameFr: this.attributesFormsInput.attributeNameFr,
        attributeNameEn: this.attributesFormsInput.attributeNameEn,
        bireAttributeValueDatas: this.engineeringValueList,
        isStandard: this.attributesFormsInput.isStandard
      };
      if (
        StringUtils.isNullOrEmpty(
          this.enginerringattributeFormInput.attributeNameEn && this.enginerringattributeFormInput.attributeNameFr
        )
      ) {
        this.saving = false;
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        this.attributesFormService.saveFormEnginerringAttributes(this.enginerringattributeFormInput).subscribe(
          (results) => {
            this.saving = false;
            if (!!this.enginerringattributeFormInput.attributeNameEn) {
              const data: AttributeTransferDTO = {
                isEngineering: true,
                engineeringAttributeId: results
              };
              this.componentData.objectId = this.serializationService.serialize(data);
              this.loadEngineeringAttributesData();
              this.updateOpenMode(ComponentOpenMode.Write);
              this.displayComponentContext(this.enginerringattributeFormInput.attributeNameEn, this.isCreateOpenMode);
              this.componentData.openMode = ComponentOpenMode.Write;
            }
            this.messageService.showSuccessMessage(
              this.getTranslateKey(!!this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
            );
          },
          (err) => {
            // FAILED
            this.saving = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    } else {
      this.fleetValueList.forEach((value) => {
        value.attributeId = !!this.componentData.objectId ? this.fleetAttributeId.attributeId : '';
      });
      this.fleetattributeFormInput = {
        attributeId: !!this.componentData.objectId ? this.fleetAttributeId.attributeId : '',
        attributeDescriptionEn: this.attributesFormsInput.attributeDescriptionEn,
        attributeDescriptionFr: this.attributesFormsInput.attributeDescriptionFr,
        attributeCategory: this.attributesFormsInput.attributeCategory,
        // attributeType: this.attributesFormsInput.attributeType,
        attributeType: this.selectedValueType,
        attributeNameFr: this.attributesFormsInput.attributeNameFr,
        attributeNameEn: this.attributesFormsInput.attributeNameEn,
        bidoAttributeValueDatas: this.fleetValueList,
        isStandard: this.attributesFormsInput.isStandard
      };
      if (
        StringUtils.isNullOrEmpty(
          this.fleetattributeFormInput.attributeNameEn && this.fleetattributeFormInput.attributeNameFr
        )
      ) {
        this.saving = false;
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        this.attributesFormService.saveFormfleetAttributes(this.fleetattributeFormInput).subscribe(
          (results) => {
            this.saving = false;
            if (!!this.fleetattributeFormInput.attributeNameEn) {
              const data: AttributeTransferDTO = {
                isEngineering: false,
                fleetAttributeId: results
              };
              this.componentData.objectId = this.serializationService.serialize(data);
              this.loadFleetAttributesData();
              this.updateOpenMode(ComponentOpenMode.Write);
              this.displayComponentContext(this.fleetattributeFormInput.attributeNameEn, this.isCreateOpenMode);
            }
            this.messageService.showSuccessMessage(
              this.getTranslateKey(!!this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
            );
          },
          (err) => {
            // FAILED
            this.saving = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
  }

  // IMPORT

  public openTemplate(templateName: string): void {
    const partialMessageKey = this.getTranslateKey('openReport');
    this.confirmationService.confirm({
      interpolateParams: { 'openReport.reportName': templateName },
      messageKey: partialMessageKey,
      accept: () => {
        const templateService = this.isEngineering
          ? this.attributesFormService.getEnginerringImportTemplate()
          : this.attributesFormService.getFleetImportTemplate();
        templateService.subscribe((result) => {
          this.downLoadFiles(result, templateName);
        });
      }
    });
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public loadTemplate(): string {
    return 'TEMPLATE_ATTRIBIUTE_VALUE.xls';
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            this.file = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };
            this.fileName = this.file.docName;
          }
        });
      }

      fileUploader.clear();
    }
  }

  public checkImport(): boolean {
    return !this.fileName ? true : false;
  }

  private getFirstErrorMessage(report: ReportDTO): string | undefined {
    let errorMsg: string | undefined;
    if (report && report.messages && report.messages.length > 0) {
      report.messages.forEach((message: ReportMessageDTO) => {
        if (message.severity === ReportConstants.SEVERITY_ERROR) {
          errorMsg = message.message;

          return;
        }
      });
    }

    return errorMsg;
  }

  public import() {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        accept: () => {
          // Importing Excel file
          if (this.isEngineering && !!this.fileName && !!this.file.docFile) {
            this.enginerringattributeFormInput.attributeType = this.attributesFormsInput.attributeType;
            const excelInput: ImportAttributeValuesBireInput = {
              fileName: this.fileName,
              excelSource: this.file.docFile,
              attributeId: this.engineeringAttributeId.attributeId,
              bireAttributeDTO: this.enginerringattributeFormInput
            };

            this.attributesFormService.importEnginerringAttributeValue(excelInput).subscribe((result: ReportDTO) => {
              const errorMsg: string | undefined = this.getFirstErrorMessage(result);
              if (errorMsg) {
                this.messageService.showRawErrorMessage(errorMsg);
              } else {
                this.loadEngineeringAttributesData();
                this.messageService.showSuccessMessage(
                  this.getTranslateKey(!!this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
                );
              }
            });
          }
          if (!this.isEngineering && !!this.fileName && !!this.file.docFile) {
            this.fleetattributeFormInput.attributeType = this.attributesFormsInput.attributeType;
            const excelInput: ImportAttributeInput = {
              fileName: this.fileName,
              excelSource: this.file.docFile,
              attributeId: this.fleetAttributeId.attributeId,
              bidoAttributeDTO: this.fleetattributeFormInput
            };

            this.attributesFormService.importFleetAttributeValue(excelInput).subscribe(
              (result: ReportDTO) => {
                const errorMsg: string | undefined = this.getFirstErrorMessage(result);
                if (errorMsg) {
                  this.messageService.showRawErrorMessage(errorMsg);
                } else {
                  this.loadFleetAttributesData();
                  this.messageService.showSuccessMessage(this.getTranslateKey('valuesImported'));
                }
              },
              (err) => {
                // FAILED
                this.messageService.showErrorMessage(err.error.errorDetail);
              }
            );
          }
        }
      });
    }
  }

  private addEditEngineeringData(attributeValue: AttributeValueDTO) {
    if (this.currentEngineeringIndex === -1) {
      this.engineeringTableDataSource.addData([this.addData(attributeValue)]);
      this.engineeringValueList = [...this.engineeringValueList, attributeValue];
    } else {
      this.engineeringTableDataSource.replaceData(
        this.engineeringTableDataSource.dataSelection[0],
        this.addData(attributeValue)
      );
      this.engineeringTableDataSource.dataSelection = [];
      this.engineeringValueList[this.currentEngineeringIndex] = attributeValue;
    }
  }

  private addEditFleetData(attributeValue: AttributeValueDTO) {
    if (this.currentFleetIndex === -1) {
      this.fleetTableDataSource.addData([this.addData(attributeValue)]);
      this.fleetValueList = [...this.fleetValueList, attributeValue];
    } else {
      this.fleetTableDataSource.replaceData(this.fleetTableDataSource.dataSelection[0], this.addData(attributeValue));
      this.fleetValueList[this.currentFleetIndex] = attributeValue;
    }
  }
}
