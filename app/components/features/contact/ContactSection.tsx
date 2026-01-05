import { ArrowDown, Envelope, LinkedinLogo } from "phosphor-react";
import { GithubIcon } from "~/components/logos/GithubIcon";
import ContactForm from "./ContactForm";


export default function ContactSection() {
    return <section id="contact" aria-labelledby="contact-heading" className=" px-4 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 ">

            <div className="flex flex-col justify-center text-center">

                <p aria-hidden="true" className="uppercase text-xs tracking-[0.25em] text-brand-text-muted">
                    Contact
                </p>

                <h2 id="contact-heading" className="text-3xl font-bold mt-2" >Let's build something together</h2>

                <div className=" text-brand-text-muted mt-3 text-base leading-relaxed">
                    <p>I'm based in Stockholm and open for junior developer opportunities.</p>

                    <p> Feel free to reach out. I'd love to hear from you. </p>

                </div>

            </div>

            <div className="mt-8 w-full max-w-3xl mx-auto px-4 sm:px-6">
            
                <div className="bg-brand-surface rounded-3xl shadow-card border border-brand-text-muted/10 p-10 md:p-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
                        Send me a message
                    </h3>
                    <ContactForm/>
                </div>

            </div>

            <div className="mt-8 max-w-3xl mx-auto flex flex-col items-center gap-4">

                <p className="text-sm text-brand-text-muted">
                    You can also find me here
                </p>

                <div aria-label="Contact options" className=" mt-8 flex justify-center items-center gap-4 text-brand-accent hover:text-brand-accent-hover">

                    <a href="https://www.linkedin.com/in/amanda-lyckenius/" className=" cursor-pointer inline-block transition transform hover:scale-110 hover:rotate-2"
                        aria-label="Open my LinkedIn profile"
                    >
                        <LinkedinLogo size={40}/>
                    </a>
                    
                    
                    <a href="https://github.com/AmandaLyckenius" aria-label="Open my GitHub profile">
                        <GithubIcon className=" w-10 h-10 transition transform hover:scale-110 hover:rotate-2 fill-brand-accent hover:fill-brand-accent-hover"/>
                    </a>

                    <a href="mailto:alyckenius@gmail.com" className="transition transform hover:scale-110 hover:rotate-2"
                        aria-label="Send me an email"
                    >
                        <Envelope size={40} />
                    </a>

                    <span aria-hidden="true" className="w-px h-5 bg-brand-accent/30"></span>

                    <a href="/cv_amanda_lyckenius.pdf" 
                        download
                        aria-label="Download my CV as PDF"
                        className="flex items-center gap-0.5 text-lg font-medium ml-2 transition transform hover:scale-110 hover:rotate-2"
                    >
                        CV<ArrowDown size={16} />
                        
                    </a>
                    
                </div>

            </div>

        

                

          

        </div>
        
    </section>
}