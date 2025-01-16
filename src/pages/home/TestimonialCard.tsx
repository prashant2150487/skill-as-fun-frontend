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
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  studentName,
  studentClass,
  studentSchool,
}) => (
<div className="flex flex-col items-center w-[366px] bg-white gap-0 rounded-lg border-2 border-[#000000] m-auto p-4">

    <div className="mb-4 overflow-hidden ">
      <img
        src={imageSrc}
        alt={`${studentName}'s portrait`}
        // width={307}
        // height={222}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="mb-4 text-center text-gray-700">&quot;{quote}&quot;</p>
    <div className="text-center">
      <h3 className="font-semibold">{studentName}</h3>
      <p className="text-sm text-gray-600">{studentClass}</p>
      <p className="text-sm text-gray-600">{studentSchool}</p>
    </div>
  </div>
);

export default function TestimonialCards() {
  const testimonials = [
    {
      imageSrc: img1,
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Rudransh Sehrawat",
      studentClass: "Class 7",
      studentSchool: "Amity International School, Noida",
    },
    {
      imageSrc: img2,
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Ananya Sharma",
      studentClass: "Class 8",
      studentSchool: "Delhi Public School, R.K. Puram",
    },
    {
      imageSrc: img3,
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Arjun Patel",
      studentClass: "Class 9",
      studentSchool: "The Shri Ram School, Gurgaon",
    },
  ];

  return (
    <div className="container  px-4 py-8 g-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
