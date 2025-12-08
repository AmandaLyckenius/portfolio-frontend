import { LinkedinLogo } from "phosphor-react";
import { GithubIcon } from "~/components/logos/GithubIcon";


export default function ContactSection() {
    return <section id="contact" className="flex items-center justify-center gap-4 flex-col min-h-screen snap-start  ">

        Contact me

        <div className=" flex justify-center gap-2">

            <a href="https://www.linkedin.com/in/amanda-lyckenius/" className=" cursor-pointer inline-block">
                <LinkedinLogo size={32}/>
            </a>
            
            
            <a href="https://github.com/AmandaLyckenius">
                <GithubIcon className=" w-8 h-8"/>
            </a>

        </div>



        
    </section>
}