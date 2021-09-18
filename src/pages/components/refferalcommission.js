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
    
        
        this.onChangeselectuser = this.onChangeselectuser.bind(this);
        this.onChangeonlostamountcommission= this.onChangeonlostamountcommission.bind(this);
        this.onChangeonwonamountcommission= this.onChangeonwonamountcommission.bind(this);
        
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          selectuser:'',
          onlostamountcommission:'',
          onwonamountcommission:''
          ,
         
            trainer:[]
            
            
          }
        }
        
        onChangeselectuser(e) {
          this.setState({
            selectuser: e.target.value
          })
        }
          
          onChangeonlostamountcommission(e) {
            this.setState({
              onlostamountcommission: e.target.value
            })
          }
          onChangeonwonamountcommission(e) {
            this.setState({
              onwonamountcommission: e.target.value
            })
          }
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              selectuser: this.state.selectuser,
              onlostamountcommission: this.state.onlostamountcommission,
              onwonamountcommission:this.state.onwonamountcommission,
              

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/referalcommission/add', customer)
            .then(function(response){
        
              if(response.data ==='Referalcommission added!'){
                alert("refferalcommission Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Refferal Commission</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Select User:</Form.Label>
                <select class="form-control" id="calculator" name="selectuser" onChange={this.onChangeselectuser} value={this.state.selectuser}>
                                                    <option value="Free">Free</option>
                                                    <option value="Paid">Paid </option>
                                                   
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> On Lost Amount Commission(in %):</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.onlostamountcommission}
              onChange={this.onChangeonlostamountcommission} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> On Won Amount Commission(in %):</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.onwonamountcommission}
              onChange={this.onChangeonwonamountcommission} name="password"
              
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
          
          
        
        </Form>
     
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}