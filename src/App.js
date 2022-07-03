import './App.css';
import Image from './components/atoms/img/imgComponent';
import logo from './images/svg/LogoBlack.svg';

function App() {
  return (
    <div className="App">
      <Image src={logo} alt={'sdfsdfsd'} />
    </div>
  );
}

export default App;
