import { AWPropertiesConstants } from '../constants/aw-properties-constants';
import { BireSbDTO } from '../types/api-types/bire-sb-dto.interface';

export class BireSbUtils {
  public static isAD(bireSbDto: BireSbDTO): boolean {
    return (
      !!bireSbDto &&
      (bireSbDto.sbType === AWPropertiesConstants.SB_TYPE_AD_KEY ||
        bireSbDto.sbType === AWPropertiesConstants.SB_TYPE_SAIB_KEY ||
        bireSbDto.sbType === AWPropertiesConstants.SB_TYPE_SIB_KEY)
    );
  }
}
