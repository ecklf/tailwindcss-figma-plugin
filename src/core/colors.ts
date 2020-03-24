export const addColors = (payload: AddColorsPayload, styles: Array<PaintStyle>): boolean => {
  let payloadStyles: Array<TailwindColor> = payload.config;
  const overrideStyles: boolean = payload.overrideStyles;
  const addSpaces: boolean = payload.addSpaces;
  const prefix = payload.prefix !== "" ? addSpaces ? `${payload.prefix} / ` : `${payload.prefix}/` : "";
  try {
    if (styles.length > 0) {
      if (overrideStyles)
        styles.forEach(style => {
          for (const payloadStyle of payloadStyles) {
            const styleName = addSpaces ? payloadStyle.name.split('/').join(' / ') : payloadStyle.name;
            const payloadStyleName = `${prefix}${styleName}`;

            if (style.name == payloadStyleName) {
              handleSolidColor(style.name, payloadStyle.value, false, style);
              const index = payloadStyles.indexOf(payloadStyle, 0);
              payloadStyles.splice(index, 1);
            }
          }
        });
      createSolidColors(prefix, payloadStyles, addSpaces);
    } else {
      createSolidColors(prefix, payloadStyles, addSpaces);
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

export const createSolidColors = (prefix: String, payloadStyles: Array<TailwindColor>, addSpaces: boolean) => {
  for (const { name, value } of payloadStyles) { 
    const styleName = addSpaces ? name.split('/').join(' / ') : name;
    const styleNameWithPrefix = `${prefix}${styleName}`;
    handleSolidColor(styleNameWithPrefix, value);
  }
}

export const handleSolidColor = (name: string, color: RGBA, create: boolean = true, paintStyle?: PaintStyle) => {
  const style = create ? figma.createPaintStyle() : paintStyle;

  if (create) {
    figma.createPaintStyle;
    style.name = name;
  }

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
