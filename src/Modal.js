import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.popUpContainer = document.createElement("div");

    document.body.appendChild(this.popUpContainer);
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal" onClick={this.props.close}>
        {/*we put the onClick here because we want to use the bubling propagation, to enable closing modal window by clicking any where on the page because the button will searching the onclick by bubling from parent to parent, div to div*/}
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            possimus reprehenderit, nisi blanditiis expedita voluptas deserunt
            odit dolorem, libero nemo accusantium vel asperiores rerum autem
            quidem placeat obcaecati distinctio? Non!
          </p>
          <button>close</button>
        </div>
      </div>,
      this.popUpContainer
    );
  }
}

export default Modal;
