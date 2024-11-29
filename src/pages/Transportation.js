import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/transportation.css'; 
import uberQR from '../images/uberQR.png';
import lyftQR from '../images/lyftQR.png'; 
import NavigationBar from '../components/NavigationBar';

function Transportation() {
    const [sortCriteria, setSortCriteria] = useState('none');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [warningModal, setWarningModal] = useState(false);
    const [targetUrl, setTargetUrl] = useState('');

    const accordionItems = [
        { title: 'Rental Cars', price: '$$$', eventKey: '1' },
        { title: 'Taxis', price: '$$', eventKey: '0' },
        { title: 'Calgary Transit', price: '$', eventKey: '2' },
        { title: 'Ride-Share Apps', price: '$$', eventKey: '3' },
    ];

    const sortAccordionItems = (items) => {
        if (sortCriteria === 'lowToHigh') {
            return [...items].sort((a, b) => a.price.localeCompare(b.price));
        } else if (sortCriteria === 'highToLow') {
            return [...items].sort((a, b) => b.price.localeCompare(a.price));
        }
        return [...items];
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const handleWarningClose = () => {
        setWarningModal(false);
        setTargetUrl('');
    };

    const handleWarningConfirm = () => {
        window.open(targetUrl, "_blank", "noopener,noreferrer,width=800,height=600");
        setWarningModal(false);
    };

    const handleVisitWebsite = (url) => {
        setTargetUrl(url);
        setWarningModal(true);
    };

    return (
        <>
        <NavigationBar />
        <div className="Transportation">
            <div className="header-container">
                <h1>Transportation</h1>
                <div className="sort-container">
                    <label htmlFor="sort">Sort by Price:</label>
                    <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                        <option value="none">Default</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>

            <div className="accordion-container">
                <Accordion defaultActiveKey="2">
                    {sortAccordionItems(accordionItems).map(item => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title} - {item.price}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Rental Cars' && (
                                    <>
                                        <h5>Rental Car Companies</h5>
                                        <ul>
                                            <li className="ride-share-option">
                                                <strong>Budget:</strong> Affordable rental options for every budget.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.budget.com/en/home")}>View Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Enterprise:</strong> Reliable rental cars for all your travel needs.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.enterprise.com/en/home.html")}>View Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Hertz:</strong> Convenient rentals with a wide range of choices.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.hertz.com/rentacar/reservation/")}>View Website</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>National:</strong> Quality vehicles for business or vacation.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.nationalcar.com/en/home.html")}>View Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Taxis' && (
                                    <>
                                        <h5>Taxi Services in Calgary</h5>
                                        <ul>
                                            <li className="taxi-service-option">
                                                <strong>Checker Cabs:</strong> Calgary's largest fleet, offering accessible and affordable rides.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.thecheckergroup.com/")}>View Website</Button>
                                            </li>
                                            <li className="taxi-service-option">
                                                <strong>United Cabs:</strong> Known for excellent service, available 24/7.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://calgarycabs.ca/")}>View Website</Button>
                                            </li>
                                            <li className="taxi-service-option">
                                                <strong>Airport Taxi:</strong> Specialized in airport transfers with spacious vehicles.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.yyc.com/en-us/transportation/taxis-sedans")}>View Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Calgary Transit' && (
                                    <>
                                        <ul>
                                            <li className="taxi-service-option">
                                                <h5>Calgary Transit</h5>
                                                <strong>Fares:</strong> $3.50 for adults, $2.50 for youth, $1.75 for seniors.
                                                <strong>Hours of Service:</strong> Buses: 5 AM to midnight, Trains: 4 AM to 1 AM.
                                                <Button variant="primary" onClick={() => handleVisitWebsite("https://www.calgarytransit.com/")}>View Website</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                {item.title === 'Ride-Share Apps' && (
                                    <>
                                        <h5>Popular Ride-Share Apps</h5>
                                        <ul>
                                            <li className="ride-share-option">
                                                <strong>Uber:</strong> A popular app for quick rides.
                                                <Button variant="primary" onClick={() => handleShow(uberQR)}>Download Uber</Button>
                                            </li>
                                            <li className="ride-share-option">
                                                <strong>Lyft:</strong> Known for friendly drivers and fast rides.
                                                <Button variant="primary" onClick={() => handleShow(lyftQR)}>Download Lyft</Button>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Download App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="Download QR Code" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={warningModal} onHide={handleWarningClose}>
                <Modal.Header closeButton>
                    <Modal.Title>External Link Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please do not enter any personal or sensitive information on external websites.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleWarningClose}>Go Back</Button>
                    <Button variant="primary" onClick={handleWarningConfirm}>I Understand</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default Transportation;
