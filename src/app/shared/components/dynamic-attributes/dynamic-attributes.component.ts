import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HAttributeDTO } from '../../../shared/types/api-types/h-attribute-dto.interface';
import { ControlByIdentifierDTO } from '../../types/api-output-types/session/control-by-identifier-dto.interface';
import { WorkflowUtils } from '../../utils/workflow-utils';

import { DynamicAttributesService } from './dynamic-attributes.service';
import { DynamicAttributes } from './types/dynamic-attributes.interface';

@Component({
  selector: 'aw-dynamic-attributes',
  templateUrl: './dynamic-attributes.component.html'
})
export class DynamicAttributesComponent<T extends HAttributeDTO> {
  private readonly defaultColumnWidth: number = 4;
  @Input('history') public historyObservable: Observable<T[]>;
  @Input() public deleteApi: string;
  @Input() public isReadOpenMode: boolean;
  @Input() public showHistory: boolean;

  @Input('workflowControls')
  public set workflowControls(workflowControls: ControlByIdentifierDTO[] | undefined) {
    this._workflowControls = workflowControls;
    this.controlByAttributeId = {};
    if (this._workflowControls) {
      this._workflowControls.forEach((control) => {
        const attributeId = WorkflowUtils.getAttributeId(control);
        if (attributeId) {
          this.controlByAttributeId[attributeId] = control;
        }
      });
    }
  }

  public get workflowControls(): ControlByIdentifierDTO[] | undefined {
    return this._workflowControls;
  }

  @Input('attributes')
  public set attributesNodes(value: DynamicAttributes[]) {
    if (!!value) {
      this._attributesNodes = value;

      this.dynamicAttributesService.sort(this.attributesNodes);
    }
  }
  public get attributesNodes(): DynamicAttributes[] {
    return this._attributesNodes;
  }

  @Input('columnWidth')
  public set columnWidth(columnWidth: number | undefined) {
    if (!!columnWidth) {
      this._columnWidth = columnWidth;
    }
  }

  public get columnWidth(): number | undefined {
    return this._columnWidth;
  }

  public showDynamicAttributesHistoric: boolean;
  public maxLabels: number[];

  private _attributesNodes: DynamicAttributes[];

  private _columnWidth: number;
  private _workflowControls: ControlByIdentifierDTO[] | undefined;
  public controlByAttributeId: { [id: string]: ControlByIdentifierDTO };

  public constructor(private readonly dynamicAttributesService: DynamicAttributesService) {
    this._attributesNodes = [];
    this.showDynamicAttributesHistoric = false;
    this.showHistory = false;
    this._columnWidth = this.defaultColumnWidth;
    this.controlByAttributeId = {};
  }

  public openHistoricAttributes(): void {
    this.showDynamicAttributesHistoric = true;
  }
}
