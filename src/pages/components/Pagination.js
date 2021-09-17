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
    
        
        this.onChangegame = this.onChangegame.bind(this);
        this.onChangegametype= this.onChangegametype.bind(this);
        this.onChangetablename = this.onChangetablename.bind(this);
        this.onChangetablenumber = this.onChangetablenumber.bind(this);
        
        
        this.onChangebet = this.onChangebet.bind(this);
        this.onChangevaluepoints = this.onChangevaluepoints.bind(this);
        this.onChangesittingcapacity = this.onChangesittingcapacity.bind(this);
        this.onChangetablestatus = this.onChangetablestatus.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          game:'',
          gametype:'',
          tablename: '',
          tablenumber: '',
          bet:'',
          valueponits:'',
          sittingcapacity:'',
          tablestatus:'',

         
            trainer:[]
            
            
          }
        }
        
        onChangegame(e) {
          this.setState({
            game: e.target.value
          })
        }
          
          onChangegametype(e) {
            this.setState({
              gametype: e.target.value
            })
          }
          onChangetablename(e) {
            this.setState({
            tablename: e.target.value
            })
          }
          onChangetablenumber(e) {
            this.setState({
              tablenumber: e.target.value
            })
          }
          onChangebet(e) {
            this.setState({
            bet: e.target.value
            })
          }
          onChangevaluepoints(e) {
            this.setState({
            valueponits: e.target.value
            })
          }
          onChangesittingcapacity(e) {
            this.setState({
            sittingcapacity: e.target.value
            })
          }
          onChangetablestatus(e) {
            this.setState({
            tablestatus: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const customer = {
              game: this.state.game,
              gametype: this.state.gametype,
              tablename: this.state.tablename,
              tablenumber:this.state.tablenumber,
              bet:this.state.bet,
              valueponits:this.state.valueponits,
              sittingcapacity:this.state.sittingcapacity,
              tablestatus: this.state.tablestatus,
             

              
        
        
             
              
        
            }
            axios.post('https://arummynodejs.herokuapp.com/pointrummy/add', customer)
            .then(function(response){
        
              if(response.data ==='Pointrummy added!'){
                alert("Point Pokker Added")
                  window.location.reload(true)
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Table Details</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Game:</Form.Label>
                <select class="form-control" id="calculator" name="game" onChange={this.onChangegame} value={this.state.game}>
                                                    <option value="Crash Game">Crash Game</option>
                                                    <option value="Free Game">Free Game</option>
                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Game Type:</Form.Label>
                <select class="form-control" id="calculator" name="gametype" onChange={this.onChangegametype} value={this.state.gametype}>
                                                    <option value="Point Rummy">Point Rummy</option>
                                                    <option value="Pool Rummy">Pool Rummy</option>
                                                    <option value="Deal Rummy">Deal Rummy</option>
                                                    <option value="Papplu Rummy">Papplu Rammy</option>
                                                    
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Table Name:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.tablename}
              onChange={this.onChangetablename} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Table no:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.tablenumber}
              onChange={this.onChangetablenumber} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Beat/Entry:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.bet}
              onChange={this.onChangebet} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Value ponits(Rs):</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.valueponits}
              onChange={this.onChangevaluepoints} max="100" name="role" />
              </Form.Group>
            </Col>
            </Row>
            <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Sitting Capacity:</Form.Label>
                <select class="form-control" id="calculator" name="sittingcapacity" onChange={this.onChangesittingcapacity} value={this.state.sittingcapacity}>
                                                    <option value="2 Seat">2 Seat</option>
                                                    <option value="6 Seat">6 Seat</option>
                                                   
                                                    
                                                    
                                                </select>
              </Form.Group>
            </Col>
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Table Status:</Form.Label>
                <select class="form-control" id="calculator" name="tablestatus" onChange={this.onChangetablestatus} value={this.state.tablestatus}>
                                                    <option value="Live">Live</option>
                                                    <option value="Stop">Stop</option>
                                                   
                                                    
                                                    
                                                    
                                                </select>
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