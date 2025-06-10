 import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'
 
 const ClientSections = () => {
   return (
     <>
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-emerald-100 dark:bg-emerald-900/30 backdrop-blur-sm rounded-full mb-4">
                <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Voices of Success
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
                  What Our Clients Say
                </h2>
                <p className="mx-auto max-w-[700px] text-emerald-700 dark:text-emerald-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the educators and institutions we've partnered with
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "SkillAsFun has transformed how we approach teaching and learning. Their adaptive platform has helped us personalize education for each student, resulting in significant improvements in engagement and achievement.",
                  name: "Dr. Jennifer Martinez",
                  role: "Principal, Westlake High School",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  quote:
                    "The analytics provided by EduConnect have given our teachers unprecedented insight into student learning patterns. We're now able to identify and address learning gaps more quickly and effectively than ever before.",
                  name: "Robert Thompson",
                  role: "Director of Technology, Oakridge School District",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  quote:
                    "As a university with a diverse student population, we needed a learning platform that could accommodate different learning styles and needs. EduTech's solution has been flexible, robust, and incredibly user-friendly.",
                  name: "Professor Alicia Wong",
                  role: "Dean of Digital Learning, Metropolitan University",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  quote:
                    "What sets EduTech apart is their commitment to partnership. They don't just sell you a product; they work alongside you to ensure it meets your specific educational goals and challenges.",
                  name: "Carlos Mendez",
                  role: "Superintendent, Riverdale Public Schools",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  quote:
                    "ScienceSphere has revolutionized our science curriculum. Students who previously struggled with abstract concepts are now thriving thanks to the interactive, visual nature of the virtual labs.",
                  name: "Dr. Samantha Lee",
                  role: "Science Department Chair, Franklin Academy",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  quote:
                    "The implementation support from EduTech has been exceptional. Their team understood our unique challenges as a rural school and helped us create a technology plan that works within our constraints.",
                  name: "Thomas Jackson",
                  role: "Principal, Hillside Elementary",
                  gradient: "from-violet-500 to-purple-500",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${testimonial.gradient}`}
                  ></div>
                  <CardContent className="p-6 space-y-4 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white w-12 h-12 flex items-center justify-center`}
                    >
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

     </>
   )
 }
 
 export default ClientSections