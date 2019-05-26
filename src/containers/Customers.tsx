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
    const newCustomer = {
      firstName: this.state.newCustomer.firstName
    };

    this.setState(prevState => ({
      customers: [...prevState.customers, newCustomer]
    }));
  };

  render(): JSX.Element {
    const { customers } = this.state;

    return (
      <section className="customers">
        <h1>Alinta App</h1>
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

// import React, { Component } from 'react';
// import CustomerList from '../components/CustomerList/CustomerList';
// import TextInput from '../components/TextInput/TextInput';
// import { connect } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import {
//   addCustomer,
//   ICustomerAddAction
// } from '../redux/actions/customerActions';

// export interface ICustomer {
//   firstName: string;
//   lastName?: string;
//   dob?: String;
// }

// interface ICustomersProps {
//   addCustomer: (
//     newCustomer?: ICustomer
//   ) => Promise<ICustomerAddAction>;
// }

// interface ICustomersState {
//   customers: Array<ICustomer>;
//   newCustomer: {
//     firstName: string;
//     lastName?: string;
//     dob?: String;
//   };
// }

// interface DispatchFromProps {
//   addCustomer: ICustomerAddAction;
// }

// class Customers extends Component<ICustomersProps, ICustomersState> {
//   constructor(props: ICustomersProps) {
//     super(props);
//     this.state = {
//       customers: [],
//       newCustomer: {
//         firstName: ''
//       }
//     };
//   }

//   onInputChange = (
//     e: React.SyntheticEvent<HTMLInputElement>
//   ): void => {
//     const { value } = e.currentTarget;
//     this.setState({
//       newCustomer: {
//         firstName: value
//       }
//     });
//   };

//   handleOnSubmit = () => {
//     const newCustomer = {
//       firstName: this.state.newCustomer.firstName
//     };

//     this.props.addCustomer(newCustomer);
//     // this.setState(prevState => ({
//     //   customers: [...prevState.customers, newCustomer]
//     // }));
//   };

//   render(): JSX.Element {
//     const { customers } = this.state;

//     return (
//       <section className="customers">
//         <h1>tsReact</h1>
//         <TextInput
//           inputChange={this.onInputChange}
//           name="firstName"
//         />
//         <button onClick={this.handleOnSubmit}>+ Add</button>
//         <hr />
//         <CustomerList customers={customers} />
//       </section>
//     );
//   }
// }

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, Action>
// ) => {
//   return {
//     addCustomer: (newCustomer: ICustomer) =>
//       dispatch(addCustomer(newCustomer))
//   };
// };

// export default connect<DispatchFromProps, void>(
//   null,
//   mapDispatchToProps
// )(Customers);
