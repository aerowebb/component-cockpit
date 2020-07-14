import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BsdeSitePnTilDTOId } from '../../../../shared/types/api-types/bsde-site-pn-til-dto-id.interface';
import { BsdeSitePnTilDTO } from '../../../../shared/types/api-types/bsde-site-pn-til-dto.interface';
import { SaveSiteInput } from '../../../../shared/types/api-types/save-site-screen-input';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';

import { SiteFormService } from './site-form.service';

interface CapabilityRow {
  repairCenterCode: string | undefined;
  pnCode: string;
  technicalLevel: string;
  technicalLevelId: string;
  cost: string | undefined;
  availabilityDate: string | undefined;
  tat: number | undefined;
}

@Component({
  selector: 'aw-site-form',
  styleUrls: ['./site-form.component.scss'],
  templateUrl: './site-form.component.html'
})
export class SiteFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public companies: LabelValue<string>[];
  public technicalLevels: LabelValue<string>[];
  public site: BidtSiteDTO;
  public capabilityTableDataSource: TableDataSource<CapabilityRow>;
  private capability: BsdeSitePnTilDTO[];
  public currentCapability: BsdeSitePnTilDTO | undefined;
  public capabilityDialogOpenMode: ComponentOpenMode;
  public showCapabilityDialog: boolean;
  private currentCapabilityIndex: number;
  private capabilityAdded: BsdeSitePnTilDTO[];
  private capabilityRemoved: BsdeSitePnTilDTOId[];
  private capabilityUpdated: BsdeSitePnTilDTO[];
  public isLoading: boolean;

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly siteFormService: SiteFormService,
    private readonly dateService: DateService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.init();
    this.initCapabilityTableDataSource();
  }

  private init(): void {
    this.site = {};
    this.companies = [];
    this.capability = [];
    this.capabilityAdded = [];
    this.capabilityRemoved = [];
    this.capabilityUpdated = [];
    this.currentCapability = undefined;
    this.currentCapabilityIndex = -1;
    this.capabilityDialogOpenMode = ComponentOpenMode.Read;
    this.showCapabilityDialog = false;
    this.isLoading = false;
    this.technicalLevels = [];
    this.loadCompany();
    this.loadTechnicalLevel();
  }

  private initCapabilityTableDataSource(): void {
    this.capabilityTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'pnCode',
          translateKey: this.getTranslateKey('pnCode')
        },
        {
          field: 'technicalLevel',
          translateKey: this.getTranslateKey('technicalLevel')
        },
        {
          field: 'cost',
          translateKey: this.getTranslateKey('cost')
        },
        {
          field: 'availabilityDate',
          translateKey: this.getTranslateKey('availabilityDate')
        },
        {
          field: 'tat',
          translateKey: this.getTranslateKey('tat')
        }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_SITE_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (!!this.componentData) {
      this.loadCompany();
      this.updateOpenMode(this.componentData.openMode);
      const context =
        this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId).siteName
          ? `${this.serializationService.deserialize(this.componentData.objectId).siteCode} ${
              this.serializationService.deserialize(this.componentData.objectId).siteName
            }`
          : this.componentData.objectId &&
            `${this.serializationService.deserialize(this.componentData.objectId).siteCode}`;
      const contextMode = this.isCreateOpenMode ? 'tab.createMode' : context;
      if (!!contextMode) {
        this.displayComponentContext(contextMode, this.isCreateOpenMode);
      }
      this.loadSite();
    }
  }

  public loadCompany(): void {
    this.siteFormService.findBidtCompanyByCriteria({}).subscribe((results) => {
      this.companies = results;
    });
  }

  private loadTechnicalLevel(): void {
    this.siteFormService.findAllBireTils().subscribe((results) => {
      results.forEach((result) => {
        if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
          const tempName: LabelValue<string> = {
            value: result.technicalLevel.toString(),
            label: result.tilName
          };
          this.technicalLevels.push(tempName);
        }
      });
    });
  }

  private loadSite(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      this.isLoading = true;
      // Load Site object
      const siteObject: BidtSiteDTO = this.serializationService.deserialize(this.componentData.objectId);
      if (!!siteObject.siteId) {
        this.siteFormService.getById(siteObject.siteId).subscribe((result) => {
          this.isLoading = false;
          if (!!result) {
            this.site = result;
            this.site.companyId = !!result.bidtCompanyId ? result.bidtCompanyId.toString() : '';
            if (!!this.site && !!this.site.siteCode) {
              const siteCode = this.site.siteCode;
              this.loadcapabilities(siteCode);
            }
          }
        });
      } else {
        super.throwUnboundLocalError('loadSite', 'siteObject.siteId');
      }
    }
  }

  public getTechnicalLevelValueById(technicalLevelId: number): string {
    const selectedTechnicalLevel = this.technicalLevels.find((technicalLevel) => {
      return technicalLevel.value === technicalLevelId.toString();
    });

    return selectedTechnicalLevel ? selectedTechnicalLevel.label : '';
  }

  private loadcapabilities(repairCenterCode: string): void {
    this.siteFormService.findBsdeSitePnTilsBySiteCode(repairCenterCode).subscribe((results) => {
      this.capability = ListUtils.orEmpty(results);
      const capabilities: CapabilityRow[] = [];
      results.forEach((result) => {
        const tempCapability = this.createCapabilityRow(result);
        if (!!result && !!tempCapability) {
          capabilities.push(tempCapability);
        }
      });
      this.capabilityTableDataSource.setData(capabilities);
    });
  }

  private createCapabilityRow(resultCapability: BsdeSitePnTilDTO): CapabilityRow | undefined {
    if (!!resultCapability.pnCode && !!resultCapability.technicalLevel) {
      const capabilityRow: CapabilityRow = {
        repairCenterCode: resultCapability.repairCenterCode,
        pnCode: resultCapability.pnCode,
        technicalLevel: this.getTechnicalLevelValueById(Number(resultCapability.technicalLevel)),
        technicalLevelId: resultCapability.technicalLevel,
        cost: resultCapability.cost,
        availabilityDate: this.dateService.dateToString(resultCapability.availabilityDate),
        tat: resultCapability.tat
      };

      return capabilityRow;
    } else {
      super.throwUnboundLocalError('createCapabilityRow', 'resultCapability');
    }
  }

  public createCapability(): void {
    this.currentCapability = undefined;
    this.capabilityDialogOpenMode = ComponentOpenMode.Create;
    this.showCapabilityDialog = true;
  }

  public editCapability(): void {
    if (this.capabilityTableDataSource.dataSelectionCount === 1) {
      const selectedCapability = this.findMatchingCapability(this.capabilityTableDataSource.dataSelection[0]);
      if (!!selectedCapability) {
        this.currentCapabilityIndex = this.capability.findIndex((capability) => {
          return DTOUtils.equalsBsdeSitePnTilDTO(capability, capability);
        });
        this.currentCapability = { ...selectedCapability };
        this.capabilityDialogOpenMode = ComponentOpenMode.Write;
        this.showCapabilityDialog = true;
      }
    }
  }

  private findMatchingCapability(row: CapabilityRow | undefined): BsdeSitePnTilDTO | undefined {
    let bsdeSitePnTilDTOToReturn: BsdeSitePnTilDTO | undefined;
    if (!!row) {
      bsdeSitePnTilDTOToReturn = this.capability.find((capability) => {
        return (
          !!capability.pnCode &&
          capability.pnCode === row.pnCode &&
          !!capability.technicalLevel &&
          capability.technicalLevel === row.technicalLevelId
        );
      });
    }

    return bsdeSitePnTilDTOToReturn;
  }

  public openCapability(): void {
    if (this.capabilityTableDataSource.dataSelectionCount === 1) {
      this.currentCapability = this.findMatchingCapability(this.capabilityTableDataSource.dataSelection[0]);
      this.currentCapabilityIndex = -1;
      this.capabilityDialogOpenMode = ComponentOpenMode.Read;
      this.showCapabilityDialog = true;
    }
  }

  public onAddCapability(capability: BsdeSitePnTilDTO): void {
    if (!!capability) {
      capability.repairCenterCode = this.site.siteCode;

      if (this.currentCapabilityIndex !== -1) {
        this.capability[this.currentCapabilityIndex] = capability;
        const createdRowFromCapabilityDataEvent = this.createCapabilityRow(capability);
        if (!!createdRowFromCapabilityDataEvent) {
          this.capabilityTableDataSource.replaceData(
            this.capabilityTableDataSource.dataSelection[0],
            createdRowFromCapabilityDataEvent
          );
          const updatedCustomerEvolutionIndex = this.capabilityUpdated.findIndex((customerEvolutionUpdated) =>
            DTOUtils.equalsBsdeSitePnTilDTO(customerEvolutionUpdated, capability)
          );
          if (updatedCustomerEvolutionIndex !== -1) {
            this.capabilityUpdated[updatedCustomerEvolutionIndex] = capability;
          } else {
            this.capabilityUpdated = [...this.capabilityUpdated, capability];
          }
        }
      } else {
        const isAdded = this.capability.some((capabilityAdded) =>
          DTOUtils.equalsBsdeSitePnTilDTO(capabilityAdded, capability)
        );
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnCapabilityExists'));
        } else {
          const tempCapability = this.createCapabilityRow(capability);
          if (!!tempCapability) {
            this.capability = [...this.capability, capability];
            this.capabilityAdded = [...this.capabilityAdded, capability];
            this.capabilityTableDataSource.addData([tempCapability]);
          }
        }
      }
    }

    this.capabilityTableDataSource.dataSelection = [];
    this.currentCapabilityIndex = -1;
  }

  public deleteCapability(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.capabilityTableDataSource.dataSelection.forEach((capability) => {
          LabelValueUtils.labelToStringValue(capability, 'technicalLevel', this.technicalLevels);
          if (!!capability.pnCode && !!capability.technicalLevel) {
            const bsdeSitePnTilDTO: BsdeSitePnTilDTOId = {
              pnCode: capability.pnCode,
              repairCenterCode: capability.repairCenterCode,
              technicalLevel: capability.technicalLevel
            };
            const selectedCapability = this.findMatchingCapability(capability);
            const capabilityAddedWithoutSelection = this.capabilityAdded.filter((capabilityAdded) => {
              return !!selectedCapability && !DTOUtils.equalsBsdeSitePnTilDTO(selectedCapability, capabilityAdded);
            });
            if (this.capabilityAdded.length !== capabilityAddedWithoutSelection.length) {
              this.capabilityAdded = capabilityAddedWithoutSelection;
            } else {
              this.capabilityRemoved.push(bsdeSitePnTilDTO);
            }
          } else {
            super.throwUnboundLocalError('deleteCapability', 'capability');
          }
        });

        this.capabilityTableDataSource.setData(
          this.capabilityTableDataSource.dataSrc.filter((capability) => {
            return !this.capabilityTableDataSource.dataSelection.some((selectedCapability) => {
              return DTOUtils.equalsBsdeSitePnTilDTO(
                this.findMatchingCapability(capability),
                this.findMatchingCapability(selectedCapability)
              );
            });
          })
        );
        this.capabilityTableDataSource.dataSelection = [];
      }
    });
  }

  public editSite(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  private validateForm() {
    if (!!this.site && !!this.site.siteCode && this.site.siteCode.trim() && this.site.companyId) {
      return true;
    } else {
      return false;
    }
  }

  public saveSite(): void {
    if (this.validateForm()) {
      if (!!this.componentData && !!this.componentData.objectId) {
        const siteObject: BidtSiteDTO = this.serializationService.deserialize(this.componentData.objectId);
        if (siteObject.siteId) {
          this.site.siteId = siteObject.siteId;
        }
      }
      const bidtSiteDTO: BidtSiteDTO = {
        siteId: this.site.siteId,
        siteCode: this.site.siteCode,
        siteName: this.site.siteName,
        siteDescription: this.site.siteDescription,
        bidtCompanyId: !!this.site.companyId ? +this.site.companyId : undefined
      };
      this.capabilityAdded.forEach((capability) => (capability.repairCenterCode = this.site.siteCode));
      const saveSiteInput: SaveSiteInput = {
        bidtSiteDTO,
        bsdeSitePntilAddDTOList: this.capabilityAdded,
        bsdeSitePnTilDeleteDTOIdList: this.capabilityRemoved,
        bsdeSitePntilUpdateDTOList: this.capabilityUpdated
      };

      this.showSaveSpinner = true;
      this.siteFormService.saveSite(saveSiteInput).subscribe(
        (result) => {
          if (!!this.componentData && !!this.site.siteCode) {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));
            this.componentData.objectId = this.serializationService.serialize(result);
            const context = this.serializationService.deserialize(this.componentData.objectId).siteName
              ? `${this.serializationService.deserialize(this.componentData.objectId).siteCode}
            ${this.serializationService.deserialize(this.componentData.objectId).siteName}`
              : this.serializationService.deserialize(this.componentData.objectId).siteCode;
            this.updateOpenMode(ComponentOpenMode.Read);
            this.displayComponentContext(context, this.isCreateOpenMode);
            this.capabilityAdded = [];
            this.capabilityUpdated = [];
            this.capabilityRemoved = [];
          } else {
            super.throwUnboundLocalError('saveSite', 'this.site.siteCode');
          }
          this.showSaveSpinner = false;
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSave'));
          this.showSaveSpinner = false;
        }
      );
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  public cancelSite(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.reloadSite();
  }

  public reloadSite(): void {
    this.init();
    this.loadSite();
  }
}
