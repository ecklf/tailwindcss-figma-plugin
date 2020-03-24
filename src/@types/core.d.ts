interface PluginMessage {
  type: string;
  payload: object;
}

interface TailwindColor {
  name: string;
  value: RGBA;
}
interface AddColorsPayload {
  prefix: string;
  config: Array<TailwindColor>;
  overrideStyles: boolean;
  addSpaces: boolean;
}
