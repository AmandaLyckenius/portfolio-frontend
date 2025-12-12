import type { Project } from "~/types/api/Project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({project}: ProjectCardProps){

    return <li className=" bg-brand-surface rounded-2xl w-72 md:w-80 flex flex-col  pb-6 overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.10)] border border-brand-text-muted/10">

        {project.imageUrl && (
            <div className=" bg-brand-surface-light w-full h-40 md:h-48 flex items-center justify-center">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-44 md:h-48 object-contain"
                />
            </div>
        )}

        <div className="px-4">
            <h3 className=" font-bold">
                {project.title}
            </h3>

            <p>{project.description}</p>



        </div>


        <div className=" mt-auto pt-4 flex flex-col gap-8">

            <div className=" flex justify-center gap-3">
                <a href={project.githubUrl} className=" bg-brand-accent py-1.5 rounded-lg px-3 text-white hover:cursor-pointer hover:bg-brand-accent-hover transition tex-sm">Code</a>
                {project.liveUrl && (
                    <a href={project.liveUrl} className="bg-brand-accent py-1.5 rounded-lg px-3 text-white hover:cursor-pointer hover:bg-brand-accent-hover transition tex-sm">Live</a>
                )}
            </div>


            <div  className="hidden flex flex-wrap gap-2 text-slate-500">
                {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-sky-50 rounded-full text-xs">
                        {t}
                    </span>
                ))}
            </div>




        </div>




    </li>
}