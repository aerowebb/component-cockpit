import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireEvolutionDTOId } from '../../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireModificationDTO } from '../../../../../shared/types/api-types/bire-modification-dto.interface';
import { BireSbDTOId } from '../../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../../../shared/types/api-types/bire-sb-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { ConfigurationDocumentsDTO } from '../../../../../shared/types/api-types/configuration-documents-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ApplicableConfigurationFormService } from '../applicable-configuration-form.service';

@Component({
  selector: 'aw-dialog-document-config',
  templateUrl: './dialog-document-config.component.html'
})
export class DialogDocumentConfigComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<Object>;
  @Input()
  public openMode: ComponentOpenMode;
  @Input('component-data')
  public componentData: BireVariantDTO;
  @Input('currentConfigurationDoc')
  public currentConfigurationDoc: ConfigurationDocumentsDTO[];

  public configurationDocumentsDTO: ConfigurationDocumentsDTO; // Excess
  public cloneConfDocumentsDTO: ConfigurationDocumentsDTO | null; // Excess
  public documentList: LabelValue<string>[];
  public modApplicabilityList: LabelValue<string>[];
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public evKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public modKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public bireModificationDTO: BireModificationDTO | null;

  public dialogTableData: DialogTableData<BireSbDTO>;
  public showSbadDialog: boolean;
  public showModificationTypeDialog: boolean;
  public showEvolutionNumberDialog: boolean;
  public document: string;
  public approvalDate: Date | undefined;
  public type: string | undefined;
  public modApplicability: string;
  public numberClone: string;
  public revNumberClone: string;

  public dialogTableDataModificationType: DialogTableData<BireModificationDTO>;
  public dialogTableDataEvolutionNumber: DialogTableData<BireEvolutionDTO>;

  public constructor(
    public sessionService: SessionService,
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogDocumentMatchingComponent');
    this.onValidated = new EventEmitter<Object>();

    this.setKeyMap();
    this.loadDialog();

    this.modApplicabilityList = [];
    this.findAllBireApplicability();
  }

  private findAllBireApplicability(): void {
    this.applicableConfigurationFormService.findAllBireApplicabilitys().subscribe((result) => {
      this.modApplicabilityList = result;
      this.modApplicability = result[0].value;
    });
  }

  // Setting KeyMap for dialogs
  private setKeyMap() {
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('statusState', this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP));
    this.keyMap.set('sbType', this.propertiesService.getValue(GenericPropertyConstants.SB_TYPE_MAP));
    this.keyMap.set('sbCompliance', this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP));
    this.keyMap.set('sbClass', this.propertiesService.getValue(GenericPropertyConstants.SB_CLASSIFICATION_MAP));

    this.evKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.evKeyMap.set('familyFunction', this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP));
    this.evKeyMap.set('evolutionType', this.propertiesService.getValue(GenericPropertyConstants.EVOLUTION_TYPE_MAP));
    this.evKeyMap.set('evolutionCompliance', this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP));
    this.evKeyMap.set('evolutionLevel', this.propertiesService.getValue(GenericPropertyConstants.EVOLUTION_LEVEL_MAP));
    this.evKeyMap.set('structureType', this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP));

    this.modKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.modKeyMap.set('familyFunction', this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP));
    this.modKeyMap.set('structureType', this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP));
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);

    this.showSbadDialog = false;
    this.showModificationTypeDialog = false;
    this.showEvolutionNumberDialog = false;

    this.documentList = [
      { label: 'Airworthiness', value: 'Airworthiness' },
      { label: 'Evolution', value: 'Evolution' },
      { label: 'Modification', value: 'Modification' }
    ];
    this.document = 'Airworthiness';
    this.configurationDocumentsDTO = {};

    if (this.currentConfigurationDoc) {
      this.loadDialogParameters(this.currentConfigurationDoc[0]);
    } else {
      this.currentConfigurationDoc = [];
    }

    if (this.componentData) {
      this.searchEvolutionNumber();
    }
    this.searchModificationType();
  }

  private loadDialogParameters(params) {
    this.configurationDocumentsDTO = { ...params };
    this.cloneConfDocumentsDTO = { ...params };
    this.document = params.documentType;
    this.type = params.type;
    this.approvalDate = new Date(params.approvalDate.toString());
  }

  public changeDocType() {
    if (!!this.configurationDocumentsDTO) {
      this.configurationDocumentsDTO.number = undefined;
      this.configurationDocumentsDTO.revisionNumber = undefined;
      this.type = undefined;
      this.approvalDate = undefined;
    } else {
      super.throwUnboundLocalError('changeDocType', 'this.configurationDocumentsDTO');
    }
  }

  /**
   * for Airworthiness
   */
  public loadDialog() {
    this.dialogTableData = {
      componentId: 'SbadPopupDialog',
      tableRows: this.applicableConfigurationFormService.findBireSbsBySbCriteria(),
      tableCols: [
        { field: 'sbNumber', width: '75px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbRevisionNumber', width: '75px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'statusState', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbType', width: '100px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbCompliance', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbClass', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        {
          field: 'sbPublicationDate',
          width: '100px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'left'
        },
        {
          field: 'sbEffectiveDate',
          width: '100px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'left'
        },
        { field: 'sbDocumentUrl', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbTitle', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
      ],
      exportExcel: true,
      globalFilter: true,
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single
    };
  }

  /**
   * for Modification
   */
  public searchModificationType() {
    if (!this.bireModificationDTO) {
      this.bireModificationDTO = {
        familyCode: this.componentData.familyCode,
        structureType: this.componentData.structureType
      };

      const evolutionTableCols: TableColumn[] = [
        { field: 'familyCode', width: '80px', filterMode: TableColumnFilterMode.Input },
        { field: 'structureType', width: '60px', filterMode: TableColumnFilterMode.Input },
        { field: 'modificationType', width: '80px', filterMode: TableColumnFilterMode.Input },
        { field: 'modificationNumber', width: '80px', filterMode: TableColumnFilterMode.Input },
        { field: 'modificationRevisionNumber', width: '80px', filterMode: TableColumnFilterMode.Input },
        { field: 'modificationDocumentUrl', width: '100px', filterMode: TableColumnFilterMode.Input },
        { field: 'modificationTitle', width: '250px', filterMode: TableColumnFilterMode.Input }
      ];
      const modificationNumber = !!this.bireModificationDTO.modificationNumber
        ? this.bireModificationDTO.modificationNumber
        : '';
      this.dialogTableDataModificationType = {
        componentId: 'ModificationsPopupDialog',
        tableCols: evolutionTableCols,
        tableRows: this.applicableConfigurationFormService.findBireModificationsByModificationPKAndDesignation(
          this.bireModificationDTO,
          modificationNumber
        ),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    }
  }

  /**
   * for Evolution
   */
  public searchEvolutionNumber() {
    const evolutionNumberCol: TableColumn[] = [
      { field: 'evolutionNumber', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'statusState', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', width: '50px', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', width: '200px', filterMode: TableColumnFilterMode.Input }
    ];
    if (!!this.componentData.familyCode && !!this.componentData.structureType) {
      this.dialogTableDataEvolutionNumber = {
        componentId: 'DialogEvolution',
        tableRows: this.applicableConfigurationFormService.findBireEvolutionsByEvolutionCriteria(
          {},
          this.componentData.familyCode,
          this.componentData.structureType,
          ''
        ),
        tableCols: evolutionNumberCol,
        globalFilter: true,
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single
      };
    } else {
      super.throwUnboundLocalError('searchEvolutionNumber', 'this.componentData');
    }
  }

  /**
   * Event on search click
   */
  public openDocumentDialog(): void {
    if (!this.document) {
      return;
    }
    if (!this.isReadOpenMode) {
      if (this.document === 'Airworthiness') {
        this.showSbadDialog = true;
      } else if (this.document === 'Modification') {
        this.showModificationTypeDialog = true;
      } else {
        this.showEvolutionNumberDialog = true;
      }
    }
  }

  // Event after Airworthiness selection
  public setSelectedObject(event: BireSbDTO) {
    this.getTypeNameFromList(
      this.propertiesService.getValue(GenericPropertyConstants.SB_TYPE_MAP),
      event.sbType
    ).subscribe((type) => {
      this.configurationDocumentsDTO.number = event.sbNumber;
      this.configurationDocumentsDTO.revisionNumber = event.sbRevisionNumber;
      this.type = type;
    });
  }

  // Event after Modification selection
  public setSelectedModificationObject(event) {
    this.configurationDocumentsDTO.number = event.modificationNumber;
    this.numberClone = event.modificationNumber;
    this.configurationDocumentsDTO.revisionNumber = event.modificationRevisionNumber;
    this.revNumberClone = event.modificationRevisionNumber;

    this.type = event.modificationType;
    this.bireModificationDTO = event;
  }

  // Event after Evolution selection
  public setSelectedEvolutionObject(event: BireEvolutionDTO) {
    this.getTypeNameFromList(
      this.propertiesService.getValue(GenericPropertyConstants.EVOLUTION_TYPE_MAP),
      event.evolutionType
    ).subscribe((type) => {
      this.configurationDocumentsDTO.number = event.evolutionNumber;
      this.configurationDocumentsDTO.revisionNumber = event.evolutionRevisionNumber;
      this.type = type;
    });
  }

  private getTypeNameFromList(
    observable: Observable<LabelValue<string>[]>,
    typeCode: string | undefined
  ): Observable<string> {
    return observable.pipe(
      map((list) => {
        const matchingElt = list.find((elt) => elt.value === typeCode);

        return matchingElt ? matchingElt.label : '';
      })
    );
  }

  public cancel(): void {
    this.display = false;
  }

  // Validating
  public validate(): void {
    if (
      !!this.configurationDocumentsDTO &&
      this.document &&
      this.configurationDocumentsDTO.number &&
      this.configurationDocumentsDTO.revisionNumber
    ) {
      // Validate if Modification Doc Type Exist
      if (this.document === 'Modification') {
        if (!this.type) {
          this.messageService.showErrorMessage('Modification does not exist');

          return;
        } else if (
          this.type &&
          (this.numberClone !== this.configurationDocumentsDTO.number ||
            this.revNumberClone !== this.configurationDocumentsDTO.revisionNumber)
        ) {
          this.messageService.showErrorMessage('Modification does not exist');

          return;
        } else {
          this.emitData();
        }
      }

      // Validate if Airworthiness Doc Type Exist
      if (this.document === 'Airworthiness') {
        const bireSbDTOId: BireSbDTOId = {
          sbNumber: this.configurationDocumentsDTO.number,
          sbRevisionNumber: this.configurationDocumentsDTO.revisionNumber
        };

        this.applicableConfigurationFormService.findBireSb(bireSbDTOId).subscribe(
          (response) => {
            if (response.sbNumber) {
              this.emitData();
            }
          },
          () => {
            this.messageService.showErrorMessage('Sb does not exist');

            return;
          }
        );
      }

      // Validate if Evolution Doc Type Exist
      if (this.document === 'Evolution') {
        const evolution: BireEvolutionDTOId = {
          evolutionNumber: this.configurationDocumentsDTO.number,
          evolutionRevisionNumber: this.configurationDocumentsDTO.revisionNumber
        };

        this.applicableConfigurationFormService.findBireEvolution(evolution).subscribe(
          (response) => {
            if (response.evolutionNumber) {
              this.emitData();
            }
          },
          () => {
            this.messageService.showErrorMessage('Evolution does not exist');

            return;
          }
        );
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');

      return;
    }
  }

  private emitData() {
    if (!!this.configurationDocumentsDTO) {
      const configDTO: ConfigurationDocumentsDTO = {
        number: this.configurationDocumentsDTO.number,
        revisionNumber: this.configurationDocumentsDTO.revisionNumber,
        type: this.type,
        approvalDate: this.approvalDate,
        applicabilityCode: this.document === 'Modification' ? this.modApplicability : '',
        documentType: this.document,
        familyCode: this.componentData.familyCode,
        structureType: this.componentData.structureType,
        variantCode: this.componentData.variantCode
      };

      const WRITE_MODE = 2;
      const CREATE_MODE = 0;
      // TODO : CHECK THIS CODE, done as edit mode does not work in case number or rev number is changed
      if (
        this.openMode === WRITE_MODE &&
        !!this.cloneConfDocumentsDTO &&
        !!this.configurationDocumentsDTO &&
        this.cloneConfDocumentsDTO.documentType === this.configurationDocumentsDTO.documentType &&
        this.cloneConfDocumentsDTO.number === this.configurationDocumentsDTO.number &&
        this.cloneConfDocumentsDTO.revisionNumber === this.configurationDocumentsDTO.revisionNumber
      ) {
        this.onValidated.emit(configDTO);
      } else if (this.openMode === CREATE_MODE) {
        this.onValidated.emit(configDTO);
      }
      this.cancel();
    } else {
      super.throwUnboundLocalError('emitData', 'this.configurationDocumentDTO');
    }
  }
}
