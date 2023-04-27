import React from 'react';

class SetIntervalCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.SetIntervalId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.SetIntervalId);
  }

  render() {
    return (
      <div>
        Mon compteur tourne depuis : {this.state.time} 
      </div>
    );
  }
}

export default SetIntervalCompo;
