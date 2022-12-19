import { useState, useRef } from 'react';
import { unitConversion } from './Conversions';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [fromTemp, setFromTemp] = useState('Celsius');
  const [toTemp, setToTemp] = useState('Fahrenheit');
  const [fromVol, setFromVol] = useState('Liters');
  const [toVol, setToVol] = useState('Gallons');
  const [tempResult, settempResult] = useState('Check');
  const [volResult, setvolResult] = useState('Check');
  const fromTempRef = useRef(null);
  const toTempRef = useRef(null);
  const fromVolRef = useRef(null);
  const toVolRef = useRef(null);

  // Verify function to make sure user is only inputting numbers
  // data comes in from the two result[Functions] below as String
  // data returns as Number
  function validateInput(input) {
    //console.log('Input', input, typeof input);
    if (!input) return 'invalid input';
    if (Number.isNaN(Number(input))) return 'invalid input';
    return Number(Number(input).toFixed(2));
  }

  // Finds and outputs the result of the temperature inputs
  // Pulls conversion data from objects in ./Conversions.js
  // Runs user input through validateInput() then through conversion objects
  function resultTemp() {
    let trueResult;
    let outputResult;
    const temp1 = validateInput(fromTempRef.current.value);
    const temp2 = validateInput(toTempRef.current.value);
    if (typeof temp1 === 'number' && typeof temp2 === 'number') {
      trueResult = Number(unitConversion[fromTemp][toTemp](temp1).toFixed(2));
      console.log(
        'TRUERESULT',
        trueResult,
        typeof trueResult,
        fromTemp,
        toTemp
      );
      if (Math.abs(trueResult - temp2) < Number.EPSILON) {
        outputResult = 'Correct!';
      } else {
        outputResult = 'Incorrect';
      }
    } else {
      outputResult = 'Invalid input';
    }
    settempResult((tempResult) => outputResult);
  }

  // Finds and outputs the result of the volume inputs
  // pulls conversion data from objects in ./Conversions.js
  function resultVol() {
    let trueResult;
    let outputResult;
    const vol1 = validateInput(fromVolRef.current.value);
    const vol2 = validateInput(toVolRef.current.value);
    if (typeof vol1 === 'number' && typeof vol2 === 'number') {
      trueResult = Number(unitConversion[fromVol][toVol](vol1).toFixed(2));
      //console.log(trueResult);
      if (Math.abs(trueResult - vol2) < Number.EPSILON) {
        outputResult = 'Correct!';
      } else {
        outputResult = 'Incorrect';
      }
    } else {
      outputResult = 'Invalid input';
    }
    setvolResult((volResult) => outputResult);
  }

  return (
    <div className='App'>
      <div></div>
      <h1>Flexion Code Review</h1>

      {/* Temperature stuff */}
      <div id='tempatureDiv' className='card'>
        Convert
        <input
          id='fromTempInput'
          ref={fromTempRef}
          placeholder={`Degrees ${fromTemp}`}
        />
        <span className='selectDiv'>
          <select
            defaultValue={fromTemp}
            onChange={(e) => setFromTemp(e.target.value)}
          >
            <option value='Kelvin'>Kelvin</option>
            <option value='Celsius'>Celsius</option>
            <option value='Fahrenheit'>Fahrenheit</option>
            <option value='Rankine'>Rankine</option>
          </select>
        </span>
        <div id='convertToTemp'>
          To
          <input
            id='toTempInput'
            ref={toTempRef}
            placeholder={`Expected temp in ${toTemp}`}
          />
          <span
            className='selectDiv'
            onChange={(e) => setToTemp(e.target.value)}
          >
            <select defaultValue={toTemp}>
              <option value='Kelvin'>Kelvin</option>
              <option value='Celsius'>Celsius</option>
              <option value='Fahrenheit'>Fahrenheit</option>
              <option value='Rankine'>Rankine</option>
            </select>
          </span>
        </div>
        <p>
          <button onClick={resultTemp}>{tempResult}</button>
        </p>
      </div>

      {/* volume stuff */}
      <div id='volumeDiv' className='card'>
        Convert
        <input
          id='fromVolInput'
          type='text'
          ref={fromVolRef}
          placeholder={`Volume in ${fromVol}`}
        />
        <span className='selectDiv'>
          <select
            defaultValue={fromVol}
            onChange={(e) => setFromVol(e.target.value)}
          >
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
          <input
            id='toVolInput'
            type='text'
            ref={toVolRef}
            placeholder={`Expected volume in ${toVol}`}
          />
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
            <button onClick={resultVol}>{volResult}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
