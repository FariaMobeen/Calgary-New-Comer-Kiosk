import React from 'react';
import '../App.js';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';


function BackButton() {
    const navigate = useNavigate();
    return (
        <Button 
        className="BackButton"
        variant="danger"
        size="lg"
        onClick={() => navigate('/home')}><i class="bi bi-arrow-left"></i> Back</Button>
    );
}

export default BackButton;