export class BireFamilyVariantUtil {
  private static readonly FAMILY_VARIANT_SEPARATOR = '-';

  public static buildFamilyVariantCodeWithStructureType(
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): string | undefined {
    if (!!familyCode && !!structureType && !!variantCode) {
      return (
        familyCode +
        BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR +
        structureType +
        BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR +
        variantCode
      );
    } else {
      return undefined;
    }
  }

  public static buildFamilyVariantCodeWithoutStructureType(
    familyCode: string | undefined,
    variantCode: string | undefined
  ): string | undefined {
    if (!!familyCode && !!variantCode) {
      return familyCode + BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR + variantCode;
    } else {
      return undefined;
    }
  }
}
