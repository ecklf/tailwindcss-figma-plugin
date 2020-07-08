import { convertConfigColor, fetchConfigColors } from "../core/config";
import defaultConfig from "../generated/tw.min.json";

const colors = {
  transparent: "transparent",
  hex6: "#E53E3E",
  hex8: "#E53E3E80",
  rgb: "rgb(56,161,105)",
  rgba: "rgba(49,151,149, 0.5)",
  hsl: "hsl(170, 45%, 45%)",
  hsla: "hsla(170, 45%, 45%, 0.5)",
};

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
    let currentColor: RGBA;
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

    it("should return object from hex6", () => {
      currentColor = convertConfigColor(colors["hex6"]);
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

    it("should return object from hex8", () => {
      currentColor = convertConfigColor(colors["hex8"]);
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
