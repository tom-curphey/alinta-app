import { Reducer } from 'redux';
import {
  CustomerActions,
  CustomerActionTypes
} from '../actions/customerActions';

// Define the Customer type
export interface ICustomer {
  firstName: string;
  lastName?: string;
  dob?: string;
}

// Define the Customer State
export interface ICustomerState {
  readonly customers: ICustomer[];
}

// Define the initial state
const initialCustomerState: ICustomerState = {
  customers: []
};

export const customerReducer: Reducer<
  ICustomerState,
  CustomerActions
> = (state = initialCustomerState, action) => {
  switch (action.type) {
    case CustomerActionTypes.ADD_CUSTOMER: {
      return {
        ...state,
        customers: action.payload
      };
    }
    default:
      return state;
  }
};
