import React from 'react';
import { ICustomer } from '../../containers/Customers';

const CustomerList = ({
  customers
}: {
  customers: Array<ICustomer>;
}) => {
  console.log(customers);

  return (
    <section>
      {customers &&
        customers.map((customer, i) => {
          return <li key={i}>{customer.firstName}</li>;
        })}
    </section>
  );
};

export default CustomerList;
