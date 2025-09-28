// LinkedIn Portfolio Section
export interface WorkExperience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    link?: string;
}

export interface SkillBadge {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
}

export interface LinkedInProfile {
    summary: string;
    experience: WorkExperience[];
    certifications: Certification[];
    skills: SkillBadge[];
}

// Projects Section
export interface ProjectLink {
    type: 'GitHub' | 'Demo' | 'Case Study';
    url: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
    image?: string;
    status: 'Active' | 'Archived' | 'Completed';
    isShowcase?: boolean;
}

// Blog Section
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // Supports markdown-like syntax via template literals
    tags: string[];
}

// General
export interface SocialLink {
    name: string;
    url:string;
    iconPath: string;
}
