import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 1,
        coursImportant: "React js"
      }, {
        id: 2,
        coursImportant: "html css"
      }, {
        id: 3,
        coursImportant: "vanilla javascript"
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>List des cours les plus importants</h1>
        {
          this.state.list.map((cour, index) => (
            <div key={index}>
              {cour.coursImportant}
            </div>
          ))
        }
      </div>
    );
  }
}

export default List;