import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import SignIn from './view/SignIn.js';

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
        <>
        <SignIn />
        </>
          // <BrowserRouter>
          //     <Route exact path="/" component={SignIn} />
          // </BrowserRouter>
      );
  }
}
export default App;
