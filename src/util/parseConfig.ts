const requireFromString = require('require-from-string');

export function parseConfig(config: string): object {
  try {
    const parsedConfig = requireFromString(config);
    return parsedConfig;
  } catch (error) {
    return {};
  }
}
