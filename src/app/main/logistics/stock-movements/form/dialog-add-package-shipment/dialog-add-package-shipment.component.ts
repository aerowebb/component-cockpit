import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { AddShipmentPackageInput } from '../../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDeliveryFolderIdDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-id-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageTypeDTO } from '../../../../../shared/types/api-types/bidt-package-type-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../../logistics.service';

@Component({
  selector: 'aw-dialog-add-package',
  styleUrls: ['./dialog-add-package-shipment.component.scss'],
  templateUrl: './dialog-add-package-shipment.component.html'
})
export class DialogAddPackageShipmentComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';

  public static readonly CURRENT_PACKAGE: string = '0';
  public static readonly NEW_PACKAGE: string = '1';
  public static readonly WITHOUT_PACKAGE: string = '2';

  public static readonly ROOTS_VALUE: string = '3';

  @Input()
  public bidtDeliveryFolder: BidtDeliveryFolderDTO;

  public externalPackageCode: string;
  public searchPnDialogVisible: boolean;
  public choiceList: LabelValue<string>[];
  public choiceListPackage: LabelValue<string>[];
  public selectedChoice: string;
  public selectedChoicePackage: string;
  public isGenerated: boolean;
  public unitLengthList: LabelValue<string>[];
  public unitWeightList: LabelValue<string>[];
  public packagesTypesList: LabelValue<BidtPackageTypeDTO>[];
  public createWithPackage: boolean;
  public packageListWithOutItem: BidtPackageDTO[];
  public packageListDisplay: LabelValue<BidtPackageDTO>[];
  public selectedPackage?: BidtPackageDTO;

  public packageInput: BidtPackageDTO;
  public disableLength: boolean;
  public disableWidth: boolean;
  public disableHeight: boolean;
  public selectedPackageType: BidtPackageTypeDTO;

  public component: typeof DialogAddPackageShipmentComponent;

  @Output()
  public onCreate: EventEmitter<AddShipmentPackageInput>;

  public constructor(
    private readonly propertiesService: PropertiesService,
    private readonly logisticsService: LogisticsService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService
  ) {
    super(ComponentOpenMode.Read, 'DialogAddPackageShipmentComponent');
    this.searchPnDialogVisible = false;
    this.createWithPackage = true;
    this.isGenerated = true;
    this.component = DialogAddPackageShipmentComponent;
    this.onCreate = new EventEmitter<AddShipmentPackageInput>();
    this.selectedPackage = undefined;
  }

  public validate() {
    if (this.selectedPackage) {
      const input: AddShipmentPackageInput = {
        bidtPackageDTO: this.selectedPackage,
        isGenerated: this.isGenerated,
        createWithPackage: this.createWithPackage
      };
      this.onCreate.emit(input);
      this.closeDialog();
    } else {
      const packageDTO: BidtPackageDTO = {
        externalPackageCode: this.externalPackageCode,
        packageType: this.selectedPackageType.packageType,
        height: this.packageInput.height,
        heightUnit: this.packageInput.heightUnit,
        width: this.packageInput.width,
        widthUnit: this.packageInput.widthUnit,
        length: this.packageInput.length,
        lengthUnit: this.packageInput.lengthUnit,
        weight: this.packageInput.weight,
        weightUnit: this.packageInput.weightUnit,
        volume: this.calculateVolume().toString()
      };
      const input: AddShipmentPackageInput = {
        bidtPackageDTO: packageDTO,
        isGenerated: this.isGenerated,
        createWithPackage: this.createWithPackage
      };
      this.onCreate.emit(input);
      this.closeDialog();
    }
  }

  public ngOnInit(): void {
    this.packageInput = {};
    this.disableLength = false;
    this.disableWidth = false;
    this.disableHeight = false;
    this.loadDropDowns();
  }

  private loadDropDowns(): void {
    const packageTypes = this.propertiesService.getFullPackageTypeMap();
    const lengthUnit = this.logisticsService.fetchLengthUnitMap();
    const weightUnit = this.logisticsService.fetchWeightUnitMap();
    this.loadpackageList();

    forkJoin({ packageTypes, lengthUnit, weightUnit }).subscribe({
      next: (results) => {
        this.packagesTypesList = results.packageTypes;
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

  public loadpackageList(): void {
    this.packageListDisplay = [];
    const delieryFolderId: BidtDeliveryFolderIdDTO = {
      id: this.bidtDeliveryFolder.id
    };
    this.logisticsService.findShipmentFolderWithAllObjectsById(delieryFolderId).subscribe((deliveryFolder) => {
      this.packageListWithOutItem = deliveryFolder.packageList;
      let packageList: BidtPackageDTO[] = ListUtils.orEmpty(this.bidtDeliveryFolder.bidtDfItems)
        .filter((item) => !!item.bidtPackage)
        .map((item) => {
          return item.bidtPackage as BidtPackageDTO;
        });
      if (this.packageListWithOutItem && this.packageListWithOutItem.length > 0) {
        packageList = packageList.concat(this.packageListWithOutItem);
      }
      packageList.forEach((packageDTO) => {
        const packageRow: LabelValue<BidtPackageDTO> = {
          label: packageDTO.packageCode as string,
          value: packageDTO
        };
        this.packageListDisplay.push(packageRow);
      });
      this.packageListDisplay = this.packageListDisplay
        .reduce(
          (unique: LabelValue<BidtPackageDTO>[], column: LabelValue<BidtPackageDTO>) =>
            unique.every((elt) => elt.label !== column.label) ? [...unique, column] : unique,
          []
        )
        .sort((a, b) => (a.label as string).localeCompare(b.label as string));
    });
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

  public resetChoicePackage(): void {
    this.changeModePackage();
  }

  private changeModePackage(): void {
    switch (this.selectedChoicePackage) {
      case this.component.CURRENT_PACKAGE:
        this.createWithPackage = true;
        this.isGenerated = true;
        break;

      case this.component.NEW_PACKAGE:
        this.createWithPackage = true;
        this.isGenerated = true;
        break;

      case this.component.WITHOUT_PACKAGE:
        this.createWithPackage = false;
        this.isGenerated = false;
        break;

      default:
        break;
    }
  }

  public isValidForm(): boolean {
    return false;
  }

  public packageTypeChange(): void {
    this.packageInput = {
      length: this.selectedPackageType.length,
      lengthUnit: this.selectedPackageType.unit,
      width: this.selectedPackageType.width,
      widthUnit: this.selectedPackageType.unit,
      height: this.selectedPackageType.height,
      heightUnit: this.selectedPackageType.unit
    };
    this.disableLength = this.selectedPackageType.length ? true : false;
    this.disableWidth = this.selectedPackageType.width ? true : false;
    this.disableHeight = this.selectedPackageType.height ? true : false;
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
}
