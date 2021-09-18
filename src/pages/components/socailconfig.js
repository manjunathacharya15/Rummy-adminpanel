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
    
        
        this.onChangesocialloginid = this.onChangesocialloginid.bind(this);
        this.onChangeversion= this.onChangeversion.bind(this);
       
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onChangegsocialloginid = this.onChangegsocialloginid.bind(this);

        this.onChangegstatus = this.onChangegstatus.bind(this);
        
        
      
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit1=this.onSubmit1.bind(this);
        this.state = {
          socailloginid:'',
          version:'',
          
          status:'',
       
          gsocialloginid:'',
          gstatus:'',

          
         
            trainer:[]
            
            
          }
        }
        
        onChangesocialloginid(e) {
          this.setState({
            socailloginid: e.target.value
          })
        }
          
          onChangeversion(e) {
            this.setState({
              version: e.target.value
            })
          }
          
          onChangestatus(e) {
            this.setState({
            status: e.target.value
            })
          }
          
          onChangegsocialloginid(e) {
            this.setState({
            gsocialloginid: e.target.value
            })
          }
          onChangegstatus(e) {
            this.setState({
            gstatus: e.target.value
            })
          }
         
         
         
         
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              socailloginid: this.state.socailloginid,
              version: this.state.version,
              
              status:this.state.status,
              
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/socialloginfacebook/add', customer)
            .then(function(response){
        
              if(response.data ==='Socialloginfacebook added!'){
                alert("Social Login Facebook Added")
                  window.location.reload(true)
              }
             }) 
          }
          onSubmit1(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              socailloginid: this.state.gsocialloginid,
            
              status:this.state.gstatus,
              
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/sociallogingoogle/add', customer)
            .then(function(response){
        
              if(response.data ==='Sociallogingoogle added!'){
                alert("Social login Google Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Facebook Configuration</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Social Login ID:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.socailloginid}
              onChange={this.onChangesocialloginid} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Version:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.version}
              onChange={this.onChangeversion} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
         
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Status:</Form.Label>
                <select class="form-control" id="calculator" name="status" onChange={this.onChangestatus} value={this.state.status}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                   
                                                   
                                                   
                                                    
                                                    
                                                </select>
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Google Configuration</h5>
        <Form onSubmit={this.onSubmit1}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Social Login ID:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.gsocialloginid}
              onChange={this.onChangegsocialloginid} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
         
         
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Status:</Form.Label>
                <select class="form-control" id="calculator" name="status" onChange={this.onChangegstatus} value={this.state.gstatus}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                   
                                                   
                                                   
                                                    
                                                    
                                                </select>
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