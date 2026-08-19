import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import { fontStyles } from "@stylexjs/shared-ui";
import { appVars, breakpoints, colors } from "@stylexjs/shared-ui/tokens.stylex";

export default function Footer() {
  const copyright = useContext(AppContext).labels.copyright;

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(fontStyles.minor)}>{copyright}</div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignContent: "center",
    backgroundColor: colors.primaryBackgroundColor,
    position: "fixed",
    textAlign: "center",
    zIndex: 100,
    bottom: 0,
    height: appVars.navigation,
    maxWidth:breakpoints.pad,
    width: "100%",
  },
});
