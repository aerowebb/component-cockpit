import { BidoContactDTO } from '../../api-types/bido-contact-dto.interface';
import { BidoCusCustomerDTO } from '../../api-types/bido-cus-customer-dto.interface';
import { BidoCustomerDTO } from '../../api-types/bido-customer-dto.interface';
import { BidoCustomerEvolutionDTO } from '../../api-types/bido-customer-evolution-dto.interface';
import { BidoDocumentationDTO } from '../../api-types/bido-documentation-dto.interface';

export interface SaveBidoCustomerInput {
  bidoCustomer: BidoCustomerDTO;
  bidoContactList?: BidoContactDTO[];
  bidoCusCustomerList?: BidoCusCustomerDTO[];
  bidoCustomerEvolutionAddedList?: BidoCustomerEvolutionDTO[];
  bidoCustomerEvolutionRemovedList?: BidoCustomerEvolutionDTO[];
  bidoCustomerEvolutionUpdatedList?: BidoCustomerEvolutionDTO[];
  bidoDocumentationAddedList?: BidoDocumentationDTO[];
  bidoDocumentationRemovedList?: BidoDocumentationDTO[];
  bidoDocumentationUpdatedList?: BidoDocumentationDTO[];
}
