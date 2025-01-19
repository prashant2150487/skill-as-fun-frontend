import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function HeroSection() {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  console.log(formattedDate);
  const handleSubmit = () => {
    toast.success("Your form has been submitted", {
      description: formattedDate,
      action: {
        label: <X />,
        onClick: () => console.log("a"),
      },
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-1 grid-cols-1 md:justify-between md:grid-cols-2 lg:gap-2 ">
          <div className="flex space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center md:text-left">
                From Spells to Scripts: Skill as fun Turns Play into Programming
                Power!
              </h1>
              <p className="max-w-[600px] text-bla md:text-xl dark:text-zinc-400 text-center md:text-left">
                Master coding fundamentals with SkillWizard's fun, hands-on
                programs designed just for kids.
              </p>
            </div>
          </div>
          <Card className="w-full max-w-md mx-auto  md:ml-auto shadow-2xl">
            <CardHeader className="py-12 relative ">
              <div className="max-w-fit flex flex-col items-center justify-center row-gap-10">
                <CardTitle className="border border-neutral-700 w-fit text-3xl rounded-full px-4 py-2 font-normal">
                  Register Now
                </CardTitle>
                <CardTitle className="border border-neutral-700 w-fit text-3xl rounded-full px-4 py-2 font-normal -rotate-12 bg-white -mr-52">
                  Today
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    {/* <Label htmlFor="name">Fu</Label> */}
                    <Input
                      className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                      placeholder="Full Name of your child"
                      type="text"
                      required
                    />
                    <Input
                      className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                      placeholder="Guardian Name"
                      type="text"
                      required
                    />
                    <Input
                      className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                      placeholder="Whatsapp number"
                      type="number"
                      required
                    />
                    <Input
                      className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full py-7 bg-[#2E31A6]"
                onClick={handleSubmit}
              >
                Schedule Demo Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
