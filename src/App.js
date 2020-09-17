import React, {useState} from 'react';
import './scss/main.scss';
import LandingPage from './components/LandingPage';

const CounterContext = React.createContext();

function App() {

  const [littleCounter, setLittleCounter] = useState(true);

  const toggleCounter = () => {
    setLittleCounter(prevLittleCounter =>!prevLittleCounter);
    console.log(littleCounter);
  }

  return (
    <>
      <CounterContext.Provider>
        <LandingPage/>
      </CounterContext.Provider>
    </>
  );
}

export default App;
