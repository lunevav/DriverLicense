import React, {Component} from 'react';
import getRealTime from '../tools/getRealTime'

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      realTime: getRealTime()
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({realTime: getRealTime()})
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.realTime}
      </div>
    );
  }
}

export default Clock;


