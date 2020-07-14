import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem, TreeNode } from 'primeng/api';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { GenerateConfigInput } from '../../../../shared/types/api-input-types/product-structure-business/generate-config-input.interface';
import { GeneratePNLinkSchemaInput } from '../../../../shared/types/api-input-types/product-structure-management/generate-pn-link-schema-input.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemPnEvolutionDTO } from '../../../../shared/types/api-types/bire-item-pn-evolution-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ConfigurationDiagramFormService } from './configuration-diagram-form.service';

interface EvolutionRow {
  designation: string;
  evolution: string;
  inConfiguration: boolean;
  _isSelected: boolean;
}

interface PnNode {
  actionType: string;
  code: string;
  evolution: string;
  quantity: string;
  _evolutionNumber?: string;
  _evolutionRevisionNumber?: string;
  _isSelectedByEvolution: boolean;
  _isSelectedByPn: boolean;
}
interface TargetPnRow {
  pn: string;
  quantity: string;
  _isSelected: boolean;
}

@Component({
  selector: 'aw-configuration-diagram-form',
  styleUrls: ['./configuration-diagram-form.component.scss'],
  templateUrl: './configuration-diagram-form.component.html'
})
export class ConfigurationDiagramFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly APPROVAL_DATE_ANCHOR_ID: string = 'approvalDateAnchor';
  public static readonly CONFIGURATION_SIMULATION_ANCHOR_ID: string = 'configurationSimulationAnchor';
  public static readonly PARTS_PROGRESSION_ANCHOR_ID: string = 'partsProgressionAnchor';
  public static readonly PN_AND_EVOLUTION_SELECTION_ANCHOR_ID: string = 'pnAndEvolutionSelectionAnchor';

  public readonly component: typeof ConfigurationDiagramFormComponent;

  public applicabilityDate: Date;
  public evolutionList: SelectItem[];
  public evolutionSelected: PnNode | undefined;
  public evolutionTable: EvolutionRow[];
  public itemDesignation: string;
  public pnLinkListList: TreeNode[][];
  public pnList: SelectItem[];
  public pnSelected: string | undefined;
  public targetPnTable: TargetPnRow[];

  // Evolution table
  public itemEvolutionsCols: TableColumn[];

  // Target P/N table
  public itemTargetPnCols: TableColumn[];

  private actionTypeMap: Map<string, string>;
  private evolutionDataMap: Map<string, { evolutionNumber: string; evolutionRevisionNumber: string }>;
  private item: BireItemDTO;

  // Table of content ***********************************************************

  @ViewChild(ConfigurationDiagramFormComponent.APPROVAL_DATE_ANCHOR_ID)
  public approvalDateEltRef: ElementRef;

  @ViewChild(ConfigurationDiagramFormComponent.CONFIGURATION_SIMULATION_ANCHOR_ID)
  public configurationSimulationEltRef: ElementRef;

  @ViewChild(ConfigurationDiagramFormComponent.PARTS_PROGRESSION_ANCHOR_ID)
  public partsProgressionEltRef: ElementRef;

  @ViewChild(ConfigurationDiagramFormComponent.PN_AND_EVOLUTION_SELECTION_ANCHOR_ID)
  public pnAndEvolutionSelectionEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly configurationDiagramFormService: ConfigurationDiagramFormService,
    private readonly translateService: TranslateService
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

    this.component = ConfigurationDiagramFormComponent;

    this.init();

    this.loadBireActionTypeList();

    super.registerPageTocEntryObservable();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_CONFIGURATION_DIAGRAM_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      this.setTableOfContent();

      this.item = this.serializationService.deserialize(this.componentData.objectId);

      this.setItemDesignation(this.item);
      this.generatePnLinkSchema(this.item);
    }

    this.initTableCols();
  }

  public generateConfiguration(): void {
    const evolutionList = this.evolutionTable
      .filter((row) => row.inConfiguration && this.evolutionDataMap.has(row.evolution))
      .map((row) => {
        const evolutionData = this.evolutionDataMap.get(row.evolution) as {
          evolutionNumber: string;
          evolutionRevisionNumber: string;
        };
        const evolution: BireEvolutionDTO = {
          evolutionNumber: evolutionData.evolutionNumber,
          evolutionRevisionNumber: evolutionData.evolutionRevisionNumber
        };

        return evolution;
      });

    const input: GenerateConfigInput = {
      bireItemData: this.item,
      bireEvolutionDataList: evolutionList,
      bireEvolutionDataAppliedList: undefined,
      atLeastOneInventory: true,
      onlyUnknownInventory: false,
      pnUnknownMode: false
    };
    this.configurationDiagramFormService.generateConfigurationList(input).subscribe((result) => {
      if (result) {
        this.targetPnTable = ListUtils.orEmpty(result.targetDataList).map((elt) => {
          const targetPnRow: TargetPnRow = {
            pn: StringUtils.orEmpty(elt.partNumber),
            quantity: StringUtils.orEmpty(elt.quantity),
            _isSelected: false
          };

          return targetPnRow;
        });
      }
    });
  }

  public onSelectApplicabilityDate(): void {
    this.reload();
  }

  public onSelectEvolution(evolution: string | undefined): void {
    const evolutionSelected = this.evolutionList.find((elt) => elt.value.evolution === evolution);
    this.evolutionSelected = evolutionSelected ? evolutionSelected.value : undefined;

    // Pn schema
    const action = (node: PnNode) => {
      node._isSelectedByEvolution =
        ObjectUtils.isDefined(evolution) && !StringUtils.isNullOrEmpty(node.evolution) && node.evolution === evolution;
    };

    this.pnLinkListList.forEach((pnLinkList) => {
      this.traversePnLinkList(pnLinkList, action);
    });

    // Evolution list
    this.evolutionTable = this.evolutionTable.map((elt) => {
      return {
        designation: elt.designation,
        evolution: elt.evolution,
        inConfiguration: elt.inConfiguration,
        _isSelected: elt.evolution === evolution
      };
    });
  }

  public onSelectPn(): void {
    // Pn schema
    const action = (node: PnNode) => {
      node._isSelectedByPn = ObjectUtils.isDefined(this.pnSelected) && node.code === this.pnSelected;
    };

    this.pnLinkListList.forEach((pnLinkList) => {
      this.traversePnLinkList(pnLinkList, action);
    });

    this.pnLinkListList = [...this.pnLinkListList];

    // Pn list
    this.targetPnTable = this.targetPnTable.map((elt) => {
      return {
        pn: elt.pn,
        quantity: elt.quantity,
        _isSelected: elt.pn === this.pnSelected
      };
    });
  }

  public openAdDialog(event: Event, pnNode: PnNode): void {
    event.preventDefault();
    event.stopPropagation();

    const objectId: BireSbDTOId = {
      sbNumber: pnNode._evolutionNumber as string,
      sbRevisionNumber: pnNode._evolutionRevisionNumber as string
    };
    const labelKey = 'transaction.SbadFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'SbadFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public reload(): void {
    this.applicabilityDate = new Date();
    this.evolutionList = [];
    this.evolutionSelected = undefined;
    this.evolutionTable = [];
    this.itemDesignation = '';
    this.pnLinkListList = [];
    this.pnList = [];
    this.pnSelected = undefined;

    this.generatePnLinkSchema(this.item);
  }

  public resetConfiguration(): void {
    this.evolutionTable = this.evolutionTable.map((row) => {
      const newRow: EvolutionRow = {
        designation: row.designation,
        evolution: row.evolution,
        inConfiguration: false,
        _isSelected: false
      };

      return newRow;
    });

    this.targetPnTable = [];
  }

  public toggleEvolutionHighlight(row: EvolutionRow): void {
    row._isSelected = !row._isSelected;

    this.onSelectEvolution(row._isSelected ? row.evolution : undefined);
  }

  public togglePnHighlight(row: TargetPnRow): void {
    row._isSelected = !row._isSelected;
    this.pnSelected = row._isSelected ? row.pn : undefined;

    this.onSelectPn();
  }

  private createPnLinkSchemaFromRoot(root: BireVersionPnDTO, links: Map<string, BireItemPnEvolutionDTO[]>): void {
    const nodeData: PnNode = this.createPnNodeFromBireVersionDTO(root);
    const nodeChildren: TreeNode[] = ListUtils.orEmpty(
      links[root.pnCode as string] as BireItemPnEvolutionDTO[]
    ).map((nodeChild) => this.createPnNode(nodeChild, links, [nodeData.code]));

    const rootPnNode: TreeNode = {
      data: nodeData,
      children: nodeChildren,
      expanded: nodeChildren.length > 0
    };

    this.pnLinkListList = [...this.pnLinkListList, [rootPnNode]];
  }

  private createPnNode(
    itemPnEvolution: BireItemPnEvolutionDTO,
    links: Map<string, BireItemPnEvolutionDTO[]>,
    lineage: string[]
  ): TreeNode {
    const nodeData: PnNode = this.createPnNodeFromBireItemPnEvolutionDTO(itemPnEvolution);
    const nodeChildren: TreeNode[] = ListUtils.orEmpty(
      links[itemPnEvolution.pnPnCode as string] as BireItemPnEvolutionDTO[]
    )
      .filter((nodeChild) => !lineage.includes(nodeChild.pnCode as string))
      .map((nodeChild) => this.createPnNode(nodeChild, links, [...lineage, nodeData.code]));

    const node: TreeNode = {
      data: nodeData,
      children: nodeChildren,
      expanded: nodeChildren.length > 0
    };

    return node;
  }

  private createPnNodeFromBireItemPnEvolutionDTO(itemPnEvolution: BireItemPnEvolutionDTO): PnNode {
    const actionType = itemPnEvolution.actionTypeCode
      ? StringUtils.orEmpty(this.actionTypeMap.get(itemPnEvolution.actionTypeCode))
      : '';

    const pnNode: PnNode = {
      actionType,
      code: itemPnEvolution.pnPnCode as string,
      evolution: `${itemPnEvolution.evolutionNumber}-${itemPnEvolution.evolutionRevisionNumber}`,
      quantity: itemPnEvolution.quantityAfter || itemPnEvolution.quantityBefore || '',
      _evolutionNumber: itemPnEvolution.evolutionNumber,
      _evolutionRevisionNumber: itemPnEvolution.evolutionRevisionNumber,
      _isSelectedByEvolution: false,
      _isSelectedByPn: false
    };

    if (itemPnEvolution.evolutionNumber && itemPnEvolution.evolutionRevisionNumber) {
      this.evolutionDataMap.set(pnNode.evolution, {
        evolutionNumber: itemPnEvolution.evolutionNumber,
        evolutionRevisionNumber: itemPnEvolution.evolutionRevisionNumber
      });
    }

    return pnNode;
  }

  private createPnNodeFromBireVersionDTO(versionPn: BireVersionPnDTO): PnNode {
    const pnNode: PnNode = {
      actionType: '',
      code: versionPn.pnCode as string,
      evolution: '',
      quantity: StringUtils.orEmpty(versionPn.pnQuantityTci),
      _isSelectedByEvolution: false,
      _isSelectedByPn: false
    };

    return pnNode;
  }

  private generatePnLinkSchema(bireItemDTO: BireItemDTO): void {
    const bireItemLWO: BireItemDTO = {
      chapter: bireItemDTO.chapter,
      familyCode: bireItemDTO.familyCode,
      marks: bireItemDTO.marks,
      section: bireItemDTO.section,
      sheet: bireItemDTO.sheet,
      structureType: bireItemDTO.structureType,
      subject: bireItemDTO.subject,
      variantCode: bireItemDTO.variantCode
    };
    const input: GeneratePNLinkSchemaInput = {
      applicabilityDate: this.applicabilityDate,
      familyCode: bireItemDTO.familyCode as string,
      structureType: bireItemDTO.structureType as string,
      variantCode: bireItemDTO.variantCode as string,
      bireItemDTO: bireItemLWO
    };

    this.configurationDiagramFormService.generatePnLinkSchema(input).subscribe((result) => {
      if (result && result.pnItemPnEvolutionMap && !ListUtils.isNullOrEmpty(result.rootPnList)) {
        (result.rootPnList as BireVersionPnDTO[]).forEach((rootPn) => {
          this.createPnLinkSchemaFromRoot(rootPn, result.pnItemPnEvolutionMap);

          this.setEvolutionList();
          this.setEvolutionTable();
          this.setPnList();
        });
      }
    });
  }

  private init(): void {
    this.actionTypeMap = new Map<string, string>();
    this.applicabilityDate = new Date();
    this.evolutionList = [];
    this.evolutionDataMap = new Map<string, { evolutionNumber: string; evolutionRevisionNumber: string }>();
    this.evolutionSelected = undefined;
    this.evolutionTable = [];
    this.itemEvolutionsCols = [];
    this.itemDesignation = '';
    this.pnLinkListList = [];
    this.pnList = [];
    this.pnSelected = undefined;
    this.itemTargetPnCols = [];
    this.targetPnTable = [];
  }

  private initTableCols(): void {
    this.itemEvolutionsCols = [
      { field: 'evolution', alignment: 'left', width: '50%' },
      { field: 'inConfiguration', alignment: 'left', width: '50%' }
    ];

    this.itemTargetPnCols = [
      { field: 'targetPn', alignment: 'left', width: '50%' },
      { field: 'targetQuantity', alignment: 'left', width: '50%' }
    ];
  }

  private loadBireActionTypeList(): void {
    this.configurationDiagramFormService.findAllBireActionType().subscribe((results) => {
      ListUtils.orEmpty(results)
        .filter((elt) => elt.actionTypeCode)
        .forEach((elt) => {
          this.actionTypeMap.set(elt.actionTypeCode as string, StringUtils.orEmpty(elt.actionTypeName));
        });
    });
  }

  private setEvolutionList(): void {
    const action = (node: PnNode) => {
      if (!StringUtils.isNullOrEmpty(node.evolution)) {
        const isPresent = this.evolutionList.some((elt) => elt.label === node.evolution);

        if (!isPresent) {
          const evolution = {
            label: node.evolution,
            value: node
          };
          this.evolutionList = [...this.evolutionList, evolution];
        }
      }
    };

    this.pnLinkListList.forEach((pnLinkList) => {
      this.traversePnLinkList(pnLinkList, action);
    });

    this.evolutionList.sort((elt1, elt2) => (elt1.label as string).localeCompare(elt2.label as string));
  }

  private setEvolutionTable(): void {
    this.evolutionList.forEach((elt) => {
      const input: BireEvolutionDTOId = {
        evolutionNumber: elt.value._evolutionNumber,
        evolutionRevisionNumber: elt.value._evolutionRevisionNumber
      };
      this.configurationDiagramFormService.findBireEvolution(input).subscribe((result) => {
        const row: EvolutionRow = {
          designation: result ? StringUtils.orEmpty(result.evolutionSummary) : '',
          evolution: `${elt.value._evolutionNumber}-${elt.value._evolutionRevisionNumber}`,
          inConfiguration: false,
          _isSelected: false
        };
        const isPresent = this.evolutionTable.some((evo) => evo.evolution === row.evolution);
        if (!isPresent) {
          this.evolutionTable = [...this.evolutionTable, row];
        }
      });
    });
  }

  private setItemDesignation(item: BireItemDTO): void {
    this.itemDesignation = `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;
    if (!StringUtils.isNullOrEmpty(item.name)) {
      this.itemDesignation = `${this.itemDesignation} / ${item.name}`;
    }

    super.displayComponentContext(this.itemDesignation, false);
  }

  private setPnList(): void {
    const action = (node: PnNode) => {
      if (!StringUtils.isNullOrEmpty(node.code)) {
        const isPresent = this.pnList.some((elt) => elt.label === node.code);

        if (!isPresent) {
          const pn = {
            label: node.code,
            value: node.code
          };
          this.pnList = [...this.pnList, pn];
        }
      }
    };

    this.pnLinkListList.forEach((pnLinkList) => {
      this.traversePnLinkList(pnLinkList, action);
    });

    this.pnList.sort((elt1, elt2) => (elt1.label as string).localeCompare(elt2.label as string));
  }

  private setTableOfContent(): void {
    const approvalDateKey = this.getTranslateKey('approvalDate');
    const configurationSimulationKey = this.getTranslateKey('configurationSimulation');
    const partsProgressionKey = this.getTranslateKey('partsProgression');
    const pnAndEvolutionSelectionKey = this.getTranslateKey('pnAndEvolutionSelection');
    this.translateService
      .get([approvalDateKey, configurationSimulationKey, partsProgressionKey, pnAndEvolutionSelectionKey])
      .subscribe((results) => {
        const approvalDateLabel = !!results ? results[approvalDateKey] : 'Approval Date';
        const configurationSimulationLabel = !!results
          ? results[configurationSimulationKey]
          : 'Configuration Simulation';
        const partsProgressionLabel = !!results ? results[partsProgressionKey] : 'Parts Progression';
        const pnAndEvolutionSelectionLabel = !!results
          ? results[pnAndEvolutionSelectionKey]
          : 'P/N & Evolution Selection';

        this.toc = [
          {
            id: 'approvalDateAnchor',
            anchor: this.approvalDateEltRef,
            label: approvalDateLabel
          },
          {
            id: 'pnAndEvolutionSelectionAnchor',
            anchor: this.pnAndEvolutionSelectionEltRef,
            label: pnAndEvolutionSelectionLabel
          },
          {
            id: 'partsProgressionAnchor',
            anchor: this.partsProgressionEltRef,
            label: partsProgressionLabel
          },
          {
            id: 'configurationSimulationAnchor',
            anchor: this.configurationSimulationEltRef,
            label: configurationSimulationLabel
          }
        ];
        super.selectPageTocEntry(this.component.APPROVAL_DATE_ANCHOR_ID);
      });
  }

  private traversePnLinkList(list: TreeNode[], action: (node: PnNode) => void): void {
    list.forEach((elt) => {
      action(elt.data);

      if (!ListUtils.isNullOrEmpty(elt.children)) {
        this.traversePnLinkList(elt.children as TreeNode[], action);
      }
    });
  }
  public openPartNumberLink(pnCode: string): void {
    this.configurationDiagramFormService.findBireVersionPnsByPnCode(pnCode).subscribe((result) => {
      if (!!result && result.length > 0) {
        this.openItemPartNumber(result[0], ComponentOpenMode.Read);
      }
    });
  }

  public openItemPartNumber(objectId: BireVersionPnDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_PART_NUMBER_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
