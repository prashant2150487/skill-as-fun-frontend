import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const CourseDescription = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-blue-600">Python for Kids</h1>
          <p className="mt-2 text-xl text-gray-600">
            Fun, Interactive Coding Course
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Course Overview
          </h2>
          <p className="text-lg text-gray-600">
            This Python course for kids is designed to be fun, interactive, and
            easy to understand. It focuses on learning Python through games,
            stories, and interactive projects. Gradually, the course introduces
            more advanced logic and small game development. The main focus is on
            fun, interactive learning, and hands-on coding with visual elements
            for engagement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Course Modules
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module, index) => (
              <AccordionItem value={`module-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:bg-gray-400 px-2">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Additional Features
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li>Fun quizzes and coding challenges</li>
            <li>Interactive exercises and projects</li>
            <li>Gamified learning experience</li>
          </ul>
        </section>

        {/* <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Start?
          </h2>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Enroll Now
          </Button>
        </section> */}
      </main>

      
    </div>
  );
};

const modules = [
  {
    title: "Introduction to Python",
    content: [
      "What is Python? (Story-based introduction)",
      "Why learn Python?",
      "Installing Python and setting up an editor (IDLE, Thonny, or Jupyter)",
      'Fun exercise: Writing your first Python program: print("Hello, World!")',
    ],
  },
  {
    title: "Understanding Basics",
    content: [
      "Variables and Data Types (numbers, strings, booleans)",
      "Simple Input and Output (input() and print())",
      "Basic Operators (+, -, *, /, %, //, **)",
      "Fun exercises: Making a talking robot, Temperature converter",
    ],
  },
  {
    title: "Introduction to Turtle Graphics",
    content: [
      "Drawing shapes with Python's Turtle module",
      "Controlling movement with loops",
      "Fun exercise: Drawing moving colorful pictures / graphics",
    ],
  },
  {
    title: "Conditional Statements: Making Decisions",
    content: [
      "If-Else Statements (Making decisions)",
      "Using comparison operators (==, !=, >, <, >=, <=)",
      "Nested If-Else statements",
      "Fun exercises: Even/Odd Checker, Age Validator Game, Text-based adventure game",
    ],
  },
  {
    title: "Loops: Making Things Repeat",
    content: [
      "For Loop (Counting and iterating)",
      "While Loop (Repeating until a condition is met)",
      "Breaking out of loops (break and continue)",
      "Fun exercises: Multiplication tables, Number guessing game, Countdown timer",
    ],
  },
  {
    title: "Functions: Making Code Reusable",
    content: [
      "Creating and using functions (def)",
      "Function parameters and return values",
      "Fun exercises: Calculator program, Story Generator, Joke-telling program",
    ],
  },
  {
    title: "Lists and Tuples: Storing Multiple Values",
    content: [
      "Creating and accessing lists",
      "Adding, removing, and modifying list elements",
      "Sorting and looping through lists",
      "Fun exercise: Grocery list manager, Contact Book",
    ],
  },
  {
    title: "Dictionaries: Key-Value Pairs",
    content: [
      "Understanding dictionaries",
      "Adding and modifying dictionary elements",
      "Using loops with dictionaries",
      "Fun exercise: Creating a mini-database",
    ],
  },
  {
    title: "Introduction to Strings and String Manipulation",
    content: [
      "Working with text in Python",
      "String functions (len(), .upper(), .lower(), .replace())",
      "Fun exercise: Simple chatbot",
    ],
  },
  {
    title: "Introduction to File Handling",
    content: [
      "Reading and writing to text files",
      "Fun exercise: Writing a diary/journal program, To-Do List application",
    ],
  },
  {
    title: "Introduction to Pygame (Making Games!)",
    content: [
      "Setting up Pygame",
      "Drawing shapes and images",
      "Adding user input and movement",
      "Drawing and moving objects",
      "Adding sounds and collisions",
      "Fun exercise: Creating a simple game (e.g., Catch the Ball or Flappy Bird clone)",
    ],
  },
  {
    title: "Debugging and Problem-Solving",
    content: [
      "Common errors in Python",
      "Debugging techniques",
      "Fun exercise: Practicing through simple coding challenges",
    ],
  },
  {
    title: "Mini Games & Fun Projects",
    content: [
      "Creating a basic interactive quiz",
      "Simple animations with Turtle",
      "Fun Project: Creating a simple maze",
    ],
  },
  {
    title: "Final Projects and Certification",
    content: [
      "Kids create their own project (game, quiz, or mini-app)",
      "Showcasing and presenting their work",
      "Course completion certificate",
    ],
  },
]


export default CourseDescription;
