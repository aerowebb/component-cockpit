import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';

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

import { SbAdExportFormService } from './sbad-export-form.service';

@Component({
  selector: 'aw-sbad-export-form',
  styleUrls: ['./sbad-export-form.component.scss'],
  templateUrl: './sbad-export-form.component.html'
})
export class SbAdExportFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private readonly EXPORT_VALUE: string = '0';
  private readonly SBAD_VALUE: string = '0';

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
    private readonly sbAdExportFormService: SbAdExportFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.COL_SBAD_EXPORT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  private init() {
    this.typeList = [
      {
        label: this.translateService.instant(this.getTranslateKey('export')),
        value: this.EXPORT_VALUE
      }
    ];
    this.selectedType = this.EXPORT_VALUE;

    this.dataList = [
      {
        label: this.translateService.instant(this.getTranslateKey('sbad')),
        value: this.SBAD_VALUE
      }
    ];
    this.selectedData = this.SBAD_VALUE;
  }

  private downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public exportSbadData(): void {
    this.exportLoader = true;
    this.sbAdExportFormService
      .sbadExport()
      .pipe(
        finalize(() => {
          this.exportLoader = false;
        })
      )
      .subscribe((result) => {
        if (!!result) {
          if (result.fileContent && result.fileName) {
            this.downLoadFiles(result.fileContent, result.fileName);
          }
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnDownloadSbadList'));
        }
      });
  }
}
