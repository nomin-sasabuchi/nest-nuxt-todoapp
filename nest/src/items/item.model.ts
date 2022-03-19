import { ItemStatus } from './itemStatus.enum';

export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
};
