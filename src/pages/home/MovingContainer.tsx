const items = [
  {
    name: "100+ Young Programmers Trained Successfully",
  },
  {
    name: "10+ Schools Partner with SkillAsFun",
  },
  {
    name: "Interactive Live Coding Sessions",
  },
  {
    name: "Project-Based Learning Model",
  },
  {
    name: "Personalized Learning Approach",
  },
];

const QuoteScroll = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll text-white">
        {items.map((item, index) => (
          <div
            key={index + "set1"}
            className="min-w-max py-8 px-8 bg-[#2331A6]"
          >
            <p className="text-center text-xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set2"}
            className="min-w-max py-8 px-8 bg-[#2331A6]"
          >
            <p className="text-center text-xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set3"}
            className="min-w-max py-8 px-8 bg-[#2331A6]"
          >
            <p className="text-center text-xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set4"}
            className="min-w-max py-8 px-8 bg-[#2331A6]"
          >
            <p className="text-center text-xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set5"}
            className="min-w-max py-8 px-8 bg-[#2331A6]"
          >
            <p className="text-center text-xl font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteScroll;
