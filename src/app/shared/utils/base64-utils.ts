// tslint:disable:no-magic-numbers
export class Base64Utils {
  public static decodeUrl(encodedUrl: string): string {
    return atob((encodedUrl + '==='.slice((encodedUrl.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/'));
  }
}
