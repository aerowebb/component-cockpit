import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { BidoAttributeConstants } from '../../constants/bido-attribute-constants';
import { LangConstants } from '../../constants/lang-constants';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { AttributeDTO } from '../../types/api-types/attribute-dto.interface';
import { AttributeValueDTO } from '../../types/api-types/attribute-value-dto.interface';
import { BidoAttributeDTO } from '../../types/api-types/bido-attribute-dto.interface';
import { BidoCustomerAttributeDTO } from '../../types/api-types/bido-customer-attribute-dto.interface';
import { BidoEquipmentAttributeDTOId } from '../../types/api-types/bido-equipment-attribute-dto-id.interface';
import { BidoEquipmentAttributeDTO } from '../../types/api-types/bido-equipment-attribute-dto.interface';
import { BidoNotificationAttributeDTOId } from '../../types/api-types/bido-notification-attribute-dto-id.interface';
import { BidoNotificationAttributeDTO } from '../../types/api-types/bido-notification-attribute-dto.interface';
import { BireAttributeDTO } from '../../types/api-types/bire-attribute-dto.interface';
import { BireEvolutionAttributeDTOId } from '../../types/api-types/bire-evolution-attribute-dto-id.interface';
import { BireEvolutionAttributeDTO } from '../../types/api-types/bire-evolution-attribute-dto.interface';
import { BireItemAttributeDTO } from '../../types/api-types/bire-item-attribute-dto.interface';
import { BireModificationAttributeDTOId } from '../../types/api-types/bire-modification-attribute-dto-id.interface';
import { BireModificationAttributeDTO } from '../../types/api-types/bire-modification-attribute-dto.interface';
import { BireModificationDTO } from '../../types/api-types/bire-modification-dto.interface';
import { BireOperationAttributeDTO } from '../../types/api-types/bire-operation-attribute-dto.interface';
import { BirePlanAttributeDTO } from '../../types/api-types/bire-plan-attribute-dto.interface';
import { BirePnAttributeDTO } from '../../types/api-types/bire-pn-attribute-dto.interface';
import { BireSbAttributeDTO } from '../../types/api-types/bire-sb-attribute-dto.interface';
import { BireTaskAttributeDTOId } from '../../types/api-types/bire-task-attribute-dto-id.interface';
import { BireTaskAttributeDTO } from '../../types/api-types/bire-task-attribute-dto.interface';
import { BireVariantAttributeDTO } from '../../types/api-types/bire-variant-attribute-dto.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { DynamicAttributeType } from './enums/dynamic-attribute-type.enum';
import { DynamicAttribute } from './types/dynamic-attribute.interface';
import { DynamicAttributes } from './types/dynamic-attributes.interface';

@Injectable()
export class DynamicAttributesService extends AbstractAwHttpService {
  public static readonly DATE_FORMAT: string = 'YYYY-MM-DD';

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly translateService: TranslateService
  ) {
    super(http, appConfigService);
  }

  public attributeValueToString(attribute: DynamicAttribute): string {
    if (attribute.value && attribute.type === DynamicAttributeType.Date) {
      return moment(attribute.value as Date).format(DynamicAttributesService.DATE_FORMAT);
    }

    return !!attribute.value ? attribute.value.toString() : '';
  }

  public from(attributes: AttributeDTO[]): DynamicAttributes[] {
    const dynamicAttributesMap = new Map<string, DynamicAttributes>();
    let rootDynamicAttributes: DynamicAttributes[] = [];

    attributes.forEach((attribute) => {
      const path = this.getAttributeLabel(attribute).split('.');

      const childAttributeType = this.getAttributeType(attribute);
      const child: DynamicAttribute = {
        id: attribute.attributeId,
        label: path[path.length - 1],
        type: childAttributeType,
        value: this.computeDefaultAttributeValue(childAttributeType),
        listOptions: this.computeListOptions(attribute)
      };

      const createDynamicAttributes = (label: string, key?: string): DynamicAttributes => {
        const dynamicAttributes: DynamicAttributes = {
          label,
          attributes: [],
          children: []
        };
        dynamicAttributesMap.set(!!key ? key : label, dynamicAttributes);

        return dynamicAttributes;
      };

      const computeNodeKey = (index: number): string => {
        return path.slice(0, index).join('.');
      };

      if (path.length === 1) {
        if (!dynamicAttributesMap.has('')) {
          const emptyRoot = createDynamicAttributes('');
          rootDynamicAttributes = [...rootDynamicAttributes, emptyRoot];
        }
        const emptyKeyValue = dynamicAttributesMap.get('');
        if (!!emptyKeyValue) {
          emptyKeyValue.attributes.push(child);
        }
      } else {
        if (!dynamicAttributesMap.has(path[0])) {
          const root = createDynamicAttributes(path[0]);
          rootDynamicAttributes = [...rootDynamicAttributes, root];
        }

        for (let i = 1; i < path.length - 1; i++) {
          const key = computeNodeKey(i + 1);
          if (!dynamicAttributesMap.has(key)) {
            const node = createDynamicAttributes(path[i], key);
            const nodeKeyValue = dynamicAttributesMap.get(computeNodeKey(i));
            if (!!nodeKeyValue) {
              nodeKeyValue.children.push(node);
            }
          }
        }

        const lastNodeKeyValue = dynamicAttributesMap.get(computeNodeKey(path.length - 1));
        if (!!lastNodeKeyValue) {
          lastNodeKeyValue.attributes.push(child);
        }
      }
    });

    return rootDynamicAttributes;
  }

  public getLeafs(attributes: DynamicAttributes[]): DynamicAttribute[] {
    let queue: DynamicAttributes[] = ([] as DynamicAttributes[]).concat(attributes);
    let result: DynamicAttribute[] = [];

    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift();
      if (!!first) {
        result = [...result, ...first.attributes];
        queue = [...queue, ...first.children];
      }
    }

    return result;
  }

  public setValues(nodes: DynamicAttributes[], attributes: { attributeId?: string; attributeValue?: string }[]) {
    const leafs = this.getLeafs(nodes);

    attributes.forEach((attribute) => {
      const matchingLeaf = leafs.find((leaf) => leaf.id === attribute.attributeId);
      if (matchingLeaf) {
        matchingLeaf.value = this.computeAttributeValue(matchingLeaf.type, attribute.attributeValue);
      }
    });
  }

  public sort(attributes: DynamicAttributes[]): DynamicAttributes[] {
    return attributes.sort((attr1, attr2) => {
      if (StringUtils.isNullOrEmpty(attr1.label)) {
        return 1;
      }
      if (StringUtils.isNullOrEmpty(attr2.label)) {
        return 1;
      }

      return attr1.label.localeCompare(attr2.label);
    });
  }

  public toBidoCustomerAttribute(customerCode: string, attributes: DynamicAttributes[]): BidoCustomerAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bidoCustomerAttribute: BidoCustomerAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        customerCode
      };

      return bidoCustomerAttribute;
    });
  }

  public toBidoEquipmentAttribute(equipmentCode: string, attributes: DynamicAttributes[]): BidoEquipmentAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bidoEquipmentAttribute: BidoEquipmentAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        equipmentCode
      };

      return bidoEquipmentAttribute;
    });
  }

  // public toBireOperationAttribute(
  //   opeCode: string,
  //   opeVersion: string,
  //   rangeCode: string,
  //   attributes: DynamicAttributes[],
  //   statusState: string,
  //   statusUser: string,
  //   statusDate: Date
  // ): BireOperationAttributeDTO[] {
  //   return this.getLeafs(attributes).map((attribute) => {
  //     const bireOperationAttributeDTO: BireOperationAttributeDTO = {
  //       rangeCode,
  //       opeCode,
  //       opeVersion,
  //       attributeId: attribute.id,
  //       attributeValue: this.attributeValueToString(attribute),
  //       statusState,
  //       statusUser,
  //       statusDate
  //     };

  //     return bireOperationAttributeDTO;
  //   });
  // }

  public toBireEvolutionAttribute(
    evolutionNumber: string,
    evolutionRevisionNumber: string,
    attributes: DynamicAttributes[]
  ): BireEvolutionAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEvolutionAttribute: BireEvolutionAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        evolutionRevisionNumber,
        evolutionNumber
      };

      return bireEvolutionAttribute;
    });
  }

  public toBireVariantAttribute(
    familyCode: string,
    variantCode: string,
    structureType: string,
    attributes: DynamicAttributes[]
  ): BireVariantAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireVariantAttributeDTO: BireVariantAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        familyCode,
        variantCode,
        structureType
      };

      return bireVariantAttributeDTO;
    });
  }

  public toBireItemAttribute(
    familyCode: string,
    variantCode: string,
    structureType: string,
    chapter: string,
    marks: string,
    section: string,
    sheet: string,
    subject: string,
    attributes: DynamicAttributes[]
  ): BireItemAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireItemAttributeDTO: BireItemAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        familyCode,
        variantCode,
        structureType,
        chapter,
        marks,
        section,
        sheet,
        subject
      };

      return bireItemAttributeDTO;
    });
  }

  public toBireEventAttributeId(
    notificationCode: string,
    attributes: DynamicAttributes[]
  ): BidoNotificationAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEvolutionAttributeId: BidoNotificationAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        notificationCode
      };

      return bireEvolutionAttributeId;
    });
  }

  public toBireOperationAttributeId(
    opeCode: string,
    rangeCode: string,
    opeVersion: string,
    attributes: DynamicAttributes[]
  ): BidoNotificationAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEvolutionAttributeId: BireOperationAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        opeCode,
        rangeCode,
        opeVersion
      };

      return bireEvolutionAttributeId;
    });
  }

  public toBireEvolutionAttributeId(
    evolutionNumber: string,
    evolutionRevisionNumber: string,
    attributes: DynamicAttributes[]
  ): BireEvolutionAttributeDTOId[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEvolutionAttributeId: BireEvolutionAttributeDTOId = {
        attributeId: attribute.id,
        evolutionRevisionNumber,
        evolutionNumber
      };

      return bireEvolutionAttributeId;
    });
  }

  public toBireEquipmentAttributeId(
    equipmentCode: string,
    attributes: DynamicAttributes[]
  ): BidoEquipmentAttributeDTOId[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEquipmentAttributeId: BidoEquipmentAttributeDTOId = {
        attributeId: attribute.id,
        equipmentCode
      };

      return bireEquipmentAttributeId;
    });
  }

  public toBireModificationAttributeId(
    modificationNumber: string,
    modificationRevisionNumber: string,
    modificationType: string,
    familyCode: string,
    structureType: string,
    attributes: DynamicAttributes[]
  ): BireModificationAttributeDTOId[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireEvolutionAttributeId: BireModificationAttributeDTOId = {
        attributeId: attribute.id,
        modificationNumber,
        modificationRevisionNumber,
        modificationType,
        familyCode,
        structureType
      };

      return bireEvolutionAttributeId;
    });
  }

  public toBireSbAttribute(
    sbNumber: string,
    sbRevisionNumber: string,
    attributes: DynamicAttributes[]
  ): BireSbAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireSbAttribute: BireSbAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        sbNumber,
        sbRevisionNumber
      };

      return bireSbAttribute;
    });
  }

  public toBireTaskAttribute(
    taskCode: string,
    taskVersion: string,
    attributes: DynamicAttributes[]
  ): BireTaskAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireTaskAttribute: BireTaskAttributeDTO = {
        taskCode,
        taskVersion,
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute)
      };

      return bireTaskAttribute;
    });
  }

  public toBireTaskAttributeId(
    taskCode: string,
    taskVersion: string,
    attributes: DynamicAttributes[]
  ): BireTaskAttributeDTOId[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireTaskAttributeId: BireTaskAttributeDTOId = {
        attributeId: attribute.id,
        taskCode,
        taskVersion
      };

      return bireTaskAttributeId;
    });
  }

  public toBireNotificationAttributeId(
    notificationCode: string,
    attributes: DynamicAttributes[]
  ): BidoNotificationAttributeDTOId[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bidoNotificationAttributeDTOId: BidoNotificationAttributeDTOId = {
        attributeId: attribute.id,
        notificationCode
      };

      return bidoNotificationAttributeDTOId;
    });
  }

  public toBirePnAttribute(pnCode: string, attributes: DynamicAttributes[]): BirePnAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const birePnAttribute: BirePnAttributeDTO = {
        pnCode,
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute)
      };

      return birePnAttribute;
    });
  }

  public toBireModificationAttribute(
    bireModificationDTO: BireModificationDTO,
    attributes: DynamicAttributes[]
  ): BireModificationAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const bireModificationAttributeDTO: BireModificationAttributeDTO = {
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute),
        modificationType: bireModificationDTO.modificationType,
        modificationNumber: bireModificationDTO.modificationNumber,
        modificationRevisionNumber: bireModificationDTO.modificationRevisionNumber,
        familyCode: bireModificationDTO.familyCode,
        structureType: bireModificationDTO.structureType
      };

      return bireModificationAttributeDTO;
    });
  }

  public toBirePlanAttribute(planCode: string, attributes: DynamicAttributes[]): BirePlanAttributeDTO[] {
    return this.getLeafs(attributes).map((attribute) => {
      const birePlanAttribute: BirePlanAttributeDTO = {
        planCode,
        attributeId: attribute.id,
        attributeValue: this.attributeValueToString(attribute)
      };

      return birePlanAttribute;
    });
  }

  private computeAttributeValue(
    type: DynamicAttributeType,
    value: string | undefined
  ): boolean | Date | string | undefined {
    if (!!value) {
      if (type === DynamicAttributeType.Boolean) {
        return value === 'true';
      } else if (type === DynamicAttributeType.Date) {
        return new Date(value);
      } else {
        return value;
      }
    } else {
      return undefined;
    }
  }

  private computeDefaultAttributeValue(type: DynamicAttributeType): boolean | string | undefined {
    if (type === DynamicAttributeType.Boolean) {
      return false;
    } else if (type === DynamicAttributeType.Text) {
      return '';
    } else {
      return undefined;
    }
  }

  private computeListOptions(attribute: AttributeDTO): SelectItem[] {
    let list: AttributeValueDTO[] = [];

    if (this.isBidoAttribute(attribute)) {
      const bidoAttribute = attribute as BidoAttributeDTO;
      if (!!bidoAttribute.bidoAttributeValueDatas) {
        list = bidoAttribute.bidoAttributeValueDatas;
      }
    } else if (this.isBireAttribute(attribute)) {
      const bireAttribute = attribute as BireAttributeDTO;
      if (!!bireAttribute.bireAttributeValueDatas) {
        list = bireAttribute.bireAttributeValueDatas;
      }
    }

    return list.map((elt) => {
      const label = this.getAttributeValueLabel(elt);

      return {
        label,
        value: label
      };
    });
  }

  private getAttributeLabel(attribute: AttributeDTO): string {
    switch (this.translateService.currentLang) {
      case LangConstants.ENGLISH_CODE:
        return !!attribute.attributeNameEn ? attribute.attributeNameEn : '';

      case LangConstants.FRENCH_CODE:
        return !!attribute.attributeNameFr ? attribute.attributeNameFr : '';

      default:
        return '';
    }
  }

  private getAttributeType(bidoAttribute: BidoAttributeDTO): DynamicAttributeType {
    switch (bidoAttribute.attributeType) {
      case BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN:
        return DynamicAttributeType.Boolean;

      case BidoAttributeConstants.ATTRIBUTE_TYPE_DATE:
        return DynamicAttributeType.Date;

      case BidoAttributeConstants.ATTRIBUTE_TYPE_LIST:
        return DynamicAttributeType.List;

      case BidoAttributeConstants.ATTRIBUTE_TYPE_TEXT:
        return DynamicAttributeType.Text;

      default:
        return DynamicAttributeType.Text;
    }
  }

  private getAttributeValueLabel(attribute: AttributeValueDTO): string {
    switch (this.translateService.currentLang) {
      case LangConstants.ENGLISH_CODE:
        return attribute.textEn;

      case LangConstants.FRENCH_CODE:
        return attribute.textFr;

      default:
        return '';
    }
  }

  private isBidoAttribute(attribute: AttributeDTO): attribute is BidoAttributeDTO {
    const bidoAttributeValueDatas = (attribute as BidoAttributeDTO).bidoAttributeValueDatas;

    return bidoAttributeValueDatas !== undefined && bidoAttributeValueDatas !== null;
  }

  private isBireAttribute(attribute: AttributeDTO): attribute is BireAttributeDTO {
    const bireAttributeValueDatas = (attribute as BireAttributeDTO).bireAttributeValueDatas;

    return bireAttributeValueDatas !== undefined && bireAttributeValueDatas !== null;
  }
}
