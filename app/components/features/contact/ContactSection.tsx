import { Envelope, LinkedinLogo } from "phosphor-react";
import { GithubIcon } from "~/components/logos/GithubIcon";


export default function ContactSection() {
    return <section id="contact" className="flex items-center justify-center gap-4 flex-col min-h-screen snap-start  ">

        <div className="flex flex-col items-center gap-3 text-center">

            <h2 className="text-3xl font-bold" >Let's build something together</h2>

            <div className="pt-3">
                <p>I'm based i Stockholm and open for junior developer opportunities</p>

                <p> Feel free to reach out. I'd love to hear from you </p>

            </div>


        </div>


        <div className=" mt-8 flex justify-center gap-4">

            <a href="https://www.linkedin.com/in/amanda-lyckenius/" className=" cursor-pointer inline-block transition transform hover:scale-110 hover:rotate-2">
                <LinkedinLogo size={40}/>
            </a>
            
            
            <a href="https://github.com/AmandaLyckenius">
                <GithubIcon className=" w-10 h-10 transition transform hover:scale-110 hover:rotate-2"/>
            </a>

            <a href="mailto:alyckenius@gmail.com" className="transition transform hover:scale-110 hover:rotate-2">
                <Envelope size={40} />
            </a>
            

        </div>



        
    </section>
}