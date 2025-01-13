
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
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
      <img
        src={imageSrc}
        alt={`${studentName}'s portrait`}
        width={128}
        height={128}
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
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fstudent-girl&psig=AOvVaw3adRcBB6N4EDIH4Oz50FKk&ust=1736875124926000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjdhZqa84oDFQAAAAAdAAAAABAE",
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Rudransh Sehrawat",
      studentClass: "Class 7",
      studentSchool: "Amity International School, Noida",
    },
    {
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fstudent-girl&psig=AOvVaw3adRcBB6N4EDIH4Oz50FKk&ust=1736875124926000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjdhZqa84oDFQAAAAAdAAAAABAE",
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Ananya Sharma",
      studentClass: "Class 8",
      studentSchool: "Delhi Public School, R.K. Puram",
    },
    {
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fstudent-girl&psig=AOvVaw3adRcBB6N4EDIH4Oz50FKk&ust=1736875124926000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjdhZqa84oDFQAAAAAdAAAAABAE",
      quote:
        "He understood exactly what I was going through and helped me craft a standout application. Thanks to him, I'm now at my dream school, Harvard!",
      studentName: "Arjun Patel",
      studentClass: "Class 9",
      studentSchool: "The Shri Ram School, Gurgaon",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
