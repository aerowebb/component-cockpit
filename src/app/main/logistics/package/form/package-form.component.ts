import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { PackageFormService } from './package-form.service';

interface MainInfoInterface {
  number?: string;
  type?: string;
  weight?: string;
  volume?: string;
  modeOfTransport?: string;
  status?: string;
  site?: string;
  wareHouse?: string;
  shippedDate?: Date;
  receiptDate?: Date;
  reference?: string;
  receiptType?: string;
  folderStatus?: string;
  criticity?: string;
}

interface PackageItem {
  article?: string;
  designation?: string;
  SnLot?: string;
  operationalStatus?: string;
  quantity?: number;
  shippingFile?: string;
  receiptType?: string;
  criticity?: string;
}

interface PackageDocuments {
  name?: string;
  comment?: string;
  type?: string;
  extension?: string;
  cut?: string;
  expectedShipmentDate?: Date;
}

@Component({
  selector: 'aw-package-form',
  styleUrls: ['./package-form.component.scss'],
  templateUrl: './package-form.component.html'
})
export class PackageFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public mainInfo: MainInfoInterface;
  public itemTableCols: TableColumn[];
  public itemTable: PackageItem[];
  public selectedItems: PackageItem[];

  public documentTableCols: TableColumn[];
  public documentTable: PackageDocuments[];
  public selectedDocuments: PackageDocuments[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly packageFormService: PackageFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.mainInfo = {};
    this.loadTableCols();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_PACKAGE_FORM_COMPONENT;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.loadMainInformation();
    this.loadItems();
    this.loadDocuments();
  }

  private loadTableCols() {
    this.itemTableCols = [
      { field: 'article', alignment: 'left' },
      { field: 'designation', alignment: 'left' },
      { field: 'snLot', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'quantity', alignment: 'left' },
      { field: 'shippingFile', alignment: 'left' },
      { field: 'receiptType', alignment: 'left' },
      { field: 'criticity', alignment: 'left' }
    ];

    this.documentTableCols = [
      { field: 'name', alignment: 'left' },
      { field: 'comment', alignment: 'left' },
      { field: 'type', alignment: 'left' },
      { field: 'extension', alignment: 'left' },
      { field: 'cut', alignment: 'left' },
      { field: 'expectedShipmentDate', alignment: 'left' }
    ];
  }

  private loadMainInformation(): void {
    this.mainInfo = {
      number: 'PK400918',
      type: 'Palette',
      weight: '21 kg',
      volume: '8 L',
      modeOfTransport: 'Routier',
      status: 'Attente Prise en Charge',
      site: 'BA113 - Mont-de-Marsan',
      wareHouse: 'Magash General',
      shippedDate: new Date('12/12/2019'),
      receiptDate: new Date('12/13/2019'),
      reference: 'RF8548515',
      receiptType: 'Retour de Reparation',
      folderStatus: 'Planifie',
      criticity: 'Urgent'
    };
  }

  private loadItems() {
    this.itemTable = [];
    this.selectedItems = [];
    this.itemTable = this.packageFormService.getItems();
  }

  private loadDocuments(): void {
    this.documentTable = [];
    this.selectedDocuments = [];
    this.documentTable = [];
  }
}
