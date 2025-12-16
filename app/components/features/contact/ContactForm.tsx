import { useState } from "react"
import type { ContactFormData } from "~/types/api/ContactFormData"

export default function ContactForm() {

    const [data, setData] = useState<ContactFormData>({
        name:"",
        email:"",
        message:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(prev => ({
            ...prev, 
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submitting:", data)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" />
                

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" name="email" id="email" />
                

                <label htmlFor="message">Message</label>
                <textarea onChange={handleChange} name="message" id="message" />
            </div>

            <div>
                <button type="submit">Send</button>
            </div>
            


        </form>
    )
}