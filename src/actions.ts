export interface PluginMessage {
  type: ActionType;
  payload: object;
}

export enum ActionType {
  ADD_COLORS,
  ADD_FONTS,
}

export function createSolidColor(name, color) {
  const style = figma.createPaintStyle();
  style.name = name;
  style.paints = [{type: 'SOLID', color}];
}

export function addColors(payload) {
  console.log('adding colors');
  //let prefix = payload.prefix;
  //const {theme} = payload.configFile;
  //let colorSpaces = [];

  //if (theme.colors) {
  //colorSpaces.push({...theme.colors});
  //}

  //if (theme.extend) {
  //colorSpaces.push({...theme.extend.colors});
  //}

  //for (const [i, colorSpace] of colorSpaces.entries()) {
  //// Determine if config section is overwrite or extends
  //if (i === 0) {
  //prefix = prefix !== '' ? `${prefix}/` : '';
  //} else {
  //prefix = prefix !== '' ? `${prefix}base/` : 'base/';
  //}

  //for (let colorName of Object.keys(colorSpace)) {
  //if (typeof colorSpace[colorName] === 'object') {
  //for (let colorValue of Object.keys(colorSpace[colorName])) {
  //createSolidBaseStyle(
  //`${prefix}${colorName}/${colorValue}`,
  //colorSpace[colorName][colorValue],
  //);
  //}
  //} else {
  //createSolidBaseStyle(`${prefix}${colorName}`, colorSpace[colorName]);
  //}
  //}
  //}
}

export function addFonts() {}
