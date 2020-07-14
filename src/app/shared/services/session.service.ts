import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { NgPublicApi } from '../../shared/api/ng-public.api';
import { PublicApi } from '../../shared/api/public.api';
import { SessionApi } from '../../shared/api/session.api';
import { UserProfileBusinessApi } from '../../shared/api/user-profile-business.api';
import { LangConstants } from '../../shared/constants/lang-constants';
import { AbstractHttpService } from '../../shared/http/abstract-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { UserConnectionDTO } from '../../shared/types/api-types/user-connection-dto.interface';
import { LocalStorage } from '../../storage/local-storage';
import { LocalStorageKeys } from '../../storage/local-storage-keys';
import { AppConstants } from '../constants/app-constants';
import { BidoFunctionTypeConstants } from '../constants/bido-function-type-constants';
import { UserWorkflowInput } from '../types/api-input-types/session/user-workflow-input';
import { UserWorkflowOutput } from '../types/api-output-types/session/user-workflow-output';
import { BidoProfileDTO } from '../types/api-types/bido-profile-dto.interface';
import { BidtSiteDTO } from '../types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../types/api-types/bidt-warehouse-dto.interface';
import { UserRightDTO } from '../types/api-types/user-right-dto.interface';
import { ListUtils } from '../utils/list-utils';
import { ObjectUtils } from '../utils/object-utils';
import { StringUtils } from '../utils/string-utils';
import { TranslateUtils } from '../utils/translate-utils';

import { AppVersionService } from './app-version.service';
import { MessageService } from './message.service';
import { PropertiesService } from './properties.service';

@Injectable()
export class SessionService extends AbstractHttpService {
  private static readonly REDIRECTION_MESSAGE_TIMEOUT: number = 2000;

  private _calendarFormat: object;
  private _hrModuleActivated: boolean;
  private _loggedUser: UserConnectionDTO | undefined;
  private _mmModuleActivated: boolean;
  private _userRightList: UserRightDTO[];

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly appVersionService: AppVersionService,
    private readonly router: Router,
    private readonly localStorage: LocalStorage,
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService,
    private readonly publicApi: PublicApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly sessionApi: SessionApi,
    private readonly propertiesService: PropertiesService,
    private readonly ngPublicApi: NgPublicApi
  ) {
    super(http, appConfigService);
    super.setBaseUrl(AppConstants.BASE_URL);

    this._hrModuleActivated = false;
    this._loggedUser = undefined;
    this._mmModuleActivated = false;
    this._userRightList = [];
  }

  public get calendarYearRange(): string {
    return '1970:2070';
  }

  public get calendarFormat(): object {
    return this._calendarFormat;
  }

  public get dateFormatMomentJS(): string {
    return AppConstants.MOMENTJS_DATE;
  }

  public get dateFormatPrimeNG(): string {
    return this.translateService.currentLang === LangConstants.FRENCH_CODE ? 'dd/mm/yy' : 'mm/dd/yy';
  }

  public get dateTimeFormatMomentJS(): string {
    return AppConstants.MOMENTJS_DATE_TIME;
  }

  public get dateTimeWithSecondFormatMomentJS(): string {
    return AppConstants.MOMENTJS_DATE_TIME_WITH_SECOND;
  }

  public get hrModuleActivated(): boolean {
    return this._hrModuleActivated;
  }

  public get isSpecificDassault(): boolean {
    return this.appVersionService.appVersion.specificDAV;
  }

  public get isSpecificMHIAEL(): boolean {
    return this.appVersionService.appVersion.specificMHIAEL;
  }

  public get isSpecificSAE(): boolean {
    return this.appVersionService.appVersion.specificSAE;
  }

  public get isSpecificBRASIDAS(): boolean {
    return this.appVersionService.appVersion.specificBRASIDAS;
  }

  public get loggedUser(): UserConnectionDTO | undefined {
    return this._loggedUser;
  }

  public get mmModuleActivated(): boolean {
    return this._mmModuleActivated;
  }

  public get redirectionMessage(): string {
    return this.localStorage.load<string>(LocalStorageKeys.REDIRECTION_MESSAGE);
  }

  public set redirectionMessage(redirectionMessage: string) {
    this.localStorage.save<string>(LocalStorageKeys.REDIRECTION_MESSAGE, redirectionMessage);
  }

  public get timeWithSecondFormatMomentJS(): string {
    return AppConstants.MOMENTJS_TIME_WITH_SECOND;
  }

  public get userFirstName(): string {
    return this._loggedUser ? StringUtils.orEmpty(this._loggedUser.firstName) : '';
  }

  public get userLastName(): string {
    return this._loggedUser ? StringUtils.orEmpty(this._loggedUser.lastName) : '';
  }

  public get client(): string {
    return this._loggedUser ? StringUtils.orEmpty(this._loggedUser.client) : '';
  }

  public get instance(): string {
    return this._loggedUser ? StringUtils.orEmpty(this._loggedUser.instance) : '';
  }

  public get system(): string {
    return this._loggedUser ? StringUtils.orEmpty(this._loggedUser.system) : '';
  }

  public clear(): void {
    this._loggedUser = undefined;
    this.localStorage.remove(LocalStorageKeys.LOGGED_USED);
  }

  public close(): void {
    super.get<void>(this.addLegacyServiceUrl(this.publicApi.logout)).subscribe();

    this.propertiesService.resetCache();
    this.clear();
    this.redirectToLogin();
  }

  public init(): void {
    this.registerAdditionalLangs();
    this.setInitialLang();

    if (!!this.redirectionMessage) {
      const redirectionMessage = this.redirectionMessage;
      this.localStorage.remove(LocalStorageKeys.REDIRECTION_MESSAGE);

      setTimeout(() => {
        this.messageService.showErrorMessage(redirectionMessage);
      }, SessionService.REDIRECTION_MESSAGE_TIMEOUT);
    }
  }

  public getAccessibleFunctions(entryComponents: string[]): Observable<{ [entryComponent: string]: string[] }> {
    return super.post<string[], { [entryComponent: string]: string[] }>(
      this.addNgServiceUrl(this.sessionApi.accessibleFunctions),
      entryComponents
    );
  }

  public getUserWorkflow(userWorkflowInput: UserWorkflowInput): Observable<UserWorkflowOutput> {
    return super.post<UserWorkflowInput, UserWorkflowOutput>(
      this.addNgServiceUrl(this.sessionApi.userWorflow),
      userWorkflowInput
    );
  }

  public getClient(): Observable<string> {
    return super.get<string>(this.addNgServiceUrl(this.ngPublicApi.getClient));
  }

  public initSpecificClient(): void {
    // Set specific information
    this.getClient().subscribe((result: string) => {
      this.appVersionService.setSpecificClient(atob(result));
    });
  }

  public hasUserRightByProfile(profile: string): boolean {
    return this._userRightList.some(
      (userRight) =>
        ObjectUtils.isDefined(userRight.profile) && (userRight.profile as BidoProfileDTO).profileId === profile
    );
  }

  public hasUserRightByUseCase(useCaseCode: string, accessLevel: number): boolean {
    for (const userRight of this._userRightList) {
      let accessLevelOk = false;

      if (ObjectUtils.isDefined(userRight.rightByUseCaseMap)) {
        for (const key in userRight.rightByUseCaseMap) {
          if (key === useCaseCode) {
            const value = userRight.rightByUseCaseMap[key] as string;
            const currentLevel = StringUtils.isNullOrEmpty(value) ? 0 : Number(value);
            if (currentLevel >= accessLevel) {
              accessLevelOk = true;
              break;
            }
          }
        }
      }

      if (accessLevelOk) {
        return true;
      }
    }

    return false;
  }

  public isOpen(): boolean {
    // TODO: to remove; only for dev purpose
    this._loggedUser = this.localStorage.load<UserConnectionDTO>(LocalStorageKeys.LOGGED_USED);
    // END

    return ObjectUtils.isDefined(this._loggedUser);
  }

  public navigateToMain(): void {
    this.navigate('/main');
  }

  public open(): void {
    this.loadActivatedModuleList();
    this.loadUserRightList();
  }

  public redirectToLogin(): void {
    this.navigate('/login');
  }

  public registerUser(loggedUser: UserConnectionDTO): void {
    this._loggedUser = loggedUser;

    // TODO: to remove; only for dev purpose
    this.localStorage.save<UserConnectionDTO>(LocalStorageKeys.LOGGED_USED, this._loggedUser);
    // END
  }

  public useLang(lang: string): Observable<unknown> {
    this.setCalendarFormat(lang);
    this.saveLang(lang);

    return forkJoin([this.translateService.use(lang), this.synchronizeCurrentLangWithBackEnd(lang)]);
  }

  private loadActivatedModuleList(): void {
    // HR
    super
      .post<string, boolean>(
        this.addNgServiceUrl(this.userProfileBusinessApi.isBuildingBlockInstalled),
        BidoFunctionTypeConstants.MODULE_HR
      )
      .subscribe((hrModuleActivatedResult) => {
        this._hrModuleActivated = ObjectUtils.isDefined(hrModuleActivatedResult) && hrModuleActivatedResult;
      });

    // MM
    super
      .post<string, boolean>(
        this.addNgServiceUrl(this.userProfileBusinessApi.isBuildingBlockInstalled),
        BidoFunctionTypeConstants.MODULE_MM
      )
      .subscribe((mmModuleActivatedResult) => {
        this._mmModuleActivated = ObjectUtils.isDefined(mmModuleActivatedResult) && mmModuleActivatedResult;
      });
  }

  private loadLang(): string {
    return this.localStorage.load<string>(LocalStorageKeys.LANG);
  }

  private loadUserRightList(): void {
    super
      .post<void, UserRightDTO[]>(this.addNgServiceUrl(this.userProfileBusinessApi.getUserRightList))
      .subscribe((results) => {
        this._userRightList = ListUtils.orEmpty(results);
      });
  }

  private navigate(route: string): void {
    this.router.navigate([route]).catch((error) => {
      this.messageService.showErrorMessage('global.errorOnNavigate');
      console.error(error); // tslint:disable-line:no-console
    });
  }

  private registerAdditionalLangs(): void {
    // Register new locales
    registerLocaleData(localeFr);
  }

  private saveLang(lang: string): void {
    this.localStorage.save<string>(LocalStorageKeys.LANG, lang);
  }

  private setCalendarFormat(lang: string): void {
    switch (lang) {
      case LangConstants.FRENCH_CODE:
        this._calendarFormat = TranslateUtils.calendarPatternFrench();
        break;

      default:
        this._calendarFormat = TranslateUtils.calendarPatternEnglish();
        break;
    }
  }

  private setInitialLang(): void {
    // This language will be used as a fallback
    // when a translation isn't found in the current language
    this.translateService.setDefaultLang(AppConstants.DEFAULT_LANG);

    // The lang to use
    const userLang = this.loadLang();
    const browserLang = this.translateService.getBrowserLang();

    const currentLang =
      !!userLang && AppConstants.AVAILABLE_LANGS.includes(userLang)
        ? userLang
        : !!browserLang && AppConstants.AVAILABLE_LANGS.includes(browserLang)
        ? browserLang
        : AppConstants.DEFAULT_LANG;

    this.translateService.use(currentLang).subscribe(() => {
      this.setCalendarFormat(this.translateService.currentLang);
    });
  }

  private synchronizeCurrentLangWithBackEnd(lang: string): Observable<void> {
    return super.post<string, void>(this.addNgServiceUrl(this.userProfileBusinessApi.updateLocale), lang);
  }

  private addLegacyServiceUrl(apiUrl: string): string {
    return AppConstants.SERVICE_URL + apiUrl;
  }

  private addNgServiceUrl(apiUrl: string): string {
    return AppConstants.NG_SERVICE_URL + apiUrl;
  }

  public getUserSiteId(): Observable<BidtSiteDTO | undefined> {
    return super.post<void, BidtSiteDTO>(this.addNgServiceUrl(this.userProfileBusinessApi.getUserSite));
  }

  public getUserWarehouseId(): Observable<BidtWarehouseDTO | undefined> {
    return super.post<void, BidtWarehouseDTO>(this.addNgServiceUrl(this.userProfileBusinessApi.getUserWarehouse));
  }
}
