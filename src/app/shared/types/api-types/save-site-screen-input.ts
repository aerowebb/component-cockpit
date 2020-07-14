import { BidtSiteDTO } from './bidt-site-dto.interface';
import { BsdeSitePnTilDTOId } from './bsde-site-pn-til-dto-id.interface';
import { BsdeSitePnTilDTO } from './bsde-site-pn-til-dto.interface';

export interface SaveSiteInput {
  bidtSiteDTO: BidtSiteDTO;

  bsdeSitePntilAddDTOList: BsdeSitePnTilDTO[];
  bsdeSitePntilUpdateDTOList: BsdeSitePnTilDTO[];
  bsdeSitePnTilDeleteDTOIdList: BsdeSitePnTilDTOId[];
}
