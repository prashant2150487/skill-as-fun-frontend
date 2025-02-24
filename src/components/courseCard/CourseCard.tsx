import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Book, Calculator, Code, Layout, Music } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type Course = {
  id: number;
  title: string;
  description: string;
  modules: string[];
  icon: keyof typeof courseIcons;
};
const courseIcons = {
  Math: Calculator,
  Python: Code,
  "Vedic Math": Book,
  Music: Music,
  "Frontend Development": Layout,
};
export default function CourseCards() {
  const [courses] = useState<Course[]>([
    {
      id: 1,
      title: "Math",
      description: "Develop a strong foundation in mathematics, covering essential topics like Algebra, Geometry, and Calculus. This course will enhance your problem-solving skills and logical thinking, making it easier to tackle real-world mathematical challenges.",
      modules: ["Algebra", "Geometry", "Calculus"],
      icon: "Math",
    },
    {
      id: 2,
      title: "Python",
      description: "Master Python programming from the ground up. Learn the basics, dive into Object-Oriented Programming, and explore Data Structures to build scalable and efficient applications. Ideal for beginners and experienced coders alike.",
      modules: ["Basics", "OOP", "Data Structures"],
      icon: "Python",
    },
    {
      id: 3,
      title: "Vedic Math",
      description: "Unlock the secrets of ancient Indian mathematics and speed up calculations using Vedic techniques. This course covers mental math tricks, Vedic Squares, and divisibility rules to help you solve complex problems in seconds.",
      modules: ["Mental Calculation", "Vedic Squares", "Divisibility"],
      icon: "Vedic Math",
    },
    {
      id: 4,
      title: "Music",
      description: "Explore the fascinating world of music. From understanding music theory to learning instrument basics and composing your own tunes, this course is designed for aspiring musicians and enthusiasts who want to enhance their musical creativity.",
      modules: ["Music Theory", "Instrument Basics", "Composition"],
      icon: "Music",
    },
    {
      id: 5,
      title: "Frontend Development",
      description: "Learn how to build modern and responsive web interfaces using HTML, CSS, JavaScript, and React. This course will guide you through designing stunning websites, optimizing performance, and creating interactive user experiences.",
      modules: ["HTML & CSS", "JavaScript", "React"],
      icon: "Frontend Development",
    },
  ]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
function CourseCard({ course }: { course: Course }) {
  const Icon = courseIcons[course.icon];
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className={`p-6 ${getGradientClass(course.icon)}`}>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-white">
            {course.title}
          </CardTitle>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardDescription className="text-sm mb-4">{course.description}</CardDescription>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Modules
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{course.title} Modules</DialogTitle>
            </DialogHeader>
            <ul className="list-disc pl-6">
              {course.modules.map((module, index) => (
                <li key={index} className="mb-2">
                  {module}
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
function getGradientClass(icon: keyof typeof courseIcons) {
  switch (icon) {
    case "Math":
      return "bg-gradient-to-r from-blue-500 to-blue-700";
    case "Python":
      return "bg-gradient-to-r from-green-500 to-green-700";
    case "Vedic Math":
      return "bg-gradient-to-r from-yellow-500 to-yellow-700";
    case "Music":
      return "bg-gradient-to-r from-purple-500 to-purple-700";
    case "Frontend Development":
      return "bg-gradient-to-r from-red-500 to-red-700";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-700";
  }
}
