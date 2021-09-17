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
    
        
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeimage= this.onChangeimage.bind(this);
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          title:'',
          file:null,
         
        
         
            trainer:[]
            
            
          }
        }
        
        onChangetitle(e) {
          this.setState({
            title: e.target.value
          })
        }
          
          onChangeimage(e) {
            this.setState({
              file: e.target.files[0]
            })
          }
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const formData=new FormData();
            formData.append('title',this.state.title);
            formData.append('image',this.state.file);
            
            
          
            
            
            const config={
              headers:{
                'content-type':'multipart/form-data'
              }
        
            
            }
            axios.post('https://arummynodejs.herokuapp.com/banner/add', formData)
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
        <h5 className="mb-4">Add Banner</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>   Title:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.title}
              onChange={this.onChangetitle} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Add Image:</Form.Label>
                <Form.Control required type="file" placeholder="" 
              onChange={this.onChangeimage} name="image"
              
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