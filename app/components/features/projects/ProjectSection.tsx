
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

        Projects

    </section>
}