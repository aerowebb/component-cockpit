import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoProfileDTO } from '../../../../../shared/types/api-types/bido-profile-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { UsersFormService } from '../../users-form.service';

interface Profile extends BidoProfileDTO {
  affected: boolean;
}

@Component({
  selector: 'aw-assign-profile-popup-form',
  templateUrl: './assign-profile-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignProfilesPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public componentData: PopupEntry<BidoProfileDTO[]>;

  @Output()
  public onValidated: EventEmitter<BidoProfileDTO[]>;

  public tableDataSource: TableDataSource<Profile>;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public usersFormService: UsersFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignProfilesPopupFormComponent');

    this.onValidated = new EventEmitter<BidoProfileDTO[]>();

    this.tableDataSource = new TableDataSource({
      allowMultiSelect: true,
      itemsPerPage: 15,
      columns: [
        { field: 'profileName', translateKey: this.getTranslateKey('profileName'), width: '45%' },
        { field: 'profileComment', translateKey: this.getTranslateKey('profileComment'), width: '45%' },
        {
          field: 'affected',
          translateKey: this.getTranslateKey('affected'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ]
    });
  }

  public ngOnInit() {
    this.loadProfiles();
  }

  public getTypeName(): string {
    return 'AssignProfilesPopupFormComponent';
  }

  public associate(): void {
    const bidoProfilesSelection = this.tableDataSource.dataSelection.map((profile) => {
      const bidoProfile: BidoProfileDTO = {
        profileId: profile.profileId,
        profileName: profile.profileName,
        profileComment: profile.profileComment
      };

      return bidoProfile;
    });
    this.onValidated.emit(bidoProfilesSelection);

    this.closeDialog();
  }

  private loadProfiles(): void {
    this.usersFormService.findAllBidoProfiles().subscribe({
      next: (bidoProfiles) => {
        const currentBidoProfiles =
          (this.componentData && this.componentData.object && this.componentData.object) || [];

        const profiles = bidoProfiles
          .map((bidoProfile) => {
            const profile: Profile = {
              profileId: bidoProfile.profileId,
              profileName: bidoProfile.profileName,
              profileComment: bidoProfile.profileComment,
              affected: currentBidoProfiles.some(
                (currentBidoProfile) => currentBidoProfile.profileId === bidoProfile.profileId
              )
            };

            return profile;
          })
          .sort((p1, p2) => {
            if (p1.profileName && p2.profileName) {
              return p1.profileName.localeCompare(p2.profileName);
            }

            return 0;
          });

        this.tableDataSource.setData(profiles);
      }
    });
  }
}
