export interface EventInformationsDTO {
  eventDate?: Date;
  notificationDate?: Date;
  user?: string;
  reason?: string;
  subject?: string;
  description?: string;
  linkedEventCode?: string;
  remarks?: string;
  generateEvent?: boolean;
  sendToContacts?: boolean;
  isScheduled?: boolean;
  deducted?: boolean;
  shopName?: string;
  shopTechnicalLevel?: string;
  warehouseId?: number;
}
