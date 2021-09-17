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
    
        
        this.onChangecoupontitle = this.onChangecoupontitle.bind(this);
        this.onChangecouponcode= this.onChangecouponcode.bind(this);
        this.onChangevalidtodate = this.onChangevalidtodate.bind(this);
        
        
      
        this.onChangevalidatefromdate = this.onChangevalidatefromdate.bind(this);
        this.onChangebonustype = this.onChangebonustype.bind(this);
        this.onChangebonusvalue = this.onChangebonusvalue.bind(this);
        this.onChangemaxprice = this.onChangemaxprice.bind(this);
        
        

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          coupontitle:'',
          couponcode:'',
          validfromdate: new Date(),
          validtodate:new Date(),
          bonustype:'',
          bonusvalue:'',
          maxprice:'',
        
         
            trainer:[]
            
            
          }
        }
        
        onChangecoupontitle(e) {
          this.setState({
            coupontitle: e.target.value
          })
        }
          
          onChangecouponcode(e) {
            this.setState({
              couponcode: e.target.value
            })
          }
          onChangevalidatefromdate(date) {
            this.setState({
            validfromdate: date
            })
          }
          onChangevalidtodate(date) {
            this.setState({
            validtodate: date
            })
          }
         
         
          onChangebonustype(e) {
            this.setState({
            bonustype: e.target.value
            })
          }
          onChangebonusvalue(e) {
            this.setState({
            bonusvalue: e.target.value
            })
          }
          onChangemaxprice(e) {
            this.setState({
            maxprice: e.target.value
            })
          }
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              coupontitle: this.state.coupontitle,
              couponcode: this.state.couponcode,
              validfromdate: this.state.validfromdate,
              validtodate:this.state.validtodate,
              bonustype:this.state.bonustype,
              bonusvalue:this.state.bonusvalue,
              maxprice:this.state.maxprice,
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/coupon/add', customer)
            .then(function(response){
        
              if(response.data ==='Coupon added!'){
                alert("Coupon Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Coupon</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>  Coupon Title:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.coupontitle}
              onChange={this.onChangecoupontitle} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Coupon Code:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.couponcode}
              onChange={this.onChangecouponcode} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Valid from Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.validfromdate}
            onChange={this.onChangevalidatefromdate}
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
                <Form.Label> Valid To Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.validtodate}
            onChange={this.onChangevalidtodate}
            name="startDate"
       
           
           
            timeCaption="time"
            dateFormat="MMMM dd yyyy "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Bonus Type:</Form.Label>
                <select class="form-control" id="calculator" name="sittingcapacity" onChange={this.onChangebonustype} value={this.state.bonustype}>
                                                    <option value="1000">1000</option>
                                                    <option value="5000">5000</option>
                                                    <option value="10000">10000</option>
                                                   
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Bonus Value:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.bonusvalue}
              onChange={this.onChangebonusvalue} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Max Price:</Form.Label><br/>
                <Form.Control required type="number" placeholder="" value={this.state.maxprice}
              onChange={this.onChangemaxprice} name="password"
              
             />
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