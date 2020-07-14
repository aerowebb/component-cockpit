import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BireDamageDTO } from '../../../../../../../shared/types/api-types/bire-damage-dto.interface';
import { BireItemDTOId } from '../../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { ItemFormService } from '../../../item-form.service';

@Component({
  selector: 'aw-damage-list-popup',
  templateUrl: './damage-list-popup.component.html'
})
export class DamageListPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public onCreate: EventEmitter<BireDamageDTO>;

  @Input('versionNumber')
  public versionNumber: string;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  public damageListDataSource: TableDataSource<BireDamageDTO>;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'DamageListPopupComponent');
    this.onCreate = new EventEmitter<BireDamageDTO>();
  }

  public ngOnInit() {
    this.damageListDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'damageCode', translateKey: this.getTranslateKey('damageCode'), width: '20%' },
        { field: 'unitCode', translateKey: this.getTranslateKey('unitCode'), width: '10%' },
        { field: 'damageDescription', translateKey: this.getTranslateKey('damageDescription'), width: '70%' }
      ],
      data: [],
      enableSelection: true
    });
    this.getDamageList();
  }

  private getDamageList() {
    this.itemFormService.findBireDamagesByCriteria().subscribe((result: BireDamageDTO[]) => {
      this.damageListDataSource.addData(result);
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.damageListDataSource.dataSelection[0] as BireDamageDTO);
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
    if (!!this.damageListDataSource.dataSelection[0].damageCode) {
      return true;
    }

    return false;
  }
}
