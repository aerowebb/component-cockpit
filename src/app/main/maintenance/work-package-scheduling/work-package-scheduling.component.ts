import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { WorkSchedulingService } from '../../../shared/services/work-scheduling.service';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { WsTreeNode } from '../../../shared/types/api-types/ws-tree-node-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../shared/utils/list-utils';

@Component({
  selector: 'aw-work-package-scheduling',
  templateUrl: './work-package-scheduling.component.html'
})
export class WorkPackageSchedulingComponent extends PageComponent<PageComponentData> implements OnInit {
  public isTableLoading: boolean;
  public statusList: SelectItem[];
  public treeTable: WsTreeNode[];
  private refreshButton: (() => void) | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly workSchedulingService: WorkSchedulingService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.loadWorkPackageStatusList();
    this.registerRefreshButton();
    this.refreshButton = undefined;
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MY_JOBS_CARDS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.loadWorkSchdulingTable();
  }

  public loadWorkSchdulingTable(): void {
    this.isTableLoading = true;
    this.workSchedulingService.getWorkPackageSchedulingList().subscribe((result) => {
      if (result) {
        this.treeTable = result.filter((wp) => {
          const bidmProjectDTO = wp.data as BidmProjectDTO;

          return !(
            bidmProjectDTO.statusState === '6-clo' &&
            !!bidmProjectDTO.projectEndDate &&
            new Date(bidmProjectDTO.projectEndDate as Date).valueOf() < new Date().valueOf()
          );
        });

        this.isTableLoading = false;
      }
    });
  }

  private registerRefreshButton(): void {
    this.workSchedulingService.refreshButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.refreshButton = f;
    });
  }

  private loadWorkPackageStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((result) => {
      this.statusList = ListUtils.orEmpty(result);
    });
  }

  public reloadData(): void {
    if (this.refreshButton) {
      this.refreshButton();
      this.loadWorkSchdulingTable();
    }
  }

  public openWorkPackageDetail(rowData: BidmProjectDTO) {
    if (!!rowData) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({ wpId: rowData.projectId })
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
