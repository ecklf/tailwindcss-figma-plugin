import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "tw";
    this.textbox = element;
  };

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  onTest = () => {
    parent.postMessage({ pluginMessage: { type: "test" } }, "*");
  };

  render() {
    return (
      <div className="px-4 py-2">
        {/* <img src={require("./logo.svg")} /> */}
        <h2 className="text-bold text-gray-800 text-2xl">TailwindCSS Plugin</h2>
        <label className="block py-2">
          <span className="text-gray-700">Prefix</span>
          <input
            ref={this.countRef}
            className="form-input my-2 block w-full"
            placeholder="prefix"
          />
        </label>

        <div className="flex flex-row-reverse items-center">
          <button
            onClick={this.onTest}
            className="ml-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate
          </button>
          {/* <button
            onClick={this.onCreate}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Create
          </button> */}
          <button
            className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-700"
            onClick={this.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
