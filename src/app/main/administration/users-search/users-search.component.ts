import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoUserSearchInput } from '../../../shared/types/api-input-types/administration-users/bido-user-search-input.interface';
import { BidoCompanyTypeDTO } from '../../../shared/types/api-types/bido-company-type-dto.interface';
import { BidoUserDTOId } from '../../../shared/types/api-types/bido-user-dto-id.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { StringUtils } from '../../../shared/utils/string-utils';
import { UsersFormService } from '../users-form/users-form.service';

import { UsersSearchService } from './users-search.service';

interface UserCustomExport {
  lastname: string;
  firstname: string;
  login: string;
  company?: string;
  employee?: string;
  userComment?: string;
  validityDate?: string;
  lastLoginDate?: string;
  logIN?: string;
  lastLogoutDate?: string;
  lastPasswordChangeDate?: string;
  isUserService?: boolean;
  isUserMobile?: boolean;
}
interface UsersCustomDTO extends UserCustomExport {
  userId: string;
  _expand?: boolean | false;
  _id: string;
}

@Component({
  selector: 'aw-users-search',
  styleUrls: ['./users-search.component.scss'],
  templateUrl: './users-search.component.html'
})
export class UsersSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly USERS_TABLE_EXPORT_NAME: string = 'users-list';

  private static readonly CANT_DELETE_OWN_ACCOUNT: string = 'cantDeleteOwnAccount';
  public searchObject: BidoUserSearchInput;
  public showAdvancedCriteria: boolean;
  public company: LabelValue<string>[];
  public companyName?: string | undefined;
  public userTableDataSource: TableDataSource<UsersCustomDTO>;
  public isNavigationOverlayVisible: boolean;
  public enableUserOpen: boolean;
  public enableUserUpdate: boolean;
  public enableUserDelete: boolean;
  public showUserProfileForm: boolean;
  public userNameDropDown: LabelValue<string>[];
  public editSelectedUsers: UsersCustomDTO[];
  private newLocal: string;
  public companyDetails: BidoCompanyTypeDTO;
  public isLoading: boolean;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly usersSearchService: UsersSearchService,
    private readonly usersFormService: UsersFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.companyName = undefined;
    this.company = [];
    this.userNameDropDown = [];
    this.newLocal = '';
    this.showAdvancedCriteria = false;
    this.isNavigationOverlayVisible = false;
    this.showUserProfileForm = false;
    this.enableUserOpen = true;
    this.enableUserUpdate = true;
    this.enableUserDelete = true;
    this.isLoading = false;
    this.resetSearchCriteria();
    this.initUserTableDataSource();
    this.searchObject = { bidoUserDTO: {}, companyName: undefined };
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_USERS_SEARCH;
  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.loadCompany();
    this.displayComponentContext('global.search', true);
  }

  public showNavigationOverlay(): void {
    this.isNavigationOverlayVisible = true;
  }

  public hideNavigationOverlay(): void {
    this.isNavigationOverlayVisible = false;
  }

  public onRowSelect() {
    this.enableUserDelete = !this.userTableDataSource.hasData;
    this.enableUserOpen = !this.userTableDataSource.hasData;
    this.enableUserUpdate = !this.userTableDataSource.hasData || this.userTableDataSource.dataCount > 1;
  }

  public updateProfileRights(): void {
    this.showUserProfileForm = true;
    this.editSelectedUsers = this.userTableDataSource.dataSelection;
  }

  public deleteSelectedUsers(): void {
    const confirmMessageKey =
      this.userTableDataSource.dataCount > 1 ? 'confirmDeleteSelectedUsers' : 'confirmDeleteSelectedUser';

    const bidoUserDTOId: BidoUserDTOId[] = [];
    this.userTableDataSource.dataSelection.forEach((users) => {
      if (users && users.userId) {
        const userId: BidoUserDTOId = {
          userId: users.userId
        };
        bidoUserDTOId.push(userId);
      }
    });
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.usersSearchService.removeUser(bidoUserDTOId).subscribe(
          () => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteUser'));
            this.userTableDataSource.dataSelection = [];
            this.loadUsersData();
          },
          (error) => {
            const httpError = error as HttpErrorResponse;
            if (!!httpError.error && !!httpError.error.errorDesc) {
              const errorMessage: string = httpError.error.errorDesc as string;
              if (errorMessage.startsWith(UsersSearchComponent.CANT_DELETE_OWN_ACCOUNT)) {
                this.messageService.showErrorMessage(
                  this.getTranslateKey(UsersSearchComponent.CANT_DELETE_OWN_ACCOUNT)
                );
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteUser'));
              }
            }
          }
        );
      }
    });
  }

  public exportTable(): void {
    const usersExportData: (UserCustomExport | undefined)[] = this.userTableDataSource.dataSrc.map((user) => {
      if (!!user) {
        const usersRowExport: UserCustomExport = {
          firstname: user.firstname,
          lastname: user.lastname,
          login: user.login,
          company: user.company,

          employee: user.employee,
          userComment: user.userComment,
          validityDate: user.validityDate,
          lastLoginDate: user.lastLoginDate,
          logIN: user.logIN,
          lastLogoutDate: user.lastLogoutDate,
          lastPasswordChangeDate: user.lastPasswordChangeDate,
          isUserService: user.isUserService,
          isUserMobile: user.isUserMobile
        };

        return usersRowExport;
      } else {
        super.throwUnboundLocalError('exportTable', 'user');
      }
    });
    if (!!this.componentData) {
      this.exportService.toExcel(
        usersExportData,
        UsersSearchComponent.USERS_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  public openNewUser(): void {
    this.openUser(undefined, ComponentOpenMode.Create);
  }

  public openSelectedUsers(): void {
    this.userTableDataSource.dataSelection.forEach((user) => {
      if (!!user) {
        if (StringUtils.isNullOrEmpty(user.login)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
        } else {
          this.openUser(user, ComponentOpenMode.Read);
        }
      }
    });
  }

  public resetSearchCriteria(): void {
    this.searchObject = {
      bidoUserDTO: {},
      companyName: undefined
    };
  }

  public search(): void {
    this.loadUsersData();
  }

  public toggleUserRowExpand(row: UsersCustomDTO): void {
    row._expand = !row._expand;
  }

  private loadUsersData(): void {
    if (this.searchObject.bidoUserDTO) {
      if (!!this.companyDetails && !!this.companyDetails.companyTextMap && !!this.searchObject.companyName) {
        this.newLocal = this.searchObject.companyName;
        const searchInput = this.companyDetails.companyTextMap[this.newLocal];
        this.companyName = searchInput.split('-')[1];
      }
      this.isLoading = true;
      const searchObject: BidoUserSearchInput = {
        bidoUserDTO: {
          firstname: this.searchObject.bidoUserDTO.firstname,
          lastname: this.searchObject.bidoUserDTO.lastname,
          login: this.searchObject.bidoUserDTO.login
        },
        companyName: this.companyName
      };
      this.usersSearchService.findUsersBySearchCriteria(searchObject).subscribe((results) => {
        this.isLoading = false;
        const usersTable = results.map((res, i) => {
          const logIn = res.lastLoginDate != undefined ? new Date(res.lastLoginDate).getTime() : 0;
          const logOut = res.lastLogoutDate != undefined ? new Date(res.lastLogoutDate).getTime() : 0;
          const userRow: UsersCustomDTO = {
            userId: res.userId || '',
            lastname: res.lastname || '',
            firstname: res.firstname || '',
            login: res.login || '',
            company: res.company,
            employee: res.employee,
            userComment: res.userComment,
            validityDate: this.dateService.dateToString(res.validityDate),
            lastLoginDate: this.dateService.dateWithHourMinSecToString(res.lastLoginDate),
            logIN: logIn > logOut ? 'green' : 'red',
            lastLogoutDate: this.dateService.dateWithHourMinSecToString(res.lastLogoutDate),
            lastPasswordChangeDate: this.dateService.dateWithHourMinSecToString(res.lastPasswordChangeDate),
            isUserService: res.isUserService,
            isUserMobile: res.isUserMobile,
            _id: i.toString()
          };

          return userRow;
        });
        this.userTableDataSource.setData(usersTable);
        this.userTableDataSource.dataSelection = [];
        this.userTableDataSource.update();
        this.companyName = undefined;
      });
    } else {
      super.throwUnboundLocalError(
        'search',
        'this.searchObject.companyName && this.companyDetails.companyTextMap && this.searchObject.bidoUserDTO'
      );
    }
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
      }
    });
  }

  private openUser(objectId: UsersCustomDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_USERS_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private initUserTableDataSource(): void {
    this.userTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'lastname',
          translateKey: this.getTranslateKey('lastname'),
          width: '10%'
        },
        { field: 'firstname', translateKey: this.getTranslateKey('firstname'), width: '10%' },
        {
          field: 'login',
          translateKey: this.getTranslateKey('login'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        },
        {
          field: 'company',
          translateKey: this.getTranslateKey('company'),
          alignment: ColumnAlignment.CENTER,
          width: '25%'
        },
        { field: 'validityDate', translateKey: this.getTranslateKey('validityDate'), width: '12%' },
        { field: 'lastLoginDate', translateKey: this.getTranslateKey('lastLoginDate'), width: '15%' },
        { field: 'logIN', translateKey: this.getTranslateKey('logIN'), alignment: ColumnAlignment.CENTER, width: '8%' },
        { field: 'isUserService', translateKey: this.getTranslateKey('isUserService'), width: '5%' },
        { field: 'isUserMobile', translateKey: this.getTranslateKey('isUserMobile'), width: '5%' }
      ],
      data: []
    });
  }
}
