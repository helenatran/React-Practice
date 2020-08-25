import React, { useState } from 'react';

//Convert Miles to Kilometers when user clicks "Convert"
function DistanceConverter() {
    //initially use a distance of 0
    let [miles, setMiles] = useState('0');
    let [kilometers, setKilometers] = useState('');

    //convert current value of Miles to Km
    //Invalid values for Miles will be treated as NaN
    const convert = () => {
        //parseFloat returns a floating point number
        let kilometers = parseFloat(miles) * 1.609344;
        setKilometers(kilometers);
    };

    return (
        <div>
            <p>
                <label>Miles:
                    <input type="text" value={miles} onChange={(e) => setMiles(e.target.value)} />
                </label>
            </p>
            <p>
                <button onClick={convert}>Convert</button>
            </p>
            <p>
                <label>Kilometers:
                    <input type="text" value={kilometers} readOnly />
                </label>
            </p>
        </div>
    );
}

export default DistanceConverter;