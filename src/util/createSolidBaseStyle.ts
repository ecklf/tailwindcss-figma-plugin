import { hexToRgb } from "./hexToRgb";

export function createSolidBaseStyle(name, value) {
  const style = figma.createPaintStyle();
  style.name = name;
  const color = hexToRgb(value);
  style.paints = [{ type: "SOLID", color }];
}
