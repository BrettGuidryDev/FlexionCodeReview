import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [fromTemp, setFromTemp] = useState('');
  const [toTemp, setToTemp] = useState('');
  const [fromVol, setFromVol] = useState('');
  const [toVol, setToVol] = useState('');

  const temperature = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];
  const volume = [
    'liters',
    'tablespoons',
    'cubic-inches',
    'cups',
    'cubic-feet',
    'gallons',
  ];
  /*
  display thoughts
   - need front end for entering in data. simplest selection method between conversion units would be hilighted buttons
  maybe dropdown but those would take longer more clicks per check

  separate sections for temperature and volume
  
  States: 
  convFromTemp
    -tempKel
    -tempCel
    -tempFah
    -tempRan
  convToTemp
  convFromVol
    -volLit
    -volTab
    -volCubeInch
    -volCubeFoot
    -volGal
  convToVol
  */

  // Rankine - Fahrenheit degree based. Begins at 0 like Kelvin
  // Celsius to Fahrenheit = (x * 1.8) + 32
  // Fahrenheit to Celsius = (x - 32) * (5/9)
  // Kelvin to Rankine = (x * 1.8)
  // Rankine to Kelvin = (x * (5/9))
  // volumes between liters, tablespoons, cubic-inches, cups, cubic-feet, and gallons

  /*
  script logic: 
   - two conversion scripts. each takes 4 args. arg1=num input, arg2=Student response, arg3=Unit type, arg4=Unit type
   - create conversion table as object
   - compare answer from conversion table to response
   - edge case checks for non-int values in arg1, arg2
  */
  function tempSelect(x) {
    const temperature = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];
    if (!temperature.includes(x)) return temperature[0];
    if (x === temperature[0]) return temperature[1];
    if (x === temperature[1]) return temperature[2];
    if (x === temperature[2]) return temperature[3];
    if (x === temperature[3]) return temperature[0];
  }

  function volumeSelect(x) {
    const volume = [
      'liters',
      'tablespoons',
      'cubic-inches',
      'cups',
      'cubic-feet',
      'gallons',
    ];
    if (!volume.includes(x)) return volume[0];
    if (x === volume[0]) return volume[1];
    if (x === volume[1]) return volume[2];
    if (x === volume[2]) return volume[3];
    if (x === volume[3]) return volume[4];
    if (x === volume[4]) return volume[5];
    if (x === volume[5]) return volume[0];
  }

  return (
    <div className='App'>
      <div>
        <a
          href='https://github.com/BrettGuidryDev/FlexionCodeReview'
          target='_blank'
        >
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Flexion Code Review</h1>
      <div className='card'>
        Convert from
        <button onClick={() => setFromTemp((fromTemp) => tempSelect(fromTemp))}>
          {fromTemp}
        </button>
        <input placeholder={`initial temp in ${fromTemp}`} />
        <p>
          Convert to
          <button onClick={() => setToTemp((toTemp) => tempSelect(toTemp))}>
            {toTemp}
          </button>
          <input placeholder={`expected temp in ${toTemp}`} />
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
