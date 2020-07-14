import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { DialogComponent } from '../../../shared/types/dialog-component';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { FindAlternativePnsByPnCodeOutput } from '../../types/api-output-types/product-structure-management/find-alternative-pns-by-pn-code-output.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { StringUtils } from '../../utils/string-utils';
import { TableDataSource } from '../table/table-data-source';

import { DialogSearchPnAlternativesService } from './dialog-search-pn-alternatives.service';

interface AlternativeRow {
  designation: string;
  interchangeability: string;
  manufacturerOtanCode: string;
  otanPnReference: string;
  pnCode: string;
  _obj: FindAlternativePnsByPnCodeOutput;
}

@Component({
  selector: 'aw-dialog-search-pn-alternatives[pn]',
  templateUrl: 'dialog-search-pn-alternatives.component.html'
})
export class DialogSearchPnAlternativesComponent extends DialogComponent implements OnInit {
  @Input()
  public pn: BirePnDTO;

  @Output()
  public readonly onSelected = new EventEmitter<BirePnDTO>();

  public alternativesTableDataSource: TableDataSource<AlternativeRow>;

  public constructor(private readonly dialogSearchPnAlternativesService: DialogSearchPnAlternativesService) {
    super(ComponentOpenMode.Write, 'DialogSearchPnAlternativesComponent');

    this.onSelected = new EventEmitter<BirePnDTO>();

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    this.load();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public onSelect(): void {
    this.onSelected.emit(this.alternativesTableDataSource.dataSelection[0]._obj.birePn);
  }

  // ////////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.initAlternativesTableDataSource();
  }

  private initAlternativesTableDataSource(): void {
    this.alternativesTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode'), width: '15%' },
        { field: 'designation', translateKey: this.getTranslateKey('designation'), width: '40%' },
        { field: 'manufacturerOtanCode', translateKey: this.getTranslateKey('manufacturerOtanCode'), width: '15%' },
        { field: 'otanPnReference', translateKey: this.getTranslateKey('otanPnReference'), width: '15%' },
        { field: 'interchangeability', translateKey: this.getTranslateKey('interchangeability'), width: '15%' }
      ]
    });
  }

  private load(): void {
    this.alternativesTableDataSource.setData([]);
    this.alternativesTableDataSource.isLoading = true;

    this.dialogSearchPnAlternativesService
      .findAlternatives(this.pn.pnCode as string)
      .pipe(
        finalize(() => {
          this.alternativesTableDataSource.isLoading = false;
        })
      )
      .subscribe((results) => {
        const alternatives = results
          .reduce((acc: FindAlternativePnsByPnCodeOutput[], current) => {
            const isPresent = acc.find((item) => item.birePn.pnCode === current.birePn.pnCode);
            if (!isPresent) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, [])
          .map((result) => {
            return {
              designation: StringUtils.orEmpty(result.birePn.articleDesignation),
              interchangeability: StringUtils.orEmpty(result.interchangeability),
              manufacturerOtanCode: StringUtils.orEmpty(result.birePn.manufacturerOtanCode),
              otanPnReference: StringUtils.orEmpty(result.birePn.otanPnReference),
              pnCode: StringUtils.orEmpty(result.birePn.pnCode),
              _obj: result
            };
          });

        this.alternativesTableDataSource.setData(alternatives);
      });
  }
}
