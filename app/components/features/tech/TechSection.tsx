export default function TechSection(){
    return (
        <section id="tech" className=" min-h-screen snap-start  ">

            <div>

                <h2 className="text-center text-3xl font-bold mb-8">Tech Stack</h2>
                
                <div>

                    <ul className="relative h-[500px] w-full max-w-5xl">
                        <li className="absolute top-10 left-10">
                            <span>Java</span>
                        </li>

                        <li className="absolute top-40 right-12">
                            <span>Spring Boot</span>
                        </li>

                        <li className="absolute bottom-20 left-1/3">
                            <span>React</span>
                        </li>

                        <li className="absolute top-1/2 left-20">
                            <span>TypeScript</span>
                        </li>
                        <li className="absolute bottom-10 right-24">
                            <span>PostgreSQL</span>
                        </li>
                        <li className="absolute bottom-28 right-1/3">
                            <span>MongoDB</span>
                        </li>
                        <li className="absolute bottom-6 left-1/5">
                            <span>Docker</span>
                        </li>

                    </ul>

                </div>





            </div>

        </section>

    )
}