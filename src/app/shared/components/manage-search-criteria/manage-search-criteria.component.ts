import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ConfirmationService } from '../../services/confirmation.service';
import { MessageService } from '../../services/message.service';
import { SearchCriteriaService } from '../../services/search-critieria.service';
import { SearchCriteriaDTO } from '../../types/api-types/search-criteria-dto.interface';
import { ObjectUtils } from '../../utils/object-utils';

import { ISearchCriteria } from './search-criteria.interface';

@Component({
  selector: 'aw-manage-search-criteria',
  styleUrls: ['manage-search-criteria.component.scss'],
  templateUrl: './manage-search-criteria.component.html'
})
export class ManageSearchCriteriaComponent implements OnInit {
  public _objectFromPage: Object | undefined;
  @Input() public set objectFromPage(anObject: Object) {
    this._objectFromPage = anObject;
    if (this.isAdd()) {
      this.showAddOrUpdateCriteria = true;
    } else {
      this.updateSearchCriteria();
    }
  }
  public get objectFromPage(): Object {
    return this._objectFromPage || {};
  }

  @Input() public componentId: string;
  @Input() public canChange: boolean;

  @Output() public onSelected = new EventEmitter<ISearchCriteria>();
  @Output() public onSavedAsked = new EventEmitter<void>();

  // data
  public selectedSearchCriteria: SearchCriteriaDTO | undefined;

  // data for table
  public searchCriteriaList: SearchCriteriaDTO[];
  public selectedSearchCriteriaFromTable: SearchCriteriaDTO | undefined;

  // data for modal
  public showSearchCriteriaModal: boolean;
  public showAddOrUpdateCriteria: boolean;

  // data for form
  public name: string | undefined;
  public isPublic: boolean | undefined;

  // manage visibility
  public visibility: Object = {
    showDelete: (): boolean => ObjectUtils.isDefined(this.selectedSearchCriteriaFromTable),
    showUpdate: (): boolean => ObjectUtils.isDefined(this.selectedSearchCriteriaFromTable)
  };

  // manage enabled / disabled inputs
  public enable: Object = {
    selectSearchCriteria: (): boolean => {
      return ObjectUtils.isDefined(this.selectedSearchCriteriaFromTable);
    }
  };

  public constructor(
    private readonly searchCriteriaService: SearchCriteriaService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService
  ) {
    if (this.canChange === undefined) {
      this.canChange = true;
    }
  }

  public onClickCreateSearchCriteria(): void {
    if (!this.canChange) {
      return;
    }
    this.name = '';
    this.isPublic = false;
    this.getSearchCriteriaFromPage();
  }

  public onClickUpdateSearchCriteria(): void {
    if (!this.canChange) {
      return;
    }
    if (!this.isAllowedToUpdate(this.selectedSearchCriteria)) {
      this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');

      return;
    }
    this.getSearchCriteriaFromPage();
  }

  public onClickOpenSearchCriteria(): void {
    if (!this.canChange) {
      return;
    }
    this.getSearchCriteriaList(false);
    this.selectedSearchCriteriaFromTable = undefined;
    this.showSearchCriteriaModal = true;
  }

  public onClickValidAddOrUpdateCriteria(): void {
    if (this.isAdd() && !this.selectedSearchCriteriaFromTable) {
      this.createSearchCriteria();
    } else {
      this.updateSearchCriteriaName();
    }
  }

  public onClickSelectSearchCriteria(): void {
    this.loadSearchCriteria();
    this.showSearchCriteriaModal = false;
  }

  public onClickResetSearchCriteria(): void {
    if (!this.canChange) {
      return;
    }
    this.selectedSearchCriteria = undefined;
    this.selectedSearchCriteriaFromTable = undefined;
    this.loadSearchCriteria();
  }

  public onClickDeleteContext(): void {
    if (!this.isAllowedToUpdate(this.selectedSearchCriteriaFromTable)) {
      this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');

      return;
    }
    this.deleteSearchCriteria();
  }

  public onClickUpdateContext(): void {
    if (!this.isAllowedToUpdate(this.selectedSearchCriteriaFromTable)) {
      this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');

      return;
    }
    if (this.selectedSearchCriteriaFromTable) {
      this.name = this.selectedSearchCriteriaFromTable.description;
      this.isPublic = this.selectedSearchCriteriaFromTable.public;
      this.showAddOrUpdateCriteria = true;
    }
  }

  public onClickSetFavorite(searchCriteria: SearchCriteriaDTO): void {
    this.searchCriteriaList.forEach((element: SearchCriteriaDTO) => {
      element.favorite = element.contextId === searchCriteria.contextId;
    });
    searchCriteria.preferenceId = this.componentId;
    this.searchCriteriaService.setAsFavorite(searchCriteria).subscribe();
  }

  public onClickUnsetFavorite(searchCriteria: SearchCriteriaDTO): void {
    this.searchCriteriaList.forEach((element: SearchCriteriaDTO) => {
      if (element.contextId === searchCriteria.contextId) {
        element.favorite = false;
      }
    });
    searchCriteria.preferenceId = this.componentId;
    this.searchCriteriaService.removeAsFavorite(searchCriteria).subscribe();
  }

  public ngOnInit() {
    this.initData();
    this.init();
  }

  private init(): void {
    this.getSearchCriteriaList(true);
  }

  private initData(): void {
    this.showSearchCriteriaModal = false;
    this.showAddOrUpdateCriteria = false;
    this.selectedSearchCriteria = undefined;
    this.searchCriteriaList = [];

    this.name = '';
    this.isPublic = false;
  }

  public getSelectedSearchCriteriaName(): string {
    if (!this.selectedSearchCriteria) {
      return '';
    } else {
      return this.selectedSearchCriteria.description ? this.selectedSearchCriteria.description : '';
    }
  }

  public validForm(): boolean {
    let toReturn = true;
    let msg = '';

    if (!ObjectUtils.isDefined(this.name) || this.name === '') {
      msg = 'ManageSearchCriteriaComponent.enterName';
      toReturn = false;
    } else {
      this.searchCriteriaList.forEach((context: SearchCriteriaDTO) => {
        if (this.selectedSearchCriteriaFromTable) {
          // it's an update
          if (
            this.selectedSearchCriteriaFromTable.contextId !== context.contextId &&
            this.name === context.description
          ) {
            msg = 'ManageSearchCriteriaComponent.nameAlreadyExists';
            toReturn = false;
          }
        } else {
          // it's an add
          if (this.name === context.description) {
            msg = 'ManageSearchCriteriaComponent.nameAlreadyExists';
            toReturn = false;
          }
        }
      });
    }

    if (msg !== '') {
      this.messageService.showWarningMessage(msg);
    }

    return toReturn;
  }

  private getSearchCriteriaList(load: boolean): void {
    this.searchCriteriaList = [];
    this.searchCriteriaService.listContext(this.componentId).subscribe((data: SearchCriteriaDTO[]) => {
      this.searchCriteriaList = [...this.searchCriteriaList, ...data];
      this.searchCriteriaList.forEach((criteria: SearchCriteriaDTO) => {
        if (criteria.favorite && criteria.favorite === true && load) {
          this.selectedSearchCriteriaFromTable = criteria;
          this.loadSearchCriteria();
        }
      });
    });
  }

  private isAllowedToUpdate(searchCriteria: SearchCriteriaDTO | undefined): boolean {
    return searchCriteria !== undefined && searchCriteria.creator !== undefined && searchCriteria.creator;
  }

  private deleteSearchCriteria(): void {
    const confirmMessageKey = 'ManageSearchCriteriaComponent.confirmDeleteContext';
    this.confirmationService.confirmDelete({
      messageKey: this.translateService.instant(confirmMessageKey),
      accept: () => {
        if (this.selectedSearchCriteriaFromTable && this.selectedSearchCriteriaFromTable.contextId) {
          this.searchCriteriaService.deleteContext(this.selectedSearchCriteriaFromTable).subscribe((data: boolean) => {
            if (data) {
              this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextDeletedSuccessfully');
              if (this.selectedSearchCriteria && this.selectedSearchCriteriaFromTable) {
                if (this.selectedSearchCriteria.contextId === this.selectedSearchCriteriaFromTable.contextId) {
                  this.selectedSearchCriteria = undefined;
                }
              }
              this.selectedSearchCriteriaFromTable = undefined;
              this.getSearchCriteriaList(false);
            }
          });
        }
      }
    });
  }

  private getSearchCriteriaFromPage(): void {
    this.onSavedAsked.emit();
  }

  private updateSearchCriteriaName(): void {
    if (!this.validForm()) {
      return;
    }
    if (!this.selectedSearchCriteriaFromTable) {
      return;
    }
    const param: SearchCriteriaDTO = {
      preferenceId: this.componentId,
      description: this.name,
      contextId: this.selectedSearchCriteriaFromTable.contextId,
      values: this.selectedSearchCriteriaFromTable.values,
      public: this.isPublic
    };
    this.searchCriteriaService.saveContext(param).subscribe((data: SearchCriteriaDTO) => {
      this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
      this.searchCriteriaList.forEach((element: SearchCriteriaDTO, index: number) => {
        if (element.contextId === data.contextId) {
          this.searchCriteriaList[index] = data;
          this.searchCriteriaList = [...this.searchCriteriaList];
          this.selectedSearchCriteriaFromTable = this.searchCriteriaList[index];
          if (this.selectedSearchCriteria && this.selectedSearchCriteriaFromTable) {
            if (this.selectedSearchCriteria.contextId === this.selectedSearchCriteriaFromTable.contextId) {
              this.selectedSearchCriteria = this.selectedSearchCriteriaFromTable;
            }
          }
        }
      });
      this.showAddOrUpdateCriteria = false;
    });
  }

  private updateSearchCriteria(): void {
    if (!this.selectedSearchCriteria) {
      return;
    }
    const param: SearchCriteriaDTO = {
      preferenceId: this.componentId,
      description: this.selectedSearchCriteria.description,
      contextId: this.selectedSearchCriteria.contextId,
      values: JSON.stringify(this._objectFromPage),
      public: this.selectedSearchCriteria.public
    };
    this.searchCriteriaService.saveContext(param).subscribe((data: SearchCriteriaDTO) => {
      this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
      this.onSelected.emit({ name: data.description, criteria: this.getCriteriaFromDto(data) });
    });
  }

  private createSearchCriteria(): void {
    if (!this.validForm()) {
      return;
    }
    const param: SearchCriteriaDTO = {
      preferenceId: this.componentId,
      description: this.name,
      contextId: undefined,
      values: JSON.stringify(this._objectFromPage),
      public: this.isPublic
    };
    this.searchCriteriaService.saveContext(param).subscribe((data: SearchCriteriaDTO) => {
      this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
      this.searchCriteriaList.push(data);
      this.searchCriteriaList = [...this.searchCriteriaList];
      this.selectedSearchCriteria = data;
      this.onSelected.emit({ name: data.description, criteria: this.getCriteriaFromDto(data) });
      this.showAddOrUpdateCriteria = false;
    });
  }

  private getCriteriaFromDto(searchCriteria: SearchCriteriaDTO): Object {
    return searchCriteria && searchCriteria.values ? JSON.parse(searchCriteria.values) : undefined;
  }

  private loadSearchCriteria(): void {
    if (this.selectedSearchCriteriaFromTable && this.selectedSearchCriteriaFromTable.values) {
      const criteria: Object = this.getCriteriaFromDto(this.selectedSearchCriteriaFromTable);
      this.handleDates(criteria);
      this.selectedSearchCriteria = this.selectedSearchCriteriaFromTable;
      this.onSelected.emit({ name: this.selectedSearchCriteriaFromTable.description, criteria });
    } else {
      this.selectedSearchCriteria = undefined;
      this.onSelected.emit({ name: undefined, criteria: undefined });
    }
  }

  public cancelContext(): void {
    this.showAddOrUpdateCriteria = false;
    const param: SearchCriteriaDTO = {
      preferenceId: this.componentId,
      description: this.name,
      contextId: undefined,
      values: JSON.stringify(this.objectFromPage),
      public: this.isPublic
    };
    this.onSelected.emit({ name: undefined, criteria: this.getCriteriaFromDto(param) });
  }

  public isAdd(): boolean {
    return !this.selectedSearchCriteria;
  }

  private handleDates(object: Object[] | Object): void {
    if (object instanceof Array) {
      object.forEach((element) => this.handleDates(element));
    } else if (object instanceof Object) {
      Object.getOwnPropertyNames(object).forEach((property) => {
        if (object[property] instanceof Array) {
          object[property].forEach((element) => this.handleDates(element));
        } else if (object[property] instanceof Object) {
          this.handleDates(object[property]);
        } else if (object[property] instanceof String || typeof object[property] === 'string') {
          if (!!object[property] && this.isMatchingDatePattern(object[property])) {
            object[property] = new Date(object[property]);
          }
        }
      });
    }
  }

  private isMatchingDatePattern(value: string): boolean {
    return /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/.test(value);
  }
}
