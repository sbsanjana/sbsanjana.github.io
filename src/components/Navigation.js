import React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
              <Nav  activeKey="/home" justify >
    <Nav.Item>
      <Nav.Link style={{color:'#6D6875'}} href="/home" >Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  style={{color:'#6D6875'}}href="/home#resources">Resources</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:'#6D6875'}} href="/home#submit">Submisson</Nav.Link>
      
    </Nav.Item>
    <Nav.Item >
      <Nav.Link style={{color:'#6D6875'}} href="/connect">Connect</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{float:'right'}}>
      <Nav.Link style={{color:'#6D6875'}} href="/login">Login</Nav.Link>
    </Nav.Item>


   
   
  </Nav>
 
  
            {/* <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Collective</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#submit">Submit From</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}
          {/* </Navbar> */}
       


          </div>
        );
    }
}