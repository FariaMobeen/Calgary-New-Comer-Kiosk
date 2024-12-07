import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/shopping.css'; 
import WalmartQR from '../images/shopping-images/walmartQR.png';
import HHQR from '../images/shopping-images/HHQR.png';
import CTQR from '../images/shopping-images/CTQR.png';
import NavigationBar from '../components/NavigationBar';


function Shopping() {
    const [sortCriteria, setSortCriteria] = useState('price');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [selectedCategories, setSelectedCategories] = useState(new Set()); 
    const [currentLocation, setCurrentLocation] = useState(null);
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [link, setLink] = useState(null);
  
    const accordionItems = [
      { 
          title: 'Thrift Stores', 
          eventKey: '1', 
          categories: ['Clothing', 'Furniture', 'Hardware'], 
          price: '$', 
          location: { lat: 51.047319552154356, lon: -114.08203417196579 }
      },
      { 
          title: 'Walmart', 
          eventKey: '0', 
          categories: ['Clothing', 'Furniture', 'Hardware','Appliances', 'Food', 'Other'], 
          price: '$$',
          location: { lat: 51.041031747066654, lon: -114.13960017972096}
      },
      { 
          title: 'Shopping Malls', 
          eventKey: '2', 
          categories: ['Clothing', 'Furniture', 'Other'], 
          price: '$$$',
          location: { lat: 51.049541664802106, lon: -114.06064574442266 }
      },
      { 
          title: 'Home Hardware', 
          eventKey: '3', 
          categories: ['Hardware', 'Appliances'], 
          price: '$$',
          location: { lat: 51.00968981939483, lon: -114.03606763136762}
      },
      { 
          title: 'Canadian Tire', 
          eventKey: '4', 
          categories: ['Hardware', 'Appliances', 'Other'], 
          price: '$$',
          location: { lat: 51.0564432534392, lon: -113.983542560201}
      },
    ];
  

    useEffect(() => {
                setCurrentLocation({
                    lat: 51.044313574830255,
                    lon: -114.06309093347211,
                });
    }, []);

    const calculateDistance = (loc1, loc2) => {
      if (!loc1 || !loc2 || loc1.lat === undefined || loc1.lon === undefined || loc2.lat === undefined || loc2.lon === undefined) {
          return Infinity;
      }
  
      const R = 6371;
      const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
      const dLon = (loc2.lon - loc1.lon) * (Math.PI / 180);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(loc1.lat * (Math.PI / 180)) *
          Math.cos(loc2.lat * (Math.PI / 180)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const priceScale = {
      '$': 1,
      '$$': 2,
      '$$$': 3,
      '$$$$': 4,
    };
    const sortAccordionItems = (items) => {
      if (sortCriteria === 'proximity') {
          return [...items].sort((a, b) => 
              calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location)
          );
      } else if (sortCriteria === 'price') {
          return [...items].sort((a, b) => {
              let priceA = priceScale[a.price] || 0;
              let priceB = priceScale[b.price] || 0;
  
              if (priceA !== priceB) {
                  return priceA - priceB;
              }
  
              return calculateDistance(currentLocation, a.location) - calculateDistance(currentLocation, b.location);
          });
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

    const toggleCategory = (category) => {
        setSelectedCategories(() => {
            if (category === "") {
                return new Set();
            } else {
                const newCategories = new Set();
                newCategories.add(category);
                return newCategories;
            }
        });
    };
    

    const filteredAndSortedItems = sortAccordionItems(
        accordionItems.filter(item =>
          [...selectedCategories].every(selectedCategory => item.categories.includes(selectedCategory))
        )
    );

    const openWebsite = () => {
        window.open(link, '_blank', "width=800,height=600");
        setShowWarningModal(false);
    };

    const openMapPopup = (destLatOrType, destLon) => {
        if (typeof destLatOrType === 'string') {
          const { lat, lon } = currentLocation || {};
          const searchQuery = encodeURIComponent(destLatOrType);
          const mapsUrl = `https://www.google.com/maps/search/${searchQuery}/@${lat},${lon},15z`;
          window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
       
        } else if (typeof destLatOrType === 'number' && typeof destLon === 'number') {
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
      
  
    const handleWarningModal = (site) => {
        setLink(site);
        setShowWarningModal(true);
    };

    return (
        <>
        <NavigationBar />
        <div className="Shopping">
            <h1>Shopping</h1>

            <div className="filter-buttons">
                {['All', 'Clothing', 'Furniture', 'Food', 'Appliances', 'Hardware', 'Other'].map(category => (
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
                        border: '1px solid black',
                        margin: '5px'
                    }}
                  >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                  
                ))}
            </div>



            <div className="sort-container">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="price">Price</option>
                    <option value="proximity">Distance</option>
                </select>
            </div>


            <div className="accordion-container">
                <Accordion defaultActiveKey={null}>
                    {filteredAndSortedItems.map(item => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>
                              {item.title} <span style={{ marginLeft: '5px', color: '#888' }}>{item.price}</span>
                            </Accordion.Header>

                            <Accordion.Body>
                                {item.title === 'Walmart' && (
                                  <>
                                    <p>Walmart is a large retail store that offers a wide variety of products, including groceries, clothing, electronics, and household items, often at lower prices. 
                                      It provides a one-stop shopping experience, making it convenient for customers to find everything they need in one place.</p>
                                    <div className="in-line">
                                        <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("walmart")}>View on Map📍</Button></p>
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.walmart.ca/en")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(WalmartQR)}>View on Mobile</Button></p>
                                    </div>
                                  </>
                                )}
                                {item.title === 'Thrift Stores' && (
                                  <>
                                    <p>Calgary has several thrift stores where you can find secondhand clothes, furniture and household items at affordable prices.</p>
                                    <div className="in-line">
                                        <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("thrift stores")}>View on Map📍</Button></p>
                                    </div>
                                  </>
                                )}
                                {item.title === 'Home Hardware' && (
                                  <>
                                    <p>Home Hardware sells of various materials and tools for home improvement and construction projects.</p>
                                    <div className="in-line">
                                        <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("home hardware")}>View on Map📍</Button></p>
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.homehardware.ca/en/")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(HHQR)}>View on Mobile</Button></p>
                                    </div>
                                  </>
                                )}
                                {item.title === 'Canadian Tire' && (
                                  <>
                                    <p>Canadian Tire sells various products for home, vehicles, sports, and leisure.</p>
                                    <div className="in-line">
                                        <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("canadian tire")}>View on Map📍</Button></p>
                                        <p><Button className="button" onClick={() => handleWarningModal("https://www.canadiantire.ca/en.html")}>View Website</Button></p>
                                        <p><Button className="button" onClick={() => handleShow(CTQR)}>View on Mobile</Button></p>
                                    </div>
                                  </>
                                )}
                                {item.title === 'Shopping Malls' && (
                                  <>
                                    <p>Calgary has several shopping malls. Malls have multiple stores that sell new clothing, furniture, and many other products.</p>
                                    <div className="in-line">
                                        <p><Button variant="outline-primary" className = "button" onClick={() => openMapPopup("shopping malls")}>View on Map📍</Button></p>
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

export default Shopping;