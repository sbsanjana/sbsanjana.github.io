import React from 'react';
import {Nav, Container, Row, Col, Button} from 'react-bootstrap';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import LoginVal from './LoginVal.js'

export default class Login extends React.Component {
    render() {
        return (
            <div>
             <Container>
              
                     <Row className="justify-content-md-center">
                    
                   
                    <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} href='/login'> Login </Button>

                    <Button variant="outline-secondary" style={{margin:10}} onClick={this.handleClick} href='/signup'>Sign Up</Button>


                </Row>
               
               
             </Container>
           <LoginVal />
          </div>
        );
    }
}