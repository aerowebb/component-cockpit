import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { SerializationService } from '../shared/services/serialization.service';
import { SessionService } from '../shared/services/session.service';
import { ObjectUtils } from '../shared/utils/object-utils';
import { StringUtils } from '../shared/utils/string-utils';
import { LocalStorage } from '../storage/local-storage';
import { LocalStorageKeys } from '../storage/local-storage-keys';

@Injectable()
export class CanActivateGuard implements CanActivate {
  // tslint:disable-next-line:max-line-length
  private static readonly BASE64_ENCODED_REGEXP: RegExp = /.+/; // /^(?:[a-zA-Z0-9+\/]{4})*(?:|(?:[a-zA-Z0-9+\/]{3}=)|(?:[a-zA-Z0-9+\/]{2}==)|(?:[a-zA-Z0-9+\/]{1}===))$/;
  private static readonly CONTEXTUALIZED_MAIN_ROUTE_REGEXP: RegExp = /^\/main\/(.+)\/(.+)$/;

  public constructor(
    private readonly localStorage: LocalStorage,
    private readonly serializationService: SerializationService,
    private readonly sessionService: SessionService
  ) {}

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.handleRequestedUrl(state);

    const isLogged = this.sessionService.isOpen();

    if (!isLogged) {
      this.sessionService.redirectToLogin();
    }

    return isLogged;
  }

  private handleRequestedUrl(state: RouterStateSnapshot): void {
    if (!StringUtils.isEmpty(state.url)) {
      let urlMatchList = state.url.match(CanActivateGuard.CONTEXTUALIZED_MAIN_ROUTE_REGEXP);

      if (ObjectUtils.isDefined(urlMatchList)) {
        urlMatchList = urlMatchList as RegExpMatchArray;

        const componentId =
          urlMatchList.length > 1 && CanActivateGuard.BASE64_ENCODED_REGEXP.test(urlMatchList[1])
            ? urlMatchList[1]
            : undefined;
        const objectId =
          urlMatchList.length > 2 && CanActivateGuard.BASE64_ENCODED_REGEXP.test(urlMatchList[2])
            ? urlMatchList[2]
            : undefined;
        const requestedUrlParams = {
          id: objectId,
          object: componentId
        };

        if (ObjectUtils.isDefined(requestedUrlParams.object)) {
          this.localStorage.save(
            LocalStorageKeys.REQUESTED_URL,
            this.serializationService.serialize(requestedUrlParams)
          );
        }
      }
    }
  }
}
