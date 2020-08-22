import React from 'react';
import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';
import Converter from './Converter';

const TEMPERATURE = 'Temperature';
const DISTANCE = 'Distance';
const WEIGHT = 'Weight';

const converters = [
  {
    for: TEMPERATURE,
    fromLabel: 'Fahrenheit',
    toLabel: 'Celsius',
    convert: (from) => ((parseFloat(from) - 32) * 5) / 9,
  },
  {
    for: DISTANCE,
    fromLabel: 'Miles',
    toLabel: 'Kilometers',
    convert: (from) => parseFloat(from) * 1.609344,
  },
  {
    for: WEIGHT,
    fromLabel: 'Pounds',
    toLabel: 'Kilograms',
    convert: (from) => parseFloat(from) * 0.453592,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props); //because we extends React.Component
    this.state = {
      //internal state of 'show' => first element of converters (bc index 0)
      //here it's TEMPERATURE
      show: 0
    };
  }

  render() {
    // let converter;
    // if (this.state.show === TEMPERATURE) {
    //   converter = <TemperatureConverter />;
    // }
    // else if (this.state.show === DISTANCE) {
    //   converter = <DistanceConverter />;
    // }

    return (
      <div>
        <h1>Imperial to Metric Converter</h1>
        <p>
          {converters.map((item, index) => (
            <button key={item.for} onClick={() => { this.setState({ show: index }); }}>
              {item.for}
            </button>
          ))}
        </p>
        <Converter converter={converters[this.state.show]} />
      </div>
    )
  }
}

export default App;
