import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
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
import { AirworthinessDocumentSearchComponent } from '../airworthiness-document-search/airworthiness-document-search.component';
import { AirworthinessDocumentSearchService } from '../airworthiness-document-search/airworthiness-document-search.service';

@Component({
  selector: 'aw-airworthiness-directive-search',
  templateUrl: '../airworthiness-document-search/airworthiness-document-search.component.html'
})
export class AirworthinessDirectiveSearchComponent extends AirworthinessDocumentSearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'Airworthiness directive list';

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

    this.SEARCH_CRITERIA_ID = AppConstants.AIRWORTHINESS_SEARCH_CRITERIA_ID;
  }

  protected initAdTableDataSource(): void {
    this.adTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'sbNumber', translateKey: this.getTranslateKey('sbNumber'), width: '15%' },
        { field: 'sbRevisionNumber', translateKey: this.getTranslateKey('sbRevisionNumber'), width: '12%' },
        { field: 'sbTitle', translateKey: this.getTranslateKey('sbTitle'), width: '25%' },
        { field: 'statusState', translateKey: this.getTranslateKey('statusState'), width: '12%' },
        { field: 'sbCompliance', translateKey: this.getTranslateKey('sbCompliance'), width: '12%' },
        { field: 'sbPublicationDate', translateKey: this.getTranslateKey('sbPublicationDate'), width: '12%' },
        { field: 'sbEffectiveDate', translateKey: this.getTranslateKey('sbEffectiveDate'), width: '12%' }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_SEARCH;
  }

  protected getTableExportName(): string {
    return AirworthinessDirectiveSearchComponent.TABLE_EXPORT_NAME;
  }

  public isAD(): boolean {
    return true;
  }

  public openNewSbad(): void {
    this.openSbad(undefined, ComponentOpenMode.Create);
  }

  public getFormComponentName(): string {
    return ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM;
  }

  protected findAirworthinessDocumentByCriteria(
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    this.searchObject.sbType = AWPropertiesConstants.SB_TYPE_AD_KEY;

    return this.airworthinessDocumentSearchService.findBireSbsBySbCriteria(
      this.searchObject,
      familyCode,
      structureType,
      variantCode,
      this.sbPublicationDateFrom,
      this.sbPublicationDateTo,
      this.sbEffectiveDateFrom,
      this.sbEffectiveDateTo
    );
  }
}
