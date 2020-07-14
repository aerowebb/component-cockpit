import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { takeUntil } from 'rxjs/operators';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { LangConstants } from '../../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { PartsSearchInput } from '../../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../shared/utils/label-value-utils';
import { OperationPnElement } from '../../types/operation-pn-element.interface';
import { OperationFormService } from '../operation-form.service';

@Component({
  selector: 'aw-dialog-component',
  templateUrl: './dialog-components.component.html'
})
export class DialogComponentsComponent extends DialogComponent implements OnInit {
  @Input()
  public operationComponent: OperationPnElement;
  @Input()
  public isReadOnlyComponentDialog: boolean;
  @Output()
  public onValidated: EventEmitter<OperationPnElement>;

  public componentsLinks: LabelValue<string>[];

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public componentTMTableData: DialogTableData<BirePnDTO>;
  public componentPSMTableData: DialogTableData<BirePnDTO>;

  public displayComponentTMDialog: boolean;
  public displayComponentPSMDialog: boolean;

  public isNewComponentForm: boolean;
  public isValid: boolean | undefined;

  public componentTypeList: LabelValue<string>[];

  public pnType: string;
  public ingredientToolPnCode: string | undefined;
  public partPnCode: string | undefined;
  public subcontractingPnCode: string | undefined;
  public ingredientToolType: string;
  public partType: string;
  public subcontractingType: string;
  public componentQuantity: string | undefined;

  public pnTypes: LabelValue<string>[];

  public showPnAfterDialog: boolean;
  public partsSearch: PartsSearchInput;
  public selectedPnType: string;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly loaderService: LoaderService,
    private readonly operationFormService: OperationFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'DialogComponentsComponent');

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('pnType', this.operationFormService.getPnTypeMap());

    this.onValidated = new EventEmitter<OperationPnElement>();

    this.displayComponentTMDialog = false;
    this.displayComponentPSMDialog = false;

    this.isNewComponentForm = false;

    this.ingredientToolPnCode = undefined;
    this.partPnCode = undefined;
    this.subcontractingPnCode = undefined;

    this.ingredientToolType = AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY;
    this.partType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    this.subcontractingType = AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY;

    this.loadPnTypes();

    this.translateService.onLangChange.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.loadComponentTypeList();
    });
  }

  public ngOnInit() {
    this.loaderService.hideLoadingBar();
    this.loadComponentTypeList();
    this.setIsNewComponentForm();
    this.setLayout();
    this.partsSearch = {};
    this.isValid =
      !!this.operationComponent && !!this.operationComponent.pnCode && this.operationComponent.pnCode.length > 0;
    if (!!this.operationComponent && !!this.operationComponent.pnCode) {
      LabelValueUtils.labelToStringValue(this.operationComponent, 'type', this.pnTypes);
      switch (this.operationComponent.type) {
        case AWPropertiesConstants.PN_TYPE_PART_KEY: {
          this.partPnCode = this.operationComponent.pnCode;
          break;
        }
        case AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY: {
          this.subcontractingPnCode = this.operationComponent.pnCode;
          break;
        }
        default: {
          this.ingredientToolPnCode = this.operationComponent.pnCode;
          break;
        }
      }
    }
  }

  private loadPnTypes(): void {
    this.operationFormService.getPnTypeMap().subscribe((results) => {
      this.pnTypes = results || [];
    });
  }

  public buildOperationPnElementFromBirePnDTO(pn: BirePnDTO): void {
    this.operationComponent = {
      pnCode: pn.pnCode,
      name: pn.articleDesignation,
      type: pn.pnType,
      quantity: this.operationComponent.quantity,
      unit: pn.quantityUnit,
      componentType: this.operationComponent.componentType
    };
  }

  public setIsNewComponentForm(): void {
    if (!!this.operationComponent && !this.operationComponent.pnCode) {
      this.isNewComponentForm = true;
    }
  }

  public setLayout(): void {
    if (this.isNewComponentForm) {
      this.operationComponent.componentType = this.ingredientToolType;
    } else {
      if (!!this.operationComponent) {
        this.componentQuantity = this.operationComponent.quantity;
        if (this.operationComponent.type === AWPropertiesConstants.PN_TYPE_PART_KEY) {
          this.partPnCode = this.operationComponent.pnCode;
        } else if (this.operationComponent.type === AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY) {
          this.subcontractingPnCode = this.operationComponent.pnCode;
        } else {
          this.ingredientToolPnCode = this.operationComponent.pnCode;
        }
      } else {
        super.throwUnboundLocalError('setLayout', 'this.operationComponent');
      }
    }
  }

  public onComponentTypeSelected($event: LabelValue<string>) {
    if (!!this.operationComponent) {
      switch ($event.value) {
        case AWPropertiesConstants.PN_TYPE_PART_KEY: {
          this.operationComponent.componentType = this.partType;
          this.ingredientToolPnCode = '';
          this.subcontractingPnCode = '';
          this.componentQuantity = '';
          this.operationComponent.type = AWPropertiesConstants.PN_TYPE_PART_KEY;
          break;
        }
        case AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY: {
          this.operationComponent.componentType = this.subcontractingType;
          this.ingredientToolPnCode = '';
          this.partPnCode = '';
          this.componentQuantity = '';
          this.operationComponent.type = AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY;
          break;
        }
        case AWPropertiesConstants.PN_TYPE_STANDARD_TOOL_KEY: {
          this.operationComponent.componentType = this.ingredientToolType;
          this.partPnCode = '';
          this.subcontractingPnCode = '';
          this.componentQuantity = '';
          this.operationComponent.type = AWPropertiesConstants.PN_TYPE_STANDARD_TOOL_KEY;
          break;
        }
        case AWPropertiesConstants.PN_TYPE_SPECIFIC_TOOL_KEY: {
          this.operationComponent.componentType = this.ingredientToolType;
          this.partPnCode = '';
          this.subcontractingPnCode = '';
          this.componentQuantity = '';
          this.operationComponent.type = AWPropertiesConstants.PN_TYPE_SPECIFIC_TOOL_KEY;
          break;
        }
        default: {
          this.operationComponent.componentType = this.ingredientToolType;
          this.partPnCode = '';
          this.subcontractingPnCode = '';
          this.componentQuantity = '';
          this.operationComponent.type = undefined;
          break;
        }
      }
    } else {
      super.throwUnboundLocalError('onComponentTypeSelected', 'this.operationComponent');
    }
  }

  public loadComponentTypeList(): void {
    if (this.translateService.currentLang === LangConstants.ENGLISH_CODE) {
      this.componentTypeList = [
        { label: 'Ingredient/Tool', value: AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY },
        { label: 'Part', value: AWPropertiesConstants.PN_TYPE_PART_KEY },
        { label: 'Subcontracting', value: AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY }
      ];
    } else if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.componentTypeList = [
        { label: 'Ingrédient/Outil', value: AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY },
        { label: 'Article', value: AWPropertiesConstants.PN_TYPE_PART_KEY },
        { label: 'Sous-traitance', value: AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY }
      ];
    }
  }

  public validate(): void {
    if (!!this.operationComponent) {
      this.onValidated.emit(this.operationComponent);
      this.display = false;
    } else {
      super.throwUnboundLocalError('validate', 'this.operationComponent');
    }
  }

  public cancel(): void {
    let pnTypesList: LabelValue<string>[];
    this.operationFormService.getPnTypeMap().subscribe((results) => {
      pnTypesList = results;
      if (!!this.operationComponent && !!this.operationComponent.type) {
        this.operationComponent.type = pnTypesList.filter(
          (pnType) => !!this.operationComponent && pnType.value === this.operationComponent.type
        )[0].label;
      }
    });
    this.display = false;
  }

  public searchIngredientTool(): void {
    this.partsSearch = {
      type: AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY
    };
    this.selectedPnType = this.partsSearch.type as string;
    this.showPnAfterDialog = true;
  }

  public searchPart(): void {
    this.partsSearch = {
      type: AWPropertiesConstants.PN_TYPE_PART_KEY
    };
    this.selectedPnType = this.partsSearch.type as string;
    this.showPnAfterDialog = true;
  }

  public searchSubcontracting(): void {
    this.partsSearch = {
      type: AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY
    };
    this.selectedPnType = this.partsSearch.type as string;
    this.showPnAfterDialog = true;
  }

  public disableValidate(): boolean {
    let response = true;
    switch (this.operationComponent.componentType) {
      case this.ingredientToolType:
        response = !!this.ingredientToolPnCode ? false : true;
        break;
      case this.partType:
        response = !!this.partPnCode ? false : true;
        break;
      case this.subcontractingType:
        response = !!this.subcontractingPnCode ? false : true;
        break;
      default:
        break;
    }

    return response;
  }

  /**************************************************************************
   * Component Dialog
   *************************************************************************/

  public onSelectedComponent(data: PartsAssociatedTableDTO): void {
    const pn = data.birePnDTO;
    if (!!this.operationComponent && !!pn) {
      this.buildOperationPnElementFromBirePnDTO(pn);
      this.isValid =
        !!this.operationComponent && !!this.operationComponent.pnCode && this.operationComponent.pnCode.length > 0;
      if (!!this.operationComponent && this.operationComponent.type === AWPropertiesConstants.PN_TYPE_PART_KEY) {
        this.ingredientToolType = '';
        this.partType = this.operationComponent.type;
        this.subcontractingType = '';
        this.partPnCode = this.operationComponent.pnCode;
      } else if (
        !!this.operationComponent &&
        this.operationComponent.type === AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY
      ) {
        this.ingredientToolType = '';
        this.partType = '';
        this.subcontractingType = this.operationComponent.type;
        this.subcontractingPnCode = this.operationComponent.pnCode;
      } else {
        this.ingredientToolType = AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY;
        this.operationComponent.componentType = this.ingredientToolType;
        this.partType = '';
        this.subcontractingType = '';
        this.operationComponent.type = pn.pnType;
        this.ingredientToolPnCode = !!this.operationComponent ? this.operationComponent.pnCode : undefined;
      }
    } else {
      super.throwUnboundLocalError('onSelectedComponent', 'pn');
    }
  }
}
