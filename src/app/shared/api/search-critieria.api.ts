import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class SearchCriteriaApi extends AbstractApi {
  private static readonly baseUrl: string = '/search_criteria';

  public readonly getContextList: string = super.appendToBaseUrl('/get_context_list');
  public readonly getContext: string = super.appendToBaseUrl('/get_context');
  public readonly saveContext: string = super.appendToBaseUrl('/save_context');
  public readonly deleteContext: string = super.appendToBaseUrl('/delete_context');

  public readonly setAsFavorite: string = super.appendToBaseUrl('/set_as_favorite');
  public readonly removeAsFavorite: string = super.appendToBaseUrl('/remove_as_favorite');

  public constructor() {
    super(SearchCriteriaApi.baseUrl);
  }
}
