import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavigationBar from '../components/NavigationBar';
import '../style/GovernmentServicesPage.css';

import immigrationQR from '../images/governmentQR/immigrationQR.png';
import legalServicesQR from '../images/governmentQR/legalServicesQR.png';
import serviceCanadaQR from '../images/governmentQR/serviceCanadaQR.png';

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
        qr: serviceCanadaQR
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
        qr: immigrationQR
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
        qr: legalServicesQR
    }
];

function GovernmentServicesPage() {
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const [currentQR, setCurrentQR] = useState('');

    // Show the QR code modal
    const handleShowQRModal = (qrImage) => {
        setCurrentQR(qrImage);
        setShowQRModal(true);
    };

    // Show the warning modal
    const handleShowWarningModal = (url) => {
        setRedirectUrl(url);
        setShowWarningModal(true);
    };

    const handleCloseModal = () => {
        setShowWarningModal(false);
        setShowQRModal(false);
        setCurrentQR(''); // Reset the QR when modal is closed
    };

    const handleConfirmRedirect = () => {
        window.open(redirectUrl, 'Popup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
        setShowWarningModal(false);
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
                                            variant="secondary"
                                            className="map-btn"
                                            onClick={() => window.open(service.mapUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no')}
                                        >
                                            View on Map 📍
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="map-btn"
                                            onClick={() => handleShowWarningModal(service.learnMoreUrl)}
                                        >
                                            View Website
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="map-btn"
                                            onClick={() => handleShowQRModal(service.qr)}
                                        >
                                            View on Mobile
                                        </Button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>

                {/* Warning Modal */}
                <Modal show={showWarningModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Caution</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please do not enter any personal or sensitive information on external websites. If you need to access anything confidential, please select "View on Mobile".</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Go Back
                        </Button>
                        <Button variant="primary" onClick={handleConfirmRedirect}>
                            I Understand
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* QR Code Modal */}
                <Modal show={showQRModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>View Mobile Site</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={currentQR} alt="QR Code" style={{ width: '100%' }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default GovernmentServicesPage;
