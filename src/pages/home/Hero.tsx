import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Unlock Your Potential with SkillAsFun Pro</h1>
        <p className="text-xl md:text-2xl mb-8">
          Expert tutoring in Coding, Math, Music, and Vedic Mathematics for students from 6th grade to undergraduate
          level.
        </p>
        <Button size="lg" variant="secondary">
          Start Learning Today
        </Button>
      </div>
    </section>
  )
}

