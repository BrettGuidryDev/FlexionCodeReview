import { useState, useRef } from 'react';
import { conversionResult } from './functions/Functions';
import { unitConversion } from './data/Conversions';
import './App.css';

function App() {
  const [fromTemp, setFromTemp] = useState('Celsius');
  const [toTemp, setToTemp] = useState('Fahrenheit');
  const [fromVol, setFromVol] = useState('Liters');
  const [toVol, setToVol] = useState('Gallons');
  const [tempResult, setTempResult] = useState('Check');
  const [volResult, setVolResult] = useState('Check');
  const fromTempRef = useRef(null);
  const toTempRef = useRef(null);
  const fromVolRef = useRef(null);
  const toVolRef = useRef(null);

  

  function handleClick(type){
    if (type === 't') setTempResult(conversionResult(unitConversion[fromTemp][toTemp],
      fromTempRef.current.value,
      toTempRef.current.value
    )); 
    if (type === 'v') setVolResult(conversionResult(unitConversion[fromVol][toVol],
      fromVolRef.current.value,
      toVolRef.current.value 
      )); 
  }


  return (
    <div className='App'>
      <h1>Sample Code Review</h1>

      {/* Conversion stuff: button sends 't' for temperature conversions and 'v' for volume 
        to handleClick() function for it to determine the state to update
        and pass along the conversion parameters required by conversionResult()
      */}
      <div id='temperatureDiv' className='card'>
        Convert
        <input id='fromTempInput' ref={fromTempRef} placeholder={`Degrees ${fromTemp}`}/>
        <span className='selectDiv'>
          <select defaultValue={fromTemp} onChange={(e) => setFromTemp(e.target.value)}>
            <option value='Kelvin'>Kelvin</option>
            <option value='Celsius'>Celsius</option>
            <option value='Fahrenheit'>Fahrenheit</option>
            <option value='Rankine'>Rankine</option>
          </select>
        </span>
        <div id='convertToTemp'>
          To
          <input id='toTempInput' ref={toTempRef} placeholder={`Expected temp in ${toTemp}`}/>
          <span className='selectDiv'>
            <select defaultValue={toTemp} onChange={(e) => setToTemp(e.target.value)}>
              <option value='Kelvin'>Kelvin</option>
              <option value='Celsius'>Celsius</option>
              <option value='Fahrenheit'>Fahrenheit</option>
              <option value='Rankine'>Rankine</option>
            </select>
          </span>
        </div>
        <p>
          <button onClick={() => handleClick('t')}>{tempResult}</button>
        </p>
      </div>

      <div id='volumeDiv' className='card'>
        Convert
        <input id='fromVolInput' type='text' ref={fromVolRef} placeholder={`Volume in ${fromVol}`}/>
        <span className='selectDiv'>
          <select defaultValue={fromVol} onChange={(e) => setFromVol(e.target.value)} >
            <option value='Cubic-inches'>Cubic-inches</option>
            <option value='Cubic-feet'>Cubic-feet</option>
            <option value='Cups'>Cups</option>
            <option value='Gallons'>Gallons</option>
            <option value='Liters'>Liters</option>
            <option value='Tablespoons'>Tablespoons</option>
          </select>
        </span>
        <div id='convertToVol'>
          to
          <input id='toVolInput' type='text' ref={toVolRef} placeholder={`Expected volume in ${toVol}`}/>
          <span className='selectDiv'>
            <select defaultValue={toVol} onChange={(e) => setToVol(e.target.value)}>
              <option value='Cubic-inches'>Cubic-inches</option>
              <option value='Cubic-feet'>Cubic-feet</option>
              <option value='Cups'>Cups</option>
              <option value='Gallons'>Gallons</option>
              <option value='Liters'>Liters</option>
              <option value='Tablespoons'>Tablespoons</option>
            </select>
          </span>
          <p>
            <button onClick={() => handleClick('v')}>{volResult}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
