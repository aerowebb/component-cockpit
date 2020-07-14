export class AWPropertiesConstants {
  public static readonly DEFAULT_MANDANT = 'STA';
  public static readonly SEPARATOR = ';';

  // AERO-WEBB CONFIGURATION
  public static readonly FM_APPLIED_CONF_DISPLAYED_WITH_KARDEX =
    'fleet_management.applied_configuration_displayed_with_kardex';
  public static readonly FM_URL = 'fleet_management.url';
  public static readonly FM_CONFIGURATION_COUNTER_MAX_INCREMENT = 'fleet_management.counter_max_increment';
  public static readonly FM_ALERT_MONTH_NUMBER = 'fleet_management.counter_alert_month_number';
  public static readonly FM_COUNTER_CSN = 'fleet_management.counter_cycle_since_new';
  public static readonly FM_COUNTER_TSN = 'fleet_management.counter_time_since_new';
  public static readonly FM_COUNTER_CSSV = 'fleet_management.counter_cycle_since_shop_visit';
  public static readonly FM_COUNTER_TSSV = 'fleet_management.counter_time_since_shop_visit';
  public static readonly FM_COUNTER_CSI = 'fleet_management.counter_cycle_since_installation';
  public static readonly FM_COUNTER_TSI = 'fleet_management.counter_time_since_installation';
  public static readonly FM_COUNTER_CSLI = 'fleet_management.counter_cycle_since_last_inspection';
  public static readonly FM_COUNTER_TSLI = 'fleet_management.counter_time_since_last_inspection';
  public static readonly FM_COUNTERS_RESET_BEFORE_PROPAGATION = 'fleet_management.counters_reset_before_propagation';
  public static readonly FM_MEASURE_ESTIMATED_INTERVAL_HOURS = 'fleet_management.measure_estimated_interval_hours';
  public static readonly MFO_AVERAGE_NUMBER_OF_HOURS_PER_DAY = 'maintenance_optimizer.average_number_of_hours_per_day';
  public static readonly MFO_PROJECT_DEFAULT_USAGE_MODE = 'maintenance_optimizer.project.default_usage_mode';
  public static readonly MFO_PROJECT_DEFAULT_LLP_COUNTERS = 'maintenance_optimizer.project.default_llp_counters';
  public static readonly MFO_PROJECT_DEFAULT_EQUIPMENT_FUNCTIONS =
    'maintenance_optimizer.project.default_equipment_functions';
  public static readonly LDAP_URL = 'ldap.url';
  public static readonly LDAP_BASE = 'ldap.base';
  public static readonly LDAP_USERDN = 'ldap.userDn';
  public static readonly LDAP_PASSWORD = 'ldap.password';
  public static readonly LDAP_ATTRIBUTE_LOGIN = 'ldap.attribute.loginKey';
  public static readonly LDAP_ATTRIBUTE_PASSWORD = 'ldap.attribute.passwordKey';
  public static readonly PROPERTY_EN = 'EN';
  public static readonly PROPERTY_FR = 'FR';
  public static readonly PROPERTY_DEFAULT_VALUE = 'Value';
  public static readonly AEROWEBB_MASTER_MENU_URL_REPORTING = 'aerowebb.master.menu.url.reporting';
  public static readonly AEROWEBB_MASTER_MENU_URL_SAPWEBGUI = 'aerowebb.master.menu.url.sapwebgui';
  public static readonly DEFAULT_CURRENCY = 'default_currency';
  public static readonly DEFAULT_VOLUME_UNIT = 'default_volume_unit';
  public static readonly DISPLAY_COST = 'display.cost';
  public static readonly INDIRECT_COST_RATE = 'indirect_cost_rate';
  public static readonly AIRWORTHINESS_HOURS_SCALE = 'airworthiness.hours_scale';
  public static readonly AIRWORTHINESS_CYCLES_SCALE = 'airworthiness.cycles_scale';
  public static readonly AIRWORTHINESS_DAYS_SCALE = 'airworthiness.days_scale';
  public static readonly ESIGNATURE_SITE = 'eSignature.site';
  public static readonly ESIGNATURE_DEFECTS = 'eSignature.defects';
  public static readonly MATERIAL_MANAGEMENT_IN_SAP = 'material_management.in_sap';
  public static readonly HUMAN_RESOURCES_IN_SAP = 'human_resources.in_sap';
  public static readonly FLEET_MANAGEMENT_IN_SAP = 'fleet_management.in_sap';
  public static readonly MM_MVT_AUTHORIZED_STATUS_ACTIVATED = 'material_management.mvt_authorized_status_activated';
  public static readonly APPLICABLE_AD_STATUSES = 'applicable_ad.statuses';
  public static readonly APPLICABLE_SB_STATUSES = 'applicable_sb.statuses';
  public static readonly DEFECT_AGREEMENT_NEEDED_FOR_DEFERRAL = 'defect.agreement_needed_for_deferral';
  public static readonly WORK_POSTPONEMENT_LIMIT_DATE_NEEDED_FOR_ACCEPTANCE =
    'work_postponement.limit_date_needed_for_acceptance';
  public static readonly HIGHLIGHT_TASK_UPDATE = 'highlight_task_update';
  public static readonly REFERENTIAL_ALERT_THRESHOLD_IS_PERCENTAGE = 'referential.alert_threshold_is_percentage';

  // PN_TYPE
  public static readonly PN_TYPE_STANDARD_TOOL_KEY = '1-' + 'stt';
  public static readonly PN_TYPE_SPECIFIC_TOOL_KEY = '2-' + 'spt';
  public static readonly PN_TYPE_INGREDIENT_KEY = '3-' + 'ing';
  public static readonly PN_TYPE_PART_KEY = '4-' + 'par';
  public static readonly PN_TYPE_SUBCONTRACTING_KEY = '5-' + 'sub';
  public static readonly PN_TYPE_SERVICE_KEY = '6-' + 'ser';
  public static readonly PN_TYPE_VENDOR_SB_KEY = '7-' + 'vsb';
  public static readonly PN_TYPE_GROUND_SUPPORT_EQUIPMENT_KEY = '8-' + 'gse';
  public static readonly PN_TYPE_PILOT_EQUIPMENT_KEY = '9-' + 'pil';
  public static readonly PN_TYPE_BOX_KEY = '10-' + 'box';

  // CAUSE_TYPE
  public static readonly CAUSE_TYPE_GENERAL_KEY = '1-' + 'gen';
  public static readonly CAUSE_TYPE_SYSTEMATIC_KEY = '2-' + 'sys';
  public static readonly CAUSE_TYPE_TEMPORARY_DIRECTIVE_KEY = '3-' + 'tmp';
  // TREND_MODEL_STATUS
  public static readonly TREND_MODEL_STATUS_PROJECT_KEY = '1-' + 'pro';
  public static readonly TREND_MODEL_STATUS_OFFICIAL_KEY = '2-' + 'off';
  public static readonly TREND_MODEL_STATUS_OBSOLETE_KEY = '3-' + 'obs';
  // EXCHANGE_TYPE
  public static readonly EXCHANGE_TYPE_SYSTEMATIC_SCRAP_KEY = '1-' + 'ssc';
  public static readonly EXCHANGE_TYPE_SYSTEMATIC_STANDARD_EXCHANGE_KEY = '2-' + 'sse';
  // MAINTENANCE_TYPE
  public static readonly MAINTENANCE_TYPE_LRU_KEY = '1-' + 'l';
  public static readonly MAINTENANCE_TYPE_SRU_KEY = '2-' + 's';
  // ITEM_TYPE
  public static readonly ITEM_TYPE_CHANGE_KEY = '1-' + 'chg';
  public static readonly ITEM_TYPE_TOOLS_KEY = '2-' + 'tls';
  public static readonly ITEM_TYPE_INGREDIENT_KEY = '3-' + 'ing';
  public static readonly ITEM_TYPE_DOCUMENTATION_KEY = '4-' + 'doc';
  public static readonly ITEM_TYPE_REPAIR_KEY = '4-' + 'rep';
  public static readonly ITEM_TYPE_PART_REPAIR_KEY = '4-' + 'pre';
  public static readonly ITEM_TYPE_SYSTEMATIC_CHANGE_KEY = '5-' + 'sys';
  public static readonly ITEM_TYPE_OTHER_KEY = '6-' + 'oth';
  // FAMILY_FUNCTION
  public static readonly FAMILY_FUNCTION_AIRCRAFT_KEY = '1-air';
  public static readonly FAMILY_FUNCTION_ENGINE_KEY = '2-eng';
  public static readonly FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY = '2-maj';
  public static readonly FAMILY_FUNCTION_TOOL_KEY = '8-too';
  public static readonly FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY = '3-gnd';
  public static readonly FAMILY_FUNCTION_GROUND_SUPPORT_EQUIPMENT_KEY = '16-gse';
  public static readonly FAMILY_FUNCTION_PILOT_EQUIPMENT_KEY = '17-pil';
  public static readonly FAMILY_FUNCTION_OME_KEY = '10-ome';
  public static readonly FAMILY_FUNCTION_OME_COMPONENT_KEY = '11-omc';
  public static readonly FAMILY_FUNCTION_ROLE_EQUIPMENT_KEY = '12-req';
  public static readonly FAMILY_FUNCTION_ROLE_EQUIPEMENT_COMPONENT_KEY = '13-rec';

  // FLOC_TYPE
  public static readonly FLOC_TYPE_GHOST_KEY = '1-' + 'gho';
  public static readonly FLOC_TYPE_REPAIR_COMPONENT_KEY = '2-' + 'rep';
  public static readonly FLOC_TYPE_NOT_INVENTORIED_KEY = '3-' + 'nin';
  public static readonly FLOC_TYPE_NOT_TRACKED_KEY = '4-' + 'ntr';
  public static readonly FLOC_TYPE_EQUIPMENT_TRACKED_KEY = '5-' + 'eqt';
  public static readonly FLOC_TYPE_LOGBOOK_TRACKED_KEY = '6-' + 'ltr';
  public static readonly FLOC_TYPE_LOGBOOK_TRACKED_WITH_DOCUMENT_KEY = '7-' + 'ltd';

  // FLOC_STATUS
  public static readonly FLOC_STATUS_DRAFT_KEY = '1-' + 'dra';
  public static readonly FLOC_STATUS_CANCEL_KEY = '2-' + 'can';
  public static readonly FLOC_STATUS_VALIDATED_KEY = '3-' + 'val';

  // ALTERNATIVE_TYPE
  public static readonly ALTERNATIVE_TYPE_USAGE_KEY = '1-' + 'usa';
  public static readonly ALTERNATIVE_TYPE_PROVISIONING_KEY = '2-' + 'pro';
  public static readonly ALTERNATIVE_TYPE_SELECTION_PART_KEY = '3-' + 'sel';
  public static readonly ALTERNATIVE_TYPE_OPTION_KEY = '4-' + 'opt';
  // REPAIRABILITY
  public static readonly REPAIRABILITY_REPAIRABLE_KEY = '1-' + 'rep';
  public static readonly REPAIRABILITY_NOT_REPAIRABLE_KEY = '2-' + 'nre';
  public static readonly REPAIRABILITY_DISPOSABLE_KEY = '3-' + 'dis';
  public static readonly REPAIRABILITY_CONSUMABLE_KEY = '4-' + 'con';
  public static readonly REPAIRABILITY_RENTABLE_KEY = '5-' + 'ren';
  // ITEM_FAMILY_CODE
  public static readonly ITEM_FAMILY_CODE_AIRCRAFT_KEY = '1-' + 'air';
  public static readonly ITEM_FAMILY_CODE_ENGINE_KEY = '2-' + 'eng';
  public static readonly ITEM_FAMILY_CODE_MAJOR_EQUIPMENT_KEY = '2-' + 'maj';
  public static readonly ITEM_FAMILY_CODE_PROPELLER_KEY = '2-' + 'pro';
  public static readonly ITEM_FAMILY_CODE_NACELLE_KEY = '2-' + 'nac';
  public static readonly ITEM_FAMILY_CODE_MODULE_KEY = '3-' + 'mod';
  public static readonly ITEM_FAMILY_CODE_CALCULATOR_KEY = '4-' + 'cal';
  public static readonly ITEM_FAMILY_CODE_PART_KEY = '5-' + 'par';
  public static readonly ITEM_FAMILY_CODE_ACCESSORY_KEY = '6-' + 'acc';
  public static readonly ITEM_FAMILY_CODE_ACCESSORY_COMPONENT_KEY = '7-' + 'com';
  public static readonly ITEM_FAMILY_CODE_TOOL_KEY = '8-' + 'too';
  public static readonly ITEM_FAMILY_CODE_TANK_KEY = '9-' + 'tan';
  public static readonly ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY = '16-gse';
  public static readonly ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY = '17-pil';
  public static readonly ITEM_FAMILY_CODE_HARDPOINT_KEY = '19-' + 'har';
  public static readonly ITEM_FAMILY_CODE_LOAD_KEY = '20-loa';
  // LIFE_RESTRICTION_TYPE
  public static readonly LIFE_RESTRICTION_TYPE_LIMITED_LIFE_KEY = '1-' + 'lim';
  public static readonly LIFE_RESTRICTION_TYPE_POTENTIAL_KEY = '2-' + 'pot';
  public static readonly LIFE_RESTRICTION_TYPE_USAGE_KEY = '3-' + 'usa';
  // OBJECT_STATUS
  public static readonly OBJECT_STATUS_CALCULATED_KEY = '1-' + 'cal';
  public static readonly OBJECT_STATUS_ASSUMED_KEY = '2-' + 'ass';
  public static readonly OBJECT_STATUS_LOADED_KEY = '3-' + 'loa';
  public static readonly OBJECT_STATUS_CONFIRMED_KEY = '4-' + 'con';
  public static readonly OBJECT_STATUS_NOT_CONFIRMED_KEY = '5-' + 'nco';
  public static readonly OBJECT_STATUS_LOADED_FROM_SAP_KEY = '6-' + 'los';
  public static readonly OBJECT_STATUS_SENT_TO_SAP_KEY = '7-' + 'ses';
  public static readonly OBJECT_STATUS_PROBLEM_SENDING_TO_SAP_KEY = '8-' + 'prs';
  public static readonly OBJECT_STATUS_UPDATED_KEY = '9-' + 'upd';
  public static readonly OBJECT_STATUS_EXPIRED_KEY = '10-' + 'exp';
  public static readonly OBJECT_STATUS_LOADED_FROM_FM_KEY = '11-' + 'lof';
  public static readonly OBJECT_STATUS_SENT_TO_FM_KEY = '12-' + 'sef';
  public static readonly OBJECT_STATUS_PROBLEM_SENDING_TO_FM_KEY = '13-' + 'prf';
  public static readonly OBJECT_STATUS_LOCKED_KEY = '14-' + 'loc';
  public static readonly OBJECT_STATUS_SENT_BY_THIRD_SYSTEM_KEY = '15-' + 'thi';
  // EVOLUTION_LEVEL
  public static readonly EVOLUTION_LEVEL_MAJOR_KEY = '1-' + 'maj';
  public static readonly EVOLUTION_LEVEL_MINOR_KEY = '2-' + 'min';
  public static readonly EVOLUTION_LEVEL_REFERENCE_CHANGE_AMENDMENT_KEY = '3-' + 'rca';
  public static readonly EVOLUTION_LEVEL_SIMPLE_AMENDMENT_KEY = '4-' + 'sim';
  // EVOLUTION_TYPE
  public static readonly EVOLUTION_TYPE_RS_KEY = '1-' + 'rs';
  public static readonly EVOLUTION_TYPE_EN_KEY = '2-' + 'en';
  // COMPLIANCE
  public static readonly COMPLIANCE_MAN_KEY = '1-' + 'man';
  public static readonly COMPLIANCE_REC_KEY = '2-' + 'rec';
  public static readonly COMPLIANCE_OPT_KEY = '3-' + 'opt';
  public static readonly COMPLIANCE_MAC_KEY = '4-' + 'mac';
  public static readonly COMPLIANCE_MA2_KEY = '5-' + 'ma2';
  public static readonly COMPLIANCE_MA4_KEY = '6-' + 'ma4';
  public static readonly COMPLIANCE_MAO_KEY = '7-' + 'mao';
  public static readonly COMPLIANCE_NAP_KEY = '8-' + 'nap';
  public static readonly COMPLIANCE_MANDATORY_INDEX = 'MA';
  // STRUCTURE_TYPE
  public static readonly STRUCTURE_TYPE_IPC_KEY = 'I';
  public static readonly STRUCTURE_TYPE_REFERENCE_KEY = 'R';
  public static readonly STRUCTURE_TYPE_CUSTOMIZED_KEY = 'U';
  // SB_TYPE
  public static readonly SB_TYPE_CONFIGURATION_KEY = '1-' + 'mod';
  public static readonly SB_TYPE_CONTROL_KEY = '2-' + 'con';
  public static readonly SB_TYPE_AD_KEY = '3-' + 'ad';
  public static readonly SB_TYPE_AMG_KEY = '3-' + 'amg';
  public static readonly SB_TYPE_SAIB_KEY = '3-' + 'saib';
  public static readonly SB_TYPE_SIB_KEY = '3-' + 'sib';
  public static readonly SB_TYPE_OTHER_KEY = '4-' + 'oth';
  // STD_EXCHANGE_TYPE
  public static readonly STD_EXCHANGE_TYPE_NEVER_KEY = '1-' + 'nev';
  public static readonly STD_EXCHANGE_TYPE_IN_CLIENT_STOCK_KEY = '2-' + 'sto';
  public static readonly STD_EXCHANGE_TYPE_ALL_UNLESS_PART_WITH_LIMITED_LIFE_KEY = '3-' + 'alu';
  public static readonly STD_EXCHANGE_TYPE_ALL_KEY = '4-' + 'all';
  // PRIORITY_LEVEL
  public static readonly PRIORITY_LEVEL_INDETERMINATE_KEY = '1-' + 'ind';
  public static readonly PRIORITY_LEVEL_COST_KEY = '2-' + 'cos';
  public static readonly PRIORITY_LEVEL_DELAY_KEY = '3-' + 'del';
  public static readonly PRIORITY_LEVEL_COST_AND_DELAY_KEY = '4-' + 'cad';
  // TASK_APPLICABILITY_CODE
  public static readonly TASK_APPLICABILITY_CODE_REPAIR_KEY = '1-' + 'rep';
  public static readonly TASK_APPLICABILITY_CODE_OVERHAUL_KEY = '2-' + 'ove';
  public static readonly TASK_APPLICABILITY_CODE_REPAIR_AND_OVERHAUL_KEY = '3-' + 'rao';
  // DECISION_BBTWS
  public static readonly DECISION_BBTWS_MAINTAIN_KEY = '1-' + 'mai';
  public static readonly DECISION_BBTWS_REMOVE_KEY = '2-' + 'rem';
  public static readonly DECISION_BBTWS_REPAIR_AND_MAINTAIN_KEY = '3-' + 'rma';
  // DECISION_BBIS
  public static readonly DECISION_BBIS_PRE_ORDER_KEY = '0-' + 'preord';
  public static readonly DECISION_BBIS_MAINTAIN_KEY = '1-' + 'mai';
  public static readonly DECISION_BBIS_REPLACE_KEY = '2-' + 'repl';
  public static readonly DECISION_BBIS_REPAIR_KEY = '3-' + 'rep';
  public static readonly DECISION_BBIS_REPAIR_AND_REPLACE_KEY = '4-' + 'reparepl';
  public static readonly DECISION_BBIS_STORE_KEY = '5-' + 'sto';
  public static readonly DECISION_BBIS_STORE_AND_REPLACE_KEY = '6-' + 'stoarepl';
  public static readonly DECISION_BBIS_INSTALL_KEY = '7-' + 'ins';
  public static readonly DECISION_BBIS_NO_ACTION_KEY = '8-' + 'noa';
  public static readonly DECISION_BBIS_REPLACE_BY_SC_KEY = '9-' + 'rpslc';
  public static readonly DECISION_BBIS_STORE_AND_REPLACE_BY_SC_KEY = '10-' + 'stoarepslc';
  public static readonly DECISION_BBIS_REPAIR_AND_REPLACE_BY_SC_KEY = '11-' + 'reparepslc';
  public static readonly DECISION_BBIS_REPAIR_AND_STORE_KEY = '12-' + 'repasto';

  // SENTENCE_BBTWS
  public static readonly SENTENCE_BBTWS_LOST_KEY = '1-' + 'los';
  public static readonly SENTENCE_BBTWS_ENTRY_MISSING_KEY = '2-' + 'mis';
  public static readonly SENTENCE_BBTWS_OVERHAUL_KEY = '3-' + 'ove';
  // SENTENCE_BBIS
  public static readonly SENTENCE_BBIS_SERVICEABLE_KEY = '1-' + 'ser';
  public static readonly SENTENCE_BBIS_REPAIRABLE_KEY = '2-' + 'rep';
  public static readonly SENTENCE_BBIS_REMOVE_FROM_SERVICE_KEY = '3-' + 'rem';
  public static readonly SENTENCE_BBIS_SCRAP_KEY = '4-' + 'scr';
  public static readonly SENTENCE_BBIS_LOST_KEY = '5-' + 'los';
  public static readonly SENTENCE_BBIS_ENTRY_MISSING_KEY = '6-' + 'mis';
  public static readonly SENTENCE_BBIS_FURTHER_DISASSEMBLY_REQUIRED_KEY = '7-' + 'dis';
  public static readonly SENTENCE_BBIS_PRE_ORDER_KEY = '8-' + 'ord';
  // EVENT_PRIORIIY
  public static readonly EVENT_PRIORITY_SIGNIFICANT_KEY = '1-sig';
  public static readonly EVENT_PRIORITY_NON_SIGNIFICANT_KEY = '2-nsi';
  // EVENT_CAUSE
  public static readonly EVENT_CAUSE_BASIC_KEY = '1-bas';
  public static readonly EVENT_CAUSE_NON_BASIC_KEY = '2-nba';
  // FM ATTRIBUTE_CATEGORY
  public static readonly FM_ATTRIBUTE_CATEGORY_ALL_KEY = '1-all';
  public static readonly FM_ATTRIBUTE_CATEGORY_ALL_ASSETS_KEY = '2-ala';
  public static readonly FM_ATTRIBUTE_CATEGORY_EVENT_KEY = '3-eve';
  public static readonly FM_ATTRIBUTE_CATEGORY_CUSTOMER_KEY = '4-cus';
  public static readonly FM_ATTRIBUTE_CATEGORY_AIRCRAFT_KEY = '5-air';
  public static readonly FM_ATTRIBUTE_CATEGORY_ENGINE_KEY = '6-eng';
  public static readonly FM_ATTRIBUTE_CATEGORY_EQUIPMENT_KEY = '7-equ';
  public static readonly FM_ATTRIBUTE_CATEGORY_FLIGHT_KEY = '8-fli';
  public static readonly FM_ATTRIBUTE_CATEGORY_DEFECT_KEY = '9-def';
  // MCH ATTRIBUTE_CATEGORY
  public static readonly MCH_ATTRIBUTE_CATEGORY_ALL_KEY = '1-all';
  public static readonly MCH_ATTRIBUTE_CATEGORY_VARIANT_VERSION_KEY = '1-var';
  public static readonly MCH_ATTRIBUTE_CATEGORY_ITEM_KEY = '2-itm';
  public static readonly MCH_ATTRIBUTE_CATEGORY_PART_KEY = '3-prt';
  public static readonly MCH_ATTRIBUTE_CATEGORY_ITEM_PN_KEY = '4-ipn';
  public static readonly MCH_ATTRIBUTE_CATEGORY_EVOLUTION_KEY = '5-evo';
  public static readonly MCH_ATTRIBUTE_CATEGORY_SB_KEY = '6-sb';
  public static readonly MCH_ATTRIBUTE_CATEGORY_MODIFICATION_KEY = '7-mod';
  public static readonly MCH_ATTRIBUTE_CATEGORY_TASK_KEY = '8-tsk';
  public static readonly MCH_ATTRIBUTE_CATEGORY_OPERATION_KEY = '9-op';
  public static readonly MCH_ATTRIBUTE_CATEGORY_MAINTENANCE_PLAN_KEY = '10-mp';
  public static readonly MCH_ATTRIBUTE_CATEGORY_VISIT_KEY = '11-vis';
  public static readonly MCH_ATTRIBUTE_CATEGORY_MATERIAL_KEY = '12-mat';
  // EVENT_CATEGORY
  public static readonly EVENT_CATEGORY_OPERATIONAL_KEY = '1-ope';
  public static readonly EVENT_CATEGORY_MAINTENANCE_KEY = '2-mai';
  public static readonly EVENT_CATEGORY_CONFIGURATION_KEY = '3-con';
  public static readonly EVENT_CATEGORY_LOGISTICAL_KEY = '4-log';
  public static readonly EVENT_CATEGORY_DEFECT_KEY = '5-def';
  // EVENT_STATUS
  public static readonly EVENT_STATUS_DRAFT_KEY = '1-dra';
  public static readonly EVENT_STATUS_OPENED_KEY = '2-ope';
  public static readonly EVENT_STATUS_UNDER_INVESTIGATION_KEY = '3-uni';
  public static readonly EVENT_STATUS_UNDER_ANALYSIS_KEY = '3-una';
  public static readonly EVENT_STATUS_DEFERRED_KEY = '3-def';
  public static readonly EVENT_STATUS_CLOSED_KEY = '4-clo';
  // EVENT_TYPE
  public static readonly EVENT_TYPE_WORK_POSTPONEMENT_REQUEST = 'WPR';
  // REMOVAL_REASON
  public static readonly REMOVAL_REASON_FAILURE_KEY = '01-pf';
  // CUSTOMER_TYPE
  public static readonly CUSTOMER_TYPE_MRO_KEY = '1-' + 'mro';
  public static readonly CUSTOMER_TYPE_OEM_KEY = '2-' + 'oem';
  public static readonly CUSTOMER_TYPE_OTH_KEY = '3-' + 'oth';
  public static readonly CUSTOMER_TYPE_SUP_KEY = '4-' + 'sup';
  public static readonly CUSTOMER_TYPE_CUS_KEY = '5-' + 'cus';
  // AIRCRAFT STATUS
  public static readonly AIRCRAFT_STATUS_IN_OPERATION_KEY = '1-ino';
  public static readonly AIRCRAFT_STATUS_MAINTENANCE_KEY = '2-mai';
  public static readonly AIRCRAFT_STATUS_QUARANTINE_KEY = '3-qua';
  public static readonly AIRCRAFT_STATUS_PARKED_KEY = '4-par';
  public static readonly AIRCRAFT_STATUS_RETIRED_KEY = '6-ret';
  public static readonly AIRCRAFT_STATUS_CRASHED_KEY = '7-cra';
  public static readonly AIRCRAFT_STATUS_OTHER_KEY = '9-oth';
  public static readonly AIRCRAFT_STATUS_UNKNKOWN_KEY = '10-unk';
  // OPERATIONAL STATUS
  public static readonly OPERATIONAL_STATUS_IN_OPERATION_KEY = '1-ino';
  public static readonly OPERATIONAL_STATUS_MAINTENANCE_KEY = '2-mai';
  public static readonly OPERATIONAL_STATUS_SPARE_KEY = '3-spa';
  public static readonly OPERATIONAL_STATUS_DISMANTLED_KEY = '4-dis';
  public static readonly OPERATIONAL_STATUS_SCRAPPED_KEY = '5-scr';
  public static readonly OPERATIONAL_STATUS_RETIRED_KEY = '6-ret';
  public static readonly OPERATIONAL_STATUS_CRASHED_KEY = '7-cra';
  public static readonly OPERATIONAL_STATUS_EDS_UNDER_PROGRESS_KEY = '8-eds';
  public static readonly OPERATIONAL_STATUS_OTHER_KEY = '9-oth';
  public static readonly OPERATIONAL_STATUS_UNKNOWN_KEY = '10-unk';
  public static readonly OPERATIONAL_STATUS_IN_STOCK_KEY = '11-pre';
  public static readonly OPERATIONAL_STATUS_PENDING_FOR_MAINTENANCE_KEY = '12-pma';
  public static readonly OPERATIONAL_STATUS_EXTERNAL_MAINTENANCE_KEY = '13-exm';
  public static readonly OPERATIONAL_STATUS_TRANSFER_UNDER_PROGRESS_KEY = '14-tup';
  // FAMILY CONFIGURATION
  public static readonly FAMILY_CONFIG_AGEING = 'ageing';
  public static readonly FAMILY_CONFIG_TC_HOLDER = 'tc_holder';
  public static readonly FAMILY_CONFIG_COMPANY_CODE = 'company_code';
  public static readonly FAMILY_CONFIG_MILITARY = 'military';
  public static readonly FAMILY_CONFIG_TYPE_CERTIFICATE = 'type_certificate';
  public static readonly FAMILY_CONFIG_LETTER = 'letter';
  // FMD
  public static readonly FMD_STATUS_DRAFT_KEY = '1';
  public static readonly FMD_STATUS_DRAFT_PLUS_KEY = '2';
  public static readonly FMD_STATUS_OPEN_KEY = '3';
  public static readonly FMD_STATUS_RECOMMENDED_KEY = '4';
  public static readonly FMD_STATUS_CLOSED_KEY = '5';
  public static readonly FMD_STATUS_REFUSED_KEY = '6';
  // EXPORT
  public static readonly EXPORT_TEMPLATES_REPO_FMD = 'export.templates_path.fmd';
  // COUNTRY ZONE
  public static readonly COUNTRY_FRANCE = '135';
  // WORKSCOPE STATUS
  public static readonly WORKSCOPE_STATUS_INITIAL = '1';
  public static readonly WORKSCOPE_STATUS_APPROVAL = '2';
  public static readonly WORKSCOPE_STATUS_APPROVED = '3';
  // MISSION_PERIODICITY_TYPE
  public static readonly MISSION_PERIODICITY_TYPE_DAY = '1-day';
  public static readonly MISSION_PERIODICITY_TYPE_WEEK = '2-wee';
  public static readonly MISSION_PERIODICITY_TYPE_MONTH = '3-mon';
  // AIRM_PROJECT_STATUS
  public static readonly AIRM_PROJECT_STATUS_SIMULATED = '1-sim';
  public static readonly AIRM_PROJECT_STATUS_SCHEDULED = '2-pla';
  public static readonly AIRM_PROJECT_STATUS_RELEASED = '3-rel';
  public static readonly AIRM_PROJECT_STATUS_ONGOING = '4-ong';
  public static readonly AIRM_PROJECT_STATUS_PERFORMED = '5-per';
  public static readonly AIRM_PROJECT_STATUS_CLOSE = '6-clo';
  public static readonly AIRM_PROJECT_STATUS_LINE_MAINTENANCE = '7-lin';
  // AIRM_WORK_ORDER_TYPES
  public static readonly AIRM_WORK_ORDER_TYPE_TASK = '1-tas';
  public static readonly AIRM_WORK_ORDER_TYPE_DEFECT = '2-def';
  public static readonly AIRM_WORK_ORDER_TYPE_EVOLUTION = '3-evo';
  public static readonly AIRM_WORK_ORDER_TYPE_MANUAL = '4-man';
  public static readonly AIRM_WORK_ORDER_TYPE_SN_CHANGE = '5-snc';
  public static readonly AIRM_WORK_ORDER_TYPE_SUBCONTRACTING = '6-sub';
  // AIRM_OPERATION_STATUS
  // Status for Operation, task and Work Order
  public static readonly AIRM_OPERATION_STATUS_PLANNED = '1-pla';
  public static readonly AIRM_OPERATION_STATUS_ONGOING = '2-ong';
  public static readonly AIRM_OPERATION_STATUS_PERFORMED = '3-per';
  public static readonly AIRM_OPERATION_STATUS_TO_BE_CONFIRMED = '3-tbc';
  public static readonly AIRM_OPERATION_STATUS_CLOSE = '4-clo';
  public static readonly AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED = '5-por';
  public static readonly AIRM_OPERATION_STATUS_POSTPONED = '6-pos';
  public static readonly AIRM_OPERATION_STATUS_SIMULATED = '7-sim';
  public static readonly AIRM_OPERATION_STATUS_RELEASED = '8-rel';

  // PERIODICITY_TYPE
  public static readonly PERIODICITY_TYPE_BLOCKED = '1-blo';
  public static readonly PERIODICITY_TYPE_SPREAD_OUT = '2-spr';
  // AVAILABILITY_TYPE
  public static readonly AVAILABILITY_TYPE_FLIGHT = '1-fli';
  public static readonly AVAILABILITY_TYPE_QUALIFICATION = '2-qua';
  public static readonly AVAILABILITY_TYPE_TOOLS = '3-too';

  // FUNC_OBJECT_STATUS
  public static readonly FUNC_OBJECT_STATUS_ON_GOING_KEY = '1-' + 'ong';
  public static readonly FUNC_OBJECT_STATUS_IS_INTEGRATED_KEY = '2-' + 'isi';
  public static readonly FUNC_OBJECT_STATUS_APPROVED_KEY = '3-' + 'app';
  public static readonly FUNC_OBJECT_STATUS_RELEASED_KEY = '4-' + 'rel';
  public static readonly FUNC_OBJECT_STATUS_AVAILABLE_KEY = '5-' + 'ava';
  public static readonly FUNC_OBJECT_STATUS_REFUSED_KEY = '6-' + 'ref';

  // PN INTERCHANGEABILITY
  public static readonly PN_INTERCHANGEABILITY_ONE_WAY_KEY = '1';
  public static readonly PN_INTERCHANGEABILITY_TWO_WAY_KEY = '2';

  // PN PROPERTY
  public static readonly PN_PROPERTY_SEE_FOR_NHA = '1';
  public static readonly PN_PROPERTY_SEE_FOR_DET = '2';
  public static readonly PN_PROPERTY_SEE = '3';
  public static readonly PN_PROPERTY_USE_WITH = '4';
  public static readonly PN_PROPERTY_USAGE = '5';

  // HR ABSENCE TYPE
  public static readonly HR_ABSENCE_TYPE_HOLIDAY = '1';

  // HR ABSENCE STATUS
  public static readonly HR_ABSENCE_STATUS_VALIDATED = '3';

  // HR COST
  public static readonly HR_HOURLY_COST_DAY_TYPE_WORKING_DAY_KEY = '1';
  public static readonly HR_HOURLY_COST_DAY_TYPE_WEEKEND_KEY = '2';
  public static readonly HR_HOURLY_COST_DAY_TYPE_HOLLYDAY_KEY = '3';

  // HR CONTRACT TYPE
  public static readonly HR_CONTRACT_PERMANENT_TIME_CONTRACT = '1';

  // HR QUALIFICATION TYPE
  public static readonly HR_QUALIFICATION_TYPE_ACADEMIC = '1';
  public static readonly HR_QUALIFICATION_TYPE_MAINTENANCE_SKILL = '2';
  public static readonly HR_QUALIFICATION_TYPE_MAINTENANCE_LEVEL = '3';
  public static readonly HR_QUALIFICATION_TYPE_FLIGHT_OPERATIONS = '4';

  // HR SALARY PERIOD
  public static readonly HR_SALARY_PERIOD_YEAR = '1';
  public static readonly HR_SALARY_PERIOD_MONTH = '2';
  public static readonly HR_SALARY_PERIOD_WEEK = '3';
  public static readonly HR_SALARY_PERIOD_DAY = '4';
  public static readonly HR_SALARY_PERIOD_HOUR = '5';

  // MM MVT STATUS
  public static readonly MM_MVT_STATUS_PLANNED_KEY = '1';
  public static readonly MM_MVT_STATUS_AUTHORIZED_KEY = '2';
  public static readonly MM_MVT_STATUS_ON_GOING_KEY = '3';
  public static readonly MM_MVT_STATUS_EXECUTED_KEY = '4';
  public static readonly MM_MVT_STATUS_CLOSED_KEY = '5';
  public static readonly MM_MVT_STATUS_CANCELED_KEY = '6';
  public static readonly MM_MVT_STATUS_CHECKED_KEY = '7';

  // MM STOCK OWNER
  public static readonly MM_STOCK_OWNER_OWN_KEY = '1';
  public static readonly MM_STOCK_OWNER_CUSTOMER_KEY = '2';
  public static readonly MM_STOCK_OWNER_SUPPLIER_KEY = '3';
  public static readonly MM_STOCK_OWNER_PROJECT_KEY = '4';

  // MM STOCK STATUS
  public static readonly MM_STOCK_STATUS_OPEN = '1';
  public static readonly MM_STOCK_STATUS_BLOCKED = '2';
  public static readonly MM_STOCK_STATUS_CONTROLLED = '3';

  // MM VALUATION GROUP CODE
  public static readonly MM_VALUATION_GROUP_CODE_NEW_KEY = '1';
  public static readonly MM_VALUATION_GROUP_CODE_USED_KEY = '2';
  public static readonly MM_VALUATION_GROUP_CODE_SCRAP_KEY = '3';

  // UP_IM_TYPE
  public static readonly UP_IM_TYPE_AUTHORIZED = 'a.1';
  public static readonly UP_IM_TYPE_FORBIDDEN = 'a.2';
  public static readonly UP_IM_TYPE_MANDATORY = 'a.3';
  // UP_MATCHING
  public static readonly UP_MATCHING_SUCCESS = 'b.1';
  public static readonly UP_MATCHING_WARNING = 'b.2';
  public static readonly UP_MATCHING_ERROR = 'b.3';
  // UP_IM_STATUS
  public static readonly UP_IM_STATUS_VALIDATED = 'c.1';
  public static readonly UP_IM_STATUS_ON_GOING = 'c.2';
  // UP_FE_LOGICAL_LINK
  public static readonly UP_FE_LOGICAL_LINK_OR = 'd.1';
  public static readonly UP_FE_LOGICAL_LINK_AND = 'd.2';
  // UP_FE_OBJECT
  public static readonly UP_FE_OBJECT_ITEM = 'e.1';
  public static readonly UP_FE_OBJECT_INVENTORY = 'e.2';
  public static readonly UP_FE_OBJECT_FILTER = 'e.3';
  // UP_FE_DATA_ITEM
  public static readonly UP_FE_ITEM_ELEMENT_ITEM_TYPE = 'f.1';
  public static readonly UP_FE_ITEM_ELEMENT_REPLACEABLE_UNIT_TYPE = 'f.2';
  public static readonly UP_FE_ITEM_ELEMENT_ITEM_FAMILY = 'f.3';
  public static readonly UP_FE_ITEM_ELEMENT_FLOC_TYPE = 'f.4';
  public static readonly UP_FE_ITEM_ELEMENT_LIFE_RESTRICTION_TYPE = 'f.5';
  public static readonly UP_FE_ITEM_ELEMENT_ATTACHING_PART = 'f.6';
  public static readonly UP_FE_ITEM_ELEMENT_ITEM_CONFIGURABLE = 'f.7';
  public static readonly UP_FE_ITEM_ELEMENT_SERIALIZED_PART = 'f.8';
  public static readonly UP_FE_ITEM_ELEMENT_VISIBLE_ON_INSPECTION = 'f.9';
  public static readonly UP_FE_ITEM_ELEMENT_IS_IN_MEL_CDL = 'f.10';
  public static readonly UP_FE_ITEM_ELEMENT_MATCHING_RESULT = 'f.11';
  // UP_FE_DATA_INVENTORY
  public static readonly UP_FE_INVENTORY_ELEMENT_PN = 'g.1';
  public static readonly UP_FE_INVENTORY_ELEMENT_SN = 'g.2';
  public static readonly UP_FE_INVENTORY_ELEMENT_QUANTITY = 'g.3';
  public static readonly UP_FE_INVENTORY_ELEMENT_SENTENCE = 'g.4';
  public static readonly UP_FE_INVENTORY_ELEMENT_DECISION = 'g.5';
  public static readonly UP_FE_INVENTORY_ELEMENT_NOTIFICATION_NUMBER_TWS = 'g.6';
  public static readonly UP_FE_INVENTORY_ELEMENT_NOTIFICATION_NUMBER_IS = 'g.7';
  public static readonly UP_FE_INVENTORY_ELEMENT_ORDER_NUMBER_TWS = 'g.8';
  public static readonly UP_FE_INVENTORY_ELEMENT_ORDER_NUMBER_IS = 'g.9';
  public static readonly UP_FE_INVENTORY_ELEMENT_EQUIPMENT_NUMBER = 'g.10';
  public static readonly UP_FE_INVENTORY_ELEMENT_TAG_NUMBER = 'g.11';
  public static readonly UP_FE_INVENTORY_ELEMENT_TARGET_PN = 'g.12';
  public static readonly UP_FE_INVENTORY_ELEMENT_SENTENCE_SIGNATURE = 'g.13';
  public static readonly UP_FE_INVENTORY_ELEMENT_REWORKED_PN = 'g.14';
  public static readonly UP_FE_INVENTORY_ELEMENT_MATCHING_RESULT = 'g.15';
  public static readonly UP_FE_INVENTORY_ELEMENT_USED_WITH = 'g.16';
  public static readonly UP_FE_INVENTORY_ELEMENT_TASK = 'g.17';
  public static readonly UP_FE_INVENTORY_ELEMENT_FINDING = 'g.18';
  public static readonly UP_FE_INVENTORY_ELEMENT_NOTIFICATION_COLOR_TWS = 'g.19';
  public static readonly UP_FE_INVENTORY_ELEMENT_NOTIFICATION_COLOR_IS = 'g.20';
  public static readonly UP_FE_INVENTORY_ELEMENT_PN_OUT = 'g.21';
  public static readonly UP_FE_INVENTORY_ELEMENT_SN_OUT = 'g.22';
  public static readonly UP_FE_INVENTORY_ELEMENT_QUANTITY_OUT = 'g.23';
  public static readonly UP_FE_INVENTORY_ELEMENT_EQUIPMENT_NUMBER_OUT = 'g.24';
  public static readonly UP_FE_INVENTORY_ELEMENT_MATCHING_RESULT_OUT = 'g.25';
  public static readonly UP_FE_INVENTORY_ELEMENT_USED_WITH_OUT = 'g.26';
  public static readonly UP_FE_INVENTORY_ELEMENT_STATUS = 'g.27';

  // UP_FE_COMPARISON_DATA_ALL
  public static readonly UP_FE_COMPARISON_DATA_ALL_VALUATED = 'h.1';
  public static readonly UP_FE_COMPARISON_DATA_ALL_NOT_VALUATED = 'h.2';
  public static readonly UP_FE_COMPARISON_DATA_ALL_EQUALS_TO = 'h.3';
  public static readonly UP_FE_COMPARISON_DATA_ALL_DIFFERENT_THAN = 'h.4';
  // UP_FE_COMPARISON_DATA_FI
  public static readonly UP_FE_COMPARISON_DATA_FI_APPLIED = 'i.1';
  public static readonly UP_FE_COMPARISON_DATA_FI_NOT_APPLIED = 'i.2';
  // UP_FE_COMPARISON_DATA_FF
  public static readonly UP_FE_COMPARISON_DATA_FF_VALUATED = 'j.1';
  public static readonly UP_FE_COMPARISON_DATA_FF_NOT_VALUATED = 'j.2';
  // UP_FE_COMPARISON_DATA_CB
  public static readonly UP_FE_COMPARISON_DATA_CB_EQUALS_TO = 'k.1';
  public static readonly UP_FE_COMPARISON_DATA_CB_DIFFERENT_THAN = 'k.2';
  // UP_FE_DATA_CB
  public static readonly UP_FE_DATA_CB_TRUE = 'l.1';
  public static readonly UP_FE_DATA_CB_FALSE = 'l.2';

  // UP_FE_NOTIFICATION_COLOR
  public static readonly UP_FE_NOTIFICATION_COLOR_WHITE = 'm.1';
  public static readonly UP_FE_NOTIFICATION_COLOR_GREEN = 'm.2';
  public static readonly UP_FE_NOTIFICATION_COLOR_RED = 'm.3';
  public static readonly UP_FE_NOTIFICATION_COLOR_YELLOW = 'm.4';
  public static readonly UP_FE_NOTIFICATION_COLOR_ORANGE = 'm.5';

  // TASK TYPE
  public static readonly TASK_TYPE_REMOVAL_KEY = '1';
  public static readonly TASK_TYPE_INSTALLATION_KEY = '2';
  public static readonly TASK_TYPE_DISASSEMBLY_KEY = '3';
  public static readonly TASK_TYPE_ASSEMBLY_KEY = '4';
  public static readonly TASK_TYPE_CLEANING_KEY = '5';
  public static readonly TASK_TYPE_VISUAL_INSPECTION_KEY = '6';
  public static readonly TASK_TYPE_DETAILED_INSPECTION_KEY = '7';
  public static readonly TASK_TYPE_TEST_KEY = '8';
  public static readonly TASK_TYPE_STORAGE_KEY = '9';
  public static readonly TASK_TYPE_REPAIR_KEY = '10';
  public static readonly TASK_TYPE_REPLACEMENT_KEY = '11';
  public static readonly TASK_TYPE_PROCEDURE_KEY = '12';
  public static readonly TASK_TYPE_TROUBLESHOOTING_KEY = '13';
  public static readonly TASK_TYPE_VISIT_KEY = '14';
  public static readonly TASK_TYPE_PRELIMINARY_WORK_KEY = '15';

  // ASSET ACTION TYPE
  public static readonly ACTION_TYPE_BANNED_FOR_FLYING = '1';
  public static readonly ACTION_TYPE_SURVEILLANCE = '2';
  public static readonly ACTION_TYPE_DESTROYED = '3';
  public static readonly ACTION_TYPE_SERVICE_MATERIAL = '4';

  // TASK LINK
  public static readonly TASK_LINK_INFERIOR = '0';
  public static readonly TASK_LINK_INDUCES_AS_ANTERIOR = '1';
  public static readonly TASK_LINK_INDUCES_AS_POSTERIOR = '2';
  public static readonly TASK_LINK_SUPERIOR = '3';
  public static readonly TASK_LINK_ON_CONDITION = '4';
  public static readonly TASK_LINK_REFER_TO = '5';
  public static readonly TASK_LINK_IF_NEEDED = '6';

  // TASK ITEM TYPE
  public static readonly TASK_ITEM_TYPE_MAINTAINS = '1';
  public static readonly TASK_ITEM_TYPE_SPARE_PART = '2';
  public static readonly TASK_ITEM_TYPE_EXPANDABLE_PART = '3';
  public static readonly TASK_ITEM_TYPE_TRACKING_ITEM = '4';

  // TASK EVOLUTION TYPE
  public static readonly TASK_EVOLUTION_TYPE_PERFORMS = '1';
  public static readonly TASK_EVOLUTION_TYPE_APPLICABLE_BEFORE = '2';
  public static readonly TASK_EVOLUTION_TYPE_APPLICABLE_AFTER = '3';

  // PN TRACEABILITY
  public static readonly PN_TRACEABILITY_BY_BATCH = '1';
  public static readonly PN_TRACEABILITY_BY_SN = '2';
  public static readonly PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN = '3';
  public static readonly PN_TRACEABILITY_BY_PACKAGING_BATCH = '4';

  // DOC EVENT CATEGORY
  public static readonly DOC_EVENT_CATEG_DEROGATION_AGREEMENT = '1';
  public static readonly DOC_EVENT_CATEG_PHOTO = '2';
  public static readonly DOC_EVENT_CATEG_JOC_CARD = '3';

  // FLIGHT STATUS
  public static readonly FLIGHT_STATUS_DRAFT = '1-dra';
  public static readonly FLIGHT_STATUS_SCHEDULED = '2-sch';
  public static readonly FLIGHT_STATUS_DELAYED = '3-del';
  public static readonly FLIGHT_STATUS_ARRIVED = '4-arr';
  public static readonly FLIGHT_STATUS_COMPLETED = '5-com';
  public static readonly FLIGHT_STATUS_VALIDATED = '6-val';
  public static readonly FLIGHT_STATUS_CANCELED = '7-can';
  public static readonly FLIGHT_STATUS_GO_VALIDATED = '8-goval';

  // MM WAREHOUSE TYPE
  public static readonly MM_WAREHOUSE_TYPE_NEW_KEY = '1-new';
  public static readonly MM_WAREHOUSE_TYPE_REPAIR_KEY = '2-rep';
  public static readonly MM_WAREHOUSE_TYPE_UNSERVICEABLE_KEY = '3-uns';
  public static readonly MM_WAREHOUSE_TYPE_SCRAP_KEY = '4-scr';
  public static readonly MM_WAREHOUSE_TYPE_USED_KEY = '5-usd';
  public static readonly MM_WAREHOUSE_TYPE_TOOLS_KEY = '6-too';
  public static readonly MM_WAREHOUSE_TYPE_TRANSFER_KEY = '7-trf';
  public static readonly MM_WAREHOUSE_TYPE_CONTROL_KEY = '8-ctl';
  public static readonly MM_WAREHOUSE_TYPE_DEPLOYEMENT_BATCH = '9-dep';
  public static readonly MM_WAREHOUSE_TYPE_MAIN = '10-mai';

  // MM SERVICE TYPE
  public static readonly MM_SERVICE_TYPE_SUPPLIER_KEY = '1';
  public static readonly MM_SERVICE_TYPE_REPAIRER_KEY = '2';

  // PURCHASE CATEGORY
  public static readonly PURCHASE_CATEGORY_CONTRACT = '1-con';
  public static readonly PURCHASE_CATEGORY_REQUEST = '2-req';
  public static readonly PURCHASE_CATEGORY_QUOTATION = '3-quo';
  public static readonly PURCHASE_CATEGORY_ORDER = '4-ord';
  public static readonly PURCHASE_CATEGORY_OTHER = '5-oth';

  // PURCHASE TYPE
  public static readonly PURCHASE_TYPE_REPAIR = '1-rep';
  public static readonly PURCHASE_TYPE_NEW_PARTS = '2-new';
  public static readonly PURCHASE_TYPE_STD_EXCHANGE = '3-exc';
  public static readonly PURCHASE_TYPE_UPGRADE = '4-upg';
  public static readonly PURCHASE_TYPE_OVERHAUL = '5-ovh';
  public static readonly PURCHASE_TYPE_TECHNICAL_ASSIST = '6-tec';
  public static readonly PURCHASE_TYPE_TRANSPORT = '7-tra';
  public static readonly PURCHASE_TYPE_VERIFICATION = '8-ver';
  public static readonly PURCHASE_TYPE_OTHER = '9-oth';

  // PURCHASE CONTRACT TYPE
  public static readonly PURCHASE_CONTRACT_TYPE_PBH = '1-pbh';
  public static readonly PURCHASE_CONTRACT_TYPE_WARRANTY = '2-war';
  public static readonly PURCHASE_CONTRACT_TYPE_SERVICE = '3-ser';
  public static readonly PURCHASE_CONTRACT_TYPE_OTHER = '4-oth';

  // PURCHASE STATUS
  public static readonly PURCHASE_STATUS_OPEN = '1-ope';
  public static readonly PURCHASE_STATUS_SENT_TO_SUPPLIER = '2-sen';
  public static readonly PURCHASE_STATUS_EXECUTION_IN_PROGRESS = '3-eip';
  public static readonly PURCHASE_STATUS_COMPLETED = '4-com';
  public static readonly PURCHASE_STATUS_ACCEPTANCE_IN_PROGRESS = '5-aip';
  public static readonly PURCHASE_STATUS_ACCEPTED = '6-acc';
  public static readonly PURCHASE_STATUS_ABANDONED = '7-aba';
  public static readonly PURCHASE_STATUS_CLOSED = '8-clo';

  // FUEL_TYPE
  public static readonly FUEL_TYPE_ROLLING_KEY = '1-' + 'mro';
  public static readonly FUEL_TYPE_STEP_CONSUMTION_KEY = '2-' + 'ste';
  public static readonly FUEL_TYPE_ROAD_RESERVE_KEY = '3-' + 'roa';
  public static readonly FUEL_TYPE_CLEARANCE_RESERVE_KEY = '4-' + 'cle';
  public static readonly FUEL_TYPE_FINAL_RESERVE_KEY = '5-' + 'fin';
  public static readonly FUEL_TYPE_ADDITIONAL_RESERVE_KEY = '6-' + 'add';

  // FLIGHT_LOAD_CATEGORY
  public static readonly FLIGHT_LOAD_CATEGORY_FUEL_KEY = '1-' + 'fue';
  public static readonly FLIGHT_LOAD_CATEGORY_OIL_KEY = '2-' + 'oil';
  public static readonly FLIGHT_LOAD_CATEGORY_ARMING_KEY = '3-' + 'arm';
  public static readonly FLIGHT_LOAD_CATEGORY_OTHER_KEY = '4-' + 'oth';

  // REF_MEASURE_CATEGORY
  public static readonly REF_MEASURE_CATEGORY_FUEL_KEY = '1-' + 'fue';
  public static readonly REF_MEASURE_CATEGORY_OIL_KEY = '2-' + 'oil';
  public static readonly REF_MEASURE_CATEGORY_HEALTH_KEY = '3-' + 'hea';
  public static readonly REF_MEASURE_CATEGORY_LIFE_KEY = '3-' + 'lif';
  public static readonly REF_MEASURE_CATEGORY_OTHER_KEY = '4-' + 'oth';
  public static readonly REF_MEASURE_CATEGORY_USAGE_KEY = '5-' + 'usa';
  public static readonly REF_MEASURE_CATEGORY_STORAGE_KEY = '6-' + 'sto';
  public static readonly REF_MEASURE_CATEGORY_USAGE_STORAGE_KEY = '7-' + 'u+s';

  // DEFECT NAME
  public static readonly DEFECT_NAME_MISSING_EQUIPMENT_KEY = '60';
  public static readonly DEFECT_NAME_EXTRA_EQUIPMENT_KEY = '61';
  public static readonly DEFECT_NAME_MEL_ALERT_KEY = '62';
  public static readonly DEFECT_NAME_CONFIGURATION_ALERT_KEY = '63';
  public static readonly DEFECT_NAME_CALENDAR_LIMIT_ALERT_KEY = '64';
  public static readonly DEFECT_NAME_POTENTIAL_ALERT_KEY = '65';
  public static readonly DEFECT_NAME_HARDPOINT_ALERT_KEY = '66';

  // FMD_INJURY_LEVEL
  public static readonly FMD_INJURY_LEVEL_NONE = '98';

  // FMD_HIGHEST_DAMAGE
  public static readonly FMD_HIGHEST_DAMAGE_NONE = '98';

  // REPLENISHMENT TYPE
  public static readonly REPLENISHMENT_TYPE_FUEL = '1';
  public static readonly REPLENISHMENT_TYPE_ENGINE_OIL = '8';

  // REPLENISHMENT MEASURE SOURCE
  public static readonly RM_SOURCE_DELTA_VALUE = '1';
  public static readonly RM_SOURCE_METERED_SOURCE = '2';

  // ENGINE OIL REPLENISHMENT MEASURE TYPE
  public static readonly RM_ENGINE_OIL_TYPE_COLD = '1';
  public static readonly RM_ENGINE_OIL_TYPE_HOT = '2';

  // DOC ASSET CATEGORY FICA
  public static readonly DOC_ASSET_CATEGORY_FICA = '14';

  // SB COUNTER LIMIT TYPE
  public static readonly SB_COUNTER_LIMIT_TYPE_FIRST_LIMIT = '1-fl';
  public static readonly SB_COUNTER_LIMIT_TYPE_LAST_LIMIT = '2-ll';

  // SB COUNTER LIMIT REF DATE
  public static readonly SB_COUNTER_LIMIT_REF_DATE_EFFECTIVE_DATE = '1-efd';
  public static readonly SB_COUNTER_LIMIT_REF_DATE_EIS_DATE = '2-eid';
  public static readonly SB_COUNTER_LIMIT_REF_DATE_MANUFACTURING_DATE = '3-mfd';

  // BATCH TYPE
  public static readonly BATCH_TYPE_MANUFACTURING_KEY = '1-mab';
  public static readonly BATCH_TYPE_PACKAGING_KEY = '2-pab';

  // DELIVERY ELEMENT TYPE
  public static readonly DELIVERY_ELEMENT_TYPE_PACKAGE = '1-pac';
  public static readonly DELIVERY_ELEMENT_TYPE_ITEM = '2-ite';
  public static readonly DELIVERY_ELEMENT_TYPE_ASSET = '3-ass';

  // RECEIPT FOLDER STATUS
  public static readonly RECEIPT_FOLDER_STATUS_PLANNED = '1-pla';
  public static readonly RECEIPT_FOLDER_STATUS_ON_GOING = '2-ong';
  public static readonly RECEIPT_FOLDER_STATUS_PERFORMED = '3-per';
  public static readonly RECEIPT_FOLDER_STATUS_CANCELED = '4-can';
  public static readonly RECEIPT_FOLDER_STATUS_DRAFT = '5-dra';

  // SHIPMENT FOLDER STATUS
  public static readonly SHIPMENT_FOLDER_STATUS_PLANNED = '1-pla';
  public static readonly SHIPMENT_FOLDER_STATUS_ON_GOING = '2-ong';
  public static readonly SHIPMENT_FOLDER_STATUS_AWAITING = '3-awa';
  public static readonly SHIPMENT_FOLDER_STATUS_TAKEN_IN_CHARGE = '4-tak';
  public static readonly SHIPMENT_FOLDER_STATUS_IN_TRANSIT = '5-int';
  public static readonly SHIPMENT_FOLDER_STATUS_PERFORMED = '6-per';
  public static readonly SHIPMENT_FOLDER_STATUS_CANCELED = '7-can';
  public static readonly SHIPMENT_FOLDER_STATUS_DRAFT = '8-dra';

  // WAREHOUSE CATEGORY
  public static readonly WAREHOUSE_CATEGORY_WAREHOUSE = '1-war';
  public static readonly WAREHOUSE_CATEGORY_WORKSHOP = '2-wor';

  // DELIVERY CATEGORY
  public static readonly DELIVERY_CATEGORY_RECEIPT = '1-rec';
  public static readonly DELIVERY_CATEGORY_SHIPMENT = '2-shi';

  // PROCUREMENT REQUEST STATUS
  public static readonly PROCUREMENT_REQUEST_STATUS_DRAFT = '1-dra';
  public static readonly PROCUREMENT_REQUEST_STATUS_SIMULATED = '2-sim';
  public static readonly PROCUREMENT_REQUEST_STATUS_PLANNED = '3-pla';
  public static readonly PROCUREMENT_REQUEST_STATUS_RELEASED = '4-rel';
  public static readonly PROCUREMENT_REQUEST_STATUS_AWAITING_FOR_A_DUE = '5-awa';
  public static readonly PROCUREMENT_REQUEST_STATUS_CLOSED = '6-clo';
  public static readonly PROCUREMENT_REQUEST_STATUS_CANCELED = '7-can';
  public static readonly PROCUREMENT_REQUEST_STATUS_ONGOING = '8-ong';

  // TRANSFER_ORDER
  public static readonly TRANSFER_ORDER_STATUS_PLANNED = '1-pla';
  public static readonly TRANSFER_ORDER_STATUS_ON_GOING = '2-ong';
  public static readonly TRANSFER_ORDER_STATUS_TRANSIT = '3-int';
  public static readonly TRANSFER_ORDER_STATUS_PERFORMED = '4-per';
  public static readonly TRANSFER_ORDER_STATUS_CANCELED = '5-can';

  // LOGISTICAL OPERATION STATUS
  public static readonly LOGISTICAL_OPERATION_STATUS_PLANNED = '1-pla';
  public static readonly LOGISTICAL_OPERATION_STATUS_PERFORMED = '2-per';
  public static readonly LOGISTICAL_OPERATION_STATUS_CANCELED = '3-can';
  public static readonly LOGISTICAL_OPERATION_STATUS_UNDER_LITIGATION = '4-inl';

  // LOGISTICAL CRITICALITY
  public static readonly LOGISTICAL_CRITICALITY_ROUTINE = '1-rou';
  public static readonly LOGISTICAL_CRITICALITY_URGENT = '2-urg';
  public static readonly LOGISTICAL_CRITICALITY_IMMEDIATE = '3-imm';

  public static readonly MVT_TYPE_RECEIPT = '1';
  public static readonly MVT_TYPE_SHIPMENT = '2';

  // WORK PACKAGE TYPE
  public static readonly WP_TYPE_ACRS = '1';
  public static readonly WP_TYPE_GONOGO = '2';

  // STORAGE BIN CATEGORY
  public static readonly STORAGE_BIN_CATEGORY_AREA = '1-are';
  public static readonly STORAGE_BIN_CATEGORY_SB = '2-sto';

  // DEA DIA
  public static readonly DEA_DIA_STATUS_DRAFT = '1-dra';
  public static readonly DEA_DIA_STATUS_PENDING_CONTOL = '2-cop';
  public static readonly DEA_DIA_STATUS_SUBMITED_TO_DMAE = '3-cet';
  public static readonly DEA_DIA_STATUS_WAINTING_FOR_FURTHER_INFORMATION = '4-pfi';
  public static readonly DEA_DIA_STATUS_CLOSED_BY_CENTRAL = '5-clc';
  public static readonly DEA_DIA_STATUS_CLOSED = '6-clo';
  public static readonly DEA_DIA_STATUS_REFUSED = '7-ref';

  // LOGISTICAL OPERATION
  public static readonly LOGISTICAL_OPERATION_PHYSICAL_RECEIPT = '1-phy';
  public static readonly LOGISTICAL_OPERATION_VISUAL_CONTROL = '2-vis';
  public static readonly LOGISTICAL_OPERATION_QUALITY_CONTROL = '3-qua';
  public static readonly LOGISTICAL_OPERATION_DOCUMENT_CONTROL = '4-doc';
  public static readonly LOGISTICAL_OPERATION_TECHNICAL_RECEIPT = '5-tec';
  public static readonly LOGISTICAL_OPERATION_PACKAGING_CONTROL = '6-pat';
  public static readonly LOGISTICAL_OPERATION_PACKAGING = '7-pac';
  public static readonly LOGISTICAL_OPERATION_BOX_PACKAGING = '8-box';

  // PROCUREMENT REQUEST TYPE
  public static readonly PROCUREMENT_REQUEST_TYPE_MAINTENANCE = '1-mai';
  public static readonly PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE = '2-exc';
  public static readonly PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING = '3-sto';
  public static readonly PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH = '4-dep';
  public static readonly PROCUREMENT_REQUEST_TYPE_MISCELLANEOUS = '5-mis';
  public static readonly PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES = '6-sem';
  public static readonly PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES = '7-ses';

  // MATERIAL MANAGEMENT FULL
  public static readonly MM_FULL_MODULE_ACTIVATED = true;

  // FUNC OBJECT
  public static readonly FUNC_OBJECT_STATUS_ONGOING = '1-ong';

  // PACKAGE STATUS
  public static readonly PACKAGE_STATUS_PLANNED = '1-pla';
  public static readonly PACKAGE_STATUS_ONGOING = '2-ong';
  public static readonly PACKAGE_STATUS_VALIDATED = '3-val';
  public static readonly PACKAGE_STATUS_AWAITING = '4-awa';
  public static readonly PACKAGE_STATUS_DELIVERED = '5-del';
  public static readonly PACKAGE_STATUS_CANCELLED = '6-can';
  public static readonly PACKAGE_STATUS_TAKEN_IN_CHARGE = '7-tak';

  // MM TRANSFER TYPE
  public static readonly MM_TRANSFER_TYPE_INTRA_SITE_KEY = '1';
  public static readonly MM_TRANSFER_TYPE_INTER_SITE_KEY = '2';
  public static readonly MM_TRANSFER_TYPE_EXTERNAL_KEY = '3';

  // SPARE_PART_CLASS_CODE
  public static readonly SPC_NON_PROCURABLE_KEY = '0';
  public static readonly SPC_EXPANDABLE_KEY = '1';
  public static readonly SPC_ROTABLE_KEY = '2';
  public static readonly SPC_REPAIRABLE_KEY = '6';

  // TRANSFER_ORDER_TYPE
  public static readonly TRANSFER_ORDER_TYPE_INTRA_SITE = '51';
  public static readonly TRANSFER_ORDER_TYPE_INTER_SITE = '52';
  public static readonly TRANSFER_ORDER_TYPE_TIL3 = '53';
  public static readonly TRANSFER_ORDER_TYPE_OPS_SHIPMENT = '54';
  public static readonly TRANSFER_ORDER_TYPE_CESSION_SHIPMENT = '55';
  public static readonly TRANSFER_ORDER_TYPE_LOAN_SHIPMENT = '56';
  public static readonly TRANSFER_ORDER_TYPE_ELIMINATION_SHIPMENT = '57';
  public static readonly TRANSFER_ORDER_TYPE_REVERSE_MVT = '58';

  // BATCH EQUIPMENT STATUS
  public static readonly MM_BATCH_EQUIPMENT_STATUS_SERVICEABLE = '1-ser';
  public static readonly MM_BATCH_EQUIPMENT_STATUS_IN_QUANRATINE = '2-inq';
  public static readonly MM_BATCH_EQUIPMENT_STATUS_UNSERVICEABLE = '3-uns';
  public static readonly MM_BATCH_EQUIPMENT_STATUS_SCRAPPED = '4-scr';
}
