import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { BirePackBaseOptionDTO } from '../../../../../../shared/types/api-types/bire-pack-base-option-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { EvolutionDetailDTO } from '../../../../../../shared/types/api-types/evolution-detail-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../item-form.service';

interface EvolutionTableRow {
  evolutionNumber?: string;
  evolutionCompliance?: string;
  mod?: string;
  sb?: string;
  ad?: string;
  applicability?: string;
  _obj?: EvolutionDetailDTO;
}

@Component({
  selector: 'aw-add-evolution-popup',
  templateUrl: './add-evolution-popup.component.html'
})
export class AddEvolutionPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BirePackBaseOptionDTO> | null;

  @Output()
  public onValidated: EventEmitter<EvolutionDetailDTO[]>;

  public birePackBaseOptionDTO: BirePackBaseOptionDTO;
  public evolutionsTableDataSource: TableDataSource<EvolutionTableRow>;
  public isLoading: boolean;

  public constructor(private readonly itemFormService: ItemFormService) {
    super(ComponentOpenMode.Write, 'AddEvolutionPopupComponent');
    this.onValidated = new EventEmitter<EvolutionDetailDTO[]>();
    this.initItemTableData();
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.birePackBaseOptionDTO = this.componentData.object as BirePackBaseOptionDTO;
      } else {
        this.birePackBaseOptionDTO = {};
      }
      this.loadEvolutions();
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    const selectedItems: EvolutionDetailDTO[] = [];

    this.evolutionsTableDataSource.dataSelection.forEach((obj) => {
      if (obj._obj) {
        selectedItems.push(obj._obj);
      }
    });
    this.onValidated.emit(selectedItems);
    this.display = false;
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }

  private loadEvolutions(): void {
    this.evolutionsTableDataSource.setData([]);
    this.isLoading = true;
    const bireVariantVersionDTOId: BireVariantVersionDTOId = {
      familyCode: this.birePackBaseOptionDTO.familyCode || '',
      structureType: this.birePackBaseOptionDTO.structureType || '',
      variantCode: this.birePackBaseOptionDTO.variantCode || ''
    };
    this.itemFormService
      .findBireEvolutionsByFamilyAndVariantCodesItemPack(bireVariantVersionDTOId)
      .subscribe((results) => {
        results.forEach((obj) => {
          const row: EvolutionTableRow = {
            _obj: obj,
            ad: obj.ads,
            applicability: obj.mods_Applicability,
            evolutionCompliance: obj.customizedEvolutionCompliance,
            evolutionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionNumber,
            mod: obj.mods,
            sb: obj.sbs
          };
          this.evolutionsTableDataSource.addData([row]);
        });
        this.isLoading = false;
      });
  }

  private initItemTableData(): void {
    this.evolutionsTableDataSource = new TableDataSource({
      columns: [
        { field: 'evolutionNumber', translateKey: this.getTranslateKey('evolutionNumber') },
        { field: 'evolutionCompliance', translateKey: this.getTranslateKey('evolutionCompliance') },
        { field: 'mod', translateKey: this.getTranslateKey('mod') },
        { field: 'sb', translateKey: this.getTranslateKey('sb') },
        { field: 'ad', translateKey: this.getTranslateKey('ad') },
        { field: 'applicability', translateKey: this.getTranslateKey('applicability') }
      ],
      data: []
    });
  }
}
