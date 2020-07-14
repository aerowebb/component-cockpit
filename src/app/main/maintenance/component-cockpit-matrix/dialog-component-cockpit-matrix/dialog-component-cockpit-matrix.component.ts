import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FindPnFromFamilyVariantItem } from '../../../../shared/types/api-input-types/product-structure-management/find-pn-from-family-variant-item.interface';
import { InspectionMatrixOutput } from '../../../../shared/types/api-output-types/inspection-matrix-output.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ComponentCockpitMatrixService } from '../component-cockpit-matrix.service';

@Component({
  selector: 'aw-dialog-component-cockpit-matrix',
  templateUrl: './dialog-component-cockpit-matrix.component.html',
  styleUrls: ['./dialog-component-cockpit-matrix.component.scss']
})
export class DialogComponentCockpitMatrixComponent extends DialogComponent implements OnInit {
  @Input()
  public cockpitMatrix: InspectionMatrixOutput;
  @Output()
  public onUpdate: EventEmitter<InspectionMatrixOutput>;

  public pnList: LabelValue<string>[];
  public showItemTableDialog: boolean;
  public bireItemDTO: BireItemDTO;

  public constructor(public componentCockpitMatrixService: ComponentCockpitMatrixService) {
    super(ComponentOpenMode.Write, 'DialogComponentCockpitMatrixComponent');
    this.onUpdate = new EventEmitter<InspectionMatrixOutput>();
    this.pnList = [];
    this.showItemTableDialog = false;
    this.bireItemDTO = {};
  }

  public ngOnInit() {
    if (!this.cockpitMatrix) {
      this.cockpitMatrix = {};
    }
    this.getPnFromFamilyVariantItem();
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!!this.cockpitMatrix) {
      this.onUpdate.emit(this.cockpitMatrix);
      this.display = false;
    }
  }

  public getPnFromFamilyVariantItem(): void {
    if (this.cockpitMatrix.family && this.cockpitMatrix.variant && this.cockpitMatrix.item) {
      const findPnFromFamilyVariantItem: FindPnFromFamilyVariantItem = {
        family: this.cockpitMatrix.family,
        item: this.cockpitMatrix.item,
        variant: this.cockpitMatrix.variant
      };
      this.componentCockpitMatrixService
        .getPnFromFamilyVariantItem(findPnFromFamilyVariantItem)
        .subscribe((results) => {
          this.pnList = results;
        });
    }
  }

  public openItemTableDialog(): void {
    if (!this.isReadOpenMode) {
      this.showItemTableDialog = true;
    }
  }

  public onSelectedItem(item: BireItemDTO): void {
    if (
      !!item &&
      !!item.chapter &&
      !!item.section &&
      !!item.subject &&
      !!item.sheet &&
      !!item.marks &&
      !!item.structureType
    ) {
      this.cockpitMatrix.family = item.familyCode || '';
      this.cockpitMatrix.variant = item.variantCode || '';
      this.cockpitMatrix.item = `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;
      this.getPnFromFamilyVariantItem();
    } else {
      this.cockpitMatrix.pn = undefined;
    }
  }
}
