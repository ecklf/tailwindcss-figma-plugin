import { ActionType } from "./core/actions";
import { addColors } from "./core/colors";

let windowSize = {
  width: 500,
  height: 700
};

figma.showUI(__html__, windowSize);

figma.ui.postMessage(42);

// createFontStyle("IBM Plex Sans", "Bold");

figma.ui.onmessage = msg => {
  const { type, payload } = msg;
  if (type === ActionType.ADD_COLORS) {
    addColors(payload);
  }
  // figma.closePlugin();
};
