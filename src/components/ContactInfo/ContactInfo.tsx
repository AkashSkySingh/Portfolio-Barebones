import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import { colors, designBreakpoints, fontWeight, sizing } from "@stylexjs/shared-ui/tokens.stylex";

type Props = {
  component: keyof typeof componentTypeVariants;
};

export default function ContactInfo({ component }: Props) {
  const appContext = useContext(AppContext);
  const firstName = appContext.resume.firstName;
  const lastName = appContext.resume.lastName;
  const contactVia = appContext.labels.contactVia;
  const socials = appContext.labels.socials;
  const contactInfo = appContext.resume.contact;

  return (
    <div {...stylex.props(componentTypeVariants[component])}>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.header)}>
          <p {...stylex.props(styles.name)}>{firstName}&nbsp;</p>
          <p {...stylex.props(styles.name)}>{lastName}</p>
        </div>
        <div {...stylex.props(styles.list)}>
          <div {...stylex.props(styles.section)}>
            <div {...stylex.props(styles.subheader)}>{contactVia}:</div>
            <div {...stylex.props(styles.info)}>
              <a href={`tel: ${contactInfo.Phone}`} target="_blank" {...stylex.props(styles.link)}>
                <img src={`src/assets/hashtag.svg`} {...stylex.props(styles.icon)} />
                <p {...stylex.props(styles.detail)}>{contactInfo.Phone}</p>
              </a>
            </div>
            <div {...stylex.props(styles.info)}>
              <a
                href={`mailto: ${contactInfo.Email}`}
                target="_blank"
                {...stylex.props(styles.link)}
              >
                <img src={`src/assets/email.svg`} {...stylex.props(styles.icon)} />
                <p {...stylex.props(styles.detail)}>{contactInfo.Email}</p>
              </a>
            </div>
          </div>
          <div {...stylex.props(styles.section)}>
            <div {...stylex.props(styles.subheader)}>{socials}:</div>
            <div {...stylex.props(styles.info)}>
              <a href={contactInfo.LinkedIn} target="_blank" {...stylex.props(styles.link)}>
                <img src={`src/assets/linkedin.svg`} {...stylex.props(styles.icon)} />
                <p {...stylex.props(styles.detail)}>{contactInfo.LinkedIn}</p>
              </a>
            </div>
            <div {...stylex.props(styles.info)}>
              <a href={contactInfo.Github} target="_blank" {...stylex.props(styles.link)}>
                <img src={`src/assets/github.svg`} {...stylex.props(styles.icon)} />
                <p {...stylex.props(styles.detail)}>{contactInfo.Github}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {},
  header: {
    margin: {
      default: `0`,
    },
    display: "flex",
    flexDirection: {
      default: "row",
      [designBreakpoints.largeDesktop]: "row",
      [designBreakpoints.minimum]: "column",
    },
    justifyContent: {
      default: "unset",
      [designBreakpoints.smallDesktop]: "center",
    },
    textAlign: {
      default: "left",
      [designBreakpoints.largeDesktop]: "center",
      [designBreakpoints.smallDesktop]: "center",
    },
  },
  name: {
    margin: "0",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    margin: {
      default: "0",
    },
  },
  subheader: {
    margin: {
      default: `0`,
    },
    textDecoration: "underline",
    color: colors.accent,
    fontWeight: fontWeight.bold,
    textAlign: {
      default: "left",
      [designBreakpoints.phone]: "center",
    },
  },
  info: {},
  link: {
    margin: {
      default: 0,
      [designBreakpoints.phone]: `0 auto`,
    },
    textDecoration: "none",
    color: colors.primaryText,
    display: "flex",
    flexDirection: "row",
    justifyContent: {
      default: "unset",
      [designBreakpoints.phone]: "center",
    },
  },
  icon: {
    margin: 0,
    alignSelf: "center",
    height: {
      default: sizing.giant,
      [designBreakpoints.phone]: sizing.medium,
      [designBreakpoints.smallDesktop]: sizing.large,
      [designBreakpoints.mediumDesktop]: sizing.large,
      [designBreakpoints.desktop]: sizing.large,
      [designBreakpoints.largeDesktop]: sizing.giant,
    },
    width: {
      default: sizing.giant,
      [designBreakpoints.phone]: sizing.medium,
      [designBreakpoints.smallDesktop]: sizing.large,
      [designBreakpoints.mediumDesktop]: sizing.large,
      [designBreakpoints.desktop]: sizing.large,
      [designBreakpoints.largeDesktop]: sizing.giant,
    },
  },
  detail: {
    margin: {
      default: `0`,
    },
  },
});

const componentTypeVariants = stylex.create({
  heroImage: {
    color: colors.primaryText,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  navMenu: {
    color: colors.primaryText,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});
