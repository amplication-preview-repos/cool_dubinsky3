import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
