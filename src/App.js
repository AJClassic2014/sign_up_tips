import React, { Component } from 'react';
import './App.css';
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
          <div>
            <Header />
            <Switch>
              <Route path="/" exact render={() => (<div>Hello world</div>)} />
              <Route path="/sign-up" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
