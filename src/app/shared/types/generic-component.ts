import {
  AfterViewChecked,
  DoCheck,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Calendar } from 'primeng/calendar';
import { Checkbox } from 'primeng/checkbox';
import { Dropdown } from 'primeng/dropdown';
import { BehaviorSubject, Subject } from 'rxjs';

import { AppConstants } from '../constants/app-constants';
import { FunctionObjectConstants } from '../constants/function-object-constants';
import { ComponentOpenMode } from '../enums/component-open-mode.enum';
import { UnboundLocalError } from '../errors/unbound-local-error';
import { SessionService } from '../services/session.service';
import { DomUtils } from '../utils/dom-utils';
import { ServiceLocator } from '../utils/service-locator';
import { WorkflowInputType, WorkflowUtils } from '../utils/workflow-utils';

import { UserWorkflowInput } from './api-input-types/session/user-workflow-input';
import { UserWorkflowOutput } from './api-output-types/session/user-workflow-output';

export abstract class GenericComponent implements AfterViewChecked, DoCheck, OnDestroy {
  @ViewChild('page')
  private readonly pageEltRef: ElementRef<HTMLElement>;
  @ViewChildren(Dropdown)
  private readonly dropdownList: QueryList<Dropdown>;
  @ViewChildren(Checkbox)
  private readonly checkboxList: QueryList<Checkbox>;
  @ViewChildren(Checkbox, { read: ElementRef })
  private readonly checkboxElementRefList: QueryList<ElementRef>;
  @ViewChildren(Calendar)
  private readonly calendarList: QueryList<Calendar>;
  @ViewChildren(MatMenuItem, { read: ElementRef })
  private readonly menuItemElementRefList: QueryList<ElementRef>;
  @ViewChildren(MatTab)
  private readonly tabList: QueryList<MatTab>;
  @ViewChildren(MatTab, { read: ElementRef })
  private readonly tabElementRefList: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren(MatTabGroup)
  private readonly tabGroupList: QueryList<MatTabGroup>;

  protected readonly _sessionService: SessionService;

  protected userWorkflowSubject: BehaviorSubject<UserWorkflowOutput>;
  private _userWorkflow: UserWorkflowOutput;
  public loadingWorkflow: boolean = false;
  public loadedWorkflow: boolean = false;

  private readonly _unsubscribe: Subject<void>;

  @Input('userWorkflow')
  public set userWorkflow(userWorkflow: UserWorkflowOutput) {
    this._userWorkflow = userWorkflow;
    this.userWorkflowSubject.next(userWorkflow);
  }

  public get userWorkflow(): UserWorkflowOutput {
    return this._userWorkflow;
  }

  protected constructor(private _openMode: ComponentOpenMode) {
    this._unsubscribe = new Subject<void>();
    this.userWorkflowSubject = new BehaviorSubject<UserWorkflowOutput>({});
    // Workaround to avoid a new constructor dependency in GenericComponent implementations.
    this._sessionService = ServiceLocator.injector.get(SessionService);
  }

  public ngAfterViewChecked(): void {
    this.handleWorkflow(this.userWorkflow);
  }

  // TODO: stop calling `handleWorkflowInput` during `ngDoCheck` Angular lifecycle
  public ngDoCheck(): void {
    this.handleWorkflowInput(this.userWorkflow);
  }

  protected loadUserWorkflow(initialStatusKey: string | undefined): void {
    const funcObjectKey = FunctionObjectConstants.getFuncObjKeyByComponentName(this.getComponentName());
    if (funcObjectKey) {
      const userWorkflowInput: UserWorkflowInput = {
        initialStatusKey,
        funcObjectKey,
        viewName: this.getComponentName()
      };

      this.loadingWorkflow = true;
      this._sessionService.getUserWorkflow(userWorkflowInput).subscribe({
        next: (userWorkflow) => {
          this.userWorkflow = userWorkflow;
          this.handleWorkflow(this.userWorkflow);
        },
        complete: () => {
          this.loadedWorkflow = true;
          this.loadingWorkflow = false;
        }
      });
    } else {
      this.loadedWorkflow = true;
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public get openMode(): ComponentOpenMode {
    return this._openMode;
  }

  public set openMode(openMode: ComponentOpenMode) {
    this.updateOpenMode(openMode);
  }

  public get isCreateOpenMode(): boolean {
    return this._openMode === ComponentOpenMode.Create;
  }

  public get isReadOpenMode(): boolean {
    return this._openMode === ComponentOpenMode.Read;
  }

  public get isWriteOpenMode(): boolean {
    return this._openMode === ComponentOpenMode.Write;
  }

  public endTransaction(event: Event): void {
    const eventTarget: HTMLElement = event.target as HTMLElement;

    const pageContainerElement = DomUtils.findParentElementByClassName(eventTarget, 'page-container');
    if (pageContainerElement) {
      // Remove spinner next to button text
      eventTarget.innerHTML = eventTarget.innerHTML.substring(0, eventTarget.innerHTML.indexOf('<div '));

      // Remove mask above page content
      pageContainerElement.removeChild(pageContainerElement.lastChild as ChildNode);

      // Enable all buttons in component header
      const pageHeaderWrapperElement = DomUtils.findChildByClassName(pageContainerElement, 'page-header-container');
      const awBtnList = DomUtils.findChildrenByClassName(pageHeaderWrapperElement, 'aw-btn');
      awBtnList.forEach((btnElement) => {
        btnElement[DomUtils.HTML_ELEMENT_DISABLED_PROPERTY_KEY] = false;
      });
    }
  }

  public scrollToAnchor(anchor: ElementRef<HTMLElement>, offset?: number): void {
    const bodyRect = document.body.getBoundingClientRect();
    const elementRect = anchor.nativeElement.getBoundingClientRect();
    const elementPosition = elementRect.top - bodyRect.top;
    const offsetPosition = elementPosition - AppConstants.TOP_BAR_HEIGHT - (offset || 0);

    DomUtils.scrollToPosition(offsetPosition);
  }

  public scrollToAnchorAndStopPropagation(anchor: ElementRef, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.scrollToAnchor(anchor);
  }

  public startTransaction(event: Event): void {
    const eventTarget: HTMLElement = event.target as HTMLElement;

    const pageContainerElement = DomUtils.findParentElementByClassName(eventTarget, 'page-container');
    if (pageContainerElement) {
      // Disable all buttons in component header
      const pageHeaderWrapperElement = DomUtils.findChildByClassName(pageContainerElement, 'page-header-container');
      const awBtnList = DomUtils.findChildrenByClassName(pageHeaderWrapperElement, 'aw-btn');
      awBtnList.forEach((btnElement) => {
        btnElement[DomUtils.HTML_ELEMENT_DISABLED_PROPERTY_KEY] = true;
      });

      // Add a mask above page content
      const mask: HTMLDivElement = document.createElement('div');
      mask.style.background = '#f0f0f0';
      mask.style.bottom = '0';
      mask.style.left = '0';
      mask.style.opacity = '0.5';
      mask.style.position = 'absolute';
      mask.style.right = '0';
      mask.style.top = '56px';
      mask.style.zIndex = `9`;
      pageContainerElement.appendChild(mask);

      // Add a spinner next to button text
      eventTarget.innerHTML = `${eventTarget.innerHTML}<div class="lds-hourglass" style="margin-left: 8px"></div>`;
    }
  }

  protected get unsubscribe(): Subject<void> {
    return this._unsubscribe;
  }

  protected differ(callback: (...args: unknown[]) => void, ...args: unknown[]): void {
    setTimeout(() => {
      callback.apply(args);
    });
  }

  protected getTranslateKey(key: string, componentName?: string): string {
    return `${componentName || this.getComponentName()}.${key}`;
  }

  protected handleWorkflow(userWorkflow: UserWorkflowOutput | undefined): void {
    if (this.pageEltRef) {
      WorkflowUtils.applyWorkflowOnMenuItem(userWorkflow, this.isReadOpenMode, this.menuItemElementRefList);
      WorkflowUtils.applyWorkflowOnDom(userWorkflow, this.pageEltRef, this.isReadOpenMode);
    }
  }

  protected handleWorkflowInput(userWorkflow: UserWorkflowOutput | undefined): void {
    if (this.tabList && this.tabList.length > 0) {
      WorkflowUtils.applyWorkflowOnTab(
        userWorkflow,
        this.pageEltRef,
        this.isReadOpenMode,
        this.tabList,
        this.tabElementRefList,
        this.tabGroupList
      );
    }
    const inputTypes: WorkflowInputType<Dropdown | Checkbox | Calendar>[] = [
      {
        selector: 'p-dropdown',
        inputQueryList: this.dropdownList,
        refAccessor: (input: Dropdown) => input.el,
        applyWorkflow: (input: Dropdown, workflowItem) => {
          input.disabled = !!workflowItem.isReadOnly;
          input.required = !!workflowItem.isMandatory;
        }
      },
      {
        selector: 'p-checkbox',
        inputQueryList: this.checkboxList,
        refAccessor: WorkflowUtils.getElementRefAcessorFromQueryLists(this.checkboxList, this.checkboxElementRefList),
        applyWorkflow: (input: Checkbox, workflowItem) => {
          input.disabled = !!workflowItem.isReadOnly;
        }
      },
      {
        selector: 'p-calendar',
        inputQueryList: this.calendarList,
        refAccessor: (input: Calendar) => input.el,
        applyWorkflow: (input: Calendar, workflowItem) => {
          input.disabled = !!workflowItem.isReadOnly;
          input.required = !!workflowItem.isMandatory;
        }
      }
    ];

    WorkflowUtils.applyWorkflowOnComponentInput(userWorkflow, inputTypes, this.pageEltRef, this.isReadOpenMode);
  }

  protected checkMandatoryFields<T>(item: T): string[] {
    return WorkflowUtils.checkMandatoryFields(this.userWorkflow, this.pageEltRef, this.isReadOpenMode, item);
  }

  protected clearErrors(): void {
    WorkflowUtils.clearErrors(this.pageEltRef);
  }

  protected throwUnboundLocalError(methodName: string, variableName: string): void {
    throw new UnboundLocalError({ methodName, variableName, componentName: this.getComponentName() });
  }

  protected updateOpenMode(selectedOpenMode: ComponentOpenMode): void {
    this._openMode = selectedOpenMode;
  }

  public abstract getComponentName(): string;
}
