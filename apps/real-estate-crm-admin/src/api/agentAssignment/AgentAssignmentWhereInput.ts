import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  agentPhoneNumber?: StringNullableFilter;
  agentName?: StringNullableFilter;
  agentEmail?: StringNullableFilter;
};
