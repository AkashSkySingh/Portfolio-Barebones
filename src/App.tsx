import { useContext, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import {
  colors,
  fontFamily,
  fontWeight,
  breakpoints,
  appVars,
  spacing,
  imageSizing,
} from "@stylexjs/shared-ui/tokens.stylex";
import { dark, light, system } from "@stylexjs/shared-ui";
import AppContext from "./components/AppContext/AppContext";
import NavigationBar from "./components/Navigation/NavigationBar/NavigationBar";
import NavigationMenu from "./components/Navigation/NavigationMenu/NavigationMenu";
import HeroBody from "./components/Hero/HeroBody/HeroBody";
import HeroAboutMe from "./components/Hero/HeroAboutMe/HeroAboutMe";
import HeroResume from "./components/Hero/HeroResume/HeroResume";
import HeroProjects from "./components/Hero/HeroProjects/HeroProjects";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [theTheme, setTheTheme] = useState(system);

  const getWindowDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window;
    return {
      height,
      width,
    };
  };

  const [navToggle, setNavToggle] = useState(getWindowDimensions().width > 1080);
  // persist resume and navigation data
  const resume = useContext(AppContext).resume;
  const navigationData = useContext(AppContext).navigationData;
  const labels = useContext(AppContext).labels;
  const projects = useContext(AppContext).projects;

  const setThemeDark = () => {
    if (theTheme === dark) {
      setTheTheme(system);
    } else {
      setTheTheme(dark);
    }
  };
  const setThemeLight = () => {
    if (theTheme === light) {
      setTheTheme(system);
    } else {
      setTheTheme(light);
    }
  };
  const setThemeDefault = () => setTheTheme(system);

  const toggleNav = () => setNavToggle(!navToggle);

  const appSettings = {
    resume,
    navigationData,
    theTheme,
    labels,
    projects,
    setThemeDark,
    setThemeLight,
    setThemeDefault,
    navToggle,
    toggleNav,
  };

  return (
    <AppContext.Provider value={appSettings}>
      <div id="container" {...stylex.props(theTheme, styles.container)}>
        <NavigationBar />
        <div {...stylex.props(styles.content)}>
          <div id="body" {...stylex.props(styles.body)}>
            <div id="about" {...stylex.props(styles.sections)}>
              <HeroBody>
                <HeroAboutMe />
              </HeroBody>
            </div>
            <div id="experience" {...stylex.props(styles.sections)}>
              <HeroBody>
                <HeroResume />
              </HeroBody>
            </div>
            <div id="projects" {...stylex.props(styles.sections)}>
              <HeroBody>
                <HeroProjects />
              </HeroBody>
            </div>
          </div>
          <div
            id="navMenu"
            {...stylex.props(styles.navMenu, navToggle ? styles.menuOpen : styles.menuClosed)}
          >
            <NavigationMenu />
          </div>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

const styles = stylex.create({
  container: {
    margin: "auto",
    overflow: "hidden",
    backgroundColor: colors.appBackgroundColor,
    color: colors.primaryText,
    display: "grid",
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: fontWeight.normal,
    gridTemplateColumns: "auto 0",
    height: "100vh",
    maxWidth:breakpoints.pad,
    width: "100%",
  },
  content: {
    overflow: "hidden",
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 1080px)": "column-reverse",
    },
    position: "relative",
    height: "100%",
    width: "100%",
  },
  body: {
    margin: `${appVars.navigation} 0 ${appVars.navigation} 0`,
    padding: `${appVars.bodySpacing}`,
    flex: "1",
    position: {
      default: "relative",
      "@media (max-width: 1080px)": "fixed",
    },
    zIndex: 1,
    height: `calc(100% - ${appVars.navigation} - (${appVars.navigation} * 2))`,
    overflowX: "hidden",
    overflowY: "auto",
    width: {
      default: "100%",
      "@media (max-width: 1080px)": `calc(100% - (${appVars.bodySpacing}*2))`,
    },
  },
  navMenu: {
    backgroundColor: {
      default: colors.primaryBackgroundColor,
    },
    height: {
      default: `calc(100% - ${appVars.navigation})`,
      "@media (max-width: 1080px)": "100%",
    },
    maxHeight: "100%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  menuOpen: {
    display: "flex",
    zIndex: 2,
  },
  menuClosed: {
    margin: 0,
    display: "none",
    minWidth: 0,
  },
  sections: {
    margin: `0 0 ${appVars.bodySpacing} 0`,
    padding: spacing.small,
    borderRadius: appVars.borderRadii,
    backgroundColor: colors.secondaryBackgroundColor,
    width: `calc(100% - (${spacing.small} * 2))`,
  },
});
