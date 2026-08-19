import { useContext } from "react";
import Experience from "./Experience/Experience";
import AppContext from "../../AppContext/AppContext";
import * as stylex from "@stylexjs/stylex";
import { designBreakpoints, spacing } from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";

export default function HeroResume() {
  const WorkExperience = useContext(AppContext).resume.workExperience;
  const labels = useContext(AppContext).labels;

  return (
    <div {...stylex.props(styles.base)}>
      <div
        {...stylex.props(
          fontStyles.header,
          styling.underlined,
          styling.alwaysCentered,
          styling.marginBottom
        )}
      >
        {labels.recentWorkExperience}
      </div>
      <div>
        {WorkExperience.map((experience, idx) => {
          return (
            <div key={idx}>
              <Experience experience={experience} />
            </div>
          );
        })}
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
