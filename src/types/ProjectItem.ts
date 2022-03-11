type ProjectDetailItem = {
  title: string;
  contents: string[];
};

type ProjectItem = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  details: ProjectDetailItem[];
};

export default ProjectItem;
