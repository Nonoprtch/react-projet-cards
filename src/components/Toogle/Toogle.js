import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  render() {
    return (
      <div>
        <p>Hello toggle</p>
        {this.state.toggle && <div>Coucou</div>}
        <button onClick={this.handleToggle}>Click ici</button>
      </div>
    );
  }
}

export default Toggle;
