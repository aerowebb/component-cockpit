import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AddReceiptItemInput } from '../../../../../shared/types/api-input-types/logistic/add-receipt-item-input.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { LogisticsService } from '../../../logistics.service';
import { DeliveryFolderSearchService } from '../../delivery-folder-search.service';

@Component({
  selector: 'aw-dialog-add-item',
  templateUrl: './dialog-add-item.component.html',
  styleUrls: ['./dialog-add-item.component.scss']
})
export class DialogAddItemComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';

  public static readonly CURRENT_PACKAGE: string = '0';
  public static readonly NEW_PACKAGE: string = '1';
  public static readonly WWITHOUT_PACKAGE: string = '2';

  public component: typeof DialogAddItemComponent;

  public article: string;
  public choiceListItem: LabelValue<string>[];
  public choiceListPackage: LabelValue<string>[];
  public createWithPackage: boolean;
  public isPackageCodeGenerated: boolean;
  public packageDto: BidtPackageDTO | undefined;
  public pnUse: BirePnDTO;
  public packageList: LabelValue<BidtPackageDTO>[];
  public quantity: number;
  public selectedChoiceItem: string;
  public selectedChoicePackage: string;
  public searchPnDialogVisible: boolean;
  public packagesTypesList: LabelValue<string>[];

  @Input() public deliveryFolder: BidtDeliveryFolderDTO;

  @Input() public packageDtoList: BidtPackageDTO[];

  @Output()
  public onCreate: EventEmitter<BidtDeliveryFolderDTO>;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService,
    public readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogAddItemComponent');
    this.component = DialogAddItemComponent;
    this.onCreate = new EventEmitter<BidtDeliveryFolderDTO>();
    this.init();
  }

  public ngOnInit(): void {
    this.loadDropDowns();
  }

  private loadDropDowns(): void {
    const packageTypes = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_TYPE_MAP);

    forkJoin({ packageTypes }).subscribe({
      next: (results) => {
        this.packagesTypesList = results.packageTypes;
        this.packageList = this.loadPackageList();
        this.getChoiceListItem();
        this.getChoiceListPackage();
      }
    });
  }

  private loadPackageList(): LabelValue<BidtPackageDTO>[] {
    return ListUtils.orEmpty(this.packageDtoList)
      .filter((pack) => !!pack.packageCode)
      .map((bidtPackage: BidtPackageDTO) => {
        const unit: LabelValue<BidtPackageDTO> = {
          label: bidtPackage.packageCode as string,
          value: bidtPackage
        };

        return unit;
      });
  }

  private getChoiceListItem(): void {
    this.choiceListItem = this.deliveryFolderSearchService.loadCreationChoiceList();
    this.selectedChoiceItem = this.choiceListItem && this.choiceListItem.length ? this.choiceListItem[0].value : '';
  }

  private getChoiceListPackage(): void {
    this.choiceListPackage = this.deliveryFolderSearchService.loadCreationChoiceListPackageNumber();
    this.selectedChoicePackage =
      this.choiceListPackage && this.choiceListPackage.length ? this.choiceListPackage[0].value : '';
  }

  public onSelectPn(pn: BirePnDTO): void {
    this.article = pn.pnCode as string;
    this.pnUse = pn;
  }

  public openSearchPnDialog(): void {
    this.searchPnDialogVisible = true;
  }

  public validate() {
    if (this.validateInputs()) {
      // C50
      const input: AddReceiptItemInput = {
        material: this.pnUse,
        packageDto: this.packageDto,
        createWithPackage: this.createWithPackage,
        quantity: this.quantity,
        bidtDeliveryFolder: this.deliveryFolder,
        isPackageCodeGenerated: this.isPackageCodeGenerated
      };

      this.logisticsService.addReceiptItem(input).subscribe((res) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreate'));
        this.onCreate.emit(res);
        this.closeDialog();
      });
    }
  }

  private init(): void {
    this.searchPnDialogVisible = false;
    this.createWithPackage = true;
    this.isPackageCodeGenerated = true;
  }

  private validateInputs(): boolean {
    return !!this.article && this.packageDto !== undefined && !!this.quantity;
  }

  public resetChoiceItem(): void {
    this.changeModeItem();
  }

  private changeModeItem(): void {
    switch (this.selectedChoiceItem) {
      case this.component.CURRENT_PACKAGE:
        this.packageDto = undefined;
        this.createWithPackage = true;
        break;

      case this.component.NEW_PACKAGE:
        this.packageDto = {};
        this.createWithPackage = true;
        break;

      case this.component.WWITHOUT_PACKAGE:
        this.packageDto = {};
        this.createWithPackage = false;
        break;

      default:
        break;
    }
  }

  public resetChoicePackage(): void {
    this.changeModePackage();
  }

  private changeModePackage(): void {
    switch (this.selectedChoicePackage) {
      case this.component.GENERATE:
        this.isPackageCodeGenerated = true;
        break;

      case this.component.ENTER:
        this.isPackageCodeGenerated = false;
        break;

      default:
        break;
    }
  }
}
