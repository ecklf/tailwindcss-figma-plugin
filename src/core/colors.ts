import {convertColor} from '../util/convertColor';

export interface TailwindColor {
  name: string;
  value: RGBA;
}

export const createSolidColor = (name: string, color: RGBA) => {
  const style = figma.createPaintStyle();
  style.name = name;
  style.paints = [{type: 'SOLID', color}];
};

export const addColors = (payload: object): boolean => {
  const fetchedColors: Array<TailwindColor> = fetchColorsFromConfig(payload);
  console.log(fetchedColors);
  try {
    for (const {name, value} of fetchedColors) {
      createSolidColor(name, value);
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchColorsFromConfig = (config): Array<TailwindColor> => {
  let foundColors: Array<TailwindColor> = [];

  if (config.theme) {
    const {theme} = config;
    if (theme.colors) {
      // Looping through all color names
      for (const color of Object.keys(theme.colors)) {
        const colorData = theme.colors[color];
        // Determine if the current color has nested shades
        if (typeof colorData === 'object') {
          for (const colorShade of Object.keys(colorData)) {
            foundColors.push({
              name: `${color}/${colorShade}`,
              value: convertColor(colorData[colorShade]),
            });
          }
        } else {
          foundColors.push({
            name: color,
            value: convertColor(theme.colors[color]),
          });
        }
      }
    }
  }
  return foundColors;
};
