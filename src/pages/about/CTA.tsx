 import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
 
 const CTA = () => {
   return (
  <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-blue-100">
                  Join Our Community
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Ready to Transform Education?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of educational institutions that are already
                  using our technology to improve learning outcomes and prepare
                  students for the future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-blue-100 hover:text-indigo-700"
                  asChild
                >
                  <Link to="/demo">Request a Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className=" text-indigo-600 hover:bg-blue-100 hover:text-black"
                  asChild
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  
  </>
   )
 }
 
 export default CTA