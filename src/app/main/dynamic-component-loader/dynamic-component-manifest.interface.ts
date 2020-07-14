import { InjectionToken } from '@angular/core';

// tslint:disable-next-line:no-any
export const DYNAMIC_COMPONENT = new InjectionToken<any>('DYNAMIC_COMPONENT');

// tslint:disable-next-line:no-any
export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('DYNAMIC_COMPONENT_MANIFESTS');

export interface DynamicComponentManifest {
  /** Unique identifier, used in the application to retrieve a ComponentFactory. */
  componentId: string;

  /** Unique identifier, used internally by Angular. */
  path: string;

  /** Path to component module. */
  loadChildren: string;
}
