import React from "react";
import img1 from "../../assets/studentProfile/arav.jpeg";
import img2 from "../../assets/studentProfile/Darsh.jpeg";
import img3 from "../../assets/studentProfile/sarthak.jpeg";
import img4 from "../../assets/studentProfile/akshaj.jpeg";
import img5 from "../../assets/studentProfile/Tanvi.jpeg";
import img6 from "../../assets/studentProfile/anaisha.jpeg";
import Autoplay from "embla-carousel-autoplay"


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
      "SkillAsFun transformed coding from a mystery to my superpower! I learned to create games and apps that I never thought I could build before.",
    studentName: "Arav Sachan",
    studentClass: "Class 6",
    studentSchool: "Delhi Public School, Noida",
  },
  {
    imageSrc: img2,
    quote:
      "I used to think programming was complicated, but SkillAsFun made it fun and easy. Now I'm creating my own interactive projects!",
    studentName: "Darsh Sachan",
    studentClass: "Class 8",
    studentSchool: "Amity International School, Noida",
  },
  {
    imageSrc: img3,
    quote:
      "SkillAsFun made coding simple and engaging. I love how I can now build my own websites and animations with confidence!",
    studentName: "Sarthak Sachan",
    studentClass: "Class 8",
    studentSchool: "Puranchandra Vidyaniketan, Kanpur",
  },
  {
    imageSrc: img4,
    quote:
      "I never thought coding could be this exciting! SkillAsFun helped me turn my ideas into working projects, and I enjoy every moment of learning.",
    studentName: "Akshaj Singh",
    studentClass: "Class 5",
    studentSchool: "Father Agnel School, Noida",
  },
  {
    imageSrc: img5,
    quote:
      "With SkillAsFun, I discovered my passion for coding. Now, I can build interactive stories and games that my friends love to play!",
    studentName: "Tanvi Rajput",
    studentClass: "Class 7",
    studentSchool: "Apeejay School, Noida",
  },
  {
    imageSrc: img6,
    quote:
      "Coding was intimidating at first, but SkillAsFun made it so easy! Now, I can create apps and websites that bring my ideas to life.",
    studentName: "Anaisha Niranjan",
    studentClass: "Class 6",
    studentSchool: "Delhi Public School, Noida",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  studentName,
  studentClass,
  studentSchool,
}) => (
  <div className="flex flex-col items-center w-full sm:max-w-sm bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
    <div className="w-full pt-[75%] relative">
      <img
        src={imageSrc}
        alt={`${studentName}'s portrait`}
        className="w-full h-full object-cover absolute top-0 inset-0"
      />
    </div>

    <div className="p-4 sm:p-5 w-full">
      <div className="mb-4">
        <p className="text-sm sm:text-base lg:text-lg italic text-gray-800 font-light leading-relaxed line-clamp-4">
          "{quote}"
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">
          {studentName}
          <span className="font-normal text-gray-700">, {studentClass}</span>
        </h3>
        <p className="text-xs sm:text-sm truncate text-gray-600">{studentSchool}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialCards() {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-8">
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
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                <TestimonialCard  {...testimonial} />
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
