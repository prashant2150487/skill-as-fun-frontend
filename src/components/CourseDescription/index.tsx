import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState } from "react";

const CourseDescription = () => {
  const [openModule, setOpenModule] = useState("module-0");
  const { courseId } = useParams<{
    courseId: "python" | "math" | "guitar" | "frontend" | "vedicMath";
  }>();
  if (!courseId || !courses[courseId]) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-red-500">
        Course not found.
      </div>
    );
  }

  console.log(courseId);
  return (
    <div className="min-h-screen bg-gradient-to-b bg-white mt-4">
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-blue-600">Python for Kids</h1>
          <p className="mt-2 text-xl text-gray-600">
            Fun, Interactive Coding Course
          </p>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        {/* <section className="mb-12">
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
        </section> */}

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Course Modules
          </h2>
          <Accordion
            type="single"
            className="w-full"
            value={openModule}
            onValueChange={setOpenModule}
          >
            {courses[courseId]?.map((module, index) => (
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

        {/* <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Additional Features
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li>Fun quizzes and coding challenges</li>
            <li>Interactive exercises and projects</li>
            <li>Gamified learning experience</li>
          </ul>
        </section> */}

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

const courses = {
  python: [
    {
      title: "Module 1: Introduction to Python",
      content: [
        "What is Python? (Story-based introduction)",
        "Why learn Python?",
        "Installing Python and setting up an editor (IDLE, Thonny, or Jupyter)",
        'Fun exercise: Writing your first Python program: print("Hello, World!")',
      ],
    },
    {
      title: "Module 2: Understanding Basics",
      content: [
        "Variables and Data Types (numbers, strings, booleans)",
        "Simple Input and Output (input() and print())",
        "Basic Operators (+, -, *, /, %, //, **)",
        "Fun exercises: Making a talking robot, Temperature converter",
      ],
    },
    {
      title: "Module 3: Introduction to Turtle Graphics",
      content: [
        "Drawing shapes with Python's Turtle module",
        "Controlling movement with loops",
        "Fun exercise: Drawing moving colorful pictures / graphics",
      ],
    },
    {
      title: "Module 4: Conditional Statements : Making Decisions",
      content: [
        "If-Else Statements (Making decisions)",
        "Using comparison operators (==, !=, >, <, >=, <=)",
        "Nested If-Else statements",
        "Fun exercises: Even/Odd Checker, Age Validator Game, Text-based adventure game",
      ],
    },
    {
      title: "Module 5: Loops : Making Things Repeat",
      content: [
        "For Loop (Counting and iterating)",
        "While Loop (Repeating until a condition is met)",
        "Breaking out of loops (break and continue)",
        "Fun exercises: Multiplication tables, Number guessing game, Countdown timer",
      ],
    },
    {
      title: "Module 6: Functions : Making Code Reusable",
      content: [
        "Creating and using functions (def)",
        "Function parameters and return values",
        "Fun exercises: Calculator program, Story Generator, Joke-telling program",
      ],
    },
    {
      title: "Module 7: Lists and Tuples : Storing Multiple Values",
      content: [
        "Creating and accessing lists",
        "Adding, removing, and modifying list elements",
        "Sorting and looping through lists",
        "Fun exercise: Grocery list manager, Contact Book",
      ],
    },
    {
      title: "Module 8: Dictionaries : Key-Value Pairs",
      content: [
        "Understanding dictionaries",
        "Adding and modifying dictionary elements",
        "Using loops with dictionaries",
        "Fun exercise: Creating a mini-database",
      ],
    },
    {
      title: "Module 9: Introduction to Strings and String Manipulation",
      content: [
        "Working with text in Python",
        "String functions (len(), .upper(), .lower(), .replace())",
        "Fun exercise: Simple chatbot",
      ],
    },
    {
      title: "Module 10: Introduction to File Handling",
      content: [
        "Reading and writing to text files",
        "Fun exercise: Writing a diary/journal program, To-Do List application",
      ],
    },
    {
      title: "Module 11: Introduction to Pygame (Making Games!)",
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
      title: "Module 12: Debugging and Problem-Solving",
      content: [
        "Common errors in Python",
        "Debugging techniques",
        "Fun exercise: Practicing through simple coding challenges",
      ],
    },
    {
      title: "Module 13: Mini Games & Fun Projects",
      content: [
        "Creating a basic interactive quiz",
        "Simple animations with Turtle",
        "Fun Project: Creating a simple maze",
      ],
    },
    {
      title: "Module 14: Final Projects and Certification",
      content: [
        "Kids create their own project (game, quiz, or mini-app)",
        "Showcasing and presenting their work",
        "Course completion certificate",
      ],
    },
  ],
  math: [
    {
      title: "Mathematics Fundamentals",
      content: [
        "Introduction to Mathematics (Why Math is important?)",
        "Fun exercise: Number patterns and sequences",
      ],
    },
    {
      title: "Numbers and Operations",
      content: [
        "Understanding Whole Numbers, Fractions, and Decimals",
        "Addition, Subtraction, Multiplication, and Division",
        "Fun exercise: Number puzzle games",
      ],
    },
    {
      title: "Algebra Basics",
      content: [
        "Understanding variables and expressions",
        "Solving simple equations",
        "Fun exercise: Algebra treasure hunt",
      ],
    },
    {
      title: "Geometry: Shapes and Space",
      content: [
        "Identifying shapes and angles",
        "Perimeter, Area, and Volume",
        "Fun exercise: Drawing shapes with measurements",
      ],
    },
    {
      title: "Measurements and Units",
      content: [
        "Understanding length, weight, and capacity",
        "Time and temperature calculations",
        "Fun exercise: DIY Measurement Challenge",
      ],
    },
    {
      title: "Data Handling and Probability",
      content: [
        "Reading and making graphs (Bar graphs, Pie charts)",
        "Understanding probability and simple statistics",
        "Fun exercise: Rolling dice and predicting outcomes",
      ],
    },
    {
      title: "Problem Solving and Logical Thinking",
      content: [
        "Understanding patterns and sequences",
        "Fun exercise: Sudoku and brain teasers",
      ],
    },
    {
      title: "Advanced Math Topics",
      content: [
        "Introduction to Trigonometry and Coordinates",
        "Understanding the basics of Calculus",
        "Fun exercise: Exploring the Fibonacci sequence",
      ],
    },
    {
      title: "Mini Projects and Games",
      content: [
        "Creating a Math Quiz",
        "Designing a simple Math-based game",
        "Fun exercise: Escape Room Math Challenge",
      ],
    },
    {
      title: "Final Projects and Certification",
      content: [
        "Students create their own Math project",
        "Showcasing and presenting their work",
        "Course completion certificate",
      ],
    },
  ],
  guitar: [
    {
      title: "Module 1: Introduction to the Guitar",
      content: [
        "Understanding Guitar Parts & Functions",
        "Proper Holding & Playing Posture",
        "Tuning the Guitar (Using a Tuner & By Ear)",
        "Basic Finger Exercises for Strength & Flexibility",
      ],
    },
    {
      title: "Module 2: Basic Music Theory for Guitar",
      content: [
        "Understanding Strings & Notes (E, A, D, G, B, E)",
        "Introduction to the Fretboard",
        "Basic Rhythm & Timing (Quarter, Half, Whole Notes)",
        "Introduction to Tablature (TAB) & Chord Diagrams",
      ],
    },
    {
      title: "Module 3: Playing Basic Chords",
      content: [
        "Open Chords (C, G, D, A, E, Am, Em, Dm)",
        "Changing Between Chords Smoothly",
        "Basic Strumming Patterns (Downstrokes & Upstrokes)",
        "Understanding Common Chord Progressions",
      ],
    },
    {
      title: "Module 4: Basic Melodies & Picking Techniques",
      content: [
        "Playing Simple Melodies Using Single Notes",
        "Introduction to Fingerpicking vs. Flatpicking",
        "Learning Popular Riffs & Easy Song Intros",
        "Basic Exercises for Speed & Accuracy",
      ],
    },
    {
      title: "Module 5: Strumming & Rhythm Techniques",
      content: [
        "Developing Strumming Patterns (Down-Up, Palm Muting)",
        "Playing Songs with Simple Rhythms",
        "Understanding Basic Time Signatures (4/4, 3/4)",
        "Playing with a Metronome for Timing",
      ],
    },
    {
      title: "Module 6: Introduction to Barre Chords & Power Chords",
      content: [
        "Understanding the Concept of Barre Chords",
        "Simple Power Chords (5th Chords)",
        "Practicing Chord Transitions for Smooth Playing",
        "Playing a Song Using Barre Chords",
      ],
    },
    {
      title: "Module 7: Performance & Next Steps",
      content: [
        "Playing a Complete Song with Chords & Strumming",
        "Introduction to Lead Guitar (Basic Soloing Techniques)",
        "Developing Confidence in Playing",
        "Future Learning Pathways (Blues, Rock, Fingerstyle, etc.)",
      ],
    },
  ],
  frontend: [
    {
      title: "Module 1: Introduction to Frontend Development",
      content: [
        "What is Frontend Development? (Overview & Importance)",
        "Understanding the Basics of Web Development (HTML, CSS, JavaScript)",
        "Setting Up a Development Environment (VS Code, Live Server, Browsers)",
        "Fun Exercise: Creating a Simple 'Hello, World!' Webpage",
      ],
    },
    {
      title: "Module 2: HTML: The Structure of the Web",
      content: [
        "Understanding HTML Elements & Tags",
        "Working with Forms, Tables, and Lists",
        "Semantic HTML and Accessibility",
        "Fun Exercise: Building a Resume Webpage",
      ],
    },
    {
      title: "Module 3: CSS: Styling the Web",
      content: [
        "Selectors, Properties, and Values",
        "Box Model, Flexbox, and Grid for Layouts",
        "CSS Animations and Transitions",
        "Fun Exercise: Designing a Personal Portfolio",
      ],
    },
    {
      title: "Module 4: JavaScript: Making the Web Interactive",
      content: [
        "Introduction to JavaScript (Variables, Data Types, Functions)",
        "DOM Manipulation and Event Handling",
        "Basic Animations and Interactivity",
        "Fun Exercise: Creating a Clickable Image Gallery",
      ],
    },
    {
      title: "Module 5: Responsive Web Design",
      content: [
        "Introduction to Media Queries",
        "CSS Grid and Flexbox for Responsive Layouts",
        "Mobile-first vs Desktop-first Design",
        "Fun Exercise: Making a Mobile-friendly Web Page",
      ],
    },
    {
      title: "Module 6: Introduction to JavaScript Frameworks (React.js)",
      content: [
        "Why Use a Framework? (Introduction to React.js)",
        "Understanding Components, Props, and State",
        "Fun Exercise: Creating a Simple React To-Do App",
      ],
    },
    {
      title: "Module 7: Working with APIs",
      content: [
        "What is an API? How to Use It?",
        "Fetching Data Using Fetch API & Axios",
        "Fun Exercise: Building a Weather App Using an API",
      ],
    },
    {
      title: "Module 8: Introduction to Version Control (Git & GitHub)",
      content: [
        "What is Git? Why Use It?",
        "Basic Git Commands (Clone, Commit, Push, Pull)",
        "Collaborating on GitHub",
        "Fun Exercise: Hosting a Project on GitHub Pages",
      ],
    },
    {
      title: "Module 9: Web Performance & Optimization",
      content: [
        "Understanding Website Speed & Performance",
        "Optimizing Images, Lazy Loading, and Caching",
        "Minifying CSS & JavaScript for Faster Load Times",
        "Fun Exercise: Analyzing and Improving Page Speed",
      ],
    },
    {
      title: "Module 10: Introduction to Deployment & Hosting",
      content: [
        "How to Deploy a Website (Netlify, Vercel, GitHub Pages)",
        "Setting Up a Custom Domain",
        "Fun Exercise: Deploying Your Personal Website",
      ],
    },
    {
      title: "Module 11: Debugging & Problem Solving",
      content: [
        "Common Frontend Bugs & How to Fix Them",
        "Using Browser DevTools for Debugging",
        "Fun Exercise: Debugging a Broken Web Page",
      ],
    },
    {
      title: "Module 12: Mini Projects & Hands-on Practice",
      content: [
        "Building a Simple Portfolio Website",
        "Creating a Responsive Landing Page",
        "Fun Project: Building an Interactive Quiz Game",
      ],
    },
    {
      title: "Module 13: Final Project & Certification",
      content: [
        "Building Your Own Full-Stack Project (Optional)",
        "Showcasing and Presenting Your Work",
        "Course Completion Certificate",
      ],
    },
  ],
  vedicMath: [
    {
      title: "Module 1: Introduction to Vedic Mathematics",
      content: [
        "What is Vedic Math? (History & Benefits)",
        "Basic Principles and Sutras (Mental Math Techniques)",
        "Fun Exercise: Speed Test - Before & After Learning Vedic Math",
      ],
    },
    {
      title: "Module 2: Speed Addition and Subtraction",
      content: [
        "Nikhilam Sutra: Fast Subtraction Technique",
        "Ekadhikena Purvena: Quick Addition of Large Numbers",
        "Fun Exercise: Rapid-Fire Mental Math Challenge",
      ],
    },
    {
      title: "Module 3: Multiplication Shortcuts",
      content: [
        "Vertically & Crosswise: Faster Multiplication",
        "Doubling & Halving Method",
        "Fun Exercise: Multiplication War Game",
      ],
    },
    {
      title: "Module 4: Division Made Easy",
      content: [
        "Nikhilam Method: Fast Division Using Complements",
        "Paravartya Sutra: Simple Long Division Shortcut",
        "Fun Exercise: Rapid Division Quiz",
      ],
    },
    {
      title: "Module 5: Square and Cube Roots Without Calculator",
      content: [
        "Sutra-Based Squaring Techniques",
        "Finding Cube Roots Instantly",
        "Fun Exercise: Squaring & Cubing Challenge",
      ],
    },
    {
      title: "Module 6: Fractions, Decimals & Percentages",
      content: [
        "Converting Fractions to Decimals Instantly",
        "Easy Percentage Calculations",
        "Fun Exercise: Business Profit Calculator",
      ],
    },
    {
      title: "Module 7: Algebra and Equations Using Vedic Tricks",
      content: [
        "Criss-Cross Method for Solving Equations",
        "Quick Factorization Techniques",
        "Fun Exercise: Solve Equations Faster Than a Calculator",
      ],
    },
    {
      title: "Module 8: Squares, Square Roots & Cubes Instantly",
      content: [
        "Special Techniques for Finding Squares (25², 45², etc.)",
        "Finding Square Roots Without a Calculator",
        "Fun Exercise: Fastest Square Root Competition",
      ],
    },
    {
      title: "Module 9: Geometry and Trigonometry Shortcuts",
      content: [
        "Understanding Basic Geometric Patterns",
        "Trigonometric Ratios Using Vedic Math",
        "Fun Exercise: Applying Vedic Math in Real Life",
      ],
    },
    {
      title: "Module 10: Speed Calculations for Competitive Exams",
      content: [
        "Mental Math for Olympiads & School Exams",
        "Shortcut Techniques for Fast Problem Solving",
        "Fun Exercise: Speed Calculation Contest",
      ],
    },
    {
      title: "Module 11: Mini Projects & Applications",
      content: [
        "Creating Your Own Math Magic Tricks",
        "Building a Mental Calculation Quiz",
        "Fun Exercise: Vedic Math Puzzle Challenge",
      ],
    },
    {
      title: "Module 12: Final Project & Certification",
      content: [
        "Applying Vedic Math to Daily Life",
        "Showcasing & Presenting Learning Outcomes",
        "Course Completion Certificate",
      ],
    },
  ],
};

export default CourseDescription;
