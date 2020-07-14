import { Component, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-create-litigation',
  templateUrl: './dialog-create-litigation.component.html',
  styleUrls: ['./dialog-create-litigation.component.scss']
})
export class DialogCreateLitigationComponent extends DialogComponent implements OnInit {
  public litigationItem: number;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogCreateLitigationComponent');
  }

  public ngOnInit() {
    // TODO
  }

  public validate() {
    // TODO
  }
}
