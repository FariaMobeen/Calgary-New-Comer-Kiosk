import React, { useState } from 'react';
import '../style/internetPhonePlan.css';
import bellLogo from '../images/bell.png';
import telusLogo from '../images/telus.png';
import rogersLogo from '../images/rogers.png';
import freedomLogo from '../images/freedom.png';
import fidoLogo from '../images/fido.png';
import koodoLogo from '../images/koodo.png';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';

import bellQR from '../images/internetQR/bellQR.png';
import fidoQR from '../images/internetQR/fidoQR.png';
import freedomQR from '../images/internetQR/freedomQR.png';
import koodoQR from '../images/internetQR/koodoQR.png';
import rogersQR from '../images/internetQR/rogersQR.png';
import telusQR from '../images/internetQR/telusQR.png';

function InternetPhonePlanPage() {
    const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [currentImage, setCurrentImage] = useState('');
    const [showModal, setShowModal] = useState(false);



    const providers = [
        { name: 'Bell', logo: bellLogo, website: 'https://www.bell.ca', rating: 4.5, priceRange: 40, phone: '1-800-668-6878', mapLocation: 'https://www.google.com/maps?q=Bell+stores+Calgary', image: bellQR },
        { name: 'Telus', logo: telusLogo, website: 'https://www.telus.com', rating: 5.0, priceRange: 60, phone: '1-866-558-2273', mapLocation: 'https://www.google.com/maps?q=Telus+stores+Calgary', image: telusQR },
        { name: 'Rogers', logo: rogersLogo, website: 'https://www.rogers.com', rating: 3.5, priceRange: 80, phone: '1-888-764-3771', mapLocation: 'https://www.google.com/maps?q=Rogers+stores+Calgary', image: rogersQR },
        { name: 'Freedom Mobile', logo: freedomLogo, website: 'https://www.freedommobile.ca', rating: 4.0, priceRange: 50, phone: '1-877-946-3184', mapLocation: 'https://www.google.com/maps?q=Freedom+Mobile+stores+Calgary' , image: freedomQR},
        { name: 'Fido', logo: fidoLogo, website: 'https://www.fido.ca', rating: 4.0, priceRange: 90, phone: '1-888-481-3436', mapLocation: 'https://www.google.com/maps?q=Fido+stores+Calgary', image: fidoQR },
        { name: 'Koodo', logo: koodoLogo, website: 'https://www.koodomobile.com', rating: 5.0, priceRange: 45, phone: '1-866-995-6636', mapLocation: 'https://www.google.com/maps?q=Koodo+stores+Calgary' , image: koodoQR},
    ];

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const sortedProviders = [...providers].sort((a, b) => {
        if (sortCriteria === 'priceLowToHigh') return a.priceRange - b.priceRange;
        if (sortCriteria === 'ratingHighToLow') return b.rating - a.rating;
        return 0;
    });

    const handleWarningModal = (provider) => {
        setSelectedProvider(provider);
        setShowWarningModal(true);
    };
    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };
    const openProviderPopup = () => {
        if (selectedProvider) {
            window.open(selectedProvider.website, 'ProviderPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
            setShowWarningModal(false);
        }
    };

    const openMapPopup = (providerName) => {
        window.open(providerName, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
    };

    return (
        <>
            <NavigationBar />
            <div className="InternetPhonePlanPage">
                <div className="header-container">
                    <h1>Internet and Cellular Providers</h1>
                    <div className="sort-container">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                            <option value="priceLowToHigh">Price</option>
                            <option value="ratingHighToLow">Rating</option>
                        </select>
                    </div>
                </div>

                <div className="providers-container">
                    {sortedProviders.map((provider, index) => (
                        <Card key={index} className="provider-card">
                            <Card.Body>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleWarningModal(provider);
                                    }}
                                    className="provider-link"
                                    href="#"
                                >
                                    <Card.Img variant="top" src={provider.logo} alt={`${provider.name} logo`} className="provider-logo" />
                                    <Card.Title>{provider.name}</Card.Title>
                                    <Card.Text>
                                        Price Range: ${provider.priceRange}
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {provider.rating} ⭐
                                    </Card.Text>
                                    <Card.Text>
                                        Phone: {provider.phone}
                                    </Card.Text>
                                </a>
                                <div className="action-buttons">
                                    <Button variant="outline-primary" onClick={() => openMapPopup(provider.mapLocation)}>              View on Map 📍</Button>
                                    <Button variant="outline-secondary" onClick={() => handleWarningModal(provider)}>View Website</Button>
                                    <Button variant="primary" onClick={() => handleShow(provider.image)}>
                                        View on Mobile
                                    </Button>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Warning Modal */}
            <Modal show={showWarningModal} onHide={() => setShowWarningModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Caution</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please do not enter any personal or sensitive information on external websites.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowWarningModal(false)}>Go Back</Button>
                    <Button variant="primary" onClick={openProviderPopup}>I Understand</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Mobile Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="view QR code" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default InternetPhonePlanPage;
