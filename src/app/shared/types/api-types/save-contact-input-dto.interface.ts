import { BidoContactDTO } from './bido-contact-dto.interface';

export interface SaveContactInput {
    bidoContactDTO: BidoContactDTO;
    isForUpdate: string;
}
