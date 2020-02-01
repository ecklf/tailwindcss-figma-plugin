import React from "react";
import ReactDOM from "react-dom";
import ColorView from "./components/ColorView";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import { Provider, rootStore } from "./models/Root";
import "./resources/css/ui.css";

interface Props {}

function App({}: Props) {
  return (
    <Provider value={rootStore}>
      <div className="px-4 py-3">
        <FileUpload />
        <ColorView className="mt-3" />
        <Footer className="mt-3" />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("react-page"));
