import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

// default system color scheme
export const defaultColors = {
  primaryText: { default: "black", [DARK]: "white" },
  secondaryText: { default: "white", [DARK]: "black" },
  accent: { default: "#c99a00", [DARK]: "#c99a00" },
  appBackgroundColor: { default: "white", [DARK]: "#a0a0a07f" },
  primaryBackgroundColor: { default: "white", [DARK]: "black" },
  secondaryBackgroundColor: { default: "black", [DARK]: "white" },
  buttonColor: { default: "black", [DARK]: "white" },
  buttonBackgroundColor: { default: "white", [DARK]: "black" },
  borderColor: { default: "black", [DARK]: "white" },
  backgroundImageGradient: {
    default: "linear-gradient(to right, rgba(255, 255, 255, 0.88), rgba(160, 160, 160, 0.9))",
    [DARK]: "linear-gradient(to right, rgba(100, 100, 100, 0.88), rgba(15, 15, 15, 0.9))",
  },
};

export const colors = stylex.defineVars(defaultColors);

export const sizing = stylex.defineVars({
  none: "0px",
  tiny: "1px",
  xtiny: "2px",
  xxtiny: "4px",
  small: "8px",
  ssmall: "10px",
  xsmall: "12px",
  medium: "16px",
  xmedium: "20px",
  xxmedium: "24px",
  xxxmedium: "28px",
  large: "32px",
  xlarge: "36px",
  xxlarge: "40px",
  xxxlarge: "44px",
  giant: "48px",
  xgiant: "52px",
  xxgiant: "56px",
  huge: "64px",
});

export const imageSizing = stylex.defineVars({
  icon: "32px",
  xicon: "48px",
  logo: "52px",
  xlogo: "78px",
  tiny: "120px",
  xtiny: "180px",
  small: "150px",
  xsmall: "225px",
  medium: "200px",
  xmedium: "300px",
  large: "240px",
  xlarge: "360px",
  giant: "250px",
  xgiant: "375px",
  huge: "280px",
  xhuge: "420px",
  gigantic: "320px",
  xgigantic: "480px",
});

export const spacing = stylex.defineVars({
  tiny: "0.0625rem",
  xtiny: "0.25rem",
  small: "0.5rem",
  ssmall: "0.625rem",
  xsmall: "0.75rem",
  medium: "1rem", //mediuum
  xmedium: "1.25rem",
  xxmedium: "1.5rem",
  xxxmedium: "1.75rem",
  large: "2rem",
  slarge: "2.25rem",
  giant: "3rem",
  huge: "4rem",
});

export const fontFamily = stylex.defineVars({
  primaryFontFamily: "Tahoma, sans-serif",
});

export const fontWeight = stylex.defineVars({
  normal: "100",
  bold: "600",
});

export const lineHeight = stylex.defineVars({
  navigationBar: 1.4,
  normal: 1,
  bodyText: 1.2,
});

export const breakpoints = stylex.defineVars({
  bodyMinimum: "300px",
  minimum: "360px",
  mobile: "400px",
  phone: "480px",
  largePhone: "630px",
  smallDesktop: "780px",
  mediumDesktop: "900px",
  desktop: "1080px",
  pad: "1200px",
  largeDesktop: "1440px",
  maximum: "1920px",
});

export const designBreakpoints = stylex.defineConsts({
  minimum: `@media (max-width: 360px)`,
  mobile: `@media (max-width: 400px)`,
  phone: `@media (max-width: 480px)`,
  smallDesktop: `@media (max-width: 780px)`,
  mediumDesktop: `@media (max-width: 900px)`,
  desktop: `@media (max-width: 1080px)`,
  pad: `@media (min-width: 1201)`,
  largeDesktop: `@media (max-width: 1440px)`,
  maximum: `@media (max-width: 1920px)`,
});

export const appVars = stylex.defineVars({
  appHeight: "100vh",
  navigation: "56px",
  bodySpacing: spacing.large,
  borderRadii: sizing.xxtiny,
  navMenuMin: '300px',
  navMenuMax: '480px',
});
