import React, { useState } from 'react';
import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';

const TEMPERATURE = 'Temperature';
const DISTANCE = 'Distance';

//A "tabbed" switcher between temperature and distance conversion
function App() {

  //Initialise "show", with Temperature tab being displayed first
  let [show, setShow] = useState(TEMPERATURE);

  //switch between tabs
  let converter;
  if (show === TEMPERATURE) {
    converter = <TemperatureConverter />
  }
  else {
    converter = <DistanceConverter />
  }

  return (
    <div>
      <h1>Imperial to Metric Converter</h1>
      <div>
        <button>{TEMPERATURE}</button>
        <button>{DISTANCE}</button>
      </div>
      {converter}
    </div>
  );
}

export default App;
