export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: string;
  categories: {
    id: string;
    name: string;
    description: string;
    icon: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }[];
  }[];
}

export const quizzes: Quiz[] = [
  {
    "id": "python",
    "color": "from-indigo-500 via-purple-500 to-pink-500",
    "title": "Python",
    "description": "Master Python fundamentals with categorized difficulty levels",
    "icon": "🐍",
    "difficulty": "Mixed",
    "categories": [
      {
        "id": "easy",
        "name": "Easy",
        "description": "Beginner-friendly Python fundamentals",
        "icon": "⭐",
        "questions": [
          {
            "id": 1,
            "question": "What does 'len()' function do in Python?",
            "options": ["Returns length", "Calculates angle", "Checks existence", "Removes spaces"],
            "correctAnswer": 0,
            "explanation": "len() returns the number of items in an object."
          },
          {
            "id": 2,
            "question": "How do you output text to the console?",
            "options": ["console.log()", "print()", "echo()", "write()"],
            "correctAnswer": 1,
            "explanation": "The print() function sends data to the standard output."
          },
          {
            "id": 3,
            "question": "Which symbol creates a single-line comment?",
            "options": ["//", "#", "--", "/*"],
            "correctAnswer": 1,
            "explanation": "Python uses the hash symbol (#) for comments."
          },
          {
            "id": 4,
            "question": "What is the correct file extension for Python files?",
            "options": [".pyt", ".py", ".pt", ".ptr"],
            "correctAnswer": 1,
            "explanation": "Python source files use the .py extension."
          },
          {
            "id": 5,
            "question": "How do you create a variable with the value 5?",
            "options": ["x = 5", "int x = 5", "x : 5", "var x = 5"],
            "correctAnswer": 0,
            "explanation": "Python variables are created by simple assignment (x = 5) without declaring types."
          },
          {
            "id": 6,
            "question": "What is the result of 10 // 3?",
            "options": ["3", "3.33", "1", "3.0"],
            "correctAnswer": 0,
            "explanation": "The // operator performs floor division, returning the integer part of the quotient."
          },
          {
            "id": 7,
            "question": "Which creates a list?",
            "options": ["[]", "{}", "()", "<>"],
            "correctAnswer": 0,
            "explanation": "Square brackets [] are used to define lists."
          },
          {
            "id": 8,
            "question": "What creates a dictionary?",
            "options": ["[]", "{}", "()", "dict[]"],
            "correctAnswer": 1,
            "explanation": "Curly braces {} are used for dictionaries (and sets)."
          },
          {
            "id": 9,
            "question": "Which operator checks equality?",
            "options": ["==", "=", "===", "<>"],
            "correctAnswer": 0,
            "explanation": "The double equals (==) operator compares values for equality."
          },
          {
            "id": 10,
            "question": "What creates a function?",
            "options": ["function", "def", "func", "create"],
            "correctAnswer": 1,
            "explanation": "Functions are defined using the 'def' keyword."
          },
          {
            "id": 11,
            "question": "Boolean values in Python begin with?",
            "options": ["Uppercase", "Lowercase", "Symbol", "Number"],
            "correctAnswer": 0,
            "explanation": "True and False are capitalized in Python."
          },
          {
            "id": 12,
            "question": "Which function converts a number to a string?",
            "options": ["str()", "int()", "text()", "char()"],
            "correctAnswer": 0,
            "explanation": "str() converts objects into string representations."
          },
          {
            "id": 13,
            "question": "How do you start a 'for' loop?",
            "options": ["for x in y:", "loop x in y", "for (x;y;z)", "foreach x"],
            "correctAnswer": 0,
            "explanation": "Python uses 'for item in sequence:' syntax."
          },
          {
            "id": 14,
            "question": "Which is NOT a valid variable name?",
            "options": ["2var", "my_var", "_var", "var2"],
            "correctAnswer": 0,
            "explanation": "Variable names cannot start with a number."
          },
          {
            "id": 15,
            "question": "What index is the first element in a list?",
            "options": ["0", "1", "-1", "null"],
            "correctAnswer": 0,
            "explanation": "Python uses 0-based indexing."
          },
          {
            "id": 16,
            "question": "What is the output of 'Hi' * 2?",
            "options": ["HiHi", "Hi2", "Error", "Hi Hi"],
            "correctAnswer": 0,
            "explanation": "Multiplying a string by an integer repeats the string."
          },
          {
            "id": 17,
            "question": "Which keyword breaks a loop?",
            "options": ["exit", "break", "stop", "end"],
            "correctAnswer": 1,
            "explanation": "'break' terminates the current loop immediately."
          },
          {
            "id": 18,
            "question": "How do you accept user input?",
            "options": ["get()", "input()", "cin", "read()"],
            "correctAnswer": 1,
            "explanation": "input() reads a line from the input."
          },
          {
            "id": 19,
            "question": "Which operator is 'logical AND'?",
            "options": ["and", "&&", "&", "plus"],
            "correctAnswer": 0,
            "explanation": "Python uses the English word 'and' for logical operations."
          },
          {
            "id": 20,
            "question": "What creates a tuple?",
            "options": ["()", "[]", "{}", "<>"],
            "correctAnswer": 0,
            "explanation": "Parentheses () are used to create tuples."
          },
          {
            "id": 21,
            "question": "Which method adds an item to a list?",
            "options": ["append()", "push()", "add()", "insert()"],
            "correctAnswer": 0,
            "explanation": "append() adds an element to the end of a list."
          },
          {
            "id": 22,
            "question": "What creates a floating point number?",
            "options": ["x = 5.0", "float x = 5", "x = 5", "x = (float)5"],
            "correctAnswer": 0,
            "explanation": "Adding a decimal point makes the number a float."
          },
          {
            "id": 23,
            "question": "Which keyword creates a class?",
            "options": ["class", "object", "struct", "define"],
            "correctAnswer": 0,
            "explanation": "The 'class' keyword is used to define a new class."
          },
          {
            "id": 24,
            "question": "What is the result of 3 % 2?",
            "options": ["1", "1.5", "2", "0"],
            "correctAnswer": 0,
            "explanation": "The modulus operator (%) returns the remainder of division."
          },
          {
            "id": 25,
            "question": "How do you check if 'a' is inside 'apple'?",
            "options": ["contains", "has", "in", "find"],
            "correctAnswer": 2,
            "explanation": "The 'in' keyword checks for membership in a sequence."
          }
        ]
      },
      {
        "id": "medium",
        "name": "Medium",
        "description": "Intermediate Python concepts and techniques",
        "icon": "⚡",
        "questions": [
          {
            "id": 26,
            "question": "Which data type is immutable?",
            "options": ["Dictionary", "Tuple", "List", "Set"],
            "correctAnswer": 1,
            "explanation": "Tuples cannot be changed after creation."
          },
          {
            "id": 27,
            "question": "What is a lambda function?",
            "options": ["Class", "Anonymous function", "Loop", "Module"],
            "correctAnswer": 1,
            "explanation": "A lambda is a small anonymous function."
          },
          {
            "id": 28,
            "question": "How do you handle exceptions?",
            "options": ["try/except", "try/catch", "do/catch", "try/rescue"],
            "correctAnswer": 0,
            "explanation": "Python uses try...except blocks."
          },
          {
            "id": 29,
            "question": "What does negative indexing (e.g., list[-1]) do?",
            "options": ["Reverse", "Last item", "Error", "First item"],
            "correctAnswer": 1,
            "explanation": "-1 refers to the last item in a sequence."
          },
          {
            "id": 30,
            "question": "What creates a Set?",
            "options": ["[]", "{value}", "dict()", "()"],
            "correctAnswer": 1,
            "explanation": "Curly braces with values (no keys) create a Set."
          },
          {
            "id": 31,
            "question": "What is slicing?",
            "options": ["Extracting parts", "Cutting strings", "Deleting", "Adding"],
            "correctAnswer": 0,
            "explanation": "Slicing allows accessing subsets of sequences (e.g., list[1:4])."
          },
          {
            "id": 32,
            "question": "What is __init__?",
            "options": ["Module", "Constructor", "Destructor", "Package"],
            "correctAnswer": 1,
            "explanation": "__init__ is the initializer method for classes."
          },
          {
            "id": 33,
            "question": "Which method removes whitespace from start/end?",
            "options": ["cut()", "clean()", "strip()", "trim()"],
            "correctAnswer": 2,
            "explanation": "strip() removes leading and trailing whitespace."
          },
          {
            "id": 34,
            "question": "What does 'break' do in a nested loop?",
            "options": ["Exits all loops", "Exits inner loop", "Skips iteration", "Restarts"],
            "correctAnswer": 1,
            "explanation": "Break only exits the specific loop it is placed in."
          },
          {
            "id": 35,
            "question": "Which module supports Regex?",
            "options": ["re", "regex", "pyregex", "match"],
            "correctAnswer": 0,
            "explanation": "The 're' standard library handles regular expressions."
          },
          {
            "id": 36,
            "question": "How do you generate a random number?",
            "options": ["import os", "import random", "import math", "import rand"],
            "correctAnswer": 1,
            "explanation": "The 'random' module provides functions for random numbers."
          },
          {
            "id": 37,
            "question": "What is the output of set([1,2,2,3])?",
            "options": ["{1,2,3}", "{1,2,2,3}", "[1,2,3]", "Error"],
            "correctAnswer": 0,
            "explanation": "Sets only contain unique elements, removing duplicates."
          },
          {
            "id": 38,
            "question": "What keyword defines a global variable inside a function?",
            "options": ["extern", "static", "global", "var"],
            "correctAnswer": 2,
            "explanation": "The 'global' keyword allows modifying global variables locally."
          },
          {
            "id": 39,
            "question": "What is PEP 8?",
            "options": ["Style Guide", "Compiler", "Debugger", "License"],
            "correctAnswer": 0,
            "explanation": "PEP 8 is the standard style guide for Python code."
          },
          {
            "id": 40,
            "question": "How do you open a file for writing?",
            "options": ["open('f', 'a')", "open('f', 'w')", "open('f', 'r')", "open('f')"],
            "correctAnswer": 1,
            "explanation": "Mode 'w' opens a file for writing (overwriting)."
          },
          {
            "id": 41,
            "question": "What does zip() do?",
            "options": ["Compress files", "Combine iterables", "Encrypt", "Sort"],
            "correctAnswer": 1,
            "explanation": "zip() aggregates elements from each of the iterables."
          },
          {
            "id": 42,
            "question": "What is a list comprehension?",
            "options": ["Concise list creation", "A comment", "Sorting", "Merging"],
            "correctAnswer": 0,
            "explanation": "Syntax like [x for x in list] to create lists concisely."
          },
          {
            "id": 43,
            "question": "Which method converts a string to a list?",
            "options": ["convert()", "cast()", "split()", "list()"],
            "correctAnswer": 2,
            "explanation": "split() divides a string into a list based on a separator."
          },
          {
            "id": 44,
            "question": "What are *args used for?",
            "options": ["Pointers", "Variable arguments", "Multiplication", "Keywords"],
            "correctAnswer": 1,
            "explanation": "*args allows passing a variable number of positional arguments."
          },
          {
            "id": 45,
            "question": "Which operator performs exponentiation?",
            "options": ["**", "^", "pow", "exp"],
            "correctAnswer": 0,
            "explanation": "Two asterisks (**) are used for power calculation (e.g., 2**3)."
          },
          {
            "id": 46,
            "question": "What is a decorator?",
            "options": ["Comment", "Variable", "Function wrapper", "Styling"],
            "correctAnswer": 2,
            "explanation": "Decorators modify the behavior of a function or class."
          },
          {
            "id": 47,
            "question": "How do you install packages?",
            "options": ["npm", "pip", "gem", "brew"],
            "correctAnswer": 1,
            "explanation": "pip is the standard package installer for Python."
          },
          {
            "id": 48,
            "question": "What is the result of '1' + '1'?",
            "options": ["11", "Error", "2", "1 1"],
            "correctAnswer": 0,
            "explanation": "The + operator concatenates strings."
          },
          {
            "id": 49,
            "question": "What is 'pass'?",
            "options": ["Skip iteration", "Null statement", "Success", "Return"],
            "correctAnswer": 1,
            "explanation": "pass is a placeholder statement that does nothing."
          },
          {
            "id": 50,
            "question": "Which structure stores Key-Value pairs?",
            "options": ["Set", "List", "Dictionary", "Tuple"],
            "correctAnswer": 2,
            "explanation": "Dictionaries store data in key:value pairs."
          }
        ]
      },
      {
        "id": "hard",
        "name": "Hard",
        "description": "Advanced Python concepts and best practices",
        "icon": "🔥",
        "questions": [
          {
            "id": 51,
            "question": "What does the GIL stand for?",
            "options": ["Global Interface Lock", "General Input Loop", "Global Interpreter Lock", "Graph Interface Layer"],
            "correctAnswer": 2,
            "explanation": "The GIL is a mutex that protects access to Python objects."
          },
          {
            "id": 52,
            "question": "What is the purpose of 'yield'?",
            "options": ["Pause execution", "Return generator", "Stop function", "Skip"],
            "correctAnswer": 1,
            "explanation": "Yield turns a function into a generator, producing values lazily."
          },
          {
            "id": 53,
            "question": "What is a Metaclass?",
            "options": ["Top class", "Class of a class", "Module", "Abstract class"],
            "correctAnswer": 1,
            "explanation": "A metaclass defines how a class behaves (a class creates instances; a metaclass creates classes)."
          },
          {
            "id": 54,
            "question": "What does **kwargs handle?",
            "options": ["Lists", "Exponents", "Keyword arguments", "Pointers"],
            "correctAnswer": 2,
            "explanation": "**kwargs passes variable keyword arguments as a dictionary."
          },
          {
            "id": 55,
            "question": "What is the 'with' statement used for?",
            "options": ["Imports", "Context Managers", "Loops", "Conditions"],
            "correctAnswer": 1,
            "explanation": "'with' ensures proper resource management (e.g., closing files)."
          },
          {
            "id": 56,
            "question": "What is Pickling?",
            "options": ["Compressing", "Serialization", "Encryption", "Sorting"],
            "correctAnswer": 1,
            "explanation": "Pickling is converting a Python object hierarchy into a byte stream."
          },
          {
            "id": 57,
            "question": "What is MRO?",
            "options": ["Method Resolution Order", "Memory Read Output", "Main Run Object", "Method Return Object"],
            "correctAnswer": 0,
            "explanation": "MRO determines the order in which base classes are searched."
          },
          {
            "id": 58,
            "question": "Difference between __str__ and __repr__?",
            "options": ["Public vs Private", "No difference", "User vs Developer", "Int vs String"],
            "correctAnswer": 2,
            "explanation": "__str__ is for end-users, __repr__ is unambiguous for developers."
          },
          {
            "id": 59,
            "question": "What are Python 'slots' (__slots__)?",
            "options": ["Memory optimization", "GUI elements", "Thread locks", "Variables"],
            "correctAnswer": 0,
            "explanation": "__slots__ restricts attribute creation to save memory."
          },
          {
            "id": 60,
            "question": "Which library handles localized dates?",
            "options": ["clock", "pytz", "time", "datetime"],
            "correctAnswer": 1,
            "explanation": "pytz allows accurate cross-timezone date calculations."
          },
          {
            "id": 61,
            "question": "What does @staticmethod do?",
            "options": ["Method without self", "Static var", "Private method", "Class method"],
            "correctAnswer": 0,
            "explanation": "It defines a method that doesn't receive an implicit first argument."
          },
          {
            "id": 62,
            "question": "What is a Virtual Environment?",
            "options": ["Isolated dependencies", "VM", "Cloud server", "Docker"],
            "correctAnswer": 0,
            "explanation": "It creates an isolated space for project-specific dependencies."
          },
          {
            "id": 63,
            "question": "What is Duck Typing?",
            "options": ["Dynamic typing concept", "Strict validation", "Interface implementation", "Strong typing"],
            "correctAnswer": 0,
            "explanation": "'If it walks like a duck...'; type is determined by behavior, not class."
          },
          {
            "id": 64,
            "question": "What is the use of 'functools.wraps'?",
            "options": ["Wrap text", "Speed up", "Preserve metadata", "Catch errors"],
            "correctAnswer": 2,
            "explanation": "It preserves the original function's name and docstring in decorators."
          },
          {
            "id": 65,
            "question": "What creates a shallow copy?",
            "options": ["=", "copy.copy()", "clone()", "copy.deepcopy()"],
            "correctAnswer": 1,
            "explanation": "copy.copy() creates a new object but inserts references to original items."
          },
          {
            "id": 66,
            "question": "What is the 'super()' function?",
            "options": ["Parent class access", "Global access", "Root node", "Admin rights"],
            "correctAnswer": 0,
            "explanation": "super() gives access to methods in a superclass (parent)."
          },
          {
            "id": 67,
            "question": "Which isn't a Python scope?",
            "options": ["Friend", "Local", "Global", "Enclosing"],
            "correctAnswer": 0,
            "explanation": "Python follows LEGB (Local, Enclosing, Global, Built-in). 'Friend' is C++."
          },
          {
            "id": 68,
            "question": "What is a coroutine?",
            "options": ["Thread", "Pausable function", "Process", "Module"],
            "correctAnswer": 1,
            "explanation": "Coroutines are functions that can suspend execution (async/await)."
          },
          {
            "id": 69,
            "question": "How to swap variables in one line?",
            "options": ["a,b = b,a", "swap(a,b)", "a=b; b=a", "move(a,b)"],
            "correctAnswer": 0,
            "explanation": "Tuple unpacking allows syntax: a, b = b, a"
          },
          {
            "id": 70,
            "question": "What is the 'is' operator?",
            "options": ["Equality", "Type check", "Identity check", "Assignment"],
            "correctAnswer": 2,
            "explanation": "'is' checks if two variables point to the exact same object in memory."
          },
          {
            "id": 71,
            "question": "Pandas is primarily used for?",
            "options": ["Web Dev", "Data Analysis", "Game Dev", "Networking"],
            "correctAnswer": 1,
            "explanation": "Pandas is a powerhouse library for data manipulation and analysis."
          },
          {
            "id": 72,
            "question": "What is '__name__ == \"__main__\"'?",
            "options": ["Import check", "Main variable", "Script entry point", "Class init"],
            "correctAnswer": 2,
            "explanation": "It checks if the script is being run directly rather than imported."
          },
          {
            "id": 73,
            "question": "What defines an abstract base class?",
            "options": ["abc module", "interface", "abstract keyword", "virtual"],
            "correctAnswer": 0,
            "explanation": "The 'abc' module provides infrastructure for Abstract Base Classes."
          },
          {
            "id": 74,
            "question": "What is Monkey Patching?",
            "options": ["Runtime modification", "Code fixing", "Updating Python", "Virus"],
            "correctAnswer": 0,
            "explanation": "Changing a class or module at runtime (often for testing)."
          },
          {
            "id": 75,
            "question": "What is PyPI?",
            "options": ["Package Index", "IDE", "Python Interpreter", "Performance Tool"],
            "correctAnswer": 0,
            "explanation": "The Python Package Index is the repository for Python software."
          }
        ]
      }
    ]
  },
  {
    "id": "javascript",
    "color": "from-yellow-400 to-orange-500",
    "title": "JavaScript",
    "description": "Master JavaScript from basics to advanced concepts",
    "icon": "📜",
    "difficulty": "Mixed",
    "categories": [
      {
        "id": "easy",
        "name": "Easy",
        "description": "JavaScript fundamentals and syntax",
        "icon": "⭐",
        "questions": [
          {
            "id": 101,
            "question": "Which keyword declares a variable in JavaScript?",
            "options": ["All of these", "var", "let", "const"],
            "correctAnswer": 0,
            "explanation": "JavaScript has var, let, and const for variable declaration."
          },
          {
            "id": 102,
            "question": "What does 'DOM' stand for?",
            "options": ["Document Object Model", "Display Object Management", "Digital Output Mode", "Data Object Model"],
            "correctAnswer": 0,
            "explanation": "DOM stands for Document Object Model."
          },
          {
            "id": 103,
            "question": "How do you write 'Hello World' in an alert box?",
            "options": ["alert('Hello World')", "alertBox('Hello World')", "prompt('Hello World')", "msg('Hello World')"],
            "correctAnswer": 0,
            "explanation": "alert('Hello World') displays an alert box."
          },
          {
            "id": 104,
            "question": "Which operator is used for assignment?",
            "options": ["=", "==", "->", "==="],
            "correctAnswer": 0,
            "explanation": "= is the assignment operator."
          },
          {
            "id": 105,
            "question": "What is the result of 2 + '2' in JavaScript?",
            "options": ["'22'", "4", "22", "Error"],
            "correctAnswer": 0,
            "explanation": "JavaScript converts 2 to string and concatenates: '22'."
          },
          {
            "id": 106,
            "question": "How do you create a function in JavaScript?",
            "options": ["function myFunc()", "create myFunc()", "def myFunc()", "function:myFunc()"],
            "correctAnswer": 0,
            "explanation": "function keyword is used to define functions."
          },
          {
            "id": 107,
            "question": "Which method removes the last element from an array?",
            "options": ["pop()", "push()", "shift()", "slice()"],
            "correctAnswer": 0,
            "explanation": "pop() removes the last element."
          },
          {
            "id": 108,
            "question": "What is typeof null?",
            "options": ["object", "undefined", "number", "null"],
            "correctAnswer": 0,
            "explanation": "typeof null returns 'object' (historical bug)."
          },
          {
            "id": 109,
            "question": "How do you comment in JavaScript?",
            "options": ["// comment", "# comment", "<!-- comment -->", "All of these"],
            "correctAnswer": 0,
            "explanation": "// for single-line comments."
          },
          {
            "id": 110,
            "question": "What is the result of 5 == '5'?",
            "options": ["true", "false", "Error", "undefined"],
            "correctAnswer": 0,
            "explanation": "Loose equality converts types: 5 == '5' is true."
          },
          {
            "id": 111,
            "question": "Which method adds elements to an array?",
            "options": ["push()", "add()", "append()", "insert()"],
            "correctAnswer": 0,
            "explanation": "push() adds elements to the end of an array."
          },
          {
            "id": 112,
            "question": "What is NaN?",
            "options": ["Not a Number", "Null value", "New Array Number", "No argument Needed"],
            "correctAnswer": 0,
            "explanation": "NaN stands for 'Not a Number'."
          },
          {
            "id": 113,
            "question": "Which symbol represents strict equality?",
            "options": ["===", "==", "=", "!=="],
            "correctAnswer": 0,
            "explanation": "=== checks value and type equality."
          },
          {
            "id": 114,
            "question": "What is an array index?",
            "options": ["Position of element", "Type of array", "Array length", "Array method"],
            "correctAnswer": 0,
            "explanation": "Index is the position of an element in an array."
          },
          {
            "id": 115,
            "question": "How to get array length?",
            "options": [".length", ".size", ".count", ".len"],
            "correctAnswer": 0,
            "explanation": "array.length returns the number of elements."
          },
          {
            "id": 116,
            "question": "Which loops through arrays?",
            "options": ["for loop", "if statement", "switch", "while"],
            "correctAnswer": 0,
            "explanation": "for loops are commonly used for arrays."
          },
          {
            "id": 117,
            "question": "What does console.log() do?",
            "options": ["Prints to console", "Creates log file", "Shows alert", "Displays webpage"],
            "correctAnswer": 0,
            "explanation": "console.log() outputs to browser console."
          },
          {
            "id": 118,
            "question": "What is an object in JavaScript?",
            "options": ["Collection of key-value pairs", "Only a function", "Only an array", "A number"],
            "correctAnswer": 0,
            "explanation": "Objects store data as key-value pairs."
          },
          {
            "id": 119,
            "question": "Which is NOT a JavaScript data type?",
            "options": ["character", "string", "number", "boolean"],
            "correctAnswer": 0,
            "explanation": "JavaScript has string, not character type."
          },
          {
            "id": 120,
            "question": "What is a string?",
            "options": ["Text data", "Number data", "Boolean data", "Array data"],
            "correctAnswer": 0,
            "explanation": "Strings represent text in JavaScript."
          },
          {
            "id": 121,
            "question": "What is boolean?",
            "options": ["true/false", "Number type", "Text type", "Array type"],
            "correctAnswer": 0,
            "explanation": "Booleans are true/false values."
          },
          {
            "id": 122,
            "question": "What does parseInt() do?",
            "options": ["Converts to integer", "Parses JSON", "Creates array", "Validates input"],
            "correctAnswer": 0,
            "explanation": "parseInt() converts string to integer."
          },
          {
            "id": 123,
            "question": "How to create an object?",
            "options": ["{}", "[]", "new Object()", "Both {} and new Object()"],
            "correctAnswer": 3,
            "explanation": "Both {} and new Object() create objects."
          },
          {
            "id": 124,
            "question": "What does Math.random() return?",
            "options": ["Random number 0-1", "Random integer", "Fixed number", "Array"],
            "correctAnswer": 0,
            "explanation": "Math.random() returns decimal between 0 (inclusive) and 1 (exclusive)."
          },
          {
            "id": 125,
            "question": "What is an event handler?",
            "options": ["Function responding to events", "Error handler", "Variable type", "Loop type"],
            "correctAnswer": 0,
            "explanation": "Event handlers execute when events occur (like clicks)."
          }
        ]
      },
      {
        "id": "medium",
        "name": "Medium",
        "description": "Intermediate JavaScript concepts",
        "icon": "⚡",
        "questions": [
          {
            "id": 126,
            "question": "What is closure in JavaScript?",
            "options": ["Function with access to outer scope", "Event handler", "Built-in method", "DOM element"],
            "correctAnswer": 0,
            "explanation": "Closure = function with access to parent scope."
          },
          {
            "id": 127,
            "question": "What does 'this' refer to in a method?",
            "options": ["Owning object", "Global object", "Parent class", "Function itself"],
            "correctAnswer": 0,
            "explanation": "'this' refers to the object calling the method."
          },
          {
            "id": 128,
            "question": "What is hoisting?",
            "options": ["Variable declaration moved to top", "Event bubbling", "DOM manipulation", "Async operation"],
            "correctAnswer": 0,
            "explanation": "Hoisting moves declarations to top of scope."
          },
          {
            "id": 129,
            "question": "Which is NOT a falsy value?",
            "options": ["'false'", "0", "''", "null"],
            "correctAnswer": 0,
            "explanation": "'false' is a non-empty string → truthy."
          },
          {
            "id": 130,
            "question": "What does JSON.parse() do?",
            "options": ["Parse JSON string to object", "Convert object to JSON", "Stringify object", "Validate JSON"],
            "correctAnswer": 0,
            "explanation": "JSON.parse() converts JSON string to JavaScript object."
          },
          {
            "id": 131,
            "question": "What is event delegation?",
            "options": ["Assign event to parent", "Remove events", "Async events", "Event bubbling"],
            "correctAnswer": 0,
            "explanation": "Use parent to handle child events."
          },
          {
            "id": 132,
            "question": "What does 'use strict' do?",
            "options": ["Enables strict mode", "Optimizes code", "Disables features", "Enables ES6"],
            "correctAnswer": 0,
            "explanation": "Enables strict error checking."
          },
          {
            "id": 133,
            "question": "What is the spread operator?",
            "options": ["...", "::", "**", "=>"],
            "correctAnswer": 0,
            "explanation": "... spreads elements."
          },
          {
            "id": 134,
            "question": "What is a callback function?",
            "options": ["Function passed as argument", "Return function", "Error function", "Main function"],
            "correctAnswer": 0,
            "explanation": "Function passed to another function as argument."
          },
          {
            "id": 135,
            "question": "What is asynchronous programming?",
            "options": ["Non-blocking operations", "Parallel execution", "Synchronous flow", "Linear execution"],
            "correctAnswer": 0,
            "explanation": "Code doesn't wait for operations to complete."
          },
          {
            "id": 136,
            "question": "What is the difference between == and ===?",
            "options": ["=== checks type and value", "== checks type only", "No difference", "=== is deprecated"],
            "correctAnswer": 0,
            "explanation": "=== is strict equality (type + value)."
          },
          {
            "id": 137,
            "question": "What is an IIFE?",
            "options": ["Immediately Invoked Function Expression", "Inline Function", "Internal Function", "Imported Function"],
            "correctAnswer": 0,
            "explanation": "Function that runs immediately after definition."
          },
          {
            "id": 138,
            "question": "What is the arrow function syntax?",
            "options": ["() => {}", "function() {}", "=>()", "() -> {}"],
            "correctAnswer": 0,
            "explanation": "Arrow functions use => syntax."
          },
          {
            "id": 139,
            "question": "What does map() do to arrays?",
            "options": ["Transforms each element", "Filters elements", "Reduces array", "Sorts array"],
            "correctAnswer": 0,
            "explanation": "map() creates new array with transformed elements."
          },
          {
            "id": 140,
            "question": "What is a promise?",
            "options": ["Async operation placeholder", "Synchronous function", "Error handler", "DOM promise"],
            "correctAnswer": 0,
            "explanation": "Promise handles async operations."
          },
          {
            "id": 141,
            "question": "What does async/await do?",
            "options": ["Simplifies async code", "Creates threads", "Blocks execution", "Syncs operations"],
            "correctAnswer": 0,
            "explanation": "Makes async code look synchronous."
          },
          {
            "id": 142,
            "question": "What is destructuring?",
            "options": ["Extract values from objects/arrays", "Destroy objects", "Create new objects", "Merge objects"],
            "correctAnswer": 0,
            "explanation": "Unpack values from objects/arrays."
          },
          {
            "id": 143,
            "question": "What is template literal?",
            "options": ["String with ${}", "HTML template", "JSON template", "Function template"],
            "correctAnswer": 0,
            "explanation": "Template literals use backticks and ${}."
          },
          {
            "id": 144,
            "question": "What is the difference between let and var?",
            "options": ["let has block scope", "var has block scope", "No difference", "let is global"],
            "correctAnswer": 0,
            "explanation": "let has block scope, var has function scope."
          },
          {
            "id": 145,
            "question": "What is a higher-order function?",
            "options": ["Takes/returns functions", "Higher complexity", "Async function", "Main function"],
            "correctAnswer": 0,
            "explanation": "Function that takes/returns other functions."
          },
          {
            "id": 146,
            "question": "What is currying?",
            "options": ["Multiple arguments into sequence", "Function optimization", "Error handling", "Event handling"],
            "correctAnswer": 0,
            "explanation": "f(a)(b)(c) instead of f(a,b,c)."
          },
          {
            "id": 147,
            "question": "What is memoization?",
            "options": ["Caching function results", "Memory allocation", "Garbage collection", "Performance profiling"],
            "correctAnswer": 0,
            "explanation": "Cache results for same inputs."
          },
          {
            "id": 148,
            "question": "What is the event loop?",
            "options": ["JS runtime model", "DOM event handler", "Loop optimization", "Async callback queue"],
            "correctAnswer": 0,
            "explanation": "Handles async operations in JS."
          },
          {
            "id": 149,
            "question": "What is prototypal inheritance?",
            "options": ["Objects inherit from objects", "Class-based inheritance", "Interface inheritance", "Multiple inheritance"],
            "correctAnswer": 0,
            "explanation": "JS uses prototype chain for inheritance."
          },
          {
            "id": 150,
            "question": "What are Web Workers?",
            "options": ["Background threads", "DOM workers", "Server workers", "Event workers"],
            "correctAnswer": 0,
            "explanation": "Run scripts in background threads."
          }
        ]
      },
      {
        "id": "hard",
        "name": "Hard",
        "description": "Advanced JavaScript and modern features",
        "icon": "🔥",
        "questions": [
          {
            "id": 151,
            "question": "What is the Temporal Dead Zone?",
            "options": ["let/const hoisting area", "Memory leak", "Garbage collection", "Execution pause"],
            "correctAnswer": 0,
            "explanation": "Area where variable exists but not initialized."
          },
          {
            "id": 152,
            "question": "What is a generator function?",
            "options": ["Can pause execution", "Generates random numbers", "Creates objects", "Async function"],
            "correctAnswer": 0,
            "explanation": "Function that can pause and resume execution."
          },
          {
            "id": 153,
            "question": "What is the difference between null and undefined?",
            "options": ["null is assignment, undefined is default", "No difference", "undefined is assignment", "Both are same"],
            "correctAnswer": 0,
            "explanation": "null is intentional absence, undefined is uninitialized."
          },
          {
            "id": 154,
            "question": "What is a pure function?",
            "options": ["No side effects, same input → same output", "Impure function", "Async function", "Random function"],
            "correctAnswer": 0,
            "explanation": "Deterministic with no side effects."
          },
          {
            "id": 155,
            "question": "What is function composition?",
            "options": ["Combining functions", "Creating functions", "Destroying functions", "Optimizing functions"],
            "correctAnswer": 0,
            "explanation": "Combining simple functions to build complex ones."
          },
          {
            "id": 156,
            "question": "What is the difference between deep and shallow copy?",
            "options": ["Deep copies nested objects", "Shallow copies all", "No difference", "Deep is faster"],
            "correctAnswer": 0,
            "explanation": "Deep copy duplicates nested objects."
          },
          {
            "id": 157,
            "question": "What is a Symbol in ES6?",
            "options": ["Unique identifier", "String type", "Number type", "Boolean type"],
            "correctAnswer": 0,
            "explanation": "Symbols create unique property keys."
          },
          {
            "id": 158,
            "question": "What is a Proxy object?",
            "options": ["Customize object operations", "Network proxy", "Object copy", "Function proxy"],
            "correctAnswer": 0,
            "explanation": "Proxy wraps object to intercept operations."
          },
          {
            "id": 159,
            "question": "What is Reflect API?",
            "options": ["Methods for object operations", "Mirror API", "Reflection API", "Network API"],
            "correctAnswer": 0,
            "explanation": "Provides methods for object operations."
          },
          {
            "id": 160,
            "question": "What is tail call optimization?",
            "options": ["Optimizes recursion", "Memory optimization", "Speed optimization", "Code optimization"],
            "correctAnswer": 0,
            "explanation": "Optimizes recursive function calls."
          },
          {
            "id": 161,
            "question": "What is a WeakMap?",
            "options": ["Keys are objects only", "Any keys", "Weak references", "Both objects only and weak references"],
            "correctAnswer": 3,
            "explanation": "WeakMap keys are objects with weak references."
          },
          {
            "id": 162,
            "question": "What is the difference between for...in and for...of?",
            "options": ["for...in for keys, for...of for values", "No difference", "Both for keys", "Both for values"],
            "correctAnswer": 0,
            "explanation": "for...in loops over keys, for...over over values."
          },
          {
            "id": 163,
            "question": "What is a Set?",
            "options": ["Collection of unique values", "Key-value pairs", "Array type", "Object type"],
            "correctAnswer": 0,
            "explanation": "Set stores unique values of any type."
          },
          {
            "id": 164,
            "question": "What is the purpose of Object.freeze()?",
            "options": ["Prevents object modification", "Freezes memory", "Optimizes object", "Creates copy"],
            "correctAnswer": 0,
            "explanation": "Makes object immutable."
          },
          {
            "id": 165,
            "question": "What is a Service Worker?",
            "options": ["Background script for PWA", "Web Worker", "Server worker", "Network worker"],
            "correctAnswer": 0,
            "explanation": "Runs in background for offline capabilities."
          },
          {
            "id": 166,
            "question": "What is WebSocket?",
            "options": ["Full-duplex communication", "HTTP request", "File transfer", "Database connection"],
            "correctAnswer": 0,
            "explanation": "Provides persistent connection between client/server."
          },
          {
            "id": 167,
            "question": "What is CORS?",
            "options": ["Cross-Origin Resource Sharing", "Cross-Origin Requests", "Cross-Site Scripting", "Cross-Domain Sharing"],
            "correctAnswer": 0,
            "explanation": "Mechanism for cross-domain requests."
          },
          {
            "id": 168,
            "question": "What is the Module Pattern?",
            "options": ["Encapsulation pattern", "Import pattern", "Export pattern", "Code pattern"],
            "correctAnswer": 0,
            "explanation": "Encapsulates code in modules."
          },
          {
            "id": 169,
            "question": "What is a Mixin?",
            "options": ["Reuse code across classes", "Mixing types", "Combining functions", "Merging objects"],
            "correctAnswer": 0,
            "explanation": "Add functionality to classes."
          },
          {
            "id": 170,
            "question": "What is the Observer Pattern?",
            "options": ["Subject-Observer relationship", "Event pattern", "Listener pattern", "Callback pattern"],
            "correctAnswer": 0,
            "explanation": "Objects subscribe to event changes."
          },
          {
            "id": 171,
            "question": "What is the Singleton Pattern?",
            "options": ["Single instance", "Multiple instances", "Factory pattern", "Builder pattern"],
            "correctAnswer": 0,
            "explanation": "Restricts class to single instance."
          },
          {
            "id": 172,
            "question": "What is the Factory Pattern?",
            "options": ["Creates objects", "Destroys objects", "Modifies objects", "Copies objects"],
            "correctAnswer": 0,
            "explanation": "Creates objects without specifying exact class."
          },
          {
            "id": 173,
            "question": "What is the Decorator Pattern?",
            "options": ["Adds behavior dynamically", "Removes behavior", "Changes type", "Creates objects"],
            "correctAnswer": 0,
            "explanation": "Adds functionality to objects dynamically."
          },
          {
            "id": 174,
            "question": "What is the Strategy Pattern?",
            "options": ["Interchangeable algorithms", "Fixed algorithm", "Single strategy", "No strategy"],
            "correctAnswer": 0,
            "explanation": "Defines family of interchangeable algorithms."
          },
          {
            "id": 175,
            "question": "What is the difference between imperative and declarative programming?",
            "options": ["Imperative = how, Declarative = what", "No difference", "Opposite", "Same concept"],
            "correctAnswer": 0,
            "explanation": "Imperative focuses on steps, declarative on outcome."
          }
        ]
      }
    ]
  },
  {
    "id": "react",
    "color": "from-cyan-400 to-blue-600",
    "title": "React",
    "description": "Learn React.js and modern frontend development",
    "icon": "⚛️",
    "difficulty": "Mixed",
    "categories": [
      {
        "id": "easy",
        "name": "Easy",
        "description": "React basics and components",
        "icon": "⭐",
        "questions": [
          {
            "id": 201,
            "question": "What is React?",
            "options": ["JavaScript library", "Programming language", "Operating system", "Database"],
            "correctAnswer": 0,
            "explanation": "React is a JavaScript library for building UIs."
          },
          {
            "id": 202,
            "question": "How do you create a component?",
            "options": ["Both", "function MyComponent()", "class MyComponent", "createComponent()"],
            "correctAnswer": 0,
            "explanation": "Both function and class components are valid."
          },
          {
            "id": 203,
            "question": "What is JSX?",
            "options": ["JavaScript XML", "XML parser", "JSON extension", "Java syntax"],
            "correctAnswer": 0,
            "explanation": "JSX = JavaScript XML syntax extension."
          },
          {
            "id": 204,
            "question": "How to pass data to component?",
            "options": ["Props", "State", "Context", "Redux"],
            "correctAnswer": 0,
            "explanation": "Props pass data from parent to child."
          },
          {
            "id": 205,
            "question": "What is state?",
            "options": ["Component data", "Global variable", "DOM element", "API response"],
            "correctAnswer": 0,
            "explanation": "State holds component's local data."
          },
          {
            "id": 206,
            "question": "What does setState() do?",
            "options": ["Updates state", "Sets props", "Updates props", "Creates state"],
            "correctAnswer": 0,
            "explanation": "Updates component state and re-renders."
          },
          {
            "id": 207,
            "question": "What is a prop?",
            "options": ["Input to component", "Output from component", "Internal state", "Event handler"],
            "correctAnswer": 0,
            "explanation": "Props are inputs passed to components."
          },
          {
            "id": 208,
            "question": "How to render list?",
            "options": ["map()", "forEach()", "for loop", "while loop"],
            "correctAnswer": 0,
            "explanation": "map() creates array of elements."
          },
          {
            "id": 209,
            "question": "What is a controlled component?",
            "options": ["Form element controlled by React", "Uncontrolled element", "HTML element", "DOM element"],
            "correctAnswer": 0,
            "explanation": "Form data handled by React state."
          },
          {
            "id": 210,
            "question": "What is a key?",
            "options": ["Unique identifier for list items", "Prop type", "State key", "Component ID"],
            "correctAnswer": 0,
            "explanation": "Helps React identify which items changed."
          },
          {
            "id": 211,
            "question": "What is the root component?",
            "options": ["App component", "Main component", "Index component", "Root DOM"],
            "correctAnswer": 0,
            "explanation": "Top-level component in React tree."
          },
          {
            "id": 212,
            "question": "How to handle events?",
            "options": ["onClick={handleClick}", "onclick='handleClick'", "click={handleClick}", "@click='handleClick'"],
            "correctAnswer": 0,
            "explanation": "React uses camelCase event handlers."
          },
          {
            "id": 213,
            "question": "What is conditional rendering?",
            "options": ["Render based on conditions", "Always render", "Never render", "Random render"],
            "correctAnswer": 0,
            "explanation": "Render different UI based on state/props."
          },
          {
            "id": 214,
            "question": "What is a fragment?",
            "options": ["Wrap multiple elements", "Single element", "HTML element", "DOM fragment"],
            "correctAnswer": 0,
            "explanation": "<> </> wraps multiple elements without extra DOM node."
          },
          {
            "id": 215,
            "question": "What is the purpose of render()?",
            "options": ["Returns JSX", "Updates DOM", "Fetches data", "Handles events"],
            "correctAnswer": 0,
            "explanation": "render() method returns what to display."
          },
          {
            "id": 216,
            "question": "What is the virtual DOM?",
            "options": ["In-memory DOM copy", "Real DOM", "Shadow DOM", "Browser DOM"],
            "correctAnswer": 0,
            "explanation": "Lightweight copy of real DOM."
          },
          {
            "id": 217,
            "question": "How to install React?",
            "options": ["create-react-app", "install-react", "npm react", "download-react"],
            "correctAnswer": 0,
            "explanation": "create-react-app sets up React project."
          },
          {
            "id": 218,
            "question": "What is a stateless component?",
            "options": ["Function component without state", "Class component", "Component with state", "Pure component"],
            "correctAnswer": 0,
            "explanation": "Function component that doesn't use state."
          },
          {
            "id": 219,
            "question": "What is a stateful component?",
            "options": ["Class component with state", "Function component", "Stateless component", "Pure component"],
            "correctAnswer": 0,
            "explanation": "Component that maintains local state."
          },
          {
            "id": 220,
            "question": "What is the component lifecycle?",
            "options": ["Mount, update, unmount", "Create, destroy", "Init, render", "Start, stop"],
            "correctAnswer": 0,
            "explanation": "Components mount, update, and unmount."
          },
          {
            "id": 221,
            "question": "What is componentDidMount()?",
            "options": ["Called after component mounts", "Before mount", "During render", "After unmount"],
            "correctAnswer": 0,
            "explanation": "Lifecycle method called after first render."
          },
          {
            "id": 222,
            "question": "What is componentDidUpdate()?",
            "options": ["Called after update", "Before update", "During update", "Never called"],
            "correctAnswer": 0,
            "explanation": "Lifecycle method called after updates."
          },
          {
            "id": 223,
            "question": "What is componentWillUnmount()?",
            "options": ["Called before unmount", "After unmount", "During unmount", "Before mount"],
            "correctAnswer": 0,
            "explanation": "Lifecycle method called before component removal."
          },
          {
            "id": 224,
            "question": "What is a default prop?",
            "options": ["Default value for prop", "Required prop", "Optional prop", "State prop"],
            "correctAnswer": 0,
            "explanation": "Default value when prop not provided."
          },
          {
            "id": 225,
            "question": "What is propTypes?",
            "options": ["Type checking for props", "Prop validation", "Prop creation", "Prop deletion"],
            "correctAnswer": 0,
            "explanation": "Runtime type checking for props."
          }
        ]
      },
      {
        "id": "medium",
        "name": "Medium",
        "description": "Intermediate React concepts",
        "icon": "⚡",
        "questions": [
          {
            "id": 226,
            "question": "What are React Hooks?",
            "options": ["Functions to use React features", "DOM hooks", "Event handlers", "Lifecycle methods"],
            "correctAnswer": 0,
            "explanation": "Hooks let you use state/effects in functions."
          },
          {
            "id": 227,
            "question": "What does useEffect do?",
            "options": ["Side effects", "DOM manipulation", "State update", "Props change"],
            "correctAnswer": 0,
            "explanation": "Handles side effects in components."
          },
          {
            "id": 228,
            "question": "What is useState?",
            "options": ["Hook for state", "Hook for effects", "Hook for context", "Hook for refs"],
            "correctAnswer": 0,
            "explanation": "Hook to add state to function components."
          },
          {
            "id": 229,
            "question": "What is useContext?",
            "options": ["Hook for context", "Hook for state", "Hook for effects", "Hook for refs"],
            "correctAnswer": 0,
            "explanation": "Hook to consume context."
          },
          {
            "id": 230,
            "question": "What is useRef?",
            "options": ["Hook for refs", "Hook for state", "Hook for effects", "Hook for context"],
            "correctAnswer": 0,
            "explanation": "Hook to access DOM elements or persist values."
          },
          {
            "id": 231,
            "question": "What is useCallback?",
            "options": ["Memoizes functions", "Memoizes values", "Creates callbacks", "Handles events"],
            "correctAnswer": 0,
            "explanation": "Returns memoized callback function."
          },
          {
            "id": 232,
            "question": "What is useMemo?",
            "options": ["Memoizes values", "Memoizes functions", "Creates memory", "Allocates memory"],
            "correctAnswer": 0,
            "explanation": "Returns memoized value."
          },
          {
            "id": 233,
            "question": "What is a custom hook?",
            "options": ["Reusable hook logic", "Built-in hook", "Component hook", "Event hook"],
            "correctAnswer": 0,
            "explanation": "Custom function that uses hooks."
          },
          {
            "id": 234,
            "question": "What is React Router?",
            "options": ["Routing library", "State management", "Form handling", "API library"],
            "correctAnswer": 0,
            "explanation": "Declarative routing for React."
          },
          {
            "id": 235,
            "question": "What is a route?",
            "options": ["URL path to component", "State route", "Prop route", "Event route"],
            "correctAnswer": 0,
            "explanation": "Maps URL to component."
          },
          {
            "id": 236,
            "question": "What is a Link component?",
            "options": ["Navigate without reload", "Anchor tag", "Button", "Form"],
            "correctAnswer": 0,
            "explanation": "Navigates without page reload."
          },
          {
            "id": 237,
            "question": "What is prop drilling?",
            "options": ["Pass props through layers", "Prop validation", "Prop mutation", "Prop deletion"],
            "correctAnswer": 0,
            "explanation": "Passing props deeply through components."
          },
          {
            "id": 238,
            "question": "What is Context API?",
            "options": ["Share data without props", "Manage state", "Handle events", "Route data"],
            "correctAnswer": 0,
            "explanation": "Share data across component tree."
          },
          {
            "id": 239,
            "question": "What is a Provider?",
            "options": ["Provides context value", "Consumes context", "Creates context", "Destroys context"],
            "correctAnswer": 0,
            "explanation": "Component that provides context value."
          },
          {
            "id": 240,
            "question": "What is a Consumer?",
            "options": ["Consumes context value", "Provides context", "Creates context", "Destroys context"],
            "correctAnswer": 0,
            "explanation": "Component that consumes context value."
          },
          {
            "id": 241,
            "question": "What is Redux?",
            "options": ["State management library", "Routing library", "Form library", "API library"],
            "correctAnswer": 0,
            "explanation": "Predictable state container."
          },
          {
            "id": 242,
            "question": "What is a store?",
            "options": ["Holds application state", "Component store", "Local storage", "Session storage"],
            "correctAnswer": 0,
            "explanation": "Single source of truth for state."
          },
          {
            "id": 243,
            "question": "What is an action?",
            "options": ["Describes state change", "Changes state directly", "Component action", "Event action"],
            "correctAnswer": 0,
            "explanation": "Plain object describing what happened."
          },
          {
            "id": 244,
            "question": "What is a reducer?",
            "options": ["Function that returns new state", "Action reducer", "State changer", "Event handler"],
            "correctAnswer": 0,
            "explanation": "Pure function taking state and action, returning new state."
          },
          {
            "id": 245,
            "question": "What is a selector?",
            "options": ["Extracts state slice", "Selects component", "Chooses action", "Picks reducer"],
            "correctAnswer": 0,
            "explanation": "Function that extracts data from state."
          },
          {
            "id": 246,
            "question": "What is middleware?",
            "options": ["Extends Redux", "Redux core", "State middleware", "Action middleware"],
            "correctAnswer": 0,
            "explanation": "Third-party extension point between dispatching and reducer."
          },
          {
            "id": 247,
            "question": "What is thunk?",
            "options": ["Middleware for async", "Middleware for sync", "Action type", "Reducer type"],
            "correctAnswer": 0,
            "explanation": "Middleware for async operations."
          },
          {
            "id": 248,
            "question": "What is React.memo?",
            "options": ["Performance optimization", "Memory allocation", "Memoization hook", "State manager"],
            "correctAnswer": 0,
            "explanation": "Memoizes component to prevent re-renders."
          },
          {
            "id": 249,
            "question": "What is a PureComponent?",
            "options": ["Optimizes class components", "Function component", "Stateless component", "Stateful component"],
            "correctAnswer": 0,
            "explanation": "Class component with shouldComponentUpdate shallow comparison."
          },
          {
            "id": 250,
            "question": "What is lazy loading?",
            "options": ["Load components on demand", "Load all components", "Preload components", "Cache components"],
            "correctAnswer": 0,
            "explanation": "Load components only when needed."
          }
        ]
      },
      {
        "id": "hard",
        "name": "Hard",
        "description": "Advanced React patterns",
        "icon": "🔥",
        "questions": [
          {
            "id": 251,
            "question": "What is code splitting?",
            "options": ["Split code into chunks", "Divide components", "Separate logic", "File splitting"],
            "correctAnswer": 0,
            "explanation": "Lazy load components for performance."
          },
          {
            "id": 252,
            "question": "What are error boundaries?",
            "options": ["Catch JS errors", "Network error handlers", "Syntax checkers", "Type checkers"],
            "correctAnswer": 0,
            "explanation": "Catch JS errors in child components."
          },
          {
            "id": 253,
            "question": "What is React.Suspense?",
            "options": ["Handle async operations", "Suspend components", "Stop rendering", "Pause execution"],
            "correctAnswer": 0,
            "explanation": "Component for handling async loading."
          },
          {
            "id": 254,
            "question": "What is a portal?",
            "options": ["Render children outside DOM hierarchy", "New window", "Iframe", "Shadow DOM"],
            "correctAnswer": 0,
            "explanation": "Render children into different DOM location."
          },
          {
            "id": 255,
            "question": "What is forwardRef?",
            "options": ["Pass ref through component", "Forward props", "Forward state", "Forward context"],
            "correctAnswer": 0,
            "explanation": "Forward ref to child component."
          },
          {
            "id": 256,
            "question": "What is a higher-order component?",
            "options": ["Function that returns component", "Higher component", "Parent component", "Wrapper component"],
            "correctAnswer": 0,
            "explanation": "Function that takes component, returns new component."
          },
          {
            "id": 257,
            "question": "What is render props?",
            "options": ["Share code via prop", "Render component", "Prop rendering", "Dynamic render"],
            "correctAnswer": 0,
            "explanation": "Technique using prop to share code between components."
          },
          {
            "id": 258,
            "question": "What is compound components?",
            "options": ["Components work together", "Single component", "Multiple components", "Nested components"],
            "correctAnswer": 0,
            "explanation": "Components that work together as a unit."
          },
          {
            "id": 259,
            "question": "What is a controlled vs uncontrolled component?",
            "options": ["Controlled: React state, Uncontrolled: DOM", "Both same", "Opposite", "No difference"],
            "correctAnswer": 0,
            "explanation": "Controlled: React manages state; Uncontrolled: DOM manages."
          },
          {
            "id": 260,
            "question": "What is the children prop?",
            "options": ["Content between tags", "Child components", "Props for children", "Nested props"],
            "correctAnswer": 0,
            "explanation": "Content passed between component tags."
          },
          {
            "id": 261,
            "question": "What is useReducer?",
            "options": ["Alternative to useState", "Alternative to useEffect", "Alternative to useContext", "Alternative to useRef"],
            "correctAnswer": 0,
            "explanation": "Hook for complex state logic."
          },
          {
            "id": 262,
            "question": "What is useLayoutEffect?",
            "options": ["Fires synchronously after DOM updates", "Fires asynchronously", "Before render", "After render"],
            "correctAnswer": 0,
            "explanation": "Like useEffect but fires synchronously after DOM mutations."
          },
          {
            "id": 263,
            "question": "What is useImperativeHandle?",
            "options": ["Customize instance value", "Imperative hook", "Handle events", "Custom ref"],
            "correctAnswer": 0,
            "explanation": "Customizes instance value exposed with forwardRef."
          },
          {
            "id": 264,
            "question": "What is useDebugValue?",
            "options": ["Display label in DevTools", "Debug hook", "Log values", "Inspect hook"],
            "correctAnswer": 0,
            "explanation": "Display custom hook label in React DevTools."
          },
          {
            "id": 265,
            "question": "What is React.Fragment?",
            "options": ["Group elements without wrapper", "Fragment component", "DOM fragment", "HTML fragment"],
            "correctAnswer": 0,
            "explanation": "Group list of children without adding extra nodes."
          },
          {
            "id": 266,
            "question": "What is StrictMode?",
            "options": ["Highlight potential problems", "Strict rendering", "Error detection", "Performance mode"],
            "correctAnswer": 0,
            "explanation": "Tool for highlighting potential problems."
          },
          {
            "id": 267,
            "question": "What are keys?",
            "options": ["Help React identify items", "Unique identifiers", "Both", "Neither"],
            "correctAnswer": 2,
            "explanation": "Keys help React identify which items changed."
          },
          {
            "id": 268,
            "question": "What is reconciliation?",
            "options": ["React's diffing algorithm", "State reconciliation", "Prop reconciliation", "DOM reconciliation"],
            "correctAnswer": 0,
            "explanation": "Process of updating DOM to match React elements."
          },
          {
            "id": 269,
            "question": "What is Fiber?",
            "options": ["New reconciliation engine", "React fiber", "DOM fiber", "Virtual fiber"],
            "correctAnswer": 0,
            "explanation": "New reconciliation algorithm in React 16+."
          },
          {
            "id": 270,
            "question": "What is concurrent mode?",
            "options": ["Render without blocking", "Parallel rendering", "Async rendering", "Blocking rendering"],
            "correctAnswer": 0,
            "explanation": "Render updates without blocking the main thread."
          },
          {
            "id": 271,
            "question": "What is startTransition?",
            "options": ["Mark updates as transitions", "Start rendering", "Begin transition", "Mark transition"],
            "correctAnswer": 0,
            "explanation": "Mark updates as transitions to keep UI responsive."
          },
          {
            "id": 272,
            "question": "What is useTransition?",
            "options": ["Hook for transitions", "Hook for state", "Hook for effects", "Hook for refs"],
            "correctAnswer": 0,
            "explanation": "Hook to start transitions."
          },
          {
            "id": 273,
            "question": "What is useDeferredValue?",
            "options": ["Defer updating value", "Update immediately", "Delay value", "Postpone value"],
            "correctAnswer": 0,
            "explanation": "Defer updating non-urgent value."
          },
          {
            "id": 274,
            "question": "What is server-side rendering?",
            "options": ["Render on server", "Render on client", "Both server and client", "Neither"],
            "correctAnswer": 0,
            "explanation": "Render React components on server."
          },
          {
            "id": 275,
            "question": "What is Next.js?",
            "options": ["React framework", "React library", "React tool", "React plugin"],
            "correctAnswer": 0,
            "explanation": "React framework with SSR, routing, etc."
          }
        ]
      }
    ]
  }
];