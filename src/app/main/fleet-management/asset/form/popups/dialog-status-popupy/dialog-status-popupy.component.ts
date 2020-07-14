import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { SuperiorAssetDTO } from '../../../../../../shared/types/api-types/superior-asset-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';

@Component({
  selector: 'aw-dialog-status-popupy',
  templateUrl: './dialog-status-popupy.component.html',
  styleUrls: ['./dialog-status-popupy.component.scss']
})
export class DialogStatusPopupyComponent extends DialogComponent implements OnInit {
  @Input() public equipmentStatus: SuperiorAssetDTO;
  private statusList: LabelValue<string>[];

  @Output()
  public onValidated: EventEmitter<Date> = new EventEmitter<Date>();

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogStatusPopupyComponent');
  }

  public ngOnInit() {
    this.propertiesService.getObjectStatusAllList(false, false, false, '', false).subscribe((results) => {
      this.statusList = results;
      LabelValueUtils.stringValueToLabel<SuperiorAssetDTO>(this.equipmentStatus, 'statusState', this.statusList);
    });
  }
}
