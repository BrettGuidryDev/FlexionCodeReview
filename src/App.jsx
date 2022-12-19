import { useState, useRef } from 'react';
import { unitConversion } from './Conversions';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
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

  // Verify function to make sure user is only inputting numbers
  // data comes in from the two result[Functions] below as String
  // data returns as Number
  function validateInput(input) {
    //console.log('Input', input, typeof input);
    if (!input) return 'invalid input';
    if (Number.isNaN(Number(input))) return 'invalid input';
    return Number(Number(input).toFixed(2));
  }

  // Data goes in as string
  // Gets passed param:String from buttons that is used to determine which state hooks to update
  // Runs user input through validateInput() then through conversion objects
  // Pulls conversion data from object in ./Conversions.js
  // No return but updates result state 
  function conversionResult(type) {
    let trueResult;
    let outputResult;
    let input1;
    let input2;
    if (type === 't') input1 = validateInput(fromTempRef.current.value);
    if (type === 't') input2 = validateInput(toTempRef.current.value);
    if (type === 'v') input1 = validateInput(fromVolRef.current.value);
    if (type === 'v') input2 = validateInput(toVolRef.current.value);

    if (typeof input1 === 'number' && typeof input2 === 'number') {
      if (type === 't') trueResult = Number(unitConversion[fromTemp][toTemp](input1).toFixed(2));
      if (type === 'v') trueResult = Number(unitConversion[fromVol][toVol](input1).toFixed(2));
      
      //console.log('TRUERESULT', type, trueResult, typeof trueResult, input1, input2);
      if (Math.abs(trueResult - input2) < Number.EPSILON) {
        outputResult = 'Correct!';
      } else {
        outputResult = 'Incorrect';
      }
    } else {
      outputResult = 'Invalid input';
    }
   if (type === 't') setTempResult((tempResult) => outputResult);
   if (type === 'v') setVolResult((tempResult) => outputResult);
  }


  return (
    <div className='App'>
      <div></div>
      <h1>Flexion Code Review</h1>

      {/* Temperature stuff: button sends 't' to conversionResult() function for it to determine the state to update*/}
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
          <button onClick={() => conversionResult('t')}>{tempResult}</button>
        </p>
      </div>

      {/* volume stuff: button sends 'v' to conversionResult() function for it to determine the state to update*/}
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
            <button onClick={() => conversionResult('v')}>{volResult}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
