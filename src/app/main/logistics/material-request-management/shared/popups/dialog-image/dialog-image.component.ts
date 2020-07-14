import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class DialogImageComponent extends DialogComponent implements OnInit {
  @Input()
  public imgSrc: SafeResourceUrl;

  public constructor(
  ) {
    super(ComponentOpenMode.Read, 'DialogImageComponent');
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
  }

  public getTypeName(): string {
    return 'DialogImageComponent';
  }

  public cancel(): void {
    this.display = false;
  }
}
