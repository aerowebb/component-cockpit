import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MessageService as PrimeNgMessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DYNAMIC_COMPONENT_REGISTRY } from './dynamic-component-registry';
import { GLOBAL_ERROR_HANDLER_PROVIDERS } from './global-error-handler/providers';
import { HTTP_INTERCEPTORS_PROVIDERS } from './http-interceptors/providers';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { AngularCommonSharedModule } from './shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from './shared/angular-generic-templates-shared-module';
import { API_PROVIDERS } from './shared/api/providers';
import { AppCommonSharedModule } from './shared/app-common-shared.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { AppConfigService } from './shared/services/app-config.service';
import { SERVICE_PROVIDERS } from './shared/services/providers';
import { ServiceLocator } from './shared/utils/service-locator';
import { LocalStorage } from './storage/local-storage';
import { MultiTranslateHttpLoader } from './translate/multi-translate-http-loader';

/******************************************************************************
 * Modules
 *************************************************************************** */

const ANGULAR_MODULES = [BrowserAnimationsModule, BrowserModule, HttpClientModule, MatDialogModule, OverlayModule];
const PRIMENG_MODULES = [DropdownModule, ToastModule];
const EXTERNAL_MODULES = [...ANGULAR_MODULES, ...PRIMENG_MODULES];
const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AppComponent, LoginComponent, PageNotFoundComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [LocalStorage, LoginService, PrimeNgMessageService];

/******************************************************************************
 * Functions
 *************************************************************************** */
export function createAppInitializer(configService: AppConfigService): () => Promise<void[]> {
  return () => Promise.all([configService.load()]);
}

export function createTranslateLoader(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/' },
    { prefix: './assets/i18n/administration/attributes/' },
    { prefix: './assets/i18n/administration/background-jobs/' },
    { prefix: './assets/i18n/administration/business-partner/' },
    { prefix: './assets/i18n/administration/catalog/' },
    { prefix: './assets/i18n/administration/contact/' },
    { prefix: './assets/i18n/administration/enterprise-definition/' },
    { prefix: './assets/i18n/administration/enterprise-map/' },
    { prefix: './assets/i18n/administration/folder-type/' },
    { prefix: './assets/i18n/administration/licensing/' },
    { prefix: './assets/i18n/administration/profiles/' },
    { prefix: './assets/i18n/administration/todo-list/' },
    { prefix: './assets/i18n/administration/site/' },
    { prefix: './assets/i18n/administration/users/' },
    { prefix: './assets/i18n/administration/warehouse/' },
    { prefix: './assets/i18n/administration/workflow-management/' },
    { prefix: './assets/i18n/collaborative-cockpit/data-enrichment/' },
    { prefix: './assets/i18n/collaborative-cockpit/engineering-data-exchange/' },
    { prefix: './assets/i18n/collaborative-cockpit/fleet-data-exchange/' },
    { prefix: './assets/i18n/collaborative-cockpit/flight-data-exchange/' },
    { prefix: './assets/i18n/collaborative-cockpit/hr-data-exchange/' },
    { prefix: './assets/i18n/collaborative-cockpit/logistic-data-exchange/' },
    { prefix: './assets/i18n/collaborative-cockpit/part-number-export/' },
    { prefix: './assets/i18n/collaborative-cockpit/xml-data-loading/' },
    { prefix: './assets/i18n/collaborative-cockpit/sbad-export/' },
    { prefix: './assets/i18n/engineering-management/additional-maintenance-guideline/' },
    { prefix: './assets/i18n/engineering-management/airworthiness-directive/' },
    { prefix: './assets/i18n/engineering-management/applicable-configuration/' },
    { prefix: './assets/i18n/engineering-management/configuration-diagram/' },
    { prefix: './assets/i18n/engineering-management/evolution/' },
    { prefix: './assets/i18n/engineering-management/family/' },
    { prefix: './assets/i18n/engineering-management/functional-location/' },
    { prefix: './assets/i18n/engineering-management/item/' },
    { prefix: './assets/i18n/engineering-management/maintenance-program/' },
    { prefix: './assets/i18n/engineering-management/modification/' },
    { prefix: './assets/i18n/engineering-management/part-number/' },
    { prefix: './assets/i18n/engineering-management/sbad/' },
    { prefix: './assets/i18n/engineering-management/shop-manual/' },
    { prefix: './assets/i18n/engineering-management/task/' },
    { prefix: './assets/i18n/engineering-management/visit/' },
    { prefix: './assets/i18n/engineering-management/dea-dia/' },
    { prefix: './assets/i18n/engineering-management/unit-conversion-matrix/' },
    { prefix: './assets/i18n/fleet-management/asset/aircraft/' },
    { prefix: './assets/i18n/fleet-management/asset/engine/' },
    { prefix: './assets/i18n/fleet-management/asset/equipment/' },
    { prefix: './assets/i18n/fleet-management/asset-at-date/' },
    { prefix: './assets/i18n/fleet-management/event/' },
    { prefix: './assets/i18n/fleet-management/fleet/' },
    { prefix: './assets/i18n/fleet-management/fleet-data-copy/' },
    { prefix: './assets/i18n/fleet-management/fleet-data-transfer/' },
    { prefix: './assets/i18n/flight-operations/flight/' },
    { prefix: './assets/i18n/flight-operations/flight-scheduling/' },
    { prefix: './assets/i18n/flight-operations/line-maintenance/' },
    { prefix: './assets/i18n/flight-operations/mission/' },
    { prefix: './assets/i18n/flight-operations/runway-scheduling/' },
    { prefix: './assets/i18n/flight-operations/operation/' },
    { prefix: './assets/i18n/flight-operations/operational-configuration/' },
    { prefix: './assets/i18n/human-resources/employee/' },
    { prefix: './assets/i18n/human-resources/employee-planning/' },
    { prefix: './assets/i18n/human-resources/staff-alert/' },
    { prefix: './assets/i18n/logistics/goods-receipt/' },
    { prefix: './assets/i18n/logistics/goods-movement/' },
    { prefix: './assets/i18n/logistics/inventory-by-warehouse/' },
    { prefix: './assets/i18n/logistics/litigation-file/' },
    { prefix: './assets/i18n/logistics/material/' },
    { prefix: './assets/i18n/logistics/dea-dia/' },
    { prefix: './assets/i18n/logistics/material-request-management/' },
    { prefix: './assets/i18n/logistics/material-request-transfer-order-management/' },
    { prefix: './assets/i18n/logistics/packaging-batch/' },
    { prefix: './assets/i18n/logistics/procurement-request/' },
    { prefix: './assets/i18n/logistics/sales-document/' },
    { prefix: './assets/i18n/logistics/material-availability/' },
    { prefix: './assets/i18n/logistics/package/' },
    { prefix: './assets/i18n/logistics/manufacturing-batch/' },
    { prefix: './assets/i18n/logistics/shipment-folder/' },
    { prefix: './assets/i18n/logistics/stock-alert/' },
    { prefix: './assets/i18n/logistics/stock-consult/' },
    { prefix: './assets/i18n/logistics/stock-movements/' },
    { prefix: './assets/i18n/logistics/stock-status/' },
    { prefix: './assets/i18n/logistics/stock-view/' },
    { prefix: './assets/i18n/logistics/stock-valuation/' },
    { prefix: './assets/i18n/logistics/order-document/' },
    { prefix: './assets/i18n/logistics/technical-receipt/' },
    { prefix: './assets/i18n/logistics/tools/' },
    { prefix: './assets/i18n/logistics/tools-maintenance-planning/' },
    { prefix: './assets/i18n/logistics/tools-maintenance-status/' },
    { prefix: './assets/i18n/logistics/transfer-order/' },
    { prefix: './assets/i18n/maintenance/airworthiness-control/' },
    { prefix: './assets/i18n/maintenance/asset-review/' },
    { prefix: './assets/i18n/maintenance/cockpit-inspection/' },
    { prefix: './assets/i18n/maintenance/cockpit-workscope/' },
    { prefix: './assets/i18n/maintenance/component-cockpit/' },
    { prefix: './assets/i18n/maintenance/component-cockpit-matrix/' },
    { prefix: './assets/i18n/maintenance/component-cockpit-operation/' },
    { prefix: './assets/i18n/maintenance/configuration-control/' },
    { prefix: './assets/i18n/maintenance/extract-tasks-applications/' },
    { prefix: './assets/i18n/maintenance/forecast/' },
    { prefix: './assets/i18n/maintenance/my-jobs-cards/' },
    { prefix: './assets/i18n/maintenance/referential-dashboard/' },
    { prefix: './assets/i18n/maintenance/unit-conversion-matrix/' },
    { prefix: './assets/i18n/maintenance/update-logbook/' },
    { prefix: './assets/i18n/maintenance/work-package/' },
    { prefix: './assets/i18n/maintenance/work-order/' },
    { prefix: './assets/i18n/maintenance/work-orders/' },
    { prefix: './assets/i18n/maintenance/work-orders-calendar/' },
    { prefix: './assets/i18n/maintenance/work-scheduling/' },
    { prefix: './assets/i18n/maintenance/works-management/' },
    { prefix: './assets/i18n/maintenance/workshop-home/' },
    { prefix: './assets/i18n/maintenance/procurement-request-table/' },
    { prefix: './assets/i18n/maintenance/material-availability-indicators/' },
    { prefix: './assets/i18n/menu/' },
    { prefix: './assets/i18n/shared/components/dialog-create-stock-receipt/' },
    { prefix: './assets/i18n/administration/settings/' },
    { prefix: './assets/i18n/administration/monitoring/' },
    { prefix: './assets/i18n/modules/purchase-contract/purchase-contract/' },
    { prefix: './assets/i18n/modules/purchase-contract/utils/' }
  ]);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENT_REGISTRY],
  entryComponents: DYNAMIC_COMPONENT_REGISTRY,
  imports: [
    LoginRoutingModule,
    AppRoutingModule,
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES,
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: createTranslateLoader
      }
    })
  ],
  providers: [
    ...GLOBAL_ERROR_HANDLER_PROVIDERS,
    ...HTTP_INTERCEPTORS_PROVIDERS,
    ...API_PROVIDERS,
    ...SERVICE_PROVIDERS,
    {
      deps: [AppConfigService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: createAppInitializer
    },
    ...SERVICES,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class AppModule {
  public constructor(private readonly injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
