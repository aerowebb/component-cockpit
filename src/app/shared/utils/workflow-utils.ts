import { ElementRef, QueryList } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { SelectItem } from 'primeng/api';

import { DynamicAttributes } from '../components/dynamic-attributes/types/dynamic-attributes.interface';
import { ControlByIdentifierDTO } from '../types/api-output-types/session/control-by-identifier-dto.interface';
import { UserWorkflowOutput } from '../types/api-output-types/session/user-workflow-output';

import { DomUtils } from './dom-utils';
import { ObjectUtils } from './object-utils';
import { StringUtils } from './string-utils';

export interface WorkflowInputType<T> {
  selector: string;
  inputQueryList: QueryList<T>;
  refAccessor: (input: T) => ElementRef | undefined;
  applyWorkflow: (input: T, workflowItem: ControlByIdentifierDTO) => void;
}

export interface WorkflowItemDTO extends ControlByIdentifierDTO {
  initialIsReadOnly?: boolean;
  initialIsMandatory?: boolean;
}

interface InputElementRef<T> {
  input?: T;
  elementRef?: ElementRef;
}

export interface AttributeField {
  attributeOrigin: string;
  attributeId: string;
  attributeField: string;
}

export interface GenericItemDTO {
  dynamicAttributes?: DynamicAttributes[];
}

export interface TabDescription {
  id: string;
  tab: MatTab;
  generatedElement: HTMLElement;
  inactivable: boolean;
}

const ERROR_CLASS = 'alert';
const WORKFLOW_SUFFIX = '--wf';
const REQUIRED_SELECTORS: string[] = ['.form-group', '.section-title', '.grid-cell-title'];
const ITEM_IDENTIFIER_ATTRIBUTE_PREFIX = 'attribute';
const CONTROL_GROUP_ATTRIBUTE_PREFIX = 'attribute';

export class WorkflowUtils {
  public static readonly ALL_STATUS = 'ALL';
  public static readonly ORIGIN_BIDO = 'bido';
  public static readonly ORIGIN_BIRE = 'bire';

  /******************************************************************************
   * Status support
   *************************************************************************** */

  public static filterWorkflowStatusList<T extends SelectItem>(
    userWorkflow: UserWorkflowOutput | undefined,
    statusList: T[],
    currentStatus: string | undefined
  ): T[] {
    let filteredStatusList = statusList;
    if (userWorkflow && userWorkflow.targetStatusKeyList) {
      const targetStatusKeyList: string[] = userWorkflow.targetStatusKeyList;
      filteredStatusList = statusList.filter(
        (status) => status.value === currentStatus || targetStatusKeyList.indexOf(status.value) > -1
      );
    }

    return filteredStatusList;
  }

  /******************************************************************************
   * Workflow application
   *************************************************************************** */

  public static applyWorkflow(
    userWorkflow: UserWorkflowOutput | undefined,
    isReadOpenMode: boolean,
    callback: (item: WorkflowItemDTO) => void
  ): void {
    if (userWorkflow && userWorkflow.listControlByIdentifier && userWorkflow.listControlByIdentifier.length > 0) {
      userWorkflow.listControlByIdentifier.forEach((workflowItem) => {
        // Ajusting expected display to component state
        const isReadOnly = workflowItem.isReadOnly || isReadOpenMode;
        const isMandatory = !!workflowItem.isMandatory && !isReadOnly && workflowItem.isVisible;
        const item: WorkflowItemDTO = {
          ...workflowItem,
          isMandatory,
          isReadOnly,
          initialIsReadOnly: workflowItem.isReadOnly,
          initialIsMandatory: workflowItem.isMandatory
        };
        callback(item);
      });
    }
  }

  public static applyWorkflowOnComponentInput<T>(
    userWorkflow: UserWorkflowOutput | undefined,
    inputTypes: WorkflowInputType<T>[],
    parentElementRef: ElementRef,
    isReadOpenMode: boolean
  ) {
    const presentInputTypes = inputTypes.filter((type) => type.inputQueryList && type.inputQueryList.length > 0);
    if (presentInputTypes.length > 0) {
      WorkflowUtils.applyWorkflow(userWorkflow, isReadOpenMode, (workflowItem) => {
        presentInputTypes.forEach((type) => {
          const domElement =
            parentElementRef &&
            (parentElementRef.nativeElement.querySelector(
              `#${workflowItem.itemIdentifier} ${type.selector}`
            ) as HTMLElement);

          if (domElement) {
            const input = type.inputQueryList.find((item) => {
              const elementRef: ElementRef | undefined = type.refAccessor(item);

              return !!elementRef && elementRef.nativeElement === domElement;
            });

            if (input) {
              type.applyWorkflow(input, workflowItem);
            }
          }
        });
      });
    }
  }

  public static applyWorkflowOnMenuItem(
    userWorkflow: UserWorkflowOutput | undefined,
    isReadOpenMode: boolean,
    menuItemList: QueryList<ElementRef<HTMLElement>>
  ): void {
    WorkflowUtils.applyWorkflow(userWorkflow, isReadOpenMode, (workflowItem) => {
      menuItemList.forEach((eltRef) => {
        if (eltRef.nativeElement.getAttribute('id') === workflowItem.itemIdentifier) {
          WorkflowUtils.applyWorkflowOnDomElement(eltRef.nativeElement, workflowItem);
        }
      });
    });
  }

  public static applyWorkflowOnTab(
    userWorkflow: UserWorkflowOutput | undefined,
    pageEltRef: ElementRef<HTMLElement>,
    isReadOpenMode: boolean,
    tabList: QueryList<MatTab>,
    tabElementRefList: QueryList<ElementRef<HTMLElement>>,
    tabGroupList: QueryList<MatTabGroup>
  ) {
    if (pageEltRef && pageEltRef.nativeElement) {
      // Hypothesis querySelector and QueryLists are in the same order
      const elementList: NodeListOf<Element> = pageEltRef.nativeElement.querySelectorAll('.mat-tab-label');
      if (userWorkflow && elementList.length > 0 && tabElementRefList && tabList) {
        const refArray: ElementRef<HTMLElement>[] = tabElementRefList.toArray();
        const tabArray: MatTab[] = tabList.toArray();

        const tabDescriptionArray: TabDescription[] = [];
        elementList.forEach((element, index) => {
          const id = refArray[index].nativeElement.getAttribute('id');
          if (id) {
            const description: TabDescription = {
              id,
              generatedElement: element as HTMLElement,
              tab: tabArray[index],
              inactivable: false
            };

            tabDescriptionArray.push(description);
          }
        });

        const wfDisplayAttribute = 'wf-display';
        const wfDisabledAttribute = 'wf-disabled';

        // Clear workflow changes on tabs
        tabDescriptionArray.forEach((tabDescription) => {
          const tabElement = tabDescription.generatedElement;
          if (tabElement.hasAttribute(wfDisplayAttribute)) {
            const display = tabElement.getAttribute(wfDisplayAttribute);
            // tslint:disable-next-line: no-null-keyword
            tabElement.style.display = display === '' ? null : display;
          }

          if (tabElement.hasAttribute(wfDisabledAttribute)) {
            const disabled = tabElement.getAttribute(wfDisabledAttribute);
            tabDescription.tab.disabled = disabled === 'true';
          }
        });

        if (userWorkflow && elementList.length > 0) {
          WorkflowUtils.applyWorkflow(userWorkflow, isReadOpenMode, (workflowItem) => {
            if (workflowItem.itemIdentifier) {
              const tabDescription = tabDescriptionArray.find((desc) => desc.id === workflowItem.itemIdentifier);
              if (tabDescription) {
                // Saving initial tab state
                tabDescription.generatedElement.setAttribute(
                  wfDisplayAttribute,
                  tabDescription.generatedElement.style.display || ''
                );
                tabDescription.generatedElement.setAttribute(
                  wfDisabledAttribute,
                  tabDescription.tab.disabled.toString()
                );

                // tslint:disable-next-line: no-null-keyword
                let display: string | null = null;
                if (!workflowItem.isVisible) {
                  display = 'none';
                }
                tabDescription.generatedElement.style.display = display;

                const tab = tabDescription.tab;
                tab.disabled = !!workflowItem.initialIsReadOnly;

                tabDescription.inactivable = !workflowItem.isVisible || !!workflowItem.initialIsReadOnly;
              }
            }
          });

          // Hypothesis : one tab group
          if (tabGroupList && tabGroupList.first) {
            const activeTabDesc: TabDescription | undefined = tabDescriptionArray.find((desc) => desc.tab.isActive);
            if (!activeTabDesc || activeTabDesc.inactivable) {
              const firstActivableIndex = tabDescriptionArray.findIndex((desc) => !desc.inactivable);
              if (firstActivableIndex !== -1) {
                tabGroupList.first.selectedIndex = firstActivableIndex;
              }
            }
          }
        }
      }
    }
  }

  public static applyWorkflowOnDom(
    userWorkflow: UserWorkflowOutput | undefined,
    parentElementRef: ElementRef,
    isReadOpenMode: boolean
  ) {
    WorkflowUtils.clearWorkflowOnDom(parentElementRef);

    WorkflowUtils.applyWorkflow(userWorkflow, isReadOpenMode, (workflowItem) => {
      const domElement =
        parentElementRef &&
        (parentElementRef.nativeElement.querySelector(`#${workflowItem.itemIdentifier}`) as HTMLElement);
      WorkflowUtils.applyWorkflowOnDomElement(domElement, workflowItem);
    });
  }

  private static applyWorkflowOnDomElement(domElement: HTMLElement, workflowItem: WorkflowItemDTO): void {
    if (ObjectUtils.isDefined(domElement)) {
      if (!workflowItem.isVisible) {
        WorkflowUtils.addWorkflowClass(domElement, 'display--none');
      } else {
        const formControlElement = WorkflowUtils.getFormControlDomElement(domElement);
        if (workflowItem.isMandatory) {
          DomUtils.addAttributeToDomElement(formControlElement, 'required', '');
          WorkflowUtils.addWorkflowClass(domElement, 'required');
        } else {
          DomUtils.removeClassToDomElement(domElement, 'required');
          DomUtils.removeAttributeToDomElement(formControlElement, 'required');
        }
        // Read only protection is only applied to fields
        const isReadOnly = DomUtils.hasClass(domElement, 'form-group')
          ? workflowItem.isReadOnly
          : workflowItem.initialIsReadOnly;
        if (isReadOnly) {
          WorkflowUtils.addWorkflowAttribute(domElement, 'disabled', '');
          WorkflowUtils.addWorkflowAttribute(formControlElement, 'disabled', '');
        } else {
          DomUtils.removeAttributeToDomElement(domElement, 'disabled');
          DomUtils.removeAttributeToDomElement(formControlElement, 'disabled');
        }
      }
    }
  }

  /******************************************************************************
   * DOM support
   *************************************************************************** */

  private static getFormControlDomElement(domElement: HTMLElement): HTMLElement | undefined {
    let formControlElement: HTMLElement | undefined;
    const formControls: HTMLCollectionOf<Element> = domElement.getElementsByClassName('form-control');

    if (formControls.length === 1) {
      const formControl = formControls[0] as HTMLElement;
      if (formControl.childElementCount === 1) {
        formControlElement = formControl.children.item(0) as HTMLElement;
      } else if (DomUtils.hasClass(formControl, 'form-control-with-modal')) {
        const formControlDatas: HTMLCollectionOf<Element> = formControl.getElementsByClassName('form-control-data');
        if (formControlDatas.length >= 1) {
          formControlElement = formControlDatas[0] as HTMLElement;
        }
      }
    }

    return formControlElement;
  }

  private static clearWorkflowOnDom(parentElementRef: ElementRef) {
    const classToRemove = ['required', 'display--none'];
    const attributeToRemove = ['required', 'disabled'];

    classToRemove.forEach((className) => {
      const matches = parentElementRef.nativeElement.querySelectorAll(`.${className}${WORKFLOW_SUFFIX}`);
      matches.forEach((domElement) => WorkflowUtils.removeWorkflowClass(domElement, className));
    });

    attributeToRemove.forEach((attributeName) => {
      const matches = parentElementRef.nativeElement.querySelectorAll(`[${attributeName}${WORKFLOW_SUFFIX}]`);
      matches.forEach((domElement) => WorkflowUtils.removeWorkflowAttribute(domElement, attributeName));
    });
  }

  private static addWorkflowClass(domElement: HTMLElement | undefined, className: string): void {
    DomUtils.addClassToDomElement(domElement, className);
    DomUtils.addClassToDomElement(domElement, className + WORKFLOW_SUFFIX);
  }

  private static removeWorkflowClass(domElement: HTMLElement | undefined, className: string): void {
    if (DomUtils.hasClass(domElement, className + WORKFLOW_SUFFIX)) {
      DomUtils.removeClassToDomElement(domElement, className);
      DomUtils.removeClassToDomElement(domElement, className + WORKFLOW_SUFFIX);
    }
  }

  private static addWorkflowAttribute(domElement: HTMLElement | undefined, attributeName: string, value: string): void {
    DomUtils.addAttributeToDomElement(domElement, attributeName, value);
    DomUtils.addAttributeToDomElement(domElement, attributeName + WORKFLOW_SUFFIX, '');
  }

  private static removeWorkflowAttribute(domElement: HTMLElement | undefined, attributeName: string): void {
    if (DomUtils.hasAttribute(domElement, attributeName + WORKFLOW_SUFFIX)) {
      if (DomUtils.getAttributeValue(domElement, `ng-reflect-is-${attributeName}`) !== 'true') {
        DomUtils.removeAttributeToDomElement(domElement, attributeName);
      }
      DomUtils.removeAttributeToDomElement(domElement, attributeName + WORKFLOW_SUFFIX);
    }
  }

  public static getElementRefAcessorFromQueryLists<T>(
    inputQueryList: QueryList<T>,
    elementRefQueryList: QueryList<ElementRef>
  ): (input: T) => ElementRef | undefined {
    if (inputQueryList && elementRefQueryList) {
      const inputElementRefs: InputElementRef<T>[] = inputQueryList.map((input) => ({ input }));
      elementRefQueryList.forEach((elementRef, index) => (inputElementRefs[index].elementRef = elementRef));

      return (input: T) => {
        const inputElementRef: InputElementRef<T> | undefined = inputElementRefs.find((ier) => ier.input === input);

        return inputElementRef && inputElementRef.elementRef;
      };
    } else {
      return (_) => undefined;
    }
  }

  /******************************************************************************
   * Mandatory check support
   *************************************************************************** */

  public static checkMandatoryFields<T extends GenericItemDTO>(
    userWorkflow: UserWorkflowOutput | undefined,
    parentElementRef: ElementRef,
    isReadOpenMode: boolean,
    item: T
  ): string[] {
    const missingFields: string[] = [];

    const attributesValue = {};
    WorkflowUtils.fillAttributesValue(item.dynamicAttributes, attributesValue);

    WorkflowUtils.applyWorkflow(userWorkflow, isReadOpenMode, (workflowItem) => {
      if (workflowItem.isMandatory && workflowItem.itemIdentifier) {
        // Check only on mandatory item applied to one of the identified selectors
        const domElement = REQUIRED_SELECTORS.reduce(
          (element, selector) =>
            element ||
            (parentElementRef &&
              (parentElementRef.nativeElement.querySelector(
                `#${workflowItem.itemIdentifier}${selector}`
              ) as HTMLElement)),
          undefined
        );
        if (domElement) {
          const attributeId = WorkflowUtils.getAttributeId(workflowItem);
          const value = attributeId ? attributesValue[attributeId] : item[workflowItem.itemIdentifier];
          if (
            !ObjectUtils.isDefined(value) ||
            (typeof value === 'string' && StringUtils.isEmpty(value)) ||
            (Array.isArray(value) && value.length === 0)
          ) {
            DomUtils.addClassToDomElement(domElement, ERROR_CLASS);
            missingFields.push(workflowItem.itemIdentifier);
          } else {
            DomUtils.removeClassToDomElement(domElement, ERROR_CLASS);
          }
        }
      }
    });

    return missingFields;
  }

  public static clearErrors(parentElementRef: ElementRef): void {
    const domElementsSelectors = REQUIRED_SELECTORS.map(
      (selector) =>
        parentElementRef &&
        (parentElementRef.nativeElement.querySelectorAll(`${selector}.${ERROR_CLASS}`) as HTMLElement[])
    );
    domElementsSelectors.forEach((domElements) => {
      if (!!domElements) {
        domElements.forEach((domElement) => {
          DomUtils.removeClassToDomElement(domElement, ERROR_CLASS);
        });
      }
    });
  }

  /******************************************************************************
   * Attributes support
   *************************************************************************** */

  /**
   * If control represents a dynamic attribute, returns matching attribute id else undefined
   * @param control Control to check
   */
  public static getAttributeId(control: ControlByIdentifierDTO): string | undefined {
    let attributeId: string | undefined;
    if (control.itemIdentifier && control.itemIdentifier.indexOf(ITEM_IDENTIFIER_ATTRIBUTE_PREFIX) === 0) {
      attributeId = control.itemIdentifier.substr(ITEM_IDENTIFIER_ATTRIBUTE_PREFIX.length);
    }

    return attributeId;
  }

  /**
   * Return the attribute field instance if its an attribute key, undefined instead.
   * @param key Translation key to convert.
   */
  public static controlGroupTranslationKeyToAttributeField(key: string): AttributeField | undefined {
    let attributeField: AttributeField | undefined;
    const tokens = key.split('.');
    const expectedTokens = 4;

    const originPosition = 1;
    const idPosition = 2;
    const fieldPosition = 3;

    if (tokens.length === expectedTokens && tokens[0] === CONTROL_GROUP_ATTRIBUTE_PREFIX) {
      attributeField = {
        attributeOrigin: tokens[originPosition],
        attributeId: tokens[idPosition],
        attributeField: tokens[fieldPosition]
      };
    }

    return attributeField;
  }

  /**
   * Flatten the dynamic attributes tree into an id => value object.
   * @param dynamicAttributes Attributes to flatten
   * @param values Object to fill with the id => value map.
   */
  private static fillAttributesValue(
    dynamicAttributes: DynamicAttributes[] | undefined,
    values: { [id: string]: string | boolean | Date | undefined }
  ) {
    if (dynamicAttributes) {
      dynamicAttributes.forEach((attributes) => {
        attributes.attributes.forEach((attribute) => {
          values[attribute.id] = attribute.value;
        });
        WorkflowUtils.fillAttributesValue(attributes.children, values);
      });
    }
  }
}
