import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserProfileManagementApi } from '../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { StringUtils } from '../../shared/utils/string-utils';
import { FavoriteEntry } from '../types/favorite-entry.interface';
import { ObjectUtils } from '../utils/object-utils';

import { SerializationService } from './serialization.service';

@Injectable()
export class FavoriteService extends AbstractAwHttpService {
  private static readonly COMPONENT_DATA_SEPARATOR: string = '__DATA__';
  private static readonly COMPONENT_OBJECT_SEPARATOR: string = '__OBJ__';
  private static readonly COMPONENT_OBJECT_CLOSING_BRACE: string = '@END@';
  private static readonly COMPONENT_OBJECT_OPENING_BRACE: string = '@START@';

  private readonly favoriteAddedSource: Subject<FavoriteEntry>;
  private readonly favoriteRemovedSource: Subject<FavoriteEntry>;
  private readonly favoriteUpdateConfirmedSource: Subject<string>;

  private readonly _favoriteAdded$: Observable<FavoriteEntry>;
  private readonly _favoriteRemoved$: Observable<FavoriteEntry>;
  private readonly _favoriteUpdateConfirmed$: Observable<string>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly serializationService: SerializationService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);

    this.favoriteAddedSource = new Subject<FavoriteEntry>();
    this.favoriteRemovedSource = new Subject<FavoriteEntry>();
    this.favoriteUpdateConfirmedSource = new Subject<string>();

    this._favoriteAdded$ = this.favoriteAddedSource.asObservable();
    this._favoriteRemoved$ = this.favoriteRemovedSource.asObservable();
    this._favoriteUpdateConfirmed$ = this.favoriteUpdateConfirmedSource.asObservable();
  }

  public get favoriteAdded$(): Observable<FavoriteEntry> {
    return this._favoriteAdded$;
  }

  public get favoriteRemoved$(): Observable<FavoriteEntry> {
    return this._favoriteRemoved$;
  }

  public get favoriteUpdateConfirmed$(): Observable<string> {
    return this._favoriteUpdateConfirmed$;
  }

  public confirmFavoriteUpdate(key: string): void {
    this.favoriteUpdateConfirmedSource.next(key);
  }

  public favorites(): Observable<FavoriteEntry[]> {
    return super.post<void, string[]>(this.userProfileManagementApi.favorites).pipe(
      map<string[], (FavoriteEntry | undefined)[]>((results: string[]) => {
        return results.map(this.deserializeFavorite.bind(this));
      }),
      map<(FavoriteEntry | undefined)[], FavoriteEntry[]>((results: (FavoriteEntry | undefined)[]) => {
        return results.filter((result) => ObjectUtils.isDefined(result)) as FavoriteEntry[];
      })
    );
  }

  public getDefaultFavorite(): Observable<FavoriteEntry | undefined> {
    return super
      .post<void, string>(this.userProfileManagementApi.getDefaultFavorite)
      .pipe(map<string, FavoriteEntry | undefined>(this.deserializeFavorite, this));
  }

  public isFavorite(componentName: string, objectId?: string): Observable<boolean> {
    return this.favorites().pipe(
      map<FavoriteEntry[], boolean>((results: FavoriteEntry[]) => {
        const isFavorite = results.some((result) => {
          return result.componentId === componentName && (!objectId || result.objectId === objectId);
        });

        return isFavorite;
      })
    );
  }

  public removeDefaultFavorite(): Observable<void> {
    return super.post<void, void>(this.userProfileManagementApi.removeDefaultFavorite);
  }

  public reportFavoriteErrorUpdate(key: string): void {
    this.favoriteUpdateConfirmedSource.error(key);
  }

  public setDefaultFavorite(favorite: FavoriteEntry): Observable<void> {
    return super.post<string, void>(this.userProfileManagementApi.setDefaultFavorite, this.serializeFavorite(favorite));
  }

  public updateFavoriteState(previousState: boolean, componentId: string, objectId?: string, context?: string): void {
    const favorite: FavoriteEntry = {
      componentId,
      objectId: objectId || '',
      context: context || '',
      shouldOpenAtStartup: false
    };
    const favoriteKey = this.serializeFavorite(favorite);
    if (previousState) {
      this.removeFavorite(favorite, favoriteKey);
    } else {
      this.addFavorite(favorite, favoriteKey);
    }
  }

  public fromString(str: string): FavoriteEntry {
    const favorite: FavoriteEntry = {
      componentId: str.substring(0, str.indexOf(FavoriteService.COMPONENT_OBJECT_SEPARATOR)),
      objectId: str.substring(
        str.indexOf(FavoriteService.COMPONENT_OBJECT_SEPARATOR) + FavoriteService.COMPONENT_OBJECT_SEPARATOR.length
      )
    };

    return favorite;
  }

  public toString(favorite: FavoriteEntry): string {
    return `${favorite.componentId}${FavoriteService.COMPONENT_OBJECT_SEPARATOR}${favorite.objectId}`;
  }

  private addFavorite(favorite: FavoriteEntry, favoriteKey: string): void {
    super.post<string, void>(this.userProfileManagementApi.addFavorite, favoriteKey).subscribe(
      () => {
        this.favoriteAddedSource.next(favorite);
      },
      () => {
        this.favoriteAddedSource.error(favorite);
      }
    );
  }

  private deserializeFavorite(str: string): FavoriteEntry | undefined {
    if (StringUtils.isNullOrEmpty(str)) {
      return undefined;
    } else {
      const componentData = str.substring(0, str.indexOf(FavoriteService.COMPONENT_OBJECT_SEPARATOR));

      const componentId = componentData.substring(0, componentData.indexOf(FavoriteService.COMPONENT_DATA_SEPARATOR));

      const context = componentData.endsWith(FavoriteService.COMPONENT_DATA_SEPARATOR)
        ? ''
        : componentData.substring(
            componentData.indexOf(FavoriteService.COMPONENT_DATA_SEPARATOR) +
              FavoriteService.COMPONENT_DATA_SEPARATOR.length
          );

      let serializedObjectId = str.substring(
        str.indexOf(FavoriteService.COMPONENT_OBJECT_SEPARATOR) + FavoriteService.COMPONENT_OBJECT_SEPARATOR.length
      );
      serializedObjectId = serializedObjectId.replace(FavoriteService.COMPONENT_OBJECT_OPENING_BRACE, '{');
      serializedObjectId = serializedObjectId.replace(FavoriteService.COMPONENT_OBJECT_CLOSING_BRACE, '}');

      try {
        const objectId = StringUtils.isEmpty(serializedObjectId)
          ? ''
          : this.serializationService.serialize(this.serializationService.deserialize(serializedObjectId));

        const favorite: FavoriteEntry = {
          componentId,
          objectId
        };
        if (!!context) {
          favorite.context = context;
        }

        return favorite;
      } catch (err) {
        return undefined;
      }
    }
  }

  private removeFavorite(favorite: FavoriteEntry, favoriteKey: string): void {
    super.post<string, void>(this.userProfileManagementApi.removeFavorite, favoriteKey).subscribe(() => {
      this.favoriteRemovedSource.next(favorite);
    });
  }

  private serializeFavorite(favorite: FavoriteEntry): string {
    const context = !!favorite.context ? favorite.context : '';

    let serializedObjectId = '';
    if (!!favorite.objectId) {
      serializedObjectId = this.serializationService.serialize(favorite.objectId);
      serializedObjectId = serializedObjectId.substring(1, serializedObjectId.length - 1);
      serializedObjectId = serializedObjectId.replace('{', FavoriteService.COMPONENT_OBJECT_OPENING_BRACE);
      serializedObjectId = serializedObjectId.replace('}', FavoriteService.COMPONENT_OBJECT_CLOSING_BRACE);
    }

    return (
      favorite.componentId +
      FavoriteService.COMPONENT_DATA_SEPARATOR +
      context +
      FavoriteService.COMPONENT_OBJECT_SEPARATOR +
      serializedObjectId
    );
  }
}
