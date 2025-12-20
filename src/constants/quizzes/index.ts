export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: "python-basics",
    title: "Python Basics",
    description: "Master Python fundamentals with 30+ questions",
    icon: "🐍",
    color: "from-blue-500 to-blue-600",
    difficulty: "Beginner",
    questions: [
      {
        id: 1,
        question: 'What does "len()" function do in Python?',
        options: [
          "Calculates the angle",
          "Returns the length of an object",
          "Checks if variable exists",
          "Removes spaces",
        ],
        correctAnswer: 1,
        explanation:
          "The len() function returns the number of items in an object such as strings, lists, tuples, dictionaries, etc.",
      },
      {
        id: 2,
        question: "Which data type is immutable in Python?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        correctAnswer: 3,
        explanation:
          "Tuples are immutable, meaning their values cannot be changed after creation. Lists, dictionaries, and sets are mutable.",
      },
      {
        id: 3,
        question: "What is the correct way to create a function in Python?",
        options: [
          "def myFunc():",
          "function myFunc():",
          "define myFunc():",
          "func myFunc():",
        ],
        correctAnswer: 0,
        explanation:
          'In Python, functions are defined using the "def" keyword followed by the function name and parentheses.',
      },
      {
        id: 4,
        question: "How do you add a comment in Python?",
        options: [
          "// This is a comment",
          "/* Comment */",
          "-- This is a comment",
          "# This is a comment",
        ],
        correctAnswer: 3,
        explanation:
          "Single-line comments in Python are created using the hash (#) symbol.",
      },
      {
        id: 5,
        question: "What will be the output of print(2 ** 3)?",
        options: ["6", "23", "8", "5"],
        correctAnswer: 2,
        explanation:
          "The ** operator is the exponentiation operator. 2 ** 3 means 2 to the power of 3, which equals 8.",
      },
      {
        id: 6,
        question: "Which of these is a Python keyword?",
        options: ["function", "class", "method", "object"],
        correctAnswer: 1,
        explanation: '"class" is a Python keyword used to define classes.',
      },
      {
        id: 7,
        question: "What is the output of print(type([]))?",
        options: [
          "<class 'array'>",
          "<class 'tuple'>",
          "<class 'list'>",
          "<class 'dict'>",
        ],
        correctAnswer: 2,
        explanation: "Square brackets [] create a list in Python.",
      },
      {
        id: 8,
        question: "How do you create a dictionary in Python?",
        options: ["[]", "{}", "()", "dict()"],
        correctAnswer: 1,
        explanation:
          "Curly braces {} are used to create dictionaries, or you can use the dict() constructor.",
      },
      {
        id: 9,
        question: "What does the range() function return?",
        options: ["A list", "A string", "A tuple", "An iterator"],
        correctAnswer: 3,
        explanation:
          "range() returns an immutable sequence of numbers (an iterator).",
      },
      {
        id: 10,
        question: "Which module is used for regular expressions?",
        options: ["re", "regex", "regexp", "pattern"],
        correctAnswer: 0,
        explanation:
          'The "re" module provides regular expression matching operations.',
      },
      {
        id: 11,
        question: "How do you handle exceptions in Python?",
        options: ["try-catch", "catch-try", "try-except", "error-handle"],
        correctAnswer: 2,
        explanation: "Python uses try-except blocks for exception handling.",
      },
      {
        id: 12,
        question: "What is a lambda function?",
        options: [
          "A named function",
          "An anonymous function",
          "A recursive function",
          "A built-in function",
        ],
        correctAnswer: 1,
        explanation:
          "A lambda function is a small anonymous function defined with the lambda keyword.",
      },
      {
        id: 13,
        question: 'What does "import" do?',
        options: [
          "Imports modules",
          "Exports modules",
          "Deletes modules",
          "Compiles modules",
        ],
        correctAnswer: 0,
        explanation:
          "The import statement imports modules into your Python script.",
      },
      {
        id: 14,
        question: "Which operator is used for floor division?",
        options: ["/", "%", "//", "**"],
        correctAnswer: 2,
        explanation:
          "// performs floor division, returning the largest integer less than or equal to the result.",
      },
      {
        id: 15,
        question: "What is a Python module?",
        options: ["A package", "A function", "A class", "A single Python file"],
        correctAnswer: 3,
        explanation: "A module is a single Python file containing code.",
      },
      {
        id: 16,
        question: "How do you convert a string to uppercase?",
        options: ["upper()", "toUpperCase()", "uppercase()", "capitalize()"],
        correctAnswer: 0,
        explanation: "The upper() method converts a string to uppercase.",
      },
      {
        id: 17,
        question: "What is PEP 8?",
        options: [
          "A Python library",
          "Python's style guide for readable code",
          "A Python package",
          "A Python framework",
        ],
        correctAnswer: 1,
        explanation: "PEP 8 is Python's style guide for writing readable code.",
      },
      {
        id: 18,
        question: "How do you check if a key exists in a dictionary?",
        options: [
          "dict.has_key()",
          "key in dict",
          "dict.exists()",
          "dict.contains()",
        ],
        correctAnswer: 1,
        explanation:
          'Use "key in dict" or "key not in dict" to check for key existence.',
      },
      {
        id: 19,
        question: "What is __init__ in Python?",
        options: [
          "A special method",
          "A regular function",
          "A variable",
          "A module",
        ],
        correctAnswer: 0,
        explanation:
          "__init__ is a special method that initializes newly created objects.",
      },
      {
        id: 20,
        question: "What does list comprehension do?",
        options: [
          "Deletes lists",
          "Sorts lists",
          "Creates lists concisely",
          "Reverses lists",
        ],
        correctAnswer: 2,
        explanation:
          "List comprehension provides a concise way to create lists.",
      },
      {
        id: 21,
        question: "What is slicing in Python?",
        options: [
          "A way to extract parts of sequences",
          "A cutting tool",
          "A math operation",
          "A string method",
        ],
        correctAnswer: 0,
        explanation:
          "Slicing extracts a portion of a sequence using start:stop:step syntax.",
      },
      {
        id: 22,
        question: "How do you copy a list?",
        options: ["list.copy()", "list[:]", "copy(list)", "All of the above"],
        correctAnswer: 3,
        explanation:
          "You can use list.copy(), copy module, or slicing list[:] to copy a list.",
      },
      {
        id: 23,
        question: "What are decorators in Python?",
        options: [
          "Special variables",
          "Functions that modify other functions",
          "Built-in methods",
          "Import statements",
        ],
        correctAnswer: 1,
        explanation:
          "Decorators are functions that modify the behavior of other functions.",
      },
      {
        id: 24,
        question: "What is a generator?",
        options: [
          "A type of list",
          "A database",
          "A function that returns an iterator",
          "A file handler",
        ],
        correctAnswer: 2,
        explanation:
          "Generators are functions that yield values one at a time using the yield keyword.",
      },
      {
        id: 25,
        question: 'What does the "pass" statement do?',
        options: [
          "Does nothing",
          "Skips code",
          "Breaks loop",
          "Continues loop",
        ],
        correctAnswer: 0,
        explanation:
          "pass is a null operation - it does nothing when executed.",
      },
      {
        id: 26,
        question: "How do you reverse a list?",
        options: [
          "list.reverse()",
          "reversed(list)",
          "list[::-1]",
          "All of the above",
        ],
        correctAnswer: 3,
        explanation: "All these methods can reverse a list in different ways.",
      },
      {
        id: 27,
        question: 'What is __name__ == "__main__" used for?',
        options: [
          "Function definition",
          "Module execution check",
          "Class creation",
          "Import statement",
        ],
        correctAnswer: 1,
        explanation: "It checks if a module is being run as the main program.",
      },
      {
        id: 28,
        question: "What is NumPy used for?",
        options: [
          "Numerical computing",
          "Web development",
          "GUI development",
          "Database operations",
        ],
        correctAnswer: 0,
        explanation:
          "NumPy is a library for numerical computing with arrays and matrices.",
      },
      {
        id: 29,
        question: 'What does the "with" statement do?',
        options: [
          "Loop control",
          "Function definition",
          "Context management",
          "Import management",
        ],
        correctAnswer: 2,
        explanation:
          "The with statement simplifies exception handling and resource management.",
      },
      {
        id: 30,
        question: "What is Duck Typing in Python?",
        options: [
          "A type of bird",
          "Dynamic typing based on behavior",
          "A coding standard",
          "A debugging tool",
        ],
        correctAnswer: 1,
        explanation:
          "Duck typing focuses on an object's behavior rather than its type.",
      },
      {
        id: 31,
        question: "What is a virtual environment?",
        options: [
          "Isolated Python environment",
          "Virtual machine",
          "Docker container",
          "Cloud server",
        ],
        correctAnswer: 0,
        explanation:
          "A virtual environment isolates Python packages for different projects.",
      },
      {
        id: 32,
        question: "What is pip?",
        options: [
          "A Python module",
          "A Python function",
          "Python package installer",
          "A Python keyword",
        ],
        correctAnswer: 2,
        explanation: "pip is the package installer for Python.",
      },
      {
        id: 33,
        question: "What are *args and **kwargs?",
        options: [
          "Variable-length arguments",
          "Required arguments",
          "Default arguments",
          "Keyword-only arguments",
        ],
        correctAnswer: 0,
        explanation:
          "*args collects positional arguments, **kwargs collects keyword arguments.",
      },
      {
        id: 34,
        question: "What is the GIL?",
        options: [
          "General Interface Layer",
          "Global Interpreter Lock",
          "Global Import Lock",
          "General Instruction List",
        ],
        correctAnswer: 1,
        explanation:
          "GIL is a mutex that protects access to Python objects in CPython.",
      },
      {
        id: 35,
        question: "What is PyPI?",
        options: [
          "Python Programming Interface",
          "Python Performance Indicator",
          "Python Package Index",
          "Python Package Installer",
        ],
        correctAnswer: 2,
        explanation:
          "PyPI is the repository of software for the Python programming language.",
      },
      {
        id: 36,
        question:
          "Which of these is used to open a file for reading in binary format?",
        options: ["'r'", "'rb'", "'w'", "'wb'"],
        correctAnswer: 1,
        explanation: "'rb' opens a file for reading in binary mode.",
      },
      {
        id: 37,
        question: "What is the result of 10 // 3?",
        options: ["3.33", "3", "4", "3.0"],
        correctAnswer: 1,
        explanation:
          "The // operator performs floor division, which returns the nearest lower integer.",
      },
      {
        id: 38,
        question: "How do you remove an element from a list by its value?",
        options: [
          "list.pop()",
          "list.delete()",
          "list.remove()",
          "list.discard()",
        ],
        correctAnswer: 2,
        explanation:
          "list.remove(value) removes the first occurrence of a specific value.",
      },
      {
        id: 39,
        question: "Which of these is NOT a valid variable name in Python?",
        options: ["_my_var", "my_var_1", "1_my_var", "MyVar"],
        correctAnswer: 2,
        explanation: "Variable names cannot start with a digit.",
      },
      {
        id: 40,
        question:
          "What is the purpose of the 'finally' block in exception handling?",
        options: [
          "To catch specific errors",
          "To skip errors",
          "To execute code regardless of an exception",
          "To restart the program",
        ],
        correctAnswer: 2,
        explanation:
          "The finally block always executes, whether an exception occurred or not.",
      },
      {
        id: 41,
        question: "How can you generate a random integer between 1 and 10?",
        options: [
          "random.rand(1, 10)",
          "random.randint(1, 10)",
          "random.range(1, 10)",
          "random.integer(1, 10)",
        ],
        correctAnswer: 1,
        explanation:
          "random.randint(a, b) returns a random integer N such that a <= N <= b.",
      },
      {
        id: 42,
        question:
          "Which method is used to add an element to the end of a list?",
        options: ["add()", "push()", "insert()", "append()"],
        correctAnswer: 3,
        explanation: "append() adds a single element to the end of the list.",
      },
      {
        id: 43,
        question: "What does the 'is' operator check?",
        options: [
          "Equality of values",
          "Identity (same memory location)",
          "If a variable exists",
          "Type of the object",
        ],
        correctAnswer: 1,
        explanation:
          "The 'is' keyword tests if two variables point to the same object in memory.",
      },
      {
        id: 44,
        question: "Which data type does NOT allow duplicate elements?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: 2,
        explanation:
          "A Set is an unordered collection with no duplicate elements.",
      },
      {
        id: 45,
        question:
          "What is the default return value of a function that doesn't have a return statement?",
        options: ["0", "False", "None", "Error"],
        correctAnswer: 2,
        explanation:
          "In Python, functions return 'None' by default if no return statement is reached.",
      },
      {
        id: 46,
        question: "How do you create a set in Python?",
        options: ["[]", "()", "{}", "set()"],
        correctAnswer: 3,
        explanation:
          "While {} creates a dictionary, set() is required for an empty set (or {1, 2} for non-empty).",
      },
      {
        id: 47,
        question: "Which function is used to read a string from user input?",
        options: ["read()", "input()", "get()", "scan()"],
        correctAnswer: 1,
        explanation:
          "input() allows user input and always returns it as a string.",
      },
      {
        id: 48,
        question: "What is the output of 'Hello'[1:4]?",
        options: ["Hell", "ell", "ello", "el"],
        correctAnswer: 1,
        explanation:
          "Slicing [1:4] takes indices 1, 2, and 3. In 'Hello', that is 'e', 'l', 'l'.",
      },
      {
        id: 49,
        question: "How do you define a class in Python?",
        options: [
          "class MyClass:",
          "define MyClass:",
          "new class MyClass:",
          "MyClass class:",
        ],
        correctAnswer: 0,
        explanation:
          "Classes are defined using the 'class' keyword followed by the name.",
      },
      {
        id: 50,
        question:
          "Which library is commonly used for data manipulation and analysis?",
        options: ["Flask", "Pandas", "Django", "PyGame"],
        correctAnswer: 1,
        explanation:
          "Pandas is the primary library for data structures and data analysis.",
      },
      {
        id: 51,
        question: "What does 'self' represent in a class method?",
        options: [
          "The parent class",
          "The current instance of the class",
          "A global variable",
          "The method itself",
        ],
        correctAnswer: 1,
        explanation:
          "'self' refers to the specific instance of the object being operated on.",
      },
      {
        id: 52,
        question: "How do you convert an integer to a string?",
        options: ["str()", "string()", "toString()", "int.str()"],
        correctAnswer: 0,
        explanation: "The str() constructor converts data types into strings.",
      },
      {
        id: 53,
        question:
          "Which of these represents a 'protected' attribute by convention?",
        options: ["__name", "_name", "name_", "__name__"],
        correctAnswer: 1,
        explanation:
          "A single underscore prefix (_name) is a convention indicating a protected member.",
      },
      {
        id: 54,
        question: "What is a 'f-string'?",
        options: [
          "A file string",
          "A formatted string literal",
          "A fixed string",
          "A function string",
        ],
        correctAnswer: 1,
        explanation:
          "f-strings (e.g., f'Value: {x}') allow embedding expressions inside string literals.",
      },
      {
        id: 55,
        question: "Which operator is used for 'logical AND' in Python?",
        options: ["&&", "&", "and", "||"],
        correctAnswer: 2,
        explanation: "Python uses the word 'and' for logical conjunction.",
      },
      {
        id: 56,
        question: "What does the 'map()' function do?",
        options: [
          "Filters a list",
          "Applies a function to all items in an input list",
          "Locates an item",
          "Sorts a dictionary",
        ],
        correctAnswer: 1,
        explanation:
          "map() executes a specified function for each item in an iterable.",
      },
      {
        id: 57,
        question: "How do you find the index of an element in a list?",
        options: [
          "list.find()",
          "list.search()",
          "list.index()",
          "list.locate()",
        ],
        correctAnswer: 2,
        explanation: "list.index(x) returns the first index of the element x.",
      },
      {
        id: 58,
        question:
          "Which of these is a built-in Python module for math operations?",
        options: ["maths", "math", "calculus", "numeric"],
        correctAnswer: 1,
        explanation:
          "The 'math' module provides access to mathematical functions defined by the C standard.",
      },
      {
        id: 59,
        question: "What is the purpose of 'break' in a loop?",
        options: [
          "Skip the current iteration",
          "Exit the loop entirely",
          "Pause the program",
          "Wait for user input",
        ],
        correctAnswer: 1,
        explanation: "The 'break' statement terminates the loop containing it.",
      },
      {
        id: 60,
        question: "How do you remove trailing spaces from a string?",
        options: [
          "string.trim()",
          "string.strip()",
          "string.rstrip()",
          "string.lstrip()",
        ],
        correctAnswer: 2,
        explanation:
          "rstrip() removes trailing characters (right side); strip() removes both ends.",
      },
      {
        id: 61,
        question: "What is 'monkey patching' in Python?",
        options: [
          "Fixing hardware",
          "Dynamic modification of a class or module at runtime",
          "A type of unit testing",
          "Writing code very fast",
        ],
        correctAnswer: 1,
        explanation:
          "Monkey patching refers to changing code behavior at runtime without modifying the source code.",
      },
      {
        id: 62,
        question: "What is the output of bool(0)?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: 1,
        explanation:
          "In Python, 0 is considered Falsy, so bool(0) returns False.",
      },
      {
        id: 63,
        question: "Which keyword is used to inherit from another class?",
        options: [
          "extends",
          "inherits",
          "Parenthesis after class name",
          "super",
        ],
        correctAnswer: 2,
        explanation:
          "In Python, inheritance is done by passing the parent class in parentheses: class Child(Parent):.",
      },
      {
        id: 64,
        question: "How do you check the length of a dictionary?",
        options: ["dict.size()", "dict.length()", "len(dict)", "count(dict)"],
        correctAnswer: 2,
        explanation:
          "The len() function works on dictionaries just as it does on lists and strings.",
      },
      {
        id: 65,
        question: "What does the 'enumerate()' function do?",
        options: [
          "Counts items",
          "Returns index and value simultaneously in a loop",
          "Creates a list of numbers",
          "Sums up a list",
        ],
        correctAnswer: 1,
        explanation:
          "enumerate() adds a counter to an iterable and returns it as an enumerate object.",
      },
      {
        id: 66,
        question: "Which of these is used to create a shallow copy of a list?",
        options: [
          "list.copy()",
          "list.deepcopy()",
          "list.clone()",
          "list.duplicate()",
        ],
        correctAnswer: 0,
        explanation:
          "list.copy() creates a shallow copy. For deep copies, you must use the 'copy' module.",
      },
      {
        id: 67,
        question: "What is a 'docstring' in Python?",
        options: [
          "A string for medical files",
          "A string used to document a module, function, or class",
          "A string that is not printed",
          "A string used as a variable",
        ],
        correctAnswer: 1,
        explanation:
          "Docstrings are literals that appear right after the definition of a function or class to describe its purpose.",
      },
      {
        id: 68,
        question: "Which of these is used for 'not equal' in Python?",
        options: ["<>", "!=", "not==", "/="],
        correctAnswer: 1,
        explanation:
          "The '!=' operator is used to check if two values are not equal.",
      },
      {
        id: 69,
        question:
          "How do you import only the 'pi' constant from the math module?",
        options: [
          "import pi from math",
          "from math import pi",
          "import math.pi",
          "get pi from math",
        ],
        correctAnswer: 1,
        explanation:
          "The 'from module import name' syntax is used to import specific parts of a module.",
      },
      {
        id: 70,
        question: "What is the purpose of the 'del' keyword?",
        options: [
          "To delete an object or reference",
          "To clear the screen",
          "To end a function",
          "To delete a file from disk",
        ],
        correctAnswer: 0,
        explanation:
          "The 'del' keyword is used to delete variables, items in a list, or keys in a dictionary.",
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Comprehensive web development quiz with 30+ questions",
    icon: "🌐",
    color: "from-cyan-500 to-cyan-600",
    difficulty: "Intermediate",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "High Tech Modern Language",
          "Hyperlinks Text Markup Language",
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 2,
        explanation:
          "HTML stands for HyperText Markup Language, the standard markup language for creating web pages.",
      },
      {
        id: 2,
        question: "Which of the following is a front-end JavaScript framework?",
        options: ["Django", "Flask", "Laravel", "React"],
        correctAnswer: 3,
        explanation:
          "React is a JavaScript library for building user interfaces. Others are backend frameworks.",
      },
      {
        id: 3,
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
        explanation:
          "CSS stands for Cascading Style Sheets and controls layout and styling.",
      },
      {
        id: 4,
        question: "Which HTTP method is used to submit data to a server?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: 0,
        explanation: "POST is used to send data to the server.",
      },
      {
        id: 5,
        question: "What is the purpose of a REST API?",
        options: [
          "To style web pages",
          "To compress files",
          "To enable communication between applications",
          "To encrypt data",
        ],
        correctAnswer: 2,
        explanation: "REST APIs allow applications to communicate using HTTP.",
      },
      {
        id: 6,
        question: "What is responsive web design?",
        options: [
          "Design with animations",
          "Design that works on all devices",
          "Design that responds to user clicks",
          "Design with bright colors",
        ],
        correctAnswer: 1,
        explanation:
          "Responsive design adapts layouts to different screen sizes.",
      },
      {
        id: 7,
        question: "What is the box model in CSS?",
        options: [
          "Header, body, footer",
          "Content, padding, border, margin",
          "Div, span, p",
          "HTML, CSS, JavaScript",
        ],
        correctAnswer: 1,
        explanation:
          "The CSS box model consists of content, padding, border, and margin.",
      },
      {
        id: 8,
        question: "What is a CDN?",
        options: [
          "Computer Data Network",
          "Content Distribution Node",
          "Content Delivery Network",
          "Code Development Node",
        ],
        correctAnswer: 2,
        explanation:
          "CDN improves performance by delivering content from nearby servers.",
      },
      {
        id: 9,
        question: "What is AJAX?",
        options: [
          "Advanced JavaScript and XML",
          "Automatic JavaScript and XHTML",
          "Asynchronous Java and XML",
          "Asynchronous JavaScript and XML",
        ],
        correctAnswer: 3,
        explanation: "AJAX allows asynchronous communication with servers.",
      },
      {
        id: 10,
        question: "What is the DOM?",
        options: [
          "Document Object Model",
          "Data Object Model",
          "Document Orientation Model",
          "Digital Object Management",
        ],
        correctAnswer: 0,
        explanation: "DOM represents the structure of HTML as objects.",
      },
      {
        id: 11,
        question: "What is CORS?",
        options: [
          "Cross-Origin Request Security",
          "Cross-Origin Resource Security",
          "Cross-Origin Resource Sharing",
          "Cross-Origin Request Sharing",
        ],
        correctAnswer: 2,
        explanation: "CORS controls cross-domain resource access.",
      },
      {
        id: 12,
        question: "What is a CSS preprocessor?",
        options: [
          "React, Vue, Angular",
          "Sass, LESS, Stylus",
          "Node.js, Express",
          "MongoDB, PostgreSQL",
        ],
        correctAnswer: 1,
        explanation: "Preprocessors extend CSS with variables and functions.",
      },
      {
        id: 13,
        question: "What is Webpack?",
        options: [
          "CSS framework",
          "JavaScript library",
          "Database",
          "Module bundler",
        ],
        correctAnswer: 3,
        explanation: "Webpack bundles application assets.",
      },
      {
        id: 14,
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "Node Project Manager",
          "New Package Manager",
          "Network Package Manager",
        ],
        correctAnswer: 0,
        explanation: "npm manages Node.js packages.",
      },
      {
        id: 15,
        question: "What is Babel?",
        options: [
          "CSS framework",
          "JavaScript compiler",
          "HTML preprocessor",
          "Database",
        ],
        correctAnswer: 1,
        explanation: "Babel compiles modern JavaScript for compatibility.",
      },
      {
        id: 16,
        question: "What is TypeScript?",
        options: [
          "CSS framework",
          "HTML templating language",
          "Typed superset of JavaScript",
          "Database query language",
        ],
        correctAnswer: 2,
        explanation: "TypeScript adds static typing to JavaScript.",
      },
      {
        id: 17,
        question: "What is JWT?",
        options: [
          "JavaScript Web Token",
          "JSON Web Token",
          "JSON Website Token",
          "JavaScript Website Token",
        ],
        correctAnswer: 1,
        explanation: "JWT securely transfers claims between parties.",
      },
      {
        id: 18,
        question: "What is OAuth?",
        options: [
          "Authentication protocol",
          "Database system",
          "CSS framework",
          "Authorization framework",
        ],
        correctAnswer: 3,
        explanation:
          "OAuth allows third-party access without sharing credentials.",
      },
      {
        id: 19,
        question: "What is GraphQL?",
        options: [
          "Database language",
          "Query language for APIs",
          "CSS framework",
          "JavaScript library",
        ],
        correctAnswer: 1,
        explanation: "GraphQL allows clients to request specific data.",
      },
      {
        id: 20,
        question: "What is WebSocket?",
        options: [
          "CSS framework",
          "Database",
          "Communication protocol",
          "JavaScript library",
        ],
        correctAnswer: 2,
        explanation: "WebSocket enables real-time communication.",
      },
      {
        id: 21,
        question: "What is Docker?",
        options: [
          "Containerization platform",
          "CSS framework",
          "JavaScript library",
          "Database",
        ],
        correctAnswer: 0,
        explanation: "Docker packages apps into containers.",
      },
      {
        id: 22,
        question: "What is Kubernetes?",
        options: [
          "CSS framework",
          "Container orchestration",
          "JavaScript runtime",
          "Database",
        ],
        correctAnswer: 1,
        explanation: "Kubernetes manages containerized applications.",
      },
      {
        id: 23,
        question: "What is a Progressive Web App?",
        options: [
          "Simple website",
          "Mobile app",
          "Desktop application",
          "Web app that works like native",
        ],
        correctAnswer: 3,
        explanation: "PWAs provide offline support and native-like experience.",
      },
      {
        id: 24,
        question: "What is SEO?",
        options: [
          "Server Engine Optimization",
          "Search Engine Optimization",
          "System Error Optimization",
          "Software Engineering Operations",
        ],
        correctAnswer: 1,
        explanation: "SEO improves search engine rankings.",
      },
      {
        id: 25,
        question: "What is SSR?",
        options: [
          "System Service Request",
          "Server-Side Rendering",
          "Software Security Requirements",
          "Server Security Rules",
        ],
        correctAnswer: 1,
        explanation: "SSR renders pages on the server.",
      },
      {
        id: 26,
        question: "What is a webhook?",
        options: [
          "CSS hook",
          "JavaScript function",
          "HTTP callback",
          "Database trigger",
        ],
        correctAnswer: 2,
        explanation: "Webhooks send event-based HTTP requests.",
      },
      {
        id: 27,
        question: "What is a microservice?",
        options: [
          "Large monolithic application",
          "Database table",
          "Small, independent service",
          "CSS module",
        ],
        correctAnswer: 2,
        explanation: "Microservices are independently deployable services.",
      },
      {
        id: 28,
        question: "What is Redis?",
        options: [
          "Relational database",
          "In-memory data store",
          "CSS framework",
          "JavaScript library",
        ],
        correctAnswer: 1,
        explanation: "Redis is used for caching and fast data access.",
      },
      {
        id: 29,
        question: "What is Elasticsearch?",
        options: [
          "CSS framework",
          "JavaScript runtime",
          "Database",
          "Search and analytics engine",
        ],
        correctAnswer: 3,
        explanation: "Elasticsearch provides powerful search capabilities.",
      },
      {
        id: 30,
        question: "What is CI/CD?",
        options: [
          "Computer Interface/Computer Design",
          "Continuous Integration/Continuous Deployment",
          "Code Integration/Code Deployment",
          "Continuous Innovation/Continuous Development",
        ],
        correctAnswer: 1,
        explanation: "CI/CD automates testing and deployment.",
      },
      {
        id: 31,
        question: "What is a headless CMS?",
        options: [
          "Content management via API",
          "Traditional CMS",
          "Database system",
          "CSS framework",
        ],
        correctAnswer: 0,
        explanation: "Headless CMS delivers content via APIs.",
      },
      {
        id: 32,
        question: "What is a SPA?",
        options: [
          "Secure Page Web Application",
          "Simple Page Web Application",
          "Single Page Web Application",
          "Static Page Web Application",
        ],
        correctAnswer: 2,
        explanation: "SPA dynamically updates content without reloading.",
      },
      {
        id: 33,
        question: "What is a CDN?",
        options: [
          "Code Distribution Network",
          "Content Delivery Network",
          "Content Distribution Node",
          "Computer Data Network",
        ],
        correctAnswer: 1,
        explanation: "CDN speeds up content delivery.",
      },
      {
        id: 34,
        question: "What is HTTP/2?",
        options: [
          "HTML version 2",
          "CSS framework",
          "Major revision of HTTP",
          "JavaScript library",
        ],
        correctAnswer: 2,
        explanation: "HTTP/2 improves performance with multiplexing.",
      },
      {
        id: 35,
        question: "What is WebAssembly?",
        options: [
          "CSS feature",
          "JavaScript library",
          "HTML tag",
          "Binary instruction format",
        ],
        correctAnswer: 3,
        explanation: "WebAssembly enables high-performance web applications.",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Deep dive into AI and ML concepts with 30+ questions",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
    difficulty: "Advanced",
    questions: [
      {
        id: 1,
        question: "What is the main goal of Machine Learning?",
        options: [
          "To build physical robots",
          "To enable computers to learn from data without explicit programming",
          "To create advanced computer graphics",
          "To secure systems against hacking",
        ],
        correctAnswer: 1,
        explanation:
          "Machine Learning enables computers to learn from data and improve without explicit programming.",
      },
      {
        id: 2,
        question: "What are the three main types of Machine Learning?",
        options: [
          "Input, Output, Processing",
          "Read, Write, Execute",
          "Supervised, Unsupervised, Reinforcement",
          "Fast, Slow, Medium",
        ],
        correctAnswer: 2,
        explanation:
          "The three main types are supervised, unsupervised, and reinforcement learning.",
      },
      {
        id: 3,
        question: 'What does "overfitting" mean in Machine Learning?',
        options: [
          "Model learns training data too well and fails on new data",
          "Using too many hardware resources",
          "Not having enough training data points",
          "Choosing the wrong activation function",
        ],
        correctAnswer: 0,
        explanation:
          "Overfitting occurs when a model memorizes training data and performs poorly on unseen data.",
      },
      {
        id: 4,
        question: "Which library is commonly used for Deep Learning in Python?",
        options: ["NumPy", "TensorFlow", "Pandas", "Matplotlib"],
        correctAnswer: 1,
        explanation:
          "TensorFlow is widely used for building deep learning models.",
      },
      {
        id: 5,
        question: "What is a Neural Network inspired by?",
        options: [
          "Computer electrical circuits",
          "Mathematical calculus equations",
          "The human brain",
          "Relational database systems",
        ],
        correctAnswer: 2,
        explanation:
          "Neural networks are inspired by biological neurons in the human brain.",
      },
      {
        id: 6,
        question: "What is backpropagation?",
        options: [
          "A data preprocessing technique",
          "Learning algorithm for neural networks",
          "A model evaluation method",
          "A feature selection method",
        ],
        correctAnswer: 1,
        explanation:
          "Backpropagation computes gradients to update weights in neural networks.",
      },
      {
        id: 7,
        question: "What is a CNN used for?",
        options: [
          "Text classification",
          "Time series forecasting",
          "Recommendation systems",
          "Image recognition",
        ],
        correctAnswer: 3,
        explanation:
          "CNNs are primarily used for image recognition and computer vision tasks.",
      },
      {
        id: 8,
        question: "What is an RNN?",
        options: [
          "Recurrent Neural Network",
          "Random Neural Network",
          "Recursive Neural Network",
          "Regularized Neural Network",
        ],
        correctAnswer: 0,
        explanation:
          "RNNs handle sequential data by maintaining internal memory.",
      },
      {
        id: 9,
        question: "What is transfer learning?",
        options: [
          "Transferring data between servers",
          "Learning to transfer code",
          "Using pre-trained models on new tasks",
          "Model compression for mobile",
        ],
        correctAnswer: 2,
        explanation:
          "Transfer learning applies knowledge from one task to another related task.",
      },
      {
        id: 10,
        question: "What is gradient descent?",
        options: [
          "An optimization algorithm",
          "A data cleaning method",
          "A model evaluation metric",
          "A feature engineering technique",
        ],
        correctAnswer: 0,
        explanation:
          "Gradient descent minimizes loss by iteratively updating parameters.",
      },
      {
        id: 11,
        question: "What is a GAN?",
        options: [
          "Generalized Artificial Network",
          "Graphical Analysis Network",
          "Generative Adversarial Network",
          "Genetic Algorithm Network",
        ],
        correctAnswer: 2,
        explanation:
          "GANs consist of generator and discriminator networks competing with each other.",
      },
      {
        id: 12,
        question: "What is reinforcement learning?",
        options: [
          "Learning from labeled data",
          "Learning through rewards and penalties",
          "Learning without any supervision",
          "Learning from unlabeled data",
        ],
        correctAnswer: 1,
        explanation:
          "Reinforcement learning learns optimal actions via rewards and penalties.",
      },
      {
        id: 13,
        question: "What is a decision tree?",
        options: [
          "A tree-like model of decisions",
          "A neural network architecture",
          "A clustering algorithm",
          "A linear regression model",
        ],
        correctAnswer: 0,
        explanation: "Decision trees model decisions using a tree structure.",
      },
      {
        id: 14,
        question: "What is k-means clustering?",
        options: [
          "Supervised classification",
          "An unsupervised clustering algorithm",
          "A regression technique",
          "A deep neural network",
        ],
        correctAnswer: 1,
        explanation: "k-means groups data into k clusters based on similarity.",
      },
      {
        id: 15,
        question: "What is PCA?",
        options: [
          "Primary Component Algorithm",
          "Predictive Component Analysis",
          "Pattern Classification Analysis",
          "Principal Component Analysis",
        ],
        correctAnswer: 3,
        explanation: "PCA reduces dimensionality while preserving variance.",
      },
      {
        id: 16,
        question: "What is SVM?",
        options: [
          "Support Vector Machine",
          "Systematic Validation Method",
          "Statistical Variance Model",
          "Sequential Vector Machine",
        ],
        correctAnswer: 0,
        explanation: "SVM finds optimal decision boundaries between classes.",
      },
      {
        id: 17,
        question: "What is NLP?",
        options: [
          "Neural Language Processing",
          "Natural Language Processing",
          "Network Language Protocol",
          "Natural Learning Process",
        ],
        correctAnswer: 1,
        explanation: "NLP enables machines to understand human language.",
      },
      {
        id: 18,
        question: "What is computer vision?",
        options: [
          "Teaching computers to interpret visual data",
          "Basic computer graphics",
          "Image editing software",
          "Video compression technology",
        ],
        correctAnswer: 0,
        explanation: "Computer vision extracts meaning from images and videos.",
      },
      {
        id: 19,
        question: "What is a transformer model?",
        options: [
          "An attention-based neural network",
          "A data transformation tool",
          "A hardware image processor",
          "An audio signal processor",
        ],
        correctAnswer: 0,
        explanation: "Transformers rely on self-attention mechanisms.",
      },
      {
        id: 20,
        question: "What is BERT?",
        options: [
          "Basic Encoding for Representing Text",
          "Binary Encoding and Recognition Technique",
          "Bidirectional Encoder Representations from Transformers",
          "Basic English Recognition Tool",
        ],
        correctAnswer: 2,
        explanation: "BERT is a bidirectional transformer-based NLP model.",
      },
      {
        id: 21,
        question: "What is OpenAI?",
        options: [
          "An AI research organization",
          "A Linux-based operating system",
          "A new programming language",
          "A cloud database company",
        ],
        correctAnswer: 0,
        explanation:
          "OpenAI researches and develops safe artificial intelligence.",
      },
      {
        id: 22,
        question: "What is deep learning?",
        options: [
          "Simple linear regression",
          "Basic data clustering",
          "Decision tree pruning",
          "Neural networks with multiple layers",
        ],
        correctAnswer: 3,
        explanation: "Deep learning uses multi-layer neural networks.",
      },
      {
        id: 23,
        question: "What is a loss function?",
        options: [
          "Computes model accuracy",
          "Measures model error during training",
          "Optimizes model hardware",
          "Selects the best features",
        ],
        correctAnswer: 1,
        explanation: "Loss functions quantify prediction errors.",
      },
      {
        id: 24,
        question: "What is regularization?",
        options: [
          "Technique that prevents overfitting",
          "Method to increase model complexity",
          "Process of adding more features",
          "Method for removing data outliers",
        ],
        correctAnswer: 0,
        explanation: "Regularization penalizes overly complex models.",
      },
      {
        id: 25,
        question: "What is a confusion matrix?",
        options: [
          "A classification evaluation tool",
          "A data visualization for clusters",
          "A model training method",
          "A feature selection algorithm",
        ],
        correctAnswer: 0,
        explanation: "Confusion matrices evaluate classification performance.",
      },
      {
        id: 26,
        question: "What is precision and recall?",
        options: [
          "Data cleaning methods",
          "Regression evaluation metrics",
          "Clustering quality metrics",
          "Classification performance metrics",
        ],
        correctAnswer: 3,
        explanation:
          "Precision and recall measure classification effectiveness.",
      },
      {
        id: 27,
        question: "What is ROC curve?",
        options: [
          "Regression Output Curve",
          "Random Optimization Curve",
          "Receiver Operating Characteristic curve",
          "Rate of Change metric",
        ],
        correctAnswer: 2,
        explanation: "ROC curves visualize classification performance.",
      },
      {
        id: 28,
        question: "What is feature engineering?",
        options: [
          "Creating informative features from raw data",
          "Training existing models",
          "Evaluating model accuracy",
          "Deploying models to production",
        ],
        correctAnswer: 0,
        explanation: "Feature engineering improves model performance.",
      },
      {
        id: 29,
        question: "What is cross-validation?",
        options: [
          "A model validation technique",
          "A data collection method",
          "A manual feature selection",
          "A model deployment strategy",
        ],
        correctAnswer: 0,
        explanation: "Cross-validation evaluates model generalization.",
      },
      {
        id: 30,
        question: "What is ensemble learning?",
        options: [
          "Training a single deep model",
          "Combining multiple models for better results",
          "A method of feature selection",
          "A type of data preprocessing",
        ],
        correctAnswer: 1,
        explanation: "Ensembles improve accuracy by combining models.",
      },
      {
        id: 31,
        question: "What is random forest?",
        options: [
          "A single complex decision tree",
          "A type of neural network",
          "An ensemble of many decision trees",
          "A linear regression model",
        ],
        correctAnswer: 2,
        explanation: "Random forests combine multiple decision trees.",
      },
      {
        id: 32,
        question: "What is XGBoost?",
        options: [
          "A type of random forest",
          "An optimized gradient boosting library",
          "A basic neural network",
          "A simple linear regression",
        ],
        correctAnswer: 1,
        explanation: "XGBoost is a fast and scalable boosting algorithm.",
      },
      {
        id: 33,
        question: "What is AutoML?",
        options: [
          "Automated Machine Learning",
          "Automatic Markup Language",
          "Automated Modeling Language",
          "Automatic Machine Language",
        ],
        correctAnswer: 0,
        explanation: "AutoML automates the ML pipeline.",
      },
      {
        id: 34,
        question: "What is MLOps?",
        options: [
          "Machine Learning Optimization",
          "Model Lifecycle Operations",
          "ML Operations (DevOps for ML)",
          "Machine Learning Organization",
        ],
        correctAnswer: 2,
        explanation: "MLOps manages ML models in production.",
      },
      {
        id: 35,
        question: "What is ethical AI?",
        options: [
          "Fast AI algorithms",
          "Responsible AI development with moral principles",
          "Very complex AI models",
          "Highly expensive AI hardware",
        ],
        correctAnswer: 1,
        explanation:
          "Ethical AI ensures fairness, transparency, and accountability.",
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Comprehensive data science quiz with 30+ questions",
    icon: "📊",
    color: "from-green-500 to-green-600",
    difficulty: "Intermediate",
    questions: [
      {
        id: 1,
        question: "What does EDA stand for?",
        options: [
          "Electronic Data Analysis",
          "Exploratory Data Analysis",
          "Essential Data Application",
          "Expected Data Array",
        ],
        correctAnswer: 1,
        explanation:
          "EDA (Exploratory Data Analysis) is the process of analyzing datasets to understand their structure and characteristics.",
      },
      {
        id: 2,
        question: "Which Python library is best for data manipulation?",
        options: ["Matplotlib", "Pandas", "Scikit-learn", "Seaborn"],
        correctAnswer: 1,
        explanation:
          "Pandas is the primary Python library for data manipulation, analysis, and cleaning operations.",
      },
      {
        id: 3,
        question: "What is the purpose of data normalization?",
        options: [
          "To add noise",
          "To scale features to a similar range",
          "To remove duplicates",
          "To rename columns",
        ],
        correctAnswer: 1,
        explanation:
          "Data normalization scales numerical features to a similar range, improving model performance and preventing bias towards larger values.",
      },
      {
        id: 4,
        question: "Which of these is NOT a measure of central tendency?",
        options: ["Mean", "Median", "Mode", "Variance"],
        correctAnswer: 3,
        explanation:
          "Mean, Median, and Mode are measures of central tendency. Variance is a measure of dispersion (spread) of data.",
      },
      {
        id: 5,
        question: "What is correlation used for?",
        options: [
          "To delete data",
          "To measure relationship between variables",
          "To create visualizations",
          "To compress files",
        ],
        correctAnswer: 1,
        explanation:
          "Correlation measures the strength and direction of the linear relationship between two variables.",
      },
      {
        id: 6,
        question: "What is SQL?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Question Language",
          "System Query Logic",
        ],
        correctAnswer: 0,
        explanation:
          "SQL is used to communicate with and manipulate databases.",
      },
      {
        id: 7,
        question: "What is a data warehouse?",
        options: [
          "Central repository for data",
          "Small database",
          "Data visualization tool",
          "Statistical software",
        ],
        correctAnswer: 0,
        explanation:
          "Data warehouses store integrated data from multiple sources for analysis.",
      },
      {
        id: 8,
        question: "What is big data?",
        options: [
          "Large, complex datasets",
          "Small datasets",
          "Clean data",
          "Simple data",
        ],
        correctAnswer: 0,
        explanation:
          "Big data refers to extremely large datasets that require specialized processing.",
      },
      {
        id: 9,
        question: "What is Hadoop?",
        options: [
          "Big data processing framework",
          "Database system",
          "Programming language",
          "Data visualization tool",
        ],
        correctAnswer: 0,
        explanation:
          "Hadoop is a framework for distributed storage and processing of big data.",
      },
      {
        id: 10,
        question: "What is Spark?",
        options: [
          "Big data processing engine",
          "Database",
          "Programming language",
          "Operating system",
        ],
        correctAnswer: 0,
        explanation:
          "Apache Spark is a unified analytics engine for large-scale data processing.",
      },
      {
        id: 11,
        question: "What is data mining?",
        options: [
          "Discovering patterns in data",
          "Storing data",
          "Cleaning data",
          "Visualizing data",
        ],
        correctAnswer: 0,
        explanation:
          "Data mining extracts knowledge and insights from large datasets.",
      },
      {
        id: 12,
        question: "What is a hypothesis test?",
        options: [
          "Statistical inference method",
          "Data cleaning technique",
          "Visualization method",
          "Database query",
        ],
        correctAnswer: 0,
        explanation:
          "Hypothesis testing determines if there is enough evidence to reject a null hypothesis.",
      },
      {
        id: 13,
        question: "What is p-value?",
        options: [
          "Probability of observed results",
          "Prediction value",
          "Performance metric",
          "Precision value",
        ],
        correctAnswer: 0,
        explanation:
          "p-value measures the strength of evidence against the null hypothesis.",
      },
      {
        id: 14,
        question: "What is regression analysis?",
        options: [
          "Modeling relationships between variables",
          "Data classification",
          "Clustering",
          "Data cleaning",
        ],
        correctAnswer: 0,
        explanation:
          "Regression analyzes relationships between dependent and independent variables.",
      },
      {
        id: 15,
        question: "What is classification?",
        options: [
          "Categorizing data into classes",
          "Predicting continuous values",
          "Grouping similar items",
          "Cleaning data",
        ],
        correctAnswer: 0,
        explanation:
          "Classification assigns data points to predefined categories or classes.",
      },
      {
        id: 16,
        question: "What is clustering?",
        options: [
          "Grouping similar data points",
          "Predicting values",
          "Classifying data",
          "Cleaning data",
        ],
        correctAnswer: 0,
        explanation:
          "Clustering groups similar data points without predefined categories.",
      },
      {
        id: 17,
        question: "What is time series analysis?",
        options: [
          "Analyzing data points over time",
          "Cross-sectional analysis",
          "Text analysis",
          "Image analysis",
        ],
        correctAnswer: 0,
        explanation:
          "Time series analysis deals with data points indexed in time order.",
      },
      {
        id: 18,
        question: "What is A/B testing?",
        options: [
          "Comparing two versions",
          "Statistical test",
          "Data cleaning",
          "Visualization",
        ],
        correctAnswer: 0,
        explanation:
          "A/B testing compares two versions to determine which performs better.",
      },
      {
        id: 19,
        question: "What is data cleaning?",
        options: [
          "Preparing data for analysis",
          "Collecting data",
          "Storing data",
          "Visualizing data",
        ],
        correctAnswer: 0,
        explanation:
          "Data cleaning involves detecting and correcting errors in datasets.",
      },
      {
        id: 20,
        question: "What is feature selection?",
        options: [
          "Choosing relevant variables",
          "Creating new features",
          "Cleaning features",
          "Visualizing features",
        ],
        correctAnswer: 0,
        explanation:
          "Feature selection identifies the most important variables for modeling.",
      },
      {
        id: 21,
        question: "What is outlier detection?",
        options: [
          "Identifying anomalies in data",
          "Finding averages",
          "Calculating correlations",
          "Grouping data",
        ],
        correctAnswer: 0,
        explanation:
          "Outlier detection finds data points that differ significantly from others.",
      },
      {
        id: 22,
        question: "What is data visualization?",
        options: [
          "Graphical representation of data",
          "Data storage",
          "Data cleaning",
          "Data collection",
        ],
        correctAnswer: 0,
        explanation:
          "Data visualization presents data in graphical format for better understanding.",
      },
      {
        id: 23,
        question: "What is Tableau?",
        options: [
          "Data visualization tool",
          "Database",
          "Programming language",
          "Statistical software",
        ],
        correctAnswer: 0,
        explanation:
          "Tableau is a popular data visualization and business intelligence tool.",
      },
      {
        id: 24,
        question: "What is Power BI?",
        options: [
          "Business analytics tool",
          "Database",
          "Programming language",
          "Statistical test",
        ],
        correctAnswer: 0,
        explanation:
          "Power BI is Microsoft's business analytics service for data visualization.",
      },
      {
        id: 25,
        question: "What is data governance?",
        options: [
          "Managing data availability and security",
          "Data visualization",
          "Data cleaning",
          "Data collection",
        ],
        correctAnswer: 0,
        explanation:
          "Data governance ensures proper management of data assets.",
      },
      {
        id: 26,
        question: "What is a data pipeline?",
        options: [
          "Automated data flow process",
          "Data storage",
          "Data visualization",
          "Data analysis",
        ],
        correctAnswer: 0,
        explanation:
          "Data pipelines automate the flow of data from source to destination.",
      },
      {
        id: 27,
        question: "What is ETL?",
        options: [
          "Extract, Transform, Load",
          "Enter, Transfer, Leave",
          "Extract, Transfer, Load",
          "Enter, Transform, Leave",
        ],
        correctAnswer: 0,
        explanation:
          "ETL processes extract data from sources, transform it, and load into targets.",
      },
      {
        id: 28,
        question: "What is data lake?",
        options: [
          "Storage repository for raw data",
          "Cleaned database",
          "Visualization tool",
          "Analysis platform",
        ],
        correctAnswer: 0,
        explanation: "Data lakes store raw, unstructured data at any scale.",
      },
      {
        id: 29,
        question: "What is data quality?",
        options: [
          "Fitness of data for use",
          "Data quantity",
          "Data speed",
          "Data cost",
        ],
        correctAnswer: 0,
        explanation:
          "Data quality measures how well data serves its intended purpose.",
      },
      {
        id: 30,
        question: "What is predictive analytics?",
        options: [
          "Forecasting future outcomes",
          "Describing past data",
          "Prescribing actions",
          "Diagnosing problems",
        ],
        correctAnswer: 0,
        explanation:
          "Predictive analytics uses historical data to predict future events.",
      },
      {
        id: 31,
        question: "What is prescriptive analytics?",
        options: [
          "Recommending actions",
          "Predicting outcomes",
          "Describing data",
          "Diagnosing issues",
        ],
        correctAnswer: 0,
        explanation:
          "Prescriptive analytics suggests actions to achieve desired outcomes.",
      },
      {
        id: 32,
        question: "What is descriptive analytics?",
        options: [
          "Summarizing historical data",
          "Predicting future",
          "Recommending actions",
          "Diagnosing problems",
        ],
        correctAnswer: 0,
        explanation:
          "Descriptive analytics describes what has happened in the past.",
      },
      {
        id: 33,
        question: "What is diagnostic analytics?",
        options: [
          "Understanding why something happened",
          "Predicting what will happen",
          "Recommending actions",
          "Describing data",
        ],
        correctAnswer: 0,
        explanation:
          "Diagnostic analytics identifies causes of events or behaviors.",
      },
      {
        id: 34,
        question: "What is business intelligence?",
        options: [
          "Data-driven decision making",
          "Data collection",
          "Data storage",
          "Data cleaning",
        ],
        correctAnswer: 0,
        explanation:
          "BI transforms data into insights for better business decisions.",
      },
      {
        id: 35,
        question: "What is data storytelling?",
        options: [
          "Communicating insights through narratives",
          "Data collection",
          "Data storage",
          "Data cleaning",
        ],
        correctAnswer: 0,
        explanation:
          "Data storytelling presents data insights in compelling, understandable ways.",
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Comprehensive JavaScript quiz with 30+ questions",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-600",
    difficulty: "Beginner",
    questions: [
      {
        id: 1,
        question:
          "What is the correct way to declare a variable in JavaScript?",
        options: [
          "v myVar;",
          "var myVar;",
          "variable myVar;",
          "declare myVar;",
        ],
        correctAnswer: 1,
        explanation:
          "In JavaScript, variables are declared using var, let, or const keywords.",
      },
      {
        id: 2,
        question: "Which method converts a string to a number?",
        options: [
          "toNumber()",
          "parseInt()",
          "stringToNumber()",
          "Number.convert()",
        ],
        correctAnswer: 1,
        explanation:
          "parseInt() and Number() are used to convert strings to numbers in JavaScript.",
      },
      {
        id: 3,
        question: 'What is the output of typeof "hello"?',
        options: ["text", "string", "object", "undefined"],
        correctAnswer: 1,
        explanation: 'The typeof operator returns "string" for string values.',
      },
      {
        id: 4,
        question: "How do you create an array in JavaScript?",
        options: [
          "var arr = (1, 2, 3);",
          "var arr = {1, 2, 3};",
          "var arr = [1, 2, 3];",
          "var arr = <1, 2, 3>;",
        ],
        correctAnswer: 2,
        explanation:
          "Arrays in JavaScript are created using square brackets [] with comma-separated values.",
      },
      {
        id: 5,
        question: 'What does "==" mean in JavaScript?',
        options: [
          "Strict equality",
          "Assignment",
          "Loose equality",
          "Not equal",
        ],
        correctAnswer: 2,
        explanation:
          '"==" checks for loose equality (type coercion allowed), while "===" checks for strict equality (no type coercion).',
      },
      {
        id: 6,
        question: "What is closure in JavaScript?",
        options: [
          "Function with access to outer scope",
          "Loop structure",
          "Variable declaration",
          "Error handling",
        ],
        correctAnswer: 0,
        explanation:
          "Closures allow functions to access variables from an outer function scope.",
      },
      {
        id: 7,
        question: "What is hoisting?",
        options: [
          "Moving declarations to top",
          "Lifting variables",
          "Raising errors",
          "Loading scripts",
        ],
        correctAnswer: 0,
        explanation:
          "Hoisting moves variable and function declarations to the top of their scope.",
      },
      {
        id: 8,
        question: "What is the DOM?",
        options: [
          "Document Object Model",
          "Data Object Model",
          "Document Orientation Model",
          "Digital Object Management",
        ],
        correctAnswer: 0,
        explanation:
          "DOM represents HTML documents as a tree structure for manipulation.",
      },
      {
        id: 9,
        question: "What is event bubbling?",
        options: [
          "Events propagate upward",
          "Events propagate downward",
          "Events stop immediately",
          "Events duplicate",
        ],
        correctAnswer: 0,
        explanation:
          "Event bubbling means events propagate from the target element up to the root.",
      },
      {
        id: 10,
        question: "What is a callback function?",
        options: [
          "Function passed as argument",
          "Function that calls itself",
          "Arrow function",
          "Async function",
        ],
        correctAnswer: 0,
        explanation:
          "Callbacks are functions passed as arguments to other functions.",
      },
      {
        id: 11,
        question: "What is a promise?",
        options: [
          "Async operation handler",
          "Synchronous function",
          "Error handler",
          "Loop structure",
        ],
        correctAnswer: 0,
        explanation:
          "Promises handle asynchronous operations and their eventual completion.",
      },
      {
        id: 12,
        question: "What is async/await?",
        options: [
          "Syntactic sugar for promises",
          "Error handling",
          "Loop control",
          "Variable declaration",
        ],
        correctAnswer: 0,
        explanation: "async/await makes asynchronous code look synchronous.",
      },
      {
        id: 13,
        question: 'What is "this" keyword?',
        options: [
          "Reference to current object",
          "Global object",
          "Parent object",
          "Child object",
        ],
        correctAnswer: 0,
        explanation:
          '"this" refers to the object it belongs to, depending on context.',
      },
      {
        id: 14,
        question: "What is arrow function?",
        options: [
          "Shorter function syntax",
          "Traditional function",
          "Method function",
          "Constructor function",
        ],
        correctAnswer: 0,
        explanation:
          'Arrow functions provide shorter syntax and lexical "this" binding.',
      },
      {
        id: 15,
        question: "What is JSON?",
        options: [
          "JavaScript Object Notation",
          "JavaScript Online Network",
          "Java Serialized Object Notation",
          "JavaScript Oriented Notation",
        ],
        correctAnswer: 0,
        explanation: "JSON is a lightweight data interchange format.",
      },
      {
        id: 16,
        question: "What is localStorage?",
        options: [
          "Web storage API",
          "Database",
          "Cookie storage",
          "Session storage",
        ],
        correctAnswer: 0,
        explanation: "localStorage stores data with no expiration date.",
      },
      {
        id: 17,
        question: "What is sessionStorage?",
        options: [
          "Web storage for session",
          "Permanent storage",
          "Database",
          "Cookie storage",
        ],
        correctAnswer: 0,
        explanation: "sessionStorage stores data for one session.",
      },
      {
        id: 18,
        question: "What is CORS?",
        options: [
          "Cross-Origin Resource Sharing",
          "Cross-Origin Request Security",
          "Cross-Origin Resource Security",
          "Cross-Origin Request Sharing",
        ],
        correctAnswer: 0,
        explanation:
          "CORS allows resources to be requested from another domain.",
      },
      {
        id: 19,
        question: "What is a higher-order function?",
        options: [
          "Function that takes/returns functions",
          "Math function",
          "String function",
          "Array function",
        ],
        correctAnswer: 0,
        explanation: "Higher-order functions operate on other functions.",
      },
      {
        id: 20,
        question: "What is destructuring?",
        options: [
          "Extracting values from objects/arrays",
          "Destroying objects",
          "Creating objects",
          "Modifying objects",
        ],
        correctAnswer: 0,
        explanation:
          "Destructuring extracts values from arrays or properties from objects.",
      },
      {
        id: 21,
        question: "What is template literal?",
        options: [
          "String with embedded expressions",
          "HTML template",
          "CSS template",
          "JSON template",
        ],
        correctAnswer: 0,
        explanation:
          "Template literals use backticks and ${} for embedded expressions.",
      },
      {
        id: 22,
        question: "What is the spread operator?",
        options: [
          "... expands iterables",
          "-> spreads values",
          "=> spreads objects",
          ":: spreads arrays",
        ],
        correctAnswer: 0,
        explanation:
          "... spreads elements of iterables like arrays or objects.",
      },
      {
        id: 23,
        question: "What is the rest parameter?",
        options: [
          "... collects arguments",
          "-> collects values",
          "=> collects objects",
          ":: collects arrays",
        ],
        correctAnswer: 0,
        explanation: "... rest collects remaining arguments into an array.",
      },
      {
        id: 24,
        question: "What is a module?",
        options: ["Reusable code unit", "Function", "Variable", "Class"],
        correctAnswer: 0,
        explanation:
          "Modules are reusable pieces of code that can be exported/imported.",
      },
      {
        id: 25,
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "Node Project Manager",
          "New Package Manager",
          "Network Package Manager",
        ],
        correctAnswer: 0,
        explanation: "npm is the package manager for Node.js.",
      },
      {
        id: 26,
        question: "What is Node.js?",
        options: [
          "JavaScript runtime",
          "JavaScript library",
          "CSS framework",
          "HTML processor",
        ],
        correctAnswer: 0,
        explanation:
          "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
      },
      {
        id: 27,
        question: "What is Express.js?",
        options: [
          "Node.js web framework",
          "Database",
          "CSS framework",
          "JavaScript library",
        ],
        correctAnswer: 0,
        explanation:
          "Express is a minimal web application framework for Node.js.",
      },
      {
        id: 28,
        question: "What is MongoDB?",
        options: [
          "NoSQL database",
          "SQL database",
          "Graph database",
          "Key-value store",
        ],
        correctAnswer: 0,
        explanation: "MongoDB is a document-oriented NoSQL database.",
      },
      {
        id: 29,
        question: "What is Mongoose?",
        options: [
          "MongoDB object modeling",
          "SQL ORM",
          "GraphQL client",
          "REST client",
        ],
        correctAnswer: 0,
        explanation:
          "Mongoose provides a schema-based solution to model application data.",
      },
      {
        id: 30,
        question: "What is JWT?",
        options: [
          "JSON Web Token",
          "JavaScript Web Token",
          "JSON Website Token",
          "JavaScript Website Token",
        ],
        correctAnswer: 0,
        explanation: "JWT is a compact URL-safe means of representing claims.",
      },
      {
        id: 31,
        question: "What is WebSocket?",
        options: [
          "Full-duplex communication",
          "Half-duplex communication",
          "HTTP protocol",
          "FTP protocol",
        ],
        correctAnswer: 0,
        explanation:
          "WebSocket provides persistent connection between client and server.",
      },
      {
        id: 32,
        question: "What is a service worker?",
        options: [
          "Script that runs in background",
          "Main thread script",
          "Database worker",
          "Network worker",
        ],
        correctAnswer: 0,
        explanation:
          "Service workers enable offline experiences and background sync.",
      },
      {
        id: 33,
        question: "What is IndexedDB?",
        options: [
          "Client-side database",
          "Server database",
          "Network storage",
          "Cookie storage",
        ],
        correctAnswer: 0,
        explanation: "IndexedDB is a low-level API for client-side storage.",
      },
      {
        id: 34,
        question: "What is a web component?",
        options: [
          "Custom HTML element",
          "JavaScript function",
          "CSS class",
          "HTML attribute",
        ],
        correctAnswer: 0,
        explanation: "Web components create reusable custom elements.",
      },
      {
        id: 35,
        question: "What is TypeScript?",
        options: [
          "Typed superset of JavaScript",
          "JavaScript framework",
          "CSS preprocessor",
          "HTML template engine",
        ],
        correctAnswer: 0,
        explanation: "TypeScript adds static typing to JavaScript.",
      },
    ],
  },
  {
    id: "react",
    title: "React Fundamentals",
    description: "Master React basics and concepts with 30+ questions",
    icon: "⚛️",
    color: "from-blue-400 to-blue-500",
    difficulty: "Intermediate",
    questions: [
      {
        id: 1,
        question: "What is a React component?",
        options: [
          "A CSS file",
          "A reusable piece of UI",
          "A JavaScript function",
          "Both B and C",
        ],
        correctAnswer: 3,
        explanation:
          "A React component is a reusable piece of UI that can be created as a JavaScript function or class.",
      },
      {
        id: 2,
        question: "What is JSX?",
        options: [
          "Java XML",
          "JavaScript XML",
          "Java Syntax Extension",
          "JavaScript Extended",
        ],
        correctAnswer: 1,
        explanation:
          "JSX is JavaScript XML, a syntax extension that allows you to write HTML-like code in JavaScript.",
      },
      {
        id: 3,
        question: "What is the purpose of state in React?",
        options: [
          "To style components",
          "To store data that can change",
          "To import components",
          "To define routes",
        ],
        correctAnswer: 1,
        explanation:
          "State is used to store data that can change and trigger re-renders when updated.",
      },
      {
        id: 4,
        question: "What are props in React?",
        options: [
          "Component properties passed from parent to child",
          "State variables",
          "CSS properties",
          "Function names",
        ],
        correctAnswer: 0,
        explanation:
          "Props are arguments passed into React components, similar to function parameters.",
      },
      {
        id: 5,
        question: "What is the virtual DOM?",
        options: [
          "An actual DOM in the browser",
          "A JavaScript representation of the real DOM",
          "A debugging tool",
          "A CSS framework",
        ],
        correctAnswer: 1,
        explanation:
          "The virtual DOM is an in-memory representation of the real DOM that React uses to optimize updates.",
      },
      {
        id: 6,
        question: "What is React Hook?",
        options: [
          "Function that lets you use state",
          "Class component feature",
          "CSS feature",
          "HTML attribute",
        ],
        correctAnswer: 0,
        explanation:
          "Hooks let you use state and other React features in function components.",
      },
      {
        id: 7,
        question: "What is useState hook?",
        options: [
          "Manages state in functional components",
          "Manages side effects",
          "Manages context",
          "Manages refs",
        ],
        correctAnswer: 0,
        explanation: "useState adds state to functional components.",
      },
      {
        id: 8,
        question: "What is useEffect hook?",
        options: [
          "Handles side effects",
          "Manages state",
          "Creates refs",
          "Provides context",
        ],
        correctAnswer: 0,
        explanation:
          "useEffect performs side effects in functional components.",
      },
      {
        id: 9,
        question: "What is useContext hook?",
        options: [
          "Accesses context",
          "Manages state",
          "Creates effects",
          "Handles refs",
        ],
        correctAnswer: 0,
        explanation:
          "useContext accesses React context in functional components.",
      },
      {
        id: 10,
        question: "What is useRef hook?",
        options: [
          "Creates mutable ref object",
          "Manages state",
          "Creates effects",
          "Provides context",
        ],
        correctAnswer: 0,
        explanation:
          "useRef returns a mutable ref object whose .current property is initialized to the passed argument.",
      },
      {
        id: 11,
        question: "What is React Router?",
        options: [
          "Routing library for React",
          "State management",
          "CSS framework",
          "Testing library",
        ],
        correctAnswer: 0,
        explanation:
          "React Router enables navigation between components in a React app.",
      },
      {
        id: 12,
        question: "What is Redux?",
        options: [
          "State management library",
          "Routing library",
          "CSS framework",
          "Testing library",
        ],
        correctAnswer: 0,
        explanation:
          "Redux is a predictable state container for JavaScript apps.",
      },
      {
        id: 13,
        question: "What is Context API?",
        options: [
          "Built-in state management",
          "External library",
          "CSS feature",
          "Routing solution",
        ],
        correctAnswer: 0,
        explanation:
          "Context API provides a way to pass data through the component tree without prop drilling.",
      },
      {
        id: 14,
        question: "What is prop drilling?",
        options: [
          "Passing props through multiple levels",
          "Drilling into props",
          "Prop mutation",
          "Prop deletion",
        ],
        correctAnswer: 0,
        explanation:
          "Prop drilling means passing props down through multiple component levels.",
      },
      {
        id: 15,
        question: "What is a higher-order component?",
        options: [
          "Function that takes component returns new component",
          "Component with high order",
          "Parent component",
          "Child component",
        ],
        correctAnswer: 0,
        explanation:
          "HOCs are functions that take a component and return a new component with additional props.",
      },
      {
        id: 16,
        question: "What is a custom hook?",
        options: [
          "Reusable hook logic",
          "Built-in hook",
          "Component hook",
          "State hook",
        ],
        correctAnswer: 0,
        explanation:
          "Custom hooks extract component logic into reusable functions.",
      },
      {
        id: 17,
        question: "What is React.memo?",
        options: [
          "Performance optimization",
          "Memory management",
          "State management",
          "Routing",
        ],
        correctAnswer: 0,
        explanation:
          "React.memo memoizes functional components to prevent unnecessary re-renders.",
      },
      {
        id: 18,
        question: "What is useMemo hook?",
        options: [
          "Memoizes expensive computations",
          "Manages state",
          "Creates effects",
          "Handles refs",
        ],
        correctAnswer: 0,
        explanation:
          "useMemo returns a memoized value to optimize performance.",
      },
      {
        id: 19,
        question: "What is useCallback hook?",
        options: [
          "Memoizes callback functions",
          "Manages state",
          "Creates effects",
          "Provides context",
        ],
        correctAnswer: 0,
        explanation: "useCallback returns a memoized callback function.",
      },
      {
        id: 20,
        question: "What is code splitting?",
        options: [
          "Splitting code into smaller bundles",
          "Writing code",
          "Testing code",
          "Deploying code",
        ],
        correctAnswer: 0,
        explanation:
          "Code splitting divides bundles into smaller chunks for faster loading.",
      },
      {
        id: 21,
        question: "What is lazy loading?",
        options: [
          "Loading components on demand",
          "Loading all at once",
          "Preloading",
          "Caching",
        ],
        correctAnswer: 0,
        explanation:
          "Lazy loading delays loading of components until they're needed.",
      },
      {
        id: 22,
        question: "What is Suspense?",
        options: [
          "Handles async operations",
          "Manages state",
          "Creates components",
          "Styles components",
        ],
        correctAnswer: 0,
        explanation:
          'Suspense lets components "wait" for something before rendering.',
      },
      {
        id: 23,
        question: "What is React.Fragment?",
        options: [
          "Wrapper without extra DOM node",
          "HTML element",
          "CSS wrapper",
          "JavaScript object",
        ],
        correctAnswer: 0,
        explanation:
          "Fragment lets you group elements without adding extra nodes to DOM.",
      },
      {
        id: 24,
        question: "What is a portal?",
        options: [
          "Renders children into different DOM node",
          "Network portal",
          "Data portal",
          "File portal",
        ],
        correctAnswer: 0,
        explanation:
          "Portals render children into a DOM node outside parent hierarchy.",
      },
      {
        id: 25,
        question: "What is error boundary?",
        options: [
          "Catches JavaScript errors",
          "Handles network errors",
          "Catches CSS errors",
          "Handles HTML errors",
        ],
        correctAnswer: 0,
        explanation:
          "Error boundaries catch JavaScript errors anywhere in child component tree.",
      },
      {
        id: 26,
        question: "What is strict mode?",
        options: [
          "Development tool for highlighting problems",
          "Production mode",
          "Testing mode",
          "Debugging mode",
        ],
        correctAnswer: 0,
        explanation:
          "StrictMode activates additional checks and warnings for descendants.",
      },
      {
        id: 27,
        question: "What is React Testing Library?",
        options: [
          "Testing utilities",
          "State management",
          "Routing library",
          "CSS framework",
        ],
        correctAnswer: 0,
        explanation:
          "RTL provides light utilities for testing React components.",
      },
      {
        id: 28,
        question: "What is Jest?",
        options: [
          "Testing framework",
          "State management",
          "Routing library",
          "CSS framework",
        ],
        correctAnswer: 0,
        explanation: "Jest is a JavaScript testing framework used with React.",
      },
      {
        id: 29,
        question: "What is Next.js?",
        options: [
          "React framework",
          "State management",
          "CSS framework",
          "Database",
        ],
        correctAnswer: 0,
        explanation:
          "Next.js is a React framework with features like SSR and static generation.",
      },
      {
        id: 30,
        question: "What is Gatsby?",
        options: [
          "Static site generator",
          "State management",
          "CSS framework",
          "Database",
        ],
        correctAnswer: 0,
        explanation: "Gatsby is a React-based static site generator.",
      },
      {
        id: 31,
        question: "What is Create React App?",
        options: [
          "Official React setup tool",
          "State management",
          "Routing library",
          "Testing framework",
        ],
        correctAnswer: 0,
        explanation: "CRA sets up a modern React app with no configuration.",
      },
      {
        id: 32,
        question: "What is Vite?",
        options: [
          "Modern build tool",
          "State management",
          "CSS framework",
          "Database",
        ],
        correctAnswer: 0,
        explanation: "Vite is a fast build tool and development server.",
      },
      {
        id: 33,
        question: "What is server-side rendering?",
        options: [
          "Rendering on server",
          "Rendering on client",
          "Hybrid rendering",
          "No rendering",
        ],
        correctAnswer: 0,
        explanation:
          "SSR renders React components on the server before sending to client.",
      },
      {
        id: 34,
        question: "What is static site generation?",
        options: [
          "Pre-rendering at build time",
          "Rendering at runtime",
          "Client rendering",
          "Dynamic rendering",
        ],
        correctAnswer: 0,
        explanation: "SSG generates static HTML at build time.",
      },
      {
        id: 35,
        question: "What is hydration?",
        options: [
          "Attaching event listeners to server-rendered HTML",
          "Adding water",
          "Removing events",
          "Cleaning up",
        ],
        correctAnswer: 0,
        explanation: "Hydration makes server-rendered markup interactive.",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Master DevOps and Cloud computing concepts",
    icon: "☁️",
    color: "from-orange-500 to-orange-600",
    difficulty: "Advanced",
    questions: [
      {
        id: 1,
        question: "What is DevOps?",
        options: [
          "Development + Operations",
          "Device Operations",
          "Developer Options",
          "Development Optimization",
        ],
        correctAnswer: 0,
        explanation: "DevOps combines software development and IT operations.",
      },
      {
        id: 2,
        question: "What is CI/CD?",
        options: [
          "Continuous Integration/Continuous Deployment",
          "Code Integration/Code Deployment",
          "Continuous Improvement/Continuous Development",
          "Computer Interface/Computer Design",
        ],
        correctAnswer: 0,
        explanation: "CI/CD automates software delivery processes.",
      },
      {
        id: 3,
        question: "What is Docker?",
        options: [
          "Containerization platform",
          "Virtual machine",
          "Programming language",
          "Operating system",
        ],
        correctAnswer: 0,
        explanation: "Docker packages applications into containers.",
      },
      {
        id: 4,
        question: "What is Kubernetes?",
        options: [
          "Container orchestration",
          "Containerization",
          "Virtualization",
          "Programming framework",
        ],
        correctAnswer: 0,
        explanation:
          "Kubernetes automates container deployment and management.",
      },
      {
        id: 5,
        question: "What is AWS?",
        options: [
          "Amazon Web Services",
          "Advanced Web Services",
          "Amazon Web Servers",
          "Advanced Web Systems",
        ],
        correctAnswer: 0,
        explanation: "AWS is Amazon's cloud computing platform.",
      },
      {
        id: 6,
        question: "What is Azure?",
        options: [
          "Microsoft's cloud platform",
          "Google's cloud",
          "IBM cloud",
          "Oracle cloud",
        ],
        correctAnswer: 0,
        explanation: "Azure is Microsoft's cloud computing service.",
      },
      {
        id: 7,
        question: "What is GCP?",
        options: [
          "Google Cloud Platform",
          "General Cloud Platform",
          "Global Cloud Platform",
          "Google Computing Platform",
        ],
        correctAnswer: 0,
        explanation: "GCP is Google's suite of cloud computing services.",
      },
      {
        id: 8,
        question: "What is IaaS?",
        options: [
          "Infrastructure as a Service",
          "Integration as a Service",
          "Internet as a Service",
          "Interface as a Service",
        ],
        correctAnswer: 0,
        explanation:
          "IaaS provides virtualized computing resources over the internet.",
      },
      {
        id: 9,
        question: "What is PaaS?",
        options: [
          "Platform as a Service",
          "Programming as a Service",
          "Processing as a Service",
          "Protocol as a Service",
        ],
        correctAnswer: 0,
        explanation:
          "PaaS provides platform for developing, running, and managing applications.",
      },
      {
        id: 10,
        question: "What is SaaS?",
        options: [
          "Software as a Service",
          "System as a Service",
          "Security as a Service",
          "Storage as a Service",
        ],
        correctAnswer: 0,
        explanation: "SaaS delivers software applications over the internet.",
      },
      {
        id: 11,
        question: "What is Terraform?",
        options: [
          "Infrastructure as Code tool",
          "Programming language",
          "Container tool",
          "Monitoring tool",
        ],
        correctAnswer: 0,
        explanation:
          "Terraform is an IaC tool for building, changing, and versioning infrastructure.",
      },
      {
        id: 12,
        question: "What is Ansible?",
        options: [
          "Configuration management tool",
          "Container tool",
          "Monitoring tool",
          "Testing tool",
        ],
        correctAnswer: 0,
        explanation:
          "Ansible automates software provisioning, configuration, and deployment.",
      },
      {
        id: 13,
        question: "What is Jenkins?",
        options: [
          "CI/CD automation server",
          "Container platform",
          "Cloud provider",
          "Monitoring tool",
        ],
        correctAnswer: 0,
        explanation: "Jenkins is an open-source automation server for CI/CD.",
      },
      {
        id: 14,
        question: "What is Git?",
        options: [
          "Version control system",
          "Programming language",
          "Cloud platform",
          "Container tool",
        ],
        correctAnswer: 0,
        explanation: "Git is a distributed version control system.",
      },
      {
        id: 15,
        question: "What is GitHub?",
        options: [
          "Git repository hosting",
          "Git client",
          "Git server",
          "Git tool",
        ],
        correctAnswer: 0,
        explanation:
          "GitHub hosts Git repositories and provides collaboration features.",
      },
      {
        id: 16,
        question: "What is GitLab?",
        options: [
          "DevOps platform",
          "Version control only",
          "Cloud provider",
          "Container tool",
        ],
        correctAnswer: 0,
        explanation: "GitLab is a complete DevOps platform.",
      },
      {
        id: 17,
        question: "What is Prometheus?",
        options: [
          "Monitoring system",
          "CI/CD tool",
          "Container platform",
          "Cloud provider",
        ],
        correctAnswer: 0,
        explanation:
          "Prometheus is an open-source monitoring and alerting toolkit.",
      },
      {
        id: 18,
        question: "What is Grafana?",
        options: [
          "Data visualization platform",
          "Monitoring system",
          "CI/CD tool",
          "Container platform",
        ],
        correctAnswer: 0,
        explanation: "Grafana visualizes metrics from various sources.",
      },
      {
        id: 19,
        question: "What is ELK Stack?",
        options: [
          "Elasticsearch, Logstash, Kibana",
          "Error, Log, Knowledge",
          "Elastic, Log, Kibana",
          "Enterprise, Log, Knowledge",
        ],
        correctAnswer: 0,
        explanation: "ELK Stack is used for log management and analysis.",
      },
      {
        id: 20,
        question: "What is Nginx?",
        options: [
          "Web server and reverse proxy",
          "Database",
          "Programming language",
          "Container tool",
        ],
        correctAnswer: 0,
        explanation:
          "Nginx is a high-performance web server and reverse proxy.",
      },
      {
        id: 21,
        question: "What is load balancing?",
        options: [
          "Distributing network traffic",
          "Balancing servers",
          "Loading software",
          "Balancing databases",
        ],
        correctAnswer: 0,
        explanation:
          "Load balancing distributes incoming network traffic across servers.",
      },
      {
        id: 22,
        question: "What is auto-scaling?",
        options: [
          "Automatic resource adjustment",
          "Manual scaling",
          "Fixed scaling",
          "No scaling",
        ],
        correctAnswer: 0,
        explanation:
          "Auto-scaling automatically adjusts resources based on demand.",
      },
      {
        id: 23,
        question: "What is microservices architecture?",
        options: [
          "Small, independent services",
          "Monolithic application",
          "Single service",
          "Large service",
        ],
        correctAnswer: 0,
        explanation:
          "Microservices structure applications as collections of loosely coupled services.",
      },
      {
        id: 24,
        question: "What is serverless computing?",
        options: [
          "Cloud execution model",
          "No servers",
          "Physical servers",
          "Virtual servers",
        ],
        correctAnswer: 0,
        explanation:
          "Serverless lets developers build applications without managing servers.",
      },
      {
        id: 25,
        question: "What is AWS Lambda?",
        options: [
          "Serverless computing service",
          "Database service",
          "Storage service",
          "Networking service",
        ],
        correctAnswer: 0,
        explanation:
          "Lambda runs code in response to events without provisioning servers.",
      },
      {
        id: 26,
        question: "What is EC2?",
        options: [
          "Elastic Compute Cloud",
          "Elastic Cloud Compute",
          "Enterprise Cloud Computing",
          "Elastic Computing Cloud",
        ],
        correctAnswer: 0,
        explanation: "EC2 provides scalable computing capacity in AWS.",
      },
      {
        id: 27,
        question: "What is S3?",
        options: [
          "Simple Storage Service",
          "Secure Storage Service",
          "System Storage Service",
          "Simple System Service",
        ],
        correctAnswer: 0,
        explanation:
          "S3 provides object storage through a web service interface.",
      },
      {
        id: 28,
        question: "What is RDS?",
        options: [
          "Relational Database Service",
          "Relational Data Service",
          "Remote Database Service",
          "Relational Database System",
        ],
        correctAnswer: 0,
        explanation:
          "RDS makes it easy to set up and operate relational databases in AWS.",
      },
      {
        id: 29,
        question: "What is VPC?",
        options: [
          "Virtual Private Cloud",
          "Virtual Public Cloud",
          "Virtual Private Cluster",
          "Virtual Public Cluster",
        ],
        correctAnswer: 0,
        explanation: "VPC provides isolated cloud resources within AWS.",
      },
      {
        id: 30,
        question: "What is IAM?",
        options: [
          "Identity and Access Management",
          "Internet Access Management",
          "Identity Access Model",
          "Internet Authentication Model",
        ],
        correctAnswer: 0,
        explanation: "IAM controls access to AWS services and resources.",
      },
      {
        id: 31,
        question: "What is CloudFormation?",
        options: [
          "AWS infrastructure as code",
          "Cloud monitoring",
          "Cloud storage",
          "Cloud computing",
        ],
        correctAnswer: 0,
        explanation: "CloudFormation models and sets up AWS resources.",
      },
      {
        id: 32,
        question: "What is CloudWatch?",
        options: [
          "AWS monitoring service",
          "AWS storage service",
          "AWS compute service",
          "AWS database service",
        ],
        correctAnswer: 0,
        explanation: "CloudWatch monitors AWS resources and applications.",
      },
      {
        id: 33,
        question: "What is Route 53?",
        options: [
          "AWS DNS service",
          "AWS routing service",
          "AWS networking service",
          "AWS security service",
        ],
        correctAnswer: 0,
        explanation: "Route 53 is a scalable DNS web service.",
      },
      {
        id: 34,
        question: "What is ECS?",
        options: [
          "Elastic Container Service",
          "Elastic Compute Service",
          "Elastic Cloud Service",
          "Elastic Container System",
        ],
        correctAnswer: 0,
        explanation:
          "ECS is a highly scalable, high-performance container orchestration service.",
      },
      {
        id: 35,
        question: "What is EKS?",
        options: [
          "Elastic Kubernetes Service",
          "Elastic Kubernetes System",
          "Enterprise Kubernetes Service",
          "Elastic Kubernetes Solution",
        ],
        correctAnswer: 0,
        explanation: "EKS makes it easy to run Kubernetes on AWS.",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Test your cybersecurity knowledge and best practices",
    icon: "🔒",
    color: "from-red-500 to-red-600",
    difficulty: "Advanced",
    questions: [
      {
        id: 1,
        question: "What is encryption?",
        options: [
          "Converting data to secret code",
          "Compressing data",
          "Deleting data",
          "Copying data",
        ],
        correctAnswer: 0,
        explanation:
          "Encryption converts information into a secret code to hide its meaning.",
      },
      {
        id: 2,
        question: "What is a firewall?",
        options: [
          "Network security system",
          "Physical wall",
          "Database",
          "Server",
        ],
        correctAnswer: 0,
        explanation:
          "Firewalls monitor and control incoming and outgoing network traffic.",
      },
      {
        id: 3,
        question: "What is malware?",
        options: [
          "Malicious software",
          "Good software",
          "System software",
          "Application software",
        ],
        correctAnswer: 0,
        explanation:
          "Malware is any software intentionally designed to cause damage.",
      },
      {
        id: 4,
        question: "What is phishing?",
        options: [
          "Fraudulent attempt to obtain sensitive information",
          "Fishing online",
          "Photo sharing",
          "File sharing",
        ],
        correctAnswer: 0,
        explanation:
          "Phishing uses disguised email as a weapon to get personal information.",
      },
      {
        id: 5,
        question: "What is a VPN?",
        options: [
          "Virtual Private Network",
          "Virtual Public Network",
          "Visual Private Network",
          "Virtual Personal Network",
        ],
        correctAnswer: 0,
        explanation: "VPN extends a private network across a public network.",
      },
      {
        id: 6,
        question: "What is two-factor authentication?",
        options: [
          "Two-step verification",
          "Single password",
          "No authentication",
          "Three-step verification",
        ],
        correctAnswer: 0,
        explanation: "2FA requires two different forms of identification.",
      },
      {
        id: 7,
        question: "What is a DDoS attack?",
        options: [
          "Distributed Denial of Service",
          "Direct Denial of Service",
          "Distributed Data of Service",
          "Direct Data of Service",
        ],
        correctAnswer: 0,
        explanation:
          "DDoS overwhelms a system with traffic from multiple sources.",
      },
      {
        id: 8,
        question: "What is a vulnerability?",
        options: [
          "Weakness in system security",
          "Strength in system",
          "Feature of system",
          "Component of system",
        ],
        correctAnswer: 0,
        explanation:
          "Vulnerabilities are weaknesses that can be exploited by threats.",
      },
      {
        id: 9,
        question: "What is a patch?",
        options: [
          "Software update fixing vulnerabilities",
          "New software",
          "Hardware component",
          "Network cable",
        ],
        correctAnswer: 0,
        explanation:
          "Patches fix security vulnerabilities or improve software.",
      },
      {
        id: 10,
        question: "What is social engineering?",
        options: [
          "Psychological manipulation",
          "Engineering software",
          "Social media",
          "Engineering hardware",
        ],
        correctAnswer: 0,
        explanation:
          "Social engineering tricks people into giving up confidential information.",
      },
      {
        id: 11,
        question: "What is a honeypot?",
        options: ["Decoy system", "Real system", "Honey storage", "Sweet trap"],
        correctAnswer: 0,
        explanation: "Honeypots attract attackers to study their methods.",
      },
      {
        id: 12,
        question: "What is penetration testing?",
        options: [
          "Authorized simulated attack",
          "Unauthorized attack",
          "System maintenance",
          "Network monitoring",
        ],
        correctAnswer: 0,
        explanation:
          "Pen testing evaluates system security by simulating attacks.",
      },
      {
        id: 13,
        question: "What is SSL/TLS?",
        options: [
          "Encryption protocols",
          "Programming languages",
          "Operating systems",
          "Database systems",
        ],
        correctAnswer: 0,
        explanation:
          "SSL/TLS encrypts data sent between web servers and browsers.",
      },
      {
        id: 14,
        question: "What is a brute force attack?",
        options: [
          "Trying all possible combinations",
          "Social engineering",
          "Phishing",
          "Malware",
        ],
        correctAnswer: 0,
        explanation:
          "Brute force tries every possible combination to crack passwords.",
      },
      {
        id: 15,
        question: "What is ransomware?",
        options: [
          "Malware that encrypts files for ransom",
          "Virus",
          "Worm",
          "Trojan",
        ],
        correctAnswer: 0,
        explanation:
          "Ransomware blocks access to systems until ransom is paid.",
      },
      {
        id: 16,
        question: "What is a zero-day vulnerability?",
        options: [
          "Unknown vulnerability",
          "Known vulnerability",
          "Fixed vulnerability",
          "Minor vulnerability",
        ],
        correctAnswer: 0,
        explanation:
          "Zero-day vulnerabilities are unknown to software vendors.",
      },
      {
        id: 17,
        question: "What is network segmentation?",
        options: [
          "Dividing network into segments",
          "Combining networks",
          "Deleting networks",
          "Copying networks",
        ],
        correctAnswer: 0,
        explanation:
          "Network segmentation improves security by isolating network sections.",
      },
      {
        id: 18,
        question: "What is biometric authentication?",
        options: [
          "Using biological characteristics",
          "Using passwords",
          "Using tokens",
          "Using cards",
        ],
        correctAnswer: 0,
        explanation:
          "Biometrics uses fingerprints, facial recognition, etc. for authentication.",
      },
      {
        id: 19,
        question: "What is a security audit?",
        options: [
          "Systematic evaluation of security",
          "Random check",
          "Informal review",
          "Quick glance",
        ],
        correctAnswer: 0,
        explanation: "Security audits examine and evaluate security measures.",
      },
      {
        id: 20,
        question: "What is data masking?",
        options: [
          "Hiding original data",
          "Deleting data",
          "Copying data",
          "Moving data",
        ],
        correctAnswer: 0,
        explanation:
          "Data masking creates fake but realistic versions of data.",
      },
      {
        id: 21,
        question: "What is endpoint security?",
        options: [
          "Securing end-user devices",
          "Securing servers",
          "Securing networks",
          "Securing databases",
        ],
        correctAnswer: 0,
        explanation:
          "Endpoint security protects devices like laptops and phones.",
      },
      {
        id: 22,
        question: "What is a security policy?",
        options: [
          "Formal statement of rules",
          "Informal guideline",
          "Technical manual",
          "User guide",
        ],
        correctAnswer: 0,
        explanation:
          "Security policies define how to protect organizational assets.",
      },
      {
        id: 23,
        question: "What is incident response?",
        options: [
          "Handling security breaches",
          "Preventing breaches",
          "Ignoring breaches",
          "Creating breaches",
        ],
        correctAnswer: 0,
        explanation:
          "Incident response manages consequences of security breaches.",
      },
      {
        id: 24,
        question: "What is a security token?",
        options: [
          "Physical authentication device",
          "Software token",
          "Password",
          "Username",
        ],
        correctAnswer: 0,
        explanation: "Security tokens generate authentication codes.",
      },
      {
        id: 25,
        question: "What is network monitoring?",
        options: [
          "Observing network activity",
          "Building networks",
          "Designing networks",
          "Deleting networks",
        ],
        correctAnswer: 0,
        explanation:
          "Network monitoring tracks network performance and security.",
      },
      {
        id: 26,
        question: "What is access control?",
        options: [
          "Restricting resource access",
          "Granting all access",
          "No access control",
          "Random access",
        ],
        correctAnswer: 0,
        explanation: "Access control determines who can access what resources.",
      },
      {
        id: 27,
        question: "What is data loss prevention?",
        options: [
          "Preventing data leakage",
          "Causing data loss",
          "Ignoring data loss",
          "Encouraging data sharing",
        ],
        correctAnswer: 0,
        explanation:
          "DLP prevents sensitive data from leaving the organization.",
      },
      {
        id: 28,
        question: "What is a security information and event management system?",
        options: ["SIEM system", "SIM system", "SEM system", "SIE system"],
        correctAnswer: 0,
        explanation: "SIEM provides real-time analysis of security alerts.",
      },
      {
        id: 29,
        question: "What is a man-in-the-middle attack?",
        options: [
          "Intercepting communication",
          "Direct attack",
          "Physical attack",
          "Social engineering",
        ],
        correctAnswer: 0,
        explanation: "MITM secretly relays and possibly alters communication.",
      },
      {
        id: 30,
        question: "What is a security certification?",
        options: [
          "Formal recognition of security skills",
          "Informal recognition",
          "Degree",
          "Diploma",
        ],
        correctAnswer: 0,
        explanation:
          "Security certifications validate cybersecurity expertise.",
      },
      {
        id: 31,
        question: "What is a security baseline?",
        options: [
          "Minimum security standards",
          "Maximum security",
          "Average security",
          "No security",
        ],
        correctAnswer: 0,
        explanation: "Security baselines define minimum security requirements.",
      },
      {
        id: 32,
        question: "What is threat intelligence?",
        options: [
          "Information about threats",
          "Creating threats",
          "Ignoring threats",
          "Amplifying threats",
        ],
        correctAnswer: 0,
        explanation:
          "Threat intelligence helps understand and counter threats.",
      },
      {
        id: 33,
        question: "What is a security architecture?",
        options: [
          "Design of security systems",
          "Building security",
          "Testing security",
          "Monitoring security",
        ],
        correctAnswer: 0,
        explanation:
          "Security architecture designs security structures and systems.",
      },
      {
        id: 34,
        question: "What is a security control?",
        options: [
          "Measure to reduce risk",
          "Risk creator",
          "Risk amplifier",
          "Risk ignore",
        ],
        correctAnswer: 0,
        explanation: "Security controls safeguard against security risks.",
      },
      {
        id: 35,
        question: "What is ethical hacking?",
        options: [
          "Legal hacking to improve security",
          "Illegal hacking",
          "Random hacking",
          "Accidental hacking",
        ],
        correctAnswer: 0,
        explanation: "Ethical hacking identifies vulnerabilities to fix them.",
      },
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    description: "Test your mobile app development knowledge",
    icon: "📱",
    color: "from-indigo-500 to-indigo-600",
    difficulty: "Intermediate",
    questions: [
      {
        id: 1,
        question: "What is React Native?",
        options: [
          "Framework for building native apps with React",
          "Web framework",
          "Desktop framework",
          "Game engine",
        ],
        correctAnswer: 0,
        explanation:
          "React Native builds mobile apps using JavaScript and React.",
      },
      {
        id: 2,
        question: "What is Flutter?",
        options: [
          "UI toolkit by Google",
          "Web framework",
          "Database",
          "Programming language",
        ],
        correctAnswer: 0,
        explanation:
          "Flutter builds natively compiled applications from a single codebase.",
      },
      {
        id: 3,
        question: "What is Android?",
        options: [
          "Mobile operating system by Google",
          "Apple OS",
          "Microsoft OS",
          "Linux distribution",
        ],
        correctAnswer: 0,
        explanation: "Android is an open-source mobile OS developed by Google.",
      },
      {
        id: 4,
        question: "What is iOS?",
        options: [
          "Apple's mobile operating system",
          "Google OS",
          "Microsoft OS",
          "Android version",
        ],
        correctAnswer: 0,
        explanation:
          "iOS is Apple's mobile operating system for iPhones and iPads.",
      },
      {
        id: 5,
        question: "What is Kotlin?",
        options: [
          "Programming language for Android",
          "iOS language",
          "Web language",
          "Database language",
        ],
        correctAnswer: 0,
        explanation:
          "Kotlin is Google's preferred language for Android development.",
      },
      {
        id: 6,
        question: "What is Swift?",
        options: [
          "Programming language for iOS",
          "Android language",
          "Web language",
          "Database language",
        ],
        correctAnswer: 0,
        explanation: "Swift is Apple's programming language for iOS and macOS.",
      },
      {
        id: 7,
        question: "What is Dart?",
        options: [
          "Programming language for Flutter",
          "Web language",
          "Database language",
          "System language",
        ],
        correctAnswer: 0,
        explanation: "Dart is the programming language used by Flutter.",
      },
      {
        id: 8,
        question: "What is Xcode?",
        options: [
          "IDE for Apple development",
          "Android IDE",
          "Web IDE",
          "Database IDE",
        ],
        correctAnswer: 0,
        explanation: "Xcode is Apple's integrated development environment.",
      },
      {
        id: 9,
        question: "What is Android Studio?",
        options: [
          "IDE for Android development",
          "iOS IDE",
          "Web IDE",
          "Database IDE",
        ],
        correctAnswer: 0,
        explanation:
          "Android Studio is the official IDE for Android development.",
      },
      {
        id: 10,
        question: "What is an APK?",
        options: [
          "Android application package",
          "iOS package",
          "Web package",
          "Database package",
        ],
        correctAnswer: 0,
        explanation: "APK is the file format used to distribute Android apps.",
      },
      {
        id: 11,
        question: "What is an IPA?",
        options: [
          "iOS application archive",
          "Android package",
          "Web archive",
          "Database archive",
        ],
        correctAnswer: 0,
        explanation: "IPA is the iOS application archive file format.",
      },
      {
        id: 12,
        question: "What is a hybrid app?",
        options: [
          "Web app in native container",
          "Native app",
          "Web app",
          "Desktop app",
        ],
        correctAnswer: 0,
        explanation: "Hybrid apps combine web and native app technologies.",
      },
      {
        id: 13,
        question: "What is a native app?",
        options: [
          "App built for specific platform",
          "Web app",
          "Hybrid app",
          "Desktop app",
        ],
        correctAnswer: 0,
        explanation: "Native apps are developed specifically for one platform.",
      },
      {
        id: 14,
        question: "What is a progressive web app?",
        options: [
          "Web app with native features",
          "Native app",
          "Hybrid app",
          "Desktop app",
        ],
        correctAnswer: 0,
        explanation: "PWAs are web apps that work like native apps.",
      },
      {
        id: 15,
        question: "What is Expo?",
        options: [
          "Framework for React Native",
          "Flutter framework",
          "Android framework",
          "iOS framework",
        ],
        correctAnswer: 0,
        explanation: "Expo is a framework and platform for React Native apps.",
      },
      {
        id: 16,
        question: "What is a widget in Flutter?",
        options: [
          "UI building block",
          "Database object",
          "Network component",
          "File object",
        ],
        correctAnswer: 0,
        explanation:
          "Everything in Flutter is a widget - the basic building blocks.",
      },
      {
        id: 17,
        question: "What is Jetpack Compose?",
        options: [
          "Modern UI toolkit for Android",
          "iOS UI framework",
          "Web framework",
          "Database toolkit",
        ],
        correctAnswer: 0,
        explanation:
          "Jetpack Compose is Android's modern toolkit for building native UI.",
      },
      {
        id: 18,
        question: "What is SwiftUI?",
        options: [
          "Declarative UI framework for Apple",
          "Android UI",
          "Web UI",
          "Database UI",
        ],
        correctAnswer: 0,
        explanation: "SwiftUI is Apple's declarative UI framework.",
      },
      {
        id: 19,
        question: "What is Material Design?",
        options: [
          "Design system by Google",
          "Apple design",
          "Microsoft design",
          "Linux design",
        ],
        correctAnswer: 0,
        explanation: "Material Design is Google's design language for apps.",
      },
      {
        id: 20,
        question: "What is Human Interface Guidelines?",
        options: [
          "Apple's design guidelines",
          "Google guidelines",
          "Microsoft guidelines",
          "Linux guidelines",
        ],
        correctAnswer: 0,
        explanation: "HIG provides design guidelines for Apple platforms.",
      },
      {
        id: 21,
        question: "What is Firebase?",
        options: [
          "Backend platform by Google",
          "Frontend framework",
          "Database only",
          "Hosting only",
        ],
        correctAnswer: 0,
        explanation:
          "Firebase provides backend services for mobile and web apps.",
      },
      {
        id: 22,
        question: "What is Core Data?",
        options: [
          "Apple's persistence framework",
          "Google framework",
          "Database",
          "Network library",
        ],
        correctAnswer: 0,
        explanation: "Core Data is Apple's framework for data persistence.",
      },
      {
        id: 23,
        question: "What is Room?",
        options: [
          "Android persistence library",
          "iOS library",
          "Web library",
          "Network library",
        ],
        correctAnswer: 0,
        explanation: "Room is an abstraction layer over SQLite for Android.",
      },
      {
        id: 24,
        question: "What is Retrofit?",
        options: [
          "HTTP client for Android",
          "iOS client",
          "Web client",
          "Database client",
        ],
        correctAnswer: 0,
        explanation:
          "Retrofit is a type-safe HTTP client for Android and Java.",
      },
      {
        id: 25,
        question: "What is Alamofire?",
        options: [
          "HTTP networking library for iOS",
          "Android library",
          "Web library",
          "Database library",
        ],
        correctAnswer: 0,
        explanation: "Alamofire is an HTTP networking library for iOS.",
      },
      {
        id: 26,
        question: "What is push notification?",
        options: [
          "Message sent to device",
          "Local notification",
          "Email notification",
          "SMS notification",
        ],
        correctAnswer: 0,
        explanation:
          "Push notifications are messages sent from server to device.",
      },
      {
        id: 27,
        question: "What is App Store?",
        options: [
          "Apple's app marketplace",
          "Google store",
          "Microsoft store",
          "Amazon store",
        ],
        correctAnswer: 0,
        explanation: "App Store is Apple's digital distribution platform.",
      },
      {
        id: 28,
        question: "What is Google Play Store?",
        options: [
          "Google's app marketplace",
          "Apple store",
          "Microsoft store",
          "Amazon store",
        ],
        correctAnswer: 0,
        explanation: "Play Store is Google's official app store for Android.",
      },
      {
        id: 29,
        question: "What is in-app purchase?",
        options: [
          "Buying within app",
          "App purchase",
          "Free download",
          "Ad viewing",
        ],
        correctAnswer: 0,
        explanation: "In-app purchases allow buying digital goods within apps.",
      },
      {
        id: 30,
        question: "What is app monetization?",
        options: [
          "Making money from app",
          "Free app",
          "Paid app",
          "Open source app",
        ],
        correctAnswer: 0,
        explanation:
          "App monetization generates revenue from mobile applications.",
      },
      {
        id: 31,
        question: "What is user acquisition?",
        options: [
          "Getting new users",
          "Losing users",
          "Keeping users",
          "Deleting users",
        ],
        correctAnswer: 0,
        explanation: "User acquisition is the process of gaining new users.",
      },
      {
        id: 32,
        question: "What is user retention?",
        options: [
          "Keeping existing users",
          "Getting new users",
          "Losing users",
          "Deleting users",
        ],
        correctAnswer: 0,
        explanation:
          "User retention focuses on keeping users engaged over time.",
      },
      {
        id: 33,
        question: "What is app analytics?",
        options: [
          "Tracking app usage",
          "App design",
          "App development",
          "App testing",
        ],
        correctAnswer: 0,
        explanation: "App analytics collects and analyzes app usage data.",
      },
      {
        id: 34,
        question: "What is A/B testing in apps?",
        options: [
          "Testing different versions",
          "Single version test",
          "No testing",
          "Random testing",
        ],
        correctAnswer: 0,
        explanation:
          "A/B testing compares different app versions to see which performs better.",
      },
      {
        id: 35,
        question: "What is mobile first design?",
        options: [
          "Designing for mobile first",
          "Desktop first",
          "Tablet first",
          "TV first",
        ],
        correctAnswer: 0,
        explanation:
          "Mobile first prioritizes mobile experience in design process.",
      },
    ],
  },
  {
    id: "database",
    title: "Database Systems",
    description: "Master database concepts and technologies",
    icon: "🗄️",
    color: "from-teal-500 to-teal-600",
    difficulty: "Intermediate",
    questions: [
      {
        id: 1,
        question: "What is SQL?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Question Language",
          "System Query Logic",
        ],
        correctAnswer: 0,
        explanation:
          "SQL is used to communicate with and manipulate databases.",
      },
      {
        id: 2,
        question: "What is a relational database?",
        options: [
          "Database with tables and relations",
          "Document database",
          "Graph database",
          "Key-value store",
        ],
        correctAnswer: 0,
        explanation:
          "Relational databases organize data into tables with rows and columns.",
      },
      {
        id: 3,
        question: "What is NoSQL?",
        options: [
          "Non-relational database",
          "New SQL",
          "Not SQL",
          "Network SQL",
        ],
        correctAnswer: 0,
        explanation: "NoSQL databases don't use traditional table structures.",
      },
      {
        id: 4,
        question: "What is MongoDB?",
        options: [
          "Document database",
          "Relational database",
          "Graph database",
          "Key-value store",
        ],
        correctAnswer: 0,
        explanation: "MongoDB is a popular document-oriented NoSQL database.",
      },
      {
        id: 5,
        question: "What is MySQL?",
        options: [
          "Open-source relational database",
          "NoSQL database",
          "Graph database",
          "Document database",
        ],
        correctAnswer: 0,
        explanation:
          "MySQL is an open-source relational database management system.",
      },
      {
        id: 6,
        question: "What is PostgreSQL?",
        options: [
          "Advanced open-source relational database",
          "NoSQL database",
          "Graph database",
          "Document database",
        ],
        correctAnswer: 0,
        explanation:
          "PostgreSQL is a powerful, open-source object-relational database.",
      },
      {
        id: 7,
        question: "What is Redis?",
        options: [
          "In-memory data structure store",
          "Relational database",
          "Document database",
          "Graph database",
        ],
        correctAnswer: 0,
        explanation:
          "Redis is an in-memory data structure store used as database, cache, and message broker.",
      },
      {
        id: 8,
        question: "What is a primary key?",
        options: [
          "Unique identifier for table rows",
          "Foreign key",
          "Composite key",
          "Candidate key",
        ],
        correctAnswer: 0,
        explanation: "Primary keys uniquely identify each record in a table.",
      },
      {
        id: 9,
        question: "What is a foreign key?",
        options: [
          "Reference to another table's primary key",
          "Primary key",
          "Unique key",
          "Composite key",
        ],
        correctAnswer: 0,
        explanation: "Foreign keys create relationships between tables.",
      },
      {
        id: 10,
        question: "What is normalization?",
        options: [
          "Organizing data to reduce redundancy",
          "Denormalizing data",
          "Copying data",
          "Deleting data",
        ],
        correctAnswer: 0,
        explanation:
          "Normalization structures databases to minimize redundancy.",
      },
      {
        id: 11,
        question: "What is an index?",
        options: [
          "Database performance optimization",
          "Table",
          "View",
          "Procedure",
        ],
        correctAnswer: 0,
        explanation: "Indexes speed up data retrieval operations.",
      },
      {
        id: 12,
        question: "What is a transaction?",
        options: [
          "Single unit of work",
          "Multiple operations",
          "Database table",
          "Query result",
        ],
        correctAnswer: 0,
        explanation:
          "Transactions ensure database operations are completed as a whole.",
      },
      {
        id: 13,
        question: "What is ACID?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Integrity, Design",
          "Analysis, Creation, Implementation, Design",
          "Application, Cloud, Internet, Database",
        ],
        correctAnswer: 0,
        explanation: "ACID properties ensure reliable database transactions.",
      },
      {
        id: 14,
        question: "What is a view?",
        options: [
          "Virtual table based on query",
          "Physical table",
          "Index",
          "Procedure",
        ],
        correctAnswer: 0,
        explanation: "Views are saved SQL queries that act as virtual tables.",
      },
      {
        id: 15,
        question: "What is a stored procedure?",
        options: ["Prepared SQL code", "Table", "View", "Index"],
        correctAnswer: 0,
        explanation:
          "Stored procedures are prepared SQL code that can be saved and reused.",
      },
      {
        id: 16,
        question: "What is a trigger?",
        options: [
          "Automatic action on database event",
          "Manual action",
          "Scheduled job",
          "Backup",
        ],
        correctAnswer: 0,
        explanation:
          "Triggers automatically execute in response to certain events.",
      },
      {
        id: 17,
        question: "What is ORM?",
        options: [
          "Object-Relational Mapping",
          "Object-Random Mapping",
          "Online-Relational Mapping",
          "Object-Reference Mapping",
        ],
        correctAnswer: 0,
        explanation: "ORM converts data between incompatible type systems.",
      },
      {
        id: 18,
        question: "What is a data warehouse?",
        options: [
          "Central repository for data analysis",
          "Operational database",
          "Transaction database",
          "Real-time database",
        ],
        correctAnswer: 0,
        explanation:
          "Data warehouses store integrated data from multiple sources.",
      },
      {
        id: 19,
        question: "What is ETL?",
        options: [
          "Extract, Transform, Load",
          "Enter, Transfer, Leave",
          "Extract, Transfer, Load",
          "Enter, Transform, Leave",
        ],
        correctAnswer: 0,
        explanation: "ETL processes data from source to destination.",
      },
      {
        id: 20,
        question: "What is data mining?",
        options: [
          "Discovering patterns in data",
          "Storing data",
          "Cleaning data",
          "Deleting data",
        ],
        correctAnswer: 0,
        explanation: "Data mining extracts knowledge from large datasets.",
      },
      {
        id: 21,
        question: "What is a database schema?",
        options: [
          "Structure of database",
          "Database data",
          "Database user",
          "Database backup",
        ],
        correctAnswer: 0,
        explanation: "Schema defines how data is organized in a database.",
      },
      {
        id: 22,
        question: "What is replication?",
        options: [
          "Copying data to multiple locations",
          "Deleting data",
          "Modifying data",
          "Backing up data",
        ],
        correctAnswer: 0,
        explanation:
          "Replication copies and maintains database objects in multiple databases.",
      },
      {
        id: 23,
        question: "What is sharding?",
        options: [
          "Horizontal partitioning of data",
          "Vertical partitioning",
          "Data deletion",
          "Data backup",
        ],
        correctAnswer: 0,
        explanation: "Sharding distributes data across multiple machines.",
      },
      {
        id: 24,
        question: "What is a deadlock?",
        options: [
          "When transactions wait for each other",
          "Successful transaction",
          "Failed transaction",
          "Rolled back transaction",
        ],
        correctAnswer: 0,
        explanation:
          "Deadlocks occur when transactions wait indefinitely for each other.",
      },
      {
        id: 25,
        question: "What is database tuning?",
        options: [
          "Optimizing database performance",
          "Creating database",
          "Deleting database",
          "Backing up database",
        ],
        correctAnswer: 0,
        explanation: "Database tuning improves database performance.",
      },
      {
        id: 26,
        question: "What is a cursor?",
        options: [
          "Database object to retrieve rows",
          "Pointer",
          "Index",
          "View",
        ],
        correctAnswer: 0,
        explanation: "Cursors retrieve rows from result sets one at a time.",
      },
      {
        id: 27,
        question: "What is a join?",
        options: [
          "Combine rows from multiple tables",
          "Separate tables",
          "Delete tables",
          "Create tables",
        ],
        correctAnswer: 0,
        explanation: "Joins combine columns from one or more tables.",
      },
      {
        id: 28,
        question: "What is a subquery?",
        options: [
          "Query within a query",
          "Main query",
          "Simple query",
          "Complex query",
        ],
        correctAnswer: 0,
        explanation: "Subqueries are nested queries within larger queries.",
      },
      {
        id: 29,
        question: "What is a database trigger?",
        options: [
          "Automatic action on event",
          "Manual action",
          "User action",
          "System action",
        ],
        correctAnswer: 0,
        explanation: "Triggers automatically respond to specific events.",
      },
      {
        id: 30,
        question: "What is data integrity?",
        options: [
          "Accuracy and consistency of data",
          "Data speed",
          "Data size",
          "Data cost",
        ],
        correctAnswer: 0,
        explanation: "Data integrity ensures accuracy and consistency of data.",
      },
      {
        id: 31,
        question: "What is a database constraint?",
        options: [
          "Rule enforced on data",
          "Data type",
          "Table name",
          "Column name",
        ],
        correctAnswer: 0,
        explanation: "Constraints enforce rules on data columns.",
      },
      {
        id: 32,
        question: "What is a database view?",
        options: [
          "Virtual table",
          "Physical table",
          "Temporary table",
          "System table",
        ],
        correctAnswer: 0,
        explanation: "Views display data from one or more tables.",
      },
      {
        id: 33,
        question: "What is database security?",
        options: [
          "Protecting database from threats",
          "Database speed",
          "Database size",
          "Database cost",
        ],
        correctAnswer: 0,
        explanation:
          "Database security protects databases from unauthorized access.",
      },
      {
        id: 34,
        question: "What is database backup?",
        options: [
          "Copy of database data",
          "Database query",
          "Database table",
          "Database index",
        ],
        correctAnswer: 0,
        explanation: "Backups create copies of database for recovery.",
      },
      {
        id: 35,
        question: "What is database recovery?",
        options: [
          "Restoring database after failure",
          "Backing up database",
          "Creating database",
          "Deleting database",
        ],
        correctAnswer: 0,
        explanation:
          "Recovery restores databases to consistent state after failure.",
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain & Crypto",
    description: "Explore blockchain technology and cryptocurrencies",
    icon: "⛓️",
    color: "from-gray-700 to-gray-800",
    difficulty: "Advanced",
    questions: [
      {
        id: 1,
        question: "What is blockchain?",
        options: [
          "Distributed ledger technology",
          "Centralized database",
          "Cloud storage",
          "File system",
        ],
        correctAnswer: 0,
        explanation:
          "Blockchain is a decentralized, distributed ledger technology.",
      },
      {
        id: 2,
        question: "What is Bitcoin?",
        options: [
          "First cryptocurrency",
          "Second cryptocurrency",
          "Company",
          "Bank",
        ],
        correctAnswer: 0,
        explanation: "Bitcoin was the first decentralized cryptocurrency.",
      },
      {
        id: 3,
        question: "What is Ethereum?",
        options: [
          "Blockchain with smart contracts",
          "Cryptocurrency only",
          "Company",
          "Bank",
        ],
        correctAnswer: 0,
        explanation: "Ethereum introduced smart contract functionality.",
      },
      {
        id: 4,
        question: "What is a smart contract?",
        options: [
          "Self-executing contract",
          "Paper contract",
          "Verbal contract",
          "Digital document",
        ],
        correctAnswer: 0,
        explanation:
          "Smart contracts automatically execute when conditions are met.",
      },
      {
        id: 5,
        question: "What is mining?",
        options: [
          "Validating transactions and creating new blocks",
          "Buying cryptocurrency",
          "Selling cryptocurrency",
          "Storing cryptocurrency",
        ],
        correctAnswer: 0,
        explanation:
          "Mining validates transactions and adds them to the blockchain.",
      },
      {
        id: 6,
        question: "What is proof of work?",
        options: [
          "Consensus algorithm requiring computational work",
          "Proof of stake",
          "Proof of authority",
          "Proof of history",
        ],
        correctAnswer: 0,
        explanation:
          "PoW requires miners to solve complex mathematical problems.",
      },
      {
        id: 7,
        question: "What is proof of stake?",
        options: [
          "Consensus algorithm based on coin ownership",
          "Proof of work",
          "Proof of authority",
          "Proof of history",
        ],
        correctAnswer: 0,
        explanation: "PoS validates transactions based on coin ownership.",
      },
      {
        id: 8,
        question: "What is a cryptocurrency wallet?",
        options: [
          "Stores crypto keys",
          "Stores actual coins",
          "Bank account",
          "Physical wallet",
        ],
        correctAnswer: 0,
        explanation:
          "Wallets store public and private keys for cryptocurrency transactions.",
      },
      {
        id: 9,
        question: "What is DeFi?",
        options: [
          "Decentralized Finance",
          "Centralized Finance",
          "Digital Finance",
          "Distributed Finance",
        ],
        correctAnswer: 0,
        explanation:
          "DeFi offers financial instruments without central intermediaries.",
      },
      {
        id: 10,
        question: "What is an NFT?",
        options: [
          "Non-Fungible Token",
          "Fungible Token",
          "Digital currency",
          "Smart contract",
        ],
        correctAnswer: 0,
        explanation: "NFTs represent unique digital items on the blockchain.",
      },
      {
        id: 11,
        question: "What is a DAO?",
        options: [
          "Decentralized Autonomous Organization",
          "Centralized organization",
          "Government agency",
          "Corporation",
        ],
        correctAnswer: 0,
        explanation: "DAOs are organizations governed by smart contracts.",
      },
      {
        id: 12,
        question: "What is Web3?",
        options: ["Decentralized web", "Current web", "Old web", "Social web"],
        correctAnswer: 0,
        explanation:
          "Web3 refers to a decentralized internet built on blockchain.",
      },
      {
        id: 13,
        question: "What is gas fee?",
        options: [
          "Transaction fee on Ethereum",
          "Bitcoin fee",
          "Bank fee",
          "Exchange fee",
        ],
        correctAnswer: 0,
        explanation: "Gas fees pay for computation on the Ethereum network.",
      },
      {
        id: 14,
        question: "What is a blockchain node?",
        options: [
          "Device running blockchain software",
          "Mining rig",
          "Wallet",
          "Exchange",
        ],
        correctAnswer: 0,
        explanation:
          "Nodes store copies of the blockchain and validate transactions.",
      },
      {
        id: 15,
        question: "What is a hard fork?",
        options: [
          "Permanent blockchain divergence",
          "Soft fork",
          "Update",
          "Bug fix",
        ],
        correctAnswer: 0,
        explanation:
          "Hard forks create permanent divergence from previous blockchain.",
      },
      {
        id: 16,
        question: "What is a soft fork?",
        options: [
          "Backward-compatible blockchain update",
          "Hard fork",
          "New blockchain",
          "Sidechain",
        ],
        correctAnswer: 0,
        explanation: "Soft forks are backward-compatible updates.",
      },
      {
        id: 17,
        question: "What is a consensus mechanism?",
        options: [
          "Method to agree on blockchain state",
          "Mining method",
          "Trading method",
          "Storage method",
        ],
        correctAnswer: 0,
        explanation:
          "Consensus mechanisms ensure agreement on blockchain state.",
      },
      {
        id: 18,
        question: "What is a blockchain explorer?",
        options: [
          "Tool to view blockchain transactions",
          "Wallet",
          "Exchange",
          "Mining software",
        ],
        correctAnswer: 0,
        explanation:
          "Block explorers allow viewing transactions and addresses.",
      },
      {
        id: 19,
        question: "What is a dApp?",
        options: [
          "Decentralized application",
          "Centralized app",
          "Mobile app",
          "Web app",
        ],
        correctAnswer: 0,
        explanation: "dApps run on decentralized networks like blockchain.",
      },
      {
        id: 20,
        question: "What is tokenization?",
        options: [
          "Converting assets into digital tokens",
          "Creating coins",
          "Mining",
          "Trading",
        ],
        correctAnswer: 0,
        explanation:
          "Tokenization represents real-world assets as digital tokens.",
      },
      {
        id: 21,
        question: "What is a stablecoin?",
        options: [
          "Cryptocurrency pegged to stable asset",
          "Volatile cryptocurrency",
          "Mining reward",
          "Transaction fee",
        ],
        correctAnswer: 0,
        explanation:
          "Stablecoins maintain stable value by pegging to assets like USD.",
      },
      {
        id: 22,
        question: "What is yield farming?",
        options: [
          "Earning rewards with cryptocurrency",
          "Traditional farming",
          "Mining",
          "Trading",
        ],
        correctAnswer: 0,
        explanation:
          "Yield farming earns rewards by lending or staking crypto.",
      },
      {
        id: 23,
        question: "What is liquidity mining?",
        options: [
          "Providing liquidity for rewards",
          "Traditional mining",
          "Yield farming",
          "Staking",
        ],
        correctAnswer: 0,
        explanation:
          "Liquidity mining provides liquidity to exchanges for rewards.",
      },
      {
        id: 24,
        question: "What is staking?",
        options: [
          "Locking crypto to support network",
          "Trading",
          "Mining",
          "Selling",
        ],
        correctAnswer: 0,
        explanation:
          "Staking involves locking cryptocurrency to support network operations.",
      },
      {
        id: 25,
        question: "What is a blockchain oracle?",
        options: [
          "Bridges blockchain and real-world data",
          "Mining device",
          "Wallet",
          "Exchange",
        ],
        correctAnswer: 0,
        explanation: "Oracles provide external data to smart contracts.",
      },
      {
        id: 26,
        question: "What is a sidechain?",
        options: [
          "Separate blockchain linked to main chain",
          "Main blockchain",
          "Test network",
          "Private network",
        ],
        correctAnswer: 0,
        explanation: "Sidechains operate parallel to main blockchain.",
      },
      {
        id: 27,
        question: "What is a testnet?",
        options: [
          "Blockchain testing environment",
          "Main network",
          "Private network",
          "Sidechain",
        ],
        correctAnswer: 0,
        explanation: "Testnets allow testing without real cryptocurrency.",
      },
      {
        id: 28,
        question: "What is a mainnet?",
        options: [
          "Live blockchain network",
          "Test network",
          "Private network",
          "Sidechain",
        ],
        correctAnswer: 0,
        explanation:
          "Mainnets are live blockchain networks with real transactions.",
      },
      {
        id: 29,
        question: "What is a private key?",
        options: [
          "Secret key to access cryptocurrency",
          "Public key",
          "Wallet address",
          "Transaction ID",
        ],
        correctAnswer: 0,
        explanation: "Private keys prove ownership and authorize transactions.",
      },
      {
        id: 30,
        question: "What is a public key?",
        options: [
          "Address to receive cryptocurrency",
          "Private key",
          "Wallet password",
          "Exchange key",
        ],
        correctAnswer: 0,
        explanation:
          "Public keys generate addresses to receive cryptocurrency.",
      },
      {
        id: 31,
        question: "What is a hash function?",
        options: [
          "Converts data to fixed-size string",
          "Encryption",
          "Decryption",
          "Compression",
        ],
        correctAnswer: 0,
        explanation:
          "Hash functions create unique digital fingerprints of data.",
      },
      {
        id: 32,
        question: "What is a Merkle tree?",
        options: [
          "Data structure for efficient verification",
          "Blockchain type",
          "Consensus algorithm",
          "Mining method",
        ],
        correctAnswer: 0,
        explanation: "Merkle trees efficiently verify large data structures.",
      },
      {
        id: 33,
        question: "What is a 51% attack?",
        options: [
          "Controlling majority of mining power",
          "Minority attack",
          "Network upgrade",
          "Fork",
        ],
        correctAnswer: 0,
        explanation:
          "51% attacks occur when entity controls majority of mining power.",
      },
      {
        id: 34,
        question: "What is cross-chain technology?",
        options: [
          "Interoperability between blockchains",
          "Single blockchain",
          "Private blockchain",
          "Test network",
        ],
        correctAnswer: 0,
        explanation:
          "Cross-chain enables communication between different blockchains.",
      },
      {
        id: 35,
        question: "What is zero-knowledge proof?",
        options: [
          "Proves knowledge without revealing information",
          "Full disclosure",
          "Partial disclosure",
          "No proof",
        ],
        correctAnswer: 0,
        explanation:
          "ZK proofs verify information without revealing the information itself.",
      },
    ],
  },
];
