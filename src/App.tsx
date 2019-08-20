import React, {useState, useEffect, useCallback} from 'react';
import * as ReactDOM from 'react-dom';
import './resources/css/ui.css';

import {useDropzone} from 'react-dropzone';

import {ActionType} from './core/actions';
import {parseConfig, fetchConfigColors} from './core/config';

import ColorView from './components/ColorView';
// import FontView from "./components/FontView";
import Footer from './components/Footer';

declare function require(path: string): any;

function App() {
  const [config, setConfig] = useState(null);
  const [configName, setConfigName] = useState(
    'Drag or click to upload config',
  );
  const [twColors, setTwColors] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result;
      const config: object = parseConfig(binaryStr as string);
      setConfigName(acceptedFiles[0].name);
      setConfig(config);
    };
    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

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
        <section className="cursor-pointer w-full px-4 py-2 text-center text-gray-500 rounded-lg border border-gray-500 border-dashed">
          <div
            {...getRootProps({
              className: 'focus:outline-none',
            })}>
            <input {...getInputProps()} />
            <p className="text-gray-600 select-none">{configName}</p>
          </div>
        </section>
        <ColorView twColors={twColors} onAddColors={handleAddColors} />
        {/*<FontView config={config} />*/}
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-page'));
