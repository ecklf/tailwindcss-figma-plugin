import React, {useState, useRef} from 'react';
import * as ReactDOM from 'react-dom';
import './resources/css/ui.css';

import ColorSection from './components/ColorSection';
import FontSection from './components/FontSection';
import Footer from './components/Footer';

declare function require(path: string): any;

function App() {
  const inputRef = useRef(null);
  const [configName, setConfigName] = useState('Upload Config');
  const [configFile, setConfigFile] = useState(null);

  /**
   * Modified version of:
   * https://github.com/ameistad/tailwind-colors/blob/master/src/components/LoadConfig.vue#L72
   */
  const handleConfigUpload = uploadEvent => {
    const file = uploadEvent.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      try {
        let config: string = fileReader.result.toString();
        config = config.replace(/require\(.+?\)/g, '');
        config = eval(config);
        // Limit config name length
        const maxLength = 19;
        var fileName =
          file.name.length > maxLength
            ? file.name.substring(0, maxLength - 3) + '...'
            : file.name;
        setConfigName(fileName);
        setConfigFile(config);
      } catch (error) {
        alert(error);
      }
    };
    fileReader.readAsText(file);
  };

  return (
    <div className="bg-gray-200">
      <div className="px-4 pt-2">
        <h1 className="text-xl text-bold ">Tailwind to Figma</h1>
        <input
          ref={inputRef}
          onChange={handleConfigUpload}
          hidden
          type="file"
          accept="text/javascript"
        />
        <button
          className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-700"
          onClick={e => {
            inputRef.current.click();
          }}>
          {configName}
        </button>
        <ColorSection configFile={configFile} />
        {/*<FontSection configFile={configFile} />*/}
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
