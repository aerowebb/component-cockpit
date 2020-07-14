import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { ConfigurationPackListInput } from '../../../../../shared/types/api-input-types/product-structure-management/configuration-pack-list-input.interface';
import { BireConfigurationDTO } from '../../../../../shared/types/api-types/bire-configuration-dto.interface';
import { BireConfigurationPackDTO } from '../../../../../shared/types/api-types/bire-configuration-pack-dto.interface';
import { BireItemVersionDTO } from '../../../../../shared/types/api-types/bire-item-version-dto.interface';
import { BireVersionPnDTO } from '../../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ItemPartNumberService } from '../../form/item-part-number.service';

interface AssociatedPackDTO {
  packName: string;
  associatedList: string[];
}

@Component({
  selector: 'aw-show-packs-popup',
  templateUrl: './show-packs-popup.component.html'
})
export class ShowPacksPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public input: BireConfigurationDTO;

  @Output()
  public onAdd: EventEmitter<BireConfigurationPackDTO[]>;

  @Input()
  public data: BireVersionPnDTO;

  @Input()
  public associatedpackLists: AssociatedPackDTO[];

  public packsDataSource: TableDataSource<BireConfigurationPackDTO>;
  public showAssociatedPackPopup: boolean;

  public constructor(
    private readonly messageaService: MessageService,
    public sessionService: SessionService,
    public itemPartNumberService: ItemPartNumberService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, 'ShowPacksPopupComponent');

    this.onAdd = new EventEmitter<BireConfigurationPackDTO[]>();
  }

  public ngOnInit() {
    this.packsDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [{ field: 'packBaseOptionCode', translateKey: this.getTranslateKey('packBaseOptionCode') }],
      data: []
    });
    this.fetchTableData();
  }

  private fetchTableData() {
    const configurationPackListInput: ConfigurationPackListInput = {
      bireItemVersionDTO: this.data as BireItemVersionDTO,
      configurationCode: this.input.configurationCode
    };
    this.itemPartNumberService
      .findBireConfigurationPacksByItemVersionAndConfigurationCode(configurationPackListInput)
      .subscribe((res) => {
        this.packsDataSource.setData(res);
        this.associatedpackLists.forEach((dto) => {
          if (dto.packName === this.input.configurationCode) {
            dto.associatedList.forEach((row) => {
              this.packsDataSource.addData([
                {
                  configurationCode: dto.packName,
                  packBaseOptionCode: row
                }
              ]);
            });
          }
        });
      });
  }

  public onCancel() {
    this.display = false;
  }

  public addPacksDialog() {
    this.showAssociatedPackPopup = true;
  }

  public onAssociatedPackAdd(ev: string) {
    let isFound = false;
    this.packsDataSource.dataSrc.filter((packs) => {
      if (packs.packBaseOptionCode === ev) {
        isFound = true;
      }
    });

    if (!isFound) {
      this.packsDataSource.addData([
        {
          configurationCode: this.input.configurationCode,
          familyCode: this.input.familyCode,
          structureType: this.input.structureType,
          variantCode: this.input.variantCode,
          chapter: this.input.chapter,
          section: this.input.section,
          subject: this.input.subject,
          sheet: this.input.sheet,
          marks: this.input.marks,
          packBaseOptionCode: ev
        }
      ]);
    } else {
      this.messageaService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
    }
  }

  public onValidate() {
    this.onAdd.emit(this.packsDataSource.dataSrc);
    this.onCancel();
  }

  public deleteSelectedPacks() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedPacks'),
      accept: () => {
        this.packsDataSource.deleteDataSelection();
      }
    });
  }
}
