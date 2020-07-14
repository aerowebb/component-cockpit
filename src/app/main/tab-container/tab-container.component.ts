import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TabService } from '../../shared/services/tab.service';
import { PageComponent } from '../../shared/types/page-component';
import { PageComponentData } from '../../shared/types/page-component-data.interface';
import { Tab } from '../../shared/types/tab.interface';
import { DynamicComponentLoader } from '../dynamic-component-loader/dynamic-component-loader.service';

@Component({
  selector: 'aw-tab-container',
  template: `
    <ng-container #container></ng-container>
  `
})
export class TabContainerComponent implements OnDestroy, OnInit {
  @Input()
  public tab: Tab;

  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;

  private readonly unsubscribe: Subject<void>;

  public constructor(
    private readonly ref: ChangeDetectorRef,
    private readonly dynamicComponentLoader: DynamicComponentLoader,
    private readonly tabService: TabService
  ) {
    this.unsubscribe = new Subject<void>();

    this.registerTabToHideObservable();
    this.registerTabToShowObservable();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public ngOnInit(): void {
    if (!!this.container && !!this.tab && !!this.tab.data && !!this.tab.data.componentId) {
      this.dynamicComponentLoader
        .getComponentFactory<PageComponent<PageComponentData>>(this.tab.data.componentId)
        .subscribe(
          (componentFactory) => {
            const componentRef: ComponentRef<PageComponent<PageComponentData>> = this.container.createComponent(
              componentFactory
            );
            componentRef.instance.componentData = this.tab.data;

            this.tabService.register(this.tab, componentRef);
          },
          (error) => {
            console.warn(error);
          }
        );
    }
  }

  private registerTabToHideObservable(): void {
    this.tabService.tabToHide$.pipe(takeUntil(this.unsubscribe)).subscribe((tab) => {
      if (tab.id === this.tab.id) {
        this.ref.detach();
      }
    });
  }

  private registerTabToShowObservable(): void {
    this.tabService.tabToShow$.pipe(takeUntil(this.unsubscribe)).subscribe((tab) => {
      if (tab.id === this.tab.id) {
        this.ref.reattach();
      }
    });
  }
}
