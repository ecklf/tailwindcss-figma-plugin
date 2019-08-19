import React, { useState } from "react";

function ColorView({ twColors, onAddColors }) {
  const [prefix, setPrefix] = useState("");

  return (
    <React.Fragment>
      <div className="w-full">
        {/* <label className="block uppercase tracking-wide text-xs font-bold text-gray-700">
          Style Prefix
        </label> */}
        <input
          value={prefix}
          onChange={e => setPrefix(e.target.value)}
          className="mt-2 w-full form-input block"
          placeholder="Style name prefix (optional)"
        />
      </div>

      {/* <hr className="my-6" /> */}

      <div className="flex flex-row justify-between items-center">
        <button
          onClick={() => {
            onAddColors(prefix);
          }}
          className={`mt-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded ${
            twColors.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={twColors.length === 0 ? true : false}
        >
          Add Styles
        </button>
      </div>
    </React.Fragment>
  );
}

export default ColorView;
