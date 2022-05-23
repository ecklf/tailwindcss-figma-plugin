const parse = require("parse-color");

const looseJsonParse = (obj) => {
  return Function('"use strict";return (' + obj + ")")();
};

export const parseConfig = (config: string): object => {
  try {
    // Remove any whitespace
    config = config.replace(/\s/g, "");
    // Remove anything before module.exports and module.exports itself
    config = config.replace(/^(.*)(module.exports=?)/gi, "");
    // Remove semicolon after brace
    config = config.replace("};", "}");
    // Remove plugins section
    config = config.replace(/,plugins(.*?)(?!.*\])(?=})/gi, "");
    return looseJsonParse(config);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const convertConfigColor = (color: string): RGBA => {
  if (color === "transparent") {
    color = "rgba(0, 0, 0, 0.0)";
  }
  const { rgba } = parse(color);

  const alpha = color.length < 8 ? rgba[3] : rgba[3] / 255;
  return {
    r: rgba[0] / 255,
    g: rgba[1] / 255,
    b: rgba[2] / 255,
    a: alpha,
  };
};

export const fetchConfigColors = (config): Array<TailwindColor> => {
  let foundColors: Array<TailwindColor> = [];

  if (config.theme) {
    const { theme } = config;
    let mergedColors = {};

    if (theme.colors) {
      mergedColors = { ...mergedColors, ...theme.colors };
    }

    if (theme.extend && theme.extend.colors) {
      mergedColors = { ...mergedColors, ...theme.extend.colors };
    }

    // Looping through all overwritten and extended colors
    for (const color of Object.keys(mergedColors)) {
      const colorData = mergedColors[color];
      // Determine if the current color has nested shades
      if (typeof colorData === "object") {
        for (const colorShade of Object.keys(colorData)) {
          foundColors.push({
            name: `${color}/${colorShade}`,
            value: convertConfigColor(colorData[colorShade]),
          });
        }
      } else {
        if (colorData === "currentColor" || colorData === "inherit") {
          continue;
        }
        foundColors.push({
          name: color,
          value: convertConfigColor(mergedColors[color]),
        });
      }
    }
  }
  return foundColors;
};
