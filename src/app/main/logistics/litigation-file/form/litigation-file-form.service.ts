import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ActionRow } from '../shared/action-row.interface';
import { ContributorRow } from '../shared/contributor-row.interface';
import { LitigationElementInput } from '../shared/litigation-element-input.interface';

interface DefaultInputRow {
  type: string;
  category: string;
  comments: string;
}
@Injectable()
export class LitigationFileFormService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }

  public findContributors(): Observable<ContributorRow[]> {
    const simpleObservable = new Observable<ContributorRow[]>((observer) => {
      const result: ContributorRow[] = [
        {
          role: 'Createur',
          login: 'John McClane'
        },
        {
          role: 'Responsable Traitement',
          login: 'Seth Gecko'
        },
        {
          role: 'Controteur Qualte',
          login: 'Paul Avery'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public getDefaultListData() {
    const results: DefaultInputRow[] = [
      {
        type: 'Détérioration',
        category: 'Qualitatif',
        comments: 'Crique constantee'
      },
      {
        type: 'Détérioration',
        category: 'Qualitatif',
        comments: 'Enforcement constantee'
      }
    ];

    return results;
  }

  public findLitigationMaterials(): Observable<LitigationElementInput> {
    const simpleObservable = new Observable<LitigationElementInput>((observer) => {
      const result: LitigationElementInput = {
        elementType: 'Physical material',
        pn: '0055215-100-01',
        designation: '### DESIGNATION DU PN ###',
        sn: '12767612-11',
        status: 'Indisponible',
        owner: 'DMA6',
        siteCode: 'BA-118',
        siteName: 'Monte-de-marsan',
        whName: 'DRSU',
        zone: 'En Reception',
        location: 'N/A',
        employee: 'empl.'
      };

      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public findActions(): Observable<ActionRow[]> {
    const simpleObservable = new Observable<ActionRow[]>((observer) => {
      const result: ActionRow[] = [
        {
          item: '01',
          actionName: 'Transferer en Quarantaine',
          comment: '',
          action: false,
          contributor: 'John McClane',
          role: 'Createur',
          status: 'Lance',
          since: '0 jours',
          stockType: 'Movement Stock'
        },
        {
          item: '02',
          actionName: 'Confirmer la declaration de litige',
          comment: '',
          action: false,
          contributor: 'Seth Gecko',
          role: 'Responsable Traitement',
          status: 'Planifie',
          stockType: ''
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadLitigationTypes(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Deterioration',
          value: 'Deterioration'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadLitigationElementTypes(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Material Connu',
          value: 'Material Connu'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadContributorList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Travis BICKLE',
          value: 'Travis BICKLE'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadCategoryList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Order de Transfert',
          value: 'Order de Transfert'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadObjectTypeList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Envoi NTI2',
          value: 'Envoi NTI2'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadRecipientList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadCarrierList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadActionPlanList(): Observable<LabelValue<string>[]> {
    const simpleObservable = new Observable<LabelValue<string>[]>((observer) => {
      const result: LabelValue<string>[] = [
        {
          label: 'Renvoi du Materiel au NTI3 pour reparation',
          value: 'Renvoi du Materiel au NTI3 pour reparation'
        },
        {
          label: 'Renvoi du Materiel au Fournisseur',
          value: 'Renvoi du Materiel au Fournisseur'
        },
        {
          label: 'Elimination du Materiel sans Test',
          value: 'Elimination du Materiel sans Test'
        },
        {
          label: 'Declassement du Materiel sans Test',
          value: 'Declassement du Materiel sans Test'
        },
        {
          label: 'Envoi du Materiel au NTI2 pour Test',
          value: 'Envoi du Materiel au NTI2 pour Test'
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }

  public loadMoreActions(): Observable<ActionRow[]> {
    const simpleObservable = new Observable<ActionRow[]>((observer) => {
      const result: ActionRow[] = [
        {
          item: '03',
          actionName: 'Envoyer Materiel au NTI2',
          comment: '',
          action: false,
          contributor: 'Travis BICKLE',
          role: 'Logisticien',
          status: 'Lance',
          since: '0 jours',
          objectAssociates: '',
          stockType: '',
          actionValidationDate: new Date(),
          expectedDeliveryDate: new Date(),
          category: 'Order de Transfert',
          type: 'Envoi NTI2'
        },
        {
          item: '04',
          actionName: 'Receptionner Materiel au NTI2',
          comment: '',
          action: false,
          contributor: '',
          role: 'Logisticien',
          status: 'Planifie',
          objectAssociates: '',
          stockType: ''
        },
        {
          item: '05',
          actionName: 'Analyser Resultat Test NTI2',
          comment: '',
          action: false,
          contributor: '',
          role: 'Technicien',
          status: 'Planifie',
          objectAssociates: '',
          stockType: ''
        }
      ];
      observer.next(result);
      observer.complete();
    });

    return simpleObservable;
  }
}
