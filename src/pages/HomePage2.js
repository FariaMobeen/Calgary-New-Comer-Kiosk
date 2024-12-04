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

function HomePage2() {
  localStorage.clear();
    const navigate = useNavigate();
      localStorage.clear();

  return (
    <>
      <div className='HomePageTitle'>
      <Button
      className="BackButton1"
      variant="danger"
      size="lg"
      onClick={() => navigate('/')}><i class="bi bi-arrow-left"></i> Revenir</Button>
        <h1>Pour quoi avez-vous besoin d’aide?</h1>
      </div>

      <Container className="ChoicesContainer">
        <Row className="g-4"> {/* g-4 adds spacing between cards */}
        
        <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Checklist} />
              <Card.Body className="card-body">
                <Card.Title>Liste de contrôle des tâches importantes</Card.Title>
                <Button variant="success" onClick={() => navigate('/checklist')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Map} />
              <Card.Body className="card-body">
                <Card.Title>Informations cartographiques</Card.Title>
                <Button variant="success" onClick={() => navigate('/')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Emergency} />
              <Card.Body className="card-body">
                <Card.Title>Informations sur les services d'urgence</Card.Title>
                <Button variant="success" onClick={() => navigate('/emergencyservices')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Bank} />
              <Card.Body className="card-body">
                <Card.Title>Informations bancaires</Card.Title>
                <Button variant="success" onClick={() => navigate('/banking')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Transportation} />
              <Card.Body className="card-body">
                <Card.Title>Informations sur le transport</Card.Title>
                <Button variant="success" onClick={() => navigate('/transportation')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Internet} />
              <Card.Body className="card-body">
                <Card.Title>Informations Internet et cellulaires</Card.Title>
                <Button variant="success" onClick={() => navigate('/')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Government} />
              <Card.Body className="card-body">
                <Card.Title>Informations sur les services gouvernementaux</Card.Title>
                <Button variant="success" onClick={() => navigate('/government-services')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Resources} />
              <Card.Body className="card-body">
                <Card.Title>Ressources</Card.Title>
                <Button variant="success" onClick={() => navigate('/resources')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="h-100">
          <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Img variant="top" src={Shopping} />
              <Card.Body className="card-body">
                <Card.Title>Achats</Card.Title>
                <Button variant="success" onClick={() => navigate('/shopping')}>Sélectionner</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage2;
