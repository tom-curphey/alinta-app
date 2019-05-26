import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CustomerList from './CustomerList';

// Shallow rendering only renders one component -> which is one unit
it('Expect to render customer list component', () => {
  const mockCustomers = [
    {
      firstName: 'Tom'
    }
  ];
  expect(
    shallow(<CustomerList customers={mockCustomers} />)
  ).toMatchSnapshot();
});
