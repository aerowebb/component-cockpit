import { BidoFlDTO } from '../types/api-types/bido-fl-dto.interface';

export class BidoFlUtils {
  public static toString(fl: BidoFlDTO | undefined): string {
    return fl ? `${fl.flCode}/${fl.flDescription}` : '';
  }
}
