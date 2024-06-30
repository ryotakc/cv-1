import { IconType } from '@icons-pack/react-simple-icons';
import { LucideIcon } from 'lucide-react';
import { SimpleIcon } from 'simple-icons';

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type Work = {
  company: string;
  link?: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
};

export type Contact = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  toolbar?: boolean;
};

export type Link = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
};

export type Status = {
  color: 'active' | 'disabled' | 'pending' | 'blocked';
  label: string;
};

// export type Skill = {
//   label: string;
//   icon: SimpleIcon | IconType;
// }

export type Data = {
  name: string;
  globalName?: string;
  lastUpdatedAt: Date;
  status: Status | null;
  location: string;
  bio: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  //skill: 
  education: Education[];
  work: Work[];
  contacts: Contact[];
  projects: Project[];
  links: Link[];
};
