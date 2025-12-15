import { Database, Desktop, Wrench } from "phosphor-react";
import TechCard from "./TechCard";

export default function TechSection(){
    return (
        <section id="tech" className=" px-4 py-24 ">
            <div className="max-w-5xl mx-auto">
                <p className="uppercase text-xs tracking-[0.25em] text-brand-text-muted text-center">Tech</p>
                <h2 className="text-center text-3xl font-bold mt-2">Tech Stack</h2> 

                <p className="mt-3 text-base leading-relaxed text-brand-text-muted text-center">
                    I work across the full stack with a focus on clean, maintainable code.
                </p>

                <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-surface p-6 rounded-3xl shadow-card">
                    <TechCard title="Frontend" icon={<Desktop size={32} />}>
                        I build responsive, component-based UIs with React and TypeScript, and write clean layout and structure using HTML and CSS.
                    </TechCard>
                    <TechCard title="Backend" icon={<Database size={32} />}>
                        I develop RESTful APIs with Java and Spring Boot, including authentication with JWT, database integration, and basic service architecture.
                        Experience working with PostgreSQL, MongoDB, and Docker for containerized applications.
                    </TechCard>
                    <TechCard title="Tools" icon={<Wrench size={32} />}>
                        I work with Git, GitHub, Vite, Agile workflows, and collaborative development with feature branches and code reviews.
                        Experience deploying applications using Vercel, fly.io, and Render.
                    </TechCard>
                </div>

            </div>                
        </section>

    )
}