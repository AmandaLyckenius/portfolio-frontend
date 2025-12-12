import { Envelope, LinkedinLogo } from "phosphor-react";
import { GithubIcon } from "~/components/logos/GithubIcon";


export default function ContactSection() {
    return <section id="contact" className="min-h-screen flex items-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">

            <div className="flex flex-col items-center gap-3 text-center">

                <p className="uppercase text-xs tracking-[0.25em] text-brand-text-muted text-center">
                    Contact
                </p>

                <h2 className="text-3xl font-bold mt-2" >Let's build something together</h2>

            </div>

            <div  className= "mt-8 bg-brand-surface rounded-3xl shadow-card p-12 md:p-16">
            
                <div className=" text-brand-text-muted pt-3">
                    <p>I'm based i Stockholm and open for junior developer opportunities</p>

                    <p> Feel free to reach out. I'd love to hear from you </p>

                </div>

                <div className=" mt-8 flex justify-center gap-4 text-brand-accent hover:text-brand-accent-hover">

                    <a href="https://www.linkedin.com/in/amanda-lyckenius/" className=" cursor-pointer inline-block transition transform hover:scale-110 hover:rotate-2">
                        <LinkedinLogo size={40}/>
                    </a>
                    
                    
                    <a href="https://github.com/AmandaLyckenius">
                        <GithubIcon className=" w-10 h-10 transition transform hover:scale-110 hover:rotate-2 fill-brand-accent hover:fill-brand-accent-hover"/>
                    </a>

                    <a href="mailto:alyckenius@gmail.com" className="transition transform hover:scale-110 hover:rotate-2">
                        <Envelope size={40} />
                    </a>
                    
                </div>

            </div>

        </div>
        
    </section>
}