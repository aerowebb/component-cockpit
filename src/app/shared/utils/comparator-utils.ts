import { BidoEquipmentDTO } from '../types/api-types/bido-equipment-dto.interface';

export class ComparatorUtils {
  public static compareByEquipmentType(equipment1: BidoEquipmentDTO, equipment2: BidoEquipmentDTO) {
    const func1 = equipment1.equipmentFunction;
    const func2 = equipment2.equipmentFunction;

    // Asset without function are put at the end
    if (func1 == undefined && func2 != undefined) {
      return 1;
    } else if (func1 != undefined && func2 == undefined) {
      return -1;
    } else if ((func1 == undefined && func2 == undefined) || func1 === func2) {
      // If functions are the same or both undefined
      // PN
      const pn1 = equipment1.pnCode;
      const pn2 = equipment2.pnCode;
      // SN
      const sn1 = equipment1.sn;
      const sn2 = equipment2.sn;

      // Asset without PN/SN are put at the end
      if (pn1 == undefined && sn1 == undefined && (pn2 != undefined || sn2 != undefined)) {
        return 1;
      } else if ((pn1 != undefined || sn1 != undefined) && pn2 == undefined && sn2 == undefined) {
        return -1;
      } else {
        // Asset without P/N are put at the end
        if (pn1 == undefined && pn2 != undefined) {
          return 1;
        } else if (pn1 != undefined && pn2 == undefined) {
          return -1;
        } else if ((pn1 == undefined && pn2 == undefined) || pn1 === pn2) {
          // If P/N are the same or both undefined
          // Asset without S/N are put at the end
          if (sn1 == undefined && sn2 != undefined) {
            return 1;
          } else if (sn1 != undefined && sn2 == undefined) {
            return -1;
          } else if ((sn1 == undefined && sn2 == undefined) || sn1 === sn2) {
            // If S/N are the same or both undefined
            // CODE
            const co1 = equipment1.equipmentFunction;
            const co2 = equipment2.equipmentFunction;
            // Compare codes
            // Asset without code are put at the beginning
            if (co1 == undefined && co2 != undefined) {
              return -1;
            } else if (co1 != undefined && co2 == undefined) {
              return 1;
            } else if ((co1 == undefined && co2 == undefined) || co1 === co2) {
              return 0;
            } else {
              return (co1 as string).localeCompare(co2 as string);
            }
          } else {
            return (sn1 as string).localeCompare(sn2 as string);
          }
        } else {
          return (pn1 as string).localeCompare(pn2 as string);
        }
      }
    } else {
      // The longer Function keys are put after the shorter Function keys (typically 10-... after 3-...)
      if ((func1 as string).length < (func2 as string).length) {
        return -1;
      } else if ((func2 as string).length < (func1 as string).length) {
        return 1;
      }

      return (func1 as string).localeCompare(func2 as string);
    }
  }

  public static compareByRemainingEquivalent(
    obj1: { equipment: BidoEquipmentDTO; remainingEquivalent: string | undefined; isNOK: boolean },
    obj2: { equipment: BidoEquipmentDTO; remainingEquivalent: string | undefined; isNOK: boolean }
  ): number {
    const parseRemainingEquivalent = (remainingEquivalent: string | undefined) => {
      return remainingEquivalent ? parseFloat(remainingEquivalent.replace(',', '.').split(' ')[0]) : undefined;
    };

    const remainingEquivalent1 = parseRemainingEquivalent(obj1.remainingEquivalent);
    const remainingEquivalent2 = parseRemainingEquivalent(obj2.remainingEquivalent);

    let result: number;
    if (remainingEquivalent1 !== undefined && remainingEquivalent2 !== undefined) {
      result =
        remainingEquivalent1 < remainingEquivalent2
          ? -1
          : remainingEquivalent1 > remainingEquivalent2
          ? 1
          : ComparatorUtils.compareByEquipmentType(obj1.equipment, obj2.equipment);
    } else if (remainingEquivalent1 !== undefined) {
      result = obj2.isNOK ? 1 : -1;
    } else if (remainingEquivalent2 !== undefined) {
      result = obj1.isNOK ? 1 : -1;
    } else {
      result =
        (obj1.isNOK && obj2.isNOK) || (!obj1.isNOK && !obj2.isNOK)
          ? ComparatorUtils.compareByEquipmentType(obj1.equipment, obj2.equipment)
          : obj1.isNOK && !obj2.isNOK
          ? -1
          : 1;
    }

    return result;
  }

  public static compareByRemaining(
    obj1: { equipment: BidoEquipmentDTO; remaining: string | undefined; isNOK: boolean },
    obj2: { equipment: BidoEquipmentDTO; remaining: string | undefined; isNOK: boolean }
  ): number {
    const parseRemaining = (remaining: string | undefined) => {
      return remaining ? parseFloat(remaining.replace(',', '.').split(' ')[0]) : undefined;
    };

    const remaining1 = parseRemaining(obj1.remaining);
    const remaining2 = parseRemaining(obj2.remaining);

    let result: number;
    if (remaining1 !== undefined && remaining2 !== undefined) {
      result =
        remaining1 < remaining2
          ? -1
          : remaining1 > remaining2
          ? 1
          : ComparatorUtils.compareByEquipmentType(obj1.equipment, obj2.equipment);
    } else if (remaining1 !== undefined) {
      result = obj2.isNOK ? 1 : -1;
    } else if (remaining2 !== undefined) {
      result = obj1.isNOK ? 1 : -1;
    } else {
      result =
        (obj1.isNOK && obj2.isNOK) || (!obj1.isNOK && !obj2.isNOK)
          ? ComparatorUtils.compareByEquipmentType(obj1.equipment, obj2.equipment)
          : obj1.isNOK && !obj2.isNOK
          ? -1
          : 1;
    }

    return result;
  }
}
