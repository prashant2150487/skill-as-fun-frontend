import React from "react";
import img1 from "../../assets/studentProfile/arav.jpeg";
import img2 from "../../assets/studentProfile/Darsh.jpeg";
import img3 from "../../assets/studentProfile/sarthak.jpeg";
import img4 from "../../assets/studentProfile/akshaj.jpeg";
import img5 from "../../assets/studentProfile/Tanvi.jpeg";
import img6 from "../../assets/studentProfile/anaisha.jpeg";
import img7 from "../../assets/studentProfile/arshit.jpeg";
import img8 from "../../assets/studentProfile/medhansh.jpeg";
import img9 from "../../assets/studentProfile/Astha.jpeg";
import img10 from "../../assets/studentProfile/Rudransh.jpeg";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialCardProps {
  imageSrc: string;
  quote: string;
  studentName: string;
  studentClass: string;
  studentSchool: string;
}

const testimonials = [
  {
    imageSrc: img1,
    quote:
      "SkillAsFun turned coding into something I actually look forward to! I’ve built games and apps that I once thought were impossible.",
    studentName: "Arav Sachan",
    studentClass: "Class 6",
    studentSchool: "Delhi Public School, Noida",
  },
  {
    imageSrc: img2,
    quote:
      "I always thought programming was too hard, but SkillAsFun made it fun and understandable. Now I can bring my creative ideas to life!",
    studentName: "Darsh Sachan",
    studentClass: "Class 8",
    studentSchool: "Amity International School, Noida",
  },
  {
    imageSrc: img3,
    quote:
      "Thanks to SkillAsFun, coding feels like storytelling with technology. I’ve built websites and animations I’m really proud of!",
    studentName: "Sarthak Sachan",
    studentClass: "Class 8",
    studentSchool: "Puranchandra Vidyaniketan, Kanpur",
  },
  {
    imageSrc: img4,
    quote:
      "Learning to code with SkillAsFun is so exciting! I’ve created projects that actually work—and it’s the best feeling ever.",
    studentName: "Akshaj Singh",
    studentClass: "Class 5",
    studentSchool: "Father Agnel School, Noida",
  },
  {
    imageSrc: img5,
    quote:
      "SkillAsFun helped me discover a new passion! I love designing games and stories that my friends enjoy playing.",
    studentName: "Tanvi Rajput",
    studentClass: "Class 7",
    studentSchool: "Apeejay School, Noida",
  },
  {
    imageSrc: img6,
    quote:
      "Coding used to scare me, but not anymore! SkillAsFun made it simple and fun. Now I build apps and websites with confidence.",
    studentName: "Anaisha Niranjan",
    studentClass: "Class 6",
    studentSchool: "Delhi Public School, Noida",
  },
  {
    imageSrc: img7,
    quote:
      "With SkillAsFun, I learned to code step-by-step and had a blast doing it. I’m now building apps I once only dreamed of!",
    studentName: "Arshit Sachan",
    studentClass: "Class 6",
    studentSchool: "The Millennium School, Noida",
  },
  {
    imageSrc: img8,
    quote:
      "I thought coding was just typing stuff on a screen—but SkillAsFun showed me it’s a creative superpower. I love building my own digital creations!",
    studentName: "Medhansh Nagpal",
    studentClass: "Class 8",
    studentSchool: "Ahlcon International School, Delhi",
  },
  {
    imageSrc: img9,
    quote:
      "Before SkillAsFun, I didn’t know where to start with coding. Now, I’ve created my own mini games and websites. It feels amazing!",
    studentName: "Astha Sachan",
    studentClass: "Class 6",
    studentSchool: "Somerville School, Noida",
  },
  {
    imageSrc: img10,
    quote:
      "SkillAsFun made coding feel like a fun challenge, not a boring subject. Every session feels like unlocking a new superpower!",
    studentName: "Rudransh Sachan",
    studentClass: "Class 6",
    studentSchool: "Cambridge School, Noida",
  },
  // }
  // {
  //   imageSrc: img11,
  //   quote:"",
  //   studentName: "",
  //   studentClass: "",
  //   studentSchool: "",

  // },
  // {
  //   imageSrc: img11,
  //   quote:"",
  //   studentName: "",
  //   studentClass: "",
  //   studentSchool: "",

  // }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  studentName,
  studentClass,
  studentSchool,
}) => (
  <div className="flex flex-col items-center w-full h-full sm:max-w-sm bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
    <div className="w-full pt-[75%] relative">
      <img
        src={imageSrc}
        alt={`${studentName}'s portrait`}
        className="w-full h-full object-cover absolute top-0 inset-0"
      />
    </div>

    <div className="p-4 sm:p-5 w-full relative">
      <div className="mb-4">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl italic text-gray-800 font-light leading-relaxed line-clamp-4">
          "{quote}"
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">
          {studentName}
          <span className="font-normal text-gray-700">, {studentClass}</span>
        </h3>
        <p className="text-xs sm:text-sm truncate text-gray-600">
          {studentSchool}
        </p>
      </div>
    </div>
  </div>
);

export default function TestimonialCards() {
  return (
    <>
      <div className="mx-auto px-0 sm:px-6 lg:px-16 py-8 container bg-white">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="ml-0 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </>
  );
}
