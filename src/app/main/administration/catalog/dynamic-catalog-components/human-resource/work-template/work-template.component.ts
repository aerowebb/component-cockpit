import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { CustomBidtLaborTemplateDTO } from '../../../../../../shared/types/api-types/custom-bidt-labor-template-dto.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { WorkTemplateService } from './work-template.service';

@Component({
  selector: 'aw-work-template',
  templateUrl: './work-template.component.html'
})
export class WorkTemplateComponent extends DynamicCatalog implements OnInit {
  public workTemplateTableDataSource: TableDataSource<CustomBidtLaborTemplateDTO>;

  public constructor(
    private readonly workTemplateService: WorkTemplateService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.workTemplateTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'ltName', translateKey: this.getTranslateKey('ltName') },
        { field: 'ltDayPerWeek', translateKey: this.getTranslateKey('ltDayPerWeek') },
        {
          field: 'ltHourPerWeek',
          translateKey: this.getTranslateKey('ltHourPerWeek')
        },
        {
          field: 'ltIsMondayBool',
          translateKey: this.getTranslateKey('ltIsMondayBool')
        },
        {
          field: 'ltIsTuesdayBool',
          translateKey: this.getTranslateKey('ltIsTuesdayBool')
        },
        {
          field: 'ltIsWednesdayBool',
          translateKey: this.getTranslateKey('ltIsWednesdayBool')
        },
        {
          field: 'ltIsThursdayBool',
          translateKey: this.getTranslateKey('ltIsThursdayBool')
        },
        {
          field: 'ltIsFridayBool',
          translateKey: this.getTranslateKey('ltIsFridayBool')
        },
        {
          field: 'ltIsSaturdayBool',
          translateKey: this.getTranslateKey('ltIsSaturdayBool')
        },
        {
          field: 'ltIsSundayBool',
          translateKey: this.getTranslateKey('ltIsSundayBool')
        },
        { field: 'gltNbHourWd', translateKey: this.getTranslateKey('gltNbHourWd') },
        { field: 'gltNbHourWe', translateKey: this.getTranslateKey('gltNbHourWe') }
      ],
      data: []
    });
  }

  public ngOnInit() {
    this.loadWorkTemplateTableData();
  }

  public getComponentName(): string {
    return 'WorkTemplateComponent';
  }

  /**
   * Load Work Template table
   */
  private loadWorkTemplateTableData() {
    const min = 60;
    this.workTemplateTableDataSource.setData([]);
    this.workTemplateService.findAll().subscribe((results) => {
      const resultListCopy = results.list;
      resultListCopy.forEach((res: CustomBidtLaborTemplateDTO) => {
        if (
          res.ltNbHourWd !== null &&
          res.ltNbHourWd !== undefined &&
          res.ltHourPerWeek !== null &&
          res.ltHourPerWeek !== undefined
        ) {
          res.gltNbHourWd =
            this.getHoursPartIntoHour(res.ltNbHourWd).toString() +
            ':' +
            this.getMinutePartIntoHour(res.ltNbHourWd).toString();
          res.gltNbHourWe =
            res.ltNbHourWe !== null && res.ltNbHourWe !== undefined
              ? this.getHoursPartIntoHour(res.ltNbHourWe).toString() +
                ':' +
                this.getMinutePartIntoHour(res.ltNbHourWe).toString()
              : '0:00';

          res.ltHourPerWeek = res.ltHourPerWeek / min / min;
        }
      });
      resultListCopy.forEach((wT) => {
        wT.ltIsMondayBool = wT.ltIsMonday === 0 ? false : wT.ltIsMonday === 1 ? true : undefined;
        wT.ltIsTuesdayBool = wT.ltIsTuesday === 0 ? false : wT.ltIsTuesday === 1 ? true : undefined;
        wT.ltIsWednesdayBool = wT.ltIsWednesday === 0 ? false : wT.ltIsWednesday === 1 ? true : undefined;
        wT.ltIsThursdayBool = wT.ltIsThursday === 0 ? false : wT.ltIsThursday === 1 ? true : undefined;
        wT.ltIsFridayBool = wT.ltIsFriday === 0 ? false : wT.ltIsFriday === 1 ? true : undefined;
        wT.ltIsSaturdayBool = wT.ltIsSaturday === 0 ? false : wT.ltIsSaturday === 1 ? true : undefined;
        wT.ltIsSundayBool = wT.ltIsSunday === 0 ? false : wT.ltIsSunday === 1 ? true : undefined;
      });
      this.workTemplateTableDataSource.addData(resultListCopy);
    });
  }

  // get hours part into a duration (in hour)
  private getHoursPartIntoHour(globalTime: number): Number {
    let toReturn: number;
    const min = 60;

    toReturn = globalTime ? globalTime / (min * min) : 0;

    return parseInt(toReturn.toString(), 10);
  }

  // get minutes part into a duration (in minutes)
  private getMinutePartIntoHour(globalTime: number): Number {
    let toReturn: number;
    const min = 60;

    toReturn = globalTime ? (globalTime % (min * min)) / min : 0;

    return parseInt(toReturn.toString(), 10);
  }

  /**
   * On Add button click
   */
  public create() {
    this.openWorkTemplateForm(undefined, ComponentOpenMode.Create);
  }

  /**
   * On VIEW Button Click
   */
  public openWorkTemplate() {
    this.workTemplateTableDataSource.dataSelection.forEach((template) => {
      if (!!template) {
        if (template.ltName && template.ltName.trim().length > 0) {
          this.openWorkTemplateForm(template, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTemplate'));
        }
      }
    });
  }

  /**
   * Navigate to FORM
   */
  private openWorkTemplateForm(object: {} | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.WorkTemplateFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'WorkTemplateFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**
   * Delete selected Work Template
   */
  public deleteWorkTemplate() {
    const partialMessageKey =
      this.workTemplateTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedRows'
        : 'confirmDeleteSelectedRow';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const id: Number[] = [];
        this.workTemplateTableDataSource.dataSelection.forEach((result) => {
          if (result.id !== null && result.id !== undefined) {
            id.push(result.id);
          } else {
            super.throwUnboundLocalError('deleteWorkTemplate', 'result.id');
          }
        });
        this.workTemplateService.deleteLabour(id).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.loadWorkTemplateTableData();
    this.workTemplateTableDataSource.dataSelection = [];
  }
}
