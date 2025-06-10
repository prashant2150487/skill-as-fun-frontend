import founderImg from "@/assets/founder.webp";
import { Star } from 'lucide-react';
const OurJourney = () => {
  return (
   <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm rounded-full mb-4">
                <Star className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Our Journey
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Our Story
                </h2>
                <p className="mx-auto max-w-[900px] text-blue-700 dark:text-blue-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The journey that brought us to where we are today
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src={founderImg}
                    // width={400}
                    // height={400}
                    alt="Founders of SkillAsFun"
                    className="mx-auto aspect-2/3 overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg dark:bg-gray-800/90">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    From Classroom to Company
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    SkillAsFun began in 2024 when three passionate educators—
                    Prashant Sachan, Arpan Sachan, and Mahesh Kumar frustrated
                    with the limitations of existing educational technology.
                    They saw firsthand how technology could transform learning
                    when designed with real classroom needs in mind, but too
                    often, the available tools fell short.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    What started as a small project to create better assessment
                    tools for their own classrooms quickly gained attention from
                    colleagues and administrators. Encouraged by the positive
                    feedback and seeing the impact on student engagement and
                    outcomes, the trio decided to formalize their efforts and
                    founded SkillAsFun.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    In our first year, we launched our flagship learning
                    management system, SkillAsFun, which was adopted by 12
                    schools in our local district. By year three, we had
                    expanded our product line to include adaptive learning
                    tools, virtual science labs, and a comprehensive analytics
                    platform for educators.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Today, SkillAsFun serves over 5 educational institutions
                    across 1 countries, with a team of 10 dedicated
                    professionals who share our founding vision: that
                    technology, when thoughtfully designed and implemented, can
                    transform education for the better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default OurJourney