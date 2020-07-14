import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';

@Injectable()
export class PackageFormService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }

  public getItems() {
    return [
      {
        article: 'AB789-101',
        designation: '### DESIGNATION DU P/N ###',
        snLot: '101278-01',
        operationalStatus: 'Bon Etat',
        quantity: 1,
        shippingFile: 'SF4034987',
        receiptType: 'Retour de Reparation',
        criticity: 'Urgent'
      },
      {
        article: 'PK4000432',
        designation: '### DESIGNATION DU P/N ###',
        snLot: '101278-01',
        operationalStatus: 'A Controler',
        quantity: 1,
        shippingFile: 'SF4034987',
        receiptType: 'Retour de Reparation',
        criticity: 'Routline'
      }
    ];
  }
}
