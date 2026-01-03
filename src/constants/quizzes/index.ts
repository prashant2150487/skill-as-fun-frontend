export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: string;
  categories: QuizCategory[];
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
            "options": [
              "Removes spaces",
              "Returns length",
              "Checks existence",
              "Calculates angle"
            ],
            "correctAnswer": 1,
            "explanation": "len() returns the number of items in an object."
          },
          {
            "id": 2,
            "question": "How do you output text to the console?",
            "options": [
              "write()",
              "print()",
              "console.log()",
              "echo()"
            ],
            "correctAnswer": 1,
            "explanation": "The print() function sends data to the standard output."
          },
          {
            "id": 3,
            "question": "Which symbol creates a single-line comment?",
            "options": [
              "//",
              "--",
              "#",
              "/*"
            ],
            "correctAnswer": 2,
            "explanation": "Python uses the hash symbol (#) for comments."
          },
          {
            "id": 4,
            "question": "What is the correct file extension for Python files?",
            "options": [
              ".pyt",
              ".py",
              ".pt",
              ".ptr"
            ],
            "correctAnswer": 1,
            "explanation": "Python source files use the .py extension."
          },
          {
            "id": 5,
            "question": "How do you create a variable with the value 5?",
            "options": [
              "int x = 5",
              "x = 5",
              "var x = 5",
              "x : 5"
            ],
            "correctAnswer": 1,
            "explanation": "Python variables are created by simple assignment (x = 5) without declaring types."
          },
          {
            "id": 6,
            "question": "What is the result of 10 // 3?",
            "options": [
              "1",
              "3.33",
              "3",
              "3.0"
            ],
            "correctAnswer": 2,
            "explanation": "The // operator performs floor division, returning the integer part of the quotient."
          },
          {
            "id": 7,
            "question": "Which creates a list?",
            "options": [
              "()",
              "[]",
              "<>",
              "{}"
            ],
            "correctAnswer": 1,
            "explanation": "Square brackets [] are used to define lists."
          },
          {
            "id": 8,
            "question": "What creates a dictionary?",
            "options": [
              "[]",
              "{}",
              "dict[]",
              "()"
            ],
            "correctAnswer": 1,
            "explanation": "Curly braces {} are used for dictionaries (and sets)."
          },
          {
            "id": 9,
            "question": "Which operator checks equality?",
            "options": [
              "<>",
              "===",
              "=",
              "=="
            ],
            "correctAnswer": 3,
            "explanation": "The double equals (==) operator compares values for equality."
          },
          {
            "id": 10,
            "question": "What creates a function?",
            "options": [
              "def",
              "create",
              "function",
              "func"
            ],
            "correctAnswer": 0,
            "explanation": "Functions are defined using the 'def' keyword."
          },
          {
            "id": 11,
            "question": "Boolean values in Python begin with?",
            "options": [
              "Lowercase",
              "Uppercase",
              "Number",
              "Symbol"
            ],
            "correctAnswer": 1,
            "explanation": "True and False are capitalized in Python."
          },
          {
            "id": 12,
            "question": "Which function converts a number to a string?",
            "options": [
              "text()",
              "str()",
              "char()",
              "int()"
            ],
            "correctAnswer": 1,
            "explanation": "str() converts objects into string representations."
          },
          {
            "id": 13,
            "question": "How do you start a 'for' loop?",
            "options": [
              "for (x;y;z)",
              "for x in y:",
              "loop x in y",
              "foreach x"
            ],
            "correctAnswer": 1,
            "explanation": "Python uses 'for item in sequence:' syntax."
          },
          {
            "id": 14,
            "question": "Which is NOT a valid variable name?",
            "options": [
              "_var",
              "var2",
              "2var",
              "my_var"
            ],
            "correctAnswer": 2,
            "explanation": "Variable names cannot start with a number."
          },
          {
            "id": 15,
            "question": "What index is the first element in a list?",
            "options": [
              "1",
              "null",
              "0",
              "-1"
            ],
            "correctAnswer": 2,
            "explanation": "Python uses 0-based indexing."
          },
          {
            "id": 16,
            "question": "What is the output of 'Hi' * 2?",
            "options": [
              "Error",
              "HiHi",
              "Hi2",
              "Hi Hi"
            ],
            "correctAnswer": 1,
            "explanation": "Multiplying a string by an integer repeats the string."
          },
          {
            "id": 17,
            "question": "Which keyword breaks a loop?",
            "options": [
              "end",
              "break",
              "exit",
              "stop"
            ],
            "correctAnswer": 1,
            "explanation": "'break' terminates the current loop immediately."
          },
          {
            "id": 18,
            "question": "How do you accept user input?",
            "options": [
              "cin",
              "read()",
              "input()",
              "get()"
            ],
            "correctAnswer": 2,
            "explanation": "input() reads a line from the input."
          },
          {
            "id": 19,
            "question": "Which operator is 'logical AND'?",
            "options": [
              "and",
              "&",
              "plus",
              "&&"
            ],
            "correctAnswer": 0,
            "explanation": "Python uses the English word 'and' for logical operations."
          },
          {
            "id": 20,
            "question": "What creates a tuple?",
            "options": [
              "()",
              "<>",
              "[]",
              "{}"
            ],
            "correctAnswer": 0,
            "explanation": "Parentheses () are used to create tuples."
          },
          {
            "id": 21,
            "question": "Which method adds an item to a list?",
            "options": [
              "add()",
              "push()",
              "insert()",
              "append()"
            ],
            "correctAnswer": 3,
            "explanation": "append() adds an element to the end of a list."
          },
          {
            "id": 22,
            "question": "What creates a floating point number?",
            "options": [
              "float x = 5",
              "x = 5.0",
              "x = 5",
              "x = (float)5"
            ],
            "correctAnswer": 1,
            "explanation": "Adding a decimal point makes the number a float."
          },
          {
            "id": 23,
            "question": "Which keyword creates a class?",
            "options": [
              "struct",
              "define",
              "object",
              "class"
            ],
            "correctAnswer": 3,
            "explanation": "The 'class' keyword is used to define a new class."
          },
          {
            "id": 24,
            "question": "What is the result of 3 % 2?",
            "options": [
              "1",
              "1.5",
              "2",
              "0"
            ],
            "correctAnswer": 0,
            "explanation": "The modulus operator (%) returns the remainder of division."
          },
          {
            "id": 25,
            "question": "How do you check if 'a' is inside 'apple'?",
            "options": [
              "find",
              "contains",
              "in",
              "has"
            ],
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
            "options": [
              "Set",
              "Tuple",
              "Dictionary",
              "List"
            ],
            "correctAnswer": 1,
            "explanation": "Tuples cannot be changed after creation."
          },
          {
            "id": 27,
            "question": "What is a lambda function?",
            "options": [
              "Anonymous function",
              "Loop",
              "Module",
              "Class"
            ],
            "correctAnswer": 0,
            "explanation": "A lambda is a small anonymous function."
          },
          {
            "id": 28,
            "question": "How do you handle exceptions?",
            "options": [
              "try/catch",
              "try/except",
              "try/rescue",
              "do/catch"
            ],
            "correctAnswer": 1,
            "explanation": "Python uses try...except blocks."
          },
          {
            "id": 29,
            "question": "What does negative indexing (e.g., list[-1]) do?",
            "options": [
              "Last item",
              "First item",
              "Reverse",
              "Error"
            ],
            "correctAnswer": 0,
            "explanation": "-1 refers to the last item in a sequence."
          },
          {
            "id": 30,
            "question": "What creates a Set?",
            "options": [
              "dict()",
              "[]",
              "{value}",
              "()"
            ],
            "correctAnswer": 2,
            "explanation": "Curly braces with values (no keys) create a Set."
          },
          {
            "id": 31,
            "question": "What is slicing?",
            "options": [
              "Deleting",
              "Extracting parts",
              "Cutting strings",
              "Adding"
            ],
            "correctAnswer": 1,
            "explanation": "Slicing allows accessing subsets of sequences (e.g., list[1:4])."
          },
          {
            "id": 32,
            "question": "What is __init__?",
            "options": [
              "Destructor",
              "Constructor",
              "Package",
              "Module"
            ],
            "correctAnswer": 1,
            "explanation": "__init__ is the initializer method for classes."
          },
          {
            "id": 33,
            "question": "Which method removes whitespace from start/end?",
            "options": [
              "cut()",
              "strip()",
              "trim()",
              "clean()"
            ],
            "correctAnswer": 1,
            "explanation": "strip() removes leading and trailing whitespace."
          },
          {
            "id": 34,
            "question": "What does 'break' do in a nested loop?",
            "options": [
              "Restarts",
              "Skips iteration",
              "Exits inner loop",
              "Exits all loops"
            ],
            "correctAnswer": 2,
            "explanation": "Break only exits the specific loop it is placed in."
          },
          {
            "id": 35,
            "question": "Which module supports Regex?",
            "options": [
              "pyregex",
              "re",
              "match",
              "regex"
            ],
            "correctAnswer": 1,
            "explanation": "The 're' standard library handles regular expressions."
          },
          {
            "id": 36,
            "question": "How do you generate a random number?",
            "options": [
              "import random",
              "import math",
              "import os",
              "import rand"
            ],
            "correctAnswer": 0,
            "explanation": "The 'random' module provides functions for random numbers."
          },
          {
            "id": 37,
            "question": "What is the output of set([1,2,2,3])?",
            "options": [
              "{1,2,2,3}",
              "[1,2,3]",
              "Error",
              "{1,2,3}"
            ],
            "correctAnswer": 3,
            "explanation": "Sets only contain unique elements, removing duplicates."
          },
          {
            "id": 38,
            "question": "What keyword defines a global variable inside a function?",
            "options": [
              "static",
              "var",
              "extern",
              "global"
            ],
            "correctAnswer": 3,
            "explanation": "The 'global' keyword allows modifying global variables locally."
          },
          {
            "id": 39,
            "question": "What is PEP 8?",
            "options": [
              "Compiler",
              "Style Guide",
              "License",
              "Debugger"
            ],
            "correctAnswer": 1,
            "explanation": "PEP 8 is the standard style guide for Python code."
          },
          {
            "id": 40,
            "question": "How do you open a file for writing?",
            "options": [
              "open('f', 'a')",
              "open('f', 'w')",
              "open('f', 'r')",
              "open('f')"
            ],
            "correctAnswer": 1,
            "explanation": "Mode 'w' opens a file for writing (overwriting)."
          },
          {
            "id": 41,
            "question": "What does zip() do?",
            "options": [
              "Compress files",
              "Sort",
              "Combine iterables",
              "Encrypt"
            ],
            "correctAnswer": 2,
            "explanation": "zip() aggregates elements from each of the iterables."
          },
          {
            "id": 42,
            "question": "What is a list comprehension?",
            "options": [
              "A comment",
              "Sorting",
              "Concise list creation",
              "Merging"
            ],
            "correctAnswer": 2,
            "explanation": "Syntax like [x for x in list] to create lists concisely."
          },
          {
            "id": 43,
            "question": "Which method converts a string to a list?",
            "options": [
              "cast()",
              "split()",
              "list()",
              "convert()"
            ],
            "correctAnswer": 1,
            "explanation": "split() divides a string into a list based on a separator."
          },
          {
            "id": 44,
            "question": "What are *args used for?",
            "options": [
              "Keywords",
              "Multiplication",
              "Variable arguments",
              "Pointers"
            ],
            "correctAnswer": 2,
            "explanation": "*args allows passing a variable number of positional arguments."
          },
          {
            "id": 45,
            "question": "Which operator performs exponentiation?",
            "options": [
              "exp",
              "^",
              "pow",
              "**"
            ],
            "correctAnswer": 3,
            "explanation": "Two asterisks (**) are used for power calculation (e.g., 2**3)."
          },
          {
            "id": 46,
            "question": "What is a decorator?",
            "options": [
              "Comment",
              "Variable",
              "Styling",
              "Function wrapper"
            ],
            "correctAnswer": 3,
            "explanation": "Decorators modify the behavior of a function or class."
          },
          {
            "id": 47,
            "question": "How do you install packages?",
            "options": [
              "gem",
              "npm",
              "pip",
              "brew"
            ],
            "correctAnswer": 2,
            "explanation": "pip is the standard package installer for Python."
          },
          {
            "id": 48,
            "question": "What is the result of '1' + '1'?",
            "options": [
              "1 1",
              "2",
              "Error",
              "11"
            ],
            "correctAnswer": 3,
            "explanation": "The + operator concatenates strings."
          },
          {
            "id": 49,
            "question": "What is 'pass'?",
            "options": [
              "Return",
              "Success",
              "Skip iteration",
              "Null statement"
            ],
            "correctAnswer": 3,
            "explanation": "pass is a placeholder statement that does nothing."
          },
          {
            "id": 50,
            "question": "Which structure stores Key-Value pairs?",
            "options": [
              "Tuple",
              "Set",
              "Dictionary",
              "List"
            ],
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
            "options": [
              "General Input Loop",
              "Global Interpreter Lock",
              "Graph Interface Layer",
              "Global Interface Lock"
            ],
            "correctAnswer": 1,
            "explanation": "The GIL is a mutex that protects access to Python objects."
          },
          {
            "id": 52,
            "question": "What is the purpose of 'yield'?",
            "options": [
              "Skip",
              "Stop function",
              "Return generator",
              "Pause execution"
            ],
            "correctAnswer": 2,
            "explanation": "Yield turns a function into a generator, producing values lazily."
          },
          {
            "id": 53,
            "question": "What is a Metaclass?",
            "options": [
              "Abstract class",
              "Class of a class",
              "Module",
              "Top class"
            ],
            "correctAnswer": 1,
            "explanation": "A metaclass defines how a class behaves (a class creates instances; a metaclass creates classes)."
          },
          {
            "id": 54,
            "question": "What does **kwargs handle?",
            "options": [
              "Pointers",
              "Exponents",
              "Lists",
              "Keyword arguments"
            ],
            "correctAnswer": 3,
            "explanation": "**kwargs passes variable keyword arguments as a dictionary."
          },
          {
            "id": 55,
            "question": "What is the 'with' statement used for?",
            "options": [
              "Loops",
              "Conditions",
              "Imports",
              "Context Managers"
            ],
            "correctAnswer": 3,
            "explanation": "'with' ensures proper resource management (e.g., closing files)."
          },
          {
            "id": 56,
            "question": "What is Pickling?",
            "options": [
              "Compressing",
              "Sorting",
              "Encryption",
              "Serialization"
            ],
            "correctAnswer": 3,
            "explanation": "Pickling is converting a Python object hierarchy into a byte stream."
          },
          {
            "id": 57,
            "question": "What is MRO?",
            "options": [
              "Memory Read Output",
              "Main Run Object",
              "Method Resolution Order",
              "Method Return Object"
            ],
            "correctAnswer": 2,
            "explanation": "MRO determines the order in which base classes are searched."
          },
          {
            "id": 58,
            "question": "Difference between __str__ and __repr__?",
            "options": [
              "User vs Developer",
              "No difference",
              "Public vs Private",
              "Int vs String"
            ],
            "correctAnswer": 0,
            "explanation": "__str__ is for end-users, __repr__ is unambiguous for developers."
          },
          {
            "id": 59,
            "question": "What are Python 'slots' (__slots__)?",
            "options": [
              "Variables",
              "Thread locks",
              "Memory optimization",
              "GUI elements"
            ],
            "correctAnswer": 2,
            "explanation": "__slots__ restricts attribute creation to save memory."
          },
          {
            "id": 60,
            "question": "Which library handles localized dates?",
            "options": [
              "pytz",
              "clock",
              "datetime",
              "time"
            ],
            "correctAnswer": 0,
            "explanation": "pytz allows accurate cross-timezone date calculations."
          },
          {
            "id": 61,
            "question": "What does @staticmethod do?",
            "options": [
              "Class method",
              "Static var",
              "Method without self",
              "Private method"
            ],
            "correctAnswer": 2,
            "explanation": "It defines a method that doesn't receive an implicit first argument."
          },
          {
            "id": 62,
            "question": "What is a Virtual Environment?",
            "options": [
              "Cloud server",
              "VM",
              "Isolated dependencies",
              "Docker"
            ],
            "correctAnswer": 2,
            "explanation": "It creates an isolated space for project-specific dependencies."
          },
          {
            "id": 63,
            "question": "What is Duck Typing?",
            "options": [
              "Dynamic typing concept",
              "Strong typing",
              "Strict validation",
              "Interface implementation"
            ],
            "correctAnswer": 0,
            "explanation": "'If it walks like a duck...'; type is determined by behavior, not class."
          },
          {
            "id": 64,
            "question": "What is the use of 'functools.wraps'?",
            "options": [
              "Wrap text",
              "Catch errors",
              "Speed up",
              "Preserve metadata"
            ],
            "correctAnswer": 3,
            "explanation": "It preserves the original function's name and docstring in decorators."
          },
          {
            "id": 65,
            "question": "What creates a shallow copy?",
            "options": [
              "copy.deepcopy()",
              "clone()",
              "=",
              "copy.copy()"
            ],
            "correctAnswer": 3,
            "explanation": "copy.copy() creates a new object but inserts references to original items."
          },
          {
            "id": 66,
            "question": "What is the 'super()' function?",
            "options": [
              "Parent class access",
              "Admin rights",
              "Global access",
              "Root node"
            ],
            "correctAnswer": 0,
            "explanation": "super() gives access to methods in a superclass (parent)."
          },
          {
            "id": 67,
            "question": "Which isn't a Python scope?",
            "options": [
              "Global",
              "Friend",
              "Local",
              "Enclosing"
            ],
            "correctAnswer": 1,
            "explanation": "Python follows LEGB (Local, Enclosing, Global, Built-in). 'Friend' is C++."
          },
          {
            "id": 68,
            "question": "What is a coroutine?",
            "options": [
              "Module",
              "Pausable function",
              "Process",
              "Thread"
            ],
            "correctAnswer": 1,
            "explanation": "Coroutines are functions that can suspend execution (async/await)."
          },
          {
            "id": 69,
            "question": "How to swap variables in one line?",
            "options": [
              "move(a,b)",
              "a,b = b,a",
              "swap(a,b)",
              "a=b; b=a"
            ],
            "correctAnswer": 1,
            "explanation": "Tuple unpacking allows syntax: a, b = b, a"
          },
          {
            "id": 70,
            "question": "What is the 'is' operator?",
            "options": [
              "Type check",
              "Assignment",
              "Equality",
              "Identity check"
            ],
            "correctAnswer": 3,
            "explanation": "'is' checks if two variables point to the exact same object in memory."
          },
          {
            "id": 71,
            "question": "Pandas is primarily used for?",
            "options": [
              "Game Dev",
              "Networking",
              "Data Analysis",
              "Web Dev"
            ],
            "correctAnswer": 2,
            "explanation": "Pandas is a powerhouse library for data manipulation and analysis."
          },
          {
            "id": 72,
            "question": "What is '__name__ == \"__main__\"'?",
            "options": [
              "Main variable",
              "Import check",
              "Script entry point",
              "Class init"
            ],
            "correctAnswer": 2,
            "explanation": "It checks if the script is being run directly rather than imported."
          },
          {
            "id": 73,
            "question": "What defines an abstract base class?",
            "options": [
              "virtual",
              "abc module",
              "interface",
              "abstract keyword"
            ],
            "correctAnswer": 1,
            "explanation": "The 'abc' module provides infrastructure for Abstract Base Classes."
          },
          {
            "id": 74,
            "question": "What is Monkey Patching?",
            "options": [
              "Virus",
              "Runtime modification",
              "Code fixing",
              "Updating Python"
            ],
            "correctAnswer": 1,
            "explanation": "Changing a class or module at runtime (often for testing)."
          },
          {
            "id": 75,
            "question": "What is PyPI?",
            "options": [
              "IDE",
              "Package Index",
              "Python Interpreter",
              "Performance Tool"
            ],
            "correctAnswer": 1,
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
            "options": [
              "All of these",
              "const",
              "var",
              "let"
            ],
            "correctAnswer": 0,
            "explanation": "JavaScript has var, let, and const for variable declaration."
          },
          {
            "id": 102,
            "question": "What does 'DOM' stand for?",
            "options": [
              "Data Object Model",
              "Document Object Model",
              "Digital Output Mode",
              "Display Object Management"
            ],
            "correctAnswer": 1,
            "explanation": "DOM stands for Document Object Model."
          },
          {
            "id": 103,
            "question": "How do you write 'Hello World' in an alert box?",
            "options": [
              "msg('Hello World')",
              "alertBox('Hello World')",
              "alert('Hello World')",
              "prompt('Hello World')"
            ],
            "correctAnswer": 2,
            "explanation": "alert('Hello World') displays an alert box."
          },
          {
            "id": 104,
            "question": "Which operator is used for assignment?",
            "options": [
              "->",
              "=",
              "==",
              "==="
            ],
            "correctAnswer": 1,
            "explanation": "= is the assignment operator."
          },
          {
            "id": 105,
            "question": "What is the result of 2 + '2' in JavaScript?",
            "options": [
              "'22'",
              "Error",
              "4",
              "22"
            ],
            "correctAnswer": 0,
            "explanation": "JavaScript converts 2 to string and concatenates: '22'."
          },
          {
            "id": 106,
            "question": "How do you create a function in JavaScript?",
            "options": [
              "function myFunc()",
              "def myFunc()",
              "function:myFunc()",
              "create myFunc()"
            ],
            "correctAnswer": 0,
            "explanation": "function keyword is used to define functions."
          },
          {
            "id": 107,
            "question": "Which method removes the last element from an array?",
            "options": [
              "slice()",
              "shift()",
              "push()",
              "pop()"
            ],
            "correctAnswer": 3,
            "explanation": "pop() removes the last element."
          },
          {
            "id": 108,
            "question": "What is typeof null?",
            "options": [
              "null",
              "number",
              "object",
              "undefined"
            ],
            "correctAnswer": 2,
            "explanation": "typeof null returns 'object' (historical bug)."
          },
          {
            "id": 109,
            "question": "How do you comment in JavaScript?",
            "options": [
              "// comment",
              "All of these",
              "<!-- comment -->",
              "# comment"
            ],
            "correctAnswer": 0,
            "explanation": "// for single-line comments."
          },
          {
            "id": 110,
            "question": "What is the result of 5 == '5'?",
            "options": [
              "undefined",
              "true",
              "false",
              "Error"
            ],
            "correctAnswer": 1,
            "explanation": "Loose equality converts types: 5 == '5' is true."
          },
          {
            "id": 111,
            "question": "Which method adds elements to an array?",
            "options": [
              "append()",
              "add()",
              "push()",
              "insert()"
            ],
            "correctAnswer": 2,
            "explanation": "push() adds elements to the end of an array."
          },
          {
            "id": 112,
            "question": "What is NaN?",
            "options": [
              "Not a Number",
              "New Array Number",
              "Null value",
              "No argument Needed"
            ],
            "correctAnswer": 0,
            "explanation": "NaN stands for 'Not a Number'."
          },
          {
            "id": 113,
            "question": "Which symbol represents strict equality?",
            "options": [
              "!==",
              "===",
              "=",
              "=="
            ],
            "correctAnswer": 1,
            "explanation": "=== checks value and type equality."
          },
          {
            "id": 114,
            "question": "What is an array index?",
            "options": [
              "Array length",
              "Type of array",
              "Array method",
              "Position of element"
            ],
            "correctAnswer": 3,
            "explanation": "Index is the position of an element in an array."
          },
          {
            "id": 115,
            "question": "How to get array length?",
            "options": [
              ".len",
              ".size",
              ".count",
              ".length"
            ],
            "correctAnswer": 3,
            "explanation": "array.length returns the number of elements."
          },
          {
            "id": 116,
            "question": "Which loops through arrays?",
            "options": [
              "if statement",
              "for loop",
              "while",
              "switch"
            ],
            "correctAnswer": 1,
            "explanation": "for loops are commonly used for arrays."
          },
          {
            "id": 117,
            "question": "What does console.log() do?",
            "options": [
              "Creates log file",
              "Shows alert",
              "Displays webpage",
              "Prints to console"
            ],
            "correctAnswer": 3,
            "explanation": "console.log() outputs to browser console."
          },
          {
            "id": 118,
            "question": "What is an object in JavaScript?",
            "options": [
              "A number",
              "Collection of key-value pairs",
              "Only an array",
              "Only a function"
            ],
            "correctAnswer": 1,
            "explanation": "Objects store data as key-value pairs."
          },
          {
            "id": 119,
            "question": "Which is NOT a JavaScript data type?",
            "options": [
              "character",
              "boolean",
              "number",
              "string"
            ],
            "correctAnswer": 0,
            "explanation": "JavaScript has string, not character type."
          },
          {
            "id": 120,
            "question": "What is a string?",
            "options": [
              "Number data",
              "Text data",
              "Array data",
              "Boolean data"
            ],
            "correctAnswer": 1,
            "explanation": "Strings represent text in JavaScript."
          },
          {
            "id": 121,
            "question": "What is boolean?",
            "options": [
              "true/false",
              "Array type",
              "Text type",
              "Number type"
            ],
            "correctAnswer": 0,
            "explanation": "Booleans are true/false values."
          },
          {
            "id": 122,
            "question": "What does parseInt() do?",
            "options": [
              "Parses JSON",
              "Creates array",
              "Converts to integer",
              "Validates input"
            ],
            "correctAnswer": 2,
            "explanation": "parseInt() converts string to integer."
          },
          {
            "id": 123,
            "question": "How to create an object?",
            "options": [
              "Both {} and new Object()",
              "[]",
              "new Object()",
              "{}"
            ],
            "correctAnswer": 0,
            "explanation": "Both {} and new Object() create objects."
          },
          {
            "id": 124,
            "question": "What does Math.random() return?",
            "options": [
              "Fixed number",
              "Random integer",
              "Random number 0-1",
              "Array"
            ],
            "correctAnswer": 2,
            "explanation": "Math.random() returns decimal between 0 (inclusive) and 1 (exclusive)."
          },
          {
            "id": 125,
            "question": "What is an event handler?",
            "options": [
              "Variable type",
              "Error handler",
              "Loop type",
              "Function responding to events"
            ],
            "correctAnswer": 3,
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
            "options": [
              "DOM element",
              "Function with access to outer scope",
              "Built-in method",
              "Event handler"
            ],
            "correctAnswer": 1,
            "explanation": "Closure = function with access to parent scope."
          },
          {
            "id": 127,
            "question": "What does 'this' refer to in a method?",
            "options": [
              "Global object",
              "Owning object",
              "Parent class",
              "Function itself"
            ],
            "correctAnswer": 1,
            "explanation": "'this' refers to the object calling the method."
          },
          {
            "id": 128,
            "question": "What is hoisting?",
            "options": [
              "Variable declaration moved to top",
              "Event bubbling",
              "DOM manipulation",
              "Async operation"
            ],
            "correctAnswer": 0,
            "explanation": "Hoisting moves declarations to top of scope."
          },
          {
            "id": 129,
            "question": "Which is NOT a falsy value?",
            "options": [
              "0",
              "''",
              "'false'",
              "null"
            ],
            "correctAnswer": 2,
            "explanation": "'false' is a non-empty string → truthy."
          },
          {
            "id": 130,
            "question": "What does JSON.parse() do?",
            "options": [
              "Convert object to JSON",
              "Stringify object",
              "Parse JSON string to object",
              "Validate JSON"
            ],
            "correctAnswer": 2,
            "explanation": "JSON.parse() converts JSON string to JavaScript object."
          },
          {
            "id": 131,
            "question": "What is event delegation?",
            "options": [
              "Event bubbling",
              "Remove events",
              "Assign event to parent",
              "Async events"
            ],
            "correctAnswer": 2,
            "explanation": "Use parent to handle child events."
          },
          {
            "id": 132,
            "question": "What does 'use strict' do?",
            "options": [
              "Optimizes code",
              "Disables features",
              "Enables strict mode",
              "Enables ES6"
            ],
            "correctAnswer": 2,
            "explanation": "Enables strict error checking."
          },
          {
            "id": 133,
            "question": "What is the spread operator?",
            "options": [
              "=>",
              "::",
              "...",
              "**"
            ],
            "correctAnswer": 2,
            "explanation": "... spreads elements."
          },
          {
            "id": 134,
            "question": "What is a callback function?",
            "options": [
              "Error function",
              "Main function",
              "Function passed as argument",
              "Return function"
            ],
            "correctAnswer": 2,
            "explanation": "Function passed to another function as argument."
          },
          {
            "id": 135,
            "question": "What is asynchronous programming?",
            "options": [
              "Synchronous flow",
              "Non-blocking operations",
              "Linear execution",
              "Parallel execution"
            ],
            "correctAnswer": 1,
            "explanation": "Code doesn't wait for operations to complete."
          },
          {
            "id": 136,
            "question": "What is the difference between == and ===?",
            "options": [
              "No difference",
              "== checks type only",
              "=== checks type and value",
              "=== is deprecated"
            ],
            "correctAnswer": 2,
            "explanation": "=== is strict equality (type + value)."
          },
          {
            "id": 137,
            "question": "What is an IIFE?",
            "options": [
              "Imported Function",
              "Internal Function",
              "Inline Function",
              "Immediately Invoked Function Expression"
            ],
            "correctAnswer": 3,
            "explanation": "Function that runs immediately after definition."
          },
          {
            "id": 138,
            "question": "What is the arrow function syntax?",
            "options": [
              "() -> {}",
              "=>()",
              "() => {}",
              "function() {}"
            ],
            "correctAnswer": 2,
            "explanation": "Arrow functions use => syntax."
          },
          {
            "id": 139,
            "question": "What does map() do to arrays?",
            "options": [
              "Reduces array",
              "Sorts array",
              "Filters elements",
              "Transforms each element"
            ],
            "correctAnswer": 3,
            "explanation": "map() creates new array with transformed elements."
          },
          {
            "id": 140,
            "question": "What is a promise?",
            "options": [
              "DOM promise",
              "Synchronous function",
              "Error handler",
              "Async operation placeholder"
            ],
            "correctAnswer": 3,
            "explanation": "Promise handles async operations."
          },
          {
            "id": 141,
            "question": "What does async/await do?",
            "options": [
              "Simplifies async code",
              "Syncs operations",
              "Blocks execution",
              "Creates threads"
            ],
            "correctAnswer": 0,
            "explanation": "Makes async code look synchronous."
          },
          {
            "id": 142,
            "question": "What is destructuring?",
            "options": [
              "Create new objects",
              "Merge objects",
              "Destroy objects",
              "Extract values from objects/arrays"
            ],
            "correctAnswer": 3,
            "explanation": "Unpack values from objects/arrays."
          },
          {
            "id": 143,
            "question": "What is template literal?",
            "options": [
              "JSON template",
              "HTML template",
              "String with ${}",
              "Function template"
            ],
            "correctAnswer": 2,
            "explanation": "Template literals use backticks and ${}."
          },
          {
            "id": 144,
            "question": "What is the difference between let and var?",
            "options": [
              "let has block scope",
              "No difference",
              "var has block scope",
              "let is global"
            ],
            "correctAnswer": 0,
            "explanation": "let has block scope, var has function scope."
          },
          {
            "id": 145,
            "question": "What is a higher-order function?",
            "options": [
              "Async function",
              "Main function",
              "Takes/returns functions",
              "Higher complexity"
            ],
            "correctAnswer": 2,
            "explanation": "Function that takes/returns other functions."
          },
          {
            "id": 146,
            "question": "What is currying?",
            "options": [
              "Error handling",
              "Function optimization",
              "Event handling",
              "Multiple arguments into sequence"
            ],
            "correctAnswer": 3,
            "explanation": "f(a)(b)(c) instead of f(a,b,c)."
          },
          {
            "id": 147,
            "question": "What is memoization?",
            "options": [
              "Garbage collection",
              "Caching function results",
              "Memory allocation",
              "Performance profiling"
            ],
            "correctAnswer": 1,
            "explanation": "Cache results for same inputs."
          },
          {
            "id": 148,
            "question": "What is the event loop?",
            "options": [
              "Loop optimization",
              "Async callback queue",
              "JS runtime model",
              "DOM event handler"
            ],
            "correctAnswer": 2,
            "explanation": "Handles async operations in JS."
          },
          {
            "id": 149,
            "question": "What is prototypal inheritance?",
            "options": [
              "Multiple inheritance",
              "Objects inherit from objects",
              "Class-based inheritance",
              "Interface inheritance"
            ],
            "correctAnswer": 1,
            "explanation": "JS uses prototype chain for inheritance."
          },
          {
            "id": 150,
            "question": "What are Web Workers?",
            "options": [
              "DOM workers",
              "Event workers",
              "Server workers",
              "Background threads"
            ],
            "correctAnswer": 3,
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
            "options": [
              "Execution pause",
              "Memory leak",
              "Garbage collection",
              "let/const hoisting area"
            ],
            "correctAnswer": 3,
            "explanation": "Area where variable exists but not initialized."
          },
          {
            "id": 152,
            "question": "What is a generator function?",
            "options": [
              "Can pause execution",
              "Creates objects",
              "Generates random numbers",
              "Async function"
            ],
            "correctAnswer": 0,
            "explanation": "Function that can pause and resume execution."
          },
          {
            "id": 153,
            "question": "What is the difference between null and undefined?",
            "options": [
              "No difference",
              "null is assignment, undefined is default",
              "Both are same",
              "undefined is assignment"
            ],
            "correctAnswer": 1,
            "explanation": "null is intentional absence, undefined is uninitialized."
          },
          {
            "id": 154,
            "question": "What is a pure function?",
            "options": [
              "No side effects, same input → same output",
              "Impure function",
              "Async function",
              "Random function"
            ],
            "correctAnswer": 0,
            "explanation": "Deterministic with no side effects."
          },
          {
            "id": 155,
            "question": "What is function composition?",
            "options": [
              "Combining functions",
              "Optimizing functions",
              "Creating functions",
              "Destroying functions"
            ],
            "correctAnswer": 0,
            "explanation": "Combining simple functions to build complex ones."
          },
          {
            "id": 156,
            "question": "What is the difference between deep and shallow copy?",
            "options": [
              "Deep is faster",
              "Deep copies nested objects",
              "No difference",
              "Shallow copies all"
            ],
            "correctAnswer": 1,
            "explanation": "Deep copy duplicates nested objects."
          },
          {
            "id": 157,
            "question": "What is a Symbol in ES6?",
            "options": [
              "Number type",
              "Boolean type",
              "Unique identifier",
              "String type"
            ],
            "correctAnswer": 2,
            "explanation": "Symbols create unique property keys."
          },
          {
            "id": 158,
            "question": "What is a Proxy object?",
            "options": [
              "Customize object operations",
              "Object copy",
              "Network proxy",
              "Function proxy"
            ],
            "correctAnswer": 0,
            "explanation": "Proxy wraps object to intercept operations."
          },
          {
            "id": 159,
            "question": "What is Reflect API?",
            "options": [
              "Methods for object operations",
              "Reflection API",
              "Network API",
              "Mirror API"
            ],
            "correctAnswer": 0,
            "explanation": "Provides methods for object operations."
          },
          {
            "id": 160,
            "question": "What is tail call optimization?",
            "options": [
              "Speed optimization",
              "Optimizes recursion",
              "Memory optimization",
              "Code optimization"
            ],
            "correctAnswer": 1,
            "explanation": "Optimizes recursive function calls."
          },
          {
            "id": 161,
            "question": "What is a WeakMap?",
            "options": [
              "Both objects only and weak references",
              "Keys are objects only",
              "Weak references",
              "Any keys"
            ],
            "correctAnswer": 0,
            "explanation": "WeakMap keys are objects with weak references."
          },
          {
            "id": 162,
            "question": "What is the difference between for...in and for...of?",
            "options": [
              "No difference",
              "for...in for keys, for...of for values",
              "Both for keys",
              "Both for values"
            ],
            "correctAnswer": 1,
            "explanation": "for...in loops over keys, for...over over values."
          },
          {
            "id": 163,
            "question": "What is a Set?",
            "options": [
              "Object type",
              "Array type",
              "Collection of unique values",
              "Key-value pairs"
            ],
            "correctAnswer": 2,
            "explanation": "Set stores unique values of any type."
          },
          {
            "id": 164,
            "question": "What is the purpose of Object.freeze()?",
            "options": [
              "Optimizes object",
              "Creates copy",
              "Freezes memory",
              "Prevents object modification"
            ],
            "correctAnswer": 3,
            "explanation": "Makes object immutable."
          },
          {
            "id": 165,
            "question": "What is a Service Worker?",
            "options": [
              "Background script for PWA",
              "Network worker",
              "Web Worker",
              "Server worker"
            ],
            "correctAnswer": 0,
            "explanation": "Runs in background for offline capabilities."
          },
          {
            "id": 166,
            "question": "What is WebSocket?",
            "options": [
              "Database connection",
              "Full-duplex communication",
              "File transfer",
              "HTTP request"
            ],
            "correctAnswer": 1,
            "explanation": "Provides persistent connection between client/server."
          },
          {
            "id": 167,
            "question": "What is CORS?",
            "options": [
              "Cross-Site Scripting",
              "Cross-Origin Requests",
              "Cross-Domain Sharing",
              "Cross-Origin Resource Sharing"
            ],
            "correctAnswer": 3,
            "explanation": "Mechanism for cross-domain requests."
          },
          {
            "id": 168,
            "question": "What is the Module Pattern?",
            "options": [
              "Encapsulation pattern",
              "Code pattern",
              "Export pattern",
              "Import pattern"
            ],
            "correctAnswer": 0,
            "explanation": "Encapsulates code in modules."
          },
          {
            "id": 169,
            "question": "What is a Mixin?",
            "options": [
              "Mixing types",
              "Reuse code across classes",
              "Combining functions",
              "Merging objects"
            ],
            "correctAnswer": 1,
            "explanation": "Add functionality to classes."
          },
          {
            "id": 170,
            "question": "What is the Observer Pattern?",
            "options": [
              "Subject-Observer relationship",
              "Callback pattern",
              "Listener pattern",
              "Event pattern"
            ],
            "correctAnswer": 0,
            "explanation": "Objects subscribe to event changes."
          },
          {
            "id": 171,
            "question": "What is the Singleton Pattern?",
            "options": [
              "Multiple instances",
              "Single instance",
              "Builder pattern",
              "Factory pattern"
            ],
            "correctAnswer": 1,
            "explanation": "Restricts class to single instance."
          },
          {
            "id": 172,
            "question": "What is the Factory Pattern?",
            "options": [
              "Creates objects",
              "Copies objects",
              "Modifies objects",
              "Destroys objects"
            ],
            "correctAnswer": 0,
            "explanation": "Creates objects without specifying exact class."
          },
          {
            "id": 173,
            "question": "What is the Decorator Pattern?",
            "options": [
              "Removes behavior",
              "Adds behavior dynamically",
              "Creates objects",
              "Changes type"
            ],
            "correctAnswer": 1,
            "explanation": "Adds functionality to objects dynamically."
          },
          {
            "id": 174,
            "question": "What is the Strategy Pattern?",
            "options": [
              "Single strategy",
              "Fixed algorithm",
              "No strategy",
              "Interchangeable algorithms"
            ],
            "correctAnswer": 3,
            "explanation": "Defines family of interchangeable algorithms."
          },
          {
            "id": 175,
            "question": "What is the difference between imperative and declarative programming?",
            "options": [
              "Imperative = how, Declarative = what",
              "Same concept",
              "No difference",
              "Opposite"
            ],
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
            "options": [
              "JavaScript library",
              "Programming language",
              "Database",
              "Operating system"
            ],
            "correctAnswer": 0,
            "explanation": "React is a JavaScript library for building UIs."
          },
          {
            "id": 202,
            "question": "How do you create a component?",
            "options": [
              "createComponent()",
              "Both",
              "function MyComponent()",
              "class MyComponent"
            ],
            "correctAnswer": 1,
            "explanation": "Both function and class components are valid."
          },
          {
            "id": 203,
            "question": "What is JSX?",
            "options": [
              "JavaScript XML",
              "Java syntax",
              "JSON extension",
              "XML parser"
            ],
            "correctAnswer": 0,
            "explanation": "JSX = JavaScript XML syntax extension."
          },
          {
            "id": 204,
            "question": "How to pass data to component?",
            "options": [
              "Redux",
              "Props",
              "State",
              "Context"
            ],
            "correctAnswer": 1,
            "explanation": "Props pass data from parent to child."
          },
          {
            "id": 205,
            "question": "What is state?",
            "options": [
              "API response",
              "Component data",
              "DOM element",
              "Global variable"
            ],
            "correctAnswer": 1,
            "explanation": "State holds component's local data."
          },
          {
            "id": 206,
            "question": "What does setState() do?",
            "options": [
              "Creates state",
              "Updates props",
              "Updates state",
              "Sets props"
            ],
            "correctAnswer": 2,
            "explanation": "Updates component state and re-renders."
          },
          {
            "id": 207,
            "question": "What is a prop?",
            "options": [
              "Internal state",
              "Output from component",
              "Event handler",
              "Input to component"
            ],
            "correctAnswer": 3,
            "explanation": "Props are inputs passed to components."
          },
          {
            "id": 208,
            "question": "How to render list?",
            "options": [
              "while loop",
              "for loop",
              "forEach()",
              "map()"
            ],
            "correctAnswer": 3,
            "explanation": "map() creates array of elements."
          },
          {
            "id": 209,
            "question": "What is a controlled component?",
            "options": [
              "Uncontrolled element",
              "HTML element",
              "DOM element",
              "Form element controlled by React"
            ],
            "correctAnswer": 3,
            "explanation": "Form data handled by React state."
          },
          {
            "id": 210,
            "question": "What is a key?",
            "options": [
              "State key",
              "Component ID",
              "Unique identifier for list items",
              "Prop type"
            ],
            "correctAnswer": 2,
            "explanation": "Helps React identify which items changed."
          },
          {
            "id": 211,
            "question": "What is the root component?",
            "options": [
              "Root DOM",
              "Main component",
              "App component",
              "Index component"
            ],
            "correctAnswer": 2,
            "explanation": "Top-level component in React tree."
          },
          {
            "id": 212,
            "question": "How to handle events?",
            "options": [
              "onclick='handleClick'",
              "onClick={handleClick}",
              "@click='handleClick'",
              "click={handleClick}"
            ],
            "correctAnswer": 1,
            "explanation": "React uses camelCase event handlers."
          },
          {
            "id": 213,
            "question": "What is conditional rendering?",
            "options": [
              "Always render",
              "Never render",
              "Render based on conditions",
              "Random render"
            ],
            "correctAnswer": 2,
            "explanation": "Render different UI based on state/props."
          },
          {
            "id": 214,
            "question": "What is a fragment?",
            "options": [
              "Single element",
              "DOM fragment",
              "HTML element",
              "Wrap multiple elements"
            ],
            "correctAnswer": 3,
            "explanation": "<> </> wraps multiple elements without extra DOM node."
          },
          {
            "id": 215,
            "question": "What is the purpose of render()?",
            "options": [
              "Handles events",
              "Returns JSX",
              "Updates DOM",
              "Fetches data"
            ],
            "correctAnswer": 1,
            "explanation": "render() method returns what to display."
          },
          {
            "id": 216,
            "question": "What is the virtual DOM?",
            "options": [
              "Real DOM",
              "Browser DOM",
              "In-memory DOM copy",
              "Shadow DOM"
            ],
            "correctAnswer": 2,
            "explanation": "Lightweight copy of real DOM."
          },
          {
            "id": 217,
            "question": "How to install React?",
            "options": [
              "download-react",
              "create-react-app",
              "install-react",
              "npm react"
            ],
            "correctAnswer": 1,
            "explanation": "create-react-app sets up React project."
          },
          {
            "id": 218,
            "question": "What is a stateless component?",
            "options": [
              "Pure component",
              "Component with state",
              "Class component",
              "Function component without state"
            ],
            "correctAnswer": 3,
            "explanation": "Function component that doesn't use state."
          },
          {
            "id": 219,
            "question": "What is a stateful component?",
            "options": [
              "Stateless component",
              "Function component",
              "Class component with state",
              "Pure component"
            ],
            "correctAnswer": 2,
            "explanation": "Component that maintains local state."
          },
          {
            "id": 220,
            "question": "What is the component lifecycle?",
            "options": [
              "Init, render",
              "Mount, update, unmount",
              "Create, destroy",
              "Start, stop"
            ],
            "correctAnswer": 1,
            "explanation": "Components mount, update, and unmount."
          },
          {
            "id": 221,
            "question": "What is componentDidMount()?",
            "options": [
              "Before mount",
              "After unmount",
              "Called after component mounts",
              "During render"
            ],
            "correctAnswer": 2,
            "explanation": "Lifecycle method called after first render."
          },
          {
            "id": 222,
            "question": "What is componentDidUpdate()?",
            "options": [
              "Never called",
              "During update",
              "Before update",
              "Called after update"
            ],
            "correctAnswer": 3,
            "explanation": "Lifecycle method called after updates."
          },
          {
            "id": 223,
            "question": "What is componentWillUnmount()?",
            "options": [
              "After unmount",
              "During unmount",
              "Called before unmount",
              "Before mount"
            ],
            "correctAnswer": 2,
            "explanation": "Lifecycle method called before component removal."
          },
          {
            "id": 224,
            "question": "What is a default prop?",
            "options": [
              "State prop",
              "Optional prop",
              "Default value for prop",
              "Required prop"
            ],
            "correctAnswer": 2,
            "explanation": "Default value when prop not provided."
          },
          {
            "id": 225,
            "question": "What is propTypes?",
            "options": [
              "Prop validation",
              "Type checking for props",
              "Prop deletion",
              "Prop creation"
            ],
            "correctAnswer": 1,
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
            "options": [
              "Functions to use React features",
              "Lifecycle methods",
              "Event handlers",
              "DOM hooks"
            ],
            "correctAnswer": 0,
            "explanation": "Hooks let you use state/effects in functions."
          },
          {
            "id": 227,
            "question": "What does useEffect do?",
            "options": [
              "Side effects",
              "DOM manipulation",
              "Props change",
              "State update"
            ],
            "correctAnswer": 0,
            "explanation": "Handles side effects in components."
          },
          {
            "id": 228,
            "question": "What is useState?",
            "options": [
              "Hook for context",
              "Hook for refs",
              "Hook for state",
              "Hook for effects"
            ],
            "correctAnswer": 2,
            "explanation": "Hook to add state to function components."
          },
          {
            "id": 229,
            "question": "What is useContext?",
            "options": [
              "Hook for context",
              "Hook for state",
              "Hook for effects",
              "Hook for refs"
            ],
            "correctAnswer": 0,
            "explanation": "Hook to consume context."
          },
          {
            "id": 230,
            "question": "What is useRef?",
            "options": [
              "Hook for refs",
              "Hook for effects",
              "Hook for context",
              "Hook for state"
            ],
            "correctAnswer": 0,
            "explanation": "Hook to access DOM elements or persist values."
          },
          {
            "id": 231,
            "question": "What is useCallback?",
            "options": [
              "Creates callbacks",
              "Memoizes values",
              "Handles events",
              "Memoizes functions"
            ],
            "correctAnswer": 3,
            "explanation": "Returns memoized callback function."
          },
          {
            "id": 232,
            "question": "What is useMemo?",
            "options": [
              "Memoizes functions",
              "Memoizes values",
              "Creates memory",
              "Allocates memory"
            ],
            "correctAnswer": 1,
            "explanation": "Returns memoized value."
          },
          {
            "id": 233,
            "question": "What is a custom hook?",
            "options": [
              "Reusable hook logic",
              "Built-in hook",
              "Event hook",
              "Component hook"
            ],
            "correctAnswer": 0,
            "explanation": "Custom function that uses hooks."
          },
          {
            "id": 234,
            "question": "What is React Router?",
            "options": [
              "Form handling",
              "API library",
              "Routing library",
              "State management"
            ],
            "correctAnswer": 2,
            "explanation": "Declarative routing for React."
          },
          {
            "id": 235,
            "question": "What is a route?",
            "options": [
              "URL path to component",
              "Prop route",
              "Event route",
              "State route"
            ],
            "correctAnswer": 0,
            "explanation": "Maps URL to component."
          },
          {
            "id": 236,
            "question": "What is a Link component?",
            "options": [
              "Form",
              "Button",
              "Anchor tag",
              "Navigate without reload"
            ],
            "correctAnswer": 3,
            "explanation": "Navigates without page reload."
          },
          {
            "id": 237,
            "question": "What is prop drilling?",
            "options": [
              "Prop deletion",
              "Pass props through layers",
              "Prop mutation",
              "Prop validation"
            ],
            "correctAnswer": 1,
            "explanation": "Passing props deeply through components."
          },
          {
            "id": 238,
            "question": "What is Context API?",
            "options": [
              "Handle events",
              "Share data without props",
              "Route data",
              "Manage state"
            ],
            "correctAnswer": 1,
            "explanation": "Share data across component tree."
          },
          {
            "id": 239,
            "question": "What is a Provider?",
            "options": [
              "Creates context",
              "Destroys context",
              "Provides context value",
              "Consumes context"
            ],
            "correctAnswer": 2,
            "explanation": "Component that provides context value."
          },
          {
            "id": 240,
            "question": "What is a Consumer?",
            "options": [
              "Destroys context",
              "Consumes context value",
              "Provides context",
              "Creates context"
            ],
            "correctAnswer": 1,
            "explanation": "Component that consumes context value."
          },
          {
            "id": 241,
            "question": "What is Redux?",
            "options": [
              "Form library",
              "Routing library",
              "API library",
              "State management library"
            ],
            "correctAnswer": 3,
            "explanation": "Predictable state container."
          },
          {
            "id": 242,
            "question": "What is a store?",
            "options": [
              "Session storage",
              "Local storage",
              "Holds application state",
              "Component store"
            ],
            "correctAnswer": 2,
            "explanation": "Single source of truth for state."
          },
          {
            "id": 243,
            "question": "What is an action?",
            "options": [
              "Changes state directly",
              "Component action",
              "Event action",
              "Describes state change"
            ],
            "correctAnswer": 3,
            "explanation": "Plain object describing what happened."
          },
          {
            "id": 244,
            "question": "What is a reducer?",
            "options": [
              "Function that returns new state",
              "Action reducer",
              "State changer",
              "Event handler"
            ],
            "correctAnswer": 0,
            "explanation": "Pure function taking state and action, returning new state."
          },
          {
            "id": 245,
            "question": "What is a selector?",
            "options": [
              "Selects component",
              "Extracts state slice",
              "Chooses action",
              "Picks reducer"
            ],
            "correctAnswer": 1,
            "explanation": "Function that extracts data from state."
          },
          {
            "id": 246,
            "question": "What is middleware?",
            "options": [
              "Action middleware",
              "Redux core",
              "State middleware",
              "Extends Redux"
            ],
            "correctAnswer": 3,
            "explanation": "Third-party extension point between dispatching and reducer."
          },
          {
            "id": 247,
            "question": "What is thunk?",
            "options": [
              "Action type",
              "Middleware for async",
              "Middleware for sync",
              "Reducer type"
            ],
            "correctAnswer": 1,
            "explanation": "Middleware for async operations."
          },
          {
            "id": 248,
            "question": "What is React.memo?",
            "options": [
              "Performance optimization",
              "Memory allocation",
              "Memoization hook",
              "State manager"
            ],
            "correctAnswer": 0,
            "explanation": "Memoizes component to prevent re-renders."
          },
          {
            "id": 249,
            "question": "What is a PureComponent?",
            "options": [
              "Stateful component",
              "Stateless component",
              "Function component",
              "Optimizes class components"
            ],
            "correctAnswer": 3,
            "explanation": "Class component with shouldComponentUpdate shallow comparison."
          },
          {
            "id": 250,
            "question": "What is lazy loading?",
            "options": [
              "Cache components",
              "Load all components",
              "Preload components",
              "Load components on demand"
            ],
            "correctAnswer": 3,
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
            "options": [
              "Split code into chunks",
              "Separate logic",
              "Divide components",
              "File splitting"
            ],
            "correctAnswer": 0,
            "explanation": "Lazy load components for performance."
          },
          {
            "id": 252,
            "question": "What are error boundaries?",
            "options": [
              "Catch JS errors",
              "Syntax checkers",
              "Type checkers",
              "Network error handlers"
            ],
            "correctAnswer": 0,
            "explanation": "Catch JS errors in child components."
          },
          {
            "id": 253,
            "question": "What is React.Suspense?",
            "options": [
              "Handle async operations",
              "Stop rendering",
              "Pause execution",
              "Suspend components"
            ],
            "correctAnswer": 0,
            "explanation": "Component for handling async loading."
          },
          {
            "id": 254,
            "question": "What is a portal?",
            "options": [
              "Render children outside DOM hierarchy",
              "Iframe",
              "Shadow DOM",
              "New window"
            ],
            "correctAnswer": 0,
            "explanation": "Render children into different DOM location."
          },
          {
            "id": 255,
            "question": "What is forwardRef?",
            "options": [
              "Forward state",
              "Forward props",
              "Forward context",
              "Pass ref through component"
            ],
            "correctAnswer": 3,
            "explanation": "Forward ref to child component."
          },
          {
            "id": 256,
            "question": "What is a higher-order component?",
            "options": [
              "Function that returns component",
              "Parent component",
              "Higher component",
              "Wrapper component"
            ],
            "correctAnswer": 0,
            "explanation": "Function that takes component, returns new component."
          },
          {
            "id": 257,
            "question": "What is render props?",
            "options": [
              "Share code via prop",
              "Prop rendering",
              "Dynamic render",
              "Render component"
            ],
            "correctAnswer": 0,
            "explanation": "Technique using prop to share code between components."
          },
          {
            "id": 258,
            "question": "What is compound components?",
            "options": [
              "Single component",
              "Nested components",
              "Components work together",
              "Multiple components"
            ],
            "correctAnswer": 2,
            "explanation": "Components that work together as a unit."
          },
          {
            "id": 259,
            "question": "What is a controlled vs uncontrolled component?",
            "options": [
              "No difference",
              "Both same",
              "Controlled: React state, Uncontrolled: DOM",
              "Opposite"
            ],
            "correctAnswer": 2,
            "explanation": "Controlled: React manages state; Uncontrolled: DOM manages."
          },
          {
            "id": 260,
            "question": "What is the children prop?",
            "options": [
              "Nested props",
              "Content between tags",
              "Props for children",
              "Child components"
            ],
            "correctAnswer": 1,
            "explanation": "Content passed between component tags."
          },
          {
            "id": 261,
            "question": "What is useReducer?",
            "options": [
              "Alternative to useEffect",
              "Alternative to useRef",
              "Alternative to useContext",
              "Alternative to useState"
            ],
            "correctAnswer": 3,
            "explanation": "Hook for complex state logic."
          },
          {
            "id": 262,
            "question": "What is useLayoutEffect?",
            "options": [
              "Fires synchronously after DOM updates",
              "After render",
              "Before render",
              "Fires asynchronously"
            ],
            "correctAnswer": 0,
            "explanation": "Like useEffect but fires synchronously after DOM mutations."
          },
          {
            "id": 263,
            "question": "What is useImperativeHandle?",
            "options": [
              "Customize instance value",
              "Handle events",
              "Custom ref",
              "Imperative hook"
            ],
            "correctAnswer": 0,
            "explanation": "Customizes instance value exposed with forwardRef."
          },
          {
            "id": 264,
            "question": "What is useDebugValue?",
            "options": [
              "Log values",
              "Display label in DevTools",
              "Inspect hook",
              "Debug hook"
            ],
            "correctAnswer": 1,
            "explanation": "Display custom hook label in React DevTools."
          },
          {
            "id": 265,
            "question": "What is React.Fragment?",
            "options": [
              "Group elements without wrapper",
              "HTML fragment",
              "Fragment component",
              "DOM fragment"
            ],
            "correctAnswer": 0,
            "explanation": "Group list of children without adding extra nodes."
          },
          {
            "id": 266,
            "question": "What is StrictMode?",
            "options": [
              "Highlight potential problems",
              "Error detection",
              "Strict rendering",
              "Performance mode"
            ],
            "correctAnswer": 0,
            "explanation": "Tool for highlighting potential problems."
          },
          {
            "id": 267,
            "question": "What are keys?",
            "options": [
              "Neither",
              "Unique identifiers",
              "Both",
              "Help React identify items"
            ],
            "correctAnswer": 2,
            "explanation": "Keys help React identify which items changed."
          },
          {
            "id": 268,
            "question": "What is reconciliation?",
            "options": [
              "Prop reconciliation",
              "State reconciliation",
              "React's diffing algorithm",
              "DOM reconciliation"
            ],
            "correctAnswer": 2,
            "explanation": "Process of updating DOM to match React elements."
          },
          {
            "id": 269,
            "question": "What is Fiber?",
            "options": [
              "Virtual fiber",
              "DOM fiber",
              "New reconciliation engine",
              "React fiber"
            ],
            "correctAnswer": 2,
            "explanation": "New reconciliation algorithm in React 16+."
          },
          {
            "id": 270,
            "question": "What is concurrent mode?",
            "options": [
              "Blocking rendering",
              "Parallel rendering",
              "Render without blocking",
              "Async rendering"
            ],
            "correctAnswer": 2,
            "explanation": "Render updates without blocking the main thread."
          },
          {
            "id": 271,
            "question": "What is startTransition?",
            "options": [
              "Mark transition",
              "Begin transition",
              "Mark updates as transitions",
              "Start rendering"
            ],
            "correctAnswer": 2,
            "explanation": "Mark updates as transitions to keep UI responsive."
          },
          {
            "id": 272,
            "question": "What is useTransition?",
            "options": [
              "Hook for refs",
              "Hook for state",
              "Hook for transitions",
              "Hook for effects"
            ],
            "correctAnswer": 2,
            "explanation": "Hook to start transitions."
          },
          {
            "id": 273,
            "question": "What is useDeferredValue?",
            "options": [
              "Delay value",
              "Postpone value",
              "Update immediately",
              "Defer updating value"
            ],
            "correctAnswer": 3,
            "explanation": "Defer updating non-urgent value."
          },
          {
            "id": 274,
            "question": "What is server-side rendering?",
            "options": [
              "Render on client",
              "Both server and client",
              "Render on server",
              "Neither"
            ],
            "correctAnswer": 2,
            "explanation": "Render React components on server."
          },
          {
            "id": 275,
            "question": "What is Next.js?",
            "options": [
              "React framework",
              "React tool",
              "React plugin",
              "React library"
            ],
            "correctAnswer": 0,
            "explanation": "React framework with SSR, routing, etc."
          }
        ]
      }
    ]
  }
];
