import TechBadge from "./TechBadge";
import TechCard from "./TechCard";
import { techPositions } from "./techPositions";


export default function TechSection(){
    return (
        <section id="tech" className=" min-h-screen snap-start  ">

            <div className=" hidden">

                <h2 className="text-center text-3xl font-bold mb-8">Tech Stack</h2>
                
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

            <div className=" max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-sky-100 p-6 rounded-3xl">
                <TechCard title="Frontend">
                    Experience with React, TypeScript and building responsive, component-based UIs
                </TechCard>
                <TechCard title="Backend">
                    Java and Spring Boot, REST APIs, working with PostgreSQL and MongoDB
                </TechCard>
                <TechCard title="Tools">
                    Git, GitHub, Docker and Vite
                </TechCard>
            </div>

        </section>

    )
}