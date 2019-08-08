import { createSolidBaseStyle } from "../util/createSolidBaseStyle";

export const CREATE_COLORSTYLES = "CREATE_COLORSTYLES";

export const addColorStyles = payload => {
  let prefix = payload.prefix;
  const { theme } = payload.configFile;
  let colorSpaces = [];

  if (theme.colors) {
    colorSpaces.push({ ...theme.colors });
  }

  if (theme.extend) {
    colorSpaces.push({ ...theme.extend.colors });
  }

  for (const [i, colorSpace] of colorSpaces.entries()) {
    // Determine if config section is overwrite or extends
    if (i === 0) {
      prefix = prefix !== "" ? `${prefix}/` : "";
    } else {
      prefix = prefix !== "" ? `${prefix}base/` : "base/";
    }

    for (let colorName of Object.keys(colorSpace)) {
      if (typeof colorSpace[colorName] === "object") {
        for (let colorValue of Object.keys(colorSpace[colorName])) {
          createSolidBaseStyle(
            `${prefix}${colorName}/${colorValue}`,
            colorSpace[colorName][colorValue]
          );
        }
      } else {
        createSolidBaseStyle(`${prefix}${colorName}`, colorSpace[colorName]);
      }
    }
  }
};
