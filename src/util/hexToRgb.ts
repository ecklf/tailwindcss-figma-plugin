import * as hexRgb from "hex-rgb";

export function hexToRgb(hex) {
  try {
    const rgbValue = hexRgb(hex);

    const decimalValues = {
      r: rgbValue.red / 255,
      g: rgbValue.green / 255,
      b: rgbValue.blue / 255
    };

    return decimalValues;
  } catch (error) {
    console.log(error);
  }
}
