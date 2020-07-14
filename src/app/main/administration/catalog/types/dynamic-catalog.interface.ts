import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { CatalogService } from '../catalog.service';

export abstract class DynamicCatalog extends GenericComponent {
  protected constructor(public catalogService: CatalogService, openMode: ComponentOpenMode) {
    super(openMode);

    this.registerMainButtons();
  }

  private registerMainButtons(): void {
    this.catalogService.setRefreshButton(this.refresh.bind(this));
    this.catalogService.setSaveButton(this.save.bind(this));
    this.catalogService.setCreateButton(this.create.bind(this));
    this.catalogService.setImportButton(this.import.bind(this));
    this.catalogService.setExportButton(this.export.bind(this));
  }

  protected abstract refresh(): void;
  protected save(): void {
    return;
  }
  protected create(): void {
    return;
  }
  protected import(): void {
    return;
  }
  protected export(): void {
    return;
  }
}
