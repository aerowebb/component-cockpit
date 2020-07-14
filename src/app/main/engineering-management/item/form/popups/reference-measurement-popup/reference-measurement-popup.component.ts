import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DialogTableData } from '../../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { BireRatingConstants } from '../../../../../../shared/constants/bire-rating-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BireItemDTOId } from '../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnMeasureDTO } from '../../../../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { BireRatingDTO } from '../../../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireTilItemDTO } from '../../../../../../shared/types/api-types/bire-til-item-dto.interface';
import { BireVersionMeasureDTO } from '../../../../../../shared/types/api-types/bire-version-measure-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../../../shared/utils/bido-family-variant-utils';
import { ItemFormService } from '../../../form/item-form.service';

@Component({
  selector: 'aw-reference-measurement-popup',
  templateUrl: './reference-measurement-popup.component.html'
})
export class ReferenceMeasurementPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireVersionMeasureDTO> | null;

  @Output()
  public onCreate: EventEmitter<BireVersionMeasureDTO>;

  @Output()
  public onUpdate: EventEmitter<BireVersionMeasureDTO>;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  public bireVersionMeasureDTO: BireVersionMeasureDTO;

  public bireRatingDTO: BireRatingDTO;

  public showCounterCodeDialog: boolean;
  public showRatingDialog: boolean;
  public currentRef: BirePnMeasureDTO;
  public dialogTableDataCounterCode: DialogTableData<BireMeasureReferenceDTO>;
  public radLimit: string = 'limitValue';
  public itemVersion: string;
  public itemVersionList: LabelValue<string>[];
  public isEditable: boolean = true;
  public isFollowedInRating: boolean = false;

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public limitList: SelectItem[];

  public constructor(
    public sessionService: SessionService,
    private readonly itemFormService: ItemFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'ReferenceMeasurementPopupComponent');

    this.onCreate = new EventEmitter<BireTilItemDTO>();
    this.onUpdate = new EventEmitter<BireTilItemDTO>();
    this.init();

    this.initKeyMap();

    this.setLimitList();
  }

  private init() {
    this.bireVersionMeasureDTO = {};
    this.currentRef = {};
    this.bireRatingDTO = {};
  }

  private initKeyMap(): void {
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('mrCategory', this.propertiesService.getValue(GenericPropertyConstants.REF_MEASURE_CATEGORY_MAP));
  }

  public ngOnInit() {
    this.renderDropdown();
    this.searchCounterCode();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      this.defineIfFollowedInRating();
      if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
        this.isEditable = false;
        this.bireVersionMeasureDTO = this.componentData.object;
        if (!!this.bireVersionMeasureDTO.ratingCode) {
          this.getRatingName(this.bireVersionMeasureDTO.ratingCode);
        }
        if (!!this.componentData.object.counterCode) {
          this.currentRef.counterCode = this.componentData.object.counterCode;
        }

        if (!!this.componentData.object.limitDate) {
          this.radLimit = 'limitDate';
        }
      }
    }
  }

  private defineIfFollowedInRating(): void {
    if (!this.bireItemDTOId) {
      return;
    }
    const familyVariantCode: string | undefined = BidoFamilyVariantUtils.buildFamilyVariantCode(
      this.bireItemDTOId.familyCode,
      this.bireItemDTOId.variantCode
    );
    if (!familyVariantCode) {
      return;
    }
    this.itemFormService.isFollowedInRating(familyVariantCode).subscribe((data: boolean) => {
      this.isFollowedInRating = data;
    });
  }

  private isEmpty(obj): boolean {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

  private renderDropdown(): void {
    this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe((results) => {
      this.itemVersionList = results;

      if (this.componentData) {
        if (!!this.componentData && !!this.componentData.object && !!this.componentData.object.versionNumber) {
          this.itemVersion = this.componentData.object.versionNumber;
        }
      }
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      const max = 1000000;
      if (!this.isFollowedInRating) {
        this.bireVersionMeasureDTO.ratingCode = BireRatingConstants.DEFAULT;
      }
      // tslint:disable-next-line:radix
      if (!!this.bireVersionMeasureDTO.referenceValue && parseInt(this.bireVersionMeasureDTO.referenceValue) > max) {
        this.messageService.showErrorMessage(this.getTranslateKey('enterSmallerValue'));
      } else {
        if (!!this.componentData && this.isEmpty(this.componentData.object)) {
          this.onCreate.emit(this.bireVersionMeasureDTO);
        } else {
          this.onUpdate.emit(this.bireVersionMeasureDTO);
        }
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
    }
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.init();
    this.display = false;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    this.bireVersionMeasureDTO.counterCode = this.currentRef.counterCode;
    this.bireVersionMeasureDTO.versionNumber = this.itemVersion;

    if (!!this.bireVersionMeasureDTO.counterCode && !!this.bireVersionMeasureDTO.versionNumber) {
      return true;
    }

    return false;
  }

  public showCounterCode() {
    if (this.isEditable) {
      this.showCounterCodeDialog = true;
    }
  }

  public showRating() {
    if (this.isEditable) {
      this.showRatingDialog = true;
    }
  }

  /**
   * Search for counter code
   */
  public searchCounterCode() {
    const counterTable: TableColumn[] = [
      { field: 'counterCode', width: '12.5%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'unitCode', width: '7.5%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'mrCategory', width: '10%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'counterRemarks', width: '40%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'minRemainPercent', width: '12.5%', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'isCounter', width: '7.5%', filterMode: TableColumnFilterMode.Tricheckbox, alignment: 'center' },
      { field: 'propagationAllowed', width: '10%', filterMode: TableColumnFilterMode.Tricheckbox, alignment: 'center' }
    ];
    const bireMeasureReferenceDTO: BireMeasureReferenceDTO = {};
    this.dialogTableDataCounterCode = {
      componentId: 'CounterCodePopup',
      tableCols: counterTable,
      tableRows: this.itemFormService.findAllBireMeasureReferenceByCriteria(bireMeasureReferenceDTO).pipe(
        map((results) => {
          return {
            list: results,
            moreResults: false
          };
        })
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  /**
   * Gets rating name
   */
  private getRatingName(code: string) {
    const searchObject: BireRatingDTO = {
      familyCode: this.bireItemDTOId.familyCode,
      structureType: this.bireItemDTOId.structureType,
      ratingCode: code
    };

    this.itemFormService
      .findBireRatingsBySearchCriteria(searchObject, this.bireItemDTOId.variantCode)
      .subscribe((results) => {
        if (results && results.list) {
          this.bireRatingDTO.ratingName = results.list[0].ratingName;
        }
      });
  }

  /**
   * Event on setting counter code
   */
  public setSelectedCounterCode(selectedObject: BireMeasureReferenceDTO) {
    if (selectedObject) {
      this.currentRef.counterCode = selectedObject.counterCode;
    }
    this.showCounterCodeDialog = false;
  }

  /**
   * Event on setting rating
   */
  public setSelectedRating(ev: BireRatingDTO) {
    this.bireVersionMeasureDTO.ratingCode = ev.ratingCode;
    this.bireRatingDTO.ratingName = ev.ratingName;
  }

  /**
   * Event on date change
   */
  public changeRad() {
    this.bireVersionMeasureDTO.referenceValue = undefined;
    this.bireVersionMeasureDTO.limitDate = undefined;
  }

  private setLimitList(): void {
    const limitValueKey = this.getTranslateKey('limitValue');
    const limitDateKey = this.getTranslateKey('limitDate');
    this.translateService.get([limitValueKey, limitDateKey]).subscribe((results) => {
      const limitValueLabel = results ? results[limitValueKey] : 'Limit Value';
      const limitDateLabel = results ? results[limitDateKey] : 'Limit Date';
      this.limitList = [{ label: limitValueLabel, value: 'limitValue' }, { label: limitDateLabel, value: 'limitDate' }];
    });
  }
}
