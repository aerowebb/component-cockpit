import { Component } from '@angular/core';

import { MessageService } from '../../shared/services/message.service';
import { TabService } from '../../shared/services/tab.service';

@Component({
  selector: 'aw-breadcrumb',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  public constructor(public readonly tabService: TabService, private readonly messageService: MessageService) {}

  public openPreviousTab(index: number): void {
    if (index >= 0 && index < this.tabService.breadcrumbs.length) {
      const tabToShow = this.tabService.breadcrumbs[index];

      if (!!tabToShow) {
        this.tabService.open(tabToShow, { shouldReuse: true });
      } else {
        this.messageService.showErrorMessage('breadcrumb.errorOnPreviousTab');
      }
    } else {
      this.messageService.showErrorMessage('breadcrumb.errorOnPreviousTab');
    }
  }
}
