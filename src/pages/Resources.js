import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/resources.css'; 
//import '../style/transportation.css'; 
import ImmigrantServicesCalgaryQR from '../images/resources-images/immigrantservicescalgaryQR.png';
import CPLQR from '../images/resources-images/CPLQR.png';
import CIWAQR from '../images/resources-images/CIWAQR.png';
import FoodBankQR from '../images/resources-images/FoodBankQR.png';
import CentreForNewcomersQR from '../images/resources-images/CentreForNewcomersQR.png';
import NavigationBar from '../components/NavigationBar';


function Resources() {
    const [sortCriteria, setSortCriteria] = useState('none');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [selectedCategories, setSelectedCategories] = useState(new Set()); 
    const [currentLocation, setCurrentLocation] = useState(null); // Store the kiosk's current location
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [link, setLink] = useState(null);

    const accordionItems = [
      { 
          title: 'Immigrant Services Calgary', 
          eventKey: '1', 
          categories: ['Employment', 'Communities', 'Childcare', 'Other'], 
          relevancy: { 'Employment': 5, 'Communities': 3, 'Childcare': 2, 'Other': 3 }, 
          location: { lat: 51.047319552154356, lon: -114.08203417196579 } 
      },
      { 
          title: 'Calgary Public Library', 
          eventKey: '0', 
          categories: ['Employment', 'Finances', 'Other'], 
          relevancy: { 'Employment': 2, 'Finances': 2, 'Other': 5 }, 
          location: { lat: 51.0499, lon: -114.0718 }//there are multiple locations
      },
      { 
          title: "Calgary Immigrant Women's Association", 
          eventKey: '2', 
          categories: ['Employment', 'Housing', 'Childcare', 'Mental Health'], 
          relevancy: { 'Employment': 4, 'Housing': 4, 'Childcare': 4, 'Mental Health': 4 }, 
          location: { lat: 51.049541664802106, lon: -114.06064574442266 } 
      },
      { 
          title: 'Calgary Food Bank', 
          eventKey: '3', 
          categories: ['Food'], 
          relevancy: { 'Food': 5 }, 
          location: { lat: 51.00968981939483, lon: -114.03606763136762} 
      },
      { 
          title: 'Centre for Newcomers', 
          eventKey: '4', 
          categories: ['Employment', 'Childcare', 'Mental Health', 'Communities'], 
          relevancy: { 'Employment': 4, 'Childcare': 4, 'Mental Health': 5, 'Communities': 4}, 
          location: { lat: 51.0564432534392, lon: -113.983542560201} 
      },
    ];
  

    useEffect(() => {
                setCurrentLocation({
                    //lat: position.coords.latitude,
                    //lon: position.coords.longitude,
                    lat: 51.044313574830255,//default location (calgary tower)
                    lon: -114.06309093347211,
                });
    }, []);

    // Function to calculate distance between two locations
    const calculateDistance = (loc1, loc2) => {
      if (!loc1 || !loc2 || loc1.lat === undefined || loc1.lon === undefined || loc2.lat === undefined || loc2.lon === undefined) {
          return Infinity; // Return a large distance if any location data is missing
      }
  
      const R = 6371; // Radius of the Earth in km
      const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
      const dLon = (loc2.lon - loc1.lon) * (Math.PI / 180);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(loc1.lat * (Math.PI / 180)) *
          Math.cos(loc2.lat * (Math.PI / 180)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    const handleWarningModal = (site) => {
        setLink(site);
        setShowWarningModal(true);
    };
    
    // Sort items by proximity or relevancy
    const sortAccordionItems = (items) => {
      if (sortCriteria === 'distance') {
        return [...items].sort((a, b) => calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location));
      } else if (sortCriteria === 'relevancy') {
        return [...items].sort((a, b) => {
          let relevancyA, relevancyB;
    
          // Determine the relevancy to use
          if (selectedCategories.size === 0) {  // If "All" is selected (size is 0)
            relevancyA = Math.max(...Object.values(a.relevancy));
            relevancyB = Math.max(...Object.values(b.relevancy));
          } else { // Otherwise, calculate relevancy based on selected categories
            relevancyA = Math.max(...[...selectedCategories].map(cat => a.relevancy[cat] || 0));
            relevancyB = Math.max(...[...selectedCategories].map(cat => b.relevancy[cat] || 0));
          }
    
          // Sort primarily by relevancy
          if (relevancyA !== relevancyB) {
            return relevancyB - relevancyA;
          }
    
          // If relevancy is the same, sort by proximity
          return calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location);
        });
      }
      return [...items]; // Default sort if needed
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

    const toggleCategory = (category) => {
      setSelectedCategories((prevCategories) => {
          const newCategories = new Set(prevCategories);
  
          if (category === "") { // If "All" is selected
              newCategories.clear(); // Clear any selected categories
          } else {
              // Toggle the selected category
              if (newCategories.has(category)) {
                  newCategories.delete(category);
              } else {
                  newCategories.add(category);
              }
          }
  
          // If no categories are selected, show "All"
          if (newCategories.size === 0) {
              return new Set(); // Return empty set to show "All" results
          }
  
          return newCategories;
      });
    };

    const filteredAndSortedItems = sortAccordionItems(
        accordionItems.filter(item =>
          // Ensure that every selected category is in the item's categories
          [...selectedCategories].every(selectedCategory => item.categories.includes(selectedCategory))
        )
    );

    const openWebsite = () => {
      window.open(link, '_blank', "width=800,height=600");
      setShowWarningModal(false);
    };

    const openMapPopup = (destLatOrType, destLon) => {
        if (typeof destLatOrType === 'string') {
          // If a string like "mall" is passed, open a search on Google Maps
          const { lat, lon } = currentLocation || {};
          const searchQuery = encodeURIComponent(destLatOrType); // Encode the search term
          const mapsUrl = `https://www.google.com/maps/search/${searchQuery}/@${lat},${lon},15z`;
          window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
       
        } else if (typeof destLatOrType === 'number' && typeof destLon === 'number') {
          // If lat/lon coordinates are passed, open a directions map
          const { lat, lon } = currentLocation || {};
          if (lat && lon) {
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destLatOrType},${destLon}&origin=${lat},${lon}`;
            window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
          } else {
            alert('Current location is not available. Please try again later.');
          }
        } else {
          alert('Invalid input provided to openMapPopup.');
        }
    };
  

    return (
        <>
        <NavigationBar />
        <div className="Resources">
            <h1>Resources</h1>
            {/* Category Filter Buttons */}
            <div className="filter-buttons">
                {['All', 'Employment', 'Finances', 'Housing', 'Food', 'Childcare', 'Communities', 'Mental Health', 'Other'].map(category => (
                    <Button
                      key={category}
                      variant={
                          (category === "All" && selectedCategories.size === 0) || 
                          selectedCategories.has(category)
                              ? 'primary'
                              : 'outline-primary'
                      }
                      onClick={() => toggleCategory(category === "All" ? "" : category)}
                      style={{
                          backgroundColor: (category === "All" && selectedCategories.size === 0) || selectedCategories.has(category) ? 'black' : '#808080',
                          color: 'white',
                          border: '1px solid black', // black outline
                          margin: '5px' // add spacing between buttons
                      }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))}
            </div>


            {/* Sort Selector */}
            <div className="sort-container">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="relevancy">Relevancy</option>
                    <option value="distance">Distance</option>
                    
                </select>
            </div>

            {/* Accordion Container */}
            <div className="accordion-container">
                <Accordion defaultActiveKey={null}>
                    {filteredAndSortedItems.map(item => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Immigrant Services Calgary' && (
                                  <>
                                    <p>Immigrant Services Calgary offers a range of services to support people who are settling into a new life in Canada, including: job support, translation, English testing, and help for families.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.immigrantservicescalgary.ca/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(ImmigrantServicesCalgaryQR)}>View on Mobile</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup(item.location.lat, item.location.lon)}>📍</Button></p>
                                  </>
                                )}
                                {item.title === 'Calgary Public Library' && (
                                  <>
                                    <p>Calgary Public Library provides free access to the internet and books. They also provide different services and programs which you can explore on their website.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.calgarylibrary.ca/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(CPLQR)}>View on Mobile</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("library")}>📍</Button></p>
                                  </>
                                )}
                                {item.title === "Calgary Immigrant Women's Association" && (
                                  <>
                                    <p>CIWA supports immigrant and refugee women, girls and their families. They have numerous services that include employement, housing, childcare and mental health.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => handleWarningModal("https://ciwa-online.com/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(CIWAQR)}>View on Mobile</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup(item.location.lat, item.location.lon)}>📍</Button></p>
                                  </>
                                )}
                                {item.title === 'Calgary Food Bank' && (
                                  <>
                                    <p>Calgary Food Bank is the first line of emergency food support for individuals and families in need.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.calgaryfoodbank.com/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(FoodBankQR)}>View on Mobile</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup(item.location.lat, item.location.lon)}>📍</Button></p>
                                  </>
                                )}
                                {item.title === 'Centre for Newcomers' && (
                                  <>
                                    <p>Centre for Newcomers is a key resource for immigrants and refugees. Their services include employment, mental health, childcare and finding communities.</p>
                                    <div className="in-line">
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.centrefornewcomers.ca/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(CentreForNewcomersQR)}>View on Mobile</Button></p>
                                    </div>
                                    <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup(item.location.lat, item.location.lon)}>📍</Button></p>
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
                    <p>Please do not enter any personal or sensitive information on external websites. If you need to access anything confidential, please select "View on Mobile".</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowWarningModal(false)}>Go Back</Button>
                    <Button variant="primary" onClick={openWebsite}>I Understand</Button>
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
        </div>
        </>
    );
}

export default Resources;
