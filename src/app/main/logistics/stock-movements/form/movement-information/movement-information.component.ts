import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { FormService } from '../form.service';

interface MovementInterface {
  number?: string;
  toRealizeThe?: string;
  status?: string;
  docNumber?: string;
  docType?: string;
  docControl?: string;
  site?: string;
  warehouse?: string;
  zone?: string;
  emplacement?: string;
  outZone?: string;
  outEmplacement?: string;
  article?: string;
  snOrLot?: string;
  qty?: string;
  etat?: string;
  materialType?: string;
  volume?: string;
  height?: string;
  width?: string;
  diameter?: string;
  weight?: string;
  additionalRemarks?: string;
  articleDesignation?: string;
}

interface DocumentInterface {
  documentNumber?: string;
  docComment?: string;
  docTye?: string;
  docExtension?: string;
  cut?: string;
  docDate?: string;
}

@Component({
  selector: 'aw-movement-information',
  templateUrl: './movement-information.component.html',
  styleUrls: ['./movement-information.component.scss']
})
export class MovementInformationComponent extends PageComponent<PageComponentData> implements OnInit {
  public formInfo: MovementInterface;
  public documentsTableDataSource: TableDataSource<DocumentInterface>;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly stockMovementsFormService: FormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return 'MovementInformationComponent';
  }

  public ngOnInit(): void {
    this.formInfo = {};

    this.initMovementTableDataSource();
    this.setPageInfo();
  }

  /**********************************
   * TABLE init
   **********************************/
  private initMovementTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'documentNumber',
          translateKey: this.getTranslateKey('documentNumber')
        },
        {
          field: 'docComment',
          translateKey: this.getTranslateKey('docComment')
        },
        {
          field: 'docTye',
          translateKey: this.getTranslateKey('docTye')
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension')
        },
        {
          field: 'cut',
          translateKey: this.getTranslateKey('cut')
        },
        {
          field: 'docDate',
          translateKey: this.getTranslateKey('docDate')
        }
      ],
      data: []
    });
  }

  private setPageInfo() {
    this.formInfo = this.stockMovementsFormService.fetchMovementInformation();
  }
}
