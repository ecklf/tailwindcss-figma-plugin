import defaultConfig from "tailwindcss/stubs/defaultConfig.stub";
import { convertConfigColor, fetchConfigColors } from "../core/config";
import * as colors from "../core/colors";

let fetchedColors = fetchConfigColors(defaultConfig);

describe("When addColors is called", () => {
  it("should return true", () => {
    expect(true).toBe(true);
    const createSolidColorMock = jest.spyOn(colors, "createSolidColor");
    createSolidColorMock.mockImplementation(() => "figma api");
    expect(colors.addColors({ prefix: "", config: fetchedColors })).toBe(true);
    // Would not be called if Figma API returns error
    expect(createSolidColorMock).toHaveBeenCalledTimes(fetchedColors.length);
  });
});
