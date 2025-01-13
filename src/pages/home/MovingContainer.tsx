const items = [
  {
    quote: "This is an amazing service!",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "Highly recommend to everyone.",
    name: "Jane Smith",
    title: "Product Manager",
  },
  {
    quote: "Fantastic experience overall.",
    name: "Alice Brown",
    title: "Designer",
  },
];

const QuoteScroll = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-max p-4 m-2 bg-gray-200 rounded-xl shadow-lg"
          >
            <p className="text-sm text-center italic">"{item.quote}"</p>
            <p className="text-center font-bold">{item.name}</p>
            <p className="text-center text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
        {/* Duplicate the items for continuous scroll */}
        {items.map((item, index) => (
          <div
            key={index + items.length}
            className="min-w-max p-4 m-2 bg-gray-200 rounded-xl shadow-lg"
          >
            <p className="text-sm text-center italic">"{item.quote}"</p>
            <p className="text-center font-bold">{item.name}</p>
            <p className="text-center text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + items.length}
            className="min-w-max p-4 m-2 bg-gray-200 rounded-xl shadow-lg"
          >
            <p className="text-sm text-center italic">"{item.quote}"</p>
            <p className="text-center font-bold">{item.name}</p>
            <p className="text-center text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + items.length}
            className="min-w-max p-4 m-2 bg-gray-200 rounded-xl shadow-lg"
          >
            <p className="text-sm text-center italic">"{item.quote}"</p>
            <p className="text-center font-bold">{item.name}</p>
            <p className="text-center text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteScroll;
