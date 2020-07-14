import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { CatalogPropertiesTableDTO } from '../../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidtDocumentDTO } from '../../../../../shared/types/api-types/bidt-document-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { EmployeeFormService } from '../../employee-form.service';

@Component({
  selector: 'aw-document-popup-form',
  templateUrl: './document-popup-form.component.html'
})
export class DocumentPopupFormComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }
  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output()
  public displayChange: EventEmitter<boolean>;
  @Input()
  public document: BidtDocumentDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onValidated: EventEmitter<BidtDocumentDTO>;

  private readonly documentCategoryId = 120;

  public readonly componentId: string;

  public displayValue: boolean;
  public types: LabelValue<string>[];
  public documentCategories: SelectItem[];

  public constructor(private readonly employeeFormService: EmployeeFormService) {
    this.componentId = 'DocumentPopupFormComponent';

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtDocumentDTO>();

    this.loadCategories();
  }

  public ngOnInit(): void {
    if (!this.document) {
      this.document = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.display = false;
  }

  private loadCategories(): void {
    this.employeeFormService
      .findDocumentCategories(this.documentCategoryId)
      .subscribe((data: CatalogPropertiesTableDTO[]) => {
        this.documentCategories = [];
        data.forEach((elem: CatalogPropertiesTableDTO) => {
          this.documentCategories.push({ label: elem.enPropertiesValue, value: elem.propertiesKey });
        });
      });
  }
}
