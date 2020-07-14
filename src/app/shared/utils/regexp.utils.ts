export class RegExpUtils {
  public static readonly INTEGER = /^[+-]?\d+$/;
  public static readonly NUMBER = /^[+-]?\d+\.?\d*$/;
  public static readonly POSITIVE_INTEGER = /^\d+$/;
  public static readonly POSITIVE_NUMBER = /^\d+\.?\d*$/;

  public static readonly MONEY = /^[+-]?\d+\.?\d*$/;
  public static readonly MONEY_2_DIGIT = /^(\d+(?:[\.\,]\d{2})?)$/;
  // tslint:disable-next-line:max-line-length
  public static readonly URL = /^http(s{0,1}):\/\/\w+([a-zA-Z0-9_\/\-\.]+\.([A-Za-z\/]{2,5})|(6553[0-5]|655[0-2]|65[0-4]{0,2}|6[0-4]|5|[0-9]{0,3}))[a-zA-Z0-9_\/\&\?\=\-\.\~\%]*/;
}
