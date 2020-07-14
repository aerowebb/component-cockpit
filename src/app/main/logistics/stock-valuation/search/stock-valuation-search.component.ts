import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SearchInputStockValuation } from '../../../../shared/types/api-input-types/bidt-stock-mvt/search-input-stock-valuation.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { StockValuationSearchService } from './stock-valuation-search.service';

@Component({
  selector: 'aw-stock-valuation-search',
  templateUrl: './stock-valuation-search.component.html',
  styleUrls: ['./stock-valuation-search.component.scss']
})
export class StockValuationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: SearchInputStockValuation;

  public warehouses: LabelValue<string>[];
  public methods: LabelValue<number>[];

  public showQuickSearchMaterialPopup: boolean;

  public currLang: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly translateService: TranslateService,
    private readonly stockValuationSearchService: StockValuationSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();

    this.warehouses = [];

    this.currLang = this.translateService.currentLang;

    this.loadMethodDropdown();

    this.showQuickSearchMaterialPopup = false;

    this.loadWarehouses();
  }

  public init(): void {
    this.searchObject = {
      date: new Date(),
      flag: 0
    };
  }

  public loadMethodDropdown(): void {
    const method1 = `${this.getComponentName()}.methodWeightedAverage`;
    const method2 = `${this.getComponentName()}.methodFifo`;

    this.translateService.get([method1, method2]).subscribe((results) => {
      this.methods = [{ label: results[method1], value: 0 }, { label: results[method2], value: 1 }];
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_VALUATION_SEARCH;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  // opens material popup in search criteria
  public quickSearchMaterial(): void {
    this.showQuickSearchMaterialPopup = true;
  }

  // loads warehouse dropdown
  public loadWarehouses(): void {
    this.stockValuationSearchService.findAll().subscribe((results) => {
      results.forEach((res) => {
        let warehouse: LabelValue<string> = { label: '', value: '' };

        warehouse = {
          label: `${res.whCode} - ${res.whName}`,
          value: `${res.wareHouseId}`
        };
        this.warehouses.push(warehouse);
      });
    });
  }

  // calculates stocks on the basis of search criteria
  public calculate(): void {
    // Check for date. No check for method required as some value is always selected in that dropdown.
    if (!!this.searchObject.date) {
      // transfer to stock valuation form
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_STOCK_VALUATION_FORM,
        openMode: ComponentOpenMode.Read
      };
      const objectId = this.searchObject;
      if (!!objectId) {
        data.objectId = this.serializationService.serialize(objectId);
      }
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('selectDate'));
    }
  }

  public setSelectedMaterial(event: BirePnDTO) {
    this.showQuickSearchMaterialPopup = false;
    this.searchObject.materialCode = event.pnCode;
  }

  public resetSearchCriteria(): void {
    this.init();
  }
}
