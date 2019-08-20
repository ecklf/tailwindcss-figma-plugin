import React, {useState, useEffect} from 'react';

function FontView({configFile}) {
  const [fontWeights, setFontWeights] = useState([]);
  const [fontFamilies, setFontFamilies] = useState([]);

  onmessage = event => {
    console.log('got this from the plugin code', event.data.pluginMessage);
  };

  useEffect(() => {
    if (configFile && configFile.theme) {
      const {fontWeight, fontFamily} = configFile.theme;
      if (fontWeight) {
        const mappedFontWeights = Object.keys(fontWeight).map(weight => {
          return weight;
        });
        setFontWeights(mappedFontWeights);
      }
      if (fontFamily) {
        const mappedFontFamilies = fontFamily['sans'].map(style => {
          const familyName = style.replace(/"/g, '');
          return familyName;
        });
        setFontFamilies(mappedFontFamilies);
      }
    }
  }, [configFile]);

  const retrieveFontData = async () => {
    try {
      const availableFonts = await figma.listAvailableFontsAsync();
      return availableFonts;
    } catch (error) {
      alert(error);
    }
  };

  const onFontFamilySelect = event => {
    console.log(retrieveFontData());
    console.log(event.target.value);
  };

  return (
    <div>
      FontView
      {fontWeights.map(weightType => {
        return <div key={`key-${weightType}`}>{weightType}</div>;
      })}
      <label className="block">
        <span className="text-gray-700">Select</span>
        <select
          onChange={onFontFamilySelect}
          className="form-select block w-full mt-1">
          {fontFamilies.map(familyType => {
            return <option key={`key-${familyType}`}>{familyType} </option>;
          })}
        </select>
      </label>
    </div>
  );
}

export default FontView;
