import { COLORS, COLORS_ARRAY } from "../constants/colors";

export const getNextColor = (color?: string) => {
  const colorCycle = COLORS_ARRAY.filter((c) => c !== COLORS.BACKGROUND);
  const index = colorCycle.findIndex((c) => c === color);

  if (index === -1) return colorCycle[0];

  return colorCycle[(index + 1) % colorCycle.length];
};
