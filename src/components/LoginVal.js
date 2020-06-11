import React from 'react';
import { Formik } from "formik";
import {Form, Container, Button, Row, Col} from 'react-bootstrap'
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

export default class Login extends React.Component {
    render() {
        return (
            <div>
           <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
            }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("This field is required"),
      password: Yup.string()
        .required("Must enter a valid password.")
        .min(5, "Password must be 5 characters minimum.")
    })}
  >
    {props => {
      const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
    <Container>
        <Row className="justify-content-md-center">
           
            <Col xs={6} md={4}>
           
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="email" style={{fontWeight:'bold',fontStyle:'italic'}}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          
          <Form.Label htmlFor="password" style={{fontWeight:'bold', fontStyle:'italic'}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <Button variant="secondary" style={{marginTop:10}}>
            Login
          </Button>
        </Form>
        </Col>
        </Row>
        </Container>
      );
    }}
  
  </Formik>
          </div>
        );
    }
}