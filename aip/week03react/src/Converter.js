import React from 'react';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            console.log('props changed');
            this.setState({
                from: '',
                to: ''
            });
        }
        else {
            console.log('state changed');
        }
    }

    render() {
        // same as: const converter = this.props.converter;
        const { converter } = this.props;
        const { fromLabel, toLabel, convert } = converter;

        return (
            <div>
                <p>
                    <label>
                        {fromLabel}:
                        <input type="text" value={this.state.from} onChange={(event) => {
                            this.setState({ from: event.target.value });
                        }}></input>
                    </label>
                </p>

                <p>
                    <button onClick={() => {
                        this.setState({ to: convert(this.state.from) });
                    }}>Convert</button>
                </p>

                <p>
                    <label>
                        {toLabel}:
                        <input type="text" readOnly value={this.state.to}></input>
                    </label>
                </p>
            </div>
        )
    }
}

export default Converter;
