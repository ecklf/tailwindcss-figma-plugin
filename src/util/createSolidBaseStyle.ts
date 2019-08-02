import { hexToRgb } from "./hexToRgb";

export function createSolidBaseStyle(name, value) {
  const style = figma.createPaintStyle();
  style.name = name;
  const color = hexToRgb(value);
  console.log(color);
  style.paints = [{ type: "SOLID", color }];
}
