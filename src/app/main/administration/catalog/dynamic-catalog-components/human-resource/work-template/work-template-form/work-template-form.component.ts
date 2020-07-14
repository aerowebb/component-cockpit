import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { orderBy as _orderBy } from 'lodash-es';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../../shared/services/tab.service';
import { SaveCatalogInput } from '../../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { FindAllWorkTemplateDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/find-all-work-template-dto.interface';
import { CustomBidtLaborTemplateDTO } from '../../../../../../../shared/types/api-types/custom-bidt-labor-template-dto.interface';
import { CustomBidtLaborTemplateHoursDTO } from '../../../../../../../shared/types/api-types/custom-bidt-labor-template-hours-dto.interface';
import { SearchResultsDTO } from '../../../../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../../../../shared/types/page-component-data.interface';
import { WorkTemplateService } from '../work-template.service';

export interface DaysList {
  SUNDAY: '1';
  MONDAY: '2';
  TUESDAY: '3';
  WEDNESDAY: '4';
  THRUSDAY: '5';
  FRIDAY: '6';
  SATURDAY: '7';
}

@Component({
  selector: 'aw-work-template-form',
  templateUrl: './work-template-form.component.html'
})
export class WorkTemplateFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public workTemplateField: CustomBidtLaborTemplateDTO;

  public hrOptions: SelectItem[];
  public minOptions: SelectItem[];
  private dayOption: SelectItem[];
  public hoursListTableDataSource: TableDataSource<CustomBidtLaborTemplateHoursDTO>;
  public showTemplateFormPopup: boolean;
  public hourDialogOpenMode: ComponentOpenMode;

  public wdHrs: string;
  public wdMin: string;
  public weHrs: string;
  public weMin: string;
  private id: number;
  public isDaySelected: boolean;

  public workTemplateTable: SearchResultsDTO<CustomBidtLaborTemplateDTO>;

  private rowIndexToEdit: number;
  public showSaveSpinner: boolean;

  private readonly daysList: DaysList = {
    SUNDAY: '1',
    MONDAY: '2',
    TUESDAY: '3',
    WEDNESDAY: '4',
    THRUSDAY: '5',
    FRIDAY: '6',
    SATURDAY: '7'
  };

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly translateService: TranslateService,
    private readonly workTemplateService: WorkTemplateService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();
  }

  public init(): void {
    this.workTemplateField = {};
    this.minOptions = [];
    this.hrOptions = [];
    this.dayOption = [];
    this.showTemplateFormPopup = false;
    this.isDaySelected = false;

    this.workTemplateTable = { list: [], moreResults: false };

    this.renderTimeDropDown();
    this.hoursListTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'gthDayOfWeek', translateKey: this.getTranslateKey('gthDayOfWeek') },
        {
          field: 'gthHourOfBeginning',
          translateKey: this.getTranslateKey('gthHourOfBeginning')
        },
        { field: 'gthHourOfEnd', translateKey: this.getTranslateKey('gthHourOfEnd') }
      ],
      data: []
    });
  }

  /**
   * Rendering dropdown
   */
  private renderTimeDropDown() {
    this.workTemplateService.getDayMap().subscribe((result) => {
      this.dayOption = result;
    });

    const hr = 24;
    for (let i = 0; i < hr; i++) {
      this.hrOptions.push({
        label: i.toString(),
        value: i.toString()
      });
    }

    const min = 61;
    const inc = 5;
    for (let i = 0; i < min; i = i + inc) {
      this.minOptions.push({
        label: i.toString(),
        value: i.toString()
      });
    }
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const context = this.isCreateOpenMode
        ? 'tab.createMode'
        : this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId).ltName;

      this.displayComponentContext(context, this.isCreateOpenMode);

      if (!!this.componentData.objectId) {
        this.id = this.serializationService.deserialize(this.componentData.objectId).id;
      }

      this.loadWorkTemplateDate();
    }
  }

  private loadWorkTemplateDate() {
    this.init();
    if (!!this.componentData.objectId) {
      this.getWorkTemplateById();
      this.getHoursTableData();
    }
  }

  /**
   * Fetching data of current work template
   */
  private getWorkTemplateById() {
    this.workTemplateService.getWorkTemplateById(this.id).subscribe((results) => {
      const cloneObj: CustomBidtLaborTemplateDTO = results;

      const time = { ...cloneObj };

      if (!!time) {
        const wdTime =
          time.ltNbHourWd !== null && time.ltNbHourWd !== undefined
            ? `${parseInt(this.getHoursPartIntoHour(time.ltNbHourWd).toString(), 10)}:${parseInt(
                this.getMinutePartIntoHour(time.ltNbHourWd).toString(),
                10
              )}`
            : '0:00';
        const weTime =
          time.ltNbHourWe !== null && time.ltNbHourWe !== undefined
            ? `${parseInt(this.getHoursPartIntoHour(time.ltNbHourWe).toString(), 10)}:${parseInt(
                this.getMinutePartIntoHour(time.ltNbHourWe).toString(),
                10
              )}`
            : '0:00';

        this.wdHrs = wdTime.split(':')[0];
        this.wdMin = wdTime.split(':')[1];

        this.weHrs = weTime.split(':')[0];
        this.weMin = weTime.split(':')[1];

        this.workTemplateField = time;

        this.onChangeDay();
      } else {
        super.throwUnboundLocalError('getWorkTemplateById', 'time');
      }
    });
  }

  public onChangeDay() {
    const cloneObj = this.workTemplateField;

    // Enabling hour list table
    this.isDaySelected =
      cloneObj.ltIsFriday ||
      cloneObj.ltIsMonday ||
      cloneObj.ltIsSaturday ||
      cloneObj.ltIsSunday ||
      cloneObj.ltIsThursday ||
      cloneObj.ltIsTuesday ||
      cloneObj.ltIsWednesday
        ? true
        : false;

    // Clearing the table in case no day is selected
    if (
      !cloneObj.ltIsFriday &&
      !cloneObj.ltIsMonday &&
      !cloneObj.ltIsSaturday &&
      !cloneObj.ltIsSunday &&
      !cloneObj.ltIsThursday &&
      !cloneObj.ltIsTuesday &&
      !cloneObj.ltIsWednesday
    ) {
      this.hoursListTableDataSource.setData([]);
    }
  }

  // get hours part into a duration (in hour)
  private getHoursPartIntoHour(globalTime: number): number {
    let toReturn: number;
    const min = 60;
    toReturn = globalTime != undefined ? globalTime / (min * min) : 0;

    return toReturn;
  }

  // get minutes part into a duration (in minutes)
  private getMinutePartIntoHour(globalTime: number): Number {
    let toReturn: number;
    const min = 60;

    toReturn = globalTime != undefined ? (globalTime % (min * min)) / min : 0;

    return parseInt(toReturn.toString(), 10);
  }

  /**
   * Event to get hour table data
   */
  private getHoursTableData() {
    this.workTemplateService.findByLaborTemplateId(this.id).subscribe((results) => {
      this.hoursListTableDataSource.setData([]);
      if (results && results.length > 0) {
        const sortedDays = _orderBy(results, ['thDayOfWeek'], ['asc']);
        sortedDays.forEach((res) => {
          if (res.thHourOfBeginning !== null && res.thHourOfBeginning !== undefined && res.thHourOfEnd) {
            res.gthHourOfBeginning = `${parseInt(
              this.getHoursPartIntoHour(res.thHourOfBeginning).toString(),
              10
            )}:${parseInt(this.getMinutePartIntoHour(res.thHourOfBeginning).toString(), 10)}`;
            res.gthHourOfEnd = `${parseInt(this.getHoursPartIntoHour(res.thHourOfEnd).toString(), 10)}:${parseInt(
              this.getMinutePartIntoHour(res.thHourOfEnd).toString(),
              10
            )}`;

            this.dayOption.forEach((data) => {
              if (
                res.thDayOfWeek !== null &&
                res.thDayOfWeek !== undefined &&
                res.thDayOfWeek.toString() === data.value
              ) {
                res.gthDayOfWeek = data.label;
              }
            });

            this.hoursListTableDataSource.addData([res]);
          } else {
            super.throwUnboundLocalError('getHoursTableData', 'res');
          }
        });
      }
    });
  }

  /**
   * Event on Add button click of hour table
   */
  public addNewHour() {
    this.hoursListTableDataSource.dataSelection = [];
    this.showTemplateFormPopup = true;
    this.hourDialogOpenMode = ComponentOpenMode.Create;
  }

  /**
   * Event on addition of new hour entry in hour table
   */
  public onCreateHour(ev: CustomBidtLaborTemplateHoursDTO) {
    this.hoursListTableDataSource.addData([ev]);
  }

  /**
   * Event on update event called from update popup
   */
  public onUpdateHour(event) {
    this.hoursListTableDataSource.replaceData(this.hoursListTableDataSource.dataSrc[this.rowIndexToEdit], event);
    this.hoursListTableDataSource.dataSelection = [];
  }

  public getComponentName(): string {
    return 'WorkTemplateFormComponent';
  }

  /**
   * On edit button click of hour table
   */
  public editWorkTemplateForm() {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.componentData.openMode = ComponentOpenMode.Write;
  }

  /**
   * Cancel event
   */
  public cancelWorkTemplateForm(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.loadWorkTemplateDate();
  }

  /**
   * Event on delete hour table data
   */
  public deleteHours() {
    this.hoursListTableDataSource.deleteDataSelection();
  }

  /**
   * Event on Edit Hour table button click
   */
  public editHour() {
    this.hoursListTableDataSource.dataSelection.forEach((result) => {
      this.hoursListTableDataSource.dataSrc.forEach((res, index) => {
        if (
          result.bidtLaborTemplateId === res.bidtLaborTemplateId &&
          result.thDayOfWeek === res.thDayOfWeek &&
          result.thHourOfBeginning === res.thHourOfBeginning &&
          result.thHourOfEnd === res.thHourOfEnd
        ) {
          this.rowIndexToEdit = index;
        }
      });
    });
    this.showTemplateFormPopup = true;
    this.hourDialogOpenMode = ComponentOpenMode.Write;
  }

  private returnCheckBoxResult(res) {
    return res ? 1 : 0;
  }

  /**
   * Generate Days and hours per week
   */
  private generateDaysAndHrsPerWeek(data) {
    let dayPerWeek = 0;
    let hoursPerWeek = 0;
    const sec = 3600;
    const workingDaysHr = parseInt(this.wdHrs, 10);
    const workingDaysMin = parseInt(this.wdMin, 10);
    const nbHourWD =
      parseInt(this.getHoursPartInSecondIntoHour(workingDaysHr).toString(), 10) +
      parseInt(this.getMinutePartInSecondIntoHour(workingDaysMin).toString(), 10);

    const nbHourWE = parseInt(this.weHrs, 10) + parseInt(this.weMin, 10);

    // define total hours and day per week
    if (data.ltIsMonday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWD;
    }
    if (data.ltIsTuesday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWD;
    }
    if (data.ltIsWednesday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWD;
    }
    if (data.ltIsThursday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWD;
    }
    if (data.ltIsFriday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWD;
    }
    if (data.ltIsSaturday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWE;
    }
    if (data.ltIsSunday) {
      dayPerWeek = dayPerWeek + 1;
      hoursPerWeek = hoursPerWeek + nbHourWE;
    }

    this.workTemplateField.ltDayPerWeek = dayPerWeek;
    this.workTemplateField.ltHourPerWeek = hoursPerWeek * sec;
  }

  /**
   * Chekcing validity for All Hours
   */
  private checkValidityOfAllHours(data) {
    const nbHourWD =
      this.getHoursPartInSecondIntoHour(parseInt(this.wdHrs, 10)) +
      this.getMinutePartInSecondIntoHour(parseInt(this.wdMin, 10));
    const nbHourWE =
      this.getHoursPartInSecondIntoHour(parseInt(this.weHrs, 10)) +
      this.getMinutePartInSecondIntoHour(parseInt(this.weMin, 10));

    const theoreticalHoursWD =
      // tslint:disable-next-line:radix
      parseInt(nbHourWD.toString()).toString() + ':' + parseInt(nbHourWD.toString()).toString();
    const theoreticalHoursWE =
      parseInt(nbHourWE.toString(), 10).toString() + ':' + parseInt(nbHourWE.toString(), 10).toString();

    // MONDAY
    if (data.ltIsMonday === 1 && this.isDayDefinedWithHours(this.daysList.MONDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.MONDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.MONDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('MONDAY', calculatedHoursTxt, theoreticalHoursWD);

        return false;
      }
    }

    // TUESDAY
    if (data.ltIsTuesday === 1 && this.isDayDefinedWithHours(this.daysList.TUESDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.TUESDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.TUESDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('TUESDAY', calculatedHoursTxt, theoreticalHoursWD);

        return false;
      }
    }

    // WEDNESDAY
    if (data.ltIsWednesday === 1 && this.isDayDefinedWithHours(this.daysList.WEDNESDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.WEDNESDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.WEDNESDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('WEDNESDAY', calculatedHoursTxt, theoreticalHoursWD);

        return false;
      }
    }

    // THRUSDAY
    if (data.ltIsThursday === 1 && this.isDayDefinedWithHours(this.daysList.THRUSDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.THRUSDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.THRUSDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('THURSDAY', calculatedHoursTxt, theoreticalHoursWD);

        return false;
      }
    }

    // FRIDAY
    if (data.ltIsFriday === 1 && this.isDayDefinedWithHours(this.daysList.FRIDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.FRIDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.FRIDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )} : ${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('FRIDAY', calculatedHoursTxt, theoreticalHoursWD);

        return false;
      }
    }

    // Saturday
    if (data.ltIsSaturday === 1 && this.isDayDefinedWithHours(this.daysList.SATURDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.SATURDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.SATURDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('SATURDAY', calculatedHoursTxt, theoreticalHoursWE);

        return false;
      }
    }

    // Sunday
    if (data.ltIsSunday === 1 && this.isDayDefinedWithHours(this.daysList.SUNDAY)) {
      const calculatedHours = this.getTotalHoursPerDayInSecond(this.daysList.SUNDAY);
      if (!(this.getTotalHoursPerDayInSecond(this.daysList.SUNDAY) === calculatedHours)) {
        const calculatedHoursTxt = `${parseInt(
          this.getHoursPartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(),
          10
        )}:${parseInt(this.getMinutePartIntoHour(parseInt(calculatedHours.toString(), 10)).toString(), 10)}`;

        // ERROR MSG
        this.showHoursNotCorrectError('SUNDAY', calculatedHoursTxt, theoreticalHoursWE);

        return false;
      }
    }

    return true;
  }

  private showHoursNotCorrectError(day: string, calculatedHoursTxt: string, theoreticalHoursWD: string) {
    this.messageService.showErrorMessage(
      `${this.translateService.instant(
        this.getTranslateKey('hoursNotCorrect')
      )}${day} : ${calculatedHoursTxt} <> ${theoreticalHoursWD}`
    );
  }

  // get hours part into a duration (in second)
  private getHoursPartInSecondIntoHour(globalTime: number): number {
    let toReturn = 0;
    const sec = 60;
    let time: number = globalTime;
    time = this.getHoursPartIntoHour(globalTime);
    if (globalTime != undefined) {
      toReturn = time * sec * sec;
    }

    return toReturn;
  }

  // get minutes part into a duration (in second)
  private getMinutePartInSecondIntoHour(globalTime): number {
    let toReturn = 0;
    const sec = 0;
    let time = globalTime;
    time = this.getMinutePartIntoHour(globalTime);
    if (globalTime !== undefined) {
      toReturn = time * sec;
    }

    return toReturn;
  }

  // search if a shift has been defined for a day
  private isDayDefinedWithHours(day: string): boolean {
    const dayOfWeek = parseInt(day, 10);
    let isFound = false;
    this.hoursListTableDataSource.dataSrc.forEach((res) => {
      if (res.thDayOfWeek === dayOfWeek) {
        isFound = true;
      }
    });

    return isFound ? true : false;
  }

  // get total hours of shifts for a day (in second)
  private getTotalHoursPerDayInSecond(day: string): Number {
    const dayOfWeek = parseInt(day, 10);
    let toReturn = 0;

    this.hoursListTableDataSource.dataSrc.forEach((res) => {
      if (
        res.thHourOfEnd !== null &&
        res.thHourOfEnd !== undefined &&
        res.thHourOfBeginning !== null &&
        res.thHourOfBeginning !== undefined &&
        res.thDayOfWeek === dayOfWeek
      ) {
        toReturn += res.thHourOfEnd - res.thHourOfBeginning;
      }
    });

    return toReturn;
  }

  /**
   * Save Work Template Data
   */
  public saveWorkTemplateForm() {
    const createMode = ComponentOpenMode.Create; // 0
    const editMode = ComponentOpenMode.Write; // 2
    if (this.isScreenValid()) {
      if (this.componentData.openMode === createMode) {
        this.save();
      } else if (this.componentData.openMode === editMode) {
        const min = 60;
        this.workTemplateService.findAll().subscribe((results) => {
          results.list.forEach((res: CustomBidtLaborTemplateDTO) => {
            res.gltNbHourWd =
              res.ltNbHourWd !== null && res.ltNbHourWd !== undefined
                ? this.getHoursPartIntoHour(res.ltNbHourWd).toString() +
                  ':' +
                  this.getMinutePartIntoHour(res.ltNbHourWd).toString()
                : '0:00';
            res.gltNbHourWe =
              res.ltNbHourWe !== null && res.ltNbHourWe !== undefined
                ? this.getHoursPartIntoHour(res.ltNbHourWe).toString() +
                  ':' +
                  this.getMinutePartIntoHour(res.ltNbHourWe).toString()
                : '0:00';

            res.ltHourPerWeek =
              res.ltHourPerWeek !== null && res.ltHourPerWeek !== undefined ? res.ltHourPerWeek / min / min : 0;
            this.workTemplateTable.list.push(res);
          });
          const workTemplateInDB = this.workTemplateTable.list.some((wt) => wt.id === this.workTemplateField.id);
          if (workTemplateInDB) {
            this.save();
          } else {
            this.messageService.showErrorMessage('global.internalServerError');
          }
        });
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  private save(): void {
    const sec = 3600;
    const min = 60;

    // Setting up the DTO
    this.workTemplateField.ltNbHourWd = parseInt(this.wdHrs, 10) * sec + parseInt(this.wdMin, 10) * min;
    this.workTemplateField.ltNbHourWe = parseInt(this.weHrs, 10) * sec + parseInt(this.weMin, 10) * min;
    this.workTemplateField.ltIsFriday = this.returnCheckBoxResult(this.workTemplateField.ltIsFriday);
    this.workTemplateField.ltIsMonday = this.returnCheckBoxResult(this.workTemplateField.ltIsMonday);
    this.workTemplateField.ltIsSaturday = this.returnCheckBoxResult(this.workTemplateField.ltIsSaturday);
    this.workTemplateField.ltIsSunday = this.returnCheckBoxResult(this.workTemplateField.ltIsSunday);
    this.workTemplateField.ltIsThursday = this.returnCheckBoxResult(this.workTemplateField.ltIsThursday);
    this.workTemplateField.ltIsTuesday = this.returnCheckBoxResult(this.workTemplateField.ltIsTuesday);
    this.workTemplateField.ltIsWednesday = this.returnCheckBoxResult(this.workTemplateField.ltIsWednesday);

    if (this.checkValidityOfAllHours(this.workTemplateField)) {
      this.generateDaysAndHrsPerWeek(this.workTemplateField);
      const dto: FindAllWorkTemplateDTO = {
        bidtLaborTemplateDTO: this.workTemplateField,
        bidtLaborTemplateHoursDTO: this.hoursListTableDataSource.dataSrc
      };

      const saveCatalogInput: SaveCatalogInput = {
        bidtLaborTemplateDTOAddorUpdateList: [dto]
      };

      this.showSaveSpinner = true;
      this.workTemplateService.saveCatalog(saveCatalogInput).subscribe((result) => {
        if (!!this.workTemplateField.ltName) {
          if (result && result.workTemplateId) {
            this.id = result.workTemplateId;
          }
          this.componentData.objectId = this.serializationService.serialize(this.workTemplateField);
          this.displayComponentContext(this.workTemplateField.ltName, this.isWriteOpenMode);
          this.updateOpenMode(ComponentOpenMode.Write);
          this.componentData.openMode = ComponentOpenMode.Write;

          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));
          this.loadWorkTemplateDate();
          this.showSaveSpinner = false;
        } else {
          super.throwUnboundLocalError('saveWorkTemplateForm', 'this.workTemplateField.ltName');
          this.showSaveSpinner = false;
        }
      });
    }
  }

  /**
   * Valiating screen
   */
  private isScreenValid(): boolean {
    if (
      this.workTemplateField.ltName &&
      this.workTemplateField.ltName.trim().length !== 0 &&
      this.wdHrs !== null &&
      this.wdHrs !== undefined &&
      this.wdMin !== null &&
      this.wdMin !== undefined &&
      this.weHrs !== null &&
      this.weHrs !== undefined
    ) {
      return true;
    }

    return false;
  }

  public reloadForm() {
    this.loadWorkTemplateDate();
  }
}
