import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Prashant Sachan ",
    role: "SDE-III (IIT Kharagpur)",
    content:
      "Teaching at SkillAsFun has been incredibly rewarding. The platform allows me to reach students globally and make a real impact.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Prof. Arapan",
    role: "Computer Science Educator",
    content:
      "The innovative tools provided by SkillAsFun have revolutionized how I teach coding. It's a joy to see students progress so quickly.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ms. Aisha Patel",
    role: "Music Theory Expert",
    content:
      "EduTech Pro's approach to music education is unique. I'm able to blend traditional methods with modern technology seamlessly.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TeacherTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Exceptional Educators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

