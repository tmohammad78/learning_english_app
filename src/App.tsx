import logo from './logo.svg';
import Home from 'src/components/pages/home';
import './App.scss';
import Button from 'src/components/button';

function App() {
  function click() {
    console.log('this is test');
  }
  return (
    <div className="App">
      <Button handleClick={click} customClass="customButton">
        <img src={logo} className="logo" />
      </Button>
    </div>
  );
}

export default App;
