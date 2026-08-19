import type { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { appVars, colors, designBreakpoints } from "@stylexjs/shared-ui/tokens.stylex";

type HeroProps = {
  children?: ReactNode;
};

export default function HeroBody({ children }: HeroProps) {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.innerBase)}>
        {children}
      </div>
    </div>
  );
}

const styles = stylex.create({
  base: {
    margin: {
      default: 0,
      [designBreakpoints.pad]: `0 auto`,
    },
    borderRadius: appVars.borderRadii,
    backgroundColor: colors.primaryBackgroundColor,
    justifySelf: {
      default: "unset",
      [designBreakpoints.pad]: `center`,
    },
    width: '100%',
  },
  innerBase: {
    backgroundColor: colors.primaryBackgroundColor,
    padding: {
      default: appVars.bodySpacing,
    },
    borderRadius: appVars.borderRadii,
  },
});
