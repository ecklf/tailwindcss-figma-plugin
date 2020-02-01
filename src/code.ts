import { addColors } from "./core/colors";

let windowSize = {
  width: 300,
  height: 225
};
figma.showUI(__html__, windowSize);

interface AddColorsMessage {
  type: "ADD_COLORS";
  payload: AddColorsPayload;
}

export type PluginMessage = AddColorsMessage;

figma.ui.onmessage = (pluginMessage: PluginMessage) => {
  const { type, payload } = pluginMessage;
  if (type === "ADD_COLORS") {
    addColors(payload);
  }
  figma.closePlugin();
};
