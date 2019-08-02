const config = {
  theme: {
    colors: {
      green: {
        100: "#f0fff4"
      },
      red: {
        900: "#742a2a"
      }
    }
  }
};
import { createSolidBaseStyle } from "../util/createSolidBaseStyle";

export const CREATE_COLORSTYLES = "CREATE_COLORSTYLES";

export const addColorStyles = () => {
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
};
