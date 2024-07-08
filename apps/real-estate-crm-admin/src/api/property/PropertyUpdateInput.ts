import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  price?: number | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
