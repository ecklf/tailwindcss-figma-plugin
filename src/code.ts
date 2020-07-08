import { addColors } from "./core/colors";

let windowSize = {
  width: 300,
  height: 290,
};
figma.showUI(__html__, windowSize);

interface AddColorsMessage {
  type: "ADD_COLORS";
  payload: AddColorsPayload;
}

let styles: Array<PaintStyle> = [];

styles = figma.getLocalPaintStyles().map((style) => style);

export type PluginMessage = AddColorsMessage;

figma.ui.onmessage = (pluginMessage: PluginMessage) => {
  const { type, payload } = pluginMessage;
  if (type === "ADD_COLORS") {
    console.log("adding color");
    addColors(payload, styles);
  }
  figma.closePlugin();
};
