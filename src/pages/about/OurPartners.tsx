import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import { Link } from "react-router-dom";

const OurPartners = () => {
  return (
    <>
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
            {/* {Array.from({ length: 6 }).map((_, i) => (
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
            ))} */}
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
    </>
  );
};

export default OurPartners;
