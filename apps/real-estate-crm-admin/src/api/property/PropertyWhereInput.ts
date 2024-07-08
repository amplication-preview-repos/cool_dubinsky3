import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  price?: FloatNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
