import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  agentPhoneNumber?: SortOrder;
  agentName?: SortOrder;
  agentEmail?: SortOrder;
};
