import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import Navigation from './components/Navigation';
import {Container, Row, Col} from 'react-bootstrap'
import Resources from './components/Resources';
import Tech from './tech.jpg'
import Job from './job.jpg'
import rwc from './rwc.jpeg'

import Submit from './components/Submit';

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
      <Container>
  <Col>
    <Row>
      <Resources 
      info='A list of tech-focused summer internships, listed with deadlines!'
      title='Internships'
      hlink='github.com/elaine-zheng/summer2020internships'
      var='secondary'
      fontcolor='black'
      id='internship'
      imgsrc={Job}
      />

      <Resources 
      info='A national program for college women interested in careers in tech. Mentorship & Job opportunities!'
      title='Rewriting the Code Fellowship'
      hlink='https://rewritingthecode.org/fellowship/'
      var='secondary'
      id='internship'
      fontcolor= 'white'
      imgsrc={rwc}
      style={{margin:10}}
      />

    </Row>
  </Col>
</Container>
<br></br>
<h2 style={{fontStyle:'italic'}}>Submit More!</h2>
<Submit />



  
      </div>
    );
  }
}