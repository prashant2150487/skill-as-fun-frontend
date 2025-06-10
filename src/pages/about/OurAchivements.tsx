import { Award } from 'lucide-react'

const OurAchivements = () => {
  return (
   <>
     <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-200 to-amber-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-amber-100 dark:bg-amber-900/30 backdrop-blur-sm rounded-full mb-4">
                <Award className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  Recognition of Excellence
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                  Our Achievements
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-700 dark:text-amber-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Milestones that mark our journey of impact
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  title: "EdTech Breakthrough Award",
                  description:
                    'Recognized for "Most Innovative Learning Management System" in 2022 for our EduConnect platform, which serves over 2 million students worldwide.',
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  title: "ISTE Best of Show",
                  description:
                    'Our adaptive mathematics platform, MathMinds, was recognized as "Best of Show" at the International Society for Technology in Education conference in 2021.',
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Fast Company Innovation by Design",
                  description:
                    'Honored in the "Learning" category for our virtual science laboratory, ScienceSphere, which brings advanced lab experiences to under-resourced schools.',
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  title: "UNESCO ICT in Education Prize",
                  description:
                    "Recognized for our work bringing educational technology to rural schools in developing countries through our Global Learning Initiative.",
                  gradient: "from-pink-500 to-rose-500",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-3 rounded-lg border-none p-6 bg-white/80 backdrop-blur-sm shadow-lg dark:bg-gray-800/80 group hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.gradient}`}
                  ></div>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${achievement.gradient} text-white`}
                    >
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-xl">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "500+",
                  text: "Educational institutions using our products",
                },
                {
                  number: "28",
                  text: "Countries where our solutions are implemented",
                },
                {
                  number: "5M+",
                  text: "Students benefiting from our technology",
                },
                {
                  number: "120",
                  text: "Team members passionate about education",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2 rounded-lg border-none p-6 bg-gradient-to-br from-white to-amber-50 shadow-lg dark:from-gray-800 dark:to-gray-700 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                    {stat.number}
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
   
   
   
   </>
  )
}

export default OurAchivements