import { ActionType } from "./core/actions";
import { addColors } from "./core/colors";

// Todo: Custom Windowsize
// let windowSize = {
//   width: 500,
//   height: 700
// };
// figma.showUI(__html__, windowSize);

// Todo: Font Action
// createFontStyle("IBM Plex Sans", "Bold");
// figma.ui.postMessage(fetchFonts);
figma.showUI(__html__);

figma.ui.onmessage = msg => {
  const { type, payload } = msg;
  if (type === ActionType.ADD_COLORS) {
    addColors(payload);
  }
  figma.closePlugin();
};
