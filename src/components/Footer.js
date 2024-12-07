import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleEndClick = () => navigate('/');
    const handleHomeClick = () => navigate('/homepage');
    const handleBackClick = () => navigate(-1);

    return (
        <footer className="footer-bar">
            <Button 
                onClick={handleEndClick} 
                variant="contained" 
                sx={{ backgroundColor: '#282c34', color: 'white', '&:hover': { backgroundColor: '#3a3f47' } }}
            >
                End
            </Button>
            <Button 
                onClick={handleHomeClick} 
                variant="contained" 
                sx={{ backgroundColor: '#282c34', color: 'white', '&:hover': { backgroundColor: '#3a3f47' }}}
            >
                Home
            </Button>
            <Button 
                onClick={handleBackClick} 
                variant="contained" 
                sx={{ backgroundColor: '#282c34', color: 'white', '&:hover': { backgroundColor: '#3a3f47' }}}
            >
                Back
            </Button>
        </footer>
    );
}

export default Footer;
