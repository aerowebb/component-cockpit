import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-validate-package',
  templateUrl: './dialog-validate-package.component.html'
})
export class DialogValidatePackageComponent extends DialogComponent implements OnInit {
  @Input('packageData')
  public bidtPackageDTO: BidtPackageDTO;

  @Output() public onValidatePackage: EventEmitter<void>;

  public partNumer: string | undefined;
  public designation: string | undefined;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogValidatePackageComponent');
    this.onValidatePackage = new EventEmitter<void>();
  }

  public ngOnInit(): void {
    if (!!this.bidtPackageDTO) {
      if (!!this.bidtPackageDTO.bidtDfItems && this.bidtPackageDTO.bidtDfItems.length > 0) {
        if (!!this.bidtPackageDTO.bidtDfItems[0].birePn) {
          this.partNumer = this.bidtPackageDTO.bidtDfItems[0].birePn.pnCode;
          this.designation = this.bidtPackageDTO.bidtDfItems[0].birePn.articleDesignation;
        }
      }
    } else {
      this.bidtPackageDTO = {};
    }
  }

  public validate() {
    this.display = false;
    this.onValidatePackage.emit();
  }

  public createLitigation(): void {
    this.display = false;
  }
}
