import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangesenderemail = this.onChangesenderemail.bind(this);
        this.onChangefromname= this.onChangefromname.bind(this);
        this.onChangesmtphost = this.onChangesmtphost.bind(this);
        
        
      
        this.onChangetypeofencryption = this.onChangetypeofencryption.bind(this);
        this.onChangesmtpport = this.onChangesmtpport.bind(this);
        this.onChangesmtpauthentication = this.onChangesmtpauthentication.bind(this);
        this.onChangesmtpusername = this.onChangesmtpusername.bind(this);
        this.onChangesmtppassword = this.onChangesmtppassword.bind(this);
        this.onChangeto = this.onChangeto.bind(this);
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          senderemail:'',
          fromname:'',
          smtphost: '',
          typeofencryption:'',
          smtpport:'',
          smtpauthentication:'',
          smtpusername:'',
          smtppassword:'',
          to:'',
        
         
            trainer:[]
            
            
          }
        }
        
        onChangesenderemail(e) {
          this.setState({
            senderemail: e.target.value
          })
        }
          
          onChangefromname(e) {
            this.setState({
              fromname: e.target.value
            })
          }
          onChangesmtphost(e) {
            this.setState({
            smtphost: e.target.value
            })
          }
          onChangetypeofencryption(e) {
            this.setState({
            typeofencryption: e.target.value
            })
          }
         
         
          onChangesmtpport(e) {
            this.setState({
            smtpport: e.target.value
            })
          }
          onChangesmtpauthentication(e) {
            this.setState({
            smtpauthentication: e.target.value
            })
          }
          onChangesmtpusername(e) {
            this.setState({
            smtpusername: e.target.value
            })
          }
          onChangesmtppassword(e) {
            this.setState({
            smtppassword: e.target.value
            })
          }
          onChangeto(e) {
            this.setState({
            to: e.target.value
            })
          }
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              senderemail: this.state.senderemail,
              fromname: this.state.fromname,
              smtphost: this.state.smtphost,
              typeofencryption:this.state.typeofencryption,
              smtpport:this.state.smtpport,
              smtpauthentication:this.state.smtpauthentication,
              smtpusername:this.state.smtpusername,
              smtppassword:this.state.smtppassword,
              to:this.state.to,

             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/emailconfiguration/add', customer)
            .then(function(response){
        
              if(response.data ==='Emailconfiguration added!'){
                alert("Email Configuration Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Email Configuration</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Sender Email:</Form.Label>
                <Form.Control required type="email" placeholder="" value={this.state.senderemail}
              onChange={this.onChangesenderemail} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> From Name:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.fromname}
              onChange={this.onChangefromname} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Smtp Host:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.smtphost}
              onChange={this.onChangesmtphost} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Type of Encryption/Security:</Form.Label>
                <select class="form-control" id="calculator" name="encryption" onChange={this.onChangetypeofencryption} value={this.state.typeofencryption}>
                                                    <option value="SSL">SSL</option>
                                                    <option value="TLS">TLS</option>
                                                    <option value="None">None</option>
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Smtp Port:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.smtpport}
              onChange={this.onChangesmtpport} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Smtp Authentication:</Form.Label>
                <select class="form-control" id="calculator" name="authentication" onChange={this.onChangesmtpauthentication} value={this.state.smtpauthentication}>
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                    
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Smtp Username:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.smtpusername}
              onChange={this.onChangesmtpusername} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Smtp Password:</Form.Label>
                <Form.Control required type="password" placeholder="" value={this.state.smtppassword}
              onChange={this.onChangesmtppassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>To:</Form.Label>
                <Form.Control required type="email" placeholder="" value={this.state.to}
              onChange={this.onChangeto} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            
            
          <Row className="align-items-center">
          
            
          </Row>
            <Row>
            <Col md={3} className="mb-3">
            <div className="mt-3">
            <Button variant="primary" type="submit">Submit </Button>
          
          </div>
              </Col>
              
              </Row>
          
          
        
        </Form>
       
           
     
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}