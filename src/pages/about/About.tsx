import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Award,
  Users,
  BarChart,
  Globe,
  Clock,
  CheckCircle,
  MessageSquare,
  Building,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import MissionVision from "./MissionVision";
import OurJourney from "./OurJourney";
import OurCoreValue from "./OurCoreValue";
import OurApporach from "./OurApporach";
import LeadershipTeam from "./LeadershipTeam";
import OurAchivements from "./OurAchivements";
import ClientSections from "./ClientSections";
import OurPartners from "./OurPartners";
import ContactTouch from "./ContactTouch";
import CTA from "./CTA";
export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white"></div>
              <div className="absolute top-[20%] right-[5%] w-[30%] h-[30%] rounded-full bg-white"></div>
              <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center relative z-10">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-sm font-medium">
                  Transforming Education Since 2024
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  About SkillAsFun
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Transforming education through innovative technology solutions
                </p>
              </div>
              <div className="space-x-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-blue-100 hover:text-indigo-700 pointer-events-none"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 pointer-events-none" asChild>
                <Link to="/solutions">Our Solutions</Link>
              </Button> */}
              </div>
            </div>
          </div>
        </section>
        {/* Mission & Vision */}
        <MissionVision />
        {/* Our Story */}
        <OurJourney />
        {/* Core Values */}
        <OurCoreValue />
        {/* Our Approach */}
        <OurApporach />
        {/* Our Team */}
        <LeadershipTeam />
        {/* Achievements */}
        <OurAchivements />
        {/* Testimonials */}
        <ClientSections />
        {/* Partners */}
        <OurPartners />
        {/* Contact */}
        <ContactTouch />

        {/* CTA */}
      <CTA/>
      </div>
    </DefaultLayout>
  );
}
