import {CREATE_COLORSTYLES, addColorStyles} from './actions/colorstyle.action';

import {createFontStyle} from './actions/fontStyle.action';

let windowSize = {
  width: 500,
  height: 700,
};

figma.showUI(__html__, windowSize);

figma.ui.postMessage(42);

// createFontStyle("IBM Plex Sans", "Bold");

figma.ui.onmessage = msg => {
  if (msg.type === CREATE_COLORSTYLES) {
    addColorStyles(msg);
  }

  if (msg.type === 'test') {
    console.log('arrived', msg.value);
    figma.ui.resize(msg.value, 200);
  }

  // figma.closePlugin();
};
