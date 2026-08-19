import { useContext } from "react";
import * as stylex from "@stylexjs/stylex";
import {
  appVars,
  breakpoints,
  colors,
  lineHeight,
  sizing,
  spacing,
} from "@stylexjs/shared-ui/tokens.stylex";
import { dark } from "@stylexjs/shared-ui";
import { Button } from "@stylexjs/shared-ui";
import AppContext from "../../AppContext/AppContext";

export default function NavigationBar() {
  const appContext = useContext(AppContext);

  return (
    <div {...stylex.props(dark, styles.container)}>
      <div {...stylex.props(styles.navigationBar)}>
        <a href="/" {...stylex.props(styles.link)} target="_self">
          <img src="logo.svg" {...stylex.props(styles.logo)} />
        </a>
        <div {...stylex.props(styles.buttons)}>
          <div {...stylex.props(styles.iconContainer)}>
            <Button
              size={"icon"}
              onClick={() => appContext.setThemeDark()}
              imgSrc="moon.svg"
              imgSize={"icon"}
            />
            <span {...stylex.props(dark, styles.separator)}>|</span>
            <Button
              size={"icon"}
              onClick={() => appContext.setThemeLight()}
              imgSrc="sun.svg"
              imgSize={"icon"}
            />
          </div>
          <Button size={"navigation"} onClick={() => appContext.toggleNav()}>
            {appContext.navToggle ? "Esc" : "☰"}
          </Button>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignContent: "center",
    backgroundColor: colors.primaryBackgroundColor,
    position: "fixed",
    textAlign: "right",
    zIndex: 100,
    height: appVars.navigation,
    maxWidth:breakpoints.pad,
    width: "100%",
  },
  navigationBar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    maxHeight: sizing.xgiant,
  },
  logo: {
    marginLeft: spacing.medium,
    maxHeight: sizing.xgiant,
    maxWidth: sizing.xgiant,
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: spacing.medium,
  },
  iconContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    marginRight: spacing.xmedium,
    minWidth: sizing.giant,
  },
  separator: {
    margin: `auto ${spacing.small} auto ${spacing.small}`,
    color: colors.primaryText,
    lineHeight: lineHeight.normal,
  },
});
