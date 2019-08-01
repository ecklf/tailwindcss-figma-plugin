figma.showUI(__html__);

const config = {
  theme: {
    colors: {
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
      }
    }
  }
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
      }
    : null;
}

const createSolidBaseStyle = (name, value) => {
  const style = figma.createPaintStyle();
  style.name = name;
  const color = hexToRgb(value);
  console.log(color);
  style.paints = [{ type: "SOLID", color }];
};

figma.ui.onmessage = msg => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  if (msg.type === "test") {
    const prefix = "tw";
    const { colors } = config.theme;

    if (colors) {
      for (let color of Object.keys(colors)) {
        for (let colorValue of Object.keys(colors[color])) {
          createSolidBaseStyle(
            `${prefix}/${color}/${colorValue}`,
            colors[color][colorValue]
          );
        }
      }
    }
  }

  figma.closePlugin();
};
