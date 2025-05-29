import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Award,
  Users,
  BarChart,
  Globe,
  Clock,
  CheckCircle,
  MessageSquare,
  Building,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import founderImg from "@/assets/founder.webp";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white"></div>
              <div className="absolute top-[20%] right-[5%] w-[30%] h-[30%] rounded-full bg-white"></div>
              <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center relative z-10">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-sm font-medium">
                  Transforming Education Since 2024
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  About SkillAsFun
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Transforming education through innovative technology solutions
                </p>
              </div>
              <div className="space-x-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-blue-100 hover:text-indigo-700 pointer-events-none"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 pointer-events-none" asChild>
                <Link to="/solutions">Our Solutions</Link>
              </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gradient-to-tr from-blue-200 to-blue-300 rounded-full blur-3xl opacity-30"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 dark:bg-gray-800/80 dark:border-gray-700 transform transition-transform hover:scale-[1.02]">
                <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600 px-3 py-1 text-sm text-white font-medium">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                  Empowering learners through accessible, engaging, and
                  effective educational technology
                </h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At SkillAsFun, we believe that quality education should be
                  accessible to everyone, regardless of their background or
                  circumstances. Our mission is to develop and deliver
                  cutting-edge educational technology solutions that break down
                  barriers to learning, engage students in meaningful ways, and
                  produce measurable results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to creating tools that support educators,
                  empower students, and transform the educational experience. By
                  combining pedagogical expertise with technological innovation,
                  we aim to address the unique challenges facing education today
                  and prepare learners for the demands of tomorrow.
                </p>
              </div>
              <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100 dark:bg-gray-800/80 dark:border-gray-700 transform transition-transform hover:scale-[1.02]">
                <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 text-sm text-white font-medium">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
                  A world where technology enhances human potential through
                  education
                </h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We envision a future where educational technology seamlessly
                  integrates into learning environments, enhancing rather than
                  replacing human connection. Our vision is to lead the
                  transformation of education through thoughtful innovation that
                  respects the essential role of teachers while expanding what's
                  possible in education.
                </p>
                <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We see a world where personalized learning experiences are the
                  norm, where data-driven insights help educators make informed
                  decisions, and where technology bridges gaps in educational
                  access and quality. Through our work, we strive to make this
                  vision a reality, one classroom, one school, and one
                  educational system at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
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

        {/* Core Values */}
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

        {/* Our Approach */}
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

        {/* Our Team */}
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
                // {
                //   name: "Dr. Maya Patel",
                //   role: "Chief Research Officer",
                //   bio: "With a background in cognitive science and data analytics, Maya leads our research initiatives and ensures our products are evidence-based and effective.",
                //   gradient: "from-amber-500 to-orange-500",
                // },
                // {
                //   name: "David Kim",
                //   role: "Chief Product Officer",
                //   bio: "Former UX designer for educational applications, David ensures our products are intuitive, accessible, and deliver exceptional user experiences for all learners.",
                //   gradient: "from-emerald-500 to-green-500",
                // },
                // {
                //   name: "Elena Gonzalez",
                //   role: "Chief Customer Success Officer",
                //   bio: "With extensive experience in educational consulting, Elena leads our implementation and support teams, ensuring our clients achieve their educational goals with our technology.",
                //   gradient: "from-violet-500 to-purple-500",
                // },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${member.gradient}`}
                  ></div>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
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
                    </div>
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

        {/* Achievements */}
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

        {/* Testimonials */}
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

        {/* Partners */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-200 to-violet-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-violet-100 dark:bg-violet-900/30 backdrop-blur-sm rounded-full mb-4">
                <Building className="h-5 w-5 text-violet-600 dark:text-violet-400 mr-2" />
                <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                  Collaborative Excellence
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
                  Our Partners
                </h2>
                <p className="mx-auto max-w-[700px] text-violet-700 dark:text-violet-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Organizations we collaborate with to advance educational
                  technology
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-12 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800/80"
                >
                  <img
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt={`Partner logo ${i + 1}`}
                    className="aspect-[2/1] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
              <p className="mx-auto max-w-[700px] text-violet-700 dark:text-violet-300">
                We're proud to work with leading educational institutions,
                research organizations, and technology companies to push the
                boundaries of what's possible in educational technology.
              </p>
              <Button
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-none"
                size="lg"
                asChild
              >
                <Link to="/partners">Learn More About Our Partnerships</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm rounded-full">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Ready to transform education at your institution?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'd love to hear from you and discuss how our educational
                  technology solutions can address your specific needs and
                  challenges.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Building className="h-5 w-5 text-white" />,
                      title: "Headquarters",
                      details:
                        "123 Innovation Way, Suite 400\nSan Francisco, CA 94103",
                      gradient: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-white" />,
                      title: "Email",
                      details: "info@edutechinnovations.com",
                      gradient: "from-purple-500 to-violet-500",
                    },
                    {
                      icon: <Phone className="h-5 w-5 text-white" />,
                      title: "Phone",
                      details: "(555) 123-4567",
                      gradient: "from-pink-500 to-rose-500",
                    },
                    {
                      icon: <MapPin className="h-5 w-5 text-white" />,
                      title: "Regional Offices",
                      details:
                        "New York • Chicago • Austin • London • Singapore • Sydney",
                      gradient: "from-amber-500 to-orange-500",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`p-2 rounded-full bg-gradient-to-r ${contact.gradient} flex-shrink-0`}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{contact.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {contact.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:bg-gray-800/90">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                    Request Information
                  </h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="organization"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your educational technology needs"
                      />
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none"
                      type="submit"
                    >
                      Submit Request
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      By submitting this form, you agree to our{" "}
                      <Link
                        to="/privacy"
                        className="underline underline-offset-2 text-blue-600 dark:text-blue-400"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-blue-100">
                  Join Our Community
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Ready to Transform Education?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of educational institutions that are already
                  using our technology to improve learning outcomes and prepare
                  students for the future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-blue-100 hover:text-indigo-700"
                  asChild
                >
                  <Link to="/demo">Request a Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
