import React, { Component } from 'react';

class Metier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      metier: "Fullstack Dev",
      Niveau: "en formation"
    };
  }

  handleJunior = () => {
    this.setState((prevState) => ({...prevState, Niveau: "Junior"}));
  }

  handleIntermediaire = () => {
    this.setState((prevState) => ({...prevState, Niveau: "Intermediaire"}));
  }

  handleSenior = () => {
    this.setState((prevState) => ({...prevState, Niveau: "Senior"}));
  }

  render() {
    return (
      <div>
        <h1>je suis  {this.state.metier}   {" "}  {this.state.Niveau}  </h1>
        <button  onClick={() => this.handleJunior() }>dans trois mois je serais </button>
        <button  onClick={() => this.handleIntermediaire() }>dans un an je serais</button>
        <button  onClick={() => this.handleSenior() }>Dans 5 ans je serais </button>
      </div>
    );
  }
}

export default Metier;
