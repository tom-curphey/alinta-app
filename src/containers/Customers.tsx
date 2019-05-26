import React, { Component } from 'react';
import CustomerList from '../components/CustomerList/CustomerList';
import TextInput from '../components/TextInput/TextInput';

export interface ICustomer {
  firstName: string;
  lastName?: string;
  dob?: String;
}

interface ICustomersProps {}

interface ICustomersState {
  customers: Array<ICustomer>;
  newCustomer: {
    firstName: string;
    lastName?: string;
    dob?: String;
  };
}

class Customers extends Component<ICustomersProps, ICustomersState> {
  constructor(props: ICustomersProps) {
    super(props);
    this.state = {
      customers: [],
      newCustomer: {
        firstName: ''
      }
    };
  }

  onInputChange = (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const { value } = e.currentTarget;
    this.setState({
      newCustomer: {
        firstName: value
      }
    });
  };

  handleOnSubmit = () => {
    const newCustomer = this.state.newCustomer;
    this.setState(prevState => ({
      customers: [...prevState.customers, newCustomer]
    }));
  };

  render(): JSX.Element {
    const { customers } = this.state;

    return (
      <section className="customers">
        <h1>tsReact</h1>
        <TextInput
          inputChange={this.onInputChange}
          name="firstName"
        />
        <button onClick={this.handleOnSubmit}>+ Add</button>
        <hr />
        <CustomerList customers={customers} />
      </section>
    );
  }
}

export default Customers;
