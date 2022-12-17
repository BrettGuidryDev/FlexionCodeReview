import { useState } from 'react';
import './App.css';
import { tempConversion, volConversion } from './Conversions';

function App() {
  const [count, setCount] = useState(0);
  const [fromTemp, setFromTemp] = useState('Celsius');
  const [toTemp, setToTemp] = useState('Fahrenheit');
  const [fromVol, setFromVol] = useState('Liters');
  const [toVol, setToVol] = useState('Gallons');
  const [tempResult, settempResult] = useState('Check');
  const [volResult, setvolResult] = useState('Check');

  // Verify function to make sure user is only inputting numbers
  function validateInput(input) {
    if (!input && input !== 0) return 'invalid input';
    if (Number.isNaN(Number(input))) return 'invalid input';
    return Number(Number(input).toFixed(2));
  }

  // Finds and outputs the result of the temperature inputs
  // pulls conversion data from objects in ./Conversions.js
  function resultTemp() {
    let trueResult;
    let outputResult;
    const temp1 = validateInput(document.querySelector('#fromTempInput').value);
    const temp2 = validateInput(document.querySelector('#toTempInput').value);
    if (typeof temp1 === 'number' && typeof temp2 === 'number') {
      trueResult = tempConversion[fromTemp][toTemp](temp1).toFixed(2);
      //console.log(trueResult);
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
    const vol1 = validateInput(document.querySelector('#fromVolInput').value);
    const vol2 = validateInput(document.querySelector('#toVolInput').value);
    if (typeof vol1 === 'number' && typeof vol2 === 'number') {
      trueResult = volConversion[fromVol][toVol](vol1).toFixed(2);
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
        <input id='fromTempInput' placeholder={`degrees ${fromTemp}`} />
        <span className='selectDiv'>
          <select defaultValue={fromTemp}>
            <option value='Kelvin'>Kelvin</option>
            <option value='Celsius'>Celsius</option>
            <option value='Fahrenheit'>Fahrenheit</option>
            <option value='Rankine'>Rankine</option>
          </select>
        </span>
        <div id='convertToTemp'>
          To
          <input id='toTempInput' placeholder={`expected temp in ${toTemp}`} />
          <span className='selectDiv'>
            <select defaultValue={toTemp}>
              <option value='Kelvin'>Kelvin</option>
              <option value='Celsius'>Celsius</option>
              <option value='Fahrenheit'>Fahrenheit</option>
              <option value='Rankine'>Rankine</option>
            </select>
          </span>
          <p>
            <button onClick={resultTemp}>{tempResult}</button>
          </p>
        </div>
      </div>

      {/* volume stuff */}
      <div id='volumeDiv' className='card'>
        Convert
        <input
          id='fromVolInput'
          type='text'
          placeholder={`initial volume in ${fromVol}`}
        />
        <span className='selectDiv'>
          <select defaultValue={fromVol}>
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
            placeholder={`expected volume in ${toVol}`}
          />
          <span className='selectDiv'>
            <select defaultValue={toVol}>
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
