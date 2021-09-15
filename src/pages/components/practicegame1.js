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
    
        
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangeprofilepicture = this.onChangeprofilepicture.bind(this);
        
        
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangerole = this.onChangerole.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name:'',
          email:'',
          file1: null,
          password:'',
          role:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangename(e) {
          this.setState({
            name: e.target.value
          })
        }
          
          onChangeemail(e) {
            this.setState({
              email: e.target.value
            })
          }
          onChangeprofilepicture(e) {
            this.setState({
            file1: e.target.files[0]
            })
          }
          onChangepassword(e) {
            this.setState({
              password: e.target.value
            })
          }
          onChangerole(e) {
            this.setState({
            role: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const formData=new FormData();
            formData.append('name',this.state.name);
            formData.append('email',this.state.email);
            formData.append('profilepicture',this.state.file1);
            formData.append('role',this.state.role);
            formData.append('password',this.state.password);
            
          
            
            
            const config={
              headers:{
                'content-type':'multipart/form-data'
              }
        
            
            }
            axios.post('https://acabnodejs.herokuapp.com/subadmin/add', formData)
            .then(function(response){
        
              if(response.data ==='Subadmin added!'){
                alert("Subadmin Added")
                  window.location='/#/components/alerts'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Table Details</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Game:</Form.Label>
                <select class="form-control" id="calculator" name="game" onChange={this.onChangedgender} value={this.state.dgender}>
                                                    <option value="Crash Game">Crash Game</option>
                                                    <option value="Free Game">Free Game</option>
                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Game Type:</Form.Label>
                <select class="form-control" id="calculator" name="gametype" onChange={this.onChangedgender} value={this.state.dgender}>
                                                    <option value="Point Rummy">Point Rummy</option>
                                                    <option value="Pool Rummy">Pool Rummy</option>
                                                    <option value="Deal Rummy">Deal Rummy</option>
                                                    <option value="Papplu Rummy">Papplu Rammy</option>
                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Table Name:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Table no:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Beat/Entry:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Value ponits(Rs):</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.role}
              onChange={this.onChangerole} max="100" name="role" />
              </Form.Group>
            </Col>
            </Row>
            <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Sitting Capacity:</Form.Label>
                <select class="form-control" id="calculator" name="sittingcapacity" onChange={this.onChangedgender} value={this.state.dgender}>
                                                    <option value="2 Seat">2 Seat</option>
                                                    <option value="6 Seat">6 Seat</option>
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Table Status:</Form.Label>
                <select class="form-control" id="calculator" name="tablestatus" onChange={this.onChangedgender} value={this.state.dgender}>
                                                    <option value="Live">Live</option>
                                                    <option value="Stop">Stop</option>
                                                   
                                                    
                                                    
                                                    
                                                </select>
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