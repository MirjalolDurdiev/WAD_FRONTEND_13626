import { Visitor } from './Visitor';

export interface Reception {
  id: number;
  visitorId?: number;
  visitor?: Visitor | null;
  date: Date | null;
  status: number | null;
}
