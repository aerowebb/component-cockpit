import { Component, ElementRef, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidtQualificationConstants } from '../../../../../../shared/constants/bidt-qualification-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidtEmployeeDTO } from '../../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { FlightCrewDTO } from '../../../../../../shared/types/api-types/flight-crew-dto.interface';
import { FlightDTO } from '../../../../../../shared/types/api-types/flight-dto.interface';
import { PersonDTO } from '../../../../../../shared/types/api-types/person-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { BidtEmployeeUtils } from '../../../../../../shared/utils/bidt-employee-utils';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

import { CrewMemberRow } from './types/crew-member-row.interface';

@Component({
  selector: 'aw-flight-crew',
  templateUrl: './crew.component.html'
})
export class CrewComponent extends GenericComponent {
  private static readonly CREW_SEPARATOR: string = ';';

  public copilot: BidtEmployeeDTO | undefined;
  public copilotList: SelectItem[];
  public crewMemberTable: CrewMemberRow[];
  public crewMemberTableSelection: CrewMemberRow | undefined;
  public crewMemberTableLoading: boolean;
  public employeeList: BidtEmployeeDTO[];
  public pilot: BidtEmployeeDTO | undefined;
  public pilotList: SelectItem[];
  public remainingCrewMemberList: SelectItem[];

  public dialogCrewMemberVisible: boolean;

  private crewMemberTableSelectionIndex: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public constructor(public sessionService: SessionService, private readonly flightFormService: FlightFormService) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'CrewComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.copilot = undefined;
    this.copilotList = [];
    this.crewMemberTable = [];
    this.crewMemberTableSelection = undefined;
    this.crewMemberTableSelectionIndex = undefined;
    this.crewMemberTableLoading = false;
    this.employeeList = [];
    this.pilot = undefined;
    this.pilotList = [];
    this.remainingCrewMemberList = [];

    this.dialogCrewMemberVisible = false;
  }

  public onLoad(missionEquipment: BidoMissionEquipmentDTO): void {
    this.loadCopilotData(missionEquipment);
    this.loadCrewData(missionEquipment);
    this.loadPilotData(missionEquipment);
  }

  // ****************************************************************************

  public addCrewMember(): void {
    this.dialogCrewMemberVisible = true;
  }

  public deleteCrewMember(): void {
    this.crewMemberTable = this.crewMemberTable.filter((_, index) => index !== this.crewMemberTableSelectionIndex);
    this.crewMemberTableSelection = undefined;
    this.crewMemberTableSelectionIndex = undefined;

    this.calculateRemainingLoadCategoryList();
  }

  public fillFlight(flight: FlightDTO, missionEquipment: BidoMissionEquipmentDTO): void {
    if (this.sessionService.hrModuleActivated) {
      const crewList: FlightCrewDTO[] = this.crewMemberTable.map((crewMember) =>
        this.createFlightCrew(crewMember._obj, BidtQualificationConstants.CODE_FLIGHT_OPS_FLIGHT_OTHER)
      );
      if (this.copilot) {
        crewList.push(this.createFlightCrew(this.copilot, BidtQualificationConstants.CODE_FLIGHT_OPS_COPILOT));
      }
      if (this.pilot) {
        crewList.push(this.createFlightCrew(this.pilot, BidtQualificationConstants.CODE_FLIGHT_OPS_PILOT));
      }
      flight.flightCrewList = crewList;
    } else {
      flight.flightPilot = missionEquipment.commander;
      flight.flightCopilot = missionEquipment.copilot;
      flight.flightCrew = missionEquipment.crewExtra;
    }
  }

  public onAddedCrewMember(newCrewMember: BidtEmployeeDTO): void {
    this.crewMemberTable = [...this.crewMemberTable, this.createCrewMemberRow(newCrewMember)];

    this.calculateRemainingLoadCategoryList();
  }

  public onSelectcrewMemberTableRow(rowIndex: number): void {
    this.crewMemberTableSelectionIndex = rowIndex;
  }

  public onUnselectcrewMemberTableRow(): void {
    this.crewMemberTableSelectionIndex = undefined;
  }

  private calculateRemainingLoadCategoryList(): void {
    this.remainingCrewMemberList = this.createEmployeeList(
      this.employeeList.filter(
        (employee) => !this.crewMemberTable.some((crewMember) => crewMember._obj.id === employee.id)
      )
    );
  }

  private createCrewMemberRow(crewMember: BidtEmployeeDTO): CrewMemberRow {
    const crewMemberRow: CrewMemberRow = {
      name: BidtEmployeeUtils.format(crewMember),
      _obj: crewMember
    };

    return crewMemberRow;
  }

  private createEmployeeList(employeeList: BidtEmployeeDTO[]): SelectItem[] {
    return employeeList.map((employee) => {
      return {
        label: BidtEmployeeUtils.format(employee),
        value: employee
      };
    });
  }

  private createFlightCrew(employee: BidtEmployeeDTO, position: string): FlightCrewDTO {
    const person: PersonDTO = {
      id: (employee.id as number).toString(),
      firstName: employee.employeeFirstName,
      lastName: employee.employeeLastName,
      email: undefined,
      phoneNumber: undefined,
      actorId: undefined,
      userId: undefined
    };
    const flightCrew: FlightCrewDTO = {
      person,
      position,
      id: (employee.id as number).toString(),
      license: undefined,
      landing: undefined,
      hourDayIfr: undefined,
      hourDayVfr: undefined,
      hourNightIfr: undefined,
      hourNightVfr: undefined
    };

    return flightCrew;
  }

  private loadCopilotData(missionEquipment: BidoMissionEquipmentDTO): void {
    this.flightFormService
      .findAllEmployeeByQualificationCode(BidtQualificationConstants.CODE_FLIGHT_OPS_COPILOT)
      .subscribe((copilotResults) => {
        if (!ListUtils.isNullOrEmpty(copilotResults)) {
          this.copilotList = this.createEmployeeList(copilotResults.filter((elt) => ObjectUtils.isDefined(elt.id)));
          this.copilot = copilotResults.find((elt) => (elt.id as number).toString() === missionEquipment.copilot);
        }
      });
  }

  private loadCrewData(missionEquipment: BidoMissionEquipmentDTO): void {
    this.crewMemberTableLoading = true;
    this.flightFormService
      .findAllEmployeeByQualificationType(AWPropertiesConstants.HR_QUALIFICATION_TYPE_FLIGHT_OPERATIONS)
      .pipe(
        finalize(() => {
          this.crewMemberTableLoading = false;
        })
      )
      .subscribe((crewMemberResults) => {
        this.employeeList = ListUtils.orEmpty(crewMemberResults)
          .filter((elt) => ObjectUtils.isDefined(elt.id))
          .filter((v, i, a) => a.indexOf(v) === i);

        const crew = StringUtils.orEmpty(missionEquipment.crewExtra).split(CrewComponent.CREW_SEPARATOR);
        this.crewMemberTable = this.employeeList
          .filter((elt) => crew.includes((elt.id as number).toString()))
          .map((crewMemberResult) => this.createCrewMemberRow(crewMemberResult));

        this.calculateRemainingLoadCategoryList();
      });
  }

  private loadPilotData(missionEquipment: BidoMissionEquipmentDTO): void {
    this.flightFormService
      .findAllEmployeeByQualificationCode(BidtQualificationConstants.CODE_FLIGHT_OPS_PILOT)
      .subscribe((pilotResults) => {
        if (!ListUtils.isNullOrEmpty(pilotResults)) {
          this.pilotList = this.createEmployeeList(pilotResults.filter((elt) => ObjectUtils.isDefined(elt.id)));
          this.pilot = pilotResults.find((elt) => (elt.id as number).toString() === missionEquipment.commander);
        }
      });
  }
}
