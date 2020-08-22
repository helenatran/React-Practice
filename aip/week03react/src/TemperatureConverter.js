import React from 'react';

class TemperatureConverter extends React.Component {
    constructor(props) {
        super(props); //because we extends React.Component
        this.state = {
            //our state is an object
            fahrenheit: '',
            celsius: ''
        }
    }

    convert() {
        //you need to change the integer to a number (or Float)
        const celsius = ((parseFloat(this.state.fahrenheit) - 32) * 5) / 9;
        //the variable and the key names are the same here, so instead of writing {celsius: celsius}
        //'this' refers to the application component 'App'
        this.setState({ celsius });
    }

    render() {
        return (
            <div>
                <p>
                    <label>Fahrenheit:
                    <input type="text" value={this.state.fahrenheit} onChange={(event) => { this.setState({ fahrenheit: event.target.value }) }}></input>
                    </label>
                </p>

                <p>
                    <button onClick={() => { this.convert() }}>Convert</button>
                </p>

                <p>
                    <label> Celsius:
                        <input type="text" readOnly value={this.state.celsius}></input>
                    </label>
                </p>
            </div>
        );
    }
}

export default TemperatureConverter;
