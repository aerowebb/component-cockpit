import { RegExpUtils } from './regexp.utils';

export class UrlUtils {
  public static validateUrl(url: string): boolean {
    const regex = new RegExp(RegExpUtils.URL);

    return regex.test(url);
  }

  public static openUrl(url?: string): void {
    if (!!url && UrlUtils.validateUrl(url)) {
      window.open(url, '_blank');
    }
  }
}
