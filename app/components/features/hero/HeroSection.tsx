import amanda from "../../../assets/hero/me.jpg";

export default function HeroSection() {
    return <section id="hero" aria-labelledby="hero-heading" className="flex items-center justify-center min-h-screen ">

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 max-w-6xl mx-auto">

            <div className="text-center md:text-left space-y-4">
                <h2 id="hero-heading" className=" font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
                    Amanda Lyckenius
                </h2>

                <p className="text-xl md:text-3xl text-brand-text-muted">Fullstack developer</p>
            </div>

            <div className="flex justify-center md:justify-end">
                <img src={amanda} alt="Picture of Amanda Lyckenius" className="w-56 sm:w-64 md:w-80 h-auto aspect-square rounded-full object-cover shadow-md" />
            </div>




        </div>
        

    </section>
}