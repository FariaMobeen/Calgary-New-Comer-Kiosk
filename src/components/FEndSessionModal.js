import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function FEndSessionModal() {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setCountdown(30);
  };

  const handleShow = () => {
    setShow(true);
    setCountdown(30);
  };

  useEffect(() => {
    let timer;
    if (show && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (show && countdown === 0) {
      navigate('/');
    }
    return () => clearTimeout(timer);
  }, [show, countdown, navigate]);

  return (
    <>
      <Button
        className="BackButton"
        variant="danger"
        size="lg"
        onClick={handleShow}
      >
        <i className="bi bi-x-lg"></i> Fin de session
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Êtes-vous sûr de vouloir mettre fin à la session?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>En cliquant sur le bouton « Fin de session », vous serez renvoyé à la page de sélection de la langue.</div>
          <br />
          <div>Cliquez sur "Annuler" si vous souhaitez plus d'aide.</div>
          <br />
          <div>
            <strong>La session se terminera automatiquement dans {countdown} secondes...</strong>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => navigate('/')}>
            Fin de session
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FEndSessionModal;
