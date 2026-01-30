
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
  externalLink?: string; // 외부 연결 링크 필드
  pressLink?: string; // 보도자료 연결 링크 필드
  videoLink?: string; // 앱 디테일 영상 연결 링크 필드
  winnerLink?: string; // 수상작 게시 링크 필드 추가
}
