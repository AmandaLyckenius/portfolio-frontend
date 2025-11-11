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
            <ul>
                {projects.map(p => (
                    <ProjectCard project={p} key={p.slug} />
                ))}
            </ul>
        );
    }


    return <section id="projects">

       <h2>Projects</h2>

       {content}

    </section>
};