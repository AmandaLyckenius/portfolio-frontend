export interface Project{
    title: string;
    description: string;
    slug: string;
    githubUrl: string;
    liveUrl: string | null;
    tech: string []; 
}