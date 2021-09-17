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
        this.onChangeprice= this.onChangeprice.bind(this);
        this.onChangestartdate = this.onChangestartdate.bind(this);
        
        
      
        this.onChangeregisterstartdate = this.onChangeregisterstartdate.bind(this);
        this.onChangeregisterenddate = this.onChangeregisterenddate.bind(this);
        this.onChangeregisterstarttime = this.onChangeregisterstarttime.bind(this);
        this.onChangeregisterendtime = this.onChangeregisterendtime.bind(this);
        this.onChangeentryfee = this.onChangeentryfee.bind(this);
        this.onChangenoofplayers = this.onChangenoofplayers.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeposition = this.onChangeposition.bind(this);
        this.onChangepprice = this.onChangepprice.bind(this);
        this.onChangenumberofplayers = this.onChangenumberofplayers.bind(this);

        


       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          title:'',
          price:'',
          startdate: new Date(),
          registrationstartdate:new Date(),
          registrationstarttime:new Date(),
          registrationenddate:new Date(),
          registrationendtime:new Date(),
          entryfee:'',
          numberofplayers:'',
          description:'',
          position:'',
          pprice:'',
          pnumberofplayers:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangename(e) {
          this.setState({
            name: e.target.value
          })
        }
          
          onChangetitle(e) {
            this.setState({
              title: e.target.value
            })
          }
          onChangeprice(e) {
            this.setState({
            price: e.target.value
            })
          }
          onChangestartdate(date) {
            this.setState({
            startdate: date
            })
          }
          onChangeregisterstartdate(date) {
            this.setState({
              registrationstartdate: date
            })
          }
          onChangeregisterstarttime(date) {
            this.setState({
            registrationstarttime: date
            })
          }
          onChangeregisterenddate(date) {
            this.setState({
            registrationenddate: date
            })
          }
          onChangeregisterendtime(date) {
            this.setState({
            registrationendtime: date
            })
          }
          onChangeentryfee(e) {
            this.setState({
            entryfee: e.target.value
            })
          }
          onChangenoofplayers(e) {
            this.setState({
            numberofplayers: e.target.value
            })
          }
          onChangedescription(e) {
            this.setState({
            description: e.target.value
            })
          }
          onChangeposition(e) {
            this.setState({
            position: e.target.value
            })
          }
          onChangepprice(e) {
            this.setState({
            pprice: e.target.value
            })
          }
          onChangenumberofplayers(e) {
            this.setState({
            pnumberofplayers: e.target.value
            })
          }
         
         
         
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              title: this.state.title,
              price: this.state.price,
              startdate: this.state.startdate,
              registrationstartdate:this.state.registrationstartdate,
              registrationstarttime:this.state.registrationstarttime,
              registrationenddate:this.state.registrationenddate,
              registrationendtime:this.state.registrationendtime,
              entryfee: this.state.entryfee,
              numberofplayers: this.state.numberofplayers,
              description: this.state.description,
              position: this.state.position,
              pprice: this.state.pprice,
              pnumberofplayers: this.state.pnumberofplayers,

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/tournament/add', customer)
            .then(function(response){
        
              if(response.data ==='Tournament added!'){
                alert("Tournament Added")
                  window.location='/#/components/tournamentdetails'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add Tournament</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Title:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.title}
              onChange={this.onChangetitle} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Price:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.price}
              onChange={this.onChangeprice} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Start Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.startdate}
            onChange={this.onChangestartdate}
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
                <Form.Label> Registration Start Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.registrationstartdate}
            onChange={this.onChangeregisterstartdate}
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
                <Form.Label> Registration Start Time</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.registrationendtime}
            onChange={this.onChangeregisterendtime}
            name="startDate"
            timeFormat="HH:mm"
           
            showTimeSelect
            timeCaption="time"
            dateFormat="h:mm a "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Registration End Date</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.registrationenddate}
            onChange={this.onChangeregisterenddate}
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
                <Form.Label> Registration End Time</Form.Label>
                <Col md={3} className="mb-3">
                <DatePicker
            
            selected={this.state.registrationendtime}
            onChange={this.onChangeregisterendtime}
            name="startDate"
       
            showTimeSelect
            timeFormat="HH:mm"
            timeCaption="time"
            dateFormat="h:mm a "
           />
       
           </Col>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Entry Fee:</Form.Label>
                <select class="form-control" id="calculator" name="sittingcapacity" onChange={this.onChangeentryfee} value={this.state.entryfee}>
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
                <Form.Label>No Of Players:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.numberofplayers}
              onChange={this.onChangenoofplayers} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Description:</Form.Label><br/>
               <textarea onChange={this.onChangedescription} value={this.state.description} ></textarea>
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Price Distributions:</Form.Label>
               
              </Form.Group>
            </Col>
            </Row>
            <Row className="align-items-center">
          <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Position:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.position}
              onChange={this.onChangeposition} name="password"
              
             />
          
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Price:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.pprice}
              onChange={this.onChangepprice} name="password"
              
             />
          
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>No.Of Players:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.pnumberofplayers}
              onChange={this.onChangenumberofplayers} name="password"
              
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