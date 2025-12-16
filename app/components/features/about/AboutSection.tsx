import amanda from "../../../assets/me.jpg"

export default function AboutSection() {
    return <section id="about" aria-labelledby="about-heading" className="px-4 py-24">

        <div className="max-w-4xl mx-auto">
            <p aria-hidden="true" className="uppercase text-xs tracking-[0.25em] text-brand-text-muted text-center">
                About
            </p>

            <h2 id="about-heading" className="text-center text-3xl font-bold mt-2">
                Get to know me
            </h2>

            <p className="mt-3 text-base leading-relaxed text-brand-text-muted text-center max-w-2xl mx-auto">
                I'm Amanda — a fullstack developer with a passion for clean code,
                thoughtful design, and continuous learning.
            </p>
       
            <div className="mt-8 bg-brand-surface rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 max-w-4xl w-full shadow-card ">

                <div className="space-y-4 text-base leading-relaxed text-brand-text-muted " >
                    <p>
                        I am curious, driven, and committed, with the ability to quickly acquire new skills. 
                        I thrive in collaboration with others, am communicative and social, 
                        and I am happy to take on new challenges with great commitment and a desire to develop.
                    </p>

                    <p>
                        I spend my free time learning Java, spending time in nature with my dog, reading, and being with my partner and friends. 
                        When I want to be creative, I engage in crocheting, painting, or pottery. 
                        I also enjoy traveling, whether it’s to the mountains for snowboarding or to warmer destinations to relax on a beach or explore new cities.
                    </p>

                </div>

                <img src={amanda} alt="Picture of Amanda Lyckenius" className="w-56 sm:w-64 md:w-80 h-auto aspect-square rounded-full object-cover shadow-md" />

            </div>

        </div>
    </section>
}