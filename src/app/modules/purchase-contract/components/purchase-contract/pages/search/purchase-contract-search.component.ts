import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ISearchCriteria } from '../../../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../../../shared/services/export.service';
import { FavoriteService } from '../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { PurchaseContractPropertyConstants } from '../../../../constants/properties/purchase-contract-property-constants';
import { FindBidtPurchaseContractsByCriteriaInput } from '../../../../dtos/input/find-bidt-purchase-contracts-by-criteria-input.interface';
import { PurchaseContractService } from '../../../../services/purchase-contract.service';
import { LabelValueHelper } from '../../../../utils/label-value-helper';

import { PurchaseContractSearchService } from './purchase-contract-search.service';

interface BidtPurchaseContractRow {
  id?: string;
  pcNumber?: string;
  pcLabel?: string;
  statusState?: string;
  pcLegalCommitment?: string;
  pcCreationDate?: Date;
}

@Component({
  selector: 'aw-purchase-contract-search',
  templateUrl: './purchase-contract-search.component.html'
})
export class PurchaseContractSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly PURCHASE_CONTRACT_TABLE_EXPORT_NAME: string = 'purchase-contract-list';

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.PURCHASE_CONTRACT_SEARCH_CRITERIA_ID;

  public purchaseContractTableDataSource: TableDataSource<BidtPurchaseContractRow>;
  public searchCriteria: FindBidtPurchaseContractsByCriteriaInput;
  public searchCriteriaCalculated: boolean;
  public searchCriteriaToSave: FindBidtPurchaseContractsByCriteriaInput;
  public searchLoading: boolean;
  public showQuickSearchMaterialPopup: boolean;
  public showAdvancedSearchCriteria: boolean;

  public statusList: LabelValue<string>[];

  public moreResults: boolean;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    public sessionService: SessionService,
    private readonly purchaseContractSearchService: PurchaseContractSearchService,
    private readonly purchaseContractService: PurchaseContractService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.statusList = [];
    this.onBeforeLoad();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_PURCHASE_CONTRACT_SEARCH;
  }

  public onBeforeLoad(): void {
    this.init();
    this.initPurchaseContractTableDataSource();
    this.loadReferentialData();
  }

  private init(): void {
    this.moreResults = false;
    this.searchCriteria = { pcCreationDateInterval: {} };
  }

  // //////////////////////////////////////////////////////////////////////////

  public deletePurchaseContract(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        this.purchaseContractTableDataSource.dataSelectionCount === 1
          ? 'confirmDeleteSelectedPurchaseContract'
          : 'confirmDeleteSelectedPurchaseContracts'
      ),
      accept: () => {
        const observables = this.purchaseContractTableDataSource.dataSelection.map((purchaseContract) => {
          this.purchaseContractSearchService.removeBidtPurchaseContract({
            id: purchaseContract.id || ''
          });
        });
        forkJoin(observables).subscribe({
          next: () => {
            this.messageService.showSuccessMessage(
              this.getTranslateKey(
                this.purchaseContractTableDataSource.dataSelectionCount === 1
                  ? 'successOnDeletePurchaseContract'
                  : 'successOnDeletePurchaseContracts'
              )
            );

            this.purchaseContractTableDataSource.deleteDataSelection();
          }
        });
      }
    });
  }

  public exportPurchaseContractTable(): void {
    this.exportService.toExcel(
      this.purchaseContractTableDataSource.sanitizedData.map((data) => {
        const idLess = { ...data };
        delete idLess.id;

        return idLess;
      }),
      PurchaseContractSearchComponent.PURCHASE_CONTRACT_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria = event.criteria as FindBidtPurchaseContractsByCriteriaInput | undefined;
    if (criteria) {
      if (!this.componentData.objectId) {
        this.searchCriteria = criteria;
      } else {
        this.componentData.objectId = undefined;
      }

      this.search();
    } else {
      this.clearSearchCriteria();
    }
  }

  public openPurchaseContract(objectId: string): void {
    this.purchaseContractSearchService.openPurchaseContract(objectId);
  }

  public openNewPurchaseContract(): void {
    this.purchaseContractSearchService.openPurchaseContract(undefined);
  }

  public openPurchaseContracts(): void {
    this.purchaseContractTableDataSource.dataSelection.forEach((purchaseContract) => {
      this.purchaseContractSearchService.openPurchaseContract(purchaseContract.id as string);
    });
  }

  private loadReferentialData(): void {
    forkJoin({
      statusList: ListUtils.isEmpty(this.statusList)
        ? this.propertiesService.getValue(PurchaseContractPropertyConstants.CONTRACT_STATUS_MAP)
        : of(this.statusList)
    }).subscribe((result) => {
      this.statusList = result.statusList;
      this.purchaseContractTableDataSource.addReferenceDataToColumn('statusState', this.statusList);
    });
  }

  public search(): void {
    this.purchaseContractTableDataSource.setData([]);
    this.moreResults = false;
    this.purchaseContractTableDataSource.isLoading = true;

    this.purchaseContractService
      .findBidtPurchaseContractByCriteria(this.searchCriteria)
      .pipe(
        finalize(() => {
          this.purchaseContractTableDataSource.isLoading = false;
          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
        })
      )
      .subscribe((purchaseContracts) => {
        if (purchaseContracts && purchaseContracts.list) {
          const purchaseContractsRows = purchaseContracts.list.map((pc) => ({
            id: pc.id,
            pcNumber: pc.pcNumber,
            pcLabel: pc.pcLabel,
            statusState: LabelValueHelper.getLabelByValue(this.statusList, pc.statusState),
            pcLegalCommitment: pc.pcLegalCommitment,
            pcCreationDate: pc.pcCreationDate
          }));
          this.moreResults = purchaseContracts.moreResults;
          this.purchaseContractTableDataSource.setData(purchaseContractsRows);
        }
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
  }

  private clearSearchCriteria(): void {
    this.searchCriteria = { pcCreationDateInterval: {} };
  }

  public saveSearchCriteriaAsked(): void {
    this.searchCriteriaToSave = this.searchCriteria;
  }

  public openMaterialDialog() {
    this.showQuickSearchMaterialPopup = true;
  }

  public setSelectedMaterial(event: BirePnDTO): void {
    this.searchCriteria.pnCode = event.pnCode;
  }

  private initPurchaseContractTableDataSource(): void {
    this.purchaseContractTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'pcNumber',
          translateKey: this.getTranslateKey('pcNumber')
        },
        {
          field: 'pcLabel',
          translateKey: this.getTranslateKey('pcLabel')
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('statusState')
        },
        {
          field: 'pcLegalCommitment',
          translateKey: this.getTranslateKey('pcLegalCommitment')
        },
        {
          field: 'pcCreationDate',
          translateKey: this.getTranslateKey('pcCreationDate')
        }
      ]
    });
  }
}
