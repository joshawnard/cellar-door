import React, { Component } from 'react';

class GenerateWordsFromPhoneNumbers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: undefined,
    };
  }

  handleChange = (event) => {
    this.setState({ phoneNumber: event.target.value }, () => {
      this.splitPhoneNumber();
    });
  }

  splitPhoneNumber = () => {
    const { phoneNumber } = this.state;
    const newPhoneNumber = phoneNumber.toString().split('');

    
  }

  render() {
    const { phoneNumber } = this.state;

    return (
      <div>
        <h1>Generate Words From Phone Numbers</h1>

        <input
          id="phone-number"
          onChange={this.handleChange}
          name="phone-number"
          type="tel"
          value={phoneNumber}
        />


      </div>
    );
  }
}

export default GenerateWordsFromPhoneNumbers;
