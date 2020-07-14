export class BidoMeasureConsants {
  public static readonly SOURCE_HUMS = 'HUMS';
  public static readonly SOURCE_EDMS = 'EDMS';

  // Does measure come from HUMS
  public static isHumsSource(source: string | undefined) {
    return !!source && source.startsWith(BidoMeasureConsants.SOURCE_HUMS);
  }

  public static isEdmsSource(source: string | undefined) {
    return !!source && source.startsWith(BidoMeasureConsants.SOURCE_EDMS);
  }

  public static isFromExternalSources(source: string | undefined): boolean {
    return BidoMeasureConsants.isEdmsSource(source) || BidoMeasureConsants.isHumsSource(source);
  }
}
