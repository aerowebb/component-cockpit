import { WareHouseTableDTO } from '../../api-input-types/logistics-material/warehouse-table-dto.interface';
import { BidtPnAlternativeDTO } from '../../api-types/bidt-pn-alternative-dto.interface';
import { BidtPriceDTO } from '../../api-types/bidt-price-dto.interface';
import { BidtProductCustomerDTO } from '../../api-types/bidt-product-customer-dto.interface';
import { BidtProductScDTO } from '../../api-types/bidt-product-sc-dto.interface';
import { BireContainerPnDTO } from '../../api-types/bire-container-pn-dto.interface';
import { BirePartUnitConversionDTO } from '../../api-types/bire-part-unit-conversion-dto.interface';
import { BirePnAttributeDTO } from '../../api-types/bire-pn-attribute-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface MaterialDataDTO {
  birePnDTO: BirePnDTO;
  isUpdate: boolean;
  whareHouseTableDtos: WareHouseTableDTO[];
  bidtValuationDTOs: BidtPriceDTO[];
  bidtProductCustomerDTOs: BidtProductCustomerDTO[];
  bidtProductScDTO: BidtProductScDTO;
  bidtPnAlternativeDTOs: BidtPnAlternativeDTO[];
  bireContainerPnDTOs: BireContainerPnDTO[];
  bireSupplyConversionDTOs: BirePartUnitConversionDTO[];
  materialAttributeDTOUpdatedList: BirePnAttributeDTO[];
}
