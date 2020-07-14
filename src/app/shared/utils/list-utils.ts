export class ListUtils {
  public static isEmpty<T>(list: T[]): boolean {
    return list.length === 0;
  }

  public static isNullOrEmpty<T>(list: T[] | undefined): boolean {
    return !list || ListUtils.isEmpty(list);
  }

  public static orEmpty<T>(list: T[] | undefined): T[] {
    return !!list ? list : [];
  }
}
