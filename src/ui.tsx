import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
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

  render() {
    return (
      <div className="px-4 py-4 bg-gray-100">
        {/* <img src={require("./logo.svg")} /> */}
        <h2 className="text-bold text-xl">Rectangle Creator</h2>
        <label className="block py-2">
          <span className="text-gray-700">Count</span>
          <input
            ref={this.countRef}
            className="form-input my-4 block w-full"
            placeholder="Number of rectangles"
          />
        </label>

        <div className="flex flex-row-reverse items-center">
          <button
            onClick={this.onCreate}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Create
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
