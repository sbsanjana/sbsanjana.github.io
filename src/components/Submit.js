import React from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import Response from '../Response.json'

export default class Submit extends React.Component {


  constructor(props) {
    super(props)
  }

    render() {
 
        return (
            <Container>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name of Resource</Form.Label>
    <Form.Control type="title" placeholder="Name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Resource Link</Form.Label>
    <Form.Control type="title" placeholder="www.url.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Category</Form.Label>
    <Form.Control as="select">
        <option>Select </option>
      <option>Career</option>
      <option>Education</option>
      <option>Fun</option>
      {/* <option>4</option>
      <option>5</option> */}
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Text here..." />
  </Form.Group>
  <Button variant='secondary' onClick={this.handleSubmit}> Submit </Button>
</Form>

</Container>
        );
    }
}