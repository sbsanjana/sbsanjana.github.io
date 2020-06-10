import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import {Container, Row, Col} from 'react-bootstrap'
import Login from './components/Login.js'
import Error from './components/Error.js'
import Landing from './components/Landing.js'

import RenderResource from './components/RenderResource';


import Submit from './components/Submit';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             
             <Route path="/login" component={Login}/>
             <Route path="/home" component={Landing}/>
             <Route path="/home/#resources" component={Landing}/>
             <Route path="/home/#submit" component={Landing}/>
             <Route path="/" component={Landing} exact/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>



  
      </div>
    );
  }
}