import { Visitor } from './Visitor';

export enum Status {
  Pending,
  Confirmed,
  Completed,
  Cancelled,
}

export interface Reception {
  id: number;
  visitorId?: number;
  visitor?: Visitor;
  date: Date;
  status: Status;
}
