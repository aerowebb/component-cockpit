import { BidoEquipmentDTO } from '../../shared/types/api-types/bido-equipment-dto.interface';
import { StringUtils } from '../../shared/utils/string-utils';
import { BireItemDTOId } from '../types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../types/api-types/bire-item-dto.interface';

export class BireItemUtils {
  public static createItemKey(data: BidoEquipmentDTO | BireItemDTO | BireItemDTOId | undefined): string {
    if (
      data &&
      !StringUtils.isNullOrEmpty(data.chapter) &&
      !StringUtils.isNullOrEmpty(data.section) &&
      !StringUtils.isNullOrEmpty(data.subject) &&
      !StringUtils.isNullOrEmpty(data.sheet) &&
      !StringUtils.isNullOrEmpty(data.marks)
    ) {
      return `${data.chapter}-${data.section}-${data.subject}-${data.sheet}-${data.marks}`;
    } else {
      return '';
    }
  }
}
