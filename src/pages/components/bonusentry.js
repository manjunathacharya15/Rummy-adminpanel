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
    
        
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangeprofilepicture = this.onChangeprofilepicture.bind(this);
        
        
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangerole = this.onChangerole.bind(this);

       
      
       
        

       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name:'',
          email:'',
          file1: null,
          password:'',
          role:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangename(e) {
          this.setState({
            name: e.target.value
          })
        }
          
          onChangeemail(e) {
            this.setState({
              email: e.target.value
            })
          }
          onChangeprofilepicture(e) {
            this.setState({
            file1: e.target.files[0]
            })
          }
          onChangepassword(e) {
            this.setState({
              password: e.target.value
            })
          }
          onChangerole(e) {
            this.setState({
            role: e.target.value
            })
          }
         
      
          
        
          
          
          
          onback(){
            window.location='/#/components/alerts'
            }
     
          onSubmit(e) {
            e.preventDefault();

  
 
    
     
  
   
  
            const formData=new FormData();
            formData.append('name',this.state.name);
            formData.append('email',this.state.email);
            formData.append('profilepicture',this.state.file1);
            formData.append('role',this.state.role);
            formData.append('password',this.state.password);
            
          
            
            
            const config={
              headers:{
                'content-type':'multipart/form-data'
              }
        
            
            }
            axios.post('https://acabnodejs.herokuapp.com/subadmin/add', formData)
            .then(function(response){
        
              if(response.data ==='Subadmin added!'){
                alert("Subadmin Added")
                  window.location='/#/components/alerts'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Total Bonus Entry</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Registration Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Reference Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Real Chips:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Silver Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gold Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Platinum Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.role}
              onChange={this.onChangerole} max="100" name="role" />
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Converting Into Real Chips(Players Spending Real Chips)</h5>
        <Form onSubmit={this.onSubmit}>
        <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Registration Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Reference Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Real Chips:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Silver Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gold Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Platinum Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.role}
              onChange={this.onChangerole} max="100" name="role" />
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Real chips get in players </h5>
        <Form onSubmit={this.onSubmit}>
        
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Reference Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Real Chips:</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Silver Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Gold Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Platinum Club Bonus:</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.role}
              onChange={this.onChangerole} max="100" name="role" />
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Rewards Point On Cash Adding</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Rs. 0-Rs. 500</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
           
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
              <Form.Label> Rs. 501-Rs. 1000</Form.Label>
              <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
              <Form.Label> Rs. 1001-Rs. 5000</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
              <Form.Label> Rs. 5001-Rs. 10000</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
          
              
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
              <Form.Label> Up To Rs.  10000</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
             />
              </Form.Group>
            </Col>
            
            
            
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Redeem reward point for cash </Form.Label>
                
              </Form.Group>
            </Col>
            </Row>
            <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Rate of coversion:(Note:Rate must be in % for redeem)</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} name="password"
              
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