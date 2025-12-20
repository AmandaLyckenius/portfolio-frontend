import character from "../../../assets/hero/character.png";

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
                <img
                src={character}
                alt="Illustrated character of Amanda Lyckenius"
                className="max-h-[65vh] w-auto"
                />
            </div>


        </div>
        

    </section>
}