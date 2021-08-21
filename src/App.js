import "./App.css";
import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    const modal = this.state.showModal && <Modal close={this.handleHide} />; // here  modal close props
    return (
      <div className="App">
        <button onClick={this.handleShow}>Display Modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
