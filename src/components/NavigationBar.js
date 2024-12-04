import '../App.css';
import BackButton from './BackButton';
import EndSessionModal from './EndSessionModal';

function NavigationBar() {
  return (
    <header className="NavBar">
      <div className="NavLeft">
        <BackButton />
      </div>
      <div className="NavRight">
       <EndSessionModal/>
      </div>
    </header>
  );
}

export default NavigationBar;
