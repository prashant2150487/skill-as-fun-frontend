import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Book, Calculator, Code, CodeIcon, Layout, Music } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import frontEndImage from "../../assets/frontend.jpeg"
import musicImage from "../../assets/music.jpg"
import pythonImage from "../../assets/pyhton.png"
import vedicImage from "../../assets/Vedic-Maths-01.jpg"
import mathImage from "../../assets/mathematics.jpeg"

type Course = {
  id: number;
  title: string;
  description: string;
  modules: string[];
  icon: keyof typeof courseIcons;
  linkNavigation: string;
  badgeText?: string;
  image: string;
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
      description:
        "Develop a strong foundation in mathematics, covering essential topics like Algebra, Geometry, and Calculus. This course will enhance your problem-solving skills and logical thinking, making it easier to tackle real-world mathematical challenges.",
      modules: ["Algebra", "Geometry", "Calculus"],
      icon: "Math",
      linkNavigation: "/course/math",
      badgeText: "Mathematics",
      image: frontEndImage

    },
    {
      id: 2,
      title: "Python",
      description:
        "Master Python programming from the ground up. Learn the basics, dive into Object-Oriented Programming, and explore Data Structures to build scalable and efficient applications. Ideal for beginners and experienced coders alike.",
      modules: ["Basics", "OOP", "Data Structures"],
      icon: "Python",
      linkNavigation: "/course/python",
      badgeText: "Programming",
         image: pythonImage
    },
    {
      id: 3,
      title: "Vedic Math",
      description:
        "Unlock the secrets of ancient Indian mathematics and speed up calculations using Vedic techniques. This course covers mental math tricks, Vedic Squares, and divisibility rules to help you solve complex problems in seconds.",
      modules: ["Mental Calculation", "Vedic Squares", "Divisibility"],
      icon: "Vedic Math",
      linkNavigation: "/course/vedicMath",
      badgeText: "Mathematics",
         image: vedicImage
    },
    {
      id: 4,
      title: "Guitar Course",
      description:
        "Learn to play the guitar from the basics to advanced techniques. This course covers fundamental music theory, chords, strumming patterns, and performance skills to help you play your favorite songs and compose your own music.",
      modules: [
        "Introduction to Guitar",
        "Basic Music Theory",
        "Playing Chords",
        "Melodies & Picking Techniques",
        "Strumming & Rhythm",
        "Barre & Power Chords",
        "Performance & Next Steps",
        
          

      ],
      icon: "Music",
      linkNavigation: "/course/guitar",
      badgeText: "Music",
      image: musicImage
    },
    {
      id: 5,
      title: "Frontend Development",
      description:
        "Learn how to build modern and responsive web interfaces using HTML, CSS, JavaScript, and React. This course will guide you through designing stunning websites, optimizing performance, and creating interactive user experiences.",
      modules: ["HTML & CSS", "JavaScript", "React"],
      icon: "Frontend Development",
      linkNavigation: "/course/frontend",
      badgeText: "Web Development",
      image: mathImage
    },
  ]);

  return (
    <div className="container mx-auto p-4 " id="our-courses">
      <h2 className="text-4xl font-bold mb-3 text-center">
        Innovative Learning Programs
      </h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-10">
        Project-based curriculum with real-world applications and hands-on
        learning experiences
      </p>
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      <CardHeader className={`p-6 ${getGradientClass(course.icon)}`}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover rounded mb-4"
        />
        <div className="flex justify-between items-center">
          
          <CardTitle className="text-2xl font-bold text-white">
            {course.title}
          </CardTitle>
          <Icon className="w-8 h-8 text-white" />
          <div className="absolute top-0 left-0">
            <Badge className="text-white">
              <CodeIcon className="w-4 h-4 mr-1" />
              {course?.badgeText}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardDescription className="text-sm mb-4">
          {course.description}
        </CardDescription>
        <Link to={course?.linkNavigation}>
          <Button variant="outline" className="w-full">
            View Modules
          </Button>
        </Link>
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
