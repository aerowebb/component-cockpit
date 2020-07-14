import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { CopyProfileDTO } from '../../../../shared/types/api-types/copy-profile-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';

import { UsersSearchService } from './../users-search.service';

@Component({
  selector: 'aw-update-profile-rights-popup-form',
  templateUrl: './update-profile-rights-popup-form.component.html',
  styleUrls: ['./update-profile-rights-popup-form.scss']
})
export class UpdateProfileRightsPopupFormComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public selectedUsers: BidoUserDTO[];

  @Output()
  public onCreate: EventEmitter<BidoUserDTO>;

  public readonly componentId: string;

  public displayValue: boolean;
  public usersToBeCopied: LabelValue<string>[] | null;
  public userId: string;

  public constructor(private readonly usersSearchService: UsersSearchService) {
    super(ComponentOpenMode.Write, 'UpdateProfileRightsPopupFormComponent');
    // tslint:disable-next-line:no-any
    this.onCreate = new EventEmitter<any>();
    this.usersToBeCopied = [];
  }

  public ngOnInit() {
    if (!this.selectedUsers) {
      this.selectedUsers = [];
    }
    this.loadDropDown();
  }

  public associate(): void {
    if (!!this.selectedUsers) {
      const copyUserProfile$ = this.selectedUsers.map((selectedUser) => {
        if (!!selectedUser.userId) {
          const copyObject: CopyProfileDTO = {
            fromUserId: this.userId,
            toUserId: selectedUser.userId
          };

          return this.usersSearchService.copyUserProfile(copyObject);
        }
      });
      forkJoin(copyUserProfile$).subscribe((results) => (this.display = false));
    } else {
      super.throwUnboundLocalError('associate', 'this.selectedUser');
    }
  }

  public cancel(): void {
    this.display = false;
  }
  public loadDropDown() {
    this.usersSearchService
      .findUsersBySearchCriteria({ bidoUserDTO: {} })
      .pipe(
        map((results) => {
          const dropdown: LabelValue<string>[] = [];
          results.forEach((res) => {
            if (!!res && !!res.userId) {
              const usersLabelValue: LabelValue<string> = {
                label:
                  (res.firstname != undefined ? res.firstname : '') +
                  (res.lastname != undefined ? ' ' + res.lastname : ''),
                value: res.userId.toString()
              };
              dropdown.push(usersLabelValue);
            } else {
              super.throwUnboundLocalError(
                'loadUserTableData',
                'res && res.userId && res.lastname && res.firstname && res.login'
              );
            }
          });

          return dropdown;
        })
      )
      .subscribe((results) => {
        this.usersToBeCopied = results.filter((x) => !this.selectedUsers.map((user) => user.userId).includes(x.value));
      });
  }

  public enableAssociateButton(): boolean {
    return !!!this.userId;
  }
}
