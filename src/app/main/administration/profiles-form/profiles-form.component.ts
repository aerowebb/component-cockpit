import { Component, OnInit } from '@angular/core';

import { BidoProfileConstants } from '../../../shared/constants/bido-profile-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoProfileDTO } from '../../../shared/types/api-types/bido-profile-dto.interface';
import { ProfileManagementWithUseCaseDTO } from '../../../shared/types/api-types/profile-management-with-use-case-dto.interface';
import { SaveProfileManagementDTO } from '../../../shared/types/api-types/save-profile-management-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { ProfilesSearchService } from '../profiles-search/profiles-search.service';

import { ProfilesFormService } from './profiles-form.service';

@Component({
  selector: 'aw-profiles-form',
  templateUrl: './profiles-form.component.html',
  styleUrls: ['./profiles-form.component.scss']
})
export class ProfilesFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public profileDTO: ProfileManagementWithUseCaseDTO;
  public levelList: LabelValue<string>[];
  public selectedLevel: string;
  private profilesTableList: BidoProfileDTO[];
  public activeBlockIndex: number;
  private id: string;

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly profilesFormService: ProfilesFormService,
    private readonly profilesSearchService: ProfilesSearchService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.profileDTO = {
      bidoProfileDTO: {},
      buildingBlocks: []
    };

    this.profilesTableList = [];
    this.activeBlockIndex = 0;
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_PROFILES_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const context = !!this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId).profileName
        : 'tab.createMode';
      this.displayComponentContext(context, this.isCreateOpenMode);

      this.fillDropDown();
      // tslint:disable-next-line:no-empty
      this.loadAllProfiles(() => {});

      // In case view is performed from search
      if (this.componentData.objectId) {
        this.loadProfile();
      } else {
        this.loadAllBuildingBlocks();
      }
    }
  }

  /**
   * Method to fill level dropdown
   */
  private fillDropDown() {
    this.profilesFormService.getUseCasesAccessDegrees().subscribe((result) => {
      this.levelList = result;

      this.levelList.unshift({
        label: 'None',
        value: 'undefined'
      });
    });
  }

  /**
   * Load all building block with default level selected
   */
  private loadAllBuildingBlocks() {
    this.profilesFormService.findBuildingBlocksForProfile().subscribe((result) => {
      this.profileDTO.buildingBlocks = result;
      this.alterUseCase(this.profileDTO);
    });
  }

  /**
   * Load Profile Data with use cases
   */
  private loadProfile() {
    if (!!this.componentData && !!this.componentData.objectId) {
      const profileName = this.serializationService.deserialize(this.componentData.objectId).profileName;
      this.profilesFormService.findProfileWithUseCasesByName(profileName).subscribe((result) => {
        this.alterUseCase(result);
      });
    }
  }

  /**
   * This method is responsible for converting
   * use case of each profile to array form as select button takes array of selection
   */
  private alterUseCase(profileDTO: ProfileManagementWithUseCaseDTO) {
    this.profileDTO = profileDTO;
    this.profileDTO.buildingBlocks.forEach((result) => {
      result.useCases.forEach((res) => {
        res.selectedLevelList = this.returnLevelList(res.level);
      });
    });
  }

  /**
   * Change affected, level, selectedLevelList in case level is selected
   */
  public levelChangeEvent(ev, usecase, blockIndex, caseIndex) {
    const uc = { ...usecase };
    uc.affected = ev.option.label === 'None' ? false : true;
    uc.level = ev.option.label === 'None' ? undefined : ev.option.value;
    uc.selectedLevelList = [...this.returnLevelList(ev.option.value)];
    this.profileDTO.buildingBlocks[blockIndex].useCases[caseIndex] = uc;
  }

  /**
   * This method is responsible for returning sub level list selected for a particular level
   */
  // tslint:disable-next-line:no-any
  private returnLevelList(level): any[] {
    const selectedLevelList: string[] = [];

    // If level is undefined, show "none" selecectd
    if (!level) {
      return [undefined];
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.levelList.length; i++) {
      if (this.levelList[i].value !== level) {
        selectedLevelList.push(this.levelList[i].value);
      } else {
        selectedLevelList.push(this.levelList[i].value);
        break;
      }
    }

    return selectedLevelList;
  }

  /**
   * Edit Profile
   */
  public editProfile(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  /**
   * Reload screen
   */
  public reloadProfile(): void {
    this.loadProfile();
  }

  /**
   * Save Profile State
   */
  public saveProfile() {
    // Validation for blank check
    if (!this.profileDTO.bidoProfileDTO.profileName) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingProfileName'));

      return false;
    }
    if (this.profileDTO.bidoProfileDTO.profileName.trim().length === 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingProfileName'));

      return false;
    }

    // Loading all profiles
    this.loadAllProfiles(() => {
      if (this.profileDTO.bidoProfileDTO.profileName) {
        this.profileDTO.bidoProfileDTO.profileName = this.profileDTO.bidoProfileDTO.profileName.trim();
      }

      this.profileDTO.bidoProfileDTO.profileComment = this.profileDTO.bidoProfileDTO.profileComment
        ? this.profileDTO.bidoProfileDTO.profileComment.trim()
        : '';

      // Validation to chk if profile already exist
      if (this.validateScreen()) {
        // Creating save DTO
        const saveProfileManagementDTO: SaveProfileManagementDTO = {
          bidoProfileDTO: this.profileDTO.bidoProfileDTO,
          buildingBlocks: this.profileDTO.buildingBlocks,
          isForUpdate: !!this.componentData && this.componentData.openMode === ComponentOpenMode.Create ? false : true
        };

        this.showSaveSpinner = true;
        this.profilesFormService.saveProfile(saveProfileManagementDTO).subscribe(
          () => {
            if (!!this.componentData && !!this.profileDTO.bidoProfileDTO.profileName) {
              this.updateOpenMode(ComponentOpenMode.Read);
              // Update component object
              const profileFormId: BidoProfileDTO = {
                profileName: this.profileDTO.bidoProfileDTO.profileName
              };
              this.componentData.objectId = this.serializationService.serialize(profileFormId);

              this.displayComponentContext(this.profileDTO.bidoProfileDTO.profileName, this.isCreateOpenMode);
              this.profilesTableList.push(this.profileDTO.bidoProfileDTO);

              // Assign id to added profile
              if (!this.id) {
                this.returnProfileId(this.profileDTO.bidoProfileDTO.profileName, (id) => {
                  this.id = id.profileId;
                });
              }
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateProfile'));
            } else {
              super.throwUnboundLocalError('saveProfile', 'this.profileDTO.bidoProfileDTO.profileName');
            }
            this.showSaveSpinner = false;
          },
          (error) => {
            this.showSaveSpinner = false;
          }
        );
      }
    });
  }

  /**
   * Validate Screen
   */
  private validateScreen(): boolean {
    try {
      if (!!this.componentData) {
        let isFound = false;

        // Check if profile alreeady exist or not
        const profileName = this.profileDTO.bidoProfileDTO.profileName;
        this.profilesTableList.forEach((result) => {
          if (!!result.profileName && result.profileName.trim() === profileName) {
            isFound = true;
          }
        });

        if (isFound) {
          if (this.componentData.openMode === ComponentOpenMode.Create) {
            this.messageService.showWarningMessage(this.getTranslateKey('profileAlreadyExist'));

            return false;
          } else {
            if (this.componentData.objectId) {
              if (this.serializationService.deserialize(this.componentData.objectId).profileId) {
                let found = false;
                this.profilesTableList.forEach((res) => {
                  if (
                    !!this.componentData &&
                    !!this.componentData.objectId &&
                    res.profileName === profileName &&
                    res.profileId !== this.serializationService.deserialize(this.componentData.objectId).profileId
                  ) {
                    found = true;
                  }
                });

                if (found) {
                  this.messageService.showWarningMessage(this.getTranslateKey('profileAlreadyExist'));

                  return false;
                } else {
                  // Case of update
                  this.componentData.openMode = ComponentOpenMode.Write;
                }
              } else {
                if (this.id) {
                  this.profileDTO.bidoProfileDTO.profileId = this.id;
                }
                this.componentData.openMode = ComponentOpenMode.Write;
              }
            } else {
              this.profileDTO.bidoProfileDTO.profileId = this.id;
              this.componentData.openMode = ComponentOpenMode.Write;
            }
          }
        } else {
          // If only name is changed and profile ID exist
          if (this.componentData.objectId) {
            if (this.serializationService.deserialize(this.componentData.objectId).profileId) {
              this.profileDTO.bidoProfileDTO.profileId = this.serializationService.deserialize(
                this.componentData.objectId
              ).profileId;
              this.componentData.openMode = ComponentOpenMode.Write;
            } else {
              // loop of profile list
              this.profilesTableList.forEach((res) => {
                if (res.profileName === res.profileName) {
                  this.profileDTO.bidoProfileDTO.profileId = res.profileId;
                }
              });
              this.componentData.openMode = ComponentOpenMode.Write;
            }
          } else if (!this.componentData.objectId && this.componentData.openMode === ComponentOpenMode.Write) {
            this.profilesTableList.forEach((res) => {
              if (res.profileName === profileName) {
                // In case of update where profile name is not same, update profile name
                this.profileDTO.bidoProfileDTO.profileId = res.profileId;
              }
            });
            this.componentData.openMode = ComponentOpenMode.Write;
          }
        }
      }
      // tslint:disable-next-line:no-empty
    } catch (err) {}

    return true;
  }

  /**
   * This is responsible for returning profile id by profile name
   */
  private returnProfileId(name, callback) {
    this.profilesSearchService.findAllBidoProfiles().subscribe((result) => {
      this.profilesTableList = result;
      let profile;
      result.forEach((res) => {
        if (res.profileName === name) {
          profile = res;
        }
      });
      callback(profile);
    });
  }

  /**
   * Service call to fetch list of all profiles
   */
  private loadAllProfiles(callback) {
    this.profilesSearchService.findAllBidoProfiles().subscribe((result) => {
      this.profilesTableList = result;
      callback();
    });
  }

  /**
   * Cancel changes made to profile
   */
  public cancelProfile() {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadProfile();
  }

  public onTabOpen(e) {
    this.activeBlockIndex = e.index;
  }

  public showEditButton(): boolean {
    let toReturn: boolean = this.isReadOpenMode;
    if (toReturn) {
      if (!!this.profileDTO.bidoProfileDTO.profileId) {
        toReturn = this.profileDTO.bidoProfileDTO.profileId !== BidoProfileConstants.ADMINISTRATOR_PROFILE_ID;
      }
    }

    return toReturn;
  }
}
