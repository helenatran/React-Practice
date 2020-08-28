import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';

const TEMPERATURE = 'Temperature';
const DISTANCE = 'Distance';

//A "tabbed" switcher between temperature and distance conversion
function App() {
  //!!Below is useful only when not using routers!!
  // ---------------------------------------------------
  // -- Initialise "show", with Temperature tab being displayed first
  // let [show, setShow] = useState(TEMPERATURE);

  // -- switch between tabs
  // let converter;
  // if (show === TEMPERATURE) {
  //   converter = <TemperatureConverter />
  // }
  // else {
  //   converter = <DistanceConverter />
  // }
  // -------------------------------------------------------

  return (
    <Router>
      <div>
        <h1>Imperial to Metric Converter</h1>
        <div>
          <Link to="/"><button type="button">Home</button></Link>
          <Link to="/temperature"><button type="button">{TEMPERATURE}</button></Link>
          <Link to="/distance"><button type="button">{DISTANCE}</button></Link>
        </div>
        <Switch>
          <Route path="/temperature"><TemperatureConverter /></Route>
          <Route path="/distance"><DistanceConverter /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page for the Imperial to Metric Converter</p>
      <p>Click the buttons to start converting!</p>
    </div>
  );
}



export default App;

//Without routers:
// return (
//   <div>
//     <h1>Imperial to Metric Converter</h1>
//     <div>
//       <button onClick={() => setShow(TEMPERATURE)}>{TEMPERATURE}</button>
//       <button onClick={() => setShow(DISTANCE)}>{DISTANCE}</button>
//     </div>
//     {converter}
//   </div>
// );
