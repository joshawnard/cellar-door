import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NUMBER_TO_LETTER_MAP = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [],
};

class GenerateWordsFromPhoneNumbers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: undefined,
    };
  }

  handleChange = (event) => {
    const phoneNumber = event.target.value;

    this.setState({ phoneNumber }, () => {
      this.splitPhoneNumber();
    });
  }

  splitPhoneNumber = () => {
    const { phoneNumber } = this.state;
    const splitPhoneNumber = phoneNumber.toString().split('');

    // Start iterating through each individual digit
    splitPhoneNumber.forEach((num) => {
      // Iterate through each letter mapped to this digit
      NUMBER_TO_LETTER_MAP[num].forEach((letter) => {
        this.checkForLetterMatches(letter);
      });
    });
  }

  checkForLetterMatches = (letter) => {
    const dictionaryWords = this.props;

    dictionaryWords.forEach((word) => {
      // const length = word.length;
      const letters = word.split('');

      letters.forEach((l) => {
        if (l === letter) {
          // continue iterating through available mapped
          // letters and if the indices match, keep going
          // otherwise return;
        }
      });
    });
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

GenerateWordsFromPhoneNumbers.propTypes = {
  dictionaryWords: PropTypes.arrayOf(
    PropTypes.string,
  ),
}

export default GenerateWordsFromPhoneNumbers;
