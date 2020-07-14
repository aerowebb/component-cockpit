import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { EnterpriseType } from '../../../shared/enums/enterprise-type.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { EnterpriseMapService } from './enterprise-map.service';

@Component({
  selector: 'aw-enterprise-map',
  templateUrl: './enterprise-map.component.html',
  styleUrls: ['./enterprise-map.component.scss']
})
export class EnterpriseMapComponent extends PageComponent<PageComponentData> implements OnInit {
  public treeNode: TreeNode[] = [];
  public companyList: LabelValue<string>[];
  public selectedCompany: string;

  public readonly enterpriseType: typeof EnterpriseType;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly enterpriseMapService: EnterpriseMapService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.enterpriseType = EnterpriseType;

    this.companyList = [];
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_ENTERPRISE_MAP;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.loadDropDown();
  }

  /**
   * Filling the company list
   */
  private loadDropDown() {
    this.enterpriseMapService.getCompanyList().subscribe((result: LabelValue<string>[]) => {
      this.companyList = result;
      this.selectedCompany = result[0].value;
      this.loadEnterpriseMapData();
    });
  }

  /* Generating organisation chart
   * and grouping warehouse or Work Center in a single block
   * to avoid too large displays
   */
  public loadEnterpriseMapData() {
    this.enterpriseMapService.enterpriseMap(this.selectedCompany).subscribe((result: TreeNode) => {
      if (result != undefined) {
        // Enterprise exists
        const etsNode: TreeNode = {
          // Enterprise node : parent node
          label: result.label, // Ets name
          expanded: true, // Expand Map (button hidden)
          children: []
        };

        if (result.children) {
          result.children.forEach((companyItem) => {
            // Company node, belonging to Entreprise
            const company: TreeNode = {
              label: companyItem.label, // Company name
              expanded: false, // Expand Map (button hidden)
              children: []
            };

            // Warehouses & Work Centers children that will be added to Company
            const warehousesChild: TreeNode = {
              data: [],
              label: EnterpriseType.WAREHOUSE,
              type: 'blueBox'
            };
            const workCentersChild: TreeNode = {
              data: [],
              label: EnterpriseType.WORKCENTER,
              type: 'blueBox'
            };
            // Record each label to corresponding child
            if (!!companyItem.children) {
              companyItem.children.forEach((w) => {
                if (w.type === EnterpriseType.WAREHOUSE) {
                  warehousesChild.data.push(w.label);
                }
                if (w.type === EnterpriseType.WORKCENTER) {
                  workCentersChild.data.push(w.label);
                }
              });

              // Add warehouses and work centers to company children
              if (!!company.children) {
                if (warehousesChild.data.length > 0) {
                  company.children.push(warehousesChild);
                }
                if (workCentersChild.data.length > 0) {
                  company.children.push(workCentersChild);
                }
              }
              // Add Company to its Entreprise
              if (!!etsNode.children) {
                etsNode.children.push(company);
              }
            }
          });
          this.treeNode = [];
          this.treeNode.push(etsNode);
        }
      }
    });
  }
}
