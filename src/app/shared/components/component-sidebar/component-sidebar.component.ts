import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { SidebarVisibility } from '../../enums/sidebar-visibility.enum';
import { GenericComponent } from '../../types/generic-component';

import { PageTocService } from './page-toc.service';
import { PageTocEntry } from './types/page-toc-entry.interface';

@Component({
  selector: 'aw-component-sidebar',
  templateUrl: './component-sidebar.component.html'
})
export class ComponentSidebarComponent extends GenericComponent {
  @Input()
  public toc: PageTocEntry[];

  @Input()
  public get visibility(): SidebarVisibility {
    return this._visibility;
  }
  public set visibility(value: SidebarVisibility) {
    this._visibility = value;
  }

  @Output()
  public visibilityChange: EventEmitter<SidebarVisibility>;

  private errorMarkerList: string[];
  private selectedPageTocEntry: string | undefined;
  private _visibility: SidebarVisibility;

  public constructor(private readonly pageTocService: PageTocService) {
    super(ComponentOpenMode.Write);

    this.init();

    this.registerAnchorSelectedObservable();
    this.registerErrorMarkerListObservable();
  }

  public getComponentName(): string {
    return 'ComponentSidebarComponent';
  }

  public get collapsed(): boolean {
    return this.visibility === SidebarVisibility.Collapsed;
  }

  public get expanded(): boolean {
    return this.visibility === SidebarVisibility.Expanded;
  }

  public isActivePageTocEntry(pageTocEntry: PageTocEntry): boolean {
    return pageTocEntry.id === this.selectedPageTocEntry;
  }

  public isPageTocEntryWithAlert(pageTocEntry: PageTocEntry): boolean {
    return this.errorMarkerList.some((errorMarker) => errorMarker === pageTocEntry.id);
  }

  public onClickPageTocEntry(pageTocEntry: PageTocEntry): void {
    this.pageTocService.setPageTocEntrySelected(pageTocEntry.id);

    this.selectedPageTocEntry = pageTocEntry.id;
    super.scrollToAnchor(pageTocEntry.anchor);
  }

  public toggleSidebarVisibility(): void {
    this.visibility =
      this.visibility === SidebarVisibility.Collapsed ? SidebarVisibility.Expanded : SidebarVisibility.Collapsed;
    this.visibilityChange.emit(this.visibility);
  }

  private init(): void {
    this.errorMarkerList = [];
    this.selectedPageTocEntry = undefined;
    this.visibilityChange = new EventEmitter<SidebarVisibility>();
  }

  private registerAnchorSelectedObservable(): void {
    this.pageTocService.anchorSelected$.pipe(takeUntil(this.unsubscribe)).subscribe((anchorSelected) => {
      this.selectedPageTocEntry = anchorSelected;
    });
  }

  private registerErrorMarkerListObservable(): void {
    this.pageTocService.errorMarkerList$.pipe(takeUntil(this.unsubscribe)).subscribe((errorMarkerList) => {
      this.errorMarkerList = errorMarkerList;
    });
  }
}
