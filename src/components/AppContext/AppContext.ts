import { createContext } from "react";
import { system } from "@stylexjs/shared-ui";
import type { NavigationData } from "../../database/JSON/navigation/navigation";
import { navigation } from "../../database/JSON/navigation/navigation";
import type { ResumeData } from "../../database/JSON/resume/resume";
import { resume } from "../../database/JSON/resume/resume";
import type { LabelData } from "../../database/JSON/labels/label";
import { labels } from "../../database/JSON/labels/label";
import type { Project } from "../../database/JSON/projects/projects";
import { projects } from "../../database/JSON/projects/projects";

type ThemeState = typeof system;

interface AppContextValue {
  theTheme: ThemeState;
  navToggle: boolean;
  navigationData: NavigationData;
  resume: ResumeData;
  labels: LabelData;
  projects: Project[];
  setThemeDark: () => void;
  setThemeLight: () => void;
  setThemeDefault: () => void;
  toggleNav: () => void;
}

const AppContext = createContext<AppContextValue>({
  theTheme: system,
  navToggle: false,
  navigationData: navigation,
  resume: resume,
  labels: labels,
  projects: projects,
  setThemeDark: () => {},
  setThemeLight: () => {},
  setThemeDefault: () => {},
  toggleNav: () => {},
});

export default AppContext;
