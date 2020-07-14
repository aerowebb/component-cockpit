import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindStaffAlertInput } from '../../../../shared/types/api-input-types/bidt-employee/find-staff-alert-input.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

@Component({
  selector: 'aw-staff-alert-search',
  templateUrl: './staff-alert-search.component.html',
  styleUrls: ['./staff-alert-search.component.scss']
})
export class StaffAlertSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: FindStaffAlertInput;
  public showSuperiorPopup: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();

    this.showSuperiorPopup = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public init(): void {
    this.searchObject = {
      alertDate: new Date(),
      alertThreshold: 7
    };
  }

  public getComponentName(): string {
    return ComponentConstants.HR_STAFF_ALERT_SEARCH;
  }

  // opens material popup in search criteria
  public quickSearchSuperior(): void {
    this.showSuperiorPopup = true;
  }

  // calculates stocks on the basis of search criteria
  public calculate(): void {
    // Check for date.
    if (!!this.searchObject.alertDate) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.HR_STAFF_ALERT_FORM,
        openMode: ComponentOpenMode.Read
      };
      const objectId: FindStaffAlertInput = this.searchObject;
      if (!!objectId) {
        data.objectId = this.serializationService.serialize(objectId);
      }
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
    }
  }

  public setSelectedSuperior(event: BidtEmployeeDTO) {
    this.showSuperiorPopup = false;
    this.searchObject.superiorId = event.id;
    this.searchObject.superiorFirstName = event.employeeFirstName;
    this.searchObject.superiorLastName = event.employeeLastName;
    this.searchObject.superiorNumber = event.employeeNumber;
  }

  public resetSearchCriteria(): void {
    this.init();
  }
}
