export interface NavItem {
  href: string;
  label: string;
  target: string;
}

export interface NavigationData {
  label: string;
  nodes: NavItem[];
}

// TypeScript-ready navigation data
export const navigation: NavigationData = {
  label: "Shortcuts",
  nodes: [
    {
      href: "#about",
      label: "More About Me",
      target: "_self",
    },
    {
      href: "#experience",
      label: "Work Experience",
      target: "_self",
    },
    {
      href: "https://drive.google.com/",
      label: "See My Resume",
      target: "_blank",
    },
    {
      href: "#projects",
      label: "My Projects",
      target: "_self",
    },
  ],
};
