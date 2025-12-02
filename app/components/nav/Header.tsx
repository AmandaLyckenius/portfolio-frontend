export default function Header() {
    return (
    
        <nav className="fixed inset-x-0 top-6 z-50 flex justify-center">
            <div className="flex gap-6 rounded-full border border-neutral-800 bg-neutral-900/70 px-6 py-3 shadow-lg backdrop-blur-lg text-sm text-neutral-200">
                <a href="#about" className="hover:text-sky-300 transition-colors">
                    About me
                </a>
                <a href="#tech" className="hover:text-sky-300 transition-colors">
                    Tech
                </a>
                <a href="#projects" className="hover:text-sky-300 transition-colors">
                    Projects
                </a>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                    Contact
                </a>
            </div>
        </nav>

    )
}