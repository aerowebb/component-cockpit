export interface ActionRow {
  item?: string;
  actionName?: string;
  actionPlanName?: string;
  comment?: string;
  action?: boolean;
  contributor?: string;
  status?: string;
  objectAssociates?: string;
  role?: string;
  since?: string;
  stockType?: string;
  actionValidationDate?: Date;
  expectedDeliveryDate?: Date;
  category?: string;
  recipient?: string;
  carrier?: string;
  type?: string;
}
