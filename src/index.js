import React from "react";
import ReactDOM from "react-dom";
import AwesomeImage from "./components/AwesomeImage";
import HoverOpacity from "./components/HoverOpacity";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HoverOpacity>
        <AwesomeImage src="https://picsum.photos/id/237/200/300" />
      </HoverOpacity>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
