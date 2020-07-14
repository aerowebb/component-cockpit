import { LangConstants } from './lang-constants';

export class AppConstants {
  public static readonly AVAILABLE_LANGS: string[] = [LangConstants.ENGLISH_CODE, LangConstants.FRENCH_CODE];

  public static readonly BASE_URL: string = '/aerowebb/remoting';

  public static readonly DEFAULT_LANG: string = LangConstants.ENGLISH_CODE;

  public static readonly HTTP_REQUESTS_DEBOUNCE_TIME: number = 500;

  public static readonly MESSAGE_LIFE_DEFAULT: number = 3000;

  public static readonly MESSAGE_LIFE_ERROR: number = 6000;

  public static readonly NG_SERVICE_URL: string = '/aerowebbng';

  public static readonly SERVICE_URL: string = '/aerowebb';

  public static readonly DASSAULT_SERVICE_URL: string = '/aerowebb/gui/dassault';

  public static readonly MHIAEL_SERVICE_URL: string = '/aerowebb/gui/mhiael';

  public static readonly SAE_SERVICE_URL: string = '/aerowebb/gui/sae';

  /**************************************************************************
   * Date
   *************************************************************************/

  public static readonly MOMENTJS_DATE: string = 'YYYY/MM/DD';

  public static readonly JS_DATE: string = 'yyyy/MM/dd';

  public static readonly MOMENTJS_DATE_TIME: string = 'YYYY/MM/DD HH:mm';

  public static readonly MOMENTJS_DATE_TIME_WITH_SECOND: string = 'YYYY/MM/DD HH:mm:ss';

  public static readonly MOMENTJS_TIME_WITH_SECOND: string = 'HH:mm:ss';

  public static readonly PRIMENG_DATE: string = 'yy/mm/dd';

  /**************************************************************************
   * Style
   *************************************************************************/

  public static readonly BORDER_STYLE: string = 'solid';
  public static readonly BORDER_WIDTH: string = '1px';
  public static readonly BORDER_WIDTH_MAIN_BAR: string = '2px';

  public static readonly COLOR_ACCENT: string = '#006ea9';
  public static readonly COLOR_GREEN: string = '#4caf50';
  public static readonly COLOR_ORANGE: string = '#ffc107';
  public static readonly COLOR_RED: string = '#f6685e';
  public static readonly COLOR_GREY: string = '#c8d4d6'; // TODO: remove it
  public static readonly COLOR_YELLOW: string = '#dddf00'; // TODO: remove it
  public static readonly COLOR_BACKGROUND_PRIMARY: string = '#fff';
  public static readonly COLOR_BACKGROUND_SECONDARY: string = '#f0f0f0';
  public static readonly COLOR_TEXT_PRIMARY: string = '#000';
  public static readonly COLOR_TEXT_SECONDARY: string = '#595959';
  public static readonly COLOR_BLUE_LIGHT: string = '#B8D0E8';
  public static readonly COLOR_BLUE_DARK: string = '#006ea9';
  public static readonly COLOR_MAIN_BAR: string = '#e3e3e3';

  public static readonly TEXT_FONT_FAMILY: string = `"Roboto", sans-serif`;
  public static readonly TEXT_FONT_SIZE: string = '14'; // px

  public static readonly MARGIN_VALUE: number = 8;
  public static readonly PAGE_HEADER_HEIGHT: number = 96; // TODO: remove it
  public static readonly PAGE_HEADER_HEIGHT_MINIMIZED: number = 56; // TODO: remove it
  public static readonly PAGE_MAX_WIDTH: number = 1280;
  public static readonly TOP_BAR_HEIGHT: number = 56;

  /**************************************************************************
   * SEARCH CRITERIA ID
   *************************************************************************/

  public static readonly SERVICE_BULLETIN_SEARCH_CRITERIA_ID: string = '5';
  public static readonly AIRWORTHINESS_SEARCH_CRITERIA_ID: string = '6';
  public static readonly FLEET_SEARCH_CRITERIA_ID: string = '7';
  public static readonly STOCK_STATUS_SEARCH_CRITERIA_ID: string = '8';
  public static readonly STOCK_CONSULT_SEARCH_CRITERIA_ID: string = '9';
  public static readonly STOCK_ALERT_SEARCH_CRITERIA_ID: string = '10';
  public static readonly FLIGHT_OPERATION_SEARCH_SEARCH_CRITERIA_ID: string = '20';
  // DO NOT USE ID 11, BECEAUSE IT IS ALREADY USED BY FAVORITES
  public static readonly EQUIPMENT_SEARCH_CRITERIA_ID: string = '12';
  public static readonly AIRCRAFT_SEARCH_CRITERIA_ID: string = '13';
  public static readonly ENGINE_SEARCH_CRITERIA_ID: string = '14';
  public static readonly TOOL_SEARCH_CRITERIA_ID: string = '15';
  public static readonly BUSINESS_PARTNER_SEARCH_CRITERIA_ID: string = '16';
  public static readonly SITE_SEARCH_CRITERIA_ID: string = '17';
  public static readonly CONTACT_SEARCH_CRITERIA_ID: string = '18';
  public static readonly ASSETATDATE_SEARCH_CRITERIA_ID: string = '19';
  public static readonly ORDER_DOCUMENT_SEARCH_CRITERIA_ID: string = '20';
  public static readonly EVENT_SEARCH_CRITERIA_ID: string = '21';
  public static readonly SALES_DOCUMENT_SEARCH_CRITERIA_ID = '22';
  public static readonly ASSETREVIEW_SEARCH_CRITERIA_ID = '23';
  public static readonly GOODS_MOVEMENT_SEARCH_CRITERIA_ID = '24';
  public static readonly TOOLS_MAINTENANCE_SEARCH_CRITERIA_ID = '25';
  public static readonly MAINTENANCE_COMPONENT_COCKPIT_SEARCH_CRITERIA_ID = '26';
  public static readonly AIRWORTHINESS_STATUS_SEARCH_CRITERIA_ID: string = '27';
  public static readonly ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH_CRITERIA_ID: string = '28';
  public static readonly PURCHASE_CONTRACT_SEARCH_CRITERIA_ID: string = '50';
  public static readonly STOCK_VIEW_SEARCH_CRITERIA_ID: string = '51';
  public static readonly MAINTENANCE_FORECAST_SEARCH_CRITERIA_ID: string = '52';
  public static readonly EMPLOYEE_PLANNING_SEARCH_CRITERIA_ID: string = '53';

  /**************************************************************************
   * COMPONENT SHARED CONFIGURATION
   *************************************************************************/
  public static readonly TABLE_PAGINATION_DEFAULT_ROWS: number = 15;
}
