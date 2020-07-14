import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';

import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { Chips } from '../../../../../shared/types/chips.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { MaintenancePlanRow } from '../../types/maintenance-plan-row.interface';
import { MaintenancePlanTableCriteria } from '../../types/maintenance-plan-table-criteria.interface';
import { ToolsMaintenancePlanningFormService } from '../tools-maintenance-planning-form.service';

@Component({
  selector: 'aw-dialog-schedule-maintenance-table-full-screen',
  styleUrls: ['./dialog-schedule-maintenance-table-full-screen.component.scss'],
  templateUrl: './dialog-schedule-maintenance-table-full-screen.component.html'
})
export class DialogScheduleMaintenanceTableFullScreenComponent extends DialogComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input('table')
  public maintenancePlanTable: TreeNode[];

  @Input()
  public maintenancePlanTableDisplayedLeafNb: number;

  @Input()
  public maintenancePlanTableLeafNb: number;

  @Input()
  public maintenancePlanTableLoading: boolean;

  @Input()
  public potentialUnitList: MenuItem[];

  @Input()
  public searchAssetList: SelectItem[];

  @Input()
  public searchControlList: SelectItem[];

  @Input()
  public searchCounterList: SelectItem[];

  @Input()
  public searchGlobalFilterChanged: Subject<string>;

  @Input()
  public searchTaskGroupList: SelectItem[];

  @Input()
  public searchTaskList: SelectItem[];

  @Input()
  public searchTypeList: SelectItem[];

  @Input()
  public searchWorkPackageList: SelectItem[];

  @Input()
  public workPackageList: BidmProjectDTO[];

  @Input()
  public workPackageStatusList: LabelValue<string>[];

  @Input()
  public get filterActivatedList(): Chips[] {
    return this._filterActivatedList;
  }
  public set filterActivatedList(value: Chips[]) {
    this._filterActivatedList = value;
    this.filterActivatedListChange.emit(this._filterActivatedList);
  }

  @Input()
  public get filtersVisible(): boolean {
    return this._filtersVisible;
  }
  public set filtersVisible(value: boolean) {
    this._filtersVisible = value;
    this.filtersVisibleChange.emit(this._filtersVisible);
  }

  @Input()
  public get maintenancePlanTableSelectedList(): TreeNode[] {
    return this._maintenancePlanTableSelectedList;
  }
  public set maintenancePlanTableSelectedList(value: TreeNode[]) {
    this._maintenancePlanTableSelectedList = value;
    this.maintenancePlanTableSelectedListChange.emit(this._maintenancePlanTableSelectedList);
  }

  @Input()
  public get potentialUnitSelected(): string {
    return this._potentialUnitSelected;
  }
  public set potentialUnitSelected(value: string) {
    this._potentialUnitSelected = value;
    this.potentialUnitSelectedChange.emit(this._potentialUnitSelected);
  }

  @Input()
  public get searchCriteria(): MaintenancePlanTableCriteria {
    return this._searchCriteria;
  }
  public set searchCriteria(value: MaintenancePlanTableCriteria) {
    this._searchCriteria = value;
    this.searchCriteriaChange.emit(this._searchCriteria);
  }

  @Input()
  public get searchGlobalFilter(): string {
    return this._searchGlobalFilter;
  }
  public set searchGlobalFilter(value: string) {
    this._searchGlobalFilter = value;
    this.searchGlobalFilterChange.emit(this._searchGlobalFilter);
  }

  @Output()
  public onAddToWorkPackage: EventEmitter<BidmProjectDTO>;

  @Output()
  public onCreateWorkPackage: EventEmitter<void>;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onOpenWorkPackage: EventEmitter<MaintenancePlanRow>;

  @Output()
  public onRemoveFromWorkPackage: EventEmitter<void>;

  @Output()
  public onResetFilters: EventEmitter<void>;

  @Output()
  public filterActivatedListChange: EventEmitter<Chips[]>;

  @Output()
  public filtersVisibleChange: EventEmitter<boolean>;

  @Output()
  public maintenancePlanTableSelectedListChange: EventEmitter<TreeNode[]>;

  @Output()
  public potentialUnitSelectedChange: EventEmitter<string>;

  @Output()
  public searchCriteriaChange: EventEmitter<MaintenancePlanTableCriteria>;

  @Output()
  public searchGlobalFilterChange: EventEmitter<string>;

  public maintenancePlanTableColList: TableColumn[];
  public workPackageListToAddVisible: boolean;

  private _filterActivatedList: Chips[];
  private _filtersVisible: boolean;
  private _maintenancePlanTableSelectedList: TreeNode[];
  private _potentialUnitSelected: string;
  private _searchCriteria: MaintenancePlanTableCriteria;
  private _searchGlobalFilter: string;

  public constructor(
    public toolsMaintenancePlanningFormService: ToolsMaintenancePlanningFormService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'DialogScheduleMaintenanceTableFullScreenComponent');

    this.controlConfigConstants = ControlConfigConstants;

    this.init();
    this.initMaintenancePlanTableColList();
  }

  public addToWorkPackage(workPackage: BidmProjectDTO): void {
    this.onAddToWorkPackage.emit(workPackage);
  }

  public createWorkPackage(): void {
    this.onCreateWorkPackage.emit();
  }

  public filter(searchTextValue: string) {
    this.searchGlobalFilterChanged.next(searchTextValue);
  }

  public filterWithCriteria(): void {
    this.onFilter.emit();
  }

  public openWorkPackage(row: MaintenancePlanRow): void {
    this.onOpenWorkPackage.emit(row);
  }

  public removeFromWorkPackage(): void {
    this.onRemoveFromWorkPackage.emit();
  }

  public resetTableFilters(): void {
    this.onResetFilters.emit();
  }

  private init(): void {
    this.workPackageListToAddVisible = false;

    this.onAddToWorkPackage = new EventEmitter<BidmProjectDTO>();
    this.onCreateWorkPackage = new EventEmitter<void>();
    this.onFilter = new EventEmitter<void>();
    this.onOpenWorkPackage = new EventEmitter<MaintenancePlanRow>();
    this.onRemoveFromWorkPackage = new EventEmitter<void>();
    this.onResetFilters = new EventEmitter<void>();

    this.filterActivatedListChange = new EventEmitter<Chips[]>();
    this.filtersVisibleChange = new EventEmitter<boolean>();
    this.maintenancePlanTableSelectedListChange = new EventEmitter<TreeNode[]>();
    this.potentialUnitSelectedChange = new EventEmitter<string>();
    this.searchCriteriaChange = new EventEmitter<MaintenancePlanTableCriteria>();
    this.searchGlobalFilterChange = new EventEmitter<string>();
  }

  private initMaintenancePlanTableColList(): void {
    this.maintenancePlanTableColList = [
      { field: 'alert', alignment: 'center', width: '5rem' },
      { field: 'firstColumn', alignment: 'left', width: '20rem' },
      { field: 'type', alignment: 'left', width: '7.5rem' },
      { field: 'description', alignment: 'left', width: '25rem' },
      { field: 'remainingEquivalent', alignment: 'left', width: '10rem' },
      { field: 'remaining', alignment: 'left', width: '25rem' },
      { field: 'nextWorkPackage', alignment: 'left', width: '10rem' },
      { field: 'nextTerm', alignment: 'left', width: '15rem' },
      { field: 'period', alignment: 'left', width: '10rem' },
      { field: 'status', alignment: 'left', width: '10rem' },
      { field: 'postponement', alignment: 'left', width: '10rem' }
    ];
  }
}
