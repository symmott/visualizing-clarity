
export interface ProjectChapter {
  title: string;
  subtitle: string;
  perspective: string;
  deliverables: string[];
  outcome: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  perspective?: string; // For single chapter projects
  deliverables?: string[];
  outcome?: string | string[];
  chapters?: ProjectChapter[];
  mainImage: string;
  additionalAssets: string[];
}
