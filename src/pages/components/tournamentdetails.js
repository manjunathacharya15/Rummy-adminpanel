import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import {  faCog, faHome, faSearch,faTrashAlt,faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown,Card, } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-datepicker/dist/react-datepicker.css';



export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://acabnodejs.herokuapp.com/subadmin/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            name : e.name,
          
            email:e.email,
            profilepicture:e.profilepicture,
            role:e.role
          

          }
        })

    })
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
  deleteCustomerByIds = () => {
  const arrayids = [];
    this.state.customers.forEach(d => {
      if(d.select) { 
        arrayids.push(d.id);
      }
    });
   
    axios.post('https://acabnodejs.herokuapp.com/subadmin/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      name: this.state.name
    }
    axios.post('https://acabnodejs.herokuapp.com/subadmin/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  deleteCustomer(id) {
    axios.delete('https://acabnodejs.herokuapp.com/subadmin/'+id)
      .then(response => { 
        console.log(response)
        window.location.reload(true)

      });

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
     })

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
      {/* <td style={{border:"1px double black",textAlign:"center"}}><Link to={"/components/forms/"+currentcustomer.id}>{currentcustomer.name}</Link></td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.email}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.profilepicture}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.role}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>
       <a  onClick={() => { this.deleteCustomer(currentcustomer.id) }}><FontAwesomeIcon icon={faTrash} /></a>
    </td> */}
      
      
      
    
    </tr>
     
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      
      <div style={{marginTop:"50px"}}>
        <div>
        <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Search </h5>
        <Form onSubmit={this.onSubmit}>
        <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> From Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.expdate}
            onChange={this.onChangeexpdate}
            name="startDate"
       
           
           
            timeCaption="time"
            dateFormat="MMMM dd yyyy "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> To Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.expdate}
            onChange={this.onChangeexpdate}
            name="startDate"
       
           
           
            timeCaption="time"
            dateFormat="MMMM dd yyyy "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          
            {/* <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Type</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.referalpoint}
              onChange={this.onChangereferalpoint}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row> */}
          {/* <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Tournament ID</Form.Label>
                <Form.Control required type="number"  placeholder="" value={this.state.referalpoint}
              onChange={this.onChangereferalpoint}
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
           */}
          
          
        
        </Form>
        
      </Card.Body>
    </Card>
        </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Form onSubmit={this.onSubmit}>
            <InputGroup style={{width:"100%"}} >
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.name} onChange={this.onChangename} />
            </InputGroup>
            </Form>
          </Col>
          
         
          </Row>
         

          </div>
         
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Member Withdraw Details</Breadcrumb.Item>
          
          </Breadcrumb>
          {/* <h4>Sub Admin</h4>
          <p className="mb-0">Sub Admin Details .</p> */}
        </div>
      
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
           
           
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Sl No</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Tournament ID</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Title</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Price</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Start Date</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Start Time</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Date</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Winners</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Joined</th>
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Actions</th>
             
              
              
              
           
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
