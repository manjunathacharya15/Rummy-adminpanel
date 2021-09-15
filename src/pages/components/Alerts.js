import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faTrashAlt,faEye, } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import '../components/login.css'

export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      fullname:'',
      
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://arummynodejs.herokuapp.com/user/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            _id : e._id,
           fullname : e.fullname,
          
            phonenumber:e.phonenumber,
            email:e.email,
            place:e.place,
            adharnumber:e.adharnumber,
            pannumber:e.pannumber,
            drivinglicence:e.drivinglicence
          

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
   
    axios.post('https://arummynodejs.herokuapp.com/user/delete',{arrayids:arrayids})
   
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
fullname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      fullname: this.state.fullname
      
      
    }
    axios.post('https://arummynodejs.herokuapp.com/user/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  deleteCustomer(id) {
    axios.delete('https://mitnessnew.herokuapp.com/customers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
      if(a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
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
       <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer._id}</td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.fullname}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.phonenumber}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.email}</td>
      
      
      <td style={{border:"1px double black",textAlign:"center"}}><Link to={"/components/badges/"+currentcustomer._id}><FontAwesomeIcon icon={faEye}/></Link></td>
      
      
    
    </tr>
   
     
    ))
    
  }
  

 



  render()
 {

  
    return (
      
      
      <div style={{marginTop:"50px"}}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>User Details</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>User Details</h4>
          <p className="mb-0">User information .</p>
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.name}  onChange={this.onChangename} />
            </InputGroup>
            </Form>
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
           
            <th style={{border:"1px double  black",width:"100px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Sl No</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Full Name</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Phone Number</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Email Id</th>
              
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
