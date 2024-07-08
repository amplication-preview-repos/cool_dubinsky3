import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  agent: string | null;
  property?: Property | null;
  client?: Client | null;
};
