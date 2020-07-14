import {BidtStockTypeStatusDTO} from './bidt-stock-type-status-dto.interface';

export interface BidtStockTypeDTO {

 	bidtStockTypeStatus?: BidtStockTypeStatusDTO[];
	stockTypeCode?: string;
	stockTypeIsValuated?: number;
	stockTypeOwner?: string;
	stockTypeDescription?: string;
	statusState?: string;
	statusUser?: string;
	statusDate?: Date;
	
}
