import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function EndSessionModal() {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(15); // Countdown starts at 15 seconds
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setCountdown(30); // Reset countdown when modal closes
  };

  const handleShow = () => {
    setShow(true);
    setCountdown(30); // Reset countdown when modal opens
  };

  useEffect(() => {
    let timer;
    if (show && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000); // Decrease countdown by 1 every second
    } else if (show && countdown === 0) {
      navigate('/'); // Navigate to '/' when countdown reaches 0
    }
    return () => clearTimeout(timer); // Cleanup timer
  }, [show, countdown, navigate]);

  return (
    <>
      <Button
        className="BackButton"
        variant="danger"
        size="lg"
        onClick={handleShow}
      >
        <i className="bi bi-x-lg"></i> End Session
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to end the session?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Clicking the "End Session" button will send you back to the language select page.</div>
          <br />
          <div>Click "Cancel" if you would like more help.</div>
          <br />
          <div>
            <strong>Session will automatically end in {countdown} seconds...</strong>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => navigate('/')}>
            End Session
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EndSessionModal;
