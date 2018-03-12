import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//Component
import PrivateWrap from "./containers/PrivateWrap";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";
import Calendar from "./components/pages/Calendar";
import AuthorizationPage from "./components/pages/AuthorizationPage";
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/login" component={AuthorizationPage}/>
          <PrivateWrap exact path="/" component={Home}/>
          <PrivateWrap exact path="/workflow" component={Workflow}/>
          <PrivateWrap exact path="/statistics" component={Statistics}/>
          <PrivateWrap exact path="/calendar" component={Calendar}/>
          <PrivateWrap exact path="/users" component={Users}/>
          <PrivateWrap exact path="/settings" component={Settings}/>
        </Switch>
    )
  }
}

export default App;
