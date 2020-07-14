import { ElementListFilterOutput } from './element-list-filter-output-dto.interface';
import { FilterListOutput } from './filter-list-output-dto.interface';
import { ProfileListFilterOutput } from './profile-list-filter-output.interface';
import { SiteListFilterOutput } from './site-list-filter-output.interface';
import { VariantListFilterOutput } from './variant-list-filter-output.interface';

export interface FilterOutputById {
  filterListOutput: FilterListOutput ;
  elementFilterList?: ElementListFilterOutput[];
  variantListFilterOutputList?: VariantListFilterOutput[];
  siteListFilterOutputList?: SiteListFilterOutput[];
  profileListFilterOutputList?: ProfileListFilterOutput[];
}
