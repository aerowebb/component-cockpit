import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AddShipmentPackageInput } from '../../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageTypeDTO } from '../../../../../shared/types/api-types/bidt-package-type-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../../logistics.service';

@Component({
  selector: 'aw-dialog-assign-package',
  templateUrl: './dialog-assign-package.component.html',
  styleUrls: ['./dialog-assign-package.component.scss']
})
export class DialogAssignPackageComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';
  public static readonly ROOTS_VALUE: string = '3';

  @Input()
  public bidtDeliveryFolder: BidtDeliveryFolderDTO;

  @Input() public selectedPackage: BidtPackageDTO;

  @Input() public isEditContext: boolean;

  public externalPackageCode: string;
  public searchPnDialogVisible: boolean;
  public choiceList: LabelValue<string>[];
  public choiceListPackage: LabelValue<string>[];
  public selectedChoice: string;
  public selectedChoicePackage: string;
  public isGenerated: boolean;
  public packagesTypesList: LabelValue<string>[];
  private fullPackagesTypesList: LabelValue<BidtPackageTypeDTO>[];
  public selectedPackageType: string;
  public packageInput: BidtPackageDTO;
  public createWithPackage: boolean;
  public unitLengthList: LabelValue<string>[];
  public unitWeightList: LabelValue<string>[];
  public disableLength: boolean;
  public disableWidth: boolean;
  public disableHeight: boolean;
  public component: typeof DialogAssignPackageComponent;
  @Output()
  public onCreateOrUpdate: EventEmitter<AddShipmentPackageInput>;
  @Output()
  public onCancel: EventEmitter<void>;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly logisticsService: LogisticsService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService
  ) {
    super(ComponentOpenMode.Read, 'DialogAssignPackageComponent');
    this.component = DialogAssignPackageComponent;
    this.onCreateOrUpdate = new EventEmitter<AddShipmentPackageInput>();
    this.onCancel = new EventEmitter<void>();
  }

  public validate() {
    let packageDTO: BidtPackageDTO = {
      externalPackageCode: this.selectedPackage ? this.selectedPackage.externalPackageCode : this.externalPackageCode,
      packageType: this.selectedPackage ? this.selectedPackage.packageType : this.selectedPackageType,
      bidtDeliveryFolderId: this.bidtDeliveryFolder.id,
      height: this.packageInput.height,
      heightUnit: this.packageInput.heightUnit,
      width: this.packageInput.width,
      widthUnit: this.packageInput.widthUnit,
      length: this.packageInput.length,
      lengthUnit: this.packageInput.lengthUnit,
      weight: this.packageInput.weight,
      weightUnit: this.packageInput.weightUnit,
      volume: this.showVolume() ? this.calculateVolume().toString() : undefined
    };
    if (this.selectedPackage) {
      packageDTO = { ...this.selectedPackage, ...packageDTO };
    }
    const input: AddShipmentPackageInput = {
      bidtPackageDTO: packageDTO,
      isGenerated: this.isGenerated,
      bidtDeliveryFolderDTO: this.bidtDeliveryFolder,
      createWithPackage: this.createWithPackage
    };
    this.onCreateOrUpdate.emit(input);
    this.closeDialog();
  }

  public ngOnInit(): void {
    this.packageInput = {};
    this.disableLength = false;
    this.disableWidth = false;
    this.disableHeight = false;
    this.loadDropDowns();
    if (this.selectedPackage) {
      this.packageInput = { ...this.selectedPackage };
      this.selectedPackageType = this.selectedPackage.packageType || '';
    }
  }

  private loadDropDowns(): void {
    const packageTypes = this.propertiesService.getFullPackageTypeMap();
    const lengthUnit = this.logisticsService.fetchLengthUnitMap();
    const weightUnit = this.logisticsService.fetchWeightUnitMap();

    forkJoin({ packageTypes, lengthUnit, weightUnit }).subscribe({
      next: (results) => {
        this.getPackageTypeList(results.packageTypes);
        this.fullPackagesTypesList = results.packageTypes;
        this.unitLengthList = results.lengthUnit;
        this.unitWeightList = results.weightUnit;
        this.choiceList = this.deliveryFolderSearchService.loadCreationChoiceListPackage();
        this.selectedChoice = this.choiceList && this.choiceList.length ? this.choiceList[0].value : '';
        this.choiceListPackage = this.deliveryFolderSearchService.loadCreationChoiceList();
        this.selectedChoicePackage =
          this.choiceListPackage && this.choiceListPackage.length ? this.choiceListPackage[1].value : '';
      }
    });
  }

  private getPackageTypeList(results: LabelValue<BidtPackageTypeDTO>[]): void {
    this.packagesTypesList = [];
    if (results.length) {
      results.forEach((element) => {
        this.packagesTypesList.push({ label: element.label, value: element.value.packageType });
      });
    }
  }
  public packageTypeChange(): void {
    const selectedType = this.fullPackagesTypesList.find((item) => this.selectedPackageType === item.value.packageType);
    if (selectedType && selectedType.value) {
      this.packageInput = {
        length: selectedType.value.length,
        lengthUnit: selectedType.value.unit,
        width: selectedType.value.width,
        widthUnit: selectedType.value.unit,
        height: selectedType.value.height,
        heightUnit: selectedType.value.unit
      };
      this.disableLength = selectedType.value.length ? true : false;
      this.disableWidth = selectedType.value.width ? true : false;
      this.disableHeight = selectedType.value.height ? true : false;
    }
  }

  public resetChoice(): void {
    this.changeMode();
  }

  public calculateVolume(): number {
    return this.packageInput.width && this.packageInput.length && this.packageInput.height
      ? this.packageInput.height * this.packageInput.length * this.packageInput.width
      : 0;
  }
  public showVolume(): boolean {
    return (
      this.packageInput.lengthUnit === this.packageInput.widthUnit &&
      this.packageInput.lengthUnit === this.packageInput.heightUnit
    );
  }

  public getVolumnUnit(): string {
    const selectedUnit = this.unitLengthList.find((item) => item.value === this.packageInput.lengthUnit);

    return selectedUnit ? selectedUnit.label : '';
  }

  public enableAddPackageButton(): boolean {
    if (!this.isEditContext && this.selectedPackage) {
      return this.packageInput.width &&
        this.packageInput.length &&
        this.packageInput.height &&
        this.packageInput.weight &&
        this.packageInput.lengthUnit &&
        this.packageInput.widthUnit &&
        this.packageInput.heightUnit &&
        this.packageInput.weightUnit &&
        this.selectedPackageType &&
        (this.selectedChoice === this.component.GENERATE || this.externalPackageCode)
        ? false
        : true;
    } else {
      return this.selectedPackageType && (this.selectedChoice === this.component.GENERATE || this.externalPackageCode)
        ? false
        : true;
    }
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

  public onCancelPopup(): void {
    this.onCancel.emit();
    this.closeDialog();
  }
}
