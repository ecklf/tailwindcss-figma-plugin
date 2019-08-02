import {
  CREATE_COLORSTYLES,
  addColorStyles
} from "./actions/colorstyle.action";

figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === CREATE_COLORSTYLES) {
    addColorStyles();
  }

  figma.closePlugin();
};
