import React, { useState } from "react";
import { CREATE_COLORSTYLES } from "../actions/colorstyle.action";

function ColorView() {
  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  const onCreateColorStyles = () => {
    parent.postMessage({ pluginMessage: { type: CREATE_COLORSTYLES } }, "*");
  };

  return (
    <React.Fragment>
      <label className="block">
        <span className="text-gray-700">Prefix</span>
        <input className="form-input block w-full" placeholder="prefix" />
      </label>

      <label className="block py-2">
        <span className="text-gray-700">Configuration</span>
        <textarea
          className="form-textarea block w-full"
          rows={3}
          placeholder="Paste your tailwind config here"
        />
      </label>

      <div className="mt-2 flex flex-row-reverse items-center">
        <button
          onClick={onCreateColorStyles}
          className="ml-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate
        </button>
        <button
          className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-700"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
}

export default ColorView;
