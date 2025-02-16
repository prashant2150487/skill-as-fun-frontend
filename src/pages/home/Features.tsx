import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Calculator, Music, Brain } from "lucide-react"

const features = [
  {
    title: "Coding",
    description: "Learn programming languages and develop problem-solving skills.",
    icon: Code,
  },
  {
    title: "Mathematics",
    description: "Master mathematical concepts from basic to advanced levels.",
    icon: Calculator,
  },
  {
    title: "Music",
    description: "Explore the world of music theory and instrument playing.",
    icon: Music,
  },
  {
    title: "Vedic Mathematics",
    description: "Discover ancient Indian techniques for rapid mental calculations.",
    icon: Brain,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

