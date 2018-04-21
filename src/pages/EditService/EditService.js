import React, { Component } from 'react';
import ServiceForm from '../../pages/EditService/ServiceForm';
import './editservice.scss';

class EditService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <ServiceForm />
      </div>
    );
  }
}

export default EditService;
