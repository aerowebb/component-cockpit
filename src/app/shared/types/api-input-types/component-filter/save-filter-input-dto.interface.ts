import { ElementListFilterOutput } from '../../api-output-types/element-list-filter-output-dto.interface';
import { SiteListFilterOutput } from '../../api-output-types/site-list-filter-output.interface';
import { VariantListFilterOutput } from '../../api-output-types/variant-list-filter-output.interface';
import { BidoPreferenceUserDTO } from '../../api-types/bido-preference-user-dto.interface';
import { BidoPuProfileDTO } from '../../api-types/bido-pu-profile-dto.interface';

export interface SaveFilterInput {
bidoPreferenceUserDTO ?: BidoPreferenceUserDTO;
logicalLink?: string;
isPersistent?: boolean;
elementFilterList?: ElementListFilterOutput[];
variantFilterList?: VariantListFilterOutput[];
siteFilterList?: SiteListFilterOutput[];
bidoPuProfileList?: BidoPuProfileDTO[];
}
