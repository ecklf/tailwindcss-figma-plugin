import * as fs from "fs";
import * as path from "path";
import {
  parseConfig,
  convertConfigColor,
  fetchConfigColors
} from "../core/config";
import defaultConfig from "../../node_modules/tailwindcss/stubs/defaultConfig.stub";

const colors = {
  transparent: "transparent",
  hex: "#E53E3E",
  rgb: "rgb(56,161,105)",
  rgba: "rgba(49,151,149, 0.5)",
  hsl: "hsl(170, 45%, 45%)",
  hsla: "hsla(170, 45%, 45%, 0.5)"
};

describe("parseConfig", () => {
  // Mimick tailwind.config.js upload via UI
  const defaultConig: string = fs.readFileSync(
    path.join(
      __dirname,
      "../../node_modules/tailwindcss/stubs/defaultConfig.stub.js"
    ),
    "utf-8"
  );

  describe("reading a valid configuration file", () => {
    it("should return an object with theme field", () => {
      const test = parseConfig(defaultConig);
      expect(parseConfig(defaultConig)).toHaveProperty("theme");
    });
  });

  describe("reading an invalid configuration file", () => {
    it("should return an empty object", () => {
      expect(parseConfig(null)).toStrictEqual({});
    });
  });
});

describe("fetchConfigColor", () => {
  describe("reading a valid config", () => {
    it("should return an object with color name and value", () => {
      const fetchedColors = fetchConfigColors(defaultConfig);
      expect(fetchedColors[0]).toHaveProperty("name");
      expect(fetchedColors[0]).toHaveProperty("value");
    });
  });
});

describe("convertConfigColor", () => {
  describe("Passing a valid config color", () => {
    let currentColor;
    it("should return object from transparent string", () => {
      currentColor = convertConfigColor(colors["transparent"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hex", () => {
      currentColor = convertConfigColor(colors["hex"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from rgb", () => {
      currentColor = convertConfigColor(colors["rgb"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from rgba", () => {
      currentColor = convertConfigColor(colors["rgba"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hsl", () => {
      currentColor = convertConfigColor(colors["hsl"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });

    it("should return object from hsla", () => {
      currentColor = convertConfigColor(colors["hsla"]);
      // Check if valid object
      expect(currentColor).toHaveProperty("r");
      expect(currentColor).toHaveProperty("g");
      expect(currentColor).toHaveProperty("b");
      expect(currentColor).toHaveProperty("a");
      // Check if valid values
      expect(currentColor["r"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["r"]).toBeLessThanOrEqual(1);
      expect(currentColor["g"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["g"]).toBeLessThanOrEqual(1);
      expect(currentColor["b"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["b"]).toBeLessThanOrEqual(1);
      expect(currentColor["a"]).toBeGreaterThanOrEqual(0);
      expect(currentColor["a"]).toBeLessThanOrEqual(1);
    });
  });
});
