import React from 'react';
import Head from './Head'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import RenderResource from './RenderResource';


import Submit from './Submit';

export default class App extends React.Component {
  render() {
    return (
      <div>
    
 
      
{/*           
 <Head/>         
    */}

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