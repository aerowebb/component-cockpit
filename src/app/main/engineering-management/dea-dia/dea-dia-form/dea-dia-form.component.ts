import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { TableDataSourceWithHistory } from '../../../../modules/purchase-contract/utils/table-data-source-with-history';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveBireDocPugsInput } from '../../../../shared/types/api-input-types/product-structure-management/save-bire-doc-pugs-input.interface';
import { SaveBirePartUpdateGuidelineInput } from '../../../../shared/types/api-input-types/product-structure-management/save-bire-part-update-guideline-input.interface';
import { BireDocPugDTOId } from '../../../../shared/types/api-output-types/product-structure-management/bire-doc-pug-dto-id.interface';
import { BireDocPugDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-doc-pug-dto.interface';
import { BirePartUpdateGuidelineDTOId } from '../../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto-id.interface';
import { BirePartUpdateGuidelineDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { DeaDiaService } from '../dea-dia.service';

interface BireDocumentRow {
  docName?: string;
  docSource?: string;
  docExtension?: string;
  docSize?: string;
  docPublicationDate?: string;
  docDescription?: string;
  _obj?: BireDocPugDTO;
}
@Component({
  selector: 'aw-dea-dia-form',
  templateUrl: './dea-dia-form.component.html'
})
export class DeaDiaFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public here: string;
  public guideline: BirePartUpdateGuidelineDTO;
  public propertyCompliance: LabelValue<string>[];
  public readonly component: typeof DeaDiaFormComponent;
  public navigationLinkList: MenuItem[];

  // Documents variables
  public documentsTableDataSource: TableDataSourceWithHistory<BireDocumentRow>;
  public showAddDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;
  public partGuidelineTypes: LabelValue<string>[];
  public partGuidelineStatus: LabelValue<string>[];
  private user: BidoUserDTO;
  public isCreator: boolean;
  public isController: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public inputValidationService: InputValidationService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly sessionService: SessionService,
    private readonly deadiaFormService: DeaDiaService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.component = DeaDiaFormComponent;
    this.setNavigationLinkList();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_DEA_DIA_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (this.componentData.objectId) {
        this.guideline = this.serializationService.deserialize(this.componentData.objectId);
        if (this.guideline.pugId && !this.guideline.pugCode) {
          this.loadPartUpdateGuideline();
        }
      }
    }
    this.init();
  }

  private init(): void {
    this.loadUser();
    this.loadPartGuidelineTypes();
    this.loadPartGuidelineStatus();
    this.initDocumentsTableDataSource();
    this.loadBireDocPugs();
  }

  public refresh(): void {
    this.init();
    this.loadPartUpdateGuideline();
  }

  private loadIsCreatorIsController(): void {
    if (this.componentData.openMode === ComponentOpenMode.Create) {
      this.isCreator = true;
    } else if (!!this.user && !!this.guideline) {
      if (this.user.userId === this.guideline.requesterId) {
        this.isCreator = true;
      }
    }

    this.isController = this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_DEA_DIA_CONTROLLER,
      BidoFunctionTypeConstants.DEGREE_UPDATE
    );
  }

  private loadPartGuidelineTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PART_GUIDELINE_TYPE_MAP).subscribe(
      (results) => {
        this.partGuidelineTypes = results;
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnGetPartGuidelineTypes');
      }
    );
  }

  private loadPartGuidelineStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.GUIDELINE_STATUS_MAP).subscribe(
      (results) => {
        this.partGuidelineStatus = results;
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnGetPartGuidelineTypes');
      }
    );
  }

  private loadPartUpdateGuideline(): void {
    const guidelineDTOId: BirePartUpdateGuidelineDTOId = {
      pugId: this.guideline.pugId as number,
      mandant: this.guideline.mandant as string
    };
    this.deadiaFormService
      .findPartUpdateGuidelineById(guidelineDTOId)
      .subscribe((result: BirePartUpdateGuidelineDTOId) => {
        this.guideline = result;
        this.loadIsCreatorIsController();
      });
  }

  private loadUser(): void {
    if (!!this.sessionService.loggedUser) {
      const login = this.sessionService.loggedUser.login;
      this.deadiaFormService.findBidoUserByLogin(login).subscribe((user) => {
        this.user = user;
        this.loadIsCreatorIsController();
      });
    }
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public save(): void {
    this.defaultSaveBehaviour(this.getSaveGuidelineObservable());
    this.saveBireDocPug();
  }

  private defaultSaveBehaviour(obs: Observable<BirePartUpdateGuidelineDTO[]> | undefined) {
    if (!!obs) {
      obs.subscribe((elt) => {
        this.updateOpenMode(ComponentOpenMode.Read);
        if (!ListUtils.isNullOrEmpty(elt)) {
          // ON CREATE
          this.guideline = elt[0];
        }
      });
    }
  }

  public saveBireDocPug(): void {
    const addedList = this.documentsTableDataSource.getAddedList().map((elt) => this.toDocumentDto(elt));
    const updatedList = this.documentsTableDataSource.getUpdatedList().map((elt) => this.toDocumentDto(elt));
    const deletedList = this.documentsTableDataSource.getDeletedList().map((elt) => this.toDocumentDtoId(elt));
    if (
      !ListUtils.isNullOrEmpty(addedList) ||
      !ListUtils.isNullOrEmpty(updatedList) ||
      !ListUtils.isNullOrEmpty(deletedList)
    ) {
      const saveInput: SaveBireDocPugsInput = {
        addedList,
        updatedList,
        deletedList
      };
      this.deadiaFormService.saveBireDocPugs(saveInput).subscribe((elt) => {
        this.documentsTableDataSource.clearHistory();
      });
    }
  }

  public getSaveGuidelineObservable(): Observable<BirePartUpdateGuidelineDTO[]> | undefined {
    if (!!this.guideline.pugType) {
      const guidelineToSave: BirePartUpdateGuidelineDTO = {
        ...this.guideline,
        // requesterId: // set in back
        requesterName: this.guideline.requesterName ? this.guideline.requesterName : this.user.lastname,
        creationDate: this.guideline.creationDate ? this.guideline.creationDate : moment().toDate(),
        pugStatus: this.guideline.pugStatus ? this.guideline.pugStatus : AWPropertiesConstants.DEA_DIA_STATUS_DRAFT
      };
      const saveInput: SaveBirePartUpdateGuidelineInput = {
        addedList: guidelineToSave.pugId ? [] : [guidelineToSave],
        updatedList: guidelineToSave.pugId ? [guidelineToSave] : []
      };

      return this.deadiaFormService.saveBirePartUpdateGuideline(saveInput);
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public transmitToContol(): void {
    this.guideline = {
      ...this.guideline,
      controlTransmissionDate: moment().toDate(),
      pugStatus: AWPropertiesConstants.DEA_DIA_STATUS_PENDING_CONTOL
    };
    this.defaultSaveBehaviour(this.getSaveGuidelineObservable());
  }

  public transmitToCentral(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.guideline = {
      ...this.guideline,
      centralTransmissionDate: moment().toDate(),
      // controllerId: // set in back
      controllerName: this.guideline.controllerName ? this.guideline.controllerName : this.user.lastname
    };
    const saveGuidelineObs = this.getSaveGuidelineObservable();
    if (!!saveGuidelineObs) {
      saveGuidelineObs.subscribe(() => {
        const pugCodeDtoId = { pugCode: this.guideline.pugCode as string };
        this.deadiaFormService.submitDeaDiaToDmae(pugCodeDtoId).subscribe(
          () => {
            this.refresh();
            this.messageService.showSuccessMessage(this.getTranslateKey('succesTransmitToCentral'));
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnTransmitToCentral'));
          }
        );
      });
    }
  }

  public transmitToCentralOnWaitinForInfo(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    const pugCodeDtoId = { pugCode: this.guideline.pugCode as string };
    const saveGuidelineObs = this.getSaveGuidelineObservable();
    if (!!saveGuidelineObs) {
      saveGuidelineObs.subscribe(() => {
        this.deadiaFormService.submitUpdatedDeaDiaToDmae(pugCodeDtoId).subscribe(
          () => {
            this.refresh();
            this.messageService.showSuccessMessage(this.getTranslateKey('succesReturnToCentral'));
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnReturnToCentral'));
          }
        );
      });
    }
  }

  public refuse(): void {
    this.guideline = {
      ...this.guideline,
      pugStatus: AWPropertiesConstants.DEA_DIA_STATUS_REFUSED
    };
    this.defaultSaveBehaviour(this.getSaveGuidelineObservable());
  }

  public close(): void {
    this.guideline = {
      ...this.guideline,
      pugStatus: AWPropertiesConstants.DEA_DIA_STATUS_CLOSED,
      closureDate: moment().toDate()
    };
    this.defaultSaveBehaviour(this.getSaveGuidelineObservable());
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docSource',
          translateKey: this.getTranslateKey('docExternal')
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension')
        },
        {
          field: 'docSize',
          translateKey: this.getTranslateKey('docSize')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
    this.isReadOnlyDocumentDialog = true;
    this.showAddDocumentDialog = false;
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentsTableDataSource.deleteDataSelection();
      }
    });
  }

  public addDocument(): void {
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public onAddDocument(documentDTO: BireDocumentDTO): void {
    const editedOrAddedDocumentRow = this.toDocumentRow(documentDTO);
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.documentsTableDataSource.replaceData(
        this.documentsTableDataSource.dataSelection[0],
        editedOrAddedDocumentRow
      );
    } else {
      this.documentsTableDataSource.addData([editedOrAddedDocumentRow]);
    }
  }

  public editDocument(): void {
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public openDocument(): void {
    this.isReadOnlyDocumentDialog = true;
    this.showAddDocumentDialog = true;
  }

  private toDocumentRow(documentDTO: BireDocPugDTO): BireDocumentRow {
    if (!!documentDTO.bireDocumentDto) {
      return {
        docName: documentDTO.bireDocumentDto.docName as string,
        docSource: documentDTO.bireDocumentDto.docSource,
        docExtension: FileUtils.getExtension(documentDTO.bireDocumentDto.docName).toUpperCase(),
        docSize: !!documentDTO.bireDocumentDto.docFile
          ? FileUtils.getFormattedSize(documentDTO.bireDocumentDto.docFile.length)
          : '',
        docPublicationDate: moment(documentDTO.bireDocumentDto.docPublicationDate).format(
          this._sessionService.dateTimeFormatMomentJS
        ),
        docDescription: documentDTO.bireDocumentDto.docDescription,
        _obj: {
          ...documentDTO,
          pugId: this.guideline.pugId
        }
      };
    } else {
      return {};
    }
  }

  private toDocumentDto(documentRow: BireDocumentRow): BireDocPugDTO {
    return (!!documentRow._obj && documentRow._obj) || {};
  }

  private toDocumentDtoId(documentRow: BireDocumentRow): BireDocPugDTOId {
    const bireDocPugDTOId: BireDocPugDTOId = {
      docCode: (documentRow._obj as BireDocPugDTO).docCode as string,
      pugId: (documentRow._obj as BireDocPugDTO).pugId as number
    };

    return bireDocPugDTOId;
  }

  public downloadFile(document: BireDocumentRow): void {
    if (!!document._obj) {
      FileUtils.downloadFile(
        ((document._obj as BireDocPugDTO).bireDocumentDto as BireDocumentDTO).docFile,
        document.docName
      );
    }
  }

  public loadBireDocPugs(): void {
    const guidelineDTOId: BirePartUpdateGuidelineDTOId = {
      pugId: this.guideline.pugId as number,
      mandant: this.guideline.mandant as string
    };
    this.deadiaFormService.findBireDocPugs(guidelineDTOId).subscribe((elt: BireDocPugDTO[]) => {
      this.documentsTableDataSource.setData(elt.map((bireDocPugDTO) => this.toDocumentRow(bireDocPugDTO)));
    });
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
  }

  public get enableRequesterComment(): boolean {
    let enableRequesterComment = false;
    if (
      !!this.guideline &&
      !!this.guideline.pugStatus &&
      (this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_DRAFT ||
        this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_WAINTING_FOR_FURTHER_INFORMATION ||
        this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_CLOSED_BY_CENTRAL)
    ) {
      enableRequesterComment = true;
    }

    return enableRequesterComment;
  }

  public get enableControllerComment(): boolean {
    let enableControllerComment = false;
    if (
      !!this.guideline &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_PENDING_CONTOL &&
      this.isController
    ) {
      enableControllerComment = true;
    }

    return enableControllerComment;
  }

  public get enablePugTypeSelection(): boolean {
    let enableControllerComment = false;
    if (!!this.guideline && !this.guideline.pugId) {
      enableControllerComment = true;
    }

    return enableControllerComment;
  }

  public get enableTransmitToCentral(): boolean {
    let enableTransmitToCentral = false;
    if (
      !!this.guideline &&
      !!this.guideline.pugCode &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_PENDING_CONTOL &&
      this.isController
    ) {
      enableTransmitToCentral = true;
    }

    return enableTransmitToCentral;
  }

  public get enableTransmitToCentralOnWaitinForInfo(): boolean {
    let enableTransmitToCentralOnWaitinForInfo = false;
    if (
      !!this.guideline &&
      !!this.guideline.pugCode &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_WAINTING_FOR_FURTHER_INFORMATION &&
      this.isCreator
    ) {
      enableTransmitToCentralOnWaitinForInfo = true;
    }

    return enableTransmitToCentralOnWaitinForInfo;
  }

  public get enableRefuse(): boolean {
    return (
      !!this.guideline &&
      !!this.guideline.pugCode &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_PENDING_CONTOL &&
      this.isController
    );
  }

  public get enableClose(): boolean {
    return (
      !!this.guideline &&
      !!this.guideline.pugCode &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_CLOSED_BY_CENTRAL &&
      this.isCreator
    );
  }

  public get enableTransmitToControl(): boolean {
    let enableTransmitToControl = false;
    if (
      !!this.guideline &&
      !!this.guideline.pugCode &&
      !!this.guideline.pugStatus &&
      this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_DRAFT &&
      this.isCreator
    ) {
      enableTransmitToControl = true;
    }

    return enableTransmitToControl;
  }

  public get enableSave(): boolean {
    let enableSave = false;
    if (
      (!!this.guideline &&
        !!this.guideline.pugStatus &&
        this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_DRAFT &&
        (this.isCreator || this.isController)) ||
      (this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_PENDING_CONTOL && this.isController) ||
      (this.guideline.pugStatus === AWPropertiesConstants.DEA_DIA_STATUS_WAINTING_FOR_FURTHER_INFORMATION &&
        (this.isCreator || this.isController))
    ) {
      enableSave = true;
    }

    return enableSave;
  }

  public openPartNumber(pnCode: string): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId: pnCode,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setNavigationLinkList(): void {
    const partNumberLabelKey = this.getTranslateKey('partNumberView');

    this.translateService.get([partNumberLabelKey]).subscribe((results: string[]) => {
      const partNumberViewLabel = results ? results[partNumberLabelKey] : 'Part Number';

      this.navigationLinkList = [
        {
          label: partNumberViewLabel,
          command: () => {
            this.openPartNumber(this.guideline.pnCode as string);
          }
        }
      ];
    });
  }
}
