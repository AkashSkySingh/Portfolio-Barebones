import * as stylex from "@stylexjs/stylex";
import { sizing, lineHeight, colors, spacing, appVars } from "@stylexjs/shared-ui/tokens.stylex";

type Props = {
  size: keyof typeof sizeVariants;
  children?: string;
  onClick?: () => void;
  xstyle?: stylex.StyleXStyles;
  imgSrc?: string;
  imgSize?: keyof typeof imageSizeVariants;
};

export function Button({ children, size, xstyle, onClick, imgSrc, imgSize, ...props }: Props) {
  return (
    <button {...props} {...stylex.props(xstyle, styles.base, sizeVariants[size])} onClick={onClick}>
      {imgSrc && (
        <img src={imgSrc} {...stylex.props(styles.base, imgSize && imageSizeVariants[imgSize])} />
      )}
      <span {...stylex.props(styles.children)}>{children}</span>
    </button>
  );
}

const styles = stylex.create({
  base: {
    borderWidth: 0,
    appearance: "none",
    backgroundColor: colors.buttonBackgroundColor,
    color: colors.buttonColor,
    cursor: "pointer",
    transitionDuration: "0.2s",
    transitionProperty: "background-color",
  },
  children: {
    padding: 0,
  },
});

const sizeVariants = stylex.create({
  small: {
    padding: spacing.xtiny,
    borderRadius: appVars.borderRadii,
    borderWidth: sizing.tiny,
    lineHeight: lineHeight.normal,
    height: sizing.xmedium,
    minWidth: sizing.xmedium,
  },
  icon: {
    margin: "0",
    padding: "0",
    borderRadius: appVars.borderRadii,
    borderStyle: "none",
    lineHeight: lineHeight.normal,
    height: sizing.xmedium,
    width: sizing.xmedium,
  },
  navigation: {
    margin: 0,
    padding: 0,
    borderRadius: appVars.borderRadii,
    borderWidth: sizing.tiny,
    lineHeight: lineHeight.navigationBar,
    height: sizing.xlarge,
    width: sizing.xlarge,
  },
});

const imageSizeVariants = stylex.create({
  icon: {
    borderRadius: appVars.borderRadii,
    maxHeight: sizing.xmedium,
    maxWidth: sizing.xmedium,
  },
});
