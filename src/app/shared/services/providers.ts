import { AppConfigService } from './app-config.service';
import { AppVersionService } from './app-version.service';
import { BidmProjectService } from './bidm-project.service';
import { ConfirmationService } from './confirmation.service';
import { DavFieldService } from './dassault/field.service';
import { DateService } from './date.service';
import { DomHandler } from './dom-handler.service';
import { ExportService } from './export.service';
import { FavoriteService } from './favorite.service';
import { InputValidationService } from './input-validation.service';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';
import { PageService } from './page.service';
import { PropertiesService } from './properties.service';
import { SearchCriteriaService } from './search-critieria.service';
import { SerializationService } from './serialization.service';
import { SessionService } from './session.service';
import { TabService } from './tab.service';
import { UpdateHistoricService } from './update-historic.service';

export const SERVICE_PROVIDERS = [
  AppConfigService,
  AppVersionService,
  BidmProjectService,
  ConfirmationService,
  DateService,
  DavFieldService,
  DomHandler,
  ExportService,
  FavoriteService,
  InputValidationService,
  LoaderService,
  PropertiesService,
  MessageService,
  SearchCriteriaService,
  SerializationService,
  SessionService,
  TabService,
  UpdateHistoricService,
  PageService
];
