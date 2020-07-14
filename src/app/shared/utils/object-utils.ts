export class ObjectUtils {
  public static isDefined<T>(obj: T): boolean {
    return obj !== undefined && obj !== null;
  }
}
