import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { LangConstants } from '../shared/constants/lang-constants';
import { AppVersionService } from '../shared/services/app-version.service';
import { MessageService } from '../shared/services/message.service';
import { SessionService } from '../shared/services/session.service';
import { ChallengeDTO } from '../shared/types/api-types/challenge-dto.interface';
import { UserConnectionDTO } from '../shared/types/api-types/user-connection-dto.interface';
import { ListUtils } from '../shared/utils/list-utils';
import { SelectItemUtils } from '../shared/utils/select-item-utils';
import { StringUtils } from '../shared/utils/string-utils';

import { LoginService } from './login.service';

@Component({
  animations: [
    trigger('loginContainerState', [
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      transition('hidden => visible', [animate('1000ms')])
    ]),
    trigger('mainContainerState', [
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      transition('hidden => visible', [animate('1000ms')])
    ])
  ],
  selector: 'aw-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private static readonly LOGIN_CONTAINER_STATE_TIMEOUT: number = 1000;
  private static readonly MAIN_CONTAINER_STATE_TIMEOUT: number = 500;

  public clientList: SelectItem[];
  public languageList: SelectItem[];
  public login: string;
  public password: string;
  public selectedClient: string;
  public selectedLanguage: string;

  // Animations
  public loginContainerState: string;
  public mainContainerState: string;

  public constructor(
    public appVersionService: AppVersionService,
    private readonly loginService: LoginService,
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    private readonly translateService: TranslateService
  ) {
    this.clientList = [];
    this.login = '';
    this.password = '';
    this.selectedClient = '';
    this.selectedLanguage = this.translateService.currentLang;

    this.sessionService.clear();
    this.loadClientList();
    this.setLanguageList();

    // Animations
    this.loginContainerState = 'hidden';
    this.mainContainerState = 'hidden';
    this.setupAnimations();
  }

  @HostListener('document:keypress', ['$event'])
  public onClick(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.connect();
    }
  }

  public connect(): void {
    if (
      !StringUtils.isEmpty(this.selectedClient) &&
      !StringUtils.isEmpty(this.login) &&
      !StringUtils.isEmpty(this.password)
    ) {
      const connectionParams: ChallengeDTO = {
        login: this.login,
        password: this.password,
        client: this.selectedClient,
        language: this.translateService.currentLang
      };

      this.loginService.connect(connectionParams).subscribe((connectionData: UserConnectionDTO) => {
        this.sessionService.registerUser(connectionData);
        this.sessionService.useLang(this.selectedLanguage).subscribe({
          complete: () => {
            this.sessionService.navigateToMain();
            this.messageService.clear();
          }
        });
      });
    }
  }

  public updateLanguage(): void {
    this.translateService.use(this.selectedLanguage);
  }

  private loadClientList(): void {
    this.loginService.getClients().subscribe(
      (results) => {
        this.clientList = !!results ? SelectItemUtils.fromKeyValues(results) : [];
        this.selectedClient = ListUtils.isEmpty(this.clientList) ? '' : this.clientList[0].value;
      },
      (err) => this.messageService.showErrorMessage('ERROR.API_SERVER_UNREACHABLE')
    );
    this.sessionService.initSpecificClient();
  }

  private setLanguageList(): void {
    const englishKey = 'global.english';
    const frenchKey = 'global.french';
    this.translateService.get([englishKey, frenchKey]).subscribe((results) => {
      if (!!results) {
        this.languageList = [
          { label: results[englishKey], value: LangConstants.ENGLISH_CODE },
          { label: results[frenchKey], value: LangConstants.FRENCH_CODE }
        ];
      }
    });
  }

  private setupAnimations(): void {
    setTimeout(() => {
      this.loginContainerState = 'visible';
    }, LoginComponent.LOGIN_CONTAINER_STATE_TIMEOUT);

    setTimeout(() => {
      this.mainContainerState = 'visible';
    }, LoginComponent.MAIN_CONTAINER_STATE_TIMEOUT);
  }
}
