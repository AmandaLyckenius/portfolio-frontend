import type { Project } from "~/types/api/Project";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProjects = async (): Promise<Project[]> => {

    const response = await fetch (`${BASE_URL}/projects`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }

    });

    const projects = await response.json();

    return projects
}