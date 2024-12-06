import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/checklist.css'; 
import clientSupportQR from '../images/checklist-images/clientSupportQR.png';
import newcomerServicesQR from '../images/checklist-images/newcomerServicesQR.png';
import SINQR from '../images/checklist-images/SINQR.png';
import AHCIPQR from '../images/checklist-images/AHCIPQR.png';
import schoolsQR from '../images/checklist-images/schoolsQR.png';
import qualificationsQR from '../images/checklist-images/qualificationsQR.png';
import jobSearchQR from '../images/checklist-images/jobSearchQR.png';
import jobBankQR from '../images/checklist-images/jobBankQR.png';
import CLARCQR from '../images/checklist-images/CLARCQR.png';
import GoCEngNFrQR from '../images/checklist-images/GoCEngNFrQR.png';
import childTaxBenefitQR from '../images/checklist-images/childTaxBenefitQR.png';
import driversLicenseQR from '../images/checklist-images/driversLicenseQR.png';
import lawsQR from '../images/checklist-images/lawsQR.png';
import rentHomeQR from '../images/checklist-images/rentHomeQR.png';
import buyHomeQR from '../images/checklist-images/buyHomeQR.png';
import homeLawsQR from '../images/checklist-images/homeLawsQR.png';
import employeeLawsQR from '../images/checklist-images/employeeLawsQR.png';
import familyDocQR from '../images/checklist-images/familyDocQR.png';
import postSecondaryQR from '../images/checklist-images/postSecondaryQR.png';
import mentalHealthSupportQR from '../images/checklist-images/mentalHealthSupportQR.png';
import IRCCNewcomersQR from '../images/checklist-images/IRCCNewcomersQR.png';
import GOCNewcomersQR from '../images/checklist-images/GOCNewcomersQR.png';
import newcomersYYCQR from '../images/checklist-images/newcomersYYCQR.png';
import NavigationBar from '../components/NavigationBar';

function Checklist() {
    const [showModal, setShowModal] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');
    const [showWarningModal, setShowWarningModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const navigate = useNavigate();

    const accordion1Items = [
        { title: 'Visit/Call Immigration, Refugees and Citizenship Canada (IRCC)', eventKey: '0' },
        { title: 'Apply for SIN Card', eventKey: '1' },
        { title: 'Get Health Insurance Card', eventKey: '2' },
        { title: 'Open Bank Account', eventKey: '3' },
        { title: 'Get Access to Internet and Phone Calls', eventKey: '4' },
        { title: 'Memorize Emergency Numbers', eventKey: '5' },
        { title: 'Find Childcare & Schools', eventKey: '6' },
        { title: 'Get Credentials Accredited', eventKey: '7' },
        { title: 'Find Employment', eventKey: '8' }
    ];

    const accordion2Items = [
        { title: 'Improve your English/French', eventKey: '0' },
        { title: 'Apply for Canada Child Tax Benefit', eventKey: '1' },
        { title: 'Apply for Driver\'s License', eventKey: '2' },
        { title: 'Learn about Canadian Laws and your Rights and Responsibilities', eventKey: '3' },
        { title: 'Search for a Home to Rent or Buy, Learn your Rights as a Tenant', eventKey: '4' },
        { title: 'Learn your Rights as an Employee', eventKey: '5' },
        { title: 'Find Family Doctor', eventKey: '6' },
        { title: 'Make Sure you Receive your Permanent Resident Card from IRCC', eventKey: '7' },
        { title: 'Find Post-Secondary Education', eventKey: '8' },
        { title: 'Find Mental Health Support', eventKey: '9' }
    ];

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    const openMapPopup = (location) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}&origin=${latitude},${longitude}`;
                window.open(mapsUrl, 'MapPopup', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
            }, (error) => {
                console.error('Error getting location: ', error);
                alert('Unable to retrieve your location. Please enable location services or try again.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <>
        <NavigationBar/>
        <div className="Checklist">
            <h1>Newcomer's To-Do List</h1>
            <br />
            <p>The information below contains essenstial information for newcomers to Canada, and specifically, Calgary.</p>
            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <h3>1. PRIMARY TASKS</h3>
                    {accordion1Items.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Visit/Call Immigration, Refugees and Citizenship Canada (IRCC)' && (
                                    <>
                                        <p><strong>IRCC Client Support Center: 1-888-242-2100</strong></p>
                                        <p>Monday to Friday, 8 a.m. to 4 p.m. (your local time)</p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html");
                                                setShowWarningModal(true);
                                            }}>View IRCC's General Support Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(clientSupportQR)}>View on Mobile</Button></p>
                                        </div>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://ircc.canada.ca/english/newcomers/services/index.asp");
                                                setShowWarningModal(true);
                                            }}>View IRCC's Free Newcomer Services Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(newcomerServicesQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>*Unfortunately the closest IRCC center is in <strong>Edmonton</strong>*</p>
                                    </>
                                )}
                                {item.title === 'Apply for SIN Card' && (
                                    <>
                                        <p><strong>Read about the required documents for a Social Insurance Number (SIN) and apply at a registry.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/employment-social-development/services/sin/apply.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(SINQR)}>View on Mobile</Button></p>
                                            <p><Button className="button" onClick={() => openMapPopup("Registry")}>View on Map 📍</Button></p>
                                        </div>
                                        <p>If you are a Canadian citizen, a permanent resident or a temporary resident, you need a Social Insurance Number (SIN) to work in Canada or to receive benefits and services from government programs. Children 12 years of age or older may apply for their SIN.</p>
                                    </>
                                )}
                                {item.title === 'Get Health Insurance Card' && (
                                    <>
                                        <p><strong>Read about the required documents for an Alberta Health Care Insurance Plan (AHCIP) and apply at a registry.</strong></p>
                                        <div className="in-line">
                                            
                                            <p><Button className="button" onClick={() => handleShow(AHCIPQR)}>View on Mobile</Button></p>
                                            <p><Button className="button" onClick={() => openMapPopup("Registry")}>View on Map 📍</Button></p>
                                        </div>
                                        <p>All new and returning Alberta residents must register for Alberta Health Care Insurance Plan (AHCIP) coverage to receive insured hospital and physician services.</p>
                                    </>
                                )}
                                {item.title === 'Open Bank Account' && (
                                    <>
                                        <p><strong>The Banking page should provide you with details of the popular/closest banks in the area.</strong></p>
                                        <p><Button className="button" onClick={() => navigate("/banking")}>Go to Banking Page</Button></p>
                                        <p>Building your Canadian life begins by building good credit history. Lenders look at your credit history score to approve you for loans. The first step is to open a bank account, after which you can apply for a credit card to ease payments and build your credit history.</p>
                                    </>
                                )}
                                {item.title === 'Get Access to Internet and Phone Calls' && (
                                    <>
                                        <p><strong>Your nearest library should provide you with temporary internet access and allow you to make phone calls.</strong></p>
                                        <p><Button className="button" onClick={() => openMapPopup("Public Library")}>View on Map 📍</Button></p>
                                        <p>Another option is to <strong>find internet and phone plans for your home</strong>. The Internet and Cellular page should provide you with details of the popular/closest providers in the area.</p>
                                        <p><Button className="button" onClick={() => navigate("/internet")}>Go to Internet and Cellular Page</Button></p>
                                        <p>Staying connected with loved ones, searching for job opportunities, and settling into your new life in Canada requires dependable mobile phone and internet services. Canada's phone and internet industries are newcomer friendly, but can be difficult to navigate as you begin a new life in a new country.</p>
                                    </>
                                )}
                                {item.title === 'Memorize Emergency Numbers' && (
                                    <>
                                        <p><strong>The Emergency Services page has a link to a list of all emergency and non-emergency numbers you should know.</strong></p>
                                        <p><Button className="button" onClick={() => navigate("/emergencyservices")}>Go to Emergency Services Page</Button></p>
                                        <p>Emergency helpline numbers are essential for everyone to know in case of any emergencies such as medical emergencies, criminal activity, calamity, or natural disasters. In case of such unfortunate emergencies, we should not be running around scouting for help or trying to figure out who to call for help.</p>
                                    </>
                                )}
                                {item.title === 'Find Childcare & Schools' && (
                                    <>
                                        <p><strong>If you have children, you should enroll them in school as soon as possible.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://cbe.ab.ca/schools/find-a-school/Pages/default.aspx");
                                                setShowWarningModal(true);
                                            }}>View Calgary Board of Education Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(schoolsQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Education is mandatory for children in Canada, and public schooling is free. Ensure your child is registered in a school near your residence.</p>
                                    </>
                                )}
                                {item.title === 'Get Credentials Accredited' && (
                                    <>
                                        <p><strong>If you have educational or professional qualifications from outside Canada, you should get your credentials accredited.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.jobbank.gc.ca/findajob/newcomers#sectionTitle2");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada's Job Bank Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(qualificationsQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>The process ensures your education or work experience is recognized by Canadian institutions and employers. It will help you significantly when you are seeking employment.</p>
                                        <p>The provided link above allows you to check if your credentials need to be accredited in Canada.</p>
                                    </>
                                )}
                                {item.title === 'Find Employment' && (
                                    <>
                                        <p><strong>The easiest way to find employment is through job boards.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/prepare-life-canada/prepare-work/look-jobs.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(jobSearchQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>The provided link above gives an overview of how and where to apply to jobs as a newcomer in Canada.</p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.jobbank.gc.ca/findajob/newcomers");
                                                setShowWarningModal(true);
                                            }}>View Job Bank Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(jobBankQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>The provided link above is job board created by the Government of Canada for newcomers in Canada.</p>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <br />
            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <h3>2. SECONDARY TASKS</h3>
                    {accordion2Items.map((item) => (
                        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                {item.title === 'Improve your English/French' && (
                                    <>
                                        <p><strong>Enroll in government-funded language programs available for newcomers, such as LINC (Language Instruction for Newcomers to Canada).</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.immigrantservicescalgary.ca/clarcregistration/");
                                                setShowWarningModal(true);
                                            }}>View Immigrant Services Calgary Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(CLARCQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Canada has two official languages: English and French. English is the most commonly spoken language in most provinces and territories. These courses help build necessary language skills for work and daily life in Canada.</p>
                                        <p><strong>OR complete a language test & get a certificate.</strong></p>
                                        <div className="in-line">
                                            <p>English:</p>
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://ielts.org/");
                                                setShowWarningModal(true);
                                            }}>View IELTS Website</Button></p>
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.celpip.ca/");
                                                setShowWarningModal(true);
                                            }}>View CELPIP Website</Button></p>
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.ets.org/toefl.html");
                                                setShowWarningModal(true);
                                            }}>View TOEFL Website</Button></p>
                                        </div>
                                        <div className="in-line">
                                            <p>French:</p>
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.lefrancaisdesaffaires.fr/en/tests-diplomas/test-for-evaluating-french-tef/");
                                                setShowWarningModal(true);
                                            }}>View TEF Website</Button></p>
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.france-education-international.fr/hub/diplomes-tests");
                                                setShowWarningModal(true);
                                            }}>View DELF Website</Button></p>
                                        </div>
                                        <p>There are cases where you may need to prove your ability in either English or French, such as: when you apply for a job or to get into a university or college. There are several language tests that are widely accepted. They will give you a certificate and test results that you can use for many purposes.</p>
                                        <p><strong>For more information and this overview, visit the "Improving your English and French" page on the Government of Canada website:</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(GoCEngNFrQR)}>View on Mobile</Button></p>
                                        </div>
                                    </>
                                )}
                                {item.title === 'Apply for Canada Child Tax Benefit' && (
                                    <>
                                        <p><strong>Apply for this monthly, tax-free payment to help families with the cost of raising children.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(childTaxBenefitQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>The benefit amount is based on your family income and the number of children under 18. Register early to start receiving benefits.</p>
                                        
                                    </>
                                )}
                                {item.title === 'Apply for Driver\'s License' && (
                                    <>
                                        <p><strong>Apply for a driver’s license to gain independence and make commuting easier.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.alberta.ca/get-drivers-licence");
                                                setShowWarningModal(true);
                                            }}>View Alberta Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(driversLicenseQR)}>View on Mobile</Button></p>
                                            <p><Button className="button" onClick={() => openMapPopup("Registry")}>View on Map 📍</Button></p>
                                        </div>
                                        <p>Each province has specific requirements and tests. Learn more about the process, including document requirements and fees.</p>
                                    </>
                                )}
                                {item.title === 'Learn about Canadian Laws and your Rights and Responsibilities' && (
                                    <>
                                        <p><strong>Learn about Canadian laws, your rights as a resident, and your responsibilities under Canadian law.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/learn-about-canada/laws.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(lawsQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Canada has various laws that are essential for your safety, rights, and overall well-being.</p>
                                    </>
                                )}
                                {item.title === 'Search for a Home to Rent or Buy, Learn your Rights as a Tenant' && (
                                    <>
                                        <p><strong>Renting a home in Canada information</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/housing/renting.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(rentHomeQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p><strong>Buying a home in Canada information</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/housing/buying.html");
                                                setShowWarningModal(true);
                                            }}>View Government of Canada Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(buyHomeQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p><strong>Understand your options for renting or buying a home and know your rights as a tenant.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.alberta.ca/rights-and-responsibilities");
                                                setShowWarningModal(true);
                                            }}>View Alberta Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(homeLawsQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>This is crucial for ensuring you have stable housing and are aware of protections under Canadian tenant laws.</p>
                                    </>
                                )}
                                {item.title === 'Learn your Rights as an Employee' && (
                                    <>
                                        <p><strong>Learn about Canadian Employment laws and your rights as an employee.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.alberta.ca/alberta-employment-standards-rules");
                                                setShowWarningModal(true);
                                            }}>View Alberta Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(employeeLawsQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Employment laws ensure safe, fair treatment in the workplace and protect employees’ rights.</p>
                                    </>
                                )}
                                {item.title === 'Find Family Doctor' && (
                                    <>
                                        <p><strong>Register with a family doctor to access ongoing healthcare and medical support for you and your family.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://albertafindadoctor.ca/");
                                                setShowWarningModal(true);
                                            }}>View Alberta Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(familyDocQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Alberta’s healthcare system provides access to general practitioners, who are often your first point of contact for medical needs.</p>
                                    </>
                                )}
                                {item.title === 'Make Sure you Receive your Permanent Resident Card from IRCC' && (
                                    <>
                                        <p><strong>Ensure you have received your PR card, which serves as proof of residency in Canada.</strong></p>
                                        <p>Within 2 months of your date of arrival, you should receive your Permanent Resident Card from the IRCC. If you have not, contact the IRCC office as soon as possible. PR cards are required for re-entering Canada after traveling outside the country, so keep this card safe.</p>
                                        <p><strong>IRCC Client Support Center: 1-888-242-2100</strong></p>
                                        <p>Monday to Friday, 8 a.m. to 4 p.m. (your local time)</p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html");
                                                setShowWarningModal(true);
                                            }}>View IRCC's General Support Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(clientSupportQR)}>View on Mobile</Button></p>
                                        </div>
                                    </>
                                )}
                                {item.title === 'Find Post-Secondary Education' && (
                                    <>
                                        <p><strong>Look into post-secondary education options if you’re interested in furthering your studies or training in Canada.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.alberta.ca/designated-post-secondary-institutions-alberta");
                                                setShowWarningModal(true);
                                            }}>View Alberta Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(postSecondaryQR)}>View on Mobile</Button></p>
                                        </div>
                                        <p>Canada offers many recognized programs, including universities, colleges, and technical training centers.</p>
                                    </>
                                )}
                                {item.title === 'Find Mental Health Support' && (
                                    <>
                                        <p><strong>Explore available mental health resources, including counseling and community support services.</strong></p>
                                        <div className="in-line">
                                            <p><Button className="button" onClick={() => {
                                                setCurrentUrl("https://www.albertahealthservices.ca/services/page11443.aspx");
                                                setShowWarningModal(true);
                                            }}>View AHS Website</Button></p>
                                            <p><Button className="button" onClick={() => handleShow(mentalHealthSupportQR)}>View on Mobile</Button></p>
                                            <p><Button className="button" onClick={() => openMapPopup("Mental Health Support")}>View on Map 📍</Button></p>
                                        </div>
                                        <p><strong>Non-Emergency Mental Health Line: 2-1-1.</strong></p>
                                        <p>Taking care of your mental health is essential, especially during significant life transitions.</p>
                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <br />
            <h3>SUMMARY WEBSITES</h3>
            <br />
            <div className="in-line">
                <p><Button className="button" onClick={() => {
                    setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html");
                    setShowWarningModal(true);
                }}>View IRCC's "Newcomers to Canada" Website</Button></p>
                <p><Button className="button" onClick={() => handleShow(IRCCNewcomersQR)}>View on Mobile</Button></p>
            </div>
            <p>This website contains all information and services the IRCC provides for newcomers to Canada.</p>
            <br />
            <div className="in-line">
                <p><Button className="button" onClick={() => {
                    setCurrentUrl("https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/newcomers.html");
                    setShowWarningModal(true);
                }}>View Government of Canada's "Newcomer Services" Website</Button></p>
                <p><Button className="button" onClick={() => handleShow(GOCNewcomersQR)}>View on Mobile</Button></p>
            </div>
            <p>This website contains similar information to the link above but is a more general summary for newcomers to Canada, created by the Governemnt of Canada.</p>
            <br />
            <div className="in-line">
                <p><Button className="button" onClick={() => {
                    setCurrentUrl("https://www.centrefornewcomers.ca/");
                    setShowWarningModal(true);
                }}>View Center for Newcomers Calgary Website</Button></p>
                <p><Button className="button" onClick={() => handleShow(newcomersYYCQR)}>View on Mobile</Button></p>
            </div>
            <p>This website contains all information and services relating to newcomers in Calgary.</p>
            
            <Modal show={showWarningModal} onHide={() => setShowWarningModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Caution</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please do not enter any personal or sensitive information on external websites. If you need to access anything confidential, please select "View on Mobile".</p>
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
                    <Modal.Title>View on Mobile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} alt="Download QR Code" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}


export default Checklist;
