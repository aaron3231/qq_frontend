import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import SignIn from './view/SignIn.js';
import Header from './view/Header.js';

import './App.css';

class App extends Component {
  state = {
      response: '',
      post: '',
      responseToPost: '',
      test: ''
  };

  componentDidMount() {

  }

  render() {

      return (
        <></>
      );
  }
}
export default App;
