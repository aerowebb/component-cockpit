import { ElementRef } from '@angular/core';

export interface PageTocEntry {
  id: string;
  anchor: ElementRef;
  label: string;
}
