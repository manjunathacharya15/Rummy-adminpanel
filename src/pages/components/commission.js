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
    
        
        this.onChangecommission = this.onChangecommission.bind(this);
        
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          commission:'',
         
         
        
         
            trainer:[]
            
            
          }
        }
        
        onChangecommission(e) {
          this.setState({
            commission: e.target.value
          })
        }
          
        
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer={
                commission:this.state.commission
            }
            
            
            
          
            
            
            
            axios.post('https://arummynodejs.herokuapp.com/commission/add',customer )
            .then(function(response){
        
              if(response.data ==='Commission added!'){
                alert("Commission Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Commission</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
              <h6>Commission in %  will be deducted from players winning amount from every game</h6>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>   Commission (%):</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.commission}
              onChange={this.onChangebaseurl} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
         
         
            <Row>
            <Col md={3} className="mb-3">
            <div className="mt-3">
            <Button variant="primary" type="submit">Update </Button>
          
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