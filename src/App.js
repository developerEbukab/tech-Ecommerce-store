import React from 'react';
import './sass/main.scss';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home.component';
import Login from './pages/auth/Login/Login.component';
import Register from './pages/auth/Register/Register.component';
import Header from './components/Nav/Header.component';
import RegisterComplete from './pages/auth/Register/RegisterComplete';


const App = () => {
  return (
    <div className="app">
      <ToastContainer/>
      <Header />
      <div className="app__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
