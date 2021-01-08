import cx from "classnames";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useMst } from "../models/Root";

interface Props {}

const ColorView = observer(({}: Props) => {
  const {
    addColorStyles,
    loadedTailwindConfig,
    loadDefaultStub,
    addSpaces,
    setAddSpaces,
    overrideStyles,
    setOverrideStyles,
  } = useMst();
  const [prefix, setPrefix] = useState<string>("");

  const hasAvailableColorStyles = () => {
    return (
      loadedTailwindConfig.theme.colors || loadedTailwindConfig.theme.extend
    );
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
          placeholder="Style name prefix (optional)"
        />
      </div>

      <div className="py-2">
        <label className="inline-flex items-center mt-2">
          <input
            name="overrideStyles"
            type="checkbox"
            className="text-teal-600 border-gray-300 rounded shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
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
            className="text-teal-600 border-gray-300 rounded shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
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
          type="button"
          className={cx(
            "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm",
            hasAvailableColorStyles()
              ? "hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              : "opacity-75 cursor-not-allowed"
          )}
          disabled={hasAvailableColorStyles() ? false : true}
          onClick={() => {
            addColorStyles(prefix);
          }}
        >
          Add Styles
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          onClick={() => {
            loadDefaultStub();
          }}
        >
          Load default
        </button>
      </div>
    </React.Fragment>
  );
});

export default ColorView;
