import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import "./resources/css/ui.css";

import ColorView from "./components/ColorMenu";
import Footer from "./components/Footer";

declare function require(path: string): any;

function App() {
  return (
    <div className="bg-gray-200">
      <div className="px-4 pt-2">
        <ColorView />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react-page"));
