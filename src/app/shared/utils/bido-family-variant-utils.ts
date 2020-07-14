import { StringUtils } from '../../shared/utils/string-utils';

export class BidoFamilyVariantUtils {
  public static buildFamilyVariantCode(
    familyCode: string | undefined,
    variantCode: string | undefined
  ): string | undefined {
    if (StringUtils.isNullOrEmpty(familyCode) || StringUtils.isNullOrEmpty(variantCode)) {
      return undefined;
    } else {
      return `${familyCode}-${variantCode}`;
    }
  }

  public static getFamilyCodeFromFamilyVariantCode(familyVariantCode: string | undefined): string | undefined {
    return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
      ? familyVariantCode.substring(0, familyVariantCode.indexOf('-'))
      : undefined;
  }

  public static getVariantCodeFromFamilyVariantCode(familyVariantCode: string | undefined): string | undefined {
    return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
      ? familyVariantCode.substring(familyVariantCode.indexOf('-') + 1)
      : undefined;
  }
}
