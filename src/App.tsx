import React, {useState, useRef, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import './resources/css/ui.css';

import {ActionType} from './core/actions';
import {parseConfig, fetchConfigColors} from './core/config';

import ColorView from './components/ColorView';
import FontView from './components/FontView';
import Footer from './components/Footer';

declare function require(path: string): any;

function App() {
  const inputRef = useRef(null);
  const [config, setConfig] = useState(null);
  const [configName, setConfigName] = useState('Upload Config');
  const [twColors, setTwColors] = useState([]);

  // Watches if config file changes
  useEffect(() => {
    if (config !== null) {
      setTwColors(twColors => fetchConfigColors(config));
      try {
      } catch (error) {
        alert(error);
      }
    }
  }, [config]);
  /**
   * Modified version of:
   * https://github.com/ameistad/tailwind-colors/blob/master/src/components/LoadConfig.vue#L72
   */
  const handleConfigUpload = uploadEvent => {
    const file = uploadEvent.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      try {
        const configString: string = fileReader.result.toString();
        const config: object = parseConfig(configString);
        // Limit config name length
        const maxLength = 19;
        var fileName =
          file.name.length > maxLength
            ? file.name.substring(0, maxLength - 3) + '...'
            : file.name;
        setConfigName(fileName);
        setConfig(config);
      } catch (error) {
        alert(error);
      }
    };
    fileReader.readAsText(file);
  };

  const handleAddColors = (colorPrefix: string) => {
    const pluginMessage: PluginMessage = {
      type: ActionType.ADD_COLORS,
      payload: {
        prefix: colorPrefix,
        config: twColors,
      },
    };
    parent.postMessage(
      {
        pluginMessage,
      },
      '*',
    );
  };

  return (
    <div className="bg-gray-200">
      <div className="px-4 pt-2">
        <input
          ref={inputRef}
          onChange={handleConfigUpload}
          hidden
          type="file"
          accept="text/javascript"
        />
        <button
          className="my-2 inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-700"
          onClick={e => {
            inputRef.current.click();
          }}>
          {configName}
        </button>
        <ColorView twColors={twColors} onAddColors={handleAddColors} />
        {/*<FontView config={config} />*/}
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
