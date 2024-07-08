import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  description: string | null;
  status?: "Option1" | null;
  price: number | null;
  appointments?: Array<Appointment>;
};
