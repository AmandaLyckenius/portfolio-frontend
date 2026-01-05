import type { ContactFormData } from "~/types/api/ContactFormData";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendContactMessage(data: ContactFormData): Promise<void> {
    const response = await fetch (`${BASE_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    if (!response.ok){
        throw new Error("Failed to send message")
    }
}