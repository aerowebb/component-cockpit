import { Component, ElementRef, Input } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { ApplyTaskForFlightInput } from '../../../../../../shared/types/api-input-types/airworthiness-management/apply-task-for-flight-input.interface';
import { CalculatePostFlightRecordsInformationsInput } from '../../../../../../shared/types/api-input-types/fleet-business/calculate-post-flight-records-informations-input.interface';
import { CreateDefectInput } from '../../../../../../shared/types/api-input-types/fleet-business/create-defect-input.interface';
import { AssetRemovedInput } from '../../../../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BireTaskDTOId } from '../../../../../../shared/types/api-types/bire-task-dto-id.interface';
import { DefectLWO } from '../../../../../../shared/types/api-types/defect-lwo.interface';
import { OperationLWO } from '../../../../../../shared/types/api-types/operation-lwo.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

interface DefectRow {
  context: string;
  date: string;
  description: string;
  eventCode: string;
  flightRestriction: string;
  isCritical: boolean;
  lastAuthor: string;
  linkedEventCode: string;
  location: string;
  logNumber: string;
  name: string;
  rootCause: string;
  title: string;
  _obj: DefectLWO;
  _id: string;
}

interface OperationRow {
  comment: string;
  date: string;
  designation: string;
  dmc: string;
  isDone: boolean;
  operation: string;
  _obj: OperationLWO;
  _expand: boolean;
  _id: string;
}

interface RoleEquipmentRow {
  roleEquipment: string;
  _obj: BidoEquipmentDTO;
}

@Component({
  selector: 'aw-post-flight-records',
  templateUrl: './post-flight-records.component.html'
})
export class PostFlightRecordsComponent extends GenericComponent {
  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public defectTable: DefectRow[];
  public defectTableColList: TableColumn[];
  public loading: boolean;
  public postFlightVisitTable: OperationRow[];
  public postFlightVisitTableColList: TableColumn[];
  public postFlightVisitTableSelection: OperationRow | undefined;
  public roleEquipmentTable: RoleEquipmentRow[];
  public roleEquipmentTableColList: TableColumn[];
  public roleEquipmentTableSelectionList: RoleEquipmentRow[];

  public dialogAddDefectVisible: boolean;
  public dialogUpdateTaskAppliactionVisible: boolean;

  private equipment: BidoEquipmentDTO;

  // ****************************************************************************

  public constructor(
    private readonly dateService: DateService,
    private readonly flightFormService: FlightFormService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'PostFlightRecordsComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.defectTable = [];
    this.loading = true;
    this.postFlightVisitTable = [];
    this.postFlightVisitTableSelection = undefined;
    this.roleEquipmentTable = [];
    this.roleEquipmentTableSelectionList = [];

    this.dialogAddDefectVisible = false;
    this.dialogUpdateTaskAppliactionVisible = false;
  }

  public onLoad(equipment: BidoEquipmentDTO, missionCode: string, missionOccurrence: number): void {
    this.equipment = equipment;
    const input: CalculatePostFlightRecordsInformationsInput = {
      equipment,
      missionCode,
      missionOccurrence
    };
    this.flightFormService.calculatePostFlightRecordsInformations(input).subscribe({
      next: (result) => {
        this.defectTable = ListUtils.orEmpty(result.defectList).map((elt) => this.createDefectRow(elt));
        this.postFlightVisitTable = ListUtils.orEmpty(result.operationList).map((elt) => this.createOperationRow(elt));
        this.roleEquipmentTable = ListUtils.orEmpty(result.roleEquipmentList).map((elt) =>
          this.createRoleEquipmentRow(elt)
        );
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private onBeforeLoadOnce(): void {
    this.setDefectTableColList();
    this.setPostFlightVisitTableColList();
    this.setRoleEquipmentTableColList();
  }

  // ****************************************************************************

  public addDefect(): void {
    this.dialogAddDefectVisible = true;
  }

  public isUpdateTaskApplicationButtonVisible(): boolean {
    return (
      ObjectUtils.isDefined(this.postFlightVisitTableSelection) &&
      !StringUtils.isNullOrEmpty((this.postFlightVisitTableSelection as OperationRow)._obj.taskCode) &&
      !(this.postFlightVisitTableSelection as OperationRow).isDone
    );
  }

  public onAddDefect(defectType: string): void {
    const notificationInput: CreateDefectInput = {
      defectType,
      equipment: this.equipment,
      missionInstance: this.missionEquipment.missionInstanceCode as string
    };
    this.flightFormService.createDefect(notificationInput).subscribe((defect) => {
      this.defectTable = [...this.defectTable, this.createDefectRow(defect)];
    });
  }

  public onUpdateTaskApplication(data: { comment: string; date: Date }): void {
    if (ObjectUtils.isDefined(this.postFlightVisitTableSelection)) {
      const selection = this.postFlightVisitTableSelection as OperationRow;
      const input: ApplyTaskForFlightInput = {
        taskId: {
          taskCode: selection._obj.taskCode as string,
          taskVersion: selection._obj.taskVersion as string
        },
        chronoNumber: this.missionEquipment.missionInstanceCode as string,
        comment: data.comment,
        equipmentCode: this.equipment.equipmentCode as string,
        dateTime: data.date
      };
      this.flightFormService.applyTaskForFlight(input).subscribe(() => {
        const selectedRow = this.postFlightVisitTable.find((row) => row._id === selection._id);
        if (selectedRow) {
          selectedRow.comment = data.comment;
          selectedRow.isDone = true;
        }
      });

      this.postFlightVisitTableSelection = undefined;
    }
  }

  public openAssetRow(row: RoleEquipmentRow): void {
    const asset = row._obj;
    const assetCode = asset.equipmentCode as string;

    if (asset.equipmentFunction && asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
      this.openAircraft(assetCode);
    } else if (
      asset.equipmentFunction &&
      asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    ) {
      this.openEngine(assetCode);
    } else {
      this.openEquipment(assetCode);
    }
  }

  public openDefectRow(row: DefectRow): void {
    this.openDefect(row.eventCode);
  }

  public openOperationRow(row: OperationRow): void {
    if (!StringUtils.isNullOrEmpty(row._obj.taskCode) && !StringUtils.isNullOrEmpty(row._obj.taskVersion)) {
      const taskId: BireTaskDTOId = {
        taskCode: row._obj.taskCode as string,
        taskVersion: row._obj.taskVersion as string
      };
      if (row._obj.taskKind === AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_TASK_KEY) {
        this.openTask(taskId);
      } else {
        this.openVisit(taskId);
      }
    } else if (!StringUtils.isNullOrEmpty(row._obj.notificationCode)) {
      this.openDefect(row._obj.notificationCode as string);
    }
  }

  public removeRoleEquipment(): void {
    const row = this.roleEquipmentTableSelectionList[0];
    const objectId: AssetRemovedInput = {
      assetCode: [row._obj.equipmentCode as string],
      date: new Date(),
      superiorAssetCode: row._obj.equipmentCode as string
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: 'RemoveAssetComponent',
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public togglePostFlightVisitTableRowDetailsVisibility(row: OperationRow): void {
    row._expand = !row._expand;
  }

  public updateTaskApplication(): void {
    this.dialogUpdateTaskAppliactionVisible = true;
  }

  private createDefectRow(defect: DefectLWO): DefectRow {
    const row: DefectRow = {
      context: StringUtils.orEmpty(defect.context),
      date: this.dateService.dateToString(defect.date),
      description: StringUtils.orEmpty(defect.description),
      eventCode: StringUtils.orEmpty(defect.eventCode),
      flightRestriction: StringUtils.orEmpty(defect.flightRestriction),
      isCritical: ObjectUtils.isDefined(defect.isCritical) && (defect.isCritical as boolean),
      lastAuthor: StringUtils.orEmpty(defect.lastAuthor),
      linkedEventCode: StringUtils.orEmpty(defect.linkedEventCode),
      location: StringUtils.orEmpty(defect.location),
      logNumber: StringUtils.orEmpty(defect.logNumber),
      name: StringUtils.orEmpty(defect.name),
      rootCause: StringUtils.orEmpty(defect.rootCause),
      title: StringUtils.orEmpty(defect.title),
      _obj: defect,
      _id: StringUtils.orEmpty(defect.eventCode)
    };

    return row;
  }

  private createOperationRow(operation: OperationLWO): OperationRow {
    const row: OperationRow = {
      comment: StringUtils.orEmpty(operation.comment),
      date: this.dateService.dateToString(operation.operationValidity),
      designation: StringUtils.orEmpty(operation.operationDesignation),
      dmc: StringUtils.orEmpty(operation.dmc),
      isDone: ObjectUtils.isDefined(operation.isDone) && (operation.isDone as boolean),
      operation: StringUtils.orEmpty(operation.operation),
      _obj: operation,
      _expand: false,
      _id: StringUtils.orEmpty(operation.id)
    };

    return row;
  }

  private createRoleEquipmentRow(equipment: BidoEquipmentDTO): RoleEquipmentRow {
    const row: RoleEquipmentRow = {
      roleEquipment: BidoEquipmentUtils.createAssetName(equipment),
      _obj: equipment
    };

    return row;
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openDefect(notificationCode: string): void {
    const defectId: BidoNotificationDTOId = {
      notificationCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_DEFECT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(defectId)
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openTask(taskId: BireTaskDTOId): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_TASK_FORM,
      objectId: this.serializationService.serialize(taskId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openVisit(taskId: BireTaskDTOId): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_VISIT_FORM,
      objectId: this.serializationService.serialize(taskId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setDefectTableColList(): void {
    this.defectTableColList = [
      { field: 'eventCode', alignment: 'left', width: '15%' },
      { field: 'date', alignment: 'left', width: '10%' },
      { field: 'isCritical', alignment: 'center', width: '5%' },
      { field: 'flightRestriction', alignment: 'left', width: '10%' },
      { field: 'title', alignment: 'left', width: '20%' },
      { field: 'name', alignment: 'left', width: '10%' },
      { field: 'location', alignment: 'left', width: '10%' },
      { field: 'description', alignment: 'left', width: '20%' }
    ];
  }

  private setPostFlightVisitTableColList(): void {
    this.postFlightVisitTableColList = [
      { field: 'operation', alignment: 'left', width: '20%' },
      { field: 'designation', alignment: 'left', width: '20%' },
      { field: 'dmc', alignment: 'left', width: '20%' },
      { field: 'isDone', alignment: 'center', width: '10%' },
      { field: 'date', alignment: 'left', width: '10%' },
      { field: 'comment', alignment: 'left', width: '20%' }
    ];
  }

  private setRoleEquipmentTableColList(): void {
    this.roleEquipmentTableColList = [{ field: 'roleEquipment', alignment: 'left' }];
  }
}
