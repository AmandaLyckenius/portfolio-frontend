import type { Project } from "~/types/api/Project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({project}: ProjectCardProps){

    return <div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div>
            <a href={project.githubUrl}>GitHub</a>
            {project.liveUrl && (
                <a href={project.liveUrl}>Live</a>
            )}
        </div>

        <small>{project.tech.join(", ")}</small>

    </div>
}