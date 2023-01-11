// Forcing the data type to Number here is required for the toFixed method as it returns strings
// Any input should be sanitized on the way out as either a valid 2 place decimal number or standard return string
function validateInput(input) {
    if (!input || Number.isNaN(Number(input))) return 'invalid input';
    return Number(Number(input).toFixed(2));
  }

// params are currently getting passed in from the handleClick function in App.jsx
// conversionMath is passed in from App.jsx but the referenced data is held in 
// ../data/Conversions.js
export function conversionResult(convertMath,fromRef,toRef) {
    let trueResult;
    let outputResult;
    const input1 = validateInput(fromRef);
    const input2 = validateInput(toRef);
    if (typeof input1 != 'number' || typeof input2 != 'number') return 'Invalid input';

    trueResult = Number(convertMath(input1).toFixed(2));

    if (Math.abs(trueResult - input2) < Number.EPSILON) {
        outputResult = 'Correct!';
    } else {
        outputResult = 'Incorrect';
    }
    return outputResult;
  }
