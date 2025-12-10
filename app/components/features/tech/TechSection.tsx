import { Database, Desktop, Wrench } from "phosphor-react";
import TechBadge from "./TechBadge";
import TechCard from "./TechCard";
import { techPositions } from "./techPositions";



export default function TechSection(){
    return (
        <section id="tech" className=" snap-start px-4 py-24 ">
            <div className="max-w-5xl mx-auto">
                <p className="uppercase text-xs tracking-[0.25em] text-brand-text-muted text-center">Tech</p>
                <h2 className="text-center text-3xl font-bold mt-2">Tech Stack</h2> 

                <p className="mt-3 text-base leading-relaxed text-brand-text-muted text-center">
                    I work across the full stack with a focus on clean, maintainable code.
                </p>
    
                <div className=" hidden mt-8">
                    <div>
                        <ul className="relative h-[500px] w-full max-w-5xl">

                            {techPositions.map((tech) => (
                                <li key={tech.name} className={`absolute ${tech.className}`}>
                                    <TechBadge>{tech.name}</TechBadge>
                                </li>
                            ))}


                        </ul>

                    </div>

                </div>

                <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-surface p-6 rounded-3xl">
                    <TechCard title="Frontend" icon={<Desktop size={32} />}>
                        Experience with React, TypeScript and building responsive, component-based UIs
                    </TechCard>
                    <TechCard title="Backend" icon={<Database size={32} />}>
                        I develop RESTful APIs using Java and Spring Boot.
                        Experienced with authentication (JWT), database modeling, PostgreSQL, and MongoDB, plus containerizing apps with Docker.
                    </TechCard>
                    <TechCard title="Tools" icon={<Wrench size={32} />}>
                        Familiar with Git, GitHub, Vite, Agile workflows, and working in team environments with code reviews and branching strategies.
                    </TechCard>
                </div>

            </div>                
        </section>

    )
}