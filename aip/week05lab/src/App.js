import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  async componentDidMount() {
    let res = await fetch('/api/count');
    let data = await res.json();
    this.setState({ count: data.count });
  }

  async increment() {
    // fetch('/api/count')
    //   .then(res => res.json())
    //   .then(data => this.setState({ count: data.count }));

    let res = await fetch('/api/increment', { method: 'POST' });
    let data = await res.json();
    this.setState({ count: data.count });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }
}

export default App;
