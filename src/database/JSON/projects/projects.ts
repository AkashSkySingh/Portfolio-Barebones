export type Project = {
  name: string;
  description: string;
  github?: string;
  image?: string;
  link?: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: "Project Name",
    description:
      "Project Description",
    github: "https://github.com/",
    image: "",
    link: "",
    technologies: ['TBD']
  },
  {
    name: "Vite+ Portfolio",
    description:
      "A custom built portfolio site using Vite+, TypeScript.js, React.js, and Node.js. All styled with Stylex.js, which is Meta / Facebook 's low footprint CSS web app styling solution. This application uses Vite+/Vite's built-in SSR functionality to serve as the hub for various other applications to come, including a devBlog, articles, and various other projects.",
    github: "https://github.com/AkashSkySingh/Portfolio-Barebones",
    image: "PortfolioPreview.png",
    link: "/",
    technologies: ['Vite+', 'Vite-Plus', 'Vite', 'React.js', 'Stylex.js', 'Node.js', 'TypeScript.js', 'Docker', 'Docker SBX', 'Pi', 'LM Studio', 'LocalAI.io']
  },  
];
