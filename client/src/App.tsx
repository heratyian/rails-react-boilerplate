import React from 'react';

import Ping from './api/v1/Clock';

import './App.css';

interface S {
  ping: string | null;
}

class App extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      ping: null,
    }
  }
  
  async componentDidMount() {
    const { response: ping } = await Ping.index();
    this.setState({ ping });
  }

  render() {
    return (
      <div id="root">
        <h1>Hello World</h1>
        <p>The current time is: {this.state.ping}</p>
      </div>
    );
  }
}

export default App;
