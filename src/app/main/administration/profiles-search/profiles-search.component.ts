import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoProfileDTOId } from '../../../shared/types/api-types/bido-profile-dto-id.interface';
import { BidoProfileDTO } from '../../../shared/types/api-types/bido-profile-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { StringUtils } from '../../../shared/utils/string-utils';

import { ProfilesSearchService } from './profiles-search.service';

@Component({
  selector: 'aw-profiles-search',
  templateUrl: './profiles-search.component.html',
  styleUrls: ['./profiles-search.component.scss']
})
export class ProfilesSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly CUSTOMER_TABLE_EXPORT_NAME: string = 'ProfilesSearchList';

  public profilesTableDataSource: TableDataSource<BidoProfileDTO>;
  public isLoading: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    private readonly profilesSearchService: ProfilesSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);


    this.initProfilesTableDataSource();
    this.isLoading = false;
  }

  private initProfilesTableDataSource(): void {
    this.profilesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns:  [
        {
          field: 'profileName',
          translateKey: this.getTranslateKey('profileName'),
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'profileComment',
          translateKey: this.getTranslateKey('profileComment'),
          alignment: ColumnAlignment.LEFT
        }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_PROFILES_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.loadAllProfiles();
  }

  /**
   * Service call to fetch list of all profiles
   */
  private loadAllProfiles() {
    this.isLoading = true;
    this.profilesSearchService.findAllBidoProfiles().subscribe((result) => {
      const sortedResult = (!!result
        ? result.sort(
            (n1, n2): number => {
              if (n1.profileName && n2.profileName) {
                if (n1.profileName > n2.profileName) {
                  return 1;
                }
                if (n1.profileName < n2.profileName) {
                  return -1;
                }
              }

              return 0;
            }
          )
        : result);
      this.profilesTableDataSource.setData(sortedResult);
      this.profilesTableDataSource.update();
      this.isLoading = false;
    });
  }


  /**
   * Open selected profiles
   */
  public openSelectedProfiles(): void {
    this.profilesTableDataSource.dataSelection.forEach((profile) => {
      if (!!profile) {
        if (StringUtils.isNullOrEmpty(profile.profileId)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCustomerCode'));
        } else {
          this.openProfile(profile.profileName, ComponentOpenMode.Read);
        }
      }
    });
  }

  /**
   * Open Profiles
   */
  private openProfile(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_PROFILES_FORM,
      openMode
    };
    if (!!objectId) {
      const profileFormId: BidoProfileDTO = {
        profileName: objectId
      };
      data.objectId = this.serializationService.serialize(profileFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**
   * Export table data to excel
   */
  public exportTable(): void {
    const list: BidoProfileDTO[] = [];
    this.profilesTableDataSource.dataSrc.forEach((res) => {
      list.push({
        profileName: res.profileName,
        profileComment: res.profileComment
      });
    });

    if (!!this.componentData) {
      this.exportService.toExcel(
        list,
        ProfilesSearchComponent.CUSTOMER_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  /**
   * Delete Selected profiles
   */
  public deleteSelectedProfiles(): void {
    const confirmMessageKey =
    this.profilesTableDataSource.dataSelectionCount > 1 ?
       'confirmDeleteSelectedProfiles' : 'confirmDeleteSelectedProfile';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const selectedProfilesToDelete: BidoProfileDTOId[] = [];
        this.profilesTableDataSource.dataSelection.forEach((profile) => {
          if (!!profile && !!profile.profileId) {
            const bidoProfileDTOId: BidoProfileDTOId = {
              profileId: profile.profileId
            };
            if (!!bidoProfileDTOId) {
              selectedProfilesToDelete.push(bidoProfileDTOId);
            } else {
              super.throwUnboundLocalError('deleteSelectedProfiles', 'bidoProfileDTOId');
            }
          }
        });

        this.profilesSearchService.removeProfile(selectedProfilesToDelete).subscribe(() => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteProfile'));
          this.loadAllProfiles();
        });
        this.profilesTableDataSource.dataSelection = [];
      }
    });
  }

  /**
   * Create new Profile
   */
  public openNewProfile(): void {
    this.openProfile(undefined, ComponentOpenMode.Create);
  }

  /**
   * Event to trigger refresh
   */
  public refresh(): void {
    this.profilesTableDataSource.dataSelection = [];
    this.loadAllProfiles();
  }
}
