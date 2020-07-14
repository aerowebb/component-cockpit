import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BidmProjectDTO } from '../types/api-types/bidm-project-dto.interface';
import { LabelValue } from '../types/label-value.interface';
import { StringUtils } from '../utils/string-utils';

import { DateService } from './date.service';

@Injectable()
export class BidmProjectService {
  public constructor(private readonly dateService: DateService, private readonly translateService: TranslateService) {}

  public getRepresentationAsHtml(
    workPackage: BidmProjectDTO,
    mroCenterList: LabelValue<string>[] | undefined,
    statusList: LabelValue<string>[] | undefined,
    typeList: LabelValue<string>[] | undefined,
    userList: LabelValue<string>[] | undefined
  ): string {
    const selectedMroCenter = mroCenterList
      ? mroCenterList.find((elt) => elt.value === workPackage.bireRepairCenterCode)
      : undefined;
    const selectedStatus = statusList ? statusList.find((elt) => elt.value === workPackage.statusState) : undefined;
    const selectedType = typeList ? typeList.find((elt) => elt.value === workPackage.projectType) : undefined;
    const selectedUser = userList ? userList.find((elt) => elt.value === workPackage.receivingAssignedTo) : undefined;

    const assignedTo = selectedUser ? selectedUser.label : '';
    const dueDate = this.dateService.dateToString(workPackage.projectDueDate);
    const mroCenter = selectedMroCenter ? selectedMroCenter.label : '';
    const name = StringUtils.orEmpty(workPackage.projectName);
    const startDate = this.dateService.dateToString(workPackage.projectStartDate);
    const status = selectedStatus ? selectedStatus.label : '';
    const type = selectedType ? selectedType.label : '';
    const wpNumber = workPackage.projectNumber;

    const labelStyle = 'style="display: inline-block; width: 120px"';
    const valueStyle = 'style="font-weight: 600"';

    const assignedToLabel = this.translateService.instant('global.wpAssignedTo');
    const dueDateLabel = this.translateService.instant('global.wpDueDate');
    const mroCenterLabel = this.translateService.instant('global.wpMroCenter');
    const nameLabel = this.translateService.instant('global.wpName');
    const numberLabel = this.translateService.instant('global.wpNumber');
    const startDateLabel = this.translateService.instant('global.wpStartDate');
    const statusLabel = this.translateService.instant('global.wpstatus');
    const typeLabel = this.translateService.instant('global.wpType');

    const wpNumberHtml =
      '<div>' + `<span ${labelStyle}>${numberLabel}</span><span ${valueStyle}>${wpNumber}</span>` + '</div>';
    const statusHtml =
      '<div>' + `<span ${labelStyle}>${statusLabel}</span><span ${valueStyle}>${status}</span>` + '</div>';
    const startDateHtml =
      '<div>' + `<span ${labelStyle}>${startDateLabel}</span><span ${valueStyle}>${startDate}</span>` + '</div>';
    const dueDateHtml =
      '<div>' + `<span ${labelStyle}>${dueDateLabel}</span><span ${valueStyle}>${dueDate}</span>` + '</div>';
    const typeHtml = '<div>' + `<span ${labelStyle}>${typeLabel}</span><span ${valueStyle}>${type}</span>` + '</div>';
    const nameHtml = '<div>' + `<span ${labelStyle}>${nameLabel}</span><span ${valueStyle}>${name}</span>` + '</div>';
    const mroCenterHtml =
      '<div>' + `<span ${labelStyle}>${mroCenterLabel}</span><span ${valueStyle}>${mroCenter}</span>` + '</div>';
    const assignedToHtml =
      '<div>' + `<span ${labelStyle}>${assignedToLabel}</span><span ${valueStyle}>${assignedTo}</span>` + '</div>';

    return [
      wpNumberHtml,
      statusHtml,
      startDateHtml,
      dueDateHtml,
      typeHtml,
      nameHtml,
      mroCenterHtml,
      assignedToHtml
    ].join('');
  }
}
