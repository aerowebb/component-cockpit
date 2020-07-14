import { StringUtils } from './string-utils';

export class ServerUtils {
  private static readonly pathSeparator = '/';

  public static addLeadingSeparator(str: string): string {
    return StringUtils.addLeadingCharacters(str, ServerUtils.pathSeparator);
  }

  public static addTrailingSeparator(str: string): string {
    return StringUtils.addTrailingCharacters(str, ServerUtils.pathSeparator);
  }

  public static join(...paths: string[]): string {
    return paths
      .map((path) => ServerUtils.removeLeadingSeparator(ServerUtils.removeTrailingSeparator(path)))
      .join(ServerUtils.pathSeparator);
  }

  public static removeLeadingSeparator(str: string): string {
    return StringUtils.removeLeadingCharacters(str, ServerUtils.pathSeparator);
  }

  public static removeTrailingSeparator(str: string): string {
    return StringUtils.removeTrailingCharacters(str, ServerUtils.pathSeparator);
  }
}
