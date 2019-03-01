import React, { Component } from 'react';
import fs from 'fs';

import GenerateWordsFromPhoneNumber from './GenerateWordsFromPhoneNumber';

import './App.css';

// TODO: import dictionary file as array
// const dictionaryWords = fs.readFile('./sample_dictionary.txt').toString().split("\n");
const dictionaryWords = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <GenerateWordsFromPhoneNumber dictionaryWords={dictionaryWords} />
      </div>
    );
  }
}

export default App;
