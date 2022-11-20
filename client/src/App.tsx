import React from 'react';

import Ping from './api/v1/Clock';
import { ClockIndex } from './api/v1/definitions/Clock';

interface S {
  clock: ClockIndex | null;
}

class App extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      clock: null,
    }
  }
  
  async componentDidMount() {
    const clock = await Ping.index();
    this.setState({ clock });
  }

  render() {
    const { clock } = this.state;
    return (
      <div className="container">
        <h1 className='my-5'>Hello World</h1>
        <p>The current time is: {clock?.time}</p>
      </div>
    );
  }
}

export default App;
