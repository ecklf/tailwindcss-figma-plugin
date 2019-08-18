const parse = require('parse-color');
export function convertColor(color: string): RGBA {
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
