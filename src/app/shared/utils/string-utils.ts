export class StringUtils {
  public static addLeadingCharacters(str: string, characters: string): string {
    return str.startsWith(characters) ? str : characters + str;
  }

  public static addTrailingCharacters(str: string, characters: string): string {
    return str.endsWith(characters) ? str : str + characters;
  }

  public static isEmpty(str: string): boolean {
    return str.trim().length === 0;
  }

  public static isNullOrEmpty(str: string | undefined): boolean {
    return !str || StringUtils.isEmpty(str);
  }

  public static orEmpty(str: string | undefined): string {
    return !!str ? str : '';
  }

  public static removeLeadingCharacters(str: string, characters: string): string {
    return str.startsWith(characters) ? str.slice(0, characters.length) : str;
  }

  public static removeTrailingCharacters(str: string, characters: string): string {
    return str.endsWith(characters) ? str.slice(0, -characters.length) : str;
  }

  public static firstLetterToUpper(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }
}
