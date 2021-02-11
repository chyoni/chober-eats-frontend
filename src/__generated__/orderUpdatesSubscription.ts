/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderUpdateInput, OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: orderUpdatesSubscription
// ====================================================

export interface orderUpdatesSubscription_orderUpdates_driver {
  __typename: "User";
  email: string;
}

export interface orderUpdatesSubscription_orderUpdates_customer {
  __typename: "User";
  email: string;
}

export interface orderUpdatesSubscription_orderUpdates_restaurant {
  __typename: "Restaurant";
  name: string;
}

export interface orderUpdatesSubscription_orderUpdates {
  __typename: "Order";
  id: number;
  status: OrderStatus;
  total: number | null;
  driver: orderUpdatesSubscription_orderUpdates_driver | null;
  customer: orderUpdatesSubscription_orderUpdates_customer | null;
  restaurant: orderUpdatesSubscription_orderUpdates_restaurant | null;
}

export interface orderUpdatesSubscription {
  orderUpdates: orderUpdatesSubscription_orderUpdates;
}

export interface orderUpdatesSubscriptionVariables {
  input: OrderUpdateInput;
}
