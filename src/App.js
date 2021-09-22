import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { robot_operation } from './pages/robot_operation';
import { programming } from './pages/programming';
import { monitoring } from './pages/monitoring';
import { report } from './pages/report';
import { robot_setting } from './pages/robot_setting';
import { safety_setting } from './pages/safety_setting';
import { device_setting } from './pages/device_setting';
import { management } from './pages/management';
import { configuration } from './pages/configuration';
import { support } from './pages/support';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/robot_operation" component={robot_operation} />
          <Route path="/programming" component={programming} />
          <Route path="/monitoring" component={monitoring} />
          <Route path="/report" component={report} />
          <Route path="/robot_setting" component={robot_setting} />
          <Route path="/safety_setting" component={safety_setting} />
          <Route path="/device_setting" component={device_setting} />
          <Route path="/management" component={management} />
          <Route path="/configuration" component={configuration} />
          <Route path="/support" component={support} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

