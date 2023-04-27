import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import Main from '../../components/Main/Main';

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Noa Partouche"
    };
    this.HandleName = this.HandleName.bind(this);
  }

  HandleName(cb) {
    this.setState({ name: cb });
  }

  render() {
    return (
      <div className="">
        <header>
          <Header name={this.state.name} />
          <Navbar />
        </header>

        <SectionPresentation />
        <Main HandleName={this.HandleName} />

        <Footer name={this.state.name} />
      </div>
    );
  }
}

export default Cv;
