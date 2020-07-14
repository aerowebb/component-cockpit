import { StringUtils } from './string-utils';

export class ImageUtils {
  private static readonly JPG_BASE64_ID = 'jpg';
  private static readonly PNG_BASE64_ID = 'png';

  private static readonly JPG_EXTENSION_LIST = ['jpeg', 'jpg'];
  private static readonly PNG_EXTENSION_LIST = ['png'];

  public static getBase64Prefix(extension: string | undefined): string {
    let formattedExtension = '';
    if (this.isJpg(extension)) {
      formattedExtension = ImageUtils.JPG_BASE64_ID;
    } else if (this.isPng(extension)) {
      formattedExtension = ImageUtils.PNG_BASE64_ID;
    }

    return StringUtils.isEmpty(formattedExtension) ? '' : `data:image/${formattedExtension};base64,`;
  }

  public static isJpg(extension: string | undefined): boolean {
    return this.isFormatMatching(extension, ImageUtils.JPG_EXTENSION_LIST);
  }

  public static isPng(extension: string | undefined): boolean {
    return this.isFormatMatching(extension, ImageUtils.PNG_EXTENSION_LIST);
  }

  private static isFormatMatching(extension: string | undefined, validExtensionList: string[]): boolean {
    if (StringUtils.isNullOrEmpty(extension)) {
      return false;
    } else {
      const extensionToCheck = (extension as string).toLowerCase();

      return validExtensionList.some((elt) => elt === extensionToCheck);
    }
  }
}
