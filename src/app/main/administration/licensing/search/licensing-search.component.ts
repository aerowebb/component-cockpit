import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AWLicenseReportCustomDTO } from '../../../../shared/types/api-output-types/administration-licensing/aw-license-report-custom-dto.interface';
import { BsdeAwCustomLicensingDTO } from '../../../../shared/types/api-output-types/administration-licensing/bsde-aw-custom-licensing-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { LicensingSearchService } from './licensing-search.service';

@Component({
  selector: 'aw-licensing-search',
  styleUrls: ['./licensing-search.component.scss'],
  templateUrl: './licensing-search.component.html'
})
export class LicensingSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ICON_NONE = 0;
  public static readonly ICON_GREEN = 1;
  public static readonly ICON_RED = 2;
  public readonly componentId: typeof LicensingSearchComponent;

  public pageData: BsdeAwCustomLicensingDTO;
  public licenseReport: string;
  public alertIcon: number = 0;
  public showSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly licensingSearchService: LicensingSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentId = LicensingSearchComponent;
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_LICENSING_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  /*************************************************************************
   * Init
   *************************************************************************/
  private init() {
    this.pageData = {};
    this.findBsdeAwCustoms();
  }

  /*************************************************************************
   * Load Screen Data
   *************************************************************************/
  private findBsdeAwCustoms() {
    this.licensingSearchService.findBsdeAwCustomsForLicensing().subscribe(
      (result: BsdeAwCustomLicensingDTO) => {
        this.pageData = result;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindingBsdeAwCustoms'));
      }
    );
  }

  /*************************************************************************
   * Check Licensing
   *************************************************************************/
  public checkLicensing() {
    this.showSpinner = true;
    this.licensingSearchService.checkAWLicense().subscribe(
      (result: AWLicenseReportCustomDTO) => {
        this.alertIcon =
          result.alertIcon === 'ICON_NONE_LIGHT'
            ? LicensingSearchComponent.ICON_NONE
            : result.alertIcon === 'ICON_GREEN_LIGHT'
            ? LicensingSearchComponent.ICON_GREEN
            : LicensingSearchComponent.ICON_RED;
        if (!!result.licensingReport) {
          this.licenseReport = result.licensingReport;
        }

        if (!!result.reportException) {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFetchingLicense'));
        }
        this.showSpinner = false;
      },
      (error) => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFetchingLicense'));
      }
    );
  }
}
