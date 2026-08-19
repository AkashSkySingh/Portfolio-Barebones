import * as stylex from "@stylexjs/stylex";
import { ContactInfo } from "../../ContactInfo";
import {
  spacing,
  appVars,
  designBreakpoints,
  imageSizing,
} from "@stylexjs/shared-ui/tokens.stylex";

export type HeroImageContactProps = {
  imageSrc: string;
  imagePosition: keyof typeof imagePositionVariants;
  imageSize: keyof typeof imageSizeVariants;
};

export function HeroImageContact({ imageSrc, imagePosition, imageSize }: HeroImageContactProps) {
  return (
    <div {...stylex.props(imagePositionVariants[imagePosition])}>
      <img src={imageSrc} {...stylex.props(imageSizeVariants[imageSize])} />
      <ContactInfo component={"heroImage"} />
    </div>
  );
}

const imagePositionVariants = stylex.create({
  // No center support. Its a two object Hero.
  left: {
    display: "flex",
    flexDirection: {
      default: "row",
      [designBreakpoints.smallDesktop]: "column",
    },
  },
  right: {
    display: "flex",
    flexDirection: {
      default: "row-reverse",
      [designBreakpoints.smallDesktop]: "column",
    },
  },
});

const imageSizeVariants = stylex.create({
  large: {
    margin: {
      default: `0 ${spacing.medium} 0 0`,
      [designBreakpoints.smallDesktop]: `${spacing.medium} auto`,
    },
    borderRadius: {
      default: `0 0 0 ${appVars.borderRadii}`,
      [designBreakpoints.smallDesktop]: appVars.borderRadii,
    },
    height: {
      default: imageSizing.xgigantic,
      [designBreakpoints.phone]: imageSizing.xlarge,
      [designBreakpoints.smallDesktop]: imageSizing.xgiant,
      [designBreakpoints.mediumDesktop]: imageSizing.xlarge,
      [designBreakpoints.desktop]: imageSizing.xgiant,
      [designBreakpoints.largeDesktop]: imageSizing.xhuge,
    },
    width: {
      default: imageSizing.gigantic,
      [designBreakpoints.phone]: imageSizing.large,
      [designBreakpoints.smallDesktop]: imageSizing.giant,
      [designBreakpoints.mediumDesktop]: imageSizing.large,
      [designBreakpoints.desktop]: imageSizing.giant,
      [designBreakpoints.largeDesktop]: imageSizing.huge,
    },
  },
});
