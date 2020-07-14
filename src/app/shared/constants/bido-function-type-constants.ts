export class BidoFunctionTypeConstants {
  public static readonly MODULE_FAMILY: string = 'FAMILY';
  public static readonly MODULE_FM: string = 'FM';
  public static readonly MODULE_HR: string = 'HR';
  public static readonly MODULE_IWB: string = 'IWB';
  public static readonly MODULE_MM: string = 'BB_MM';
  public static readonly MODULE_AIRM: string = 'BB_AIRM';
  public static readonly MODULE_MFO: string = 'BB_MFO';

  // Liste des niveaux d'accès
  public static readonly DEGREE_DISPLAY = 1;
  public static readonly DEGREE_SIMULATE = 1.5;
  public static readonly DEGREE_UPDATE = 2;
  public static readonly DEGREE_MANAGE = 3;

  // Use cases du building block INSPECTOR WORKBENCH
  public static readonly UC_IWB_PROJECT_PREFIX = '1';
  public static readonly UC_IWB_PM = 'UC10'; // Project Management
  public static readonly UC_IWB_LOGBOOK = 'UC11'; // Logbook Managment
  public static readonly UC_IWB_CM = 'UC13'; // Configuration Management
  public static readonly UC_IWB_IM = 'UC14'; // Inventory Management
  public static readonly UC_IWB_ES = 'UC15'; // Electronic Signature
  public static readonly UC_IWB_DYNAMIC_FILTER = 'UC16'; // Filtre Dynamique		(Introduit par NEWIWB)
  public static readonly UC_IWB_INSPECTION_MATRIX = 'UC17'; // Matrice d'Inspection	(Introduit par NEWIWB)
  public static readonly UC_IWB_DECISION_OPTIMIZER = 'UC18'; // Decision Optimizer
  public static readonly UC_IWB_PROJECT_CLOSING = 'UC20';

  public static readonly UC_IWB_TWS_PREFIX = '2'; // Technical Workcope prefix		(Inutile à partir de NEWIWB)
  public static readonly UC_IWB_TWS_WKS = 'UC21'; // Workscope 						(Inutile à partir de NEWIWB)
  public static readonly UC_IWB_TWS_INV = 'UC22'; // Inventory 						(Inutile à partir de NEWIWB)
  public static readonly UC_IWB_TWS_FSMM = 'UC23'; // Full Structure Multi Matching	(Inutile à partir de NEWIWB)
  public static readonly UC_IWB_TWS_DEC = 'UC24'; // Decision 						(Inutile à partir de NEWIWB)

  public static readonly UC_IWB_IS_PREFIX = '3'; // Inspection & Sentencing prefix
  public static readonly UC_IWB_IS_WKS = 'UC31'; // Workscope
  public static readonly UC_IWB_IS_INV = 'UC32'; // Inventory
  public static readonly UC_IWB_IS_FSMM = 'UC33'; // Full Structure Multi Matching
  public static readonly UC_IWB_IS_DEC = 'UC34'; // Decision
  public static readonly UC_IWB_IS_OC = 'UC36'; // Outgoing Configuration

  // Use cases du building block MASTER CONFIGURATION HUB
  public static readonly UC_MCH_BOM = 'UC50';
  public static readonly UC_MCH_TASK = 'UC51';
  public static readonly UC_MCH_LOGISTICS = 'UC52';
  public static readonly UC_MCH_ATTRIBUTE = 'UC53';

  // Use cases du building block FLEET MANAGEMENT
  public static readonly UC_FM_EQUIPMENT = 'UC60';
  public static readonly UC_FM_FLEET = 'UC601';
  public static readonly UC_FM_TRANSFER = 'UC603';
  public static readonly UC_FM_AIRCRAFT = 'UC604';
  public static readonly UC_FM_COUNTER = 'UC605';
  public static readonly UC_FM_EVENT = 'UC61';
  public static readonly UC_FM_MISSION = 'UC611';
  public static readonly UC_FM_CONFIGURATION = 'UC612';
  public static readonly UC_FM_FMD = 'UC613';
  public static readonly UC_FM_SUBSCRIPTION = 'UC614';
  public static readonly UC_FM_FLIGHT = 'UC615';
  public static readonly UC_FM_OPERATION = 'UC616';
  public static readonly UC_FM_FL = 'UC62';
  public static readonly UC_FM_CUSTOMER = 'UC63';
  public static readonly UC_FM_CONTACT = 'UC631';
  public static readonly UC_FM_AIRWORTHINESS = 'UC64';
  public static readonly UC_FM_ATTRIBUTE = 'UC69';

  // Droits spécifiques Snecma-FDM : A déplacer ?
  public static readonly FDM_UC_FM_MSA = 'UC6001';
  public static readonly FDM_UC_FM_EDS = 'UC6002';
  public static readonly FDM_UC_FM_FAC = 'UC6003';

  // Droits spécifiques Snecma-GPOT : A déplacer ?
  public static readonly GPOT_UC_FM_SAP_DATA_SYNC = 'UC6101';

  // Use cases du building block C2
  public static readonly UC_C2_CONFIGURATION_CREATION = 'UC70';
  public static readonly UC_C2_CONFIGURATION_CONTROL = 'UC71';

  // Use cases du building block MAINTENANCE FORECASTER & OPTIMIZER
  public static readonly UC_MFO_PREFIX = '8';
  public static readonly UC_MFO_FORECAST_MANAGEMENT = 'UC80';
  public static readonly UC_MFO_FORECAST_CLOSING = 'UC81';
  public static readonly UC_MFO_CAPACITY = 'UC82';
  public static readonly UC_MFO_OPTIMIZATION = 'UC83';
  public static readonly UC_MFO_SETTINGS = 'UC84';
  public static readonly UC_MFO_FORECAST = 'UC85';
  public static readonly UC_MFO_NON_ROUTINE_EVENT = 'UC86';

  // Use cases du building block AIRCRAFT MAINTENANCE
  public static readonly UC_AIRM_PREFIX = '9';
  public static readonly UC_AIRM_WP_MANAGEMENT = 'UC90';
  public static readonly UC_AIRM_WP_CLOSING = 'UC91';
  public static readonly UC_AIRM_RECEPTION = 'UC92';
  public static readonly UC_AIRM_WORKSCOPE = 'UC93';
  public static readonly UC_AIRM_EXECUTION = 'UC94';
  public static readonly UC_AIRM_FINAL_CONTROLS = 'UC95';
  public static readonly UC_AIRM_INVENTORY = 'UC96';
  public static readonly UC_AIRM_CONFIGURATION_CONTROL = 'UC97';
  public static readonly UC_AIRM_QUALITY_CHECK = 'UC98';

  // Use cases du building block MATERIAL MANAGEMENT
  public static readonly UC_MM_MASTER_DATA = 'UC100';
  public static readonly UC_MM_MATERIAL = 'UC101';
  public static readonly UC_MM_MOVEMENT = 'UC102';
  public static readonly UC_MM_TOOLS = 'UC103';
  public static readonly UC_MM_TOOLS_CALIBRATION = 'UC104';
  public static readonly UC_MM_STOCK = 'UC105';

  // Use cases du building block HUMAN RESOURCES
  public static readonly UC_HR_MASTER_DATA = 'UC110';
  public static readonly UC_HR_EMPLOYEE = 'UC111';
  public static readonly UC_HR_COCKPIT = 'UC112';

  // Use cases du building block SALES AND ORDERING (EX-PURCHASING)
  public static readonly UC_SP_SALES = 'UC120';
  public static readonly UC_SP_PURCHASE = 'UC121';

  // Use cases du building block DEA DIA
  public static readonly UC_DEA_DIA_CONTROLLER = 'UC54';

  public static readonly UC_MM_RECEIVING = 'UC130';
  public static readonly UC_MM_TECHNICAL_RECEIVING = 'UC131';
  public static readonly UC_MM_SHIPMENT = 'UC132';
  public static readonly UC_MM_LITIGATION = 'UC133';
  public static readonly UC_MM_PROCUREMENT = 'UC134';
  public static readonly UC_MM_REVERSE_LOGISTIC = 'UC135';
  public static readonly UC_MM_DEPLOYMENT = 'UC136';
  public static readonly UC_MM_EQUIPMENT_BOOKING = 'UC137';
  public static readonly UC_MM_PREEMPTION = 'UC138';
  public static readonly UC_MM_SUPPLIER_CHANGE = 'UC139';
}
