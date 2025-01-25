import React from "react";
import img1 from "../../assets/homePageImages/stu1.png";
import img2 from "../../assets/homePageImages/stu2.png";
import img3 from "../../assets/homePageImages/stu3.png";
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
    studentName: "Rudransh Sehrawat",
    studentClass: "Class 7",
    studentSchool: "Amity International School, Noida",
  },
  {
    imageSrc: img2,
    quote:
      "I used to think programming was complicated, but SkillAsFun made it fun and easy. Now I'm creating my own interactive projects!",
    studentName: "Ananya Sharma",
    studentClass: "Class 8",
    studentSchool: "Delhi Public School, R.K. Puram",
  },
  {
    imageSrc: img3,
    quote:
      "From zero to coding hero! SkillAsFun helped me understand programming concepts and build real-world applications that amaze my friends.",
    studentName: "Arjun Patel",
    studentClass: "Class 9",
    studentSchool: "The Shri Ram School, Gurgaon",
  },
];
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  studentName,
  studentClass,
  studentSchool,
}) => (
  <div className="flex flex-col items-center w-[366px] bg-white gap-0 rounded-3xl border border-[#000000] px-4 py-7 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
    <div className="mb-4 overflow-hidden">
      <img
        src={imageSrc}
        alt={`${studentName}'s portrait`}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="mb-4 text-lg font-normal text-[#000000] ">&quot;{quote}&quot;</p>
    <div className="text-left w-full">
      <h3 className="font-normal text-left max-w-fit">
        {studentName}
        {", "}
        {studentClass}
      </h3>
      <p className="text-sm text-gray-600">{studentSchool}</p>
    </div>
  </div>
);

export default function TestimonialCards() {
  return (
    <div className="container py-8 g-0 mx-auto ">
      <div className="flex justify-center gap-4  md:gap-8 flex-col items-center md:flex-row">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
