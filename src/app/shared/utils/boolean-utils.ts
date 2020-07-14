export class BooleanUtils {
  public static isTrue(str: string): boolean {
    return !!str && (str.toLowerCase() === 'true' || str.toLowerCase() === '1' || str.toLowerCase() === 'x');
  }
}
