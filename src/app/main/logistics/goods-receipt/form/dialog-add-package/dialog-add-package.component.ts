import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { AddReceiptPackageInput } from '../../../../../shared/types/api-input-types/logistic/add-receipt-package-input.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { LogisticsService } from '../../../logistics.service';
import { DeliveryFolderSearchService } from '../../delivery-folder-search.service';

@Component({
  selector: 'aw-dialog-add-package',
  styleUrls: ['./dialog-add-package.component.scss'],
  templateUrl: './dialog-add-package.component.html'
})
export class DialogAddPackageComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';

  @Input()
  public bidtDeliveryFolder: BidtDeliveryFolderDTO;

  public packageNumber: string;
  public searchPnDialogVisible: boolean;
  public article: string;
  public pnUse: BirePnDTO;
  public quantity: number;
  public choiceList: LabelValue<string>[];
  public selectedChoice: string;
  public isGenerated: boolean;
  public unitOfIssueOptions: LabelValue<string>[];
  public packagesTypesList: LabelValue<string>[];
  public selectedPackageType: string;

  public component: typeof DialogAddPackageComponent;

  @Output()
  public onCreate: EventEmitter<BidtPackageDTO>;

  public constructor(
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogAddPackageComponent');
    this.searchPnDialogVisible = false;
    this.isGenerated = true;
    this.component = DialogAddPackageComponent;
    this.onCreate = new EventEmitter<BidtPackageDTO>();
    this.loadUnitOfIssueOptions();
  }

  public isFormValid(): boolean {
    return ObjectUtils.isDefined(this.quantity) && ObjectUtils.isDefined(this.pnUse);
  }

  public validate() {
    if (this.validateInputs()) {
      const input: AddReceiptPackageInput = {
        packageCode: this.packageNumber,
        bidtDeliveryFolder: this.bidtDeliveryFolder,
        material: this.pnUse,
        quantity: this.quantity,
        isGenerated: this.isGenerated,
        packageType: this.selectedPackageType
      };

      this.logisticsService.addReceiptPackage(input).subscribe((res) => {
        this.messageService.showSuccessMessage('DialogAddPackageComponent.packageCreateSucces');
        this.onCreate.emit(res);
        this.closeDialog();
      });
    }
  }

  public ngOnInit(): void {
    this.loadDropDowns();
  }

  private loadDropDowns(): void {
    const packageTypes = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_TYPE_MAP);

    forkJoin({ packageTypes }).subscribe({
      next: (results) => {
        this.packagesTypesList = results.packageTypes;
        this.choiceList = this.deliveryFolderSearchService.loadCreationChoiceListPackage();
        this.selectedChoice = this.choiceList && this.choiceList.length ? this.choiceList[0].value : '';
      }
    });
  }

  private validateInputs(): boolean {
    if (this.isGenerated) {
      return !!this.pnUse && !!this.quantity;
    } else {
      return !!this.pnUse && ObjectUtils.isDefined(this.packageNumber) && !!this.quantity;
    }
  }

  public onSelectPn(pn: BirePnDTO): void {
    this.article = pn.pnCode as string;
    this.pnUse = pn;
  }

  public openSearchPnDialog(): void {
    this.searchPnDialogVisible = true;
  }

  public resetChoice(): void {
    this.changeMode();
  }

  private changeMode(): void {
    switch (this.selectedChoice) {
      case this.component.GENERATE:
        this.isGenerated = true;
        break;

      case this.component.ENTER:
        this.isGenerated = false;
        break;

      default:
        break;
    }
  }

  private loadUnitOfIssueOptions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.UNIT_OF_ISSUE_MAP).subscribe((results) => {
      this.unitOfIssueOptions = results;
    });
  }
}
