import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  price?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
