import { Card, CardContent } from '@/components/ui/card'
import { BarChart, BookOpen, CheckCircle, Clock, Globe, Users, Zap } from 'lucide-react'

const OurCoreValue = () => {
  return (
   <>
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 backdrop-blur-sm rounded-full mb-4">
                <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  What Drives Us
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Our Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-purple-700 dark:text-purple-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BookOpen className="h-10 w-10 text-white" />,
                  title: "Educational Excellence",
                  description:
                    "We are committed to the highest standards of educational quality and effectiveness. Every product and service we offer is grounded in sound pedagogical principles and designed to achieve meaningful learning outcomes.",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "Inclusive Innovation",
                  description:
                    "We believe that educational technology should serve all learners. We design our solutions to be accessible, culturally responsive, and adaptable to diverse learning needs and contexts.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-white" />,
                  title: "Data-Informed Decisions",
                  description:
                    "We value the power of data to improve educational experiences and outcomes. We responsibly collect, analyze, and use data to inform our product development and help educators make evidence-based decisions.",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: <Globe className="h-10 w-10 text-white" />,
                  title: "Global Perspective",
                  description:
                    "Education is a global endeavor, and we approach our work with an international mindset. We respect cultural differences, learn from diverse educational traditions, and strive to create solutions that work across borders.",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  icon: <Clock className="h-10 w-10 text-white" />,
                  title: "Continuous Improvement",
                  description:
                    "We are never satisfied with the status quo. We constantly seek feedback, iterate on our products, and push the boundaries of what's possible in educational technology.",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-white" />,
                  title: "Ethical Responsibility",
                  description:
                    "We recognize the profound responsibility that comes with creating tools that impact learning. We prioritize privacy, security, and the well-being of students and educators in everything we do.",
                  gradient: "from-violet-500 to-purple-500",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${value.gradient}`}
                  ></div>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${value.gradient} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
   
   </>
  )
}

export default OurCoreValue