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
    
        
        this.onChangesenderid = this.onChangesenderid.bind(this);
        this.onChangeauthentication= this.onChangeauthentication.bind(this);
        this.onChangemobilenumber = this.onChangemobilenumber.bind(this);
        
        
      
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          senderid:'',
          authentication:'',
          mobilenumber: '',
          
         
            trainer:[]
            
            
          }
        }
        
        onChangesenderid(e) {
          this.setState({
            senderid: e.target.value
          })
        }
          
          onChangeauthentication(e) {
            this.setState({
              authentication: e.target.value
            })
          }
          onChangemobilenumber(e) {
            this.setState({
            mobilenumber: e.target.value
            })
          }
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              senderid: this.state.senderid,
              authentication: this.state.authentication,
              
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/smsconfiguration/add', customer)
            .then(function(response){
        
              if(response.data ==='Smsconfiguration added!'){
                alert("SMS Configuration Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Sms Configuration</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Sender ID:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.senderid}
              onChange={this.onChangesenderid} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Authentication Key:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.authentication}
              onChange={this.onChangeauthentication} name="password"
              
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
        <h4>Send Test Sms</h4>
        <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.mobilenumber}
              onChange={this.onChangemobilenumber} name="password"
              
             />
          
              
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
          
     
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}