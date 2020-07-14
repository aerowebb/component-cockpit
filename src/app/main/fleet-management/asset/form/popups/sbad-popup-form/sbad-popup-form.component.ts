import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../../../../../shared/types/api-types/bido-equipment-evolution-input-output-dto.interface';
import { BireEvolutionDTO } from '../../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

import { SbadPopupFormService } from './sbad-popup-form.service';

@Component({
  selector: 'aw-sbad-popup-form',
  templateUrl: './sbad-popup-form.component.html'
})
export class SbadPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public complianceStatus: number;

  @Input()
  public equipmentCode: string;

  @Input()
  public familyVariantCode: string;

  @Input()
  public pnCode: string;

  @Input()
  public sbad: BidoEquipmentEvolutionInputOutputDTO;

  @Input()
  public sn: string;

  @Input()
  public types: SelectItem[];

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onValidated: EventEmitter<BidoEquipmentEvolutionInputOutputDTO>;

  public evolutionTableData: DialogTableData<BireEvolutionDTO>;
  public showEvolutionPopup: boolean;
  public evolutionType: string | undefined;
  public radioStatus: string;

  public constructor(public sbadPopupFormService: SbadPopupFormService, public sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'CreateSbadComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidoEquipmentEvolutionInputOutputDTO>();
    this.showEvolutionPopup = false;
    this.evolutionType = undefined;
    this.radioStatus = 'isFullyApplied';
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.sbad) {
      this.sbad = { bidoEquipmentEvolutionDTO: {} };
    }
    this.setAirwothinessApplication();
  }

  public openEvolutionPopup(): void {
    this.showEvolutionPopup = true;
  }

  // tslint:disable-next-line:no-any
  public setSelectedCode(sbadData: any): void {
    if (!!sbadData && !!sbadData.evolutionType && sbadData.evolutionType === 'EVOL') {
      this.sbad.bidoEquipmentEvolutionDTO.evolutionNumber = sbadData.evolutionNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionRevisionNumber = sbadData.evolutionRevisionNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionType = sbadData.evolutionType;
      this.sbad.designation = sbadData.evolutionSummary;
    }
    if (!!sbadData && !!sbadData.modificationType && sbadData.modificationType === 'MOD') {
      this.sbad.bidoEquipmentEvolutionDTO.evolutionNumber = sbadData.modificationNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionRevisionNumber = sbadData.modificationRevisionNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionType = sbadData.modificationType;
      this.sbad.designation = sbadData.modificationTitle;
    }
    if (!!sbadData && !!sbadData.sbType && sbadData.sbType === 'AD') {
      this.sbad.bidoEquipmentEvolutionDTO.evolutionNumber = sbadData.sbNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionRevisionNumber = sbadData.sbRevisionNumber;
      this.sbad.bidoEquipmentEvolutionDTO.evolutionType = sbadData.sbType;
      this.sbad.designation = sbadData.sbTitle;
    }
  }

  private setAirwothinessApplication(): void {
    if (!!this.sbad) {
      if (this.sbad.bidoEquipmentEvolutionDTO.isPartiallyApplied === true) {
        this.radioStatus = 'isPartiallyApplied';
      }
      if (this.sbad.bidoEquipmentEvolutionDTO.isNotApplicable === true) {
        this.radioStatus = 'isNotApplicable';
      }
    }
  }

  public validate(): void {
    if (this.radioStatus === 'isPartiallyApplied') {
      this.sbad.bidoEquipmentEvolutionDTO.isPartiallyApplied = true;
    } else if (this.radioStatus === 'isNotApplicable') {
      this.sbad.bidoEquipmentEvolutionDTO.isNotApplicable = true;
    } else {
      this.sbad.bidoEquipmentEvolutionDTO.isPartiallyApplied = false;
      this.sbad.bidoEquipmentEvolutionDTO.isNotApplicable = false;
    }
    this.onValidated.emit(this.sbad);
    this.closeDialog();
  }
}
