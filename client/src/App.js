import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import {Container, Row, Col} from 'react-bootstrap'
import Error from './components/Error.js'
import Connect from './components/Connect.js'
import Landing from './components/Landing.js'

import RenderResource from './components/RenderResource';


import Submit from './components/Submit';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={apiResponse:''}
  }

  callAPI() {
    fetch("http://localhost:9000/posts")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
    console.log("hi");
    console.log(this.state.apiResponse);
}
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}

          <Navigation />
            <Switch>
             
             <Route path="/home" component={Landing}/>
             <Route path="/resources" component={RenderResource}/>
             <Route path="/signup"/>
             <Route path='/connect' component={Connect}/>
             <Route path="/" component={Landing} exact/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>





  
      </div>
    );
  }
}