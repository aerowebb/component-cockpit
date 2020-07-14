import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { BidoProfileConstants } from '../../../shared/constants/bido-profile-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindEmployeeByCompany } from '../../../shared/types/api-input-types/administration-users/find-employee-by-company.interface';
import { UserProfileFunctionDTO } from '../../../shared/types/api-output-types/administration-users/bido-user-profile-function-dto.interface';
import { UserProfileMappedFunctions } from '../../../shared/types/api-output-types/administration-users/bido-user-profile-mapped-function-dto.interface';
import { BidoCompanyTypeDTO } from '../../../shared/types/api-types/bido-company-type-dto.interface';
import { BidoFunctionTypeDTO } from '../../../shared/types/api-types/bido-function-type-dto.interface';
import { BidoMandantUserDTO } from '../../../shared/types/api-types/bido-mandant-user-dto.interface';
import { BidoProfileDTO } from '../../../shared/types/api-types/bido-profile-dto.interface';
import { BidoUserDTOId } from '../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../shared/types/api-types/bido-user-dto.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';

import { UsersFormService } from './users-form.service';

interface ProfileCustomDTO {
  bidoProfileDTO?: BidoProfileDTO;
  families?: BidoFunctionTypeDTO[];
  operators?: BidoFunctionTypeDTO[];
  sites?: BidoFunctionTypeDTO[];
}

interface UseCasesCustomDTO {
  buildingBlockCode?: string;
  level?: string;
  useCase?: string;
}

@Component({
  selector: 'aw-users-form',
  styleUrls: ['./users-form.component.scss'],
  templateUrl: './users-form.component.html'
})
export class UsersFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly PROFILES_TABLE_EXPORT_NAME: string = 'profiles-list';
  private static readonly CANT_DELETE_OWN_ADMIN_PROFILE: string = 'cantDeleteOwnAdminProfile';
  private static readonly CANT_ASSOCIATE_MANDANT_TO_USER: string = 'cantAssociateMandantToUser';

  public static readonly MAIN_DATA_ANCHOR_ID: string = 'mainDataAnchor';
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly PROFILES_ANCHOR_ID: string = 'profilesAnchor';
  public static readonly USE_CASES_ANCHOR_ID: string = 'useCasesAnchor';
  public static readonly CONTACT_TABLE_ANCHOR_ID: string = 'contactTableAnchor';
  public static readonly CLIENTS_ANCHOR_ID: string = 'clientsAnchor';

  public readonly tabUseCasesId: string;
  public readonly tabClientsId: string;
  public readonly tabGeneralId: string;
  public readonly tabProfilesId: string;
  public userProfileMappedAddedList: UserProfileMappedFunctions[];
  public documentTypes: SelectItem[];
  public profileFunctions: UserProfileMappedFunctions;
  public currentTabId: string;
  public isNavigationOverlayVisible: boolean;
  public isReadOnlyProfileDialog: boolean;
  public showProfilePopup: boolean;
  public isReadOnlyFamilyDialog: boolean;
  public showFamilyPopup: boolean;
  public isReadOnlyOperatorDialog: boolean;
  public showOperatorPopup: boolean;
  public isReadOnlySiteDialog: boolean;
  public showSitePopup: boolean;
  public dataProfiles: PopupEntry<BidoProfileDTO[]>;
  public dataFamilies: PopupEntry<BidoFunctionTypeDTO[]>;
  public dataOperators: PopupEntry<BidoFunctionTypeDTO[]>;
  public dataSites: PopupEntry<BidoFunctionTypeDTO[]>;
  public profileId: BidoProfileDTO;
  public company: LabelValue<string>[];
  public employee: LabelValue<string>[];
  public searchObject: FindEmployeeByCompany;
  public companies: number | undefined;
  public companyDetails: BidoCompanyTypeDTO;
  public generalTabFieldData: BidoUserDTO;
  public showClientsForm: boolean;
  public isReadOnlyClientDialog: boolean;
  public confirmPassword: string | undefined;
  public levelList: LabelValue<string>[];
  public enableProfileEdit: boolean;
  public enableOperatorEdit: boolean;
  public enableFamilyEdit: boolean;
  public enableSiteEdit: boolean;
  private newLocal: string;
  public toc: PageTocEntry[];
  public companyName: string | undefined;
  public useCasesTableDataSource: TableDataSource<UseCasesCustomDTO>;
  public clientTableDataSource: TableDataSource<BidoMandantUserDTO>;
  public profileTableDataSource: TableDataSource<UserProfileMappedFunctions>;
  public familiesTableDataSource: TableDataSource<BidoFunctionTypeDTO>;
  public operatorsTableDataSource: TableDataSource<BidoFunctionTypeDTO>;
  public sitesTableDataSource: TableDataSource<BidoFunctionTypeDTO>;

  @ViewChild('mainDataAnchor')
  public mainDataAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('profilesAnchor')
  public profilesAnchor: ElementRef;

  @ViewChild('useCasesAnchor')
  public useCasesAnchor: ElementRef;

  @ViewChild('clientsAnchor')
  public clientsAnchor: ElementRef;

  public selectedAnchor: string | undefined;
  public showSaveSpinner: boolean;

  public component: typeof UsersFormComponent;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly usersFormService: UsersFormService,
    private readonly exportService: ExportService,
    pageTocService: PageTocService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = UsersFormComponent;
    this.tabUseCasesId = 'useCases';
    this.tabClientsId = 'clients';
    this.tabGeneralId = 'general';
    this.tabProfilesId = 'profiles';
    this.isNavigationOverlayVisible = false;
    this.isReadOnlyProfileDialog = true;
    this.showProfilePopup = false;
    this.showClientsForm = false;
    this.isReadOnlyClientDialog = true;
    this.enableProfileEdit = true;
    this.enableOperatorEdit = true;
    this.enableFamilyEdit = true;
    this.enableSiteEdit = true;
    this.companies = undefined;
    this.confirmPassword = undefined;
    this.selectedAnchor = undefined;
    this.profileFunctions = {};
    this.newLocal = '';
    this.openGeneralTab();
    this.loadCompany();
    this.company = [];
    this.employee = [];
    this.generalTabFieldData = {};
    this.init();
    this.initUseCasesTableDataSource();
    this.initClientTableDataSource();
    this.initProfileTableDataSource();
    this.initProfileFunctionsTableDataSource();

    super.registerPageTocEntryObservable();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_USERS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const contextMode = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          `${this.serializationService.deserialize(this.componentData.objectId).firstname}
        ${this.serializationService.deserialize(this.componentData.objectId).lastname}`;
      if (!!contextMode) {
        this.displayComponentContext(contextMode, this.isCreateOpenMode);
      }
      this.loadUsersDetailData();
      this.loadUseCasesData();
      this.loadLevelList();
    }

    this.toc = [
      {
        id: this.component.MAIN_DATA_ANCHOR_ID,
        anchor: this.mainDataAnchor,
        label: `${this.translateService.instant('page.mainData')}`
      },
      {
        id: this.component.GENERAL_ANCHOR_ID,
        anchor: this.generalAnchor,
        label: `${this.translateService.instant('page.additionalData')}`
      },
      {
        id: this.component.PROFILES_ANCHOR_ID,
        anchor: this.profilesAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('profilesList'))}`
      },
      {
        id: this.component.USE_CASES_ANCHOR_ID,
        anchor: this.useCasesAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('useCasesList'))}`
      },
      {
        id: this.component.CLIENTS_ANCHOR_ID,
        anchor: this.clientsAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('clientsList'))}`
      }
    ];

    super.selectPageTocEntry('mainDataAnchor');
  }

  private init(): void {
    this.userProfileMappedAddedList = [];
  }

  private initUseCasesTableDataSource(): void {
    this.useCasesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'buildingBlockCode',
          translateKey: this.getTranslateKey('buildingBlockCode')
        },
        {
          field: 'useCase',
          translateKey: this.getTranslateKey('useCase')
        },
        {
          field: 'level',
          translateKey: this.getTranslateKey('level')
        }
      ],
      data: []
    });
  }

  private initClientTableDataSource(): void {
    this.clientTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'bidMandant',
          translateKey: this.getTranslateKey('bidMandant')
        },
        {
          field: 'sapUser',
          translateKey: this.getTranslateKey('sapUser')
        }
      ],
      data: []
    });
  }

  private initProfileTableDataSource(): void {
    this.profileTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'profileName',
          translateKey: this.getTranslateKey('profileName')
        },
        {
          field: 'profileComment',
          translateKey: this.getTranslateKey('profileComment')
        }
      ],
      data: []
    });
  }

  private initProfileFunctionsTableDataSource(): void {
    const functionTableConfiguration = {
      enableSelection: false,
      columns: [
        {
          field: 'functionCode',
          translateKey: this.getTranslateKey('functionCode')
        },
        {
          field: 'functionName',
          translateKey: this.getTranslateKey('functionName')
        }
      ],
      data: []
    };
    this.familiesTableDataSource = new TableDataSource(functionTableConfiguration);
    this.operatorsTableDataSource = new TableDataSource(functionTableConfiguration);
    this.sitesTableDataSource = new TableDataSource(functionTableConfiguration);
  }

  public cancelUsers(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.reloadUsers();
  }

  public editUsers(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadUsers(): void {
    this.init();
    this.loadUsersDetailData();
    this.loadUseCasesData();
  }

  public showNavigationOverlay(): void {
    this.isNavigationOverlayVisible = true;
  }

  public hideNavigationOverlay(): void {
    this.isNavigationOverlayVisible = false;
  }

  public exportTable(): void {
    this.exportService.toExcel(
      this.profileTableDataSource.dataSrc,
      UsersFormComponent.PROFILES_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public onProfileRowSelectUnselect(): void {
    if (this.profileTableDataSource.dataSelectionCount === 1) {
      this.profileFunctions = this.profileTableDataSource.dataSelection[0];
    } else {
      this.profileFunctions = {};
    }

    this.familiesTableDataSource.setData(this.profileFunctions.families || []);
    this.familiesTableDataSource.update();
    this.operatorsTableDataSource.setData(this.profileFunctions.operators || []);
    this.operatorsTableDataSource.update();
    this.sitesTableDataSource.setData(this.profileFunctions.sites || []);
    this.sitesTableDataSource.update();
  }

  public onRowSelect() {
    if (!!this.profileTableDataSource.dataSelection) {
      this.enableProfileEdit =
        !this.profileTableDataSource.hasDataSelection || this.profileTableDataSource.dataSelectionCount > 1;
      this.enableFamilyEdit =
        !this.profileTableDataSource.hasDataSelection || this.profileTableDataSource.dataSelectionCount > 1;
      this.enableOperatorEdit =
        !this.profileTableDataSource.hasDataSelection || this.profileTableDataSource.dataSelectionCount > 1;
      this.enableSiteEdit =
        !this.profileTableDataSource.hasDataSelection || this.profileTableDataSource.dataSelectionCount > 1;
    }
  }

  /**************************************************************************
   * Profiles tab
   *************************************************************************/

  public openProfilesTab(): void {
    this.currentTabId = this.tabProfilesId;
  }

  public editProfile(): void {
    const tableProfiles: BidoProfileDTO[] = [];
    this.profileTableDataSource.dataSrc.forEach((profile) => {
      if (!!profile.bidoProfileDTO) {
        tableProfiles.push(profile.bidoProfileDTO);
      }
    });
    this.isReadOnlyProfileDialog = false;
    this.showProfilePopup = true;
    this.dataProfiles = {
      componentId: 'AssignProfilesPopupFormComponent',
      selectedRow: undefined,
      object: tableProfiles,
      openMode: ComponentOpenMode.Write
    };
  }

  public disassociateProfile(): void {
    this.profileTableDataSource.deleteDataSelection();

    this.familiesTableDataSource.setData([]);
    this.operatorsTableDataSource.setData([]);
    this.sitesTableDataSource.setData([]);
  }

  public openFamilyPopup(): void {
    this.isReadOnlyFamilyDialog = false;
    this.showFamilyPopup = true;
    this.dataFamilies = {
      componentId: 'AssignFamiliesPopupFormComponent',
      selectedRow: undefined,
      object: this.profileTableDataSource.dataSelection[0].families,
      openMode: ComponentOpenMode.Write
    };
  }

  public openOperatorPopup(): void {
    this.isReadOnlyOperatorDialog = false;
    this.showOperatorPopup = true;
    this.dataOperators = {
      componentId: 'AssignOperatorsPopupFormComponent',
      selectedRow: undefined,
      object: this.profileTableDataSource.dataSelection[0].operators,
      openMode: ComponentOpenMode.Write
    };
  }

  public openSitePopup(): void {
    this.isReadOnlySiteDialog = false;
    this.showSitePopup = true;
    this.dataSites = {
      componentId: 'AssignSitesPopupFormComponent',
      selectedRow: undefined,
      object: this.profileTableDataSource.dataSelection[0].sites,
      openMode: ComponentOpenMode.Write
    };
  }

  public loadUsersDetailData(): void {
    if (this.componentData.objectId) {
      const userId: BidoUserDTOId = this.serializationService.deserialize(this.componentData.objectId).userId;
      if (!!userId) {
        this.usersFormService.getUserDetails(userId).subscribe(
          (result) => {
            if (!!result && !!result.bidoUserDTO && !!result.userProfileListDTO) {
              this.generalTabFieldData = result.bidoUserDTO;
              if (result.bidoMandantUserDTO) {
                this.clientTableDataSource.setData(result.bidoMandantUserDTO);
              } else {
                this.clientTableDataSource.setData([]);
              }
              this.clientTableDataSource.update();
              this.confirmPassword = result.bidoUserDTO.password;
              const data: UserProfileMappedFunctions[] = result.userProfileListDTO;
              const profileTable: UserProfileMappedFunctions[] = [];
              if (!!data) {
                data.forEach((res) => {
                  if (!!res && !!res.bidoProfileDTO) {
                    const profileRow: ProfileCustomDTO = {
                      bidoProfileDTO: {
                        profileId: res.bidoProfileDTO.profileId,
                        profileName: res.bidoProfileDTO.profileName,
                        profileComment: res.bidoProfileDTO.profileComment
                      },
                      families: res.families,
                      operators: res.operators,
                      sites: res.sites
                    };

                    profileTable.push(profileRow);
                  } else {
                    super.throwUnboundLocalError('loadUsersDetailData', '!!res && !!res.bidoProfileDTO');
                  }
                });
              }
              this.profileTableDataSource.setData(profileTable);
              this.profileTableDataSource.update();
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadUsersData'));
          }
        );
      }
    }
  }

  public showAssigmentButtons(): boolean {
    let toReturn: boolean = !this.isReadOpenMode && this.profileTableDataSource.dataSelectionCount === 1;
    if (toReturn) {
      if (
        this.profileTableDataSource.dataSelection[0].bidoProfileDTO &&
        this.profileTableDataSource.dataSelection[0].bidoProfileDTO.profileId ===
          BidoProfileConstants.ADMINISTRATOR_PROFILE_ID
      ) {
        toReturn = false;
      }
    }

    return toReturn;
  }

  /**************************************************************************
   * Use Cases tab
   *************************************************************************/
  public openUseCasesTab(): void {
    this.currentTabId = this.tabUseCasesId;
  }
  private loadLevelList(): void {
    this.usersFormService.getUseCaseLevel().subscribe((result) => {
      this.levelList = result;

      this.levelList.unshift({
        label: 'None',
        value: ''
      });
    });
  }

  public loadUseCasesData(): void {
    const useCases: UseCasesCustomDTO[] = [];
    if (!!this.componentData.objectId) {
      const userId: BidoUserDTOId = this.serializationService.deserialize(this.componentData.objectId).userId;
      if (!!userId) {
        this.usersFormService.getBuildingBlockUseCaseLevel(userId).subscribe(
          (result) => {
            if (!!result) {
              result.forEach((results) => {
                results.buildingBlocks.forEach((element) => {
                  element.useCases.forEach((res) => {
                    if (this.levelList) {
                      this.levelList.forEach((level) => {
                        if (level.value === res.level) {
                          res.level = level.label;
                        }
                      });
                      const userRow: UseCasesCustomDTO = {
                        buildingBlockCode: this.getBuildingBlockText(res.bidoFunctionTypeDTO.functionModule as string),
                        level: res.level,
                        useCase: res.bidoFunctionTypeDTO.functionName
                      };
                      useCases.push(userRow);
                    }
                  });
                });
              });
              this.useCasesTableDataSource.setData(useCases);
              this.useCasesTableDataSource.dataSelection = [];
              this.useCasesTableDataSource.update();
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadUseCaseData'));
          }
        );
      }
    }
  }

  private getBuildingBlockText(code: string): string {
    let text = '';
    this.translateService.get(this.getTranslateKey(code)).subscribe((result: string) => {
      text = !!result ? result : code;
    });

    return text;
  }

  /**************************************************************************
   * Clients tab
   *************************************************************************/
  public openClientsTab(): void {
    this.currentTabId = this.tabClientsId;
  }

  public createClients(): void {
    this.showClientsForm = true;
    this.isReadOnlyClientDialog = false;
  }

  public onAddOperation(event) {
    if (!!this.componentData.objectId) {
      const bidoMandantUserDTO: BidoMandantUserDTO = {
        userId: this.serializationService.deserialize(this.componentData.objectId).userId,
        sapUser: event.sapUser,
        sapPassword: '',
        mandant: '',
        bidMandant: event.bidMandant
      };
      if (!!this.clientTableDataSource) {
        if (this.clientTableDataSource.hasData) {
          const client = this.clientTableDataSource.dataSrc.find(
            (item) => item.bidMandant === bidoMandantUserDTO.bidMandant
          );
          if (!client) {
            this.clientTableDataSource.addData([bidoMandantUserDTO]);
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnAddingClients'));
          }
        } else {
          this.clientTableDataSource.addData([bidoMandantUserDTO]);
        }
      } else {
        super.throwUnboundLocalError('onAddOperation', 'this.clientTableDataSource');
      }
    } else {
      super.throwUnboundLocalError('onAddOperation', 'this.componentData.objectId');
    }
  }

  public deleteClients() {
    const partialMessageKey =
      this.clientTableDataSource.dataSelectionCount > 1 ? 'confirmOnDeleteClients' : 'confirmOnDeleteClient';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.clientTableDataSource.deleteDataSelection();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteClient'));
      }
    });
  }

  public onAddProfiles(profiles: BidoProfileDTO[]): void {
    const profileData: UserProfileMappedFunctions[] = profiles.map((profile) => ({
      bidoProfileDTO: profile
    }));

    profileData.forEach((newProfile) => {
      this.profileTableDataSource.dataSrc.forEach((oldProfile) => {
        if (!!newProfile.bidoProfileDTO && oldProfile.bidoProfileDTO) {
          if (newProfile.bidoProfileDTO.profileId === oldProfile.bidoProfileDTO.profileId) {
            newProfile.sites = oldProfile.sites;
            newProfile.operators = oldProfile.operators;
            newProfile.families = oldProfile.families;
          }
        } else {
          super.throwUnboundLocalError('onAddProfiles', 'newProfile.bidoProfileDTO && oldProfile.bidoProfileDTO');
        }
      });
    });

    this.profileTableDataSource.addData(profileData);
  }

  public onEditSites(sites: BidoFunctionTypeDTO[]): void {
    if (!!this.profileTableDataSource.dataSrc) {
      const profileIndex = this.profileTableDataSource.dataSrc.findIndex(
        (profiles) =>
          (!!profiles.bidoProfileDTO && profiles.bidoProfileDTO.profileId) ===
          (!!this.profileTableDataSource.dataSelection[0].bidoProfileDTO &&
            this.profileTableDataSource.dataSelection[0].bidoProfileDTO.profileId)
      );
      this.profileTableDataSource.dataSrc[profileIndex].sites = [...sites];
      this.profileTableDataSource.update();
      this.sitesTableDataSource.setData(sites);
      this.sitesTableDataSource.update();
    }
  }

  public onEditFamilies(families: BidoFunctionTypeDTO[]): void {
    if (!!this.profileTableDataSource.dataSrc) {
      const profileIndex = this.profileTableDataSource.dataSrc.findIndex(
        (profiles) =>
          (!!profiles.bidoProfileDTO && profiles.bidoProfileDTO.profileId) ===
          (!!this.profileTableDataSource.dataSelection[0].bidoProfileDTO &&
            this.profileTableDataSource.dataSelection[0].bidoProfileDTO.profileId)
      );
      this.profileTableDataSource.dataSrc[profileIndex].families = [...families];
      this.profileTableDataSource.update();
      this.familiesTableDataSource.setData(families);
      this.familiesTableDataSource.update();
    }
  }

  public onEditOperators(operators: BidoFunctionTypeDTO[]): void {
    if (!!this.profileTableDataSource.dataSrc) {
      const profileIndex = this.profileTableDataSource.dataSrc.findIndex(
        (profiles) =>
          (!!profiles.bidoProfileDTO && profiles.bidoProfileDTO.profileId) ===
          (!!this.profileTableDataSource.dataSelection[0].bidoProfileDTO &&
            this.profileTableDataSource.dataSelection[0].bidoProfileDTO.profileId)
      );
      this.profileTableDataSource.dataSrc[profileIndex].operators = [...operators];
      this.profileTableDataSource.update();
      this.operatorsTableDataSource.setData(operators);
      this.operatorsTableDataSource.update();
    }
  }

  public saveUsers(): void {
    this.userProfileMappedAddedList = [];
    this.profileTableDataSource.dataSrc.forEach((profile) => {
      const userProfileMapped: UserProfileMappedFunctions = {
        bidoProfileDTO: profile.bidoProfileDTO,
        sites: profile.sites,
        operators: profile.operators,
        families: profile.families
      };

      this.userProfileMappedAddedList.push(userProfileMapped);
    });

    if (
      this.generalTabFieldData &&
      this.generalTabFieldData.firstname &&
      this.generalTabFieldData.lastname &&
      this.generalTabFieldData.login &&
      (!this.isCreateOpenMode || this.generalTabFieldData.password)
    ) {
      if (this.generalTabFieldData.password === this.confirmPassword) {
        const saveId: UserProfileFunctionDTO = {
          bidoUserDTO: {
            userId: this.generalTabFieldData.userId,
            firstname: this.generalTabFieldData.firstname,
            lastname: this.generalTabFieldData.lastname,
            login: this.generalTabFieldData.login,
            password: this.generalTabFieldData.password,
            userComment: this.generalTabFieldData.userComment,
            eMail: this.generalTabFieldData.eMail,
            lastLoginDate: this.generalTabFieldData.lastLoginDate,
            lastLogoutDate: this.generalTabFieldData.lastLogoutDate,
            lastPasswordChangeDate: this.generalTabFieldData.lastPasswordChangeDate,
            validityDate: this.generalTabFieldData.validityDate,
            customerCode: this.generalTabFieldData.company
              ? this.generalTabFieldData.company.split('-')[1]
              : this.generalTabFieldData.company,
            employeeId: this.generalTabFieldData.employee,
            isUserService: this.generalTabFieldData.isUserService,
            isUserMobile: this.generalTabFieldData.isUserMobile,
            company: this.generalTabFieldData.company,
            employee: this.generalTabFieldData.employee,
            email: this.generalTabFieldData.email
          },
          bidoCustomerDTO: this.generalTabFieldData.company
            ? {
                customerCode: this.generalTabFieldData.company
                  ? this.generalTabFieldData.company.split('-')[1]
                  : this.generalTabFieldData.company
              }
            : undefined,
          bidtCompanyDTO: this.generalTabFieldData.company
            ? {
                companyCode: this.generalTabFieldData.company
                  ? this.generalTabFieldData.company.split('-')[1]
                  : this.generalTabFieldData.company,
                companyName: this.companyName
              }
            : undefined,
          userProfileListDTO: this.userProfileMappedAddedList,
          bidoMandantUserDTO: this.clientTableDataSource.data
        };

        if (this.isCreateOpenMode) {
          this.showSaveSpinner = true;
          this.usersFormService
            .addUsersForm(saveId)
            .pipe(
              finalize(() => {
                this.showSaveSpinner = false;
              })
            )
            .subscribe((result) => {
              if (!!this.generalTabFieldData) {
                this.generalTabFieldData.userId = result;
              }

              const context = `${this.generalTabFieldData.firstname} ${this.generalTabFieldData.lastname}`;
              this.updateOpenMode(ComponentOpenMode.Read);
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.reloadUsers();
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveUsers'));
            });
        } else {
          this.showSaveSpinner = true;
          this.usersFormService
            .updateUsersForm(saveId)
            .pipe(
              finalize(() => {
                this.showSaveSpinner = false;
              })
            )
            .subscribe(
              (result) => {
                const context = `${this.generalTabFieldData.firstname} ${this.generalTabFieldData.lastname}`;
                this.updateOpenMode(ComponentOpenMode.Read);
                this.displayComponentContext(context, this.isCreateOpenMode);
                this.reloadUsers();
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveUsers'));
              },
              (error) => {
                const httpError = error as HttpErrorResponse;
                if (!!httpError.error && !!httpError.error.errorDesc) {
                  const errorMessage: string = httpError.error.errorDesc as string;
                  if (errorMessage.startsWith(UsersFormComponent.CANT_DELETE_OWN_ADMIN_PROFILE)) {
                    this.messageService.showErrorMessage(
                      this.getTranslateKey(UsersFormComponent.CANT_DELETE_OWN_ADMIN_PROFILE)
                    );
                  } else if (errorMessage.startsWith(UsersFormComponent.CANT_ASSOCIATE_MANDANT_TO_USER)) {
                    this.messageService.showErrorMessage(
                      this.getTranslateKey(UsersFormComponent.CANT_ASSOCIATE_MANDANT_TO_USER)
                    );
                  } else {
                    this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveUsers'));
                  }
                }
              }
            );
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnPassword'));
      }
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
    this.userProfileMappedAddedList = [];
    this.profileTableDataSource.dataSelection = [];
    this.profileFunctions = {};
    this.enableProfileEdit = false;
    this.enableFamilyEdit = false;
    this.enableOperatorEdit = false;
    this.enableSiteEdit = false;
  }

  /**************************************************************************
   * General tab
   *************************************************************************/

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }
  private loadCompany(): void {
    this.usersFormService.companyMapping().subscribe((result) => {
      if (!!result && !!result.companyTextMap) {
        for (const property in result.companyTextMap) {
          if (result.companyTextMap.hasOwnProperty(property)) {
            const companyLabelValue: LabelValue<string> = {
              label: result.companyTextMap[property],
              value: property
            };
            this.company.push(companyLabelValue);
          }
        }
        this.companyDetails = result;
        if (
          !!this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).company
        ) {
          this.loadEmployee();
        }
      }
    });
  }
  public loadEmployee(): void {
    if (!!this.companyDetails.bidtCompanyData) {
      if (!!this.generalTabFieldData && !!this.generalTabFieldData.company) {
        this.newLocal = this.generalTabFieldData.company;
      } else if (!!this.generalTabFieldData && this.generalTabFieldData.company === null) {
        this.generalTabFieldData.employee = undefined;
        this.newLocal = '';
        this.employee = [];
      } else {
        if (!!this.componentData.objectId) {
          this.newLocal = this.serializationService.deserialize(this.componentData.objectId).company;
          this.newLocal = this.newLocal.split('-')[0];
          this.newLocal = this.newLocal.replace(/[\[\]]+/g, '').replace(/\s+/g, '-');
        } else {
          super.throwUnboundLocalError('loadEmployee', 'this.componentData.objectId');
        }
      }
      this.companyName = undefined;
      const searchInput = this.companyDetails.bidtCompanyData[this.newLocal];
      if (!!searchInput) {
        this.searchObject = {
          companyId: searchInput.id,
          mandant: searchInput.mandant
        };
        this.companyName = searchInput.companyName;

        this.usersFormService.findEmployeeByCompany(this.searchObject).subscribe((result: BidtEmployeeDTO[]) => {
          if (!!result) {
            this.employee = [];
            result.forEach((element) => {
              if (!!element.id) {
                const employeeLabelValue: LabelValue<string> = {
                  label:
                    (element.employeeFirstName != undefined ? element.employeeFirstName : '') +
                    (element.employeeLastName != undefined ? ' ' + element.employeeLastName : ''),
                  value: element.id.toString()
                };
                this.employee.push(employeeLabelValue);
                if (!!this.generalTabFieldData) {
                  this.generalTabFieldData.employeeId = this.generalTabFieldData.employee;
                }
              } else {
                super.throwUnboundLocalError('loadEmployee', 'element.id');
              }
            });
          }
        });
      }
    } else {
      super.throwUnboundLocalError('loadEmployee', 'this.companyDetails.bidtCompanyData');
    }
  }
  public onCompanyChanged() {
    if (!!this.generalTabFieldData) {
      this.generalTabFieldData.employee = undefined;
    }
    this.loadEmployee();
  }
}
