import React from "react";
import ReactDOM from "react-dom";
import ColorView from "./components/ColorView";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import { Provider, rootStore } from "./models/Root";
import "./resources/css/ui.css";

interface Props {}

const App = (props: Props) => {
  return (
    <Provider value={rootStore}>
      <div className="px-4 py-3">
        <FileUpload />
        <div className="mt-3">
          <ColorView />
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
