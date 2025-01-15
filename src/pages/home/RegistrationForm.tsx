import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background bg-slate-500">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-1 grid-cols-1 md:justify-between md:grid-cols-2 lg:gap-2 ">
          <div className="flex space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center md:text-left">
                From Spells to Scripts: SkillWizard Turns Play into Programming
                Power!
              </h1>
              <p className="max-w-[600px] text-bla md:text-xl dark:text-zinc-400 text-center md:text-left">
                Master coding fundamentals with SkillWizard's fun, hands-on
                programs designed just for kids.
              </p>
            </div>
          </div>
          <Card className="w-full max-w-md mx-auto md:ml-auto">
            <CardHeader>
              <CardTitle>Register Now</CardTitle>
              <CardDescription>
                Create your account in just a few steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    {/* <Label htmlFor="name">Fu</Label> */}
                    <Input
                      placeholder="Full Name of your child"
                      type="text"
                      required
                    />
                    <Input placeholder="Guardian Name" type="text" required />
                    <Input
                      placeholder="Whatsapp number"
                      type="number"
                      required
                    />
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-7 bg-[#2E31A6]">
                Schedule Demo Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
