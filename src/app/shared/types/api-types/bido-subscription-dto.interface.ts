export interface BidoSubscriptionDTO {
  subscriptionId?: number;
  subscriptionName?: string;
  eventType?: string;
  familyVariantCode?: string;
  operatorCode?: string;
  chapter?: string;
  section?: string;
  eventTypeDescription?: string;
  newEventsOnly?: boolean;
  doNotNotifyOnForms?: boolean;
  eventPriority?: string;
}
