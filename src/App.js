import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <div>
   
      <Navigation /> 
       
          
      <Head/>        
   

      <h1 style={{textAlign:'center'}}>Welcome to Collective.</h1>
      <h3 style={{textAlign:'center'}}>A place to find resources and opportunites, especially as a woman, in CS. </h3>
      <br />
      <h2 style={{fontStyle:'italic'}}>Resources</h2>

  
      </div>
    );
  }
}