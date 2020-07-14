export interface ReferentialContext {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  // TODO: these 3 objects are Mapping of something that I dont know for the moment...
  itemsById?: Object;
  itemsSonByFatherId?: Object;
  itemsFatherBySonId?: Object;
}
