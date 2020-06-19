import React from 'react';
import { Container, Card, Button, Col, Row, Accordion, Form } from 'react-bootstrap';

export default class ConnectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={}

    }

    handleSubmit= (e) => {
        console.log('hi')
    }
     render() {
        return(
            <Row className="justify-content-md-center">
            <Button centered variant='outline-secondary' >
            <Accordion>
  
      <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color:'black'}}>
        Add a Post!
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">

      <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" placeholder="Enter Title" />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Text</Form.Label>
                <Form.Control type="textarea" placeholder="Enter Text" />
            </Form.Group>
            <Form.Group controlId="">
            <Form.Label>Tag</Form.Label>

            <Form.Control as="select">
        <option>Select </option>
      <option>Career</option>
      <option>Education</option>
      <option>Fun</option>
      {/* <option>4</option>
      <option>5</option> */}
    </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
            </Form>
    </Accordion.Collapse>

 
</Accordion>
</Button>
</Row>

            
        );
    }
}

