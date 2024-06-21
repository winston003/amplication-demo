import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
