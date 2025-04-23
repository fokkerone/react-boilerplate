import { datatableHandlers } from './datatable';
import { subscriptionHandlers } from './subscriptions';
import { usersHandlers } from './users';

export const handlers = [
  ...usersHandlers,
  ...subscriptionHandlers,
  ...datatableHandlers,
];
