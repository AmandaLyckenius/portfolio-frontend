export default function HeroSection() {
    return <section id="hero" className="flex items-center justify-center min-h-screen snap-start ">

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 max-w-5xl mx-auto">

            <div className="text-center md:text-left space-y-4">
                <h2 className=" font-display text-5xl md:text-9xl font-semibold">Amanda Lyckenius</h2>
                <p className="text-xl md:text-3xl text-brand-text/80">Fullstack developer</p>
            </div>

            <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 bg-brand-surface rounded-full shadow-md flex items-center justify-center text-brand-text/40">
            bild?
          </div>
        </div>


        </div>
        

    </section>
}