import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, of } from 'rxjs';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SelectOptionUtils } from '../../../../shared/utils/select-option-utils';
import { EnterpriseDefinitionService } from '../enterprise-definition.service';

@Component({
  selector: 'aw-enterprise-definition-site',
  templateUrl: './site.component.html'
})
export class EnterpriseDefinitionSiteDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public siteId?: number;

  @Output()
  public onSave: EventEmitter<void>;

  public companies: LabelValue<number>[];
  public site: BidtSiteDTO;

  public constructor(
    private readonly enterpriseDefinitionService: EnterpriseDefinitionService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'EnterpriseDefinitionSiteDialogComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public save(): void {
    this.enterpriseDefinitionService.saveSite(this.site).subscribe({
      next: () => {
        this.onSave.emit();
        this.messageService.showSuccessMessage('successOnSaveSite');

        this.closeDialog();
      }
    });
  }

  // ////////////////////////////////////////////////////////////////////////////

  private onBeforeLoad(): void {
    this.site = {};
  }

  private onBeforeLoadOnce(): void {
    this.companies = [];

    this.onSave = new EventEmitter<void>();
  }

  private load(): void {
    forkJoin({
      site: this.siteId ? this.enterpriseDefinitionService.getSiteById(this.siteId) : of(undefined),
      companies: this.companies.length === 0 ? this.enterpriseDefinitionService.loadCompanies({}) : of(this.companies)
    }).subscribe({
      next: ({ site, companies }) => {
        this.site = site || {};

        this.companies = companies.sort(SelectOptionUtils.sort);
      }
    });
  }
}
