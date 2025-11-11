import { useEffect, useState } from "react";
import { getProjects } from "~/services/projectApi"
import type { Project } from "~/types/api/Project"



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
                <li key={p.slug}>

                    <h3>{p.title}</h3>
                    <p>{p.description}</p>

                    <div>
                        <a href={p.githubUrl}>GitHub</a>
                        {p.liveUrl && (
                            <a href={p.liveUrl}>Live</a>
                        )}
                    </div>

                    <small>{p.tech.join(", ")}</small>

                </li>

            ))}
       </ul>

        )}
    </section>
};