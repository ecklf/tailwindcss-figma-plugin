import React, { useState, useRef } from "react";
import { CREATE_COLORSTYLES } from "../actions/colorstyle.action";

function ColorView() {
  const [prefix, setPrefix] = useState("");
  const [twConfig, setTwConfig] = useState(null);
  const inputRef = useRef(null);

  const onCreateColorStyles = () => {
    parent.postMessage(
      { pluginMessage: { type: CREATE_COLORSTYLES, prefix, twConfig } },
      "*"
    );
  };

  /**
   * Modified version of:
   * https://github.com/ameistad/tailwind-colors/blob/master/src/components/LoadConfig.vue#L72
   */
  const onUploadConfig = event => {
    function configParse(text) {
      text = text.replace(/module.exports = /, "");
      text = text.replace(/;/, "");
      return Function("return (" + text + ")")();
    }
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const config: any = configParse(fileReader.result);
        setTwConfig(config);
      } catch (error) {
        alert(error);
      }
    };
    fileReader.readAsText(file);
  };

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        onChange={onUploadConfig}
        hidden
        type="file"
        accept="text/javascript"
      />

      <div className="w-full">
        <label className="block uppercase tracking-wide text-xs font-bold text-gray-700">
          Style Prefix
        </label>
        <input
          value={prefix}
          onChange={e => setPrefix(e.target.value)}
          className="mt-2 w-full form-input block"
          placeholder="Style name prefix (optional)"
        />
      </div>

      <hr className="my-6" />

      <div className="flex flex-row justify-between items-center">
        <button
          className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-700"
          onClick={e => {
            inputRef.current.click();
          }}
        >
          Upload config
        </button>
        {twConfig === null ? (
          <button
            onClick={onCreateColorStyles}
            className="ml-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
            disabled={true}
          >
            Generate
          </button>
        ) : (
          <button
            onClick={onCreateColorStyles}
            className="ml-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            disabled={false}
          >
            Generate
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default ColorView;
