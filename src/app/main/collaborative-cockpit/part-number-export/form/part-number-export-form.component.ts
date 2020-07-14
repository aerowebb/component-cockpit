import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';

import { PartNumberExportFormService } from './part-number-export-form.service';

@Component({
  selector: 'aw-part-number-export-form',
  styleUrls: ['./part-number-export-form.component.scss'],
  templateUrl: './part-number-export-form.component.html'
})
export class PartNumberExportFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private readonly export: string = '0';
  private readonly pn: string = '0';

  public typeList: LabelValue<string>[];
  public selectedType: string;
  public dataList: LabelValue<string>[];
  public selectedData: string;

  public exportLoader: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly translateService: TranslateService,
    private readonly partNumberExportFormService: PartNumberExportFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.COL_PART_NUMBER_EXPORT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  private init() {
    this.typeList = [
      {
        label: this.translateService.instant(this.getTranslateKey('export')),
        value: this.export
      }
    ];
    this.selectedType = this.export;

    this.dataList = [
      {
        label: this.translateService.instant(this.getTranslateKey('pn')),
        value: this.pn
      }
    ];
    this.selectedData = this.pn;
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public exportPNData(): void {
    this.exportLoader = true;
    this.partNumberExportFormService.exportPn().subscribe((result) => {
      if (result.fileContent && result.fileName) {
        this.downLoadFiles(result.fileContent, result.fileName);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariantList'));
      }
      this.exportLoader = false;
    });
  }
}
