import TechBadge from "./TechBadge";
import { techPositions } from "./techPositions";

export default function TechSection(){
    return (
        <section id="tech" className=" min-h-screen snap-start  ">

            <div>

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

        </section>

    )
}