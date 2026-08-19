import * as stylex from "@stylexjs/stylex";
import {
  breakpoints,
  colors,
  designBreakpoints,
  fontWeight,
  sizing,
  spacing,
} from "@stylexjs/shared-ui/tokens.stylex";

export const fontStyles = stylex.create({
  header: {
    fontSize: {
      default: sizing.xxgiant,
      [designBreakpoints.phone]: sizing.xxxmedium,
      [designBreakpoints.smallDesktop]: sizing.xxlarge,
      [designBreakpoints.mediumDesktop]: sizing.xlarge,
      [designBreakpoints.desktop]: sizing.giant,
      [designBreakpoints.largeDesktop]: sizing.xgiant,
    },
    fontWeight: fontWeight.bold,
  },
  subheader: {
    fontSize: {
      default: sizing.xlarge,
      [designBreakpoints.phone]: sizing.xmedium,
      [designBreakpoints.smallDesktop]: sizing.xxmedium,
      [designBreakpoints.mediumDesktop]: sizing.xxxmedium,
      [designBreakpoints.desktop]: sizing.xxxmedium,
      [designBreakpoints.largeDesktop]: sizing.large,
    },
  },
  heading: {
    fontSize: {
      default: sizing.xxxmedium,
      [designBreakpoints.phone]: sizing.xsmall,
      [designBreakpoints.smallDesktop]: sizing.medium,
      [designBreakpoints.mediumDesktop]: sizing.xmedium,
      [designBreakpoints.desktop]: sizing.xmedium,
      [designBreakpoints.largeDesktop]: sizing.xxmedium,
    },
  },
  content: {
    fontSize: {
      default: sizing.xmedium,
      [designBreakpoints.phone]: sizing.xsmall,
      [designBreakpoints.smallDesktop]: sizing.medium,
      [designBreakpoints.mediumDesktop]: sizing.medium,
      [designBreakpoints.desktop]: sizing.medium,
      [designBreakpoints.largeDesktop]: sizing.medium,
    },
  },
  minor: {
    fontSize: {
      default: sizing.medium,
      [designBreakpoints.phone]: sizing.small,
      [designBreakpoints.smallDesktop]: sizing.xsmall,
      [designBreakpoints.mediumDesktop]: sizing.xsmall,
      [designBreakpoints.desktop]: sizing.xsmall,
      [designBreakpoints.largeDesktop]: sizing.xsmall,
    },
  },
  link: {
    textDecoration: "none",
    color: colors.primaryText,
    cursor: "pointer",
  },
  highlightedLink: {
    textDecoration: "none",
    color: colors.accent,
    fontWeight: fontWeight.bold,
  },
});

export const styling = stylex.create({
  accent: {
    color: colors.accent,
  },
  alwaysCentered: {
    textAlign: "center",
  },
  alwaysLeft: {
    textAlign: "left",
  },
  bold: {
    fontWeight: fontWeight.bold,
  },
  limitContainer: {
    maxWidth: {
      default: breakpoints.desktop,
      [designBreakpoints.phone]: breakpoints.bodyMinimum,
      [designBreakpoints.desktop]: breakpoints.largePhone,
      [designBreakpoints.largeDesktop]: breakpoints.smallDesktop,
      [designBreakpoints.maximum]: breakpoints.mediumDesktop,
    },
  },
  marginSideAuto: {
    margin: {
      default: `0 auto`,
    },
  },
  marginBottomSideAuto: {
    margin: {
      default: `0 auto ${spacing.large} auto`,
    },
  },
  marginBottom: {
    margin: {
      default: `0 0 ${spacing.large} 0`,
    },
  },
  mobileCentered: {
    textAlign: {
      default: 'center',
      [designBreakpoints.phone]: 'left',
    }
  },
  noMargin: {
    margin: "0",
  },
  underlined: {
    textDecoration: "underline",
  },
});
