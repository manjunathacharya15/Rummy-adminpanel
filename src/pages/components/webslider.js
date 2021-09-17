import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button,Breadcrumb,Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCog, faHome, faSearch,faTrashAlt,faPlus } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment-timezone";
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          title:'',
          file:null,
         
         
            customers:[]
            
            
          }
        }
    //     componentDidMount() {
   
    //       axios.post('https://acabnodejs.herokuapp.com/wagespercentage/')
    //     .then(response => {
          
    //       this.setState({ customers: response.data})
          
    //       let result=response.data
    //       this.setState({customers:
    //         result.map(e => {
    //           return{
    //             select : false,
    //             id : e._id,
    //             commission :e.commission,
              
               
                
              
    
    //           }
   
    //         })
    //     })
    //     console.log(this.state)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //   }
      deleteCustomerByIds = () => {
        const arrayids = [];
          this.state.customers.forEach(d => {
            if(d.select) { 
              arrayids.push(d.id);
            }
          });
         
          axios.post('https://acabnodejs.herokuapp.com/wagespercentage/delete',{arrayids:arrayids})
         
          .then(response=>{
            if(response.data.message==="Deleted Successfully")
            {
              window.location.reload(true)
            }
       
          })
        
          ;
          
        };
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
            window.location='/#/dashboard/overview'
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
        
            
        
            axios.post('https://arummynodejs.herokuapp.com/webslider/add', formData)
            .then(function(response){
        
              if(response.data ==='Webslider added!'){
                alert(" Web Slider Added")
                window.location.reload(true)
              }
             }) 
          }
          customerList() {
            // this.state.customers.sort(function(a,b){
            //   if(a.pmessage.toLowerCase() < b.pmessage.toLowerCase()) return -1;
            //   if(a.pmessage.toLowerCase() > b.pmessage.toLowerCase()) return 1;
            //   return 0;
            //  })
        
            return this.state.customers.map(currentcustomer => (
              <tr>
                {/* <td  style={{border:"1px double black",textAlign:"center"}}>
                <input type="checkbox" onChange={e => {
                                        let value = e.target.checked
                                        console.log(this.state)
                                        this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                        this.setState(this.state);
                                    }} />
              </td> */}
              <td style={{border:"1px double black",textAlign:"center"}}></td>
              
             
             
              
              
              
            
            </tr>
             
            ))
            
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Web Slider</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Title</Form.Label>
                <Form.Control required type="text"  placeholder="" value={this.state.title}
              onChange={this.onChangetitle}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Image</Form.Label>
                <Form.Control required type="file"  name="image" placeholder="" 
              onChange={this.onChangeimage}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={3} className="mb-3"><div className="mt-3">
            <Button variant="primary" type="submit">Submit </Button>
          
          </div></Col>
           
            </Row>
          
          
          
        
        </Form>
        
      </Card.Body>
    </Card>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Slider Details</Breadcrumb.Item>
          
          </Breadcrumb>
          {/* <h4>Commissions</h4>
          <p className="mb-0">Wages commission Percentage</p> */}
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            {/* <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.name} onChange={this.onChangename} />
            </InputGroup>
            </Form> */}
          </Col>
        
          </Row>
          </div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b></b></h4></div>
    <div style={{marginTop:"5px"}}>
    
        
       
        </div>
    
   
    

</div>

        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table">
          <thead className="thead-light">
            <tr>
           
            
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>ID</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Title</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Image</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Serial Number</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Deleted</th>

             
              
              
              
           
            </tr>
            
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
         
        </table>
        </div>
        </div>
        </div>
        </div>
                
            </div>
        )
    }
}