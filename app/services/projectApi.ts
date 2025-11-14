import type { Project } from "~/types/api/Project";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProjects = async (): Promise<Project[]> => {

    try {
        const response = await fetch (`${BASE_URL}/projects`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
    
        });
    
        if (!response.ok){
            throw new Error("Something went wrong")
        }
       
        const projects = await response.json();
    
        if (!Array.isArray(projects)){
            throw new Error("Incorrect format in fetch")
        }
    
        return projects

    } catch (error){
        console.error("Error fetching projects: ", error)
        throw error;
    }

}