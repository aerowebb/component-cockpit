import { BidtEmployeeDTO } from '../types/api-types/bidt-employee-dto.interface';

import { ObjectUtils } from './object-utils';
import { StringUtils } from './string-utils';

export class BidtEmployeeUtils {
  public static format(employee: BidtEmployeeDTO): string {
    let label: string;
    if (
      !StringUtils.isNullOrEmpty(employee.employeeLastName) &&
      !StringUtils.isNullOrEmpty(employee.employeeFirstName)
    ) {
      label = `${employee.employeeLastName} ${employee.employeeFirstName}`;
    } else if (!StringUtils.isNullOrEmpty(employee.employeeLastName)) {
      label = employee.employeeLastName as string;
    } else if (!StringUtils.isNullOrEmpty(employee.employeeFirstName)) {
      label = employee.employeeFirstName as string;
    } else if (!StringUtils.isNullOrEmpty(employee.employeeNumber)) {
      label = employee.employeeNumber as string;
    } else {
      label = ObjectUtils.isDefined(employee.id) ? (employee.id as number).toString() : '';
    }

    return label;
  }
}
