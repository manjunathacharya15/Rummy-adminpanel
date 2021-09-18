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
            <Breadcrumb.Item>Report Card</Breadcrumb.Item>
          
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
    
        <div class="row">
				<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box" style={{padding:" 14px",background:"#cddfef"}} >
							<div class=""> <span class="info-box-text">Total Games</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number"> 
								287							   </span>
							</div>
							
						</div>
						
					</div>
					
					<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Lost In Game</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									51,010.80&nbsp;/-
								</span>
							</div>
							
						</div>
						
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Win In Game</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Commission</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									683.27&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Tournament Fees</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									755.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Tournament Won</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									1,808.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Available Bonus</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Available Balance</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Bonus</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Added Balance</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									345.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment Paytm</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment CashFree</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
							<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment Net Banking</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment Redeem</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment Signup</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									245.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Payment Admin</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									100.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					
					
					
					
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Paid Amount</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Withdraw Pending/Inprocess</span><hr style={{border: "1px solid"}} />
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					
						<div class="col-md-4 col-sm-6 col-xs-12" >
						<div class="info-box"style={{padding:" 14px",background:"#cddfef"}}>
							<div class=""> <span class="info-box-text">Total Reversed/Reserved</span><hr style={{border: "1px solid"}}  / >
								<span class="info-box-number">₹ &nbsp;
									0.00&nbsp;/-</span>
							</div>
							
						</div>
						
					</div>
					
					
					
					
					
				</div>
	
			
			
			
		</div>
    

</div>

       
        </div>
        </div>
        </div>
        
      
    )
  }
}
