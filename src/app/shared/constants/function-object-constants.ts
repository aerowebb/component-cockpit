import { BidoPnDTOId } from '../../../../generated_files/id/bido-pn-dto-id.interface';
import { TodoObjectId } from '../types/api-output-types/administration-todo-list/todo-item-output.interface';
import { BidmProjectDTOId } from '../types/api-types/bidm-project-dto-id.interface';

import { ComponentConstants } from './component-constants';
import { GenericPropertyConstants } from './generic-property-constants';

export interface FunctionObjectConfiguration {
  functionObjectKey: string;
  propertyListKey?: string;
  componentNames: string[];
  getPageId?: (id?: TodoObjectId) => unknown;
}

export class FunctionObjectConstants {
  public static readonly BUSINESS_PARTNER_FUNC_OBJ_KEY: string = 'BUSINESS_PARTNER';
  public static readonly PART_NUMBER_FUNC_OBJ_KEY: string = 'PART_NUMBER';
  public static readonly AIRWORTHINESS_DIRECTIVE_FUNC_OBJ_KEY: string = 'AIRWORTHINESS_DIRECTIVE';
  public static readonly SERVICE_BULLETIN_FUNC_OBJ_KEY: string = 'SERVICE_BULLETIN';
  public static readonly WORK_ORDER_FUNC_OBJ_KEY: string = 'WORK_ORDER';
  public static readonly WORK_PACKAGE_FUNC_OBJ_KEY: string = 'WORK_PACKAGE';
  public static readonly PURCHASE_FUNC_OBJ_KEY: string = 'PURCHASE';
  public static readonly FLIGHT_FUNC_OBJ_KEY: string = 'FLIGHT';
  public static readonly MAINTENANCE_OPERATION_FUNC_OBJ_KEY: string = 'MAINTENANCE_OPERATION';
  public static readonly DEFECT_FUNC_OBJ_KEY: string = 'DEFECT';
  public static readonly EVENT_FUNC_OBJ_KEY: string = 'EVENT';
  public static readonly ADDITIONAL_MAINTENANCE_GUIDELINE_FUNC_OBJ_KEY: string = 'ADDITIONAL_MAINTENANCE_GUIDELINE';
  public static readonly PART_UDPATE_GUIDELINE = 'PART_UPDATE_GUIDELINE';
  public static readonly APPLICABLE_CONFIGURATION_FUNC_OBJ_KEY: string = 'APPLICABLE_CONFIGURATION';
  public static readonly MAINTENANCE_PROGRAM_FUNC_OBJ_KEY: string = 'MAINTENANCE_PROGRAM';

  private static readonly FUNC_OBJ_CONFIGURATIONS: FunctionObjectConfiguration[] = [
    {
      functionObjectKey: FunctionObjectConstants.BUSINESS_PARTNER_FUNC_OBJ_KEY,
      propertyListKey: undefined,
      componentNames: [ComponentConstants.ADM_BUSINESS_PARTNER_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.PART_NUMBER_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_PART_NUMBER_FORM, ComponentConstants.LOG_MATERIAL_FORM],
      getPageId: (id?: TodoObjectId) => id && (id as BidoPnDTOId).pnCode
    },
    {
      functionObjectKey: FunctionObjectConstants.WORK_ORDER_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.AIRM_OPERATION_STATUS_MAP,
      componentNames: [ComponentConstants.MAI_WORK_ORDER_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.WORK_PACKAGE_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP,
      componentNames: [ComponentConstants.MAI_WORK_PACKAGE_FORM],
      getPageId: (id?: TodoObjectId) => ({
        wpId: id && (id as BidmProjectDTOId).projectId
      })
    },
    {
      functionObjectKey: FunctionObjectConstants.AIRWORTHINESS_DIRECTIVE_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.SERVICE_BULLETIN_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_SBAD_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.PURCHASE_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.PURCHASE_STATUS_MAP,
      componentNames: []
    },
    {
      functionObjectKey: FunctionObjectConstants.FLIGHT_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FLIGHT_STATUS_MAP,
      componentNames: [ComponentConstants.FLI_FLIGHT_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.MAINTENANCE_OPERATION_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.AIRM_OPERATION_STATUS_MAP,
      componentNames: []
    },
    {
      functionObjectKey: FunctionObjectConstants.DEFECT_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.EVENT_STATUS_MAP,
      componentNames: [ComponentConstants.FLE_DEFECT_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.EVENT_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.EVENT_STATUS_MAP,
      componentNames: [ComponentConstants.FLE_EVENT_CREATE]
    },
    {
      functionObjectKey: FunctionObjectConstants.ADDITIONAL_MAINTENANCE_GUIDELINE_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.PART_UDPATE_GUIDELINE,
      propertyListKey: GenericPropertyConstants.GUIDELINE_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_DEA_DIA_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.APPLICABLE_CONFIGURATION_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_APPLICABLE_CONFIGURATION_FORM]
    },
    {
      functionObjectKey: FunctionObjectConstants.MAINTENANCE_PROGRAM_FUNC_OBJ_KEY,
      propertyListKey: GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP,
      componentNames: [ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM]
    }
  ];

  public static getFuncObjKeyByComponentName(componentName: string): string | undefined {
    const configuration = FunctionObjectConstants.FUNC_OBJ_CONFIGURATIONS.find(
      (conf: FunctionObjectConfiguration) => conf.componentNames.indexOf(componentName) > -1
    );

    return configuration && configuration.functionObjectKey;
  }

  public static getPropertyListKeyByFuncObjKey(functionObjectKey: string | undefined): string | undefined {
    const configuration = FunctionObjectConstants.FUNC_OBJ_CONFIGURATIONS.find(
      (conf: FunctionObjectConfiguration) => conf.functionObjectKey === functionObjectKey
    );

    return configuration && configuration.propertyListKey;
  }

  public static getFunctionObjectConfigurationMapByKey(): { [key: string]: FunctionObjectConfiguration } {
    const configurationMap = {};
    FunctionObjectConstants.FUNC_OBJ_CONFIGURATIONS.forEach(
      (conf) => (configurationMap[conf.functionObjectKey] = { ...conf })
    );

    return configurationMap;
  }
}
