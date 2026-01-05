import amanda from "../../../assets/about/me-snowboard.jpeg"

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
       
            <div className="mt-8 bg-brand-surface rounded-3xl p-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center justify-items-center gap-8 max-w-4xl w-full shadow-card ">

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

                <img src={amanda} alt="Picture of Amanda Lyckenius on snowboard" className="  w-full aspect-4/5 max-h-80 md:max-h-[360px] rounded-xl object-cover shadow-md" />

            </div>

        </div>
    </section>
}