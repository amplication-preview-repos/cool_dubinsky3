import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};
