import * as stylex from "@stylexjs/stylex";
import { colors, designBreakpoints, spacing } from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";
import AppContext from "../../AppContext/AppContext";
import { useContext } from "react";

export default function HeroAboutMe() {
  const labels = useContext(AppContext).labels;
  const location = useContext(AppContext).resume.location;
  const elevator = useContext(AppContext).resume.elevatorPitch;
  const education = useContext(AppContext).resume.education;
  const hobbies = useContext(AppContext).resume.hobbies;
  const interests = useContext(AppContext).resume.interests;
  const ResumeLink = useContext(AppContext).resume.resume;

  return (
    <div {...stylex.props(content.base)}>
      <div
        {...stylex.props(
          content.sections,
          fontStyles.header,
          styling.underlined,
          styling.alwaysCentered,
          styling.marginBottomSideAuto,
        )}
      >
        {labels.aboutMe}
      </div>
      <div
        {...stylex.props(
          content.sections,
          fontStyles.subheader,
          content.location,
          styling.alwaysCentered,
          styling.bold,
          styling.limitContainer,
          styling.marginBottomSideAuto,
        )}
      >
        {location}
      </div>
      <div {...stylex.props(content.sections, styling.mobileCentered, styling.limitContainer, styling.marginBottomSideAuto)}>
        <p {...stylex.props(content.content, fontStyles.content, styling.marginBottom)}>{elevator[0]}&nbsp;{elevator[1]}&nbsp;{elevator[2]}</p>
        <p {...stylex.props(content.content, fontStyles.content)}>{elevator[3]}&nbsp;{elevator[4]}&nbsp;{elevator[5]}</p>
      </div>
      <div {...stylex.props(content.sections, styling.limitContainer, styling.marginBottomSideAuto)}>
        <div
          {...stylex.props(
            fontStyles.subheader,
            styling.underlined,
            styling.alwaysCentered,
            styling.bold,
          )}
        >
          {labels.education}:
        </div>
        <div>
          <p {...stylex.props(fontStyles.heading, styling.accent, styling.mobileCentered, styling.bold)}>
            {education.undergraduate.school}
          </p>
          <ul {...stylex.props(content.list)}>
            <li {...stylex.props(content.content, fontStyles.content)}>
              {education.graduate.degree}
            </li>
            <li {...stylex.props(content.content, fontStyles.content)}>
              {education.undergraduate.degree}
            </li>
          </ul>
        </div>
        <div>
          <p {...stylex.props(fontStyles.heading, styling.underlined, styling.mobileCentered, styling.bold)}>
            {labels.otherEducation}:
          </p>
          <ul {...stylex.props(content.list, styling.marginBottom)}>
            {education.miscellaneous.map((certification, idx) => (
              <li {...stylex.props(content.content, fontStyles.content)} key={idx}>
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div {...stylex.props(content.sections, styling.limitContainer, styling.marginBottomSideAuto)}>
        <div
          {...stylex.props(
            fontStyles.subheader,
            styling.underlined,
            styling.alwaysCentered,
            styling.bold,
          )}
        >
          {labels.moreAboutMe}:
        </div>
        <div>
          <a href={ResumeLink} target="_blank" {...stylex.props(fontStyles.link)}>
            <p
              {...stylex.props(
                fontStyles.heading,
                styling.bold,
                styling.accent,
                styling.mobileCentered
              )}
            >
              {labels.visitMyResume}&nbsp;&rArr;
            </p>
          </a>
        </div>
        <div {...stylex.props(styling.mobileCentered)}>
          <p {...stylex.props(fontStyles.heading, styling.bold)}>{labels.hobbies}:</p>
          <p {...stylex.props(content.content, fontStyles.content)}>{hobbies}</p>
        </div>
        <div {...stylex.props(styling.mobileCentered)}>
          <p {...stylex.props(fontStyles.heading, styling.bold)}>{labels.interests}:</p>
          <p {...stylex.props(content.content, fontStyles.content, styling.marginBottom)}>
            {interests}
          </p>
        </div>
      </div>
    </div>
  );
}

const content = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    margin: {
      default: `0`,
    },
  },
  sections: {
  },
  education: {
    alignSelf: {
      default: 'unset',
      "@media (min-width: 1081px) and (max-width: 1200px)": 'center',
    }    
  },
  location: {
    color: colors.accent,
  },
  list: {
    listStylePosition: {
      default: "unset",
      [designBreakpoints.largeDesktop]: "unset",
    },
    listStyleType: "circle",
    padding: `0 0 0 ${spacing.medium}`
  },
  marginAdjustment: {
    margin: {
      default: `${spacing.medium} auto`,
    },
    minWidth: {
      default: 'unset',
      [designBreakpoints.phone]: '100%',
    }
  }
});
