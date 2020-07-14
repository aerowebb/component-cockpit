import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { UpdateHistoricApi } from '../../../shared/api/update-historic.api';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../shared/services/update-historic.service';
import { OverlayService } from '../../overlay/overlay.service';
import { SbadFormMhiaelService } from '../sbad-form/sbad-form-mhiael.service';
import { SbadFormComponent } from '../sbad-form/sbad-form.component';
import { SbadFormService } from '../sbad-form/sbad-form.service';

@Component({
  selector: 'aw-airworthiness-directive-form',
  templateUrl: '../sbad-form/sbad-form.component.html',
  styleUrls: ['../sbad-form/sbad-form.component.scss']
})
export class AirworthinessDirectiveFormComponent extends SbadFormComponent implements OnInit {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    inputValidationService: InputValidationService,
    sbadFormService: SbadFormService,
    sbadFormMhiaelService: SbadFormMhiaelService,
    propertiesService: PropertiesService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    confirmationService: ConfirmationService,
    public sessionService: SessionService,
    public dateService: DateService,
    updateHistoricService: UpdateHistoricService,
    updateHistoricApi: UpdateHistoricApi,
    pageTocService: PageTocService,
    _overlayService: OverlayService,
    _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      inputValidationService,
      sbadFormService,
      sbadFormMhiaelService,
      propertiesService,
      translateService,
      dynamicAttributesService,
      confirmationService,
      sessionService,
      dateService,
      updateHistoricService,
      updateHistoricApi,
      pageTocService,
      _overlayService,
      _formatSelectOption
    );
    this.isAD = true;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.bireSbDisplayed.sbType = AWPropertiesConstants.SB_TYPE_AD_KEY;
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM;
  }
}
