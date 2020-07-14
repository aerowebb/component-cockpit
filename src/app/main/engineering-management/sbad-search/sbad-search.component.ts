import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AppConstants } from '../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { AirworthinessDocumentSearchComponent } from '../airworthiness-document-search/airworthiness-document-search.component';
import { AirworthinessDocumentSearchService } from '../airworthiness-document-search/airworthiness-document-search.service';

@Component({
  selector: 'aw-sbad-search',
  templateUrl: '../airworthiness-document-search/airworthiness-document-search.component.html'
})
export class SbadSearchComponent extends AirworthinessDocumentSearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'Service bulletin list';

  public propertySubType: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    sessionService: SessionService,
    confirmationService: ConfirmationService,
    exportService: ExportService,
    propertiesService: PropertiesService,
    translateService: TranslateService,
    dateService: DateService,
    airworthinessDocumentSearchService: AirworthinessDocumentSearchService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      confirmationService,
      exportService,
      propertiesService,
      translateService,
      dateService,
      airworthinessDocumentSearchService
    );

    this.SEARCH_CRITERIA_ID = AppConstants.SERVICE_BULLETIN_SEARCH_CRITERIA_ID;
    this.loadSubTypes();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_SBAD_SEARCH;
  }

  protected getTableExportName(): string {
    return SbadSearchComponent.TABLE_EXPORT_NAME;
  }

  public isAD(): boolean {
    return false;
  }

  public showSubType(): boolean {
    return false;
  }

  public getFormComponentName(): string {
    return ComponentConstants.ENG_SBAD_FORM;
  }

  protected findAirworthinessDocumentByCriteria(
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.airworthinessDocumentSearchService.findBireSbsBySbCriteriaAd(
      this.searchObject,
      familyCode || '',
      structureType || '',
      variantCode || '',
      this.sbPublicationDateFrom,
      this.sbPublicationDateTo,
      this.sbEffectiveDateFrom,
      this.sbEffectiveDateTo
    );
  }

  protected loadTypes(): void {
    this.propertiesService.getValue('getSbTypeMap').subscribe(
      (results) => {
        this.propertyType = results.filter((obj) => {
          return (
            obj.value !== AWPropertiesConstants.SB_TYPE_AD_KEY && obj.value !== AWPropertiesConstants.SB_TYPE_AMG_KEY
          );
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }
  public loadSubTypes(): void {
    this.propertiesService.getValue('getAdditionalGuidelineSubTypeMap').subscribe(
      (results) => {
        if (results) {
          this.propertySubType = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }
}
