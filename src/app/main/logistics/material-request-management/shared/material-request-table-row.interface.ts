import { SafeResourceUrl } from '@angular/platform-browser';

export interface MaterialRequestTableRow {
  references?: string;
  item?: string;
  recepient?: string;
  situation?: string;
  illustration?: SafeResourceUrl;
  sn?: string;
  createdBy?: string;
  createdOn?: string;
  origin?: string;
  pn?: string;
  designation?: string;
  quantity?: string;
  desiredPotential?: string;
  site?: string;
  warehouse?: string;
  desiredOn?: string;
  criticity?: string;
  status?: string;
  progress?: string;
  served?: string;
  booked?: string;
  notBooked?: string;
}