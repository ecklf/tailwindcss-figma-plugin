import {ActionType, PluginMessage} from './actions';
import * as colors from './core/colors';

let windowSize = {
  width: 500,
  height: 700,
};

figma.showUI(__html__, windowSize);

figma.ui.postMessage(42);

// createFontStyle("IBM Plex Sans", "Bold");

figma.ui.onmessage = msg => {
  console.log(msg);
  if (msg.type === ActionType.ADD_COLORS) {
    colors.addColors(msg);
  }

  if (msg.type === 'test') {
    console.log('arrived', msg.value);
    figma.ui.resize(msg.value, 200);
  }

  // figma.closePlugin();
};
