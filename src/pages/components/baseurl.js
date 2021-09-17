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
    
        
        this.onChangebaseurl = this.onChangebaseurl.bind(this);
        
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          baseurl:'',
         
         
        
         
            trainer:[]
            
            
          }
        }
        
        onChangebaseurl(e) {
          this.setState({
            baseurl: e.target.value
          })
        }
          
        
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer={
                baseurl:this.state.baseurl
            }
            
            
            
          
            
            
            
            axios.post('https://arummynodejs.herokuapp.com/baseurl/add',customer )
            .then(function(response){
        
              if(response.data ==='Banner added!'){
                alert("Banner Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Base Url</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
              <h6>Note: tHis is your Base url using in application at multiple place eg.email</h6>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>   Url:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.baseurl}
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