import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { ReferentialDashboardDTO } from '../../../shared/types/api-types/referential-dashboard-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../shared/utils/file-utils';

import { ReferentialDashboardSearchService } from './referential-dashboard-search.service';

@Component({
  selector: 'aw-referential-dashboard-search',
  styleUrls: ['./referential-dashboard-search.component.scss'],
  templateUrl: './referential-dashboard-search.component.html'
})
export class ReferentialDashboardSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public refrentialTableDataSource: TableDataSource<ReferentialDashboardDTO>;
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly refrentialDashboardSearchService: ReferentialDashboardSearchService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initReferentialTableDataSource();
    this.getAllFiles();
  }

  public getComponentName(): string {
    return 'ReferentialDashboardSearchComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  private initReferentialTableDataSource(): void {
    this.refrentialTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'reportName',
          translateKey: this.getTranslateKey('reportName')
        },
        {
          field: 'folderName',
          translateKey: this.getTranslateKey('folderName')
        },
        {
          field: 'date',
          translateKey: this.getTranslateKey('date')
        }
      ],
      data: []
    });
  }

  /** Search Contact By Criteria */
  public getAllFiles(): void {
    this.refrentialDashboardSearchService.getAllFiles().subscribe((result) => {
      this.renderTable(result);
      this.refrentialTableDataSource.dataSelection = [];
    });
  }

  /** Filling contact table */
  private renderTable(result): void {
    const fileListDTO: ReferentialDashboardDTO[] = [];
    result.forEach((results) => {
      results.folderName = results.folderName.substring(0,
        parseInt(results.folderName.lastIndexOf('\\'), 10));
      const fileCreationDate = new Date(results.date);
      const pipe = new DatePipe('en-US');
      results.date = pipe.transform(fileCreationDate, 'd/M/yy hh:mm:ss');
      fileListDTO.push(results);
    });
    this.refrentialTableDataSource.setData(fileListDTO);
  }

  /** delete files By Criteria */
  public deleteFiles(): void {
    const referentialDashboardDto: ReferentialDashboardDTO = {};
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedFile'),
      accept: () => {
        this.refrentialTableDataSource.dataSelection.forEach((referentialDoc) => {
          if (referentialDoc.folderName && !!referentialDoc.date) {
            referentialDashboardDto.reportName = referentialDoc.reportName;
            referentialDashboardDto.folderName = referentialDoc.folderName;
            referentialDashboardDto.date = new Date(referentialDoc.date);
            referentialDashboardDto.folderPath = referentialDoc.folderPath;
          }
          this.refrentialDashboardSearchService.deleteFile(referentialDashboardDto).subscribe(
            (result) => {
              this.getAllFiles();
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteFile'));
            },
            (error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteFile'));
            }
          );
          this.refrentialTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /** download functionality */
  public downloadFile(): void {
    const referentialDashboardDto: ReferentialDashboardDTO[] = [];
    const fileName: string[] = [];
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDownloadSelectedFiles'),
      accept: () => {
        this.refrentialTableDataSource.dataSelection.forEach((referentialDoc, index) => {
          if (!!referentialDoc.reportName && !!referentialDoc.folderName && !!referentialDoc.date) {
            fileName[index] = referentialDoc.reportName;
            referentialDashboardDto[index] = {};
            referentialDashboardDto[index].reportName = referentialDoc.reportName;
            referentialDashboardDto[index].folderName = referentialDoc.folderName;
            referentialDashboardDto[index].date = new Date(referentialDoc.date);
            referentialDashboardDto[index].folderPath = referentialDoc.folderPath;
          }
          this.refrentialDashboardSearchService.downloadNDeleteFiles(referentialDashboardDto[index]).subscribe(
            (result) => {
              this.downLoadFiles(result, fileName[index]);
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDownloadFile'));
              this.refrentialDashboardSearchService.deleteFile(referentialDashboardDto[index]).subscribe(
                (deleteresult) => {
                  this.getAllFiles();
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteFile'));
                },
                (error) => {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteFile'));
                }
              );
            },
            (error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDownloadFile'));
            }
          );
          this.refrentialTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /** download files */
  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }
}
