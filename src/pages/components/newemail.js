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
    
        
        this.onChangeuser = this.onChangeuser.bind(this);
        this.onChangeusetemplate= this.onChangeusetemplate.bind(this);
        this.onChangesubject = this.onChangesubject.bind(this);
        this.onChangemessage=this.onChangemessage.bind(this);
        
        
      
        
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          user:'',
          usetemplate:'',
          subject:'',
          message:'',

        
         
            trainer:[]
            
            
          }
        }
        
        onChangeuser(e) {
          this.setState({
            user: e.target.value
          })
        }
          
          onChangeusetemplate(e) {
            this.setState({
              usetemplate: e.target.value
            })
          }
          onChangesubject(e) {
            this.setState({
            subject: e.target.value
            })
          }
          onChangemessage(e) {
            this.setState({
            message: e.target.value
            })
          }
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              user: this.state.user,
              usetemplate: this.state.usetemplate,
              subject:this.state.subject,
              message: this.state.message,
             
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/email/add', customer)
            .then(function(response){
        
              if(response.data ==='Email added!'){
                alert("Email Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Email</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>   User:</Form.Label>
                
               <select class="form-control" id="calculator" name="user" onChange={this.onChangeuser} value={this.state.user}>
                                                    <option value="Indivisual">Indivisual</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Verified">Verified</option>
                                                    <option value="All Player">All Player</option>
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> usetemplate:</Form.Label>
                <select class="form-control" id="calculator" name="usetemplate" onChange={this.onChangeusetemplate} value={this.state.usetemplate}>
                                                    <option value="Test Dc">Test Dc</option>
                                                    <option value="Mr">Mr</option>
                                      
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Subject:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.subject}
              onChange={this.onChangesubject} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Message:</Form.Label>
                <textarea onChange={this.onChangemessage} value={this.state.message}></textarea>
              </Form.Group>
            </Col>
            
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