import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { ComponentConstants } from '../../constants/component-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { BidmProjectService } from '../../services/bidm-project.service';
import { DateService } from '../../services/date.service';
import { PropertiesService } from '../../services/properties.service';
import { SerializationService } from '../../services/serialization.service';
import { TabService } from '../../services/tab.service';
import { BidmProjectDTO } from '../../types/api-types/bidm-project-dto.interface';
import { GenericComponent } from '../../types/generic-component';
import { LabelValue } from '../../types/label-value.interface';
import { PageComponentData } from '../../types/page-component-data.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { WorkPackageListService } from './work-package-list.service';

interface FormattedWorkPackage {
  date: string;
  projectNumber: string;
  status: string;
  tooltip: string;
  _obj: BidmProjectDTO;
}

@Component({
  selector: 'aw-work-package-list',
  styleUrls: ['./work-package-list.component.scss'],
  templateUrl: './work-package-list.component.html'
})
export class WorkPackageListComponent extends GenericComponent {
  @Input()
  public addToVisible: boolean;

  @Input()
  public removeVisible: boolean;

  @Input()
  public workPackageStatusList: LabelValue<string>[];

  @Output()
  public onAddTo: EventEmitter<BidmProjectDTO>;

  @Output()
  public onRemove: EventEmitter<BidmProjectDTO>;

  @Input()
  public get workPackageList(): BidmProjectDTO[] {
    return this._workPackageList;
  }
  public set workPackageList(value: BidmProjectDTO[]) {
    this._workPackageList = value;

    if (!!this.workPackageList) {
      this.formattedWorkPackageList = this.formatWorkPackgeList(this.workPackageList);
    }
  }

  public formattedWorkPackageList: FormattedWorkPackage[];

  private mroCenterList: LabelValue<string>[];
  private typeList: LabelValue<string>[];
  private userList: LabelValue<string>[];
  private _workPackageList: BidmProjectDTO[];

  public constructor(
    private readonly bidmProjectService: BidmProjectService,
    private readonly dateService: DateService,
    private readonly workPackageListService: WorkPackageListService,
    private readonly propertiesService: PropertiesService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(ComponentOpenMode.Write);

    this.init();

    this.loadMroCenterList();
    this.loadTypeList();
    this.loadUserList();
  }

  public getComponentName(): string {
    return 'WorkPackageListComponent';
  }

  public addToWorkPackage(workPackage: FormattedWorkPackage): void {
    this.onAddTo.emit(workPackage._obj);
  }

  public openWorkPackage(workPackage: FormattedWorkPackage): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ wpId: workPackage._obj.projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public removeWorkPackage(workPackage: FormattedWorkPackage): void {
    this.onRemove.emit(workPackage._obj);
  }

  private formatWorkPackgeList(workPackageList: BidmProjectDTO[]): FormattedWorkPackage[] {
    return workPackageList.map((workPackage) => {
      const selectedStatus = this.workPackageStatusList.find((status) => status.value === workPackage.statusState);

      return {
        date: this.dateService.dateToString(workPackage.projectStartDate),
        projectNumber: `WP n° ${workPackage.projectNumber}`,
        status: !!selectedStatus ? selectedStatus.label : '',
        tooltip: this.bidmProjectService.getRepresentationAsHtml(
          workPackage,
          this.mroCenterList,
          this.workPackageStatusList,
          this.typeList,
          this.userList
        ),
        _obj: workPackage
      };
    });
  }

  private init(): void {
    this.addToVisible = false;
    this.removeVisible = false;

    this.formattedWorkPackageList = [];
    this.workPackageStatusList = [];

    this.onAddTo = new EventEmitter<BidmProjectDTO>();
    this.onRemove = new EventEmitter<BidmProjectDTO>();
  }

  private loadMroCenterList(): void {
    this.workPackageListService.findAllMroCenter().subscribe((results) => {
      this.mroCenterList = ListUtils.orEmpty(results);
    });
  }

  private loadTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP).subscribe((results) => {
      this.typeList = ListUtils.orEmpty(results);
    });
  }

  private loadUserList(): void {
    this.workPackageListService
      .findBidoUsersWithUseCase(BidoFunctionTypeConstants.UC_AIRM_RECEPTION)
      .subscribe((results) => {
        this.userList = ListUtils.orEmpty(results)
          .filter((elt) => !StringUtils.isNullOrEmpty(elt.userId))
          .map((result) => {
            const userName = `${StringUtils.orEmpty(result.firstname)} ${StringUtils.orEmpty(result.lastname)}`;

            return {
              label: userName.trim(),
              value: result.userId as string
            };
          });
      });
  }
}
