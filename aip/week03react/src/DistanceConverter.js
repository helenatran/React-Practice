import React from 'react';

class DistanceConverter extends React.Component {
    constructor(props) {
        super(props); //because we extends React.Component
        this.state = {
            //our state is an object
            miles: '',
            kilometers: ''
        }
    }

    convert() {
        const kilometers = parseFloat(this.state.miles) * 1.609344;
        this.setState({ kilometers });
    }

    render() {
        return (
            <div>
                <p>
                    <label>Miles:
                <input type="text"
                            value={this.state.miles}
                            onChange={(event) => { this.setState({ fahrenheit: event.target.value }) }}>
                        </input>
                    </label>
                </p>
                <p>
                    <button onClick={() => { this.convert() }}>Convert</button>
                </p>
                <p>
                    <label>
                        Celsius:
              <input type="text" readOnly value={this.state.celsius}></input>
                    </label>
                </p>
            </div>
        )
    }
}

export default DistanceConverter;
