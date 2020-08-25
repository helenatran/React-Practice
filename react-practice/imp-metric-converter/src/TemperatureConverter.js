import React, { useState } from 'react';

//Convert Fahrenheit to Celsius when user clicks "Convert"
function TemperatureConverter() {
    //initially use a temperature of 0
    let [fahrenheit, setFahrenheit] = useState('0');
    let [celsius, setCelsius] = useState('');

    //convert current value of F to C
    //Invalid values for F will be treated as NaN
    const convert = () => {
        //parseFloat returns a floating point number
        let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        setCelsius(celsius);
    };

    return (
        <div>
            <p>
                <label>Fahrenheit:
                    <input type="text" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
                </label>
            </p>
            <p>
                <button onClick={convert}>Convert</button>
            </p>
            <p>
                <label>Celsius:
                    <input type="text" value={celsius} readOnly />
                </label>
            </p>
        </div>
    );
}

export default TemperatureConverter;