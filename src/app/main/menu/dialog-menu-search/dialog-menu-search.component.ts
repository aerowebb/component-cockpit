import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MenuConstants } from '../../../shared/constants/menu-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { KeyValue } from '../../../shared/types/key-value.interface';
import { Tab } from '../../../shared/types/tab.interface';
import { ListUtils } from '../../../shared/utils/list-utils';
import { MenuService } from '../menu.service';
import { MenuEntry } from '../types/menu-entry.interface';

@Component({
  selector: 'aw-dialog-menu-search',
  styleUrls: ['./dialog-menu-search.component.scss'],
  templateUrl: './dialog-menu-search.component.html'
})
export class DialogMenuSearchComponent extends DialogComponent implements OnInit {
  @Input()
  public currentTab: Tab | undefined;

  @Input('menuEntries')
  public menuEntryList: MenuEntry[];

  @ViewChild('searchTextElement')
  public searchTextElement: ElementRef<HTMLElement>;

  public componentList: KeyValue<string>[];
  public currentSubMenuEntryList: MenuEntry[];
  public currentSubMenuEntrySelected: MenuEntry | undefined;
  public searchText: string | undefined;
  public topMenuEntryList: MenuEntry[];

  public constructor(public menuService: MenuService, private readonly translateService: TranslateService) {
    super(ComponentOpenMode.Write, 'DialogMenuSearchComponent');

    this.init();
  }

  public ngOnInit(): void {
    this.setMenuEntryList();
    this.setTopMenuEntryList();

    setTimeout(() => {
      this.searchTextElement.nativeElement.focus();
    });
  }

  public onSelectMenuEntry(menuEntryKey: string): void {
    this.menuService.openMenuEntry(menuEntryKey);

    this.closeDialog();
  }

  public selectTopMenuEntry(menuEntry: MenuEntry): void {
    this.currentSubMenuEntrySelected = menuEntry;
    this.currentSubMenuEntryList = this.currentSubMenuEntrySelected.submenus;
  }

  private extractAllComponentFromMenuEntryList(menuEntryList: MenuEntry[]): string[] {
    let results: string[] = [];

    let queue = [...menuEntryList];
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as MenuEntry;

      if (ListUtils.isEmpty(first.submenus)) {
        results = [...results, first.key];
      } else {
        queue = [...queue, ...first.submenus];
      }
    }

    return results;
  }

  private init(): void {
    this.componentList = [];
    this.currentSubMenuEntryList = [];
    this.currentSubMenuEntrySelected = undefined;
    this.menuEntryList = [];
    this.searchText = undefined;
    this.topMenuEntryList = [];
  }

  private setMenuEntryList(): void {
    this.componentList = this.extractAllComponentFromMenuEntryList(this.menuEntryList)
      .map((key) => {
        return { key, value: this.translateService.instant('transaction.' + key) };
      })
      .sort((obj1, obj2) => obj1.value.localeCompare(obj2.value));
  }

  private setTopMenuEntryList(): void {
    this.topMenuEntryList = [...this.menuEntryList];

    if (this.topMenuEntryList.length === 1) {
      this.currentSubMenuEntrySelected = this.topMenuEntryList[0];
    } else if (!!this.currentTab) {
      const currentMenuEntryKey = MenuConstants.COMPONENTS_ROOT[this.currentTab.data.componentId];

      if (!!currentMenuEntryKey) {
        this.currentSubMenuEntrySelected = this.topMenuEntryList.find((elt) => elt.key === currentMenuEntryKey);

        if (!!this.currentSubMenuEntrySelected) {
          this.selectTopMenuEntry(this.currentSubMenuEntrySelected);
        }
      }
    }
  }
}
