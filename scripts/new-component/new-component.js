// USAGE:
// npm run new-component <PARENT-DIR> <COMPONENT-NAME> <WITH-FORM-COMPONENT> <WITH-SEARCH-COMPONENT>
// For example:
// npm run new-component administration awesome-component true true

const fs = require('fs');
const path = require('path');

const COMPONENT_FILE_NAME_SEPARATOR = '-';
const COMPONENT_HTML_FILE_SUFFIX = '.component.html';
const COMPONENT_NAME_FORM_SUFFIX = 'form';
const COMPONENT_NAME_SEARCH_SUFFIX = 'search';
const COMPONENT_NAME_UPPERCASE_SEPARATOR = '_';
const COMPONENT_MODULE_FILE_SUFFIX = '.module.ts';
const COMPONENT_SASS_FILE_SUFFIX = '.component.scss';
const COMPONENT_SERVICE_FILE_SUFFIX = '.service.ts';
const COMPONENT_TS_FILE_SUFFIX = '.component.ts';
const I18N_EN_FILE = 'en.json';
const I18N_FR_FILE = 'fr.json';
const ROOT_COMPONENT_DIR = 'src/app/main';
const ROOT_I18N_DIR = 'src/assets/i18n';

const TEMPLATE_COMPONENT_CONSTANT_KEY = '__COMPONENT_CONSTANT_KEY__';
const TEMPLATE_COMPONENT_FILE_NAME_KEY = '__COMPONENT_FILE_NAME__';
const TEMPLATE_COMPONENT_NAME_KEY = '__COMPONENT_NAME__';
const TEMPLATE_COMPONENT_PROP_NAME_KEY = '__COMPONENT_PROP_NAME__';
const TEMPLATE_FORM_COMPONENT_FILE_NAME_KEY = '__FORM_COMPONENT_FILE_NAME__';
const TEMPLATE_FORM_COMPONENT_NAME_KEY = '__FORM_COMPONENT_NAME__';
const TEMPLATE_SEARCH_COMPONENT_FILE_NAME_KEY = '__SEARCH_COMPONENT_FILE_NAME__';
const TEMPLATE_SEARCH_COMPONENT_NAME_KEY = '__SEARCH_COMPONENT_NAME__';

const TEMPLATE_HTML = `<div class="page-header-container">
  <div class="page-context">
    <div class="page-title-container">
      <div class="page-title">
        {{ "transaction." + componentData.componentId | translate }}
      </div>

      <div class="page-secondary-actions">
        <i
          class="fa fa-fw aw-icon aw-icon-with-border"
          [ngClass]="{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }"
          aria-hidden="true"
          (click)="updateFavoriteState()"
          pTooltip="{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}"
          tooltipPosition="bottom"
        ></i>

        <i
          class="fa fa-fw fa-info aw-icon aw-icon-with-border"
          aria-hidden="true"
          pTooltip="{{ 'page.info' | translate }}"
          tooltipPosition="bottom"
        ></i>
      </div>
    </div>

    <div class="page-subtitle-container">
      <div class="page-subtitle"></div>
    </div>
  </div>

  <div class="page-primary-actions"><!-- Remove enclosing tag if empty --></div>

  <div class="page-close"><i class="material-icons" (click)="closeComponent()">close</i></div>
</div>

<div class="page-wrapper">
  <div class="page-container">  
    <div class="page-content"></div>
  </div>
</div>
`;

const TEMPLATE_SASS = `:host {
}
`;

const TEMPLATE_SERVICE = `import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';

@Injectable()
export class ${TEMPLATE_COMPONENT_NAME_KEY}Service extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }
}
`;

const TEMPLATE_TS = `import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { ${TEMPLATE_COMPONENT_NAME_KEY}Service } from './${TEMPLATE_COMPONENT_FILE_NAME_KEY}.service';

@Component({
  selector: 'aw-${TEMPLATE_COMPONENT_FILE_NAME_KEY}',
  styleUrls: ['./${TEMPLATE_COMPONENT_FILE_NAME_KEY}.component.scss'],
  templateUrl: './${TEMPLATE_COMPONENT_FILE_NAME_KEY}.component.html'
})
export class ${TEMPLATE_COMPONENT_NAME_KEY}Component extends PageComponent<PageComponentData> implements OnInit {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly ${TEMPLATE_COMPONENT_PROP_NAME_KEY}Service: ${TEMPLATE_COMPONENT_NAME_KEY}Service
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.${TEMPLATE_COMPONENT_CONSTANT_KEY};
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
`;

function createDir(dirPath) {
  try {
    fs.mkdirSync(dirPath);
    console.log('[INFO] create ' + dirPath);
  } catch (err) {
    console.log('[ERROR] ' + err);
  }
}

function createFile(filePath, fileContent) {
  try {
    fs.appendFileSync(filePath, fileContent || '');
    console.log('[INFO] create ' + filePath);
  } catch (err) {
    console.log('[ERROR] ' + err);
  }
}

function generateTemplateForI18nFile(withFormComponent, withSearchComponent) {
  let template = `{`;

  if (withFormComponent && withSearchComponent) {
    template += `
  "${TEMPLATE_FORM_COMPONENT_NAME_KEY}Component": {},
  "${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Component": {}
`;
  } else if (withFormComponent) {
    template += `
  "${TEMPLATE_FORM_COMPONENT_NAME_KEY}Component": {}
`;
  } else if (withSearchComponent) {
    template += `
  "${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Component": {}
`;
  }

  template += `}
  `;

  return template;
}

function generateTemplateForModuleFile(withFormComponent, withSearchComponent) {
  let template = `import { NgModule } from '@angular/core';
  import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

`;

  if (withFormComponent) {
    template += `import { ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Component } from './${COMPONENT_NAME_FORM_SUFFIX}/${TEMPLATE_FORM_COMPONENT_FILE_NAME_KEY}.component';
`;
  }
  if (withFormComponent) {
    template += `import { ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Service } from './${COMPONENT_NAME_FORM_SUFFIX}/${TEMPLATE_FORM_COMPONENT_FILE_NAME_KEY}.service';
`;
  }
  if (withSearchComponent) {
    template += `import { ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Component } from './${COMPONENT_NAME_SEARCH_SUFFIX}/${TEMPLATE_SEARCH_COMPONENT_FILE_NAME_KEY}.component';
`;
  }
  if (withSearchComponent) {
    template += `import { ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Service } from './${COMPONENT_NAME_SEARCH_SUFFIX}/${TEMPLATE_SEARCH_COMPONENT_FILE_NAME_KEY}.service';
`;
  }

  template += `
/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

const INTERNAL_MODULES = [];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [`;

  if (withFormComponent && withSearchComponent) {
    template += `
  ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Component,
  ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Component
`;
  } else if (withFormComponent) {
    template += `
  ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Component
`;
  } else if (withSearchComponent) {
    template += `
  ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Component
`;
  }

  template += `];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [`;

  if (withFormComponent && withSearchComponent) {
    template += `
  ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Service,
  ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Service
`;
  } else if (withFormComponent) {
    template += `
  ${TEMPLATE_FORM_COMPONENT_NAME_KEY}Service
`;
  } else if (withSearchComponent) {
    template += `
  ${TEMPLATE_SEARCH_COMPONENT_NAME_KEY}Service
`;
  }

  template += `];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ${TEMPLATE_COMPONENT_NAME_KEY}Module {}
`;

  return template;
}

function processComponent(
  moduleFileName,
  componentPath,
  componentFileName,
  componentNameCamelCase,
  componentNameSnakeCase,
  componentNameUpperCase
) {
  // Html file
  const componentHtmlPathWithExtension = path.join(
    componentPath,
    path.format({ name: componentFileName, ext: COMPONENT_HTML_FILE_SUFFIX })
  );
  if (!fs.existsSync(componentHtmlPathWithExtension)) {
    createFile(
      componentHtmlPathWithExtension,
      processComponentTemplate(
        TEMPLATE_HTML,
        moduleFileName,
        componentNameCamelCase,
        componentNameSnakeCase,
        componentNameUpperCase
      )
    );
  }

  // Sass file
  const componentSassPathWithExtension = path.join(
    componentPath,
    path.format({ name: componentFileName, ext: COMPONENT_SASS_FILE_SUFFIX })
  );
  if (!fs.existsSync(componentSassPathWithExtension)) {
    createFile(
      componentSassPathWithExtension,
      processComponentTemplate(
        TEMPLATE_SASS,
        moduleFileName,
        componentNameCamelCase,
        componentNameSnakeCase,
        componentNameUpperCase
      )
    );
  }

  // Service file
  const componentServicePathWithExtension = path.join(
    componentPath,
    path.format({ name: componentFileName, ext: COMPONENT_SERVICE_FILE_SUFFIX })
  );
  if (!fs.existsSync(componentServicePathWithExtension)) {
    createFile(
      componentServicePathWithExtension,
      processComponentTemplate(
        TEMPLATE_SERVICE,
        moduleFileName,
        componentNameCamelCase,
        componentNameSnakeCase,
        componentNameUpperCase
      )
    );
  }

  // TS file
  const componentTsPathWithExtension = path.join(
    componentPath,
    path.format({ name: componentFileName, ext: COMPONENT_TS_FILE_SUFFIX })
  );
  if (!fs.existsSync(componentTsPathWithExtension)) {
    createFile(
      componentTsPathWithExtension,
      processComponentTemplate(
        TEMPLATE_TS,
        moduleFileName,
        componentNameCamelCase,
        componentNameSnakeCase,
        componentNameUpperCase
      )
    );
  }
}

function processComponentTemplate(
  template,
  moduleFileName,
  componentNameCamelCase,
  componentNameSnakeCase,
  componentNameUpperCase
) {
  return template
    .replace(
      new RegExp(TEMPLATE_COMPONENT_CONSTANT_KEY, 'g'),
      moduleFileName.substr(0, 3).toUpperCase() + COMPONENT_NAME_UPPERCASE_SEPARATOR + componentNameUpperCase
    )
    .replace(new RegExp(TEMPLATE_COMPONENT_FILE_NAME_KEY, 'g'), componentNameSnakeCase)
    .replace(new RegExp(TEMPLATE_COMPONENT_NAME_KEY, 'g'), componentNameCamelCase)
    .replace(
      new RegExp(TEMPLATE_COMPONENT_PROP_NAME_KEY, 'g'),
      componentNameCamelCase[0].toLowerCase() + componentNameCamelCase.substring(1)
    );
}

function toCamelCase(str) {
  return str
    .split(COMPONENT_FILE_NAME_SEPARATOR)
    .filter((substr) => !!substr && substr.length > 1)
    .map((substr) => substr[0].toUpperCase() + substr.substring(1))
    .join('');
}

function toUpperCase(str) {
  return str
    .split(COMPONENT_FILE_NAME_SEPARATOR)
    .filter((substr) => !!substr && substr.length > 1)
    .map((substr) => substr.toUpperCase())
    .join(COMPONENT_NAME_UPPERCASE_SEPARATOR);
}

if (process.argv.length <= 5) {
  console.log('[ERROR] missing arguments');
} else {
  const withFormComponent = process.argv[4] == 'true';
  const withSearchComponent = process.argv[5] == 'true';

  const moduleFileName = process.argv[2];
  const modulePath = path.join(ROOT_COMPONENT_DIR, moduleFileName);

  const componentFileName = process.argv[3];
  const componentPath = path.join(modulePath, componentFileName);
  const componentNameCamelCase = toCamelCase(componentFileName);
  const componentNameSnakeCase = componentFileName;

  const formComponentFileName = componentFileName + '-' + COMPONENT_NAME_FORM_SUFFIX;
  const formComponentPath = path.join(componentPath, COMPONENT_NAME_FORM_SUFFIX.toLowerCase());
  const formComponentNameCamelCase = toCamelCase(formComponentFileName);
  const formComponentNameSnakeCase = formComponentFileName;
  const formComponentNameUpperCase = toUpperCase(formComponentFileName);

  const searchComponentFileName = componentFileName + '-' + COMPONENT_NAME_SEARCH_SUFFIX;
  const searchComponentPath = path.join(componentPath, COMPONENT_NAME_SEARCH_SUFFIX.toLowerCase());
  const searchComponentNameCamelCase = toCamelCase(searchComponentFileName);
  const searchComponentNameSnakeCase = searchComponentFileName;
  const searchComponentNameUpperCase = toUpperCase(searchComponentFileName);

  // Directories hierarchy
  if (!fs.existsSync(modulePath)) {
    createDir(modulePath);
  }
  if (!fs.existsSync(componentPath)) {
    createDir(componentPath);
  }
  if (withFormComponent && !fs.existsSync(formComponentPath)) {
    createDir(formComponentPath);
  }
  if (withSearchComponent && !fs.existsSync(searchComponentPath)) {
    createDir(searchComponentPath);
  }

  // Module file
  const modulePathWithExtension = path.join(
    componentPath,
    path.format({ name: componentFileName, ext: COMPONENT_MODULE_FILE_SUFFIX })
  );
  if (!fs.existsSync(modulePathWithExtension)) {
    const componentModuleFileContent = generateTemplateForModuleFile(withFormComponent, withSearchComponent)
      .replace(new RegExp(TEMPLATE_COMPONENT_FILE_NAME_KEY, 'g'), componentNameSnakeCase)
      .replace(new RegExp(TEMPLATE_FORM_COMPONENT_FILE_NAME_KEY, 'g'), formComponentNameSnakeCase)
      .replace(new RegExp(TEMPLATE_SEARCH_COMPONENT_FILE_NAME_KEY, 'g'), searchComponentNameSnakeCase)
      .replace(new RegExp(TEMPLATE_COMPONENT_NAME_KEY, 'g'), componentNameCamelCase)
      .replace(new RegExp(TEMPLATE_FORM_COMPONENT_NAME_KEY, 'g'), formComponentNameCamelCase)
      .replace(new RegExp(TEMPLATE_SEARCH_COMPONENT_NAME_KEY, 'g'), searchComponentNameCamelCase);
    createFile(modulePathWithExtension, componentModuleFileContent);
  }

  // Form component
  if (withFormComponent) {
    processComponent(
      moduleFileName,
      formComponentPath,
      formComponentFileName,
      formComponentNameCamelCase,
      formComponentNameSnakeCase,
      formComponentNameUpperCase
    );
  }

  // Seach component
  if (withSearchComponent) {
    processComponent(
      moduleFileName,
      searchComponentPath,
      searchComponentFileName,
      searchComponentNameCamelCase,
      searchComponentNameSnakeCase,
      searchComponentNameUpperCase
    );
  }

  // i18n files
  const i18nModulePath = path.join(ROOT_I18N_DIR, moduleFileName);
  if (!fs.existsSync(i18nModulePath)) {
    createDir(i18nModulePath);
  }

  const i18nComponentPath = path.join(i18nModulePath, componentFileName);
  if (!fs.existsSync(i18nComponentPath)) {
    createDir(i18nComponentPath);

    const i18nFileContent = generateTemplateForI18nFile(withFormComponent, withSearchComponent)
      .replace(TEMPLATE_FORM_COMPONENT_NAME_KEY, formComponentNameCamelCase)
      .replace(TEMPLATE_SEARCH_COMPONENT_NAME_KEY, searchComponentNameCamelCase);
    createFile(path.join(i18nComponentPath, I18N_EN_FILE), i18nFileContent);
    createFile(path.join(i18nComponentPath, I18N_FR_FILE), i18nFileContent);
  }
}
