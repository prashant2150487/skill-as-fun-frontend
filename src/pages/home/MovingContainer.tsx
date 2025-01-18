const items = [
  {
    name: "Trusted by 100+ Students from 10+ schools",
  },
  {
    name: "Trusted by 100+ Students from 10+ schools",
  },
  {
    name: "Trusted by 100+ Students from 10+ schools",
  },
];

const QuoteScroll = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll text-white">
        {items.map((item, index) => (
          <div
            key={index + "set1"}
            className="min-w-max py-8 px-8 bg-[#2331A6]  shadow-lg"
          >
            <p className="text-center text-2xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set2"}
            className="min-w-max py-8 px-8 bg-[#2331A6]  shadow-lg"
          >
            <p className="text-center text-2xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set3"}
            className="min-w-max py-8 px-8 bg-[#2331A6]  shadow-lg"
          >
            <p className="text-center text-2xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set4"}
            className="min-w-max py-8 px-8 bg-[#2331A6]  shadow-lg"
          >
            <p className="text-center text-2xl font-bold">{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + "set5"}
            className="min-w-max py-8 px-8 bg-[#2331A6]  shadow-lg"
          >
            <p className="text-center text-2xl font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteScroll;
