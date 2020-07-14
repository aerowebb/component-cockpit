import { AnimationEvent, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from '@angular/core';

import { AppConstants } from '../../constants/app-constants';
import { DomHandler } from '../../services/dom-handler.service';

// This value should be lower than page-header-container z-index
const FULLSCREEN_BASE_ZINDEX = 5;

@Component({
  animations: [
    trigger('animation', [
      state(
        'void',
        style({
          transform: 'translate3d(0, 25%, 0) scale(0.9)',
          opacity: 0
        })
      ),
      state(
        'visible',
        style({
          transform: 'none',
          opacity: 1
        })
      ),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ],
  selector: 'a-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnDestroy {
  private static fullScreenDialogNb: number = 0;
  private static zindex: number = 50;

  @Input()
  public visible: boolean;

  @Input()
  public width: string;

  @Output()
  public visibleChange: EventEmitter<boolean>;

  @Output()
  public modalClosed: EventEmitter<void>;

  @Input()
  public fullScreen: boolean;

  private container: HTMLDivElement;
  private mask: HTMLDivElement | undefined;
  private maskClickListener: Function | undefined;

  public constructor(private readonly domHandler: DomHandler, private readonly renderer: Renderer2) {
    this.init();
  }

  public ngOnDestroy(): void {
    ModalComponent.zindex--;

    this.onOverlayHide();
  }

  public onAnimationStart(event: AnimationEvent): void {
    switch (event.toState) {
      case 'visible':
        ModalComponent.zindex++;

        this.container = event.element;

        this.disableScroll();
        this.moveOnTop();

        if (!this.fullScreen) {
          this.container.style.left = '0px';
          this.container.style.top = '0px';

          this.enableModality();
          setTimeout(() => {
            this.positionOverlay();
          });
        }

        if (this.container.classList.contains('full-screen')) {
          ModalComponent.fullScreenDialogNb++;
        }
        break;

      case 'void':
        this.onOverlayHide();
        break;

      default:
        break;
    }
  }

  public onAnimationDone(event: AnimationEvent): void {
    switch (event.toState) {
      case 'void':
        this.modalClosed.emit();
        break;

      default:
        break;
    }
  }

  private bindMaskClickListener(): void {
    this.maskClickListener = this.renderer.listen(this.mask, 'click', (event) => {
      this.close(event);
    });
  }

  private centerOnXAxis() {
    let elementWidth = this.domHandler.getOuterWidth(this.container);
    let elementHeight = this.domHandler.getOuterHeight(this.container);
    if (elementWidth === 0 && elementHeight === 0) {
      this.container.style.visibility = 'hidden';
      this.container.style.display = 'block';
      elementWidth = this.domHandler.getOuterWidth(this.container);
      elementHeight = this.domHandler.getOuterHeight(this.container);
      this.container.style.display = 'none';
      this.container.style.visibility = 'visible';
    }

    const viewport = this.domHandler.getViewport();
    const offsetLeft = Math.max(Math.floor((viewport.width - elementWidth) / 2), 0);

    this.container.style.left = `${offsetLeft}px`;
  }

  private close(event: Event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }

  private disableModality() {
    if (this.mask) {
      this.unbindMaskClickListener();
      (this.container.parentElement as HTMLElement).removeChild(this.mask);

      this.mask = undefined;

      const dialogMaskElements = document.getElementsByClassName('dialog-mask');
      if (dialogMaskElements.length > 0) {
        (dialogMaskElements[dialogMaskElements.length - 1] as HTMLElement).style.opacity = '0.5';
      }
    }
  }

  private disableScroll(): void {
    this.domHandler.addClass(document.body, 'scroll-y--none');

    const scrollToTopWrapperElements = document.getElementsByClassName('scroll-to-top-wrapper');
    if (scrollToTopWrapperElements.length > 0) {
      (scrollToTopWrapperElements[0] as HTMLElement).style.visibility = 'hidden';
    }
    const topbarElements = document.getElementsByClassName('topbar');
    if (topbarElements.length > 0) {
      (topbarElements[0] as HTMLElement).style.right = `${this.domHandler.getScrollbarWidth()}px`;
    }
    const tabcontainerWrapperElements = document.getElementsByClassName('tab-container-wrapper');
    if (tabcontainerWrapperElements.length > 0) {
      (tabcontainerWrapperElements[0] as HTMLElement).style.marginRight = `${this.domHandler.getScrollbarWidth()}px`;
    }

    const layoutPageElement = document.getElementsByClassName('layout-page');
    if (layoutPageElement.length === 1) {
      const lastChildElement = layoutPageElement[0].children.item(layoutPageElement[0].childElementCount - 1);
      if (!lastChildElement || !lastChildElement.classList.contains('top-bar-padding')) {
        const topBarPadding = document.createElement('div');
        topBarPadding.style.backgroundColor = AppConstants.COLOR_BACKGROUND_SECONDARY;
        const boxShadow = `inset 0 calc(${AppConstants.BORDER_WIDTH_MAIN_BAR} * -1) 0 ${AppConstants.COLOR_MAIN_BAR}`;
        topBarPadding.style.boxShadow = boxShadow;
        topBarPadding.style.height = `${AppConstants.TOP_BAR_HEIGHT}px`;
        topBarPadding.style.position = 'fixed';
        topBarPadding.style.right = '0';
        topBarPadding.style.top = '0';
        topBarPadding.style.width = `${this.domHandler.getScrollbarWidth()}px`;
        topBarPadding.style.zIndex = '10';

        this.domHandler.addClass(topBarPadding, 'top-bar-padding');

        layoutPageElement[0].appendChild(topBarPadding);
      }
    }
  }

  private enableModality() {
    if (!this.mask) {
      const dialogMaskElements = document.getElementsByClassName('dialog-mask');
      for (let index = 0; index < dialogMaskElements.length; index++) {
        (dialogMaskElements[index] as HTMLElement).style.opacity = '0';
      }

      this.mask = document.createElement('div');
      this.mask.style.zIndex = String(this.getZindex() - 1);
      this.domHandler.addClass(this.mask, 'dialog-mask');

      this.bindMaskClickListener();
      (this.container.parentElement as HTMLElement).appendChild(this.mask);
    }
  }

  private enableScroll(): void {
    if (document.getElementsByClassName('dialog-mask').length === 0) {
      this.domHandler.removeClass(document.body, 'scroll-y--none');

      const scrollToTopWrapperElements = document.getElementsByClassName('scroll-to-top-wrapper');
      if (scrollToTopWrapperElements.length > 0) {
        (scrollToTopWrapperElements[0] as HTMLElement).style.visibility = 'visible';
      }
      const topbarElements = document.getElementsByClassName('topbar');
      if (topbarElements.length > 0) {
        (topbarElements[0] as HTMLElement).style.right = '0';
      }
      const tabcontainerWrapperElements = document.getElementsByClassName('tab-container-wrapper');
      if (tabcontainerWrapperElements.length > 0) {
        (tabcontainerWrapperElements[0] as HTMLElement).style.marginRight = '0';
      }

      const layoutPageElement = document.getElementsByClassName('layout-page');
      if (layoutPageElement.length === 1) {
        const lastChildElement = layoutPageElement[0].children.item(layoutPageElement[0].childElementCount - 1);
        if (lastChildElement && lastChildElement.classList.contains('top-bar-padding')) {
          layoutPageElement[0].removeChild(lastChildElement);
        }
      }
    }
  }

  private init(): void {
    this.fullScreen = false;
    this.visibleChange = new EventEmitter<boolean>();
    this.modalClosed = new EventEmitter<void>();
  }

  private moveOnTop() {
    this.container.style.zIndex = String(this.getZindex());
  }

  private getZindex(): number {
    return this.fullScreen ? FULLSCREEN_BASE_ZINDEX + ModalComponent.fullScreenDialogNb : ModalComponent.zindex;
  }

  private onOverlayHide() {
    this.disableModality();

    if (this.container && this.container.classList.contains('full-screen')) {
      ModalComponent.fullScreenDialogNb--;
    }

    if (ModalComponent.fullScreenDialogNb === 0) {
      this.enableScroll();
    }
  }

  private positionOverlay() {
    this.centerOnXAxis();

    this.container.style.top = `${AppConstants.TOP_BAR_HEIGHT + AppConstants.MARGIN_VALUE}px`;
  }

  private unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = undefined;
    }
  }
}
