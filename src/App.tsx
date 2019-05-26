import React from 'react';
import './App.css';
import Customers from './containers/Customers';
import { addCustomer } from './redux/actions/customerActions';

const App: React.FC = () => {
  return (
    <div className="App">
      <Customers />
    </div>
  );
};

export default App;
