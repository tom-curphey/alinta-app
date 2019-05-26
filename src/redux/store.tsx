import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ICustomerState } from './reducers/customerReducer';

const middleware = [thunk];

// Create an interface for the application state
export interface IAppState {
  customers: ICustomerState;
}

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(
      /* logger must be the last middleware in chain to log actions */
      applyMiddleware(...middleware)
    )
  );
  return store;
}
