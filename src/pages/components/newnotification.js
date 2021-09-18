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
    
        
        this.onChangeplayertype = this.onChangeplayertype.bind(this);
        this.onChangetitle= this.onChangetitle.bind(this);
        this.onChangemessage = this.onChangemessage.bind(this);
        
        
      
        
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          playertype:'',
          title:'',
          message:'',

        
         
            trainer:[]
            
            
          }
        }
        
        onChangeplayertype(e) {
          this.setState({
            playertype: e.target.value
          })
        }
          
          onChangetitle(e) {
            this.setState({
              title: e.target.value
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
              playertype: this.state.playertype,
              title: this.state.title,
              message: this.state.message,
             
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/notification/add', customer)
            .then(function(response){
        
              if(response.data ==='Notification added!'){
                alert("Notification Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Notification</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>   Player Type:</Form.Label>
                
               <select class="form-control" id="calculator" name="playertype" onChange={this.onChangeplayertype} value={this.state.playertype}>
                                                    <option value="Indivisual">Indivisual</option>
                                                    <option value="All Player">All Player</option>
                                                    <option value="Fail">Fail</option>
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Title:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.title}
              onChange={this.onChangetitle} name="password"
              
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