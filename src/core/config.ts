const parse = require("parse-color");

export function parseConfig(config: string): object {
  try {
    config = config.replace(/require\(.+?\)/g, "");
    return eval(config);
  } catch (error) {
    return {};
  }
}

export function convertConfigColor(color: string): RGBA {
  if (color === "transparent") {
    color = "rgba(0, 0, 0, 0.0)";
  }
  const { rgba } = parse(color);
  return {
    r: rgba[0] / 255,
    g: rgba[1] / 255,
    b: rgba[2] / 255,
    a: rgba[3]
  };
}

export const fetchConfigColors = (config): Array<TailwindColor> => {
  let foundColors: Array<TailwindColor> = [];

  if (config.theme) {
    const { theme } = config;
    if (theme.colors) {
      // Looping through all color names
      for (const color of Object.keys(theme.colors)) {
        const colorData = theme.colors[color];
        // Determine if the current color has nested shades
        if (typeof colorData === "object") {
          for (const colorShade of Object.keys(colorData)) {
            foundColors.push({
              name: `${color}/${colorShade}`,
              value: convertConfigColor(colorData[colorShade])
            });
          }
        } else {
          foundColors.push({
            name: color,
            value: convertConfigColor(theme.colors[color])
          });
        }
      }
    }
  }
  return foundColors;
};
