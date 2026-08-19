import * as stylex from "@stylexjs/stylex";
import { defaultColors, colors } from "@stylexjs/shared-ui/tokens.stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

// System theme
export const system = stylex.createTheme(colors, defaultColors);

// Light theme
export const light = stylex.createTheme(colors, {
  primaryText: { default: "black", [DARK]: "black" },
  secondaryText: { default: "white", [DARK]: "white" },
  accent: { default: "#c99a00", [DARK]: "#c99a00" },
  appBackgroundColor: { default: "#dddddd", [DARK]: "#dddddd" },
  primaryBackgroundColor: { default: "white", [DARK]: "white" },
  secondaryBackgroundColor: { default: "black", [DARK]: "black" },
  buttonColor: { default: "black", [DARK]: "black" },
  buttonBackgroundColor: { default: "white", [DARK]: "white" },
  borderColor: { default: "black", [DARK]: "black" },
  backgroundImageGradient: {
    default: "linear-gradient(to right, rgba(255, 255, 255, 0.88), rgba(160, 160, 160, 0.9))",
    [DARK]: "linear-gradient(to right, rgba(255, 255, 255, 0.88), rgba(160, 160, 160, 0.9))",
  },
});

// Dark theme
export const dark = stylex.createTheme(colors, {
  primaryText: { default: "white", [DARK]: "white" },
  secondaryText: { default: "black", [DARK]: "black" },
  accent: { default: "#c99a00", [DARK]: "#c99a00" },
  appBackgroundColor: { default: "#00000080", [DARK]: "#00000080" },
  primaryBackgroundColor: { default: "black", [DARK]: "black" },
  secondaryBackgroundColor: { default: "white", [DARK]: "white" },
  buttonColor: { default: "white", [DARK]: "white" },
  buttonBackgroundColor: { default: "black", [DARK]: "black" },
  borderColor: { default: "white", [DARK]: "white" },
  backgroundImageGradient: {
    default: "linear-gradient(to right, rgba(100, 100, 100, 0.88), rgba(15, 15, 15, 0.9))",
    [DARK]: "linear-gradient(to right, rgba(100, 100, 100, 0.88), rgba(15, 15, 15, 0.9))",
  },
});
