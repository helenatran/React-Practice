import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Ping",
            button: "Pong",
            counter: 0,
        }
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1 });
        if (this.state.status == "Ping") {
            this.setState({
                status: "Pong",
                button: "Ping",
            });
        }
        else {
            this.setState({
                status: "Ping",
                button: "Pong",
            });
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.status}?</p>
                <p>Count: {this.state.counter}</p>
                <button onClick={() => { this.handleClick() }}>{this.state.button}</button>
            </div>
        )
    }

}

export default App;