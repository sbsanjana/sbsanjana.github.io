import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import Navigation from './components/Navigation';
import {Container, Row, Col} from 'react-bootstrap'
import RenderResource from './components/RenderResource';


import Submit from './components/Submit';

export default class App extends React.Component {
  render() {
    return (
      <div>
   
      <Navigation /> 
       
          
      {/* <Head/>         */}
   

      <p style={{fontSize:75, fontWeight:'lighter', textAlign:'center'}}>Welcome to Collective.</p>
      <p style={{fontSize:30, fontWeight:'lighter', textAlign:'center'}}>A place to find resources and opportunites, especially as a woman, in CS. </p>
      <br />
      <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}} id='resources'>Resources</p>
   <RenderResource />
<br></br>
<p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}} id='submit'>Submit More!</p>
<Submit />



  
      </div>
    );
  }
}