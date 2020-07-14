import { DialogChangePasswordComponent } from './login/popup/dialog-change-password/dialog-change-password.component';
import { DashboardsOverlayComponent } from './main/dashboards-overlay/dashboards-overlay.component';
import { DefectStatusComponent } from './main/fleet-management/event/defect-form/status/status/defect-status.component';
import { FlightStatusComponent } from './main/flight-operations/flight/form/flight/status/status/flight-status.component';
import { GlobalSearchOverlayComponent } from './main/global-search-overlay/global-search-overlay.component';
import { HeaderDashboardsOverlayComponent } from './main/header-dashboards-overlay/header-dashboards-overlay.component';
import { HeaderUserOverlayComponent } from './main/header-user-overlay/header-user-overlay.component';
import { GoodReceiptStatusComponent } from './main/logistics/goods-receipt/form/status/good-receipt-status.component';
import { ProcurementRequesttatusComponent } from './main/logistics/procurement-request/form/status/procurement-request-status.component';
import { ShipmentFolderStatusComponent } from './main/logistics/shipment-folder/form/status/shipment-folder-status.component';
import { WorkOrderStatusComponent } from './main/maintenance/work-order/form/status/work-order-status.component';
import { WorkPackageStatusComponent } from './main/maintenance/work-package/form/status/work-package-status.component';
import { ObjectStatusComponent } from './main/object-status/object-status.component';
import { OverlayComponent } from './main/overlay/overlay.component';

/** Registry of all components used as a dialog or overlay body */
export const DYNAMIC_COMPONENT_REGISTRY = [
  OverlayComponent,
  GlobalSearchOverlayComponent,
  HeaderDashboardsOverlayComponent,
  HeaderUserOverlayComponent,
  DefectStatusComponent,
  DialogChangePasswordComponent,
  WorkOrderStatusComponent,
  WorkPackageStatusComponent,
  FlightStatusComponent,
  ObjectStatusComponent,
  DashboardsOverlayComponent,
  ProcurementRequesttatusComponent,
  GoodReceiptStatusComponent,
  ShipmentFolderStatusComponent
];
