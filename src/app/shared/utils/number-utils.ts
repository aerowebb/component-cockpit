import { ObjectUtils } from './object-utils';

export class NumberUtils {
  private static readonly PLACES_NB: number = 2;

  public static fromString(str: string): number {
    return Number(str);
  }

  public static roundNumber(n: number, places?: number): number {
    const _places = ObjectUtils.isDefined(places) ? (places as number) : NumberUtils.PLACES_NB;

    return Math.round(n * Math.pow(10, _places)) / Math.pow(10, _places); // tslint:disable-line:no-magic-numbers
  }

  public static toString(n: number | undefined): string {
    return n !== undefined && n !== null ? n.toString() : '';
  }
}
