import React from 'react';
import 'normalize.css';
import './App.css';
import Duration from 'pages/duration/Duration';
import Rooms from 'pages/rooms/Rooms';
import Payment from 'pages/payment/Payment';
import Success from 'pages/success/Success';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { StoreProvider } from 'store/Store';


function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Duration />
            </Route>
            <Route path="/rooms">
              <Rooms />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/confirmed">
              <Success />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
