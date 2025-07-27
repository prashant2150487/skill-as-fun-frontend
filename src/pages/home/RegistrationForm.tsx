import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import HarshLoader from "react-spinners/BeatLoader";
import { toast } from "sonner";
import axiosInstance from "@/api/axios";
const signupSchema = z.object({
  childName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  guardianName: z
    .string()
    .min(2, { message: "Guardian name must be at least 2 characters long" }),
  whatsAppNumber: z
    .string()
    .min(10, { message: "Whatsapp number must be at least 10 digits long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});
type SignupFormData = z.infer<typeof signupSchema>;
export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      childName: "",
      guardianName: "",
      whatsAppNumber: "",
      email: "",
    },
  });
  const onSubmit = async (data: SignupFormData) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<{ message: string }>(
        "/demo",
        data
      );
      console.log(data, "jkgdk ");
      form.reset();
      toast.success(response?.data?.message, {
        description: `Submitted at: ${new Date().toLocaleString()}`,
        action: {
          label: "Dismiss",
          onClick: () => console.log("Toast dismissed"),
        },
      });
    } catch (error: any) {
      console.error(
        "Error during form submission:",
        error.response?.data || error.message
      );
      setLoading(false);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-80 z-50">
        <HarshLoader color="#E91E63" loading={loading} size={15} />
      </div>
    );
  }
  console.log(form,"form")
  return (
    <section className="w-full py-12 md:py-20 lg:py-20 xl:py-30 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-1 grid-cols-1 md:justify-between md:grid-cols-2 lg:gap-2">
          {/* Left Section */}
          <div className="flex space-y-4">
            <div className="space-y-4 flex flex-col justify-center pb-3">
              <h1 className="text-4xl text-left font-bold tracking-tighter sm:text-5xl xl:text-6xl md:text-left">
                From Spells to Scripts: Where Fun Fuels{" "}
                <span className="text-blue-900">Future-Ready </span>Skills!
              </h1>
              <p className="max-w-[600px] text-black md:text-xl dark:text-zinc-400 text-center md:text-left ">
                Master coding fundamentals with us as fun, hands-on programs
                designed just for kids.
              </p>
            </div>
          </div>

          {/* Right Section: Registration Form */}
          <Card className="w-full max-w-md ml-auto shadow-2xl">
            <CardHeader className="py-5 relative"></CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 max-w-md mx-auto"
                >
                  {/* Child Name */}
                  <FormField
                    control={form.control}
                    name="childName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full Name of your child"
                            {...field}
                            className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Guardian Name */}
                  <FormField
                    control={form.control}
                    name="guardianName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Guardian Name"
                            {...field}
                            className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Whatsapp Number */}
                  <FormField
                    control={form.control}
                    name="whatsAppNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Whatsapp Number"
                            {...field}
                            className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                            className="border border-[#4039E9] rounded-full px-5 h-12 placeholder-[#9D9D9D]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full py-7 bg-[#2E31A6]">
                    Schedule Demo Now!
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
