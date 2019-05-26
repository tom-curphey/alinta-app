import { Dispatch } from 'redux';

// Import Customer Typing
import { ICustomer } from '../reducers/customerReducer';

// Create Action Constants
export enum CustomerActionTypes {
  ADD_CUSTOMER = 'ADD_CUSTOMER'
}

// Interface for Add Customer Action Type
export interface ICustomerAddAction {
  type: CustomerActionTypes.ADD_CUSTOMER;
  payload: ICustomer[];
}

export interface ICustomerProps {
  newCustomer: ICustomer;
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CustomerActions = ICustomerAddAction;

/* ADD Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const addCustomer = (newCustomer: ICustomer) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CustomerActionTypes.ADD_CUSTOMER,
    payload: newCustomer
  });
};
