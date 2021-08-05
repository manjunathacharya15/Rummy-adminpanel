
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import { Component } from "react";
import axios from "axios";

export default class ForgotPassword extends Component{
  constructor(props) {
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
     

      
      customer:[]
      
      
    }
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

 
  


 
 
  
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      email: this.state.email,
    
      
     
      

    }


    axios.post('https://carrombackend.herokuapp.com/admin/forgot', customer)
      .then(res => alert("verfication code sent successfully "));
  }
  render(){
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
            </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form onSubmit={this.onSubmit}>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control required autoFocus type="email" placeholder="john@company.com"  onChange={this.onChangeemail} />
                    </InputGroup>
                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Recover password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
  }
}

