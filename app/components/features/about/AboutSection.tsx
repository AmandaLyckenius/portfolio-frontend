import amanda from "../../../assets/me.jpg"

export default function AboutSection() {
    return <section id="about" className="min-h-screen snap-start flex items-center justify-center px-4">

        <div className=" bg-sky-100 rounded-3xl p-8 flex flex-row items-center gap-8 max-w-4xl w-full ">

            <div className="space-y-4 text-sm md:text-base" >
                <h3 className="text-2xl font-bold">Hi there!</h3>
                <p>

                I am Amanda - a software developer with an interest in, and experience of, both front- and backend. 
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

            <img src={amanda} alt="Amanda" className="w-80 h-80 rounded-full object-cover shadow-md" />

        </div>
    </section>
}