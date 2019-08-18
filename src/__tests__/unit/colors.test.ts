import defaultConfig from '../../../node_modules/tailwindcss/stubs/defaultConfig.stub';
import * as colors from '../../core/colors';

let fetchedColors;

beforeAll(() => {
  fetchedColors = colors.fetchColorsFromConfig(defaultConfig);
});

describe('When running fetchColorsFromConfig', () => {
  it('should return an object with color name and value', () => {
    expect(fetchedColors[0]).toHaveProperty('name');
    expect(fetchedColors[0]).toHaveProperty('value');
  });
});

describe('When addColors is called', () => {
  it('should return true', () => {
    const createSolidColorMock = jest.spyOn(colors, 'createSolidColor');
    createSolidColorMock.mockImplementation(() => 'figma api');
    console.log(fetchedColors);
    expect(colors.addColors(fetchedColors)).toBe(true);
    // Would not be called if Figma API returns error
    expect(createSolidColorMock).toHaveBeenCalledTimes(fetchedColors.length);
  });
});
