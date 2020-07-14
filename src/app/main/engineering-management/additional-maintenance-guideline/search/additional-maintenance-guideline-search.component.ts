import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BireSbDTO } from '../../../../shared/types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { AirworthinessDocumentSearchComponent } from '../../airworthiness-document-search/airworthiness-document-search.component';
import { AirworthinessDocumentSearchService } from '../../airworthiness-document-search/airworthiness-document-search.service';

@Component({
  selector: 'aw-sbad-search',
  templateUrl: '../../airworthiness-document-search/airworthiness-document-search.component.html'
})
export class AdditionalMaintenanceGuidelineSearchComponent extends AirworthinessDocumentSearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'Additional Maintenance Guideline list';
  public readonly subTypeMap: Map<string, string>;
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

    this.SEARCH_CRITERIA_ID = AppConstants.ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH_CRITERIA_ID;
  }

  protected initAdTableDataSource(): void {
    this.adTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'sbNumber', translateKey: this.getTranslateKey('sbNumber'), width: '12%' },
        { field: 'sbRevisionNumber', translateKey: this.getTranslateKey('sbRevisionNumber'), width: '10%' },
        { field: 'sbTitle', translateKey: this.getTranslateKey('sbTitle'), width: '28%' },
        { field: 'statusState', translateKey: this.getTranslateKey('statusState'), width: '10%' },
        { field: 'sbSubType', translateKey: this.getTranslateKey('sbSubType'), width: '10%' },
        { field: 'sbCompliance', translateKey: this.getTranslateKey('sbCompliance'), width: '10%' },
        { field: 'sbPublicationDate', translateKey: this.getTranslateKey('sbPublicationDate'), width: '10%' },
        { field: 'sbEffectiveDate', translateKey: this.getTranslateKey('sbEffectiveDate'), width: '10%' }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH;
  }

  protected getTableExportName(): string {
    return AdditionalMaintenanceGuidelineSearchComponent.TABLE_EXPORT_NAME;
  }

  public isAD(): boolean {
    return false;
  }

  public getFormComponentName(): string {
    return ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM;
  }

  public showSubType(): boolean {
    return true;
  }

  protected findAirworthinessDocumentByCriteria(
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.airworthinessDocumentSearchService.findBireSbsBySbCriteriaAmg(
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
}
