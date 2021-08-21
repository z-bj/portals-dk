import React from "react";
import ReactDOM from "react-dom";

function MyComponent() {
  return ReactDOM.createPortal(
    <div>
      <p>I'm in Root</p>
    </div>,
    document.getElementById("second-root")
  );
}

export default MyComponent;
