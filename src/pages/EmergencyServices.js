import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/emergency.css'; 
import CoCQR from '../images/emergency-coc-QR.png';
import NavigationBar from '../components/NavigationBar';

function EmergencyServices() {
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentUrl, setCurrentUrl] = useState('');
    const [showWarningModal, setShowWarningModal] = useState(false);

    const accordionItems = [
        { title: 'Ambulance', eventKey: '0' },
        { title: 'Police', eventKey: '1' },
        { title: 'Fire Department', eventKey: '2' },
        { title: 'All City of Calgary Emergency Services', eventKey: '3' }
    ];

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    return (
        <>
        <NavigationBar/>
        <div className="EmergencyServices">
            <h1>Emergency Services</h1>
            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    {accordionItems.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Ambulance' && (
                                    <>
                                        <p><strong>Emergency Line: 9-1-1</strong></p>
                                        <p><strong>HealthLink Line: 8-1-1.</strong> For general health information or advice.</p>
                                        <p><strong>Non-Emergency Mental Health Line: 2-1-1.</strong> For mental health and addiction support, connection to food and basic needs, or access to community and social resources.</p>
                                        <p><Button className="button" onClick={() => {
                                            setCurrentUrl("https://www.alberta.ca/ambulance-and-emergency-health-services");
                                            setShowWarningModal(true);
                                        }}>View Website</Button></p>
                                    </>
                                )}
                                {item.title === 'Police' && (
                                    <>
                                        <p><strong>Emergency Line: 9-1-1</strong></p>
                                        <p><strong>Non-Emergency Line: 403-266-1234.</strong> All public safety matters and reports of crime not in progress.</p>
                                        <p><Button className="button" onClick={() => {
                                            setCurrentUrl("https://www.calgary.ca/cps.html");
                                            setShowWarningModal(true);
                                        }}>View Website</Button></p>
                                    </>
                                )}
                                {item.title === 'Fire Department' && (
                                    <>
                                        <p><strong>Emergency Line: 9-1-1</strong></p>
                                        <p><strong>Non-Emergency Line: 3-1-1</strong></p>
                                        <p><Button className="button" onClick={() => {
                                            setCurrentUrl("https://www.calgary.ca/categories/subcategory-calgaryfiredepartment-grid.html");
                                            setShowWarningModal(true);
                                        }}>View Website</Button></p>
                                    </>
                                )}
                                {item.title === 'All City of Calgary Emergency Services' && (
                                    <>
                                        <div className="in-line-buttons">
                                            <Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.calgary.ca/our-services/911.html");
                                                setShowWarningModal(true);
                                            }}>View Website</Button>
                                            <Button className="button" onClick={() => handleShow(CoCQR)}>View on Mobile</Button>
                                        </div>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>

            <Modal show={showWarningModal} onHide={() => setShowWarningModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Caution</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please do not enter any personal or sensitive information on external websites.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowWarningModal(false)}>Go Back</Button>
                    <Button variant="primary" onClick={() => {
                        setShowWarningModal(false);
                        setTimeout(() => {
                            window.open(currentUrl, '_blank', 'width=800,height=600');
                        }, 0);
                    }}
                    >I Understand</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Website QR Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="Download QR Code" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default EmergencyServices;
