import { BidoCustomerAttributeDTO } from './bido-customer-attribute-dto.interface';

export interface BidoCustomerDTO {
  customerCode?: string;
  customerName?: string;
  zone?: string;
  country?: string;
  icaoCode?: string;
  customerType?: string;
  airport?: string;
  airportIcaoCode?: string;
  isOwner?: boolean;
  isOperator?: boolean;
  phone1?: string;
  phone2?: string;
  fax?: string;
  email?: string;
  address?: string;
  town?: string;
  comments?: string;
  webSite?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bidoCustomerAttributeDatas?: BidoCustomerAttributeDTO[];
  customerMandant?: string;
}
