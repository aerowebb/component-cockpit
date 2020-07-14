import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface StepItem {
  label: string;
  status: 'current' | 'next' | 'previous';
  tooltip?: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-stepper[steps]',
  styleUrls: ['./stepper.component.scss'],
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  @Input()
  public steps: StepItem[];
}
