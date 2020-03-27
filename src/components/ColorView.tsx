import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useMst } from "../models/Root";

interface Props {
  className?: string;
}

function ColorView({ className }: Props) {
  const { addColorStyles, loadedTailwindConfig, loadDefaultStub, addSpaces, setAddSpaces, overrideStyles, setOverrideStyles } = useMst();
  const [prefix, setPrefix] = useState<string>("");

  const hasAvailableColorStyles = () => {
    return (
      loadedTailwindConfig.theme.colors || loadedTailwindConfig.theme.extend
    );
  };

  return (
    <React.Fragment>
      <div className={`${className} w-full`}>
        <input
          value={prefix}
          onChange={e => setPrefix(e.target.value)}
          className="block w-full mt-2 select-none focus:shadow-none form-input"
          placeholder="Style name prefix (optional)"
        />
      </div>

      <div className="py-2">
        <label className="inline-flex items-center mt-2">
          <input
            name="overrideStyles"
            type="checkbox"
            className="form-checkbox"
            checked={overrideStyles}
            onChange={() => setOverrideStyles(!overrideStyles)}
            disabled={!hasAvailableColorStyles()}
          />
          <span className="ml-2 text-xs text-gray-600 select-none">
            Override styles if available
    </span>
        </label>

        <label className="inline-flex items-center mt-2">
          <input
            name="addSpaces"
            type="checkbox"
            className="form-checkbox"
            checked={addSpaces}
            onChange={() => setAddSpaces(!addSpaces)}
          />
          <span className="ml-2 text-xs text-gray-600 select-none">
            Add spaces to slashes
    </span>
        </label>
      </div>

      <div className="flex flex-row items-center mt-2">
        <button
          onClick={() => {
            addColorStyles(prefix);
          }}
          className={`select-none focus:outline-none bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded ${
            hasAvailableColorStyles() ? "" : "opacity-50 cursor-not-allowed"
            }`}
          disabled={hasAvailableColorStyles() ? false : true}
        >
          Add Styles
        </button>
        <button
          className="px-4 py-2 font-medium text-gray-500 hover:text-gray-800"
          onClick={() => {
            loadDefaultStub();
          }}
        >
          Load default
        </button>
      </div>
    </React.Fragment>
  );
}

export default observer(ColorView);
