import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavigationBar from '../components/NavigationBar';
import '../style/GovernmentServicesPage.css';

const servicesData = [
    {
        title: 'Service Canada',
        description: (
            <>
                <h5>Service Canada</h5>
                <p><strong>Service Canada provides a range of services and benefits for Canadians:</strong></p>
                <li>Employment Insurance</li>
                <li>Canada Pension Plan</li>
                <li>Old Age Security</li>
                <li>Social Insurance Number applications</li>
            </>
        ),
        learnMoreUrl: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html",
        mapUrl: "https://www.google.com/maps?q=Service+Canada",
    },
    {
        title: 'Immigration',
        description: (
            <>
                <h5>Immigration</h5>
                <p><strong>Immigration, Refugees and Citizenship Canada (IRCC) offers:</strong></p>
                <li>Visitor visa and electronic travel authorization (eTA)</li>
                <li>Permanent residence applications</li>
                <li>Work and study permits</li>
                <li>Citizenship applications</li>
            </>
        ),
        learnMoreUrl: "https://www.canada.ca/en/services/immigration-citizenship.html",
        mapUrl: "https://www.google.com/maps?q=Immigration",
    },
    {
        title: 'Legal Services',
        description: (
            <>
                <h5>Legal Services</h5>
                <p><strong>Calgary Legal Guidance (CLG) offers free legal advice to vulnerable Albertans:</strong></p>
                <li>Free legal advice for vulnerable Albertans</li>
                <li>Supports low-income individuals, including those facing family violence or homelessness</li>
                <li>Volunteer lawyers assist with court prep</li>
                <li>Legal info on their website and www.cplea.ca</li>
                <li>Legal clinics for advice and immigration support</li>
                <li>Volunteer in-person lawyer roles</li>
                <li>Appointments Mon-Thurs, 9:00 am – 4:00 pm</li>
                <li>Donations support access to justice</li>
            </>
        ),
        learnMoreUrl: "https://clg.ab.ca/",
        mapUrl: "https://www.google.com/maps?q=Legal+Services",
    }
];

function GovernmentServicesPage() {
    const [showModal, setShowModal] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');

    const handleShowModal = (url) => {
        setRedirectUrl(url);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleConfirmRedirect = () => {
        window.open(redirectUrl, 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
        setShowModal(false);
    };

    return (
        <>
            <NavigationBar />
            <div className="GovernmentServicesPage">
                <div className="header-container">
                    <h1>Government Services</h1>
                </div>

                <div className="accordion-container">
                    <Accordion defaultActiveKey="0">
                        {servicesData.map((service, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{service.title}</Accordion.Header>
                                <Accordion.Body className="accordion-body">
                                    <div className="description-section">
                                        {service.description}
                                    </div>
                                    <div className="button-section">
                                        <Button
                                            variant="primary"
                                            className="learn-more-btn"
                                            onClick={() => handleShowModal(service.learnMoreUrl)}
                                        >
                                            View Website
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="map-btn"
                                            onClick={() => handleShowModal(service.mapUrl)}
                                        >
                                            View on Map 📍
                                        </Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* Warning Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You are about to leave this page and visit an external website. Are you sure you want to continue?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmRedirect}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GovernmentServicesPage;
