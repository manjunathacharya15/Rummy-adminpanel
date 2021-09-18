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
    
        
        this.onChangeclientid = this.onChangeclientid.bind(this);
        this.onChangeclientsecretkey= this.onChangeclientsecretkey.bind(this);
        this.onChangemode = this.onChangemode.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onChangemerchantid = this.onChangemerchantid.bind(this);
        this.onChangemerchantkey= this.onChangemerchantkey.bind(this);
        this.onChangepmode = this.onChangepmode.bind(this);
        this.onChangepstatus = this.onChangepstatus.bind(this);
        
        
      
       
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit1=this.onSubmit1.bind(this);
        this.state = {
          clientid:'',
          clientsecretkey:'',
          mode: '',
          status:'',
          merchantid:'',
          merchantkey:'',
          pmode:'',
          pstatus:'',

          
         
            trainer:[]
            
            
          }
        }
        
        onChangeclientid(e) {
          this.setState({
            clientid: e.target.value
          })
        }
          
          onChangeclientsecretkey(e) {
            this.setState({
              clientsecretkey: e.target.value
            })
          }
          onChangemode(e) {
            this.setState({
            mode: e.target.value
            })
          }
          onChangestatus(e) {
            this.setState({
            status: e.target.value
            })
          }
          onChangemerchantid(e) {
            this.setState({
            merchantid: e.target.value
            })
          }
          onChangemerchantkey(e) {
            this.setState({
            merchantkey: e.target.value
            })
          }
          onChangepmode(e) {
            this.setState({
            pmode: e.target.value
            })
          }
          onChangepstatus(e) {
            this.setState({
            pstatus: e.target.value
            })
          }
         
         
         
         
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              clientid: this.state.clientid,
              clientsecretkey: this.state.clientsecretkey,
              mode:this.state.mode,
              status:this.state.status,
              
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/paymentcashfree/add', customer)
            .then(function(response){
        
              if(response.data ==='Paymentcashfree added!'){
                alert("Payment Cash Free Added")
                  window.location.reload(true)
              }
             }) 
          }
          onSubmit1(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              merchantid: this.state.merchantid,
              merchantkey: this.state.merchantkey,
              mode:this.state.pmode,
              status:this.state.pstatus,
              
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/paymentpaytm/add', customer)
            .then(function(response){
        
              if(response.data ==='Paymentpaytm added!'){
                alert("Payment paytm Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Payment Gateway Cash Free Configuration</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Client ID:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.clientid}
              onChange={this.onChangeclientid} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Client Secret Key:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.clientsecretkey}
              onChange={this.onChangeclientsecretkey} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Mode:</Form.Label>
                <select class="form-control" id="calculator" name="mode" onChange={this.onChangemode} value={this.state.mode}>
                                                    <option value="Live">Live</option>
                                                    <option value="Testing">Testing</option>
                                                  
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Status:</Form.Label>
                <select class="form-control" id="calculator" name="status" onChange={this.onChangestatus} value={this.state.status}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                   
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
         
            
            
          <Row className="align-items-center">
          
            
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Payment Gateway Paytm Configuration</h5>
        <Form onSubmit={this.onSubmit1}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Merchant ID:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.merchantid}
              onChange={this.onChangemerchantid} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Merchant Key:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.merchantkey}
              onChange={this.onChangemerchantkey} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Mode:</Form.Label>
                <select class="form-control" id="calculator" name="mode" onChange={this.onChangepmode} value={this.state.pmode}>
                                                    <option value="Live">Live</option>
                                                    <option value="Testing">Testing</option>
                                                  
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Status:</Form.Label>
                <select class="form-control" id="calculator" name="status" onChange={this.onChangepstatus} value={this.state.pstatus}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                   
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
         
            
            
          <Row className="align-items-center">
          
            
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