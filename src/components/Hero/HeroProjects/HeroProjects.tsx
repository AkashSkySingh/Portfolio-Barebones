import * as stylex from "@stylexjs/stylex";
import { spacing } from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";
import { useContext } from "react";
import AppContext from "../../AppContext/AppContext";
import Project from "./Project/Project";

export default function HeroProjects() {
  const labels = useContext(AppContext).labels;
  const projects = useContext(AppContext).projects;

  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(fontStyles.header, styling.underlined, styling.alwaysCentered, styling.marginBottom)}>
        {labels.myProjects}
      </div>
      <div {...stylex.props(styles.base)}>
        {projects.map((project, idx) => (
          <div {...stylex.props()} key={idx}>
            <Project
              name={project.name}
              description={project.description}
              image={project.image}
              github={project.github}
              link={project.link}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
  },
});
