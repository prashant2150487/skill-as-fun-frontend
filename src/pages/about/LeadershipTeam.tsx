import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const LeadershipTeam = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-rose-200 to-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-pink-100 dark:bg-pink-900/30 backdrop-blur-sm rounded-full mb-4">
              <Users className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                The People Behind Our Success
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
                Meet Our Leadership Team
              </h2>
              <p className="mx-auto max-w-[700px] text-pink-700 dark:text-pink-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate individuals guiding our mission
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Prashant Sachan",
                role: "Co-Founder & Chief Executive Officer",
                bio: "Senior Software engineer and alumni of IIT Kharagapur. Prashant brings 7 years of classroom and administrative experience to her role guiding SkillAsFun's strategic vision.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                name: "Arpan Sachan",
                role: "Co-Founder & Chief Technology Officer",
                bio: "Former computer science teacher with an MS in Educational Technology. Michael combines his technical expertise with classroom insight to lead our product development.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Satyajeet Sachan",
                role: "Co-Founder & Chief Learning Officer",
                bio: "Educational psychologist with a Ph.D. in Learning Sciences. James ensures our products are grounded in research and designed to maximize learning outcomes.",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${member.gradient}`}
                ></div>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {/* <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt={member.name}
                      className="rounded-full aspect-square object-cover"
                    />
                  </div> */}
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipTeam;
