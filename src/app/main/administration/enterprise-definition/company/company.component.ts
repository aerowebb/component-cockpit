import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, of } from 'rxjs';

import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SelectOptionUtils } from '../../../../shared/utils/select-option-utils';
import { EnterpriseDefinitionService } from '../enterprise-definition.service';

@Component({
  selector: 'aw-enterprise-definition-company',
  templateUrl: './company.component.html'
})
export class EnterpriseDefinitionCompanyDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public companyId?: number;

  @Output()
  public onSave: EventEmitter<void>;

  public company: BidtCompanyDTO;
  public companyTypes: LabelValue<string>[];

  public constructor(
    private readonly enterpriseDefinitionService: EnterpriseDefinitionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'EnterpriseDefinitionCompanyDialogComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public save(): void {
    this.enterpriseDefinitionService.saveCompany(this.company).subscribe({
      next: () => {
        this.onSave.emit();
        this.messageService.showSuccessMessage('successOnSaveCompany');

        this.closeDialog();
      }
    });
  }

  // ////////////////////////////////////////////////////////////////////////////

  private onBeforeLoad(): void {
    this.company = {};
  }

  private onBeforeLoadOnce(): void {
    this.companyTypes = [];

    this.onSave = new EventEmitter<void>();
  }

  private load(): void {
    forkJoin({
      company: this.companyId ? this.enterpriseDefinitionService.getCompanyById(this.companyId) : of(undefined),
      companyTypes:
        this.companyTypes.length === 0
          ? this.propertiesService.getValue(GenericPropertyConstants.COMPANY_TYPE_MAP)
          : of(this.companyTypes)
    }).subscribe({
      next: ({ company, companyTypes }) => {
        this.company = company || {};

        this.companyTypes = companyTypes.sort(SelectOptionUtils.sort);
      }
    });
  }
}
