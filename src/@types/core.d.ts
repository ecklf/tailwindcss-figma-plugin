interface PluginMessage {
  type: string;
  payload: object;
}

interface TailwindColor {
  name: string;
  value: RGBA;
}

interface addColorsPayload {
  prefix: string;
  config: Array<TailwindColor>;
}
