import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { FunctionObjectConstants } from '../../../../shared/constants/function-object-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveWorkflowManagementInputDTO } from '../../../../shared/types/api-input-types/administration-workflow-management/save-workflow-management-input-dto.interface';
import { BidtScenarioControlGroupCustomDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-control-group-custom-dto.interface';
import { BidtScenarioDataCustomOutputDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-data-custom-output-dto.interface';
import { BidtScenarioProfileGroupDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-profile-group-dto.interface ';
import { BidtScenarioTargetStatusGroupDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-target-status-group-dto.interface';
import { AttributeDTO } from '../../../../shared/types/api-types/attribute-dto.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidtControlGroupDTO } from '../../../../shared/types/api-types/bidt-control-group-dto.interface';
import { BidtScenarioDTO } from '../../../../shared/types/api-types/bidt-scenario-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AttributeField, WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { AttributesSearchService } from '../../attributes/search/attributes-search.service';

import { LabelValueKey, WorkflowManagementFormService } from './workflow-management-form.service';

interface BidtScenarioControlGroupCustomUIDTO {
  bidtControlGroupData?: BidtControlGroupDTO;
  bidtControlGroupId?: number;
  bidtScenarioId?: number;
  isMandatory?: boolean;
  isVisible?: boolean;
  isReadOnly?: boolean;
  isManaged?: boolean;
  groupName?: string;
  description?: string | undefined;
}

@Component({
  selector: 'aw-workflow-management-form',
  styleUrls: ['./workflow-management-form.component.scss'],
  templateUrl: './workflow-management-form.component.html'
})
export class WorkflowManagementFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_DATA_ANCHOR_ID: string = 'mainDataAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';

  public readonly component: typeof WorkflowManagementFormComponent;

  @ViewChild(WorkflowManagementFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(WorkflowManagementFormComponent.MAIN_DATA_ANCHOR_ID)
  public mainDataEltRef: ElementRef;

  public toc: PageTocEntry[];

  // Screen object
  public bidtScenario: BidtScenarioDTO;

  // Table
  public isLoadingData: boolean;

  public targetStatusTableDataSource: TableDataSource<BidtScenarioTargetStatusGroupDTO>;
  public profilesTableDataSource: TableDataSource<BidtScenarioProfileGroupDTO>;
  public controlMgmtTableDataSource: TableDataSource<BidtScenarioControlGroupCustomUIDTO>;
  private forbiddenAttributeControls: BidtScenarioControlGroupCustomUIDTO[];

  // Dropdown
  public functionObjectList: LabelValueKey<string>[];
  public selectedFuncObjectId: string | undefined;
  public statusObjectList: LabelValue<string>[] | undefined;
  public currentStatusObjectListKey: string | undefined;

  // Attributes
  private bireAttributes: BireAttributeDTO[] = [];
  private bidoAttributes: BidoAttributeDTO[] = [];

  public showSaveSpinner: boolean;
  public subtitle: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public translateService: TranslateService,
    private readonly workflowManagementFormService: WorkflowManagementFormService,
    private readonly propertiesService: PropertiesService,
    private readonly attributesSearchService: AttributesSearchService
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
    this.component = WorkflowManagementFormComponent;
    this.initTargetStatusTableDataSource();
    this.initProfilesTableDataSource();
    this.initcontrolMgmtTableDataSource();
    super.registerPageTocEntryObservable();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_WORKFLOW_MANAGEMENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    this.setTableOfContent();
    this.init();
  }

  /*************************************************************************
   * INIT
   *************************************************************************/
  private init() {
    this.selectedFuncObjectId = undefined;
    this.forbiddenAttributeControls = [];
    this.bidtScenario = {};

    this.loadDropdowns();
    this.loadAttributes();
    this.load();
  }

  /*************************************************************************
   * SETTING TABLE OF CONTENTS
   *************************************************************************/
  private setTableOfContent(): void {
    const mainDataKey = 'page.mainData';
    const generalKey = 'global.general';
    this.translateService.get([mainDataKey, generalKey]).subscribe((results: string[]) => {
      const mainDataLabel: string = !!results ? (results[mainDataKey] as string) : 'Main Information';
      const generalLabel: string = !!results ? (results[generalKey] as string) : 'General';

      this.toc = [
        {
          id: 'mainInformationAnchor',
          anchor: this.mainInformationEltRef,
          label: mainDataLabel
        },
        {
          id: 'mainDataAnchor',
          anchor: this.mainDataEltRef,
          label: generalLabel
        }
      ];

      super.selectPageTocEntry(this.component.MAIN_INFORMATION_ANCHOR_ID);
    });
  }

  /*************************************************************************
   * INTI TABLE COLS
   *************************************************************************/
  private initTargetStatusTableDataSource(): void {
    this.targetStatusTableDataSource = new TableDataSource({
      enableSelection: false,
      allowMultiSelect: true,
      columns: [
        {
          field: 'statusName',
          translateKey: this.getTranslateKey('statusName'),
          width: '90%'
        },
        {
          field: 'isAffected',
          translateKey: this.getTranslateKey('isAffected'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initProfilesTableDataSource(): void {
    this.profilesTableDataSource = new TableDataSource({
      enableSelection: false,
      allowMultiSelect: true,
      itemsPerPage: 6,
      columns: [
        {
          field: 'profileName',
          translateKey: this.getTranslateKey('profileName'),
          width: '40%'
        },
        {
          field: 'profileComment',
          translateKey: this.getTranslateKey('profileComment'),
          width: '40%'
        },
        {
          field: 'isAffected',
          translateKey: this.getTranslateKey('isAffected'),
          alignment: ColumnAlignment.CENTER,
          width: '20%'
        }
      ],
      data: []
    });
  }

  private initcontrolMgmtTableDataSource(): void {
    this.controlMgmtTableDataSource = new TableDataSource({
      enableSelection: false,
      allowMultiSelect: false,
      columns: [
        {
          field: 'isManaged',
          translateKey: this.getTranslateKey('isManaged'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        },
        {
          field: 'groupName',
          translateKey: this.getTranslateKey('groupName'),
          width: '60%'
        },
        {
          field: 'isVisible',
          translateKey: this.getTranslateKey('isVisible'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        },
        {
          field: 'isReadOnly',
          translateKey: this.getTranslateKey('isReadOnly'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        },
        {
          field: 'isMandatory',
          translateKey: this.getTranslateKey('isMandatory'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ],
      data: []
    });
  }

  /*************************************************************************
   * SCREEN OPERAIONS
   *************************************************************************/
  public reload() {
    this.init();
  }

  public editScenario() {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancel() {
    this.updateOpenMode(ComponentOpenMode.Read);

    this.reload();
  }

  /*************************************************************************
   * LOAD DROPDOWNS DATA
   *************************************************************************/
  private loadDropdowns() {
    this.workflowManagementFormService.getInternationalizedFuncObject().subscribe(
      (response) => (this.functionObjectList = response),
      (error) => {
        this.messageService.showErrorMessage('global.internalServerError');
      }
    );
  }

  private getFunctionObjectKey(): string | undefined {
    const labelValue =
      this.functionObjectList && this.functionObjectList.find((lv) => lv.value === `${this.selectedFuncObjectId}`);

    return labelValue && labelValue.key;
  }

  private getStatusObjectListKey(): string | undefined {
    return FunctionObjectConstants.getPropertyListKeyByFuncObjKey(this.getFunctionObjectKey());
  }

  private loadStatusList() {
    const propertyListKey = FunctionObjectConstants.getPropertyListKeyByFuncObjKey(this.getFunctionObjectKey());
    if (propertyListKey) {
      this.propertiesService.getValue(propertyListKey).subscribe(
        (results) => {
          this.statusObjectList = [...results];
          this.currentStatusObjectListKey = propertyListKey;
          this.targetStatusTableDataSource.setData(
            this.statusObjectList.map((lv) => ({
              statusName: lv.label,
              statusKey: lv.value,
              isAffected: false
            }))
          );
          this.statusObjectList.unshift({
            value: WorkflowUtils.ALL_STATUS,
            label: this.translateService.instant(this.getTranslateKey('allStatus'))
          });
        },
        (error) => {
          this.messageService.showErrorMessage('global.internalServerError');
        }
      );
    } else {
      this.statusObjectList = undefined;
      this.currentStatusObjectListKey = undefined;
    }
  }

  public showTargetStatusTable(): boolean {
    return !!this.statusObjectList && this.bidtScenario.initialStatusKey !== WorkflowUtils.ALL_STATUS;
  }

  /*************************************************************************
   * LOAD ATTRIBUTES
   *************************************************************************/

  private loadAttributes() {
    forkJoin({
      resultsBire: this.attributesSearchService.getAllEngineeringAttributeList(),
      resultsBido: this.attributesSearchService.getAllFleetAttributeList()
    }).subscribe((results) => {
      if (results) {
        this.bireAttributes = results.resultsBire;
        this.bidoAttributes = results.resultsBido;
        this.fillControlMgmtTable([...this.controlMgmtTableDataSource.dataSrc, ...this.forbiddenAttributeControls]);
      }
    });
  }

  /*************************************************************************
   * LOAD TABLES DATA
   *************************************************************************/
  private load() {
    const bidtScenarioDTO: BidtScenarioDTO = {
      id: undefined
    };
    if (!!this.componentData.objectId) {
      bidtScenarioDTO.id = this.serializationService.deserialize(this.componentData.objectId);
    } else {
      this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
    }

    this.isLoadingData = true;

    this.workflowManagementFormService.searchScenarioByCriteria(bidtScenarioDTO).subscribe(
      (response: BidtScenarioDataCustomOutputDTO) => {
        if (!!response) {
          if (!!response.bidtScenarioDTO) {
            this.bidtScenario = response.bidtScenarioDTO as BidtScenarioDTO;
            this.selectedFuncObjectId = !!this.bidtScenario.bidtFuncObjectId
              ? this.bidtScenario.bidtFuncObjectId.toString()
              : undefined;

            this.loadStatusList();
            this.displayComponentContext(this.bidtScenario.name as string, this.isCreateOpenMode);
            this.subtitle = this.bidtScenario.name as string;
          }

          if (!!response.bidtScenProfileGroupList && response.bidtScenProfileGroupList.length > 0) {
            this.profilesTableDataSource.setData(response.bidtScenProfileGroupList);
            this.profilesTableDataSource.update();
          }

          if (
            ObjectUtils.isDefined(bidtScenarioDTO.id) && // Ignoring target status list in creation mode.
            !!response.bidtScenStatusGroupList &&
            response.bidtScenStatusGroupList.length > 0
          ) {
            this.targetStatusTableDataSource.setData(response.bidtScenStatusGroupList);
            this.targetStatusTableDataSource.update();
          }

          if (!!response.bidtScenarioControlGroupList && response.bidtScenarioControlGroupList.length > 0) {
            this.fillControlMgmtTable(response.bidtScenarioControlGroupList);
          }
        }
        this.profilesTableDataSource.update();
        this.isLoadingData = false;
      },
      (error) => {
        this.messageService.showErrorMessage('global.internalServerError');
        this.isLoadingData = false;
      }
    );
  }

  private fillControlMgmtTable(data: BidtScenarioControlGroupCustomDTO[]) {
    const controlMgmtList: BidtScenarioControlGroupCustomUIDTO[] = data.map((row) => ({
      bidtControlGroupData: row.bidtControlGroupData,
      bidtControlGroupId: row.bidtControlGroupId,
      bidtScenarioId: row.bidtScenarioId,
      description: row.bidtControlGroupData
        ? this.translateControlKey(row.bidtControlGroupData.description)
        : undefined,
      isManaged: !!row.isManaged ? row.isManaged : false,
      isMandatory: !!row.isMandatory ? row.isMandatory : false,
      isReadOnly: !!row.isReadOnly ? row.isReadOnly : false,
      isVisible: !!row.isVisible ? row.isVisible : false,
      groupName: row.bidtControlGroupData ? this.translateControlKey(row.bidtControlGroupData.name) : undefined
    }));

    // Removing lines without name => Attribute unknown or fordidden (by mandant)
    this.forbiddenAttributeControls = controlMgmtList.filter((row) => row.groupName === undefined);

    controlMgmtList.sort((a, b) => {
      if (a.groupName) {
        if (b.groupName) {
          return a.groupName.localeCompare(b.groupName);
        } else {
          return 1;
        }
      } else {
        return -1;
      }
    });
    this.controlMgmtTableDataSource.setData(controlMgmtList.filter((row) => row.groupName !== undefined));
    this.controlMgmtTableDataSource.update();
  }

  private translateControlKey(key: string | undefined): string | undefined {
    let translation: string | undefined;
    if (key) {
      const attibuteField = WorkflowUtils.controlGroupTranslationKeyToAttributeField(key);
      translation = attibuteField
        ? this.translateAttribute(attibuteField)
        : this.translateService.instant(this.getTranslateKey(key));
    }

    return translation;
  }

  private translateAttribute(attributeField: AttributeField): string | undefined {
    let translation: string | undefined;
    let attributes: AttributeDTO[] | undefined;
    if (attributeField.attributeOrigin === WorkflowUtils.ORIGIN_BIRE) {
      attributes = this.bireAttributes;
    } else if (attributeField.attributeOrigin === WorkflowUtils.ORIGIN_BIDO) {
      attributes = this.bidoAttributes;
    }

    if (attributes) {
      const attributeValue: AttributeDTO | undefined = attributes.find(
        (attribute: AttributeDTO) => attribute.attributeId === attributeField.attributeId
      );
      if (attributeValue) {
        translation = this.translateService.instant(
          this.getTranslateKey(`attributeControl.${attributeField.attributeField}`),
          {
            content:
              attributeValue[
                `attribute${StringUtils.firstLetterToUpper(
                  attributeField.attributeField
                )}${StringUtils.firstLetterToUpper(this.translateService.currentLang)}`
              ] || ''
          }
        );
      }
    }

    return translation;
  }

  /*************************************************************************
   * Fetch Control Management Table List
   *************************************************************************/
  public onFuncObjectChange() {
    this.fetchControlMgmtList();

    if (this.getStatusObjectListKey() !== this.currentStatusObjectListKey) {
      if (this.bidtScenario) {
        // Removing status that are not relevant anymore
        this.bidtScenario.initialStatusKey = undefined;
        this.bidtScenario.targetStatusKeyList = undefined;
      }
      this.loadStatusList();
    }
  }

  public fetchControlMgmtList() {
    if (!!this.selectedFuncObjectId) {
      this.bidtScenario.bidtFuncObjectId = parseInt(this.selectedFuncObjectId, 10);
      this.workflowManagementFormService
        .getControlMgmtTableData(this.bidtScenario)
        .subscribe((response: BidtScenarioDataCustomOutputDTO) => {
          if (!!response && !!response.bidtScenarioControlGroupList) {
            this.fillControlMgmtTable(response.bidtScenarioControlGroupList);
          }
        });
    }
  }

  /*************************************************************************
   * SAVE
   *************************************************************************/
  public saveScenario(): void {
    if (this.isScreenValidated()) {
      if (this.isCreateOpenMode) {
        this.bidtScenario.bidtFuncObjectId = parseInt(this.selectedFuncObjectId as string, 10);
        this.bidtScenario.id = undefined;
      }

      const saveWorkflowManagementInputDTO: SaveWorkflowManagementInputDTO = {
        bidtScenarioDataCustomOutputDTO: {
          bidtScenarioDTO: this.bidtScenario,
          bidtScenProfileGroupList: this.profilesTableDataSource.dataSrc,
          bidtScenStatusGroupList: this.targetStatusTableDataSource.dataSrc,
          bidtScenarioControlGroupList: [...this.controlMgmtTableDataSource.dataSrc, ...this.forbiddenAttributeControls]
        },
        isScenarioUpdated: this.openMode === ComponentOpenMode.Create ? false : true
      };

      this.showSaveSpinner = true;
      this.workflowManagementFormService.saveWorkflowManagement(saveWorkflowManagementInputDTO).subscribe(
        (response) => {
          this.showSaveSpinner = false;

          if (this.isCreateOpenMode && !!response) {
            this.componentData.objectId = this.serializationService.serialize(response);
          }

          this.updateOpenMode(ComponentOpenMode.Read);
          this.messageService.showSuccessMessage(this.getTranslateKey('onSaveSuccess'));
          this.reload();
        },
        (error) => {
          this.messageService.showErrorMessage('global.errorOnSave');
          this.showSaveSpinner = false;
        }
      );
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private isScreenValidated(): boolean {
    if (!!this.selectedFuncObjectId && !!this.bidtScenario.name) {
      return true;
    }

    return false;
  }
}
