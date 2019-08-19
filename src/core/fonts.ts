export interface TailwindFont {
  family: string;
  style: string;
}

export async function createFontStyle(payload: TailwindFont) {
  try {
    const {family, style} = payload;
    const desiredFont: FontName = {family, style};
    const fontData = await figma.listAvailableFontsAsync();
    const availableStyles = fontData
      .filter(font => font.fontName.family === family)
      .map(font => {
        return font.fontName.style;
      });
    await figma.loadFontAsync(desiredFont);
    const fontStyle = figma.createTextStyle();
    fontStyle.name = 'text-xs';
    fontStyle.fontName = desiredFont;
  } catch (error) {
    alert(error);
  }
}
