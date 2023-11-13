import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      //   <BrowserRouter>
      //   <Switch>
      //     <Route path="/home" render={(props) => <HomePage {...props} />} />
      //     <Route path="/login" render={(props) => <LoginPage {...props} />} />
      //     <Redirect from="/" to="/home/index" />
      //   </Switch>
      // </BrowserRouter>
  );
}

export default App;
