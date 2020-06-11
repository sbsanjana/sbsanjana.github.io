import React from 'react';
import Head from './Head'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Container, Row, CardColumns, Button} from 'react-bootstrap'
import RenderResource from './RenderResource';
import Type from './Type.js'
import Typist from 'react-typist';



import Submit from './Submit';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
        this.addResource.bind(this);
    }
    addResource() {
        // this.setState({value: ''});
        // this.setState({desc: ''});
    
        let nRes = {
          title: this.state.value,
          url: this.state.lnk,
          tag: this.state.tag,
          desc: this.state.desc,
        };
        this.setState(
          
          { tasks: [...this.state.tasks, nRes]}
          );
      }
      
  render() {

    
    return (
      <div>
    
 
      
{/*           
 <Head/>         
    */}
<Typist>
    <p style={{fontSize:75, fontWeight:'lighter', textAlign:'center'}}>Welcome to Collective.</p>
   <p style={{fontSize:30, fontWeight:'lighter', textAlign:'center'}}>A place to find resources and opportunites, especially as a woman, in CS. </p>
    <br />

     {/* <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}} id='resources'>Resources</p> */}
   {/* <RenderResource /> */}
 <br></br>
<Container>
  <Row className="justify-content-md-center">
  <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} href='/login'> Login </Button>

<Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} id='edu'>Sign Up</Button>
  </Row>
</Container>
 {/* <p style={{fontStyle:'italic', fontSize:50, fontWeight:'lighter', color:'#DA6C70', textAlign:'center'}} id='submit'>Submit More!</p>
 <Submit /> */}
     </Typist>



  
      </div>
    );
  }
}