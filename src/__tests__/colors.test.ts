import defaultConfig from "tailwindcss/stubs/defaultConfig.stub";
import * as colors from "../core/colors";
import { fetchConfigColors } from "../core/config";

let fetchedColors = fetchConfigColors(defaultConfig);

describe("When addColors is called", () => {
  it("should return true", () => {
    const handleSolidColorMock = jest.spyOn(colors, "handleSolidColor");
    handleSolidColorMock.mockImplementation(() => "figma api");
    expect(colors.addColors({ prefix: "", config: fetchedColors, overrideStyles: false, addSpaces: false }, [])).toBe(true);
    // Would not be called if Figma API returns error
    expect(handleSolidColorMock).toHaveBeenCalledTimes(fetchedColors.length);
  });
});
