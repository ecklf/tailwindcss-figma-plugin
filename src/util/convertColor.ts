const parse = require('parse-color');
export function convertColor(color: string): object {
  const {rgba} = parse(color);
  return {
    r: rgba[0] / 255,
    g: rgba[1] / 255,
    b: rgba[2] / 255,
    a: rgba[3],
  };
}
