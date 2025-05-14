export interface Technology {
  technology: string;
  technologyImg: string;
}
export interface Projects {
  projectNumber: string;
  projectName: string;
  githubLink: string;
  projectLink: string;
  active: boolean;
  description: string;
  technologyUsed: Technology[];
  hover: boolean;
  imgProject: string;
}
