export const COLORS = {
  PURPLE: "#8B5CF6",
  BLUE: "#3B82F6",
  RED: "#EF4444",
  GREEN: "#10B981",
  GOLD: "#F59E0B",
  PINK: "#EC4899",
  MINT: "#06D6A0",
  CYAN: "#06B6D4",
  ORANGE: "#F97316",
  BACKGROUND: "#0F0F23",
  SURFACE: "#1A1A2E",
  ACCENT: "#16213E",
  TEXT_PRIMARY: "#E2E8F0",
  TEXT_SECONDARY: "#94A3B8",
  BORDER: "#334155",
};

export const COLORS_ARRAY = [...Object.values(COLORS)];

export const COLORS_ARRAY_WITH_BACKGROUND = [
  ...Object.values(COLORS).filter((color) => color !== COLORS.BACKGROUND),
  COLORS.BACKGROUND,
];
