import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-help',
  templateUrl: './dialog-help.component.html',
  styleUrls: ['./dialog-help.component.scss']
})
export class DialogHelpComponent extends DialogComponent implements OnInit {
  private static readonly FAILURE_CONFIG_MISMATCH_CODES: string[] = [
    'CONF_E0',
    'CONF_E1',
    'CONF_E2',
    'CONF_E3',
    'CONF_E4',
    'CONF_E5',
    'CONF_E6',
    'CONF_E7',
    'CONF_E8'
  ];

  private static readonly FAILURE_CONFIG_MISMATCH_LABEL: string[] = [
    'MSG_ERROR_CONFIGURATION_CONTROL_0',
    'MSG_ERROR_CONFIGURATION_CONTROL_1',
    'MSG_ERROR_CONFIGURATION_CONTROL_2',
    'MSG_ERROR_CONFIGURATION_CONTROL_3',
    'MSG_ERROR_CONFIGURATION_CONTROL_4',
    'MSG_ERROR_CONFIGURATION_CONTROL_5',
    'MSG_ERROR_CONFIGURATION_CONTROL_6',
    'MSG_ERROR_CONFIGURATION_CONTROL_7',
    'MSG_ERROR_CONFIGURATION_CONTROL_8'
  ];

  private static readonly FAILURE_CONFIG_WARNING_CODES: string[] = ['CONF_W0', 'CONF_W1', 'CONF_W2', 'CONF_W3'];
  private static readonly FAILURE_CONFIG_WARNING_LABEL: string[] = [
    'MSG_WARNING_CONFIGURATION_CONTROL_0',
    'MSG_WARNING_CONFIGURATION_CONTROL_1',
    'MSG_WARNING_CONFIGURATION_CONTROL_2',
    'MSG_WARNING_CONFIGURATION_CONTROL_3'
  ];

  private static readonly FAILURE_CONFIG_OTHER_CODES: string[] = ['CAL', 'POT'];
  private static readonly FAILURE_CONFIG_OTHER_LABEL: string[] = [
    'MSG_CALENDER_LIMIT_REACHED',
    'MSG_LIMIT_POTENTIAL_REACHED'
  ];

  private static readonly OTHER_ERROR_CODES: string[] = [
    'REF',
    'QTY',
    'RATING',
    'MEL',
    'FL-QTY',
    'FL-MODEL',
    'FL-FUNCTION',
    'FL-VARIANT	'
  ];

  private static readonly OTHER_ERROR_LABEL: string[] = [
    'MSG_ASSET_REFRENTIAL_DATA',
    'MSG_ASSET_QUANTITY',
    'MSG_DIFF_ENGINE_RATING',
    'MSG_EQUIP_FROM_MEL',
    'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_QUANTITY',
    'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_MODELS',
    'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_FUNCTION',
    'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_VARIANTS'
  ];

  public failureMismatchLabelCodeMap = new Object();
  public failureWarningLabelCodeMap = new Object();
  public failureOtherLabelCodeMap = new Object();
  public failureOtherErrorLabelCodeMap = new Object();

  public constructor(public translateService: TranslateService) {
    super(ComponentOpenMode.Read, 'DialogHelpComponent');
  }

  public ngOnInit() {
    this.init();
  }

  /*************************************************************************
   * INIT
   *************************************************************************/
  private init() {
    this.failureMismatchLabelCodeMap = new Object();
    this.failureWarningLabelCodeMap = new Object();
    this.failureOtherLabelCodeMap = new Object();
    this.failureOtherErrorLabelCodeMap = new Object();

    this.setMapForMismatchCodes();
    this.setMapForWarningCodes();
    this.setMapForOtherLabelCodes();
    this.setMapForOtherErrorCodes();
  }

  /*************************************************************************
   * SET MAP FOR MISMATCH CODES
   *************************************************************************/
  private setMapForMismatchCodes() {
    DialogHelpComponent.FAILURE_CONFIG_MISMATCH_CODES.forEach((code, index) => {
      this.failureMismatchLabelCodeMap[code] = DialogHelpComponent.FAILURE_CONFIG_MISMATCH_LABEL[index];
    });
  }

  /*************************************************************************
   * SET MAP FOR WARNING CODES
   *************************************************************************/
  private setMapForWarningCodes() {
    DialogHelpComponent.FAILURE_CONFIG_WARNING_CODES.forEach((code, index) => {
      this.failureWarningLabelCodeMap[code] = DialogHelpComponent.FAILURE_CONFIG_WARNING_LABEL[index];
    });
  }

  /*************************************************************************
   * SET MAP FOR OTHER LABEL CODES
   *************************************************************************/
  private setMapForOtherLabelCodes() {
    DialogHelpComponent.FAILURE_CONFIG_OTHER_CODES.forEach((code, index) => {
      this.failureOtherLabelCodeMap[code] = DialogHelpComponent.FAILURE_CONFIG_OTHER_LABEL[index];
    });
  }

  /*************************************************************************
   * SET MAP FOR OTHER ERROR CODES
   *************************************************************************/
  private setMapForOtherErrorCodes() {
    DialogHelpComponent.OTHER_ERROR_CODES.forEach((code, index) => {
      this.failureOtherErrorLabelCodeMap[code] = DialogHelpComponent.OTHER_ERROR_LABEL[index];
    });
  }

  /*************************************************************************
   * FETCH OBJECT KEYS
   *************************************************************************/
  public getKeys(obj: Object) {
    return Object.keys(obj);
  }
}
