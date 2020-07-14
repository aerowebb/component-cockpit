import { Type } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {
  Column,
  ColumnWithFilter,
  ColumnWithSort,
  DataWithCheck,
  DataWithId,
  TableDataSource
} from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { MessageService } from '../../../shared/services/message.service';
import { ServiceLocator } from '../../../shared/utils/service-locator';
import { ListModificationsDTO } from '../dtos/list-modifications-dto.interface';

export class TableDataSourceWithHistory<T> extends TableDataSource<T> {
  private addedList: (T & DataWithCheck & DataWithId)[];
  private updatedList: (T & DataWithCheck & DataWithId)[];
  private deletedList: (T & DataWithCheck & DataWithId)[];
  private readonly allowUniqueValue: boolean;
  private readonly propertiesWitchIdentifyData: string[];
  private readonly errorOnAddedDuplicateDefaultKey: string =
    'TableDataSourceWithHistoryComponent.errorOnAddedDuplicate';
  private readonly errorOnUpdatedDuplicateDefaultKey: string =
    'TableDataSourceWithHistoryComponent.errorOnUpdatedDuplicate';
  private readonly errorOnAddedDuplicate: string;
  private readonly errorOnUpdatedDuplicate: string;
  private readonly _messageService: MessageService;
  private readonly _translateService: TranslateService;
  public constructor({
    columns,
    allowMultiSelect,
    allowResizableColumns,
    data,
    enablePaginator,
    enableSelection,
    itemsPerPage,
    customGlobalFilter,
    customSort,
    allowUniqueValue,
    propertiesWitchIdentifyData,
    errorOnAddedDuplicate,
    errorOnUpdatedDuplicate
  }: {
    columns: (Column & ColumnWithFilter & ColumnWithSort)[];
    allowMultiSelect?: boolean;
    allowResizableColumns?: boolean;
    data?: T[];
    enablePaginator?: boolean;
    enableSelection?: boolean;
    itemsPerPage?: number;
    customGlobalFilter?: (currentData: T, globalSearchText: string | undefined) => boolean;
    customSort?: (data1: T, data2: T, field: string) => number;
    allowUniqueValue?: boolean;
    propertiesWitchIdentifyData?: string[];
    errorOnAddedDuplicate?: string;
    errorOnUpdatedDuplicate?: string;
  }) {
    super({
      columns,
      allowMultiSelect,
      allowResizableColumns,
      data,
      enablePaginator,
      enableSelection,
      itemsPerPage,
      customGlobalFilter,
      customSort
    });
    this.allowUniqueValue = typeof allowUniqueValue === 'undefined' ? true : allowUniqueValue;
    this.propertiesWitchIdentifyData = !!propertiesWitchIdentifyData ? propertiesWitchIdentifyData : [];
    this.errorOnAddedDuplicate = !!errorOnAddedDuplicate ? errorOnAddedDuplicate : this.errorOnAddedDuplicateDefaultKey;
    this.errorOnUpdatedDuplicate = !!errorOnUpdatedDuplicate
      ? errorOnUpdatedDuplicate
      : this.errorOnUpdatedDuplicateDefaultKey;
    this._messageService = ServiceLocator.injector.get<MessageService>(MessageService as Type<MessageService>);
    this._translateService = ServiceLocator.injector.get<TranslateService>(TranslateService as Type<TranslateService>);
    this.clearHistory();
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_TABLE_DATA_SOURCE_WITH_HISTORY;
  }

  public setData(newData: T[]): void {
    super.setData(newData);
    this.clearHistory();
  }

  // DO NOT USE FOR THE INIT LOAD TABLE, prefer setData() instead or the added, deletedList will be corromped
  public addData(dataToAdd: T[]): (T & DataWithCheck & DataWithId)[] {
    let addedData;
    if (this.allowUniqueValue) {
      dataToAdd.forEach((entity) => {
        if (!this.existEqualsDatas(entity)) {
          addedData = this.addAndReturnData([entity]);
          addedData.forEach((elt) => this.addedList.push(elt));
        } else {
          this._translateService
            .get(this.errorOnAddedDuplicate, { data: entity })
            .subscribe((result) => this._messageService.showErrorMessage(result));
        }
      });
    } else {
      addedData = this.addAndReturnData(dataToAdd);
      addedData.forEach((elt) => this.addedList.push(elt));
    }

    return addedData;
  }

  private addAndReturnData(dataToAdd: T[]): (T & DataWithCheck & DataWithId)[] {
    super.addData(dataToAdd);
    const returnedDatas: (T & DataWithCheck & DataWithId)[] = [];
    dataToAdd.forEach((entity) => {
      const data = this.getEqualsDatas(entity);
      if (!!data) {
        returnedDatas.push(data);
      }
    });

    return returnedDatas;
  }

  protected getTranslateKey(key: string, componentName?: string): string {
    return `${componentName || this.getComponentName()}.${key}`;
  }

  public replaceData(dataToRemove: T & DataWithCheck & DataWithId, dataToAdd: T): T & DataWithCheck & DataWithId {
    let updateData;
    if (this.allowUniqueValue) {
      if (!this.existEqualsDatas(dataToAdd, dataToRemove._id)) {
        updateData = this.updateData(dataToRemove, dataToAdd);
      } else {
        this._translateService
          .get(this.errorOnUpdatedDuplicate, { data: dataToAdd })
          .subscribe((result) => this._messageService.showErrorMessage(result));
      }
    } else {
      updateData = this.updateData(dataToRemove, dataToAdd);
    }

    return updateData;
  }

  private updateData(dataToRemove: T & DataWithCheck & DataWithId, dataToAdd: T): T & DataWithCheck & DataWithId {
    const replacedData = this.replaceAndReturnData(dataToRemove, dataToAdd);

    this.markAsReplaced(dataToRemove, replacedData);
    this.dataSelection = [];

    return replacedData;
  }

  private markAsReplaced(
    dataToRemove: T & DataWithCheck & DataWithId,
    replacedData: T & DataWithCheck & DataWithId
  ): void {
    const indexOfAddedElt = this.indexOf(this.addedList, dataToRemove);
    if (indexOfAddedElt !== -1) {
      this.addedList.splice(indexOfAddedElt, 1, replacedData);
    } else {
      const indexOfUpdatedElt = this.indexOf(this.updatedList, dataToRemove);
      if (indexOfUpdatedElt !== -1) {
        this.updatedList.splice(indexOfUpdatedElt, 1, replacedData);
      } else {
        this.updatedList.push(replacedData);
      }
    }
  }

  public markAsUpdated(data: T & DataWithCheck & DataWithId): void {
    this.markAsReplaced(data, data);
  }

  private replaceAndReturnData(
    dataToRemove: T & DataWithCheck & DataWithId,
    dataToAdd: T
  ): T & DataWithCheck & DataWithId {
    super.replaceData(dataToRemove, dataToAdd);

    return this.getEqualsDatas(dataToAdd);
  }

  public deleteData(dataToDelete: (T & DataWithCheck & DataWithId)[]): void {
    dataToDelete.forEach((entity) => {
      const indexOfAddedElt = this.indexOf(this.addedList, entity);
      const indexOfUpdatedElt = this.indexOf(this.updatedList, entity);
      if (indexOfAddedElt !== -1) {
        this.addedList.splice(indexOfAddedElt, 1);
      } else if (indexOfUpdatedElt !== -1) {
        this.updatedList.splice(indexOfUpdatedElt, 1);
        this.deletedList.push(entity);
      } else {
        this.deletedList.push(entity);
      }
    });
    super.deleteData(dataToDelete);
  }

  public deleteDataSelection(): void {
    this.dataSelection.forEach((elt) => this.deleteData([elt]));
    this.dataSelection = [];
  }

  public indexOf(list: (T & DataWithCheck & DataWithId)[], entity: T): number {
    if (!!list && list.length > 0) {
      return list.findIndex((elt) => this.equals(entity, elt));
    } else {
      return -1;
    }
  }

  public getEqualsDatas(toFind: T, idToIgnore?: string): T & DataWithCheck & DataWithId {
    let returnedData;
    const equalsData = this.dataSrc.filter((elt) => elt._id !== idToIgnore && this.equals(toFind, elt));
    if (!!equalsData && equalsData.length > 0) {
      returnedData = equalsData[0];
    }

    return returnedData;
  }

  public existEqualsDatas(toFind: T, idToIgnore?: string): boolean {
    return !!this.getEqualsDatas(toFind, idToIgnore);
  }

  public equals(toFind: T, entity: T & DataWithCheck & DataWithId): boolean {
    if (!entity || !toFind) {
      return false;
    }
    let propertiesWitchIdentifyData: string[];
    if (!!this.propertiesWitchIdentifyData && this.propertiesWitchIdentifyData.length > 0) {
      propertiesWitchIdentifyData = this.propertiesWitchIdentifyData;
    } else {
      propertiesWitchIdentifyData = Object.keys(toFind).filter((keyOfT) => Object.keys(entity).includes(keyOfT));
    }
    for (let i = 0; i < propertiesWitchIdentifyData.length; i++) {
      const property = propertiesWitchIdentifyData[i];
      if (toFind[property] !== entity[property]) {
        return false;
      }
    }

    return true;
  }

  private dataSanizer(data: T & DataWithId & DataWithCheck): T {
    const sanitizedData = { ...data };
    delete sanitizedData._checked;
    delete sanitizedData._id;

    return sanitizedData;
  }

  public clearHistory() {
    this.addedList = [];
    this.updatedList = [];
    this.deletedList = [];
  }

  public getDeletedList(): T[] {
    return this.deletedList.map(this.dataSanizer);
  }

  public getUpdatedList(): T[] {
    return this.updatedList.map(this.dataSanizer);
  }

  public getAddedList(): T[] {
    return this.addedList.map(this.dataSanizer);
  }

  public toListModifications(): ListModificationsDTO<T> {
    return {
      addedList: this.getAddedList(),
      updatedList: this.getUpdatedList(),
      deletedList: this.getDeletedList()
    };
  }

  public mapListModifications<R>(rowTransformer: (row: T) => R): ListModificationsDTO<R> {
    return {
      addedList: this.getAddedList().map(rowTransformer),
      updatedList: this.getUpdatedList().map(rowTransformer),
      deletedList: this.getDeletedList().map(rowTransformer)
    };
  }

  public tableDataSourceHasBeenModified(): boolean {
    return !(
      (!this.addedList || (!!this.addedList && this.addedList.length === 0)) &&
      (!this.updatedList || (!!this.updatedList && this.updatedList.length === 0)) &&
      (!this.deletedList || (!!this.deletedList && this.deletedList.length === 0))
    );
  }
}
