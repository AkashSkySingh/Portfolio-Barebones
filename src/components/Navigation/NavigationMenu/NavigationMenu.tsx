import * as stylex from "@stylexjs/stylex";
import { useContext } from "react";
import AppContext from "../../AppContext/AppContext";
import {
  appVars,
  breakpoints,
  colors,
  designBreakpoints,
  imageSizing,
  spacing,
} from "@stylexjs/shared-ui/tokens.stylex";
import { fontStyles, styling } from "@stylexjs/shared-ui";

export default function NavigationMenu() {
  const appContext = useContext(AppContext);
  const navigation = appContext.navigationData;
  const labels = appContext.labels;
  const firstName = appContext.resume.firstName;
  const lastName = appContext.resume.lastName;
  const shortBlurb = appContext.resume.shortBlurb;
  const contactInfo = appContext.resume.contact;

  return (
    <div {...stylex.props(styles.menu, appContext.navToggle ? styles.menuOpen : styles.menuClosed)}>
      <div {...stylex.props(styles.content)}>
        <div {...stylex.props(styles.innerContent)}>
          <img src={appContext.resume.contact.image} {...stylex.props(styles.image)} />
          <div>
            <p {...stylex.props(fontStyles.subheader, styling.bold, styles.header)}>
              {firstName}&nbsp;{lastName}
            </p>
          </div>
          <div {...stylex.props(styles.blurb)}>
            <p {...stylex.props(fontStyles.content, styling.noMargin)}>{shortBlurb}</p>
          </div>
          <div {...stylex.props(styles.details)}>
            <div {...stylex.props(styles.section)}>
              <div
                {...stylex.props(fontStyles.minor, styling.bold, styling.underlined, styles.indent)}
              >
                {labels.contactVia}:
              </div>
              <div>
                <a
                  href={`tel: ${contactInfo.Phone}`}
                  target="_blank"
                  {...stylex.props(styles.links, fontStyles.highlightedLink)}
                >
                  <img src={`hashtag.svg`} {...stylex.props(styles.icons)} />
                  <p {...stylex.props(fontStyles.content, styling.noMargin)}>{contactInfo.Phone}</p>
                </a>
              </div>
              <div>
                <a
                  href={`mailto: ${contactInfo.Email}`}
                  target="_blank"
                  {...stylex.props(styles.links, fontStyles.highlightedLink)}
                >
                  <img src={`email.svg`} {...stylex.props(styles.icons)} />
                  <p {...stylex.props(fontStyles.content, styling.noMargin)}>
                    {labels.emailMe}&nbsp;&rArr;
                  </p>
                </a>
              </div>
            </div>
            <div {...stylex.props(styles.section)}>
              <div
                {...stylex.props(fontStyles.minor, styling.bold, styling.underlined, styles.indent)}
              >
                {labels.socials}:
              </div>
              <div>
                <a
                  href={contactInfo.LinkedIn}
                  target="_blank"
                  {...stylex.props(styles.links, fontStyles.highlightedLink)}
                >
                  <img src={`linkedin.svg`} {...stylex.props(styles.icons)} />
                  <p {...stylex.props(fontStyles.content, styling.noMargin)}>
                    {labels.linkedIn}&nbsp;&rArr;
                  </p>
                </a>
              </div>
              <div>
                <a
                  href={contactInfo.Github}
                  target="_blank"
                  {...stylex.props(styles.links, fontStyles.highlightedLink)}
                >
                  <img src={`github.svg`} {...stylex.props(styles.icons)} />
                  <p {...stylex.props(fontStyles.content, styling.noMargin)}>
                    {labels.github}&nbsp;&rArr;
                  </p>
                </a>
              </div>
            </div>
            <div {...stylex.props(styles.section)}>
              <div
                {...stylex.props(fontStyles.minor, styling.bold, styling.underlined, styles.indent)}
              >
                {navigation.label}:
              </div>
              <div {...stylex.props(styles.nodes)}>
                {navigation.nodes.map((node, idx) => {
                  return (
                    <a
                      href={node.href}
                      {...stylex.props(fontStyles.highlightedLink)}
                      key={idx}
                      target={node.target}
                    >
                      <div {...stylex.props(fontStyles.content, styles.node)}>
                        {node.label}&nbsp;&rArr;
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  menu: {
    padding: `${appVars.bodySpacing} ${appVars.bodySpacing} ${appVars.bodySpacing}  ${appVars.bodySpacing}`,
    backgroundColor: colors.primaryBackgroundColor,
    height: "100%",
    minHeight: "fit-content",
  },
  menuOpen: {
    margin: `${appVars.navigation} auto`,
    minWidth: appVars.navMenuMin,
    maxWidth: appVars.navMenuMax,
  },
  menuClosed: {
    display: "none",
  },
  content: {
    padding: spacing.small,
    borderRadius: appVars.borderRadii,
    backgroundColor: colors.secondaryBackgroundColor,
    textAlign: "center",
  },
  innerContent: {
    padding: appVars.bodySpacing,
    borderRadius: appVars.borderRadii,
    backgroundColor: colors.primaryBackgroundColor,
  },
  image: {
    borderRadius: appVars.borderRadii,
    height: {
      default: imageSizing.xgiant,
      [designBreakpoints.mobile]: imageSizing.xsmall,
      [designBreakpoints.smallDesktop]: imageSizing.xmedium,
      [designBreakpoints.desktop]: imageSizing.xlarge,
    },
    width: {
      default: imageSizing.giant,
      [designBreakpoints.mobile]: imageSizing.small,
      [designBreakpoints.smallDesktop]: imageSizing.medium,
      [designBreakpoints.desktop]: imageSizing.large,
    },
  },
  header: {
    margin: `${spacing.large} auto ${spacing.medium} auto`,
    textAlign: "center",
  },
  blurb: {
    margin: `0`,
  },
  section: {
    margin: `${spacing.huge} 0`,
  },
  links: {
    margin: `${spacing.small} 0`,
    alignItems: "center",
    display: "flex",
    flexDirection: {
      default: "row",
    },
  },
  details: {
    textAlign: "left",
  },
  icons: {
    margin: `0 ${spacing.small} 0 0`,
    height: {
      default: imageSizing.icon,
      [designBreakpoints.desktop]: imageSizing.icon,
    },
    width: {
      default: imageSizing.icon,
      [designBreakpoints.desktop]: imageSizing.icon,
    },
  },
  nodes: {},
  node: {
    margin: `${spacing.small} 0 ${spacing.small} calc(${imageSizing.icon} + ${spacing.small})`,
    textAlign: "left",
  },
  indent: {
    margin: `0 0 0 calc(${imageSizing.icon} + ${spacing.small})`,
  },
});
