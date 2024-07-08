import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  agent?: SortOrder;
  propertyId?: SortOrder;
  clientId?: SortOrder;
};
