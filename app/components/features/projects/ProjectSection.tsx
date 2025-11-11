import { useEffect, useState } from "react";
import { getProjects } from "~/services/projectApi"
import type { Project } from "~/types/api/Project"
import ProjectCard from "./ProjectCard";



export default function ProjectSection() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect (() => {

        const fetchData = async () => {

            const result = await getProjects();

            if(result){
                setProjects(result);
            }
        }

        fetchData();
        
    }, [])



    return <section id="projects">

       <h2>Projects</h2>


        {projects.length === 0 ? (
           <p>No projects yet</p> 
        ) : (

       <ul>
            {projects.map(p => (

                <ProjectCard project={p} key={p.slug}></ProjectCard>

            ))}
       </ul>

        )}
    </section>
};