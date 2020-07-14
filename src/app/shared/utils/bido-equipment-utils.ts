import { BidoEquipmentDTO } from '../../shared/types/api-types/bido-equipment-dto.interface';
import { BireItemDTOId } from '../../shared/types/api-types/bire-item-dto-id.interface';
import { StringUtils } from '../../shared/utils/string-utils';
import { AWPropertiesConstants } from '../constants/aw-properties-constants';

import { BidoFamilyVariantUtils } from './bido-family-variant-utils';

export class BidoEquipmentUtils {
  public static createAssetName(equipment: BidoEquipmentDTO | undefined): string {
    if (!equipment) {
      return '';
    } else {
      let designation: string;
      switch (equipment.equipmentFunction) {
        case AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY:
          designation = StringUtils.orEmpty(equipment.registration);
          break;

        case AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY:
          designation = StringUtils.orEmpty(equipment.sn);
          break;

        default:
          designation = StringUtils.orEmpty(equipment.pnCode) + '/' + StringUtils.orEmpty(equipment.sn);
          break;
      }

      return designation;
    }
  }

  public static createAircraftRepresentation(equipment: BidoEquipmentDTO | undefined): string {
    let aircraftRepresentation = '';
    if (!equipment) {
      return '';
    } else {
      if (BidoEquipmentUtils.createAssetName(equipment) !== '') {
        aircraftRepresentation =
          'MSN ' + StringUtils.orEmpty(equipment.sn) + ' | ' + BidoEquipmentUtils.createAssetName(equipment);
      }
      if (BidoEquipmentUtils.createAssetName(equipment) === '' && StringUtils.orEmpty(equipment.sn) !== '') {
        aircraftRepresentation = 'MSN ' + StringUtils.orEmpty(equipment.sn);
      }

      return aircraftRepresentation;
    }
  }

  public static createAssetRepresentation(equipment: BidoEquipmentDTO | undefined): string {
    let assetRepresentation = '';
    if (equipment) {
      let designation: string;
      switch (equipment.equipmentFunction) {
        case AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY:
          assetRepresentation =
            StringUtils.orEmpty(equipment.familyVariantCode) +
            ' | MSN ' +
            StringUtils.orEmpty(equipment.sn) +
            ' | ' +
            StringUtils.orEmpty(equipment.registration);
          designation = StringUtils.orEmpty(equipment.registration);
          break;
        case AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY:
          assetRepresentation =
            StringUtils.orEmpty(equipment.familyVariantCode) +
            ' | MSN ' +
            StringUtils.orEmpty(equipment.sn) +
            ' | ' +
            StringUtils.orEmpty(equipment.registration);
          designation = StringUtils.orEmpty(equipment.registration);
          break;
        default:
          assetRepresentation =
            StringUtils.orEmpty(equipment.familyVariantCode) + ' | SN ' + StringUtils.orEmpty(equipment.sn);
          designation = StringUtils.orEmpty(equipment.sn);
          break;
      }
    }

    return assetRepresentation;
  }

  public static getBireItemPK(equipment: BidoEquipmentDTO): BireItemDTOId | undefined {
    if (
      !!equipment.chapter &&
      !StringUtils.isEmpty(equipment.chapter) &&
      !!equipment.marks &&
      !StringUtils.isEmpty(equipment.marks) &&
      !!equipment.section &&
      !StringUtils.isEmpty(equipment.section) &&
      !!equipment.sheet &&
      !StringUtils.isEmpty(equipment.sheet) &&
      !!equipment.subject &&
      !StringUtils.isEmpty(equipment.subject)
    ) {
      const itemId: BireItemDTOId = {
        familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
        chapter: equipment.chapter,
        subject: equipment.subject,
        variantCode: BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
        section: equipment.section,
        sheet: equipment.sheet,
        marks: equipment.marks,
        structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
      };

      return itemId;
    } else {
      return undefined;
    }
  }

  public static toString(asset: BidoEquipmentDTO | undefined, withFamilyVariantCode: boolean = true): string {
    if (!asset) {
      return '';
    }

    const equipmentCode = asset.equipmentCode;
    const equipmentFunction = asset.equipmentFunction;
    const familyVariantCode = withFamilyVariantCode ? `${asset.familyVariantCode} | ` : '';
    const pn = asset.pnCode;
    const registration = asset.registration;
    const sn = asset.sn;

    if (equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
      const formattedMsn = !StringUtils.isNullOrEmpty(sn) ? `MSN ${sn}` : '';
      const formattedRegistration = !StringUtils.isNullOrEmpty(registration) ? ` | ${registration}` : '';

      return `${familyVariantCode}${formattedMsn}${formattedRegistration}`;
    } else if (equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
      const formattedEsn = !StringUtils.isNullOrEmpty(sn) ? `ESN ${sn}` : '';

      return `${familyVariantCode}${formattedEsn}`;
    } else {
      if (!StringUtils.isNullOrEmpty(pn)) {
        if (!StringUtils.isNullOrEmpty(sn)) {
          return `P/N ${pn} | S/N ${sn}`;
        } else {
          return `P/N ${pn}`;
        }
      } else if (!StringUtils.isNullOrEmpty(sn)) {
        return `S/N ${sn}`;
      } else {
        return StringUtils.orEmpty(equipmentCode);
      }
    }
  }
}
