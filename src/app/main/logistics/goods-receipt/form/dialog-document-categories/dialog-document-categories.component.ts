import { Component, Input, OnInit } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BidtDfTypeOperationDTO } from '../../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-document-categories',
  templateUrl: './dialog-document-categories.component.html'
})
export class DialogDocumentCategoriesReceiptFolderComponent extends DialogComponent implements OnInit {
  public dialogContent: string;
  public numberOfDocs: number;
  @Input() public bidtDfTypeOperationDTO: BidtDfTypeOperationDTO;

  public constructor(private readonly propertiesService: PropertiesService) {
    super(ComponentOpenMode.Read, 'DialogDocumentCategoriesReceiptFolderComponent');
  }

  public ngOnInit(): void {
    this.numberOfDocs = 1;
    this.dialogContent = '';
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((docCategorieMap) => {
      if (this.bidtDfTypeOperationDTO.docCategories && this.bidtDfTypeOperationDTO.docCategories.length > 0) {
        this.bidtDfTypeOperationDTO.docCategories.forEach((categorieOpe) => {
          if (this.numberOfDocs === 1) {
            this.dialogContent = `${this.numberOfDocs}. ${
              docCategorieMap.filter((categorie) => categorie.value === categorieOpe)[0].label
            }`;
            this.numberOfDocs++;
          } else {
            this.dialogContent = `${this.dialogContent}\r\r${this.numberOfDocs}. ${
              docCategorieMap.filter((categorie) => categorie.value === categorieOpe)[0].label
            }`;
            this.dialogContent = this.dialogContent.replace(/\r?\n/g, '</br>');
            this.numberOfDocs++;
          }
        });
      }
    });
  }
}
