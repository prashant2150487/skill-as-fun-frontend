import { CheckCircle, Sparkles } from 'lucide-react'

const OurApporach = () => {
  return (
   <>
     <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-400 to-violet-400 rounded-full blur-3xl opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <Sparkles className="h-5 w-5 text-blue-200 mr-2" />
                  <span className="text-sm font-medium text-blue-100">
                    Our Approach
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
                  How We Create Educational Technology That Makes a Difference
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Research-Based Design",
                      description:
                        "We start with the science of learning. Our product development is informed by the latest research in cognitive science, educational psychology, and instructional design.",
                    },
                    {
                      title: "Educator-Centered Development",
                      description:
                        "Teachers and administrators are our partners in innovation. We involve educators at every stage of product development, from initial concept to final implementation.",
                    },
                    {
                      title: "Iterative Improvement",
                      description:
                        "We believe in continuous refinement. We regularly collect user feedback and performance data to improve our products and ensure they meet evolving educational needs.",
                    },
                    {
                      title: "Comprehensive Support",
                      description:
                        "Technology is only as effective as its implementation. We provide robust training, ongoing support, and professional development to ensure our solutions are used effectively.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors duration-300"
                    >
                      <div className="mt-1 bg-white/20 p-1 rounded-full">
                        <CheckCircle className="h-5 w-5 text-blue-200" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-blue-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    width={500}
                    height={500}
                    alt="Educational technology development process"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default OurApporach