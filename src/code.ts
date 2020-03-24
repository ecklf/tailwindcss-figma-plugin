import { addColors } from "./core/colors";

let windowSize = {
  width: 300,
  height: 290
};
figma.showUI(__html__, windowSize);

let styles: Array<PaintStyle> = []

interface AddColorsMessage {
  type: "ADD_COLORS";
  payload: AddColorsPayload;
}

figma.getLocalPaintStyles().forEach(style => {
  styles.push(style)
})

export type PluginMessage = AddColorsMessage;

figma.ui.onmessage = (pluginMessage: PluginMessage) => {
  const { type, payload } = pluginMessage;
  if (type === "ADD_COLORS") {
    addColors(payload, styles);
  }
  figma.closePlugin();
};
