import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { FormService } from '../form.service';

interface MovementCardInterface {
  index?: number;
  mvtStockCode?: string;
  smoStatus?: string;
  pn?: string;
  pnCode?: string;
  sn?: string;
  whCategory?: string;
  qty?: string;
  image?: string;
  inlocalisation?: string;
  sbNumber?: string;
  color?: string;
  container?: string;
  type?: string;
  etat?: string;
  stock?: string;
  volume?: string;
  height?: string;
  width?: string;
  diameter?: string;
  weight?: string;
  additionalRemarks?: string;
  articleDesignation?: string;
}

@Component({
  selector: 'aw-show-movement-card-view',
  templateUrl: './show-movement-card-view.component.html',
  styleUrls: ['./show-movement-card-view.component.scss']
})
export class ShowMovementCardViewComponent extends PageComponent<PageComponentData> implements OnInit {
  @Input() public stockMovementList: MovementCardInterface[];
  @Output() public onChangeProgression: EventEmitter<number>;

  public stockMovementListClone: MovementCardInterface[];
  public movementsCardDataSource: TableDataSource<MovementCardInterface>;
  public resultTableCols: TableColumn[];
  public statusList: LabelValue<string>[];
  public warehouseList: LabelValue<string>[];
  public selectedWarehouse: string;
  public selectedStatus: string;

  public filtersVisible: boolean;
  public showContainerDialog: boolean;
  public selectedStock: MovementCardInterface;
  public selectedAssetRowIndex: number | undefined;

  public progressionChecked: boolean;
  public progressionRequest: boolean;
  public progressionPlanned: boolean;
  public progressionReleased: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly stockMovementsFormService: FormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.onChangeProgression = new EventEmitter<number>();
    this.initMovementCardDataSource();
  }

  public getComponentName(): string {
    return 'ShowMovementCardViewComponent';
  }

  public ngOnInit(): void {
    this.selectedStock = {};
    this.statusList = this.stockMovementsFormService.loadStatus();
    this.initMovementCardDataSource();
    this.stockMovementList.forEach((item, index) => {
      item.index = index + 1;
    });
    this.stockMovementListClone = [...this.stockMovementList];
    this.selectedStock = this.stockMovementList[0];
  }

  /*******************************
   * Change Status
   *******************************/
  public onChangeStatus() {
    if (!!this.selectedStatus) {
      this.stockMovementList = this.stockMovementListClone.filter((res) => res.smoStatus === this.selectedStatus);
    } else {
      this.stockMovementList = [...this.stockMovementListClone];
    }
  }

  /*******************************
   * Select Container
   *******************************/
  public selectContainter(stock: MovementCardInterface) {
    this.selectedStock = stock;
    if (this.selectedStock.smoStatus === 'Planned') {
      this.progressionPlanned = true;
    }
    this.showContainerDialog = true;
  }

  public containerAddedEvent(ev: string) {
    const index = this.stockMovementList.findIndex(
      (res) => res.sn === this.selectedStock.sn && res.pn === this.selectedStock.pn
    );

    if (!!this.stockMovementList[index]) {
      this.stockMovementList[index].container = ev;
    }
  }

  public calculateProgression() {
    const testVal = 13;
    this.onChangeProgression.emit(testVal);
    if (this.progressionReleased) {
      this.progressionChecked = true;
      this.progressionPlanned = true;
      this.progressionRequest = true;
    } else {
      this.progressionChecked = false;
      this.progressionPlanned = false;
      this.progressionRequest = false;
    }
  }

  private initMovementCardDataSource(): void {
    this.resultTableCols = [
      {
        field: 'sequence',
        alignment: 'left'
      },
      {
        field: 'movementType',
        alignment: 'left'
      },
      {
        field: 'article',
        alignment: 'left'
      },
      {
        field: 'qty',
        alignment: 'left'
      },
      {
        field: 'empl',
        alignment: 'left'
      },
      {
        field: 'status',
        alignment: 'left'
      }
    ];
  }

  public onAssetRowUnselect() {
    this.selectedAssetRowIndex = undefined;
  }

  public onAssetRowSelect(rowIndex: number) {
    this.selectedAssetRowIndex = rowIndex;
  }
}
