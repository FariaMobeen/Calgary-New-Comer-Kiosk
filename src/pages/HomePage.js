import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Card from 'react-bootstrap/Card';
import Checklist from '../images/checklist.png';
import Bank from '../images/bank.png';
import Internet from '../images/internet.png';
import Map from '../images/map.png';
import Transportation from '../images/transportation.png';
import Government from '../images/government.png';
import Emergency from '../images/emergency.png';
import Resources from '../images/resources.png';
import Shopping from '../images/shopping.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EndSessionModal from '../components/EndSessionModal.js';


function HomePage() {
  const navigate = useNavigate();
  localStorage.clear();

  return (
    <>
<div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', paddingRight:'16px' }}>
  <EndSessionModal />
</div>

      <div className='HomePageTitle'>
       
        <h1>What do you need help with?</h1>
      </div>

      <Container className="ChoicesContainer">
        <Row className="g-4"> 
        
        <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Checklist} />
              <Card.Body className="card-body">
                <Card.Title>Newcomer's To-Do List</Card.Title>
                <Button variant="success" onClick={() => navigate('/checklist')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Map} />
              <Card.Body className="card-body">
                <Card.Title>Map Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/map')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Emergency} />
              <Card.Body className="card-body">
                <Card.Title>Emergency Services Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/emergencyservices')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Bank} />
              <Card.Body className="card-body">
                <Card.Title>Banking Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/banking')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Transportation} />
              <Card.Body className="card-body">
                <Card.Title>Transportation Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/transportation')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Internet} />
              <Card.Body className="card-body">
                <Card.Title>Internet and Cellular Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/internet')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Government} />
              <Card.Body className="card-body">
                <Card.Title>Government Services Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/government-services')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Resources} />
              <Card.Body className="card-body">
                <Card.Title>Resources</Card.Title>
                <Button variant="success" onClick={() => navigate('/resources')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Shopping} />
              <Card.Body className="card-body">
                <Card.Title>Shopping Information</Card.Title>
                <Button variant="success" onClick={() => navigate('/shopping')}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
