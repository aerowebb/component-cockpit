// //////////////////////////////////////////////////////////////////////////
// DO NOT EDIT THIS FILE
//
// It is automatically generated by generate-dtos.js
// //////////////////////////////////////////////////////////////////////////

import { BidtHistoStatusUpdateIdDTO } from './bidt-histo-status-update-id-dto.interface';

export interface BidtHistoStatusUpdateDTO extends BidtHistoStatusUpdateIdDTO {
  objectCode?: string; // 50
  statusNewValue?: string; // 50

  statusDate?: string;
  statusState?: string; // 50
  statusUser?: string; // 100
}