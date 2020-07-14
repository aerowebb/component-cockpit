export class BidoAttributeConstants {
  /**************************************************************************
   * Attribute Types
   *************************************************************************/

  public static readonly ATTRIBUTE_TYPE_TEXT: string = 'Text';

  public static readonly ATTRIBUTE_TYPE_DATE: string = 'Date';

  public static readonly ATTRIBUTE_TYPE_BOOLEAN: string = 'Boolean';

  public static readonly ATTRIBUTE_TYPE_LIST: string = 'List';

  /**************************************************************************
   * Standard Attributes
   *************************************************************************/

  public static readonly SAP_EQUIPMENT_CODE: number = 1;

  public static readonly ASSET_LOCATION: number = 2;

  public static readonly MANUFACTURER: number = 3;

  public static readonly ICAO_CODE: number = 4;

  public static readonly ITEM_NUMBER: number = 5;

  public static readonly EVENT_LOCATION: number = 6;

  public static readonly ASSET_SYSTEM_SOURCE_ID: number = 7;

  public static readonly ASSET_SYSTEM_SOURCE_REFERENCE: number = 8;

  public static readonly EVENT_SYSTEM_SOURCE_ID: number = 9;

  public static readonly EVENT_SYSTEM_SOURCE_REFERENCE: number = 10;

  public static readonly FUNCTIONAL_LOCATION: number = 11;

  public static readonly EVENT_IS_DEFERRED_DEFECT: number = 12;

  public static readonly EVENT_DD_DELAY_CATEGORY: number = 13;

  public static readonly EVENT_DD_DELAY_AUTHORIZED_VALUE: number = 14;

  public static readonly EVENT_DD_DELAY_AUTHORIZED_UNIT: number = 15;

  public static readonly EVENT_DD_TASK_PROPOSED_TO_PROCESS: number = 16;

  public static readonly EVENT_DD_DELAY_AUTHORIZATION_NUMBER: number = 17;

  public static readonly EVENT_DEFECT_LAST_AUTHOR: number = 18;

  public static readonly EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR: number = 19;

  public static readonly EVENT_DEFECT_DEFERRAL_LAST_AUTHOR: number = 20;

  public static readonly EVENT_DEFECT_DETECTION_CONTEXT: number = 21;

  public static readonly EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION: number = 22;

  public static readonly EVENT_DEFECT_LOG_NUMBER: number = 23;

  public static readonly EVENT_DEFECT_EXTENSION: number = 24;

  public static readonly EVENT_DEFECT_AUTHOR: number = 25;

  public static readonly EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR: number = 26;

  public static readonly EVENT_DEFECT_DEFERRAL_AUTHOR: number = 27;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT: number = 28;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER: number = 29;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE: number = 30;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON: number = 31;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR: number = 32;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR: number = 33;

  public static readonly MAINTENANCE_PLAN_ORIGINAL_DEADLINES: number = 34;

  public static readonly EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS: number = 35;

  public static readonly EVENT_DEFECT_FLIGHT_RESTRICTIONS: number = 36;

  public static readonly EVENT_DEFECT_IS_CRITICAL: number = 37;

  public static readonly FLIGHT_GONOGO_VALIDATION: number = 38;

  public static readonly EVENT_TASK_APPLIED_FLIGHT_CONTEXT: number = 39;

  public static readonly IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION: number = 40;

  public static readonly EVENT_DEFECT_INSPECTION_MEAN: number = 41;

  public static readonly EVENT_DEFECT_SRM_REFERENCE: number = 42;

  public static readonly EVENT_DEFECT_FRAME_FROM: number = 43;

  public static readonly EVENT_DEFECT_FRAME_FROM_DISTANCE: number = 44;

  public static readonly EVENT_DEFECT_FRAME_TO: number = 45;

  public static readonly EVENT_DEFECT_FRAME_TO_DISTANCE: number = 46;

  public static readonly EVENT_DEFECT_STRINGER_FROM: number = 47;

  public static readonly EVENT_DEFECT_STRINGER_FROM_DISTANCE: number = 48;

  public static readonly EVENT_DEFECT_STRINGER_TO: number = 49;

  public static readonly EVENT_DEFECT_STRINGER_TO_DISTANCE: number = 50;

  public static readonly EVENT_DEFECT_RIB_FROM: number = 51;

  public static readonly EVENT_DEFECT_RIB_FROM_DISTANCE: number = 52;

  public static readonly EVENT_DEFECT_RIB_TO: number = 53;

  public static readonly EVENT_DEFECT_RIB_TO_DISTANCE: number = 54;

  public static readonly EVENT_DEFECT_BEAM_FROM: number = 55;

  public static readonly EVENT_DEFECT_BEAM_FROM_DISTANCE: number = 56;

  public static readonly EVENT_DEFECT_BEAM_TO: number = 57;

  public static readonly EVENT_DEFECT_BEAM_TO_DISTANCE: number = 56;

  public static readonly EVENT_DEFECT_DEPTH: number = 59;

  public static readonly EVENT_DEFECT_LENGHT: number = 60;

  public static readonly EVENT_DEFECT_WIDTH: number = 61;

  public static readonly EVENT_DEFECT_SURFACE_AREA: number = 62;

  public static readonly FLIGHT_SYSTEM_SOURCE_ID: number = 63;

  public static readonly FLIGHT_SYSTEM_SOURCE_REFERENCE: number = 64;

  public static readonly EVENT_WORK_ORDER_SOURCE: number = 65;

  public static readonly EVENT_FAULT_CODE: number = 68;

  // Dassault *******************************************************************

  public static readonly DAV_HUMS_STATUS = 2000;

  public static readonly DAV_HUMS_MESSAGE = 2001;

  public static readonly DAV_MANUAL_FLIGHT_ENTRIES = 2003;
}
