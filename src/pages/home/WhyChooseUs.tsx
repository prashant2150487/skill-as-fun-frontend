import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Trophy, Zap } from "lucide-react"

const reasons = [
  {
    title: "Expert Instructors",
    description: "Learn from passionate educators with years of experience in their fields.",
    icon: Users,
  },
  {
    title: "Personalized Learning",
    description: "Tailored curriculum to meet individual student needs and learning styles.",
    icon: CheckCircle,
  },
  {
    title: "Proven Results",
    description: "Our students consistently achieve higher grades and test scores.",
    icon: Trophy,
  },
  {
    title: "Innovative Methods",
    description: "Blend of traditional techniques and cutting-edge educational technology.",
    icon: Zap,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduTech Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index}>
              <CardHeader>
                <reason.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

