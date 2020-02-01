import defaultConfig from "tailwindcss/stubs/defaultConfig.stub";
import * as colors from "../core/colors";
import { fetchConfigColors } from "../core/config";

let fetchedColors = fetchConfigColors(defaultConfig);

describe("When addColors is called", () => {
  it("should return true", () => {
    const createSolidColorMock = jest.spyOn(colors, "createSolidColor");
    createSolidColorMock.mockImplementation(() => "figma api");
    expect(colors.addColors({ prefix: "", config: fetchedColors })).toBe(true);
    // Would not be called if Figma API returns error
    expect(createSolidColorMock).toHaveBeenCalledTimes(fetchedColors.length);
  });
});
