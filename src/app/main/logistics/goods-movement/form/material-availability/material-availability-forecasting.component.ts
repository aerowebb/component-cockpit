import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidtSiteDTO } from '../../../../../shared/types/api-types/bidt-site-dto.interface';
import { ForecastObjectInput } from '../../../../../shared/types/component-input-types/maintenance/forecast-object-input.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { ProcurementRequestsTableService } from '../../../../maintenance/procurement-request/procurement-requests-table.service';
import { GoodsMovementFormService } from '../goods-movement-form.service';

interface MainDataInformation {
  mroCenter?: string;
  startDate?: string;
  endDate?: string;
  aircraftNumber: number;
}

interface WorkPackageInforamtion {
  nbSimulated: number;
  nbScheduled: number;
  nbReleased: number;
  nbOnGoing: number;
  nbPerformed: number;
}

@Component({
  selector: 'aw-material-availability-context-form',
  styleUrls: ['../goods-movement-form.component.scss'],
  templateUrl: '../goods-movement-form.component.html'
})
export class MaterialAvailabilityForecastingFormComponent extends FormPageComponent<PageComponentData>
  implements OnInit {
  private forecastObject?: ForecastObjectInput;
  public procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[];

  public mainDataInformation: MainDataInformation;
  public workPackageInforamtion: WorkPackageInforamtion;
  public statusList: LabelValue<string>[];
  public startFirstPartStatusList: number = 0;
  public endFirstPartStatusList: number = 3;
  public mroCenter: BidtSiteDTO;
  public componentContext: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public sessionService: SessionService,
    private readonly goodsMovementFormService: GoodsMovementFormService,
    private readonly propertiesService: PropertiesService,
    public translateService: TranslateService,
    private readonly procurementRequestsTableService: ProcurementRequestsTableService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.init();
  }

  private init(): void {
    this.mainDataInformation = { aircraftNumber: 0 };
    this.forecastObject = this.componentData.objectId
      ? (this.serializationService.deserialize(this.componentData.objectId) as ForecastObjectInput)
      : undefined;

    if (this.forecastObject) {
      this.goodsMovementFormService.findSiteById(this.forecastObject.siteId).subscribe((site) => {
        this.mroCenter = site;
        this.initData();
        this.setComponentContext();
      });

      const wpIds = this.forecastObject.workPackageIdList.map((workPackageId: string) => {
        return {
          projectId: workPackageId as string
        };
      });
      this.procurementRequestsTableService
        .findProcReqItemsAndStockQuantityIndicators(undefined, wpIds)
        .subscribe((proqReq: ProcurementRequestAndIndicatorsOutputDTO[]) => {
          this.procurementRequests = proqReq;
        });
    }
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM;
  }

  private setComponentContext(): void {
    forkJoin([
      this.translateService.get(this.getTranslateKey('from')),
      this.translateService.get(this.getTranslateKey('to'))
    ]).subscribe({
      next: ([translation1, translation2]) => {
        if (this.forecastObject) {
          this.componentContext = `${this.mroCenter.siteName} | ${translation1} ${moment(
            this.forecastObject.startDate
          ).format(this.sessionService.dateFormatMomentJS)} ${translation2} ${moment(
            this.forecastObject.endDate
          ).format(this.sessionService.dateFormatMomentJS)}`;
          this.displayComponentContext(this.componentContext, false);
        }
      }
    });
  }

  public onReload(): void {
    this.initData();
  }

  private initData(): void {
    this.mainDataInformation = { aircraftNumber: 0 };

    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((result) => {
      const nbOfStatus = 5;
      this.statusList = result.slice(this.startFirstPartStatusList, nbOfStatus);
    });

    this.workPackageInforamtion = {
      nbSimulated: 0,
      nbScheduled: 0,
      nbReleased: 0,
      nbOnGoing: 0,
      nbPerformed: 0
    };

    this.initMainDataInformation();
    this.setWorkPackageInfo();
  }

  private initMainDataInformation(): void {
    this.setMroCenterInfo();
    this.setDatesInfo();
  }

  private setMroCenterInfo(): void {
    this.mainDataInformation.mroCenter = `${this.mroCenter.siteName} (${this.mroCenter.siteCode})`;
  }

  private setDatesInfo(): void {
    if (this.forecastObject) {
      this.mainDataInformation.startDate = moment(this.forecastObject.startDate).format(
        this.sessionService.dateTimeFormatMomentJS
      );
      this.mainDataInformation.endDate = moment(this.forecastObject.endDate).format(
        this.sessionService.dateTimeFormatMomentJS
      );
    }
  }

  private setWorkPackageInfo(): void {
    const workPackageobservablesList: Observable<BidmProjectDTO>[] = [];
    if (this.forecastObject) {
      this.forecastObject.workPackageIdList.forEach((wp) => {
        workPackageobservablesList.push(this.goodsMovementFormService.findWorkPackage(wp));
      });
      forkJoin(workPackageobservablesList)
        .pipe(
          finalize(() => {
            const valueList: string[] = [
              this.workPackageInforamtion.nbSimulated.toString(),
              this.workPackageInforamtion.nbScheduled.toString(),
              this.workPackageInforamtion.nbReleased.toString(),
              this.workPackageInforamtion.nbOnGoing.toString(),
              this.workPackageInforamtion.nbPerformed.toString()
            ];
            this.statusList.forEach((status, i) => {
              status.value = valueList[i];
            });
          })
        )
        .subscribe((wpList) => {
          let aircraftMsnComparator = '';
          wpList.forEach((wp) => {
            switch (wp.statusState) {
              case AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED:
                this.workPackageInforamtion.nbSimulated++;
                break;

              case AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED:
                this.workPackageInforamtion.nbScheduled++;
                break;

              case AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED:
                this.workPackageInforamtion.nbReleased++;
                break;

              case AWPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING:
                this.workPackageInforamtion.nbOnGoing++;
                break;

              case AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED:
                this.workPackageInforamtion.nbPerformed++;
                break;

              default:
                break;
            }

            if (wp.aircraftMsn && aircraftMsnComparator !== wp.aircraftMsn) {
              aircraftMsnComparator = wp.aircraftMsn;
              this.mainDataInformation.aircraftNumber++;
            }
          });
        });
    }
  }
}
