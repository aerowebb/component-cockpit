import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Subject, forkJoin } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { AirworthinessControlFormComponentInput } from '../../../../main/maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetAtDateInput } from '../../../../shared/types/api-input-types/fleet-business/asset-at-date-input.interface';
import { AssetAtDateOutput } from '../../../../shared/types/api-output-types/fleet-business/asset-at-date-output.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindAllAssetForAirworthinessControlOutput } from '../../../../shared/types/api-output-types/product-structure-management/find-all-asset-for-airworthiness-control-output.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../../../shared/types/api-types/bido-equipment-evolution-input-output-dto.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireModificationDTO } from '../../../../shared/types/api-types/bire-modification-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { AssetAtDateFormService } from './asset-at-date-form.service';

interface ExportDTO {
  type: string;
  code: string;
  sn: string;
  pn: string;
  itemNumber: string;
  function: string;
  designation: string;
  superiorAsset: string;
  owner: string;
  operator: string;
  status: string;
  zone: string;
  country: string;
  lifeRestriction: string;
}

enum Filter {
  Evolutions = 0,
  Measures
}

@Component({
  selector: 'aw-asset-at-date-form',
  templateUrl: './asset-at-date-form.component.html',
  styleUrls: ['./asset-at-date-form.component.scss']
})
export class AssetAtDateFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  public awPropertiesConstants: typeof AWPropertiesConstants;

  public navigationLinkList: MenuItem[];

  public type: string;
  public date: Date;
  public mainData: FindAllAssetForAirworthinessControlOutput;
  public asset: BidoEquipmentDTO;
  public treeStructureLoading: boolean;

  public treeStructure: TreeNode[];
  public treeStructureToDisplay: TreeNode[];
  public selectedStructureNode: TreeNode;
  public ownerList: LabelValue<string>[];
  public operatorList: LabelValue<string>[];

  public showFlContent: boolean;
  public showAssetContent: boolean;

  public readonly filter: typeof Filter;
  public filterList: SelectItem[];
  public selectedFilter: Filter;

  public showEvolutionsTable: boolean;
  public evolutionsTableDataSource: TableDataSource<BidoEquipmentEvolutionInputOutputDTO>;

  public measuresTableDataSource: TableDataSource<FindBidoCounterReferencesByEquipmentCodeOutput>;
  public assetString: string;
  public assetRepresentation?: string;
  public flString: string;

  public dataToExport: ExportDTO[];
  public exportFileName: string;

  public searchItemStructureGlobalFilter: string;
  public searchItemStructureGlobalFilterChanged: Subject<string>;

  public currDate: Date;
  public currYear: number;

  public partiallyApplied?: string;
  public fullyApplied?: string;
  public notApplicable?: string;

  public equipmentNodeNb: number;
  public flNodeNb: number;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly formService: AssetAtDateFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly datePipe: DatePipe,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.currDate = new Date();
    this.awPropertiesConstants = AWPropertiesConstants;
    this.setItemStructureGlobalFilter();
    this.setNavigationLinkList();
    this.init();

    this.translateADApplicationText();
    this.filter = Filter;
    this.setFilterList();
    this.translateKeys();

    this.getOwnerOperatorList();

    this.assetRepresentation = '';
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData && !!this.componentData.objectId) {
      this.type = this.componentData.objectId.split('-----')[0];
      this.mainData = this.serializationService.deserialize(
        this.componentData.objectId.split('-----')[1]
      ) as FindAllAssetForAirworthinessControlOutput;

      // TODO: use function code
      if (this.mainData) {
        let designation: string;
        switch (this.mainData.function) {
          case 'Aircraft':
            designation = StringUtils.orEmpty(this.mainData.registration);
            break;

          case 'Engine':
            designation = StringUtils.orEmpty(this.mainData.snCode);
            break;

          default:
            designation = StringUtils.orEmpty(this.mainData.pnCode);
            if (!StringUtils.isEmpty(designation) && !StringUtils.isNullOrEmpty(this.mainData.snCode)) {
              designation += '/';
            }
            designation += StringUtils.orEmpty(this.mainData.snCode);
            break;
        }

        // this.assetRepresentation = designation;
        this.assetRepresentation = this.mainData.familyVariant;
        if (!!this.mainData.snCode) {
          this.assetRepresentation = `${this.assetRepresentation} | MSN ${this.mainData.snCode}`;
        }
        if (!!this.mainData.registration) {
          this.assetRepresentation = `${this.assetRepresentation} | ${this.mainData.registration}`;
        }
      }

      this.loadAsset();

      this.loadTreeStructure();
    }
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_ASSET_AT_DATE_FORM;
  }

  private init(): void {
    this.setTableCols();
    this.type = '';
    this.date = new Date();

    const radix = 10;
    this.currYear = Number.parseInt(this.datePipe.transform(this.currDate, 'yyyy') as string, radix);

    this.mainData = {
      equipmentCode: '',
      designation: '',
      familyVariant: '',
      function: '',
      pnCode: '',
      registration: '',
      snCode: '',
      status: '',
      warehouse: undefined
    };
    this.showFlContent = false;
    this.showAssetContent = false;
    this.selectedFilter = Filter.Evolutions;
    this.showEvolutionsTable = false;

    this.assetString = '';
    this.flString = '';

    this.partiallyApplied = undefined;
    this.fullyApplied = undefined;
    this.notApplicable = undefined;

    this.ownerList = [];
    this.operatorList = [];

    this.equipmentNodeNb = 0;
    this.flNodeNb = 0;

    this.initOnRefresh();
  }

  private initOnRefresh(): void {
    this.asset = {};
    this.treeStructureLoading = false;
    this.treeStructure = [];
    this.treeStructureToDisplay = [];
    this.selectedStructureNode = {};
    this.dataToExport = [];
    this.exportFileName = '';
    this.searchItemStructureGlobalFilter = '';
  }

  private setTableCols(): void {
    const defaultSortMethod = (
      data1: BidoEquipmentEvolutionInputOutputDTO,
      data2: BidoEquipmentEvolutionInputOutputDTO,
      field: string
    ) => {
      let value1;
      let value2;
      if (field !== 'designation') {
        value1 = data1.bidoEquipmentEvolutionDTO[field];
        value2 = data2.bidoEquipmentEvolutionDTO[field];
      } else {
        value1 = data1[field];
        value2 = data2[field];
      }
      let result: number;

      if (!ObjectUtils.isDefined(value1) && ObjectUtils.isDefined(value2)) {
        result = -1;
      } else if (ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
        result = 1;
      } else if (!ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = JSON.stringify(value1).localeCompare(JSON.stringify(value2));
      }

      return result;
    };
    this.evolutionsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: false,
      columns: [
        { field: 'evolutionNumber', translateKey: this.getTranslateKey('evolutionNumber'), width: '15%' },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          width: '50%'
        },
        { field: 'designation', translateKey: this.getTranslateKey('designation'), width: '20%' },
        { field: 'newApplication', translateKey: this.getTranslateKey('newApplication'), width: '15%' }
      ],
      data: [],
      customSort: defaultSortMethod
    });

    this.measuresTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: false,
      columns: [
        { field: 'counterCode', translateKey: this.getTranslateKey('counterCode'), width: '10%' },
        { field: 'ratingCounterValue', translateKey: this.getTranslateKey('ratingCounterValue'), width: '20%' },
        { field: 'counterUnit', translateKey: this.getTranslateKey('counterUnit'), width: '10%' },
        { field: 'remainingValue', translateKey: this.getTranslateKey('remainingValue'), width: '20%' },
        { field: 'referenceValue', translateKey: this.getTranslateKey('referenceValue'), width: '20%' },
        { field: 'dateText', translateKey: this.getTranslateKey('dateText'), width: '20%' }
      ],
      data: []
    });
  }

  private setFilterList(): void {
    const appliedEvolutions = `${this.getComponentName()}.evolutions`;
    const measures = `${this.getComponentName()}.measures`;

    this.translateService.get([appliedEvolutions, measures]).subscribe((results) => {
      const evolLabel = !!results ? results[appliedEvolutions] : 'Applied Evolutions';
      const measuresLabel = !!results ? results[measures] : 'Measures';

      this.filterList = [
        { label: evolLabel, value: Filter.Evolutions },
        { label: measuresLabel, value: Filter.Measures }
      ];
    });
  }

  private translateKeys(): void {
    const asset = `${this.getComponentName()}.asset`;
    const fl = `${this.getComponentName()}.fl`;
    this.translateService.get([asset, fl]).subscribe((results) => {
      this.assetString = results[asset];
      this.flString = results[fl];
    });
  }

  private setNavigationLinkList(): void {
    const configurationControlKey = this.getTranslateKey('configurationControl');
    this.translateService.get(configurationControlKey).subscribe((result) => {
      const configurationControlLabel = result ? result : 'Applied Configuration Management';

      this.navigationLinkList = [
        {
          label: configurationControlLabel,
          command: () => {
            this.openConfigurationControl();
          }
        }
      ];
    });
  }

  private getOwnerOperatorList(): void {
    const ownerInput: BidoCustomerDTO = {
      isOwner: true,
      isOperator: false
    };
    const operatorInput: BidoCustomerDTO = {
      isOwner: false,
      isOperator: true
    };
    const ownerObservable = this.formService.findBidoCustomersBySearchCriteria(ownerInput);
    const operatorObservable = this.formService.findBidoCustomersBySearchCriteria(operatorInput);

    forkJoin([ownerObservable, operatorObservable]).subscribe((results) => {
      if (!!results[0].list) {
        results[0].list.forEach((res) => {
          if (!!res.customerCode && !!res.customerName) {
            const labelValue: LabelValue<string> = {
              label: res.customerName,
              value: res.customerCode
            };
            this.ownerList.push(labelValue);
          }
        });
      }

      if (!!results[1].list) {
        results[1].list.forEach((res) => {
          if (!!res.customerCode && !!res.customerName) {
            const labelValue: LabelValue<string> = {
              label: res.customerName,
              value: res.customerCode
            };
            this.operatorList.push(labelValue);
          }
        });
      }
    });
  }

  public openConfigurationControl(): void {
    const object: AirworthinessControlFormComponentInput = {
      equipmentCodeList: []
    };
    object.equipmentCodeList.push(this.mainData.equipmentCode);
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(object)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // tslint:disable-next-line: no-any
  public onChangeFilter(event: any): void {
    switch (event.value) {
      case 0:
        {
          this.showEvolutionsTable = true;
          this.evolutionsTableDataSource.setData([]);
          this.getEvolutionsList();
        }
        break;
      case 1:
        {
          this.showEvolutionsTable = false;
          this.measuresTableDataSource.setData([]);
          this.getMeasuresList();
        }
        break;
      default:
        break;
    }
  }

  public get isAssetAircraft(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
    );
  }

  public get isAssetEngine(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    );
  }

  public get isAssetEquipment(): boolean {
    return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.mainData.equipmentCode
    };
    this.formService.getEquipment(input).subscribe((result) => {
      this.asset = result;

      this.setComponentContextForAsset();
    });
  }

  private setComponentContextForAsset(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP).subscribe((result) => {
      if (this.asset) {
        let componentContext: string;

        if (this.isAssetAircraft) {
          const selectedFunction = ListUtils.orEmpty(result).find(
            (elt) => elt.value === (this.asset as BidoEquipmentDTO).equipmentFunction
          );
          const aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
          componentContext = `${aircraftLabel} ${this.asset.registration}`;
        } else {
          componentContext = `${this.asset.equipmentDesignation} / ${this.asset.sn}`;
        }

        this.displayComponentContext(componentContext, this.isCreateOpenMode);
      }
    });
  }

  public loadTreeStructure(): void {
    this.treeStructureLoading = true;
    this.searchItemStructureGlobalFilter = '';

    this.treeStructure = [];
    this.treeStructureToDisplay = [];
    this.selectedStructureNode = {};

    const input: AssetAtDateInput = {
      equipmentCode: this.mainData.equipmentCode
    };

    if (
      (this.datePipe.transform(this.date, 'dd-MM-yyyy') as string) !==
      (this.datePipe.transform(new Date(), 'dd-MM-yyyy') as string)
    ) {
      input.fromDate = this.date;
    }

    this.getTreeStructure(input);
  }

  private getTreeStructure(input: AssetAtDateInput): void {
    this.formService.getTreeStructure(input).subscribe((result) => {
      if (!!result) {
        this.treeStructure.push(this.convertAssetAtDateOutputToTreeNode(result));
      }

      const tree = _cloneDeep(this.treeStructure);
      if (this.type === 'asset') {
        const asset: TreeNode = {};
        asset.data = tree[0].data;
        asset.children = [];
        let assetType = '';
        if (!!this.asset) {
          assetType = this.asset.equipmentFunction as string;
        }

        if (!!assetType && assetType === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY && !!tree[0].children) {
          asset.children.push(tree[0].children[0]);
          asset.children[0].children = [];
        }

        this.treeStructureToDisplay.push(asset);
        this.selectedStructureNode = this.treeStructureToDisplay[0];
      } else {
        this.treeStructureToDisplay = tree;
      }
      this.setSelectableNodes(this.treeStructureToDisplay);
      if (!!this.treeStructureToDisplay[0].data.bidoEquipment) {
        this.selectedStructureNode = this.treeStructureToDisplay[0];
      } else {
        const children = this.treeStructureToDisplay[0].children;
        this.setDefaultSelectedNode(children);
      }
      this.selectedTreeStructureNode();
      this.selectedStructureNode.expanded = true;
      this.treeStructureToDisplay[0].expanded = true;
      this.treeStructureLoading = false;

      const structureList = this.flatTree(this.treeStructureToDisplay);
      this.equipmentNodeNb = structureList.filter((elt) => ObjectUtils.isDefined(elt.bidoEquipment)).length;
      this.flNodeNb = structureList.length - this.equipmentNodeNb;
    });
  }

  private setDefaultSelectedNode(childrenNodes?: TreeNode[]): void {
    const children = childrenNodes;
    let childCounter = 0;
    if (!!children) {
      children.forEach((child) => {
        if (childCounter === 0) {
          if (!!child.data.bidoEquipment) {
            this.selectedStructureNode = child;
            childCounter++;
          } else {
            if (!!child.children) {
              this.setDefaultSelectedNode(child.children);
            }
          }
        }
      });
    }
  }

  private setSelectableNodes(tree: TreeNode[]): void {
    if (!!tree) {
      tree.forEach((node) => {
        if (!!node.data) {
          node.selectable = !!node.data.bidoEquipment ? true : false;
        }
        if (!!node.children) {
          this.setSelectableNodes(node.children);
        }
      });
    }
  }

  // tslint:disable-next-line: no-any
  public calendarEvent(event: any) {
    if (event.data === null) {
      const input: AssetAtDateInput = {
        equipmentCode: this.mainData.equipmentCode
      };

      this.getTreeStructure(input);
    }
  }

  private convertAssetAtDateOutputToTreeNode(data: AssetAtDateOutput): TreeNode {
    const output: TreeNode = {};
    if (!!data.owner) {
      const selectedOwner = this.ownerList.filter((owner) => owner.value === data.owner)[0];
      data.ownerName = !!selectedOwner ? selectedOwner.label : undefined;
    }
    if (!!data.operator) {
      const selectedOperator = this.operatorList.filter((operator) => operator.value === data.operator)[0];
      data.operatorName = !!selectedOperator ? selectedOperator.label : undefined;
    }
    output.data = data;
    output.children = [];
    if (!!data.children && data.children.length > 0) {
      data.children.forEach((asset) => {
        if (!!asset && !!output.children) {
          output.children.push(this.convertAssetAtDateOutputToTreeNode(asset));
        }
      });
    }

    return output;
  }

  public selectedTreeStructureNode(): void {
    if (!!this.selectedStructureNode.data && !!this.selectedStructureNode.data.bidoEquipment) {
      // Asset case
      this.showFlContent = false;
      this.showAssetContent = true;
      this.selectedFilter = Filter.Evolutions;
      this.showEvolutionsTable = true;
      this.getEvolutionsList();
    } else {
      // FL case
      this.showAssetContent = false;
      this.showFlContent = true;
    }
  }

  private getEvolutionsList(): void {
    const input: AssetAtDateInput = {
      equipmentCode: this.selectedStructureNode.data.bidoEquipment.equipmentCode
    };
    this.evolutionsTableDataSource.setData([]);
    this.formService.getAppliedEvolutionsList(input).subscribe((results) => {
      results.forEach((evolution) => {
        evolution.bidoEquipmentEvolutionDTO.newApplication = this.fullyApplied;
        if (
          evolution.bidoEquipmentEvolutionDTO.isPartiallyApplied !== null &&
          evolution.bidoEquipmentEvolutionDTO.isPartiallyApplied !== undefined
        ) {
          evolution.bidoEquipmentEvolutionDTO.newApplication = evolution.bidoEquipmentEvolutionDTO.isPartiallyApplied
            ? this.partiallyApplied
            : this.fullyApplied;
        }
        if (
          evolution.bidoEquipmentEvolutionDTO.isNotApplicable !== null &&
          evolution.bidoEquipmentEvolutionDTO.isNotApplicable !== undefined
        ) {
          evolution.bidoEquipmentEvolutionDTO.newApplication = evolution.bidoEquipmentEvolutionDTO.isNotApplicable
            ? this.notApplicable
            : this.fullyApplied;
        }
      });
      this.evolutionsTableDataSource.addData(results);
    });
  }

  private getMeasuresList(): void {
    const input: AssetAtDateInput = {
      equipmentCode: this.selectedStructureNode.data.bidoEquipment.equipmentCode,
      fromDate: this.date
    };
    this.measuresTableDataSource.setData([]);
    this.formService.getMeasuresList(input).subscribe((results) => {
      results.forEach((result) => {
        if (!!result.counterDate) {
          result.dateText = this.dateService.dateWithHourToString(result.counterDate);
        }
      });
      this.measuresTableDataSource.addData(results);
    });
  }

  public openViewsFromEvolutionNumber(rowData: BidoEquipmentEvolutionInputOutputDTO): void {
    switch (rowData.bidoEquipmentEvolutionDTO.evolutionType) {
      case BidoEvolutionConstants.CODE_EVOLUTION:
        this.goToEvolution(rowData);
        break;
      case BidoEvolutionConstants.CODE_SB:
      case BidoEvolutionConstants.CODE_AD:
        this.goToSB(rowData);
        break;
      case BidoEvolutionConstants.CODE_MODIFICATION:
        this.goToModification(rowData);
        break;
      default:
        break;
    }
  }

  private goToModification(rowData: BidoEquipmentEvolutionInputOutputDTO): void {
    const objectId: BireModificationDTO = {
      modificationNumber: rowData.bidoEquipmentEvolutionDTO.evolutionNumber,
      modificationRevisionNumber: rowData.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
    };
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      objectId: objectId ? this.serializationService.serialize(objectId) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToSB(rowData: BidoEquipmentEvolutionInputOutputDTO): void {
    if (
      !!rowData.bidoEquipmentEvolutionDTO.evolutionNumber &&
      !!rowData.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
    ) {
      const bireSBDTOId: BireSbDTOId = {
        sbNumber: rowData.bidoEquipmentEvolutionDTO.evolutionNumber,
        sbRevisionNumber: rowData.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
      };
      const labelKey = 'transaction.SbadFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'SbadFormComponent',
        objectId: this.serializationService.serialize(bireSBDTOId),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private goToEvolution(rowData: BidoEquipmentEvolutionInputOutputDTO): void {
    if (
      !!rowData.bidoEquipmentEvolutionDTO.equipmentCode &&
      !!rowData.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
    ) {
      const objectId: BireEvolutionDTOId = {
        evolutionNumber: rowData.bidoEquipmentEvolutionDTO.evolutionNumber,
        evolutionRevisionNumber: rowData.bidoEquipmentEvolutionDTO.evolutionRevisionNumber
      };
      const labelKey = 'transaction.EvolutionFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EvolutionFormComponent',
        objectId: this.serializationService.serialize(objectId),
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openFL(): void {
    const objectId: BidoFlDTO = {
      flCode: this.selectedStructureNode.data.code,
      flDescription: this.selectedStructureNode.data.structure
    };
    const labelKey = 'transaction.FunctionalLocationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FunctionalLocationFormComponent',
      objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAsset(): void {
    if (!!this.selectedStructureNode && !!this.selectedStructureNode.data.bidoEquipment) {
      const equipmentFunction = this.selectedStructureNode.data.bidoEquipment.equipmentFunction;
      const equipmentCode = this.selectedStructureNode.data.bidoEquipment.equipmentCode as string;
      switch (equipmentFunction) {
        case AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY:
          this.goToAircraft(equipmentCode, ComponentOpenMode.Read);
          break;
        case AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY:
          this.goToEngine(equipmentCode, ComponentOpenMode.Read);
          break;
        default:
          this.goToEquipment(equipmentCode, ComponentOpenMode.Read);
          break;
      }
    }
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public onReload(): void {
    this.initOnRefresh();
    this.loadAsset();
    this.loadTreeStructure();
    this.clearItemStructureGlobalFilter();
  }

  private convertTreeNodeToExportDTO(tree: TreeNode[], counterList: string[]): void {
    tree.forEach((node) => {
      const nodeData = node.data as AssetAtDateOutput;
      const equipment = nodeData.bidoEquipment as BidoEquipmentDTO | undefined;

      const data: ExportDTO = {
        type: equipment ? this.assetString : this.flString,
        code: StringUtils.orEmpty(nodeData.code),
        sn: StringUtils.orEmpty(nodeData.sn),
        pn: StringUtils.orEmpty(nodeData.pn),
        itemNumber: StringUtils.orEmpty(nodeData.itemNumber),
        function: StringUtils.orEmpty(nodeData.equipmentFunction),
        designation: StringUtils.orEmpty(nodeData.structure),
        superiorAsset: equipment ? StringUtils.orEmpty(equipment.equEquipmentCode) : '',
        owner: StringUtils.orEmpty(nodeData.owner),
        operator: StringUtils.orEmpty(nodeData.operator),
        status: StringUtils.orEmpty(nodeData.status),
        zone: '',
        country: '',
        lifeRestriction: equipment && equipment.lifeRestriction ? 'X' : ''
      };

      counterList.forEach((counter) => {
        const counterValue = nodeData.counterMap[counter];
        if (ObjectUtils.isDefined(counterValue)) {
          data[counter] = counterValue;
        }
      });

      this.dataToExport.push(data);

      if (!!node.children && node.children.length > 0) {
        this.convertTreeNodeToExportDTO(node.children, counterList);
      }
    });
  }

  private setExportFileName(): void {
    const str1 = `${this.getComponentName()}.assetDataExport`;
    let str2: string = !!this.treeStructure[0].children
      ? `${this.treeStructure[0].children[0].data.asset}`
      : `${this.treeStructure[0].data.asset}`;
    str2 = this.concatenateSubStrings(str2.split(' | '));
    str2 = this.concatenateSubStrings(str2.split(' '));
    const str3 = `${this.datePipe.transform(new Date(), 'dd-MM-yyyy_HH')}h${this.datePipe.transform(new Date(), 'mm')}`;
    this.translateService.get(str1).subscribe((res) => {
      this.exportFileName = `${!!res ? res : 'Asset_Data_Export'}_${str2}_${str3}`;
    });
  }

  private concatenateSubStrings(parts: string[]): string {
    let response = '';
    // response = `${parts[0]}`;
    for (let i = 0; i < parts.length; i++) {
      response = i === 0 ? `${parts[i]}` : `${response}_${parts[i]}`;
    }

    return response;
  }

  public onExport(): void {
    this.setExportFileName();
    const partialMessageKey = this.getTranslateKey('openReport');
    this.confirmationService.confirm({
      interpolateParams: { 'openReport.reportName': this.exportFileName },
      messageKey: partialMessageKey,
      accept: () => {
        const structureList = this.flatTree(this.treeStructure);
        const counterList = structureList
          .map((elt) => Object.keys(elt.counterMap))
          .reduce((acc, x) => acc.concat(x), [])
          .filter((v, i, a) => a.indexOf(v) === i);

        const header = [
          'type',
          'code',
          'sn',
          'pn',
          'itemNumber',
          'function',
          'designation',
          'superiorAsset',
          'owner',
          'operator',
          'status',
          'zone',
          'country',
          'lifeRestriction',
          ...counterList
        ];

        this.convertTreeNodeToExportDTO(this.treeStructureToDisplay, counterList);

        this.exportService.toExcel2(
          this.exportFileName,
          this.dataToExport,
          'AssetAtDateFormComponentExport',
          header,
          counterList
        );
      }
    });
  }

  public filterItemStructure(searchTextValue: string) {
    this.searchItemStructureGlobalFilterChanged.next(searchTextValue);
  }

  private clearItemStructureGlobalFilter(): void {
    this.searchItemStructureGlobalFilter = '';
  }

  private setItemStructureGlobalFilter(): void {
    this.clearItemStructureGlobalFilter();
    this.searchItemStructureGlobalFilterChanged = new Subject<string>();
    this.searchItemStructureGlobalFilterChanged
      .pipe(
        debounceTime(AssetAtDateFormComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.updateItemStructureDisplayed(searchTextValue);
      });
  }

  private treeNodeMatchFilters(node: TreeNode, searchText: string | undefined): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.treeNodeMatchFilters(child, searchText));
    }

    // const nodeData = node.data as BireItemDTO;

    // Structure
    const structure = StringUtils.orEmpty(node.data.structure).toLowerCase();
    const structureMatch = StringUtils.isNullOrEmpty(searchText) || structure.includes(searchText as string);

    // PN
    const pnsn =
      !!node.data.pn && !!node.data.sn
        ? `P/N ${node.data.pn} | S/N ${node.data.sn}`
        : !!node.data.pn && (node.data.sn === null || node.data.sn === undefined)
        ? `P/N ${node.data.pn}`
        : !!node.data.sn && node.data.pn === null && node.data.pn === undefined
        ? `S/N ${node.data.sn}`
        : '';
    const pnsnMatch = StringUtils.isNullOrEmpty(searchText) || pnsn.includes(searchText as string);

    return ListUtils.orEmpty(node.children).length > 0 || structureMatch || pnsnMatch;
  }

  private updateItemStructureDisplayed(searchText: string): void {
    this.treeStructureToDisplay = _cloneDeep(this.treeStructure);
    this.treeStructureToDisplay = this.treeStructureToDisplay.filter((elt) =>
      this.treeNodeMatchFilters(elt, !!searchText ? searchText.toLowerCase() : undefined)
    );

    if (this.selectedStructureNode) {
      const selectedItem = this.selectedStructureNode.data;
      const nodeInItemStructureDisplayed = this.findNodeInItemStructureByItem(
        this.treeStructureToDisplay,
        selectedItem
      );
      if (nodeInItemStructureDisplayed) {
        this.selectedStructureNode = nodeInItemStructureDisplayed;
      }
    }
  }

  // tslint:disable-next-line: no-any
  private findNodeInItemStructureByItem(temStructure: TreeNode[] | undefined, item: any): TreeNode | undefined {
    return this.getAllNodeInItemStructure(temStructure).find((elt) => {
      const nodeData = elt.data;

      return (
        nodeData.structure === item.structure &&
        nodeData.pn === item.pn &&
        nodeData.sn === item.sn &&
        nodeData.code === item.code
      );
    });
  }

  private getAllNodeInItemStructure(itemStructure: TreeNode[] | undefined): TreeNode[] {
    let result: TreeNode[] = [];

    if (!ListUtils.isNullOrEmpty(itemStructure)) {
      (itemStructure as TreeNode[]).forEach((node) => {
        result = [...result, node];
        result = [...result, ...this.getAllNodeInItemStructure(node.children)];
      });
    }

    return result;
  }

  public isFlAircraft(fl: BidoFlDTO): boolean {
    return !!fl.flFunction && fl.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isFlEngine(fl: BidoFlDTO): boolean {
    return !!fl.flFunction && fl.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  private translateADApplicationText(): void {
    const partiallyApplied = `CreateSbadComponent.isPartiallyApplied`;
    const notApplicable = `CreateSbadComponent.isNotApplicable`;
    const fullyApplied = `CreateSbadComponent.isFullyApplied`;
    this.translateService.get([partiallyApplied, notApplicable, fullyApplied]).subscribe((results) => {
      this.partiallyApplied = !!results ? results[partiallyApplied] : 'Partially Applied';
      this.notApplicable = !!results ? results[notApplicable] : 'Not Applicable';
      this.fullyApplied = !!results ? results[fullyApplied] : 'Fully Applied';
    });
  }

  public goToAsset(): void {
    switch (this.mainData.function) {
      case 'Aircraft':
        this.goToAircraft(this.mainData.equipmentCode, ComponentOpenMode.Read);
        break;
      case 'Engine':
        this.goToEngine(this.mainData.equipmentCode, ComponentOpenMode.Read);
        break;
      default:
        this.goToEquipment(this.mainData.equipmentCode, ComponentOpenMode.Read);
        break;
    }
  }

  private flatTree(tree: TreeNode[]): AssetAtDateOutput[] {
    let result: AssetAtDateOutput[] = [];

    let queue = _cloneDeep(tree);
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as TreeNode;
      result = [...result, first.data as AssetAtDateOutput];

      queue = [...queue, ...(first.children as TreeNode[])];
    }

    return result;
  }
}
