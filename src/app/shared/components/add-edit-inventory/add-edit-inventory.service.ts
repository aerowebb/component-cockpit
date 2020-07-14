import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CockpitComponentApi } from '../../api/cockpit-component.api';
import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { TaskManagementApi } from '../../api/task-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FetchSentenceDecisionInputDTO } from '../../types/api-input-types/maintenance-component-cockpit/fetch-sentence-decision-input-dto.interface';
import { GetPartNumberStructureOutputDTO } from '../../types/api-output-types/get-part-number-structure-output-dto.interface';
import { IWBFindingsCustom } from '../../types/api-output-types/maintenance-component-cockpit/iwb-findings-custom.interface';
import { SentenceAndDecisionListOutput } from '../../types/api-output-types/maintenance-component-cockpit/sentence-and-decision-list-output.interface';
import { DamagesWithItemVersionOutput } from '../../types/api-output-types/task-management/damages-with-item-version-output.interface';
import { TaskAssociatedItemOutput } from '../../types/api-output-types/task-management/task-associated-item-output.interface';
import { BireItemForWorkscopeTreeDTO } from '../../types/api-output-types/workscope-component/bire-item-for-workscope-tree-dto.interface';
import { BireItemDTOId } from '../../types/api-types/bire-item-dto-id.interface';
import { BireItemVersionDTOId } from '../../types/api-types/bire-item-version-dto-id.interface';
import { BireLocalisationItemDTO } from '../../types/api-types/bire-localisation-item-dto.interface';
import { BirePnDTOId } from '../../types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { BireTaskDTOId } from '../../types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../types/api-types/bire-task-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

interface DamagesWithItemVersionOutputCustom {
  damageCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  versionNumber?: string;
  damageDescription?: string;
  unitCode?: string;
}

@Injectable()
export class AddEditInventoryService extends AbstractAwHttpService {
  // Damages
  public damagesList: DamagesWithItemVersionOutputCustom[];

  // Localisation
  public localisationList: BireLocalisationItemDTO[];

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly cockpitComponentApi: CockpitComponentApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public fetchSentenceList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getSentenceList);
  }

  public fetchDecisionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getDecisionList);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public getPartNumberStructure(bireItemDTOId: BireItemDTOId): Observable<GetPartNumberStructureOutputDTO[]> {
    return super.post<BireItemDTOId, GetPartNumberStructureOutputDTO[]>(
      this.productStructureManagementApi.getPartNumberStructure,
      bireItemDTOId
    );
  }

  public findBireDamageItemsByItemVersionItemScreen(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<DamagesWithItemVersionOutput[]> {
    return super.post<BireItemVersionDTOId, DamagesWithItemVersionOutput[]>(
      this.taskManagementApi.findBireDamageItemsByItemVersionItemScreen,
      bireItemVersionDTOId
    );
  }

  public findBireLocalisationItemsByItemVersion(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<BireLocalisationItemDTO[]> {
    return super.post<BireItemVersionDTOId, BireLocalisationItemDTO[]>(
      this.taskManagementApi.findBireLocalisationItemsByItemVersion,
      bireItemVersionDTOId
    );
  }

  public findBireTask(input: BireTaskDTOId): Observable<BireTaskDTO> {
    return super.post<BireTaskDTOId, BireTaskDTO>(this.taskManagementApi.findBireTask, input);
  }

  public findBireItemVersions(bireItemDTOId: BireItemDTOId): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTOId, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireItemVersionsByItem,
      bireItemDTOId
    );
  }

  public findBireTaskItemsByItemTaskTab(bireItemDTOId: BireItemDTOId): Observable<TaskAssociatedItemOutput[]> {
    return super.post<BireItemDTOId, TaskAssociatedItemOutput[]>(
      this.taskManagementApi.findBireTaskItemsByItemTaskTab,
      bireItemDTOId
    );
  }

  public findBirePn(pn: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, pn);
  }

  public getSentenceAndDecisionList(input: FetchSentenceDecisionInputDTO): Observable<SentenceAndDecisionListOutput> {
    return super.post<FetchSentenceDecisionInputDTO, SentenceAndDecisionListOutput>(
      this.cockpitComponentApi.getSentenceAndDecisionList,
      input
    );
  }

  public loadFindingsList(input: FetchSentenceDecisionInputDTO): Observable<IWBFindingsCustom[]> {
    return super.post<FetchSentenceDecisionInputDTO, IWBFindingsCustom[]>(
      this.cockpitComponentApi.loadFindingsList,
      input
    );
  }

  public fetchMatchingIcon(input: FetchSentenceDecisionInputDTO[]): Observable<BireItemForWorkscopeTreeDTO[]> {
    return super.post<FetchSentenceDecisionInputDTO[], BireItemForWorkscopeTreeDTO[]>(
      this.cockpitComponentApi.fetchMatchingIcon,
      input
    );
  }
}
