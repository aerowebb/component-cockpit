import { ComponentFactory, Inject, Injectable, Injector, NgModuleFactoryLoader } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';

import { LoaderService } from '../../shared/services/loader.service';

import {
  DYNAMIC_COMPONENT,
  DYNAMIC_COMPONENT_MANIFESTS,
  DynamicComponentManifest
} from './dynamic-component-manifest.interface';

@Injectable()
export class DynamicComponentLoader {
  public constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private readonly manifests: DynamicComponentManifest[],
    private readonly injector: Injector,
    private readonly loader: NgModuleFactoryLoader,
    private readonly loaderService: LoaderService
  ) {}

  // Retrieve a ComponentFactory, based on the specified componentId (defined in the DynamicComponentManifest array).
  public getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests.find((m) => m.componentId === componentId);
    if (!manifest) {
      return throwError(`DynamicComponentLoader: Unknown componentId "${componentId}"`);
    }

    this.loaderService.showModuleLoadingBar();

    const p = this.loader.load(manifest.loadChildren).then((ngModuleFactory) => {
      const moduleRef = ngModuleFactory.create(injector || this.injector);

      const dynamicComponentTypes = moduleRef.injector.get(DYNAMIC_COMPONENT);
      if (!dynamicComponentTypes) {
        throw this.dynamicComponentLoaderError(componentId);
      }

      const requestedDynamicComponentType = dynamicComponentTypes.find((dynamicComponentType) => {
        return dynamicComponentType.prototype.getComponentName.apply(undefined) === componentId;
      });
      if (!requestedDynamicComponentType) {
        throw this.dynamicComponentLoaderError(componentId);
      }

      return moduleRef.componentFactoryResolver.resolveComponentFactory<T>(requestedDynamicComponentType);
    });

    return from(p);
  }

  private dynamicComponentLoaderError(componentId: string): Error {
    const message =
      'DynamicComponentLoader: Dynamic module for componentId "' +
      componentId +
      '" does not contain DYNAMIC_COMPONENT as a provider.';

    return new Error(message);
  }
}
