import type { Project } from "~/types/api/Project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({project}: ProjectCardProps){

    return <li className=" bg-brand-surface rounded-2xl w-72 md:w-80 flex flex-col  pb-6 overflow-hidden shadow-card border border-brand-text-muted/10">

        {project.imageUrl && (
            <div className=" bg-brand-surface-light w-full h-40 md:h-48 flex items-center justify-center">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-44 md:h-48 object-contain"
                />
            </div>
        )}

        <div className="px-4 mt-4">
            <h3 className=" font-semibold text-lg">
                {project.title}
            </h3>

            <p className="mt-1 text-sm text-brand-text-muted">{project.description}</p>



        </div>


        <div className=" mt-auto pt-4 flex flex-col gap-8">

            <div className=" flex justify-center gap-3">
                <a href={project.githubUrl} className=" bg-brand-accent py-1.5 rounded-lg px-3 text-white hover:cursor-pointer hover:bg-brand-accent-hover transition tex-sm">Code</a>
                {project.liveUrl && (
                    <a href={project.liveUrl} className="bg-brand-accent py-1.5 rounded-lg px-3 text-white hover:cursor-pointer hover:bg-brand-accent-hover transition tex-sm">Live</a>
                )}
            </div>


            <div  className="hidden flex flex-wrap gap-2 text-brand-text-muted px-2">
                {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-brand-accent-soft rounded-full text-xs">
                        {t}
                    </span>
                ))}
            </div>




        </div>




    </li>
}