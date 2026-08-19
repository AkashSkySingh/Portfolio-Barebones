import { appVars, designBreakpoints, imageSizing, spacing } from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";
import * as stylex from "@stylexjs/stylex";
import type { Project } from "../../../../database/JSON/projects/projects";
import { useContext } from "react";
import AppContext from "../../../AppContext/AppContext";

export default function Project(project: Project) {
  const navToggle = useContext(AppContext).navToggle;
  return (
    <div {...stylex.props(styles.base, styling.limitContainer, navToggle ? styles.menuOpen : styles.menuClosed, styling.marginBottomSideAuto)}>
      {project.image ? (
        <div {...stylex.props(styles.image, navToggle ? styles.imgMenuOpen : styles.imgMenuClosed)}>
          <a {...stylex.props(fontStyles.link)} href={project.link ? project.link : project.github}>
            <img {...stylex.props(styles.image)} src={project.image ? project.image : undefined} />
          </a>
        </div>
      ) : null}
      <div {...stylex.props(styles.info)}>
        <a
          {...stylex.props(fontStyles.highlightedLink, fontStyles.subheader)}
          href={project.link ? project.link : project.github}
        >
          <div>{project.name}&nbsp;&rArr;</div>
        </a>
        <div {...stylex.props(fontStyles.content)}>{project.description}</div>
        <ul {...stylex.props(styles.techList)}>
          {project.technologies.map((tech, idx)=>(
            <li {...stylex.props(fontStyles.minor)} key={idx}>
              {tech}
            </li>
          ))}          
        </ul>
      </div>
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: "flex",
    width: "100%",
  },
  menuOpen: {
    flexDirection: {
      default: "column",
      [designBreakpoints.largeDesktop]: "column",
    },
  },
  menuClosed: {
    flexDirection: {
      default: "row",
      [designBreakpoints.largeDesktop]: "column",
    },
  },
  image: {
    height: {
      default: imageSizing.small,
      [designBreakpoints.mobile]: imageSizing.small,
      [designBreakpoints.phone]: imageSizing.medium,
      [designBreakpoints.smallDesktop]: imageSizing.medium,
      [designBreakpoints.mediumDesktop]: imageSizing.medium,
      [designBreakpoints.desktop]: imageSizing.medium,
      [designBreakpoints.largeDesktop]: imageSizing.medium,
    },
    borderRadius: appVars.borderRadii,
  },
  imgMenuOpen: {
    margin: {
      default: `0 auto ${spacing.small} auto`,
    },
  },
  imgMenuClosed: {
    margin: {
      default:  `0 ${spacing.large} 0 0`,
      [designBreakpoints.largeDesktop]: `0 auto ${spacing.small} auto`,
    },
  },
  info: {
    alignContent: "center",
  },
  techList: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    listStyleType: 'circle',
    padding: `0 0 0 ${spacing.medium}`
  },
});
