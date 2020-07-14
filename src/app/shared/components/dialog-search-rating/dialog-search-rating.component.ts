import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BireRatingDTO } from '../../../shared/types/api-types/bire-rating-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';

import { DialogSearchRatingService } from './dialog-search-rating.service';

@Component({
  selector: 'aw-dialog-search-rating',
  templateUrl: 'dialog-search-rating.component.html'
})
export class DialogSearchRatingComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: BireRatingDTO[];
  public selectedObject: BireRatingDTO;
  public searchObject: BireRatingDTO;

  @Output()
  public onSelected = new EventEmitter<BireRatingDTO>();

  // VISIBLE INPUT
  @Input('rating-code')
  public set ratingCode(code: string) {
    this.searchObject.ratingCode = code;
  }

  // INVISIBLE INPUT
  @Input('structure-type')
  public set structureType(code: string) {
    this.searchObject.structureType = code;
  }
  @Input('family-code')
  public set familyCode(code: string) {
    this.searchObject.familyCode = code;
  }
  public variantCode?: string;
  @Input('variant-code')
  public set setVariantCode(code: string | undefined) {
    this.variantCode = code;
  }
  public get getVariantCode() {
    return this.variantCode;
  }

  public constructor(
    public dialogSearchRatingService: DialogSearchRatingService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ratingPopin');

    this.selectedObject = {};
    this.resultsTable = [];
    this.searchObject = {};

    this.resultsTableCols = [
      { field: 'ratingCode', alignment: 'left' },
      { field: 'ratingName', alignment: 'left' },
      { field: 'familyCodeStructureType', alignment: 'left' }
    ];
  }

  public ngOnInit(): void {
    this.searchRatings();
  }

  public searchRatings(): void {
    this.dialogSearchRatingService.findBireRatingsBySearchCriteria(this.searchObject, this.variantCode).subscribe(
      (results) => {
        if (results) {
          this.selectedObject = {};
          this.resultsTable = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
  */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.display = false;
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedObject = {};
  }

  // Clean all the object on rerender
  public onShow(): void {
    this.selectedObject = {};
    this.resultsTable = [];
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.selectedObject = {};
    this.resultsTable = [];
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !!this.selectedObject.ratingCode;
  }

  public formatFamilyCodeStructureType(bireRating: BireRatingDTO): string {
    return `${bireRating.familyCode} - ${bireRating.structureType}`;
  }
}
