import { useEffect, useState } from "react";
import { getProjects } from "~/services/projectApi"
import type { Project } from "~/types/api/Project"
import ProjectCard from "./ProjectCard";



export default function ProjectSection() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect (() => {

        const fetchData = async () => {

            setLoading(true)
            setError(null)

            try {
                const result = await getProjects();
                setProjects(result);

            } catch (e){
                setError("Something went wrong with loading projects")
            } finally {
                setLoading(false)
            }
        }

        fetchData();
        
    }, [])

    let content;

    if (loading) {
        content = <p>Loading projects...</p>;
    } else if (error) {
        content = <p>{error}</p>;
    } else if (projects.length === 0) {
        content = <p>No projects yet</p>;
    } else {
        content = (
            <ul className=" flex flex-row flex-wrap gap-6 justify-center mt-8">
                {projects.map(p => (
                    <ProjectCard project={p} key={p.slug} />
                ))}
            </ul>
        );
    }


    return <section id="projects" className=" px-4 py-24">

        <div className=" max-w-6xl mx-auto">

            <p className="uppercase text-xs tracking-[0.25em] text-brand-text-muted text-center">
                Projects
            </p>

            <h2 className="text-center text-3xl font-bold mt-2">
                Selected Works
            </h2>

            <p className="mt-3 mb-6 text-base leading-relaxed text-brand-text-muted text-center max-w-2xl mx-auto">
                Work from both individual and group projects, where I contributed to architecture, implementation, 
                and problem-solving across the stack.
            </p>

            {content}
       </div>
    </section>
};