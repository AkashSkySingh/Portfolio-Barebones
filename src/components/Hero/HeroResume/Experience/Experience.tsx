import type { WorkExperience } from "../../../../database/JSON/resume/resume";
import * as stylex from "@stylexjs/stylex";
import { designBreakpoints, lineHeight, spacing } from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";

type ExperienceProps = {
  experience: WorkExperience;
};

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div {...stylex.props(section.base, styling.limitContainer, styling.marginSideAuto)}>
      <a
        href={experience.link}
        target="_blank"
        {...stylex.props(fontStyles.highlightedLink, fontStyles.subheader)}
      >
        <p {...stylex.props(styling.noMargin, section.organization)}>
          {experience.organization}&nbsp;&rArr;
        </p>
      </a>
      <div {...stylex.props(section.dualLine, section.marginBottom)}>
        <div {...stylex.props(fontStyles.minor)}>{experience.location}</div>
        <div>
          <div>
            <span {...stylex.props(fontStyles.minor)}>
              {experience.duration.start.month}
              &nbsp;
              {experience.duration.start.year}
            </span>
            <span {...stylex.props(fontStyles.minor)}> - </span>
            <span {...stylex.props(fontStyles.minor)}>
              {experience.duration.end.month}
              &nbsp;
              {experience.duration.end.year}
            </span>
          </div>
        </div>
      </div>
      <div
        {...stylex.props(fontStyles.heading, styling.bold)}
      >
        {experience.position}
      </div>
      <ul {...stylex.props(section.responsibilities)}>
        {experience.responsibilities.map((resp, idx) => (
          <li {...stylex.props(section.responsibility, fontStyles.content)} key={idx}>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}

const section = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  dualLine: {
    alignItems: "self-end",
    display: "flex",
    flexDirection: {
      default: "row",
    },
    justifyContent: {
      default: "space-between",
    },
    lineHeight: lineHeight.normal,
  },
  marginBottom: {
    margin: {
      default: `0 0 ${spacing.medium} 0`,
    },
  },
  organization: {
    lineHeight: lineHeight.normal,
  },
  responsibilities: {
    margin: `${spacing.xtiny} 0 ${spacing.large} 0`,
    listStyleType: "circle",
    padding: `0 0 0 ${spacing.medium}`
  },
  responsibility: {
    margin: 0,
  },
});
