const parse = require('parse-color');

export function parseConfig(config: string): object {
  try {
    // Remove any whitespace
    config = config.replace(/\s/g, '');
    // Remove anything before module exports
    config = config.replace(/^(.*)(?=module.exports)/gi, '');
    // Remove plugins section
    config = config.replace(/,plugins(.*?)(?!.*\])(?=})/gi, '');
    return eval(config);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export function convertConfigColor(color: string): RGBA {
  if (color === 'transparent') {
    color = 'rgba(0, 0, 0, 0.0)';
  }
  const {rgba} = parse(color);
  return {
    r: rgba[0] / 255,
    g: rgba[1] / 255,
    b: rgba[2] / 255,
    a: rgba[3],
  };
}

export const fetchConfigColors = (config): Array<TailwindColor> => {
  let foundColors: Array<TailwindColor> = [];

  if (config.theme) {
    const {theme} = config;
    let mergedColors = {};

    if (theme.colors) {
      mergedColors = {...mergedColors, ...theme.colors};
    }

    if (theme.extend && theme.extend.colors) {
      mergedColors = {...mergedColors, ...theme.extend.colors};
    }

    // Looping through all overwritten and extended colors
    for (const color of Object.keys(mergedColors)) {
      const colorData = mergedColors[color];
      // Determine if the current color has nested shades
      if (typeof colorData === 'object') {
        for (const colorShade of Object.keys(colorData)) {
          foundColors.push({
            name: `${color}/${colorShade}`,
            value: convertConfigColor(colorData[colorShade]),
          });
        }
      } else {
        foundColors.push({
          name: color,
          value: convertConfigColor(mergedColors[color]),
        });
      }
    }
  }
  return foundColors;
};
