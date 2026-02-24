export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  details?: string;
  response?: string;
  likes?: number;
}

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  targetAudience: string;
  commonProblems: string;
  methodology: string;
  safety: string;
  progress: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
