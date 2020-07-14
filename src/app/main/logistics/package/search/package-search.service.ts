import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';

@Injectable()
export class PackageSearchService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }

  public getPackages() {
    return [
      {
        package: 'PK4000432',
        description: 'Caisse en Bois',
        receiptFolder: 'RF8541980',
        receptionDescription: 'Lot de Deploiement',
        status: 'Valide',
        shippedDate: '12/12/2019',
        receiptDate: '14/12/2019',
        situation: 'Immediate'
      },
      {
        package: 'PK4000918',
        description: 'Palette',
        receiptFolder: 'RF8548515',
        receptionDescription: 'Retour de Reparation',
        status: 'Attente Prise en Charge',
        shippedDate: '12/12/2019',
        receiptDate: '13/12/2019',
        situation: 'Urgent'
      },
      {
        package: 'PK4000545',
        description: 'Conteneur Specialise',
        receiptFolder: 'RF7763901',
        receptionDescription: 'Reception Material Neuf',
        status: 'En Cours',
        shippedDate: '12/12/2019',
        receiptDate: '21/12/2019',
        situation: 'Routine'
      }
    ];
  }
}
