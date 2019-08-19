export const addColors = (payload: addColorsPayload): boolean => {
  try {
    for (const { name, value } of payload.config) {
      createSolidColor(name, value);
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

export const createSolidColor = (name: string, color: RGBA) => {
  const style = figma.createPaintStyle();

  figma.createPaintStyle;
  style.name = name;

  const { r, g, b, a } = color;

  const rgbColor: RGB = { r, g, b };
  const alpha: number = a;

  const solidPaint: SolidPaint = {
    type: "SOLID",
    color: rgbColor,
    opacity: alpha
  };

  style.paints = [solidPaint];
};
