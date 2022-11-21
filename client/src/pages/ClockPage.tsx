import React from 'react';

import ClockApi from '../api/v1/Clock';
import { ClockIndex } from '../api/v1/definitions/Clock';

interface S {
  clock: ClockIndex | null;
}

class ClockPage extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      clock: null,
    }
  }

  async componentDidMount() {
    const clock = await ClockApi.index();
    this.setState({ clock });
  }

  render() {
    const { clock } = this.state;
    return (
      <div className="container">
        <p>The current time is: {clock?.time}</p>
      </div>
    );
  }
}

export default ClockPage;
