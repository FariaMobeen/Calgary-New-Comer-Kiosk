import * as React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useNavigate } from "react-router-dom";

function LanguagePage(){
const navigate = useNavigate();

 return (
<>

    <div className="LanguageSelect">
      <h1 className='Welcome'> Select Your Language</h1>
      <div className="button-container">
        <Button variant="danger" size="lg" onClick={() => navigate('/home')}>English</Button>
        <Button variant="danger" size="lg" onClick={() => navigate('/home/french')}>Français</Button>
        <Button variant="danger" size="lg">中文</Button>
        <Button variant="danger"size="lg">ਪੰਜਾਬੀ</Button>
        <Button variant="danger"size="lg">Tagalog</Button>
        <Button variant="danger"size="lg">Español</Button>
      </div>

    </div>

</>

  );
}

export default LanguagePage;
