import { useState } from "react"
import { sendContactMessage } from "~/services/contactApi";
import type { ContactFormData } from "~/types/api/ContactFormData"

export default function ContactForm() {

    const [data, setData] = useState<ContactFormData>({
        name:"",
        email:"",
        message:"",
    })

    const [feedback, setFeedback] = useState<{
        type: "error" | "success";
        text: string;
    } | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(prev => ({
            ...prev, 
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!data.name.trim()) {
            setFeedback({ type: "error", text: "Please enter your name." });
            return;
        }

        if (!data.email.trim()) {
            setFeedback({ type: "error", text: "Please enter your email." });
            return;
        }

        if (!data.message.trim()) {
            setFeedback({ type: "error", text: "Please enter a message." });
            return;
        }

        try {

            setIsLoading(true);

            await sendContactMessage(data);

            setFeedback({ type: "success", text: "Your message has been sent"})
            setData({name: "", email: "", message: ""})

        } catch (err) {
            setFeedback({type: "error", text: "Something went wrong. Please try again later."})
        } finally{
            setIsLoading(false);
        }

        
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 ">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                <div className=" flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-medium tracking-wide text-brand-text-muted">Name</label>
                    <input onChange={handleChange} type="text" name="name" id="name" placeholder="Enter your name here" autoComplete="name"
                    className="w-full rounded-xl border border-brand-text-muted/20 bg-white px-4 py-3 text-sm md:text-base text-brand-text placeholder:text-brand-text-muted/60"
                    />
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-medium tracking-wide text-brand-text-muted">Email</label>
                    <input onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email here" autoComplete="email"
                    className="w-full rounded-xl border border-brand-text-muted/20 bg-white px-4 py-3 text-sm md:text-base text-brand-text placeholder:text-brand-text-muted/60"
                    />
                </div>


            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs font-medium tracking-wide text-brand-text-muted">Message</label>
                <textarea onChange={handleChange} name="message" id="message" placeholder="Enter your message here"
                    rows={4}
                    className="w-full rounded-xl border border-brand-text-muted/20 bg-white px-4 py-3 text-sm md:text-base text-brand-text placeholder:text-brand-text-muted/60 resize-none"
                />
            </div>

            <div aria-live="polite">
                {feedback && (
                    <p
                    role="alert"
                    className={
                        "mb-4 flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium w-full transition-all duration-200 justify-center " +
                        (feedback.type === "error"
                        ? "bg-brand-error text-brand-text"
                        : "bg-brand-success text-brand-text")
                    }
                    >
                    {feedback.text}
                    </p>
                )}
            </div>

            <div className=" flex justify-center md:justify-end pt-2 mt-6">
                <button disabled={isLoading} aria-busy={isLoading} type="submit" 
                    className="w-full md:w-auto rounded-xl bg-brand-accent px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent-hover disabled:opacity-60 disabled:cursor-not-allowed">

                    {isLoading ? "Sending..." : "Send" }
                    
                </button>
            </div>
            


        </form>
    )
}