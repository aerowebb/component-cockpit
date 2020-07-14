import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';

import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { SaveFilterInput } from '../../../../../shared/types/api-input-types/component-filter/save-filter-input-dto.interface';
import { ElementListFilterOutput } from '../../../../../shared/types/api-output-types/element-list-filter-output-dto.interface';
import { FilterOutputById } from '../../../../../shared/types/api-output-types/filter-output-by-id.interface';
import { ProfileListFilterOutput } from '../../../../../shared/types/api-output-types/profile-list-filter-output.interface';
import { SiteListFilterOutput } from '../../../../../shared/types/api-output-types/site-list-filter-output.interface';
import { VariantListFilterOutput } from '../../../../../shared/types/api-output-types/variant-list-filter-output.interface';
import { BidoPreferenceUserDTOId } from '../../../../../shared/types/api-types/bido-preference-user-dto-id.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { LabelValueUtils } from '../../../../../shared/utils/label-value-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { BidoPuProfileDTO } from '../.././../../../shared/types/api-types/bido-pu-profile-dto.interface';

import { ComponentCockpitFormService } from './component-cockpit-form.service';

interface FilterElementRow {
  object?: string;
  objectKey?: string;
  data?: string;
  dataKey?: string;
  type?: string;
  typeKey?: string;
  value?: string;
  valueKey?: string;
  filterPreferenceFormated?: string;
  _obj?: ElementListFilterOutput;
}

enum GraphType {
  None = 'None',
  RedTriangle = 'RedTriangle',
  RedSquare = 'RedSquare',
  RedCircle = 'RedCircle',
  YellowTriangle = 'YellowTriangle',
  YellowSquare = 'YellowSquare',
  YellowCircle = 'YellowCircle',
  GreenTriangle = 'GreenTriangle',
  GreenSquare = 'GreenSquare',
  GreenCircle = 'GreenCircle',
  BlueTriangle = 'BlueTriangle',
  BlueSquare = 'BlueSquare',
  BlueCircle = 'BlueCircle',
  GreyTriangle = 'GreyTriangle',
  GreySquare = 'GreySquare',
  GreyCircle = 'GreyCircle'
}

@Component({
  selector: 'aw-component-cockpit-form',
  templateUrl: './component-cockpit-form.component.html',
  styleUrls: ['./component-cockpit-form.component.scss']
})
export class ComponentCockpitFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  @ViewChild('fliterElement')
  public fliterElement: ElementRef;
  @ViewChild('profileAnchor')
  public profileAnchor: ElementRef;
  @ViewChild('variantAnchor')
  public variantAnchor: ElementRef;
  @ViewChild('siteAnchor')
  public siteAnchor: ElementRef;
  @ViewChild('mainInformationAnchor')
  public mainInformationAnchor: ElementRef;

  public context: string;
  public filterData: FilterOutputById;
  public toc;
  public selectedAnchor: string | undefined;
  public logicalLinkList: LabelValue<string>[];
  public propertyFilterList: LabelValue<string>[];
  public propertyProfile: LabelValue<string>[];
  public propertySite: LabelValue<string>[];
  public propertyVariant: LabelValue<string>[];
  public graphValue: string | undefined;

  public filterTable: FilterElementRow[];
  public customFilterTable: ElementListFilterOutput[];
  public filterTableCols: TableColumn[];
  public selectedFilter: FilterElementRow[];

  public profileTable: ProfileListFilterOutput[];
  public profileTableCols: TableColumn[];
  public selectedProfile: ProfileListFilterOutput[];
  public customProfileTable: BidoPuProfileDTO[];

  public variantTable: VariantListFilterOutput[];
  public variantTableCols: TableColumn[];
  public selectedVariant: VariantListFilterOutput[];

  public siteTable: SiteListFilterOutput[];
  public siteTableCols: TableColumn[];
  public selectedSite: SiteListFilterOutput[];

  public showPopup: boolean;
  public elementFlag: boolean;
  public profileFlag: boolean;
  public siteFlag: boolean;
  public variantFlag: boolean;
  private currentIndex: number;
  public currentData: ElementListFilterOutput | undefined;
  public dialogOpenMode: ComponentOpenMode;
  public isfilterTable: boolean;
  public isprofileTable: boolean;
  public isVariantTable: boolean;
  public isSiteTable: boolean;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    private readonly confirmationService: ConfirmationService,
    private readonly componentCockpitFormService: ComponentCockpitFormService,
    private readonly translateService: TranslateService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.selectedAnchor = undefined;
    this.registerPageTocEntrySelectedObservable();
    this.profileTable = [];
    this.filterTable = [];
    this.customFilterTable = [];
    this.customProfileTable = [];
    this.variantTable = [];
    this.siteTable = [];
    this.selectedProfile = [];
    this.selectedVariant = [];
    this.selectedSite = [];
    this.selectedFilter = [];
    this.logicalLinkList = [];
    this.propertyProfile = [];
    this.propertySite = [];
    this.propertyVariant = [];
    this.propertyFilterList = [];
    this.showPopup = false;
    this.elementFlag = false;
    this.profileFlag = false;
    this.siteFlag = false;
    this.variantFlag = false;
    this.currentIndex = -1;
    this.isfilterTable = false;
    this.isprofileTable = false;
    this.isVariantTable = false;
    this.isSiteTable = false;
    this.dialogOpenMode = ComponentOpenMode.Read;
    this.profileTableCols = [{ field: 'name', alignment: 'left' }];
    this.variantTableCols = [{ field: 'name', alignment: 'left' }];
    this.siteTableCols = [{ field: 'name', alignment: 'left' }];

    this.filterTableCols = [
      { field: 'objectKey', alignment: 'left' },
      { field: 'dataKey', alignment: 'left' },
      { field: 'typeKey', alignment: 'left' },
      { field: 'valueKey', alignment: 'left' }
    ];
    this.loadFilters();
  }

  public ngOnInit() {
    this.init();
    this.fillDropdowns();
    this.toc = [
      {
        id: 'mainInformationAnchor',
        anchor: this.mainInformationAnchor,
        label: `${this.translateService.instant('page.mainData')}`
      },
      {
        id: 'fliterElement',
        anchor: this.fliterElement,
        label: `${this.translateService.instant(this.getTranslateKey('filterTitle'))}`
      },
      {
        id: 'profileAnchor',
        anchor: this.profileAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('profileTitle'))}`
      },
      {
        id: 'variantAnchor',
        anchor: this.variantAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('variantTitle'))}`
      },
      {
        id: 'siteAnchor',
        anchor: this.siteAnchor,
        label: `${this.translateService.instant(this.getTranslateKey('siteTitle'))}`
      }
    ];
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData.objectId) {
        this.loadData();
      } else {
        this.context = 'tab.createMode';
        this.displayComponentContext(this.context, this.isCreateOpenMode);
        this.filterData.filterListOutput.isPersistent = true;
        this.graphValue = GraphType.None;
      }
    }

    this.setSelectedAnchor('mainInformationAnchor');
  }

  public init() {
    this.filterData = {
      filterListOutput: {
        bidoPreferenceUserDTO: {}
      }
    };
  }
  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);
    this.selectedAnchor = anchorId;
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }
  public getComponentName(): string {
    return 'ComponentCockpitFormComponent';
  }

  public loadFilters() {
    this.componentCockpitFormService.getFilterList().subscribe(
      (results) => {
        let data: LabelValue<string>;
        if (!!results) {
          results.forEach((obj) => {
            if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description) {
              data = {
                label: obj.bidoPreferenceUserDTO.description,
                value: obj.bidoPreferenceUserDTO.preferenceUserId
              };
            }
            this.propertyFilterList.push(data);
          });
        } else {
          this.propertyFilterList = [];
        }
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public refresh(): void {
    this.reloadData();
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadData();
  }

  public reloadData() {
    this.customFilterTable = [];
    this.customProfileTable = [];
    this.loadData();
  }

  public loadData() {
    this.isfilterTable = true;
    this.isprofileTable = true;
    this.isVariantTable = true;
    this.isSiteTable = true;
    if (!!this.componentData.objectId) {
      const prefId = this.serializationService.deserialize(this.componentData.objectId).preferenceUserId;
      this.componentCockpitFormService.getData(prefId).subscribe((results) => {
        this.filterData = results;
        this.loadProfile();
        this.loadVariant();
        this.loadSite();
        this.loadFilterList();
        if (!!this.filterData.filterListOutput && !!this.filterData.filterListOutput.filterName) {
          this.graphValue =
            !!this.filterData.filterListOutput.bidoPreferenceUserDTO &&
            !!this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference
              ? this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference
              : GraphType.None;
          this.context = this.filterData.filterListOutput.filterName;
          this.displayComponentContext(this.context, this.isCreateOpenMode);
        }
      });
    }
  }

  public loadProfile() {
    this.isprofileTable = false;
    this.profileTable = !!this.filterData.profileListFilterOutputList
      ? this.filterData.profileListFilterOutputList
      : [];
    this.profileTable.forEach((row) => {
      if (!!row.bidoProfileDTO && !!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
        LabelValueUtils.stringValueToLabel<BidoPuProfileDTO>(row.bidoProfileDTO, 'profileId', this.propertyProfile);
        const dto: BidoPuProfileDTO = {
          profileId: row.bidoProfileDTO.profileId,
          preferenceUserId: this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId
        };
        this.customProfileTable.push(dto);
      }
    });
  }

  public loadVariant() {
    this.isVariantTable = false;
    this.variantTable = !!this.filterData.variantListFilterOutputList
      ? this.filterData.variantListFilterOutputList
      : [];
    this.variantTable.forEach((obj) => {
      obj.filterPreferenceFormated = obj.name;
    });
  }

  public loadSite() {
    this.isSiteTable = false;
    this.siteTable = !!this.filterData.siteListFilterOutputList ? this.filterData.siteListFilterOutputList : [];
    this.siteTable.forEach((obj) => {
      obj.filterPreferenceFormated = obj.name;
    });
  }

  public loadFilterList() {
    this.isfilterTable = false;
    this.customFilterTable = !!this.filterData.elementFilterList ? this.filterData.elementFilterList : [];
    this.customFilterTable.forEach((obj) => {
      if (obj.objectKey === 'Filter') {
        obj.dataKey = obj.data;
        LabelValueUtils.stringValueToLabel<ElementListFilterOutput>(obj, 'dataKey', this.propertyFilterList);
      }
      obj.filterPreferenceFormated = `${obj.object};;${obj.data};;${obj.type};;${obj.value}`;
    });
    const tableList: FilterElementRow[] = [];
    if (!!this.filterData.elementFilterList) {
      this.filterData.elementFilterList.forEach((obj) => {
        const row: FilterElementRow = {
          objectKey: obj.objectKey,
          dataKey: obj.objectKey === 'Filter' ? (!!obj.data ? obj.data.toString() : '') : obj.dataKey,
          typeKey: obj.typeKey,
          valueKey: obj.valueKey,
          filterPreferenceFormated: `${obj.object};;${obj.data};;${obj.type};;${obj.value}`,
          _obj: obj
        };
        tableList.push(row);
      });
      this.filterTable = tableList;
      this.filterTable.forEach((row) => {
        if (row.objectKey === 'Filter') {
          LabelValueUtils.stringValueToLabel<FilterElementRow>(row, 'dataKey', this.propertyFilterList);
        }
      });
    }
  }

  public fillDropdowns() {
    this.componentCockpitFormService.getLogicData().subscribe((results) => {
      this.logicalLinkList = results;
    });
    this.componentCockpitFormService.getProfileDropdown().subscribe((results) => {
      this.propertyProfile = results;
    });
    this.componentCockpitFormService.getSiteDropdown().subscribe((results) => {
      this.propertySite = results;
    });
    this.componentCockpitFormService.getVariantDropdown().subscribe((results) => {
      this.propertyVariant = results;
    });
  }

  public addFilterElement() {
    this.elementFlag = true;
    this.profileFlag = false;
    this.siteFlag = false;
    this.variantFlag = false;
    this.currentIndex = -1;
    this.currentData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Create;
    this.showPopup = true;
  }

  public addProfileList() {
    this.elementFlag = false;
    this.profileFlag = true;
    this.siteFlag = false;
    this.variantFlag = false;
    this.currentIndex = -1;
    this.currentData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Create;
    this.showPopup = true;
  }

  public addSiteList() {
    this.elementFlag = false;
    this.profileFlag = false;
    this.siteFlag = true;
    this.variantFlag = false;
    this.currentIndex = -1;
    this.currentData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Create;
    this.showPopup = true;
  }

  public addVariantList() {
    this.elementFlag = false;
    this.profileFlag = false;
    this.siteFlag = false;
    this.variantFlag = true;
    this.currentIndex = -1;
    this.currentData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Create;
    this.showPopup = true;
  }

  public openFilterElement(): void {
    if (this.selectedFilter.length === 1) {
      this.currentData = this.selectedFilter[0]._obj;
      this.currentIndex = -1;
      this.dialogOpenMode = ComponentOpenMode.Read;
      this.elementFlag = true;
      this.profileFlag = false;
      this.siteFlag = false;
      this.variantFlag = false;
      this.showPopup = true;
    }
  }

  public EditFilterElement(): void {
    if (this.selectedFilter.length === 1) {
      this.currentIndex = this.filterTable.findIndex((row) => {
        return (
          !!row.filterPreferenceFormated &&
          !!this.selectedFilter[0]._obj &&
          !!this.selectedFilter[0]._obj.filterPreferenceFormated &&
          row.filterPreferenceFormated === this.selectedFilter[0]._obj.filterPreferenceFormated
        );
      });

      this.currentData = { ...this.selectedFilter[0]._obj };
      this.dialogOpenMode = ComponentOpenMode.Write;
      this.elementFlag = true;
      this.profileFlag = false;
      this.siteFlag = false;
      this.variantFlag = false;
      this.showPopup = true;
    }
  }

  public onAddData(data: ElementListFilterOutput) {
    let fileExists = true;
    if (!!data) {
      this.filterTable.forEach((doc, i) => {
        if (doc.filterPreferenceFormated === data.filterPreferenceFormated) {
          if (this.currentIndex === i) {
            fileExists = true;
          } else {
            fileExists = false;
            this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
          }
        }
      });
      if (fileExists) {
        if (this.currentIndex !== -1) {
          this.customFilterTable[this.currentIndex] = data;
          this.filterTable[this.currentIndex] = this.createFilterRow(data);
        } else {
          this.customFilterTable = [...this.customFilterTable, data];
          this.filterTable = [...this.filterTable, this.createFilterRow(data)];
        }
      }
    }
    this.selectedFilter = [];
  }

  public onAddOtherData(data) {
    if (this.variantFlag) {
      let isExistingEvent = false;
      if (!!this.variantTable) {
        this.variantTable.forEach((obj) => {
          if (!!obj.name && !!data && obj.name === data.name) {
            isExistingEvent = true;
          }
        });
      }
      if (isExistingEvent) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
      } else {
        this.variantTable = [...this.variantTable, data];
      }
      this.selectedVariant = [];
    }
    if (this.siteFlag) {
      let isExistingEvent = false;
      if (!!this.siteTable) {
        this.siteTable.forEach((obj) => {
          if (!!obj.name && !!data && obj.name === data.name) {
            isExistingEvent = true;
          }
        });
      }
      if (isExistingEvent) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
      } else {
        this.siteTable = [...this.siteTable, data];
      }
      this.selectedSite = [];
    }

    if (this.profileFlag) {
      LabelValueUtils.stringValueToLabel<BidoPuProfileDTO>(data, 'profileId', this.propertyProfile);
      let isExistingEvent = false;
      if (!!this.profileTable) {
        this.profileTable.forEach((obj) => {
          if (!!obj.name && !!data && obj.name === data.profileId) {
            isExistingEvent = true;
          }
        });
      }
      if (isExistingEvent) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningDataExists'));
      } else {
        if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
          data.preferenceUserId = this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId;
        }
        const obj: ProfileListFilterOutput = {
          name: data.profileId,
          bidoProfileDTO: data
        };
        this.profileTable = [...this.profileTable, obj];
        // tslint:disable-next-line: no-unsafe-any
        this.customProfileTable = [...this.customProfileTable, data];
      }
      this.selectedProfile = [];
    }
  }

  private createFilterRow(data: ElementListFilterOutput): FilterElementRow {
    const row: FilterElementRow = {
      objectKey: data.objectKey,
      typeKey: data.typeKey,
      valueKey: !!data.valueKey ? data.valueKey : '',
      dataKey: data.dataKey,
      filterPreferenceFormated: data.filterPreferenceFormated,
      _obj: data
    };

    return row;
  }

  public deleteFilterElement(): void {
    const confirmMessageKey =
      this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.filterTable = this.filterTable.filter((filterDisplayed) => {
          return !this.selectedFilter.some((row) => {
            return (
              !!filterDisplayed &&
              !!row &&
              filterDisplayed.typeKey === row.typeKey &&
              filterDisplayed.objectKey === row.objectKey &&
              filterDisplayed.valueKey === row.valueKey &&
              filterDisplayed.dataKey === row.dataKey
            );
          });
        });
        this.customFilterTable = this.customFilterTable.filter((filterDisplayed) => {
          return !this.selectedFilter.some((row) => {
            return (
              !!filterDisplayed &&
              !!row &&
              filterDisplayed.typeKey === row.typeKey &&
              filterDisplayed.objectKey === row.objectKey &&
              filterDisplayed.valueKey === row.valueKey &&
              filterDisplayed.dataKey === row.dataKey
            );
          });
        });

        this.selectedFilter = [];
      }
    });
  }

  public deleteVariantList(): void {
    const confirmMessageKey =
      this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.variantTable = this.variantTable.filter((obj) => {
          return !this.selectedVariant.some((row) => {
            return !!obj && !!row && obj.name === row.name;
          });
        });
        this.selectedVariant = [];
      }
    });
  }

  public deleteProfileList(): void {
    const confirmMessageKey =
      this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.profileTable = this.profileTable.filter((obj) => {
          return !this.selectedProfile.some((row) => {
            return !!obj && !!row && obj.name === row.name;
          });
        });
        this.customProfileTable = this.customProfileTable.filter((obj) => {
          return !this.selectedProfile.some((row) => {
            return !!obj && !!row && obj.profileId === row.name;
          });
        });
        this.selectedProfile = [];
      }
    });
  }

  public deleteSiteList(): void {
    const confirmMessageKey =
      this.selectedFilter.length > 1 ? 'confirmDeleteSelectedLists' : 'confirmDeleteSelectedList';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.siteTable = this.siteTable.filter((obj) => {
          return !this.selectedSite.some((row) => {
            return !!obj && !!row && obj.name === row.name;
          });
        });
        this.selectedSite = [];
      }
    });
  }

  public validate() {
    if (
      !!this.filterData.filterListOutput.bidoPreferenceUserDTO &&
      StringUtils.isNullOrEmpty(this.filterData.filterListOutput.bidoPreferenceUserDTO.description)
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      const filterList: ElementListFilterOutput[] = [];
      this.customFilterTable.forEach((row) => {
        const data: ElementListFilterOutput = {};
        data.filterPreferenceFormated = row.filterPreferenceFormated;
        filterList.push(data);
      });
      const variantList: VariantListFilterOutput[] = [];
      this.variantTable.forEach((row) => {
        const data: VariantListFilterOutput = {};
        data.filterPreferenceFormated = row.filterPreferenceFormated;
        variantList.push(data);
      });
      const siteList: SiteListFilterOutput[] = [];
      this.siteTable.forEach((row) => {
        const data: SiteListFilterOutput = {};
        data.filterPreferenceFormated = row.filterPreferenceFormated;
        siteList.push(data);
      });
      this.customProfileTable.forEach((row) => {
        LabelValueUtils.labelToStringValue<BidoPuProfileDTO>(row, 'profileId', this.propertyProfile);
      });
      if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
        this.filterData.filterListOutput.bidoPreferenceUserDTO.graphicalReference = this.graphValue;
      }
      if (this.isCreateOpenMode) {
        const data: SaveFilterInput = {
          bidoPreferenceUserDTO: this.filterData.filterListOutput.bidoPreferenceUserDTO,
          isPersistent: this.filterData.filterListOutput.isPersistent,
          logicalLink: this.filterData.filterListOutput.logicalLink
        };

        this.showSaveSpinner = true;
        this.componentCockpitFormService.saveFilter(data).subscribe(
          (results) => {
            if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
              this.filterData.filterListOutput.bidoPreferenceUserDTO = results;
              this.customProfileTable.forEach((row) => {
                row.preferenceUserId = results.preferenceUserId;
              });
              const input: SaveFilterInput = {
                bidoPreferenceUserDTO: this.filterData.filterListOutput.bidoPreferenceUserDTO,
                isPersistent: this.filterData.filterListOutput.isPersistent,
                logicalLink: this.filterData.filterListOutput.logicalLink,
                elementFilterList: filterList,
                variantFilterList: variantList,
                siteFilterList: siteList,
                bidoPuProfileList: this.customProfileTable
              };
              this.componentCockpitFormService.saveFilter(input).subscribe(
                (response) => {
                  if (!!response.preferenceUserId) {
                    const prefId: BidoPreferenceUserDTOId = {
                      preferenceUserId: response.preferenceUserId
                    };
                    this.componentData.objectId = this.serializationService.serialize(prefId);
                  }
                  this.updateOpenMode(ComponentOpenMode.Read);
                  this.reloadData();
                  this.messageService.showSuccessMessage(this.getTranslateKey('createdSuccesfuly'));
                },
                (err) => {
                  // FAILED
                  this.messageService.showErrorMessage(err.error.errorDetail);
                }
              );
            }
            this.showSaveSpinner = false;
          },
          (err) => {
            // FAILED
            this.messageService.showErrorMessage(err.error.errorDetail);
            this.showSaveSpinner = false;
          }
        );
      } else {
        const inputData: SaveFilterInput = {
          bidoPreferenceUserDTO: this.filterData.filterListOutput.bidoPreferenceUserDTO,
          isPersistent: this.filterData.filterListOutput.isPersistent,
          logicalLink: this.filterData.filterListOutput.logicalLink,
          elementFilterList: filterList,
          variantFilterList: variantList,
          siteFilterList: siteList,
          bidoPuProfileList: this.customProfileTable
        };

        this.showSaveSpinner = true;
        this.componentCockpitFormService.saveFilter(inputData).subscribe(
          (results) => {
            if (!!this.filterData.filterListOutput.bidoPreferenceUserDTO) {
              this.filterData.filterListOutput.bidoPreferenceUserDTO.preferenceUserId = results.preferenceUserId;
            }
            this.messageService.showSuccessMessage(this.getTranslateKey('savedSuccesfuly'));
            this.reloadData();
            this.updateOpenMode(ComponentOpenMode.Read);
            this.showSaveSpinner = false;
          },
          (err) => {
            // FAILED
            this.messageService.showErrorMessage(err.error.errorDetail);
            this.showSaveSpinner = false;
          }
        );
      }
    }
  }
}
