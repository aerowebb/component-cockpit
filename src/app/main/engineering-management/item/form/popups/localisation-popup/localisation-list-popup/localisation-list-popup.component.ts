import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BireItemDTOId } from '../../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireLocalisationCodeDTO } from '../../../../../../../shared/types/api-types/bire-localisation-code-dto.interface';
import { SearchResultsDTO } from '../../../../../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { ItemFormService } from '../../../item-form.service';

@Component({
  selector: 'aw-localisation-list-popup',
  templateUrl: './localisation-list-popup.component.html'
})
export class LocalisationListPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public onCreate: EventEmitter<BireLocalisationCodeDTO>;

  @Input('versionNumber')
  public versionNumber: string;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  public localisationDataSource: TableDataSource<BireLocalisationCodeDTO>;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'LocalisationListPopupComponent');
    this.onCreate = new EventEmitter<BireLocalisationCodeDTO>();
  }

  public ngOnInit() {
    this.localisationDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'localisationCode',
          translateKey: this.getTranslateKey('localisationCode')
        }
      ],
      data: []
    });
    this.getLocalisationList();
  }

  private getLocalisationList() {
    this.itemFormService
      .findBireLocalisationCodesByCriteria()
      .subscribe((result: SearchResultsDTO<BireLocalisationCodeDTO>) => {
        this.localisationDataSource.setData(result.list);
      });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.localisationDataSource.dataSelection[0]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidDamageIsRequired'));
    }
    this.display = false;
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (!!this.localisationDataSource.dataSelection[0].localisationCode) {
      return true;
    }

    return false;
  }
}
