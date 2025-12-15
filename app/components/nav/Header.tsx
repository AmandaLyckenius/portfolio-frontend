import { ArrowDown, FileArrowDown } from "phosphor-react";

export default function Header() {
    return (
    
        <nav className="fixed inset-x-0 top-6 z-50 flex justify-center">
            <div className="flex rounded-full border border-neutral-800 bg-neutral-900/70 shadow-lg backdrop-blur-lg text-sm text-neutral-200 
            gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-2.5 sm:text-sm
            md:gap-6 md:px-6 md:py-3 ">

                <a href="#hero" className="hover:text-brand-accent-soft transition-colors">
                    Home
                </a>
                <a href="#about" className="hover:text-brand-accent-soft transition-colors">
                    About
                </a>
                <a href="#tech" className="hover:text-brand-accent-soft transition-colors">
                    Tech
                </a>
                <a href="#projects" className="hover:text-brand-accent-soft transition-colors">
                    Projects
                </a>
                <a href="#contact" className="hover:text-brand-accent-soft transition-colors">
                    Contact
                </a>

                <span className="opacity-40">|</span>

                <a href="/cv_amanda_lyckenius.pdf" 
                    download
                    className="hover:text-brand-accent-soft transition-colors flex items-center"
                >
                    CV<ArrowDown size={12} />
                    
                </a>

            </div>
        </nav>

    )
}