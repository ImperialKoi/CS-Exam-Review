export interface Question {
  type: "multiple-choice" | "true-false" | "short-answer"
  question: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
}

export const questions = [
  // --- DEDUPED JAVA BASICS/MULTICLASS QUESTIONS ---
  {
    type: "true-false",
    question: "The names of classes are case-sensitive.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "In Java programs, the name of all methods and fields usually begin with a capital letter.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "The /** and */ marks surrounding a comment must appear on the same line.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Each line in a Java program ends with a semicolon.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "The Java compiler recognizes nested blocks through indentation.",
    correctAnswer: "False",
  },
  {
    type: "multiple-choice",
    question: "Which of the following operators does not apply to a boolean variable?",
    options: ["==", ">=", "!=", "||"],
    correctAnswer: ">=",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is NOT a relational operator?",
    options: [">=", "/=", "!=", "<="],
    correctAnswer: "/=",
  },
  {
    type: "multiple-choice",
    question: "Which of the following expressions is equivalent to !(a || !b)?",
    options: ["!a && !b", "!a || b", "a || !b", "!a && b", "a && !b"],
    correctAnswer: "!a && b",
  },
  {
    type: "short-answer",
    question: "Fix the syntax errors in the following code:",
    correctAnswer: [
      "double sum = 0.0;",
      "sum = sum + i * i;",
      "System.out.println(Math.round(sum / 1000))"
    ],
  },
  {
    type: "true-false",
    question: "true and false are Java reserved words.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "The result of a relational operator has the boolean type.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "When using an if control block, you must always include an else condition.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "What are the possible values of a boolean variable?",
    correctAnswer: ["true", "false"],
  },
  {
    type: "short-answer",
    question: "Simplify: (!(x == 7) && !(x > 7))",
    correctAnswer: ["x < 7"],
  },
  {
    type: "short-answer",
    question: "Can you have an if statement without an else?",
    correctAnswer: ["Yes", "Yes."],
  },
  {
    type: "multiple-choice",
    question: "The missing semicolon at the end of Line 6 is an example of",
    options: ["Style", "Syntax"],
    correctAnswer: "Syntax",
  },
  {
    type: "multiple-choice",
    question: "What is the purpose of indentation in Java programs?",
    options: [
      "To indicate nested blocks for the debugger.",
      "To mark compound statements for the compiler.",
      "To make the code more readable.",
      "To mark nested loops for the compiler."
    ],
    correctAnswer: "To make the code more readable.",
  },
  {
    type: "multiple-choice",
    question: "Another name for a reserved word is",
    options: ["comment", "constructor", "keyword", "syntax"],
    correctAnswer: "keyword",
  },
  {
    type: "multiple-choice",
    question: "A statement that tells the compiler where to look for other classes used by this class.",
    options: ["import", "field", "constructor", "method"],
    correctAnswer: "import",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is not the proper syntax for a method name in Java?",
    options: ["All of these are valid method names.", "min-value", "appleOrBanana", "test7"],
    correctAnswer: "min-value",
  },

  // --- STRING MANIPULATION & METHODS ---
  {
    type: "code",
    question: "Write a method that removes dashes from a social security number (\"ddd-dd-dddd\")",
    correctAnswer: ["987654321"],
  },
  {
    type: "code",
    question: "Return true if both strings are not empty and end with the same character.",
    correctAnswer: ["return (!s1.equals(\"\") && !s2.equals(\"\") && s1.charAt(s1.length() - 1) == s2.charAt(s2.length() - 1));"],
  },
  {
    type: "code",
    question: "Return true if the string is not empty and ends with a star (*).",
    correctAnswer: ["return (!input.equals(\"\") && input.charAt(input.length() - 1) == '*');"],
  },
  {
    type: "true-false",
    question: "The Character class contains the static method boolean isLetterOrDigit(char ch).",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "A string, once constructed, cannot be changed.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "You can call a literal string's methods, as in 'Hello'.equals(str).",
    correctAnswer: "True",
  },
  {
    type: "multiple-choice",
    question: "Which method returns the position of the first occurrence of '*' in a String called stars?",
    options: ["stars.indexOf('*');", "\"*\".indexIn(stars);", "stars.charAt('*');", "\"*\".findIn(stars);"],
    correctAnswer: "stars.indexOf('*');",
  },
  {
    type: "multiple-choice",
    question: "If s is a String, what does s.substring(5) do?",
    options: [
      "Returns the end of s, starting from the sixth character.",
      "Returns a substring made of the first 5 characters of s.",
      "Nothing, s does not have such a method.",
      "Returns a substring made of one character - the sixth character."
    ],
    correctAnswer: "Returns the end of s, starting from the sixth character.",
  },
  {
    type: "true-false",
    question: "The length method returns 0 for an empty string.",
    correctAnswer: "True",
  },
  {
    type: "multiple-choice",
    question: "What string is returned by str.substring(2,3) if str = 'ABCDE'?",
    options: ["BCD", "CDE", "BC", "C"],
    correctAnswer: "C",
  },
  {
    type: "true-false",
    question: "An empty string is represented either as \"\" or as a null reference.",
    correctAnswer: "False",
  },
  {
    type: "multiple-choice",
    question: "What is the output of this code segment: String str1 = 'A'; String str2 = str1; str2 += 'B'; System.out.println(str1 + str2);",
    options: ["AAB", "ABAB", "AB", "BA"],
    correctAnswer: "AAB",
  },
  {
    type: "true-false",
    question: "append is a method in the StringBuffer class.",
    correctAnswer: "True",
  },

  // --- ALGORITHMS & LOOPS ---
  {
    type: "short-answer",
    question: "Write pseudocode for an iterative algorithm that calculates the sum of 1/(i*i) for i from 1 to n.",
    correctAnswer: ["input n", "sum <- 0", "i <- 1", "Repeat until i > n", "sum <- sum + 1/(i*i)", "i <- i + 1", "Output sum"],
  },
  {
    type: "true-false",
    question: "The same algorithm can be implemented in different programming languages.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "In nested loops, break in any of them passes control to the first statement after the outermost loop.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "An algorithm always takes one parameter n as input.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "If break is used inside the body of a loop (not a switch), it should be inside an if-else statement.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "An algorithm always produces one number as output.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "What is a nested loop?",
    correctAnswer: ["A loop placed inside another loop."],
  },
  {
    type: "short-answer",
    question: "Is return allowed in a loop?",
    correctAnswer: ["Yes."],
  },
  {
    type: "short-answer",
    question: "Can you have nested while loops?",
    correctAnswer: ["Yes."],
  },
  {
    type: "short-answer",
    question: "Can any code with a for loop be rewritten with a while loop?",
    correctAnswer: ["Yes."],
  },
  {
    type: "short-answer",
    question: "Are method calls allowed in a condition in a while loop?",
    correctAnswer: ["Yes."],
  },
  {
    type: "multiple-choice",
    question: "What is the output of this code?",
    options: ["1 4 9 16 25", "1 3 6 10 15 21 28 36 45", "1 2 3 4 5 6 7 8 9", "1 3 5 7 9"],
    correctAnswer: "1 4 9 16 25",
  },
  {
    type: "multiple-choice",
    question: "What does countX(324) return?",
    options: ["1", "4", "0", "2"],
    correctAnswer: "4",
  },
  {
    type: "multiple-choice",
    question: "What happens when a return statement inside a for loop is executed?",
    options: [
      "The program immediately quits the current method.",
      "The program quits the body of the loop and passes control to the first statement after the loop.",
      "The program skips the remaining statements in the body of the loop, but executes the 'increment' statement and returns to the next iteration at the top of the loop.",
      "The program quits the body of the loop and returns to the 'initialization' statement, then the first iteration."
    ],
    correctAnswer: "The program immediately quits the current method.",
  },
  {
    type: "multiple-choice",
    question: "What does countX(36) return?",
    options: ["2", "1", "4", "0"],
    correctAnswer: "2",
  },
  {
    type: "multiple-choice",
    question: "What is the value of z after the code fragment is executed?",
    options: ["-0.2", "0.0", "-2.0", "-0.4"],
    correctAnswer: "-2.0",
  },
  {
    type: "short-answer",
    question: "Explain what is happening in the flowchart, given initial values n = 31 and b = 3. What is the final result?",
    correctAnswer: ["18"],
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements prints a backslash?",
    options: [
      "System.out.print(\\\\);",
      "System.out.print(\"\\\\\");",
      "System.out.print(\\bs);",
      "System.out.print(\\);",
    ],
    correctAnswer: "System.out.print(\"\\\\\");",
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements sets numDots to a random number between 1 and 6?",
    options: [
      "numDots = Math.randomInt(6) + 1;",
      "numDots = (int)(6 * Math.random());",
      "numDots = (int)(6 * Math.random() + 1);",
      "numDots = Math.randomInt(6);",
    ],
    correctAnswer: "numDots = (int)(6 * Math.random() + 1);",
  },
  {
    type: "multiple-choice",
    question: 'What is the result when the following is executed?\nSystem.out.println("1" + 2 + 3);',
    options: [
      "ClassCastException",
      'Syntax error "unexpected data type"',
      "6 is displayed",
      "123 is displayed",
    ],
    correctAnswer: "123 is displayed",
  },
  {
    type: "multiple-choice",
    question: "What is displayed by:\nSystem.out.println(m % (n + 1) + n % (m + 1));\nGiven int n = 12, m = 4;",
    options: ["112", "6", "1", "2.70769230769"],
    correctAnswer: "6",
  },
  {
    type: "multiple-choice",
    question: "What is the value of x after the following code?\n```java\nint x = 1;\nswitch(x) {\n  case 1: x++; break;\n  case 2: x += 2; break;\n  default: x = 0; break;\n}\n```",
    options: ["4", "2", "0", "1"],
    correctAnswer: "2",
  },
  {
    type: "short-answer",
    question: "Can double expressions be used in a switch?",
    correctAnswer: ["No"],
  },
  {
    type: "short-answer",
    question: "What is the output of System.out.print(13 % 5)?",
    correctAnswer: ["3"],
  },
  {
    type: "short-answer",
    question: "What is the output of System.out.print(1.0 / 2 * 10)?",
    correctAnswer: ["5.0"],
  },
  {
    type: "short-answer",
    question: "What is the output of System.out.print(1 / 2.0 * 10)?",
    correctAnswer: ["5.0"],
  },
  {
    type: "short-answer",
    question: "What is the output of System.out.print(1 / 2 * 10)?",
    correctAnswer: ["0"],
  },
  {
    type: "short-answer",
    question: "What is the value of gasMilage given:\nint miles = 98, gallons = 5;\ndouble gasMilage = miles / gallons;",
    correctAnswer: ["19.0"],
  },
  {
    type: "true-false",
    question: "The % operator has the same rank as the / operator.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "double and float are two different names for the same Java data type.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Casting a double to int rounds the value to the nearest integer.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Literal strings are not objects of the String type.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Literal strings are objects of the String type.",
    correctAnswer: "True",
  },

  // --- CLASSES, OBJECTS, INHERITANCE ---

  {
    type: "short-answer",
    question: "Where do we see the term 'void'?",
    correctAnswer: [
      "It is defined in a method header, used to define a method with no return.",
      "It is found in the method header.",
    ],
  },
  {
    type: "short-answer",
    question: "What is a 'constructor'?",
    correctAnswer: [
      "A constructor is a procedure for creating an object.",
      "A portion of code that allows us to take input and/or set intended values for an object before it is actually created.",
    ],
  },
  {
    type: "short-answer",
    question: "What is an 'object'?",
    correctAnswer: [
      "An object is an entity in a program that represents an object or a concept from the real world.",
      "Something made using the blueprint of a class, which represents a 'physical' thing.",
    ],
  },
  {
    type: "short-answer",
    question: "What does the word 'void' mean?",
    correctAnswer: [
      "No return for the method defined.",
      "It means no value is returned.",
    ],
  },
  {
    type: "short-answer",
    question: "Why is inheritance useful?",
    correctAnswer: [
      "It allows us to cast functionality of a superclass to a subclass. This relationship allows us to reuse code by building functionality for a new class on top of an existing class.",
      "It is useful since we do not have to recreate code.",
    ],
  },
  {
    type: "multiple-choice",
    question: "Which of the following is false?",
    options: [
      "A subclass can define additional fields.",
      "A method of an object can call methods of objects of a different class.",
      "A method of an object can call other methods of the same object.",
      "One of the public methods of every class should be called start.",
    ],
    correctAnswer: "One of the public methods of every class should be called start.",
  },
  {
    type: "multiple-choice",
    question: "Which Student constructor call will compile without error?",
    options: [
      "Student s1 = new Student(16);",
      "Student s1 = new Student(16, 'Amy');",
      "Student s1 = new Student('Amy');",
      "Student s1 = new Student('Amy', 16);",
    ],
    correctAnswer: "Student s1 = new Student('Amy', 16);",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is a good reason for making fields of a class private?",
    options: [
      "Private fields are shared by all objects of the class.",
      "The names and/or types of private fields in the class can be changed without changing other classes in the program.",
      "Only constructors have access to private fields.",
      "The class compiles faster.",
    ],
    correctAnswer: "The names and/or types of private fields in the class can be changed without changing other classes in the program.",
  },
  {
    type: "true-false",
    question: "When calling a method, the parameters passed must match the number, types, and order of parameters that the method expects.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "The name of the source file can not be the same as the name of the class.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "A local variable is neither public nor private.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "A class may have more than one constructor.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "When an object is created, the program always calls its init method.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Fields must be declared at the top of the class to compile successfully.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, each Dice is an object.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "A subclass's methods have direct access to the private fields of the superclass.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "An object must be instantiated before it can be used.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, the Game class creates objects.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "Local variables in different methods of the same class can have the same name.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "Each variable must be declared on a separate line.",
    correctAnswer: "False",
  },

  // --- HARDWARE, SOFTWARE, OOP, AND BINARY ---

  {
    type: "short-answer",
    question: "What does DNS stand for?",
    correctAnswer: ["Domain Name System"],
  },
  {
    type: "short-answer",
    question: "What is an output device?",
    correctAnswer: [
      "It is a device that takes information from the computer and displays or communicates it to the user or another device.",
    ],
  },
  {
    type: "short-answer",
    question: "What does USB stand for?",
    correctAnswer: ["Universal Serial Bus"],
  },
  {
    type: "short-answer",
    question: "What does ROM stand for?",
    correctAnswer: ["Read Only Memory"],
  },
  {
    type: "short-answer",
    question: "Name four output devices.",
    correctAnswer: ["Speaker", "Headphones", "Monitor", "Printer"],
  },
  {
    type: "short-answer",
    question: "What is software?",
    correctAnswer: ["Software are the instructions that tell the computer what to do."],
  },
  {
    type: "short-answer",
    question: "Name four hardware parts.",
    correctAnswer: ["CPU", "RAM", "ROM", "Motherboard", "Keyboard", "Mouse", "Monitor", "Hard drive"],
  },
  {
    type: "short-answer",
    question: "How do we end a statement in Java?",
    correctAnswer: ["Using a semicolon", ";"],
  },
  {
    type: "short-answer",
    question: "What is an IDE?",
    correctAnswer: ["Integrated Development Environment"],
  },
  {
    type: "short-answer",
    question: "What does OOP stand for?",
    correctAnswer: ["Object Oriented Programming"],
  },
  {
    type: "multiple-choice",
    question: "Which principle is central to OOP?",
    options: ["procedural programming", "inheritance", "top down programming", "block programming"],
    correctAnswer: "inheritance",
  },
  {
    type: "multiple-choice",
    question: "OOP is especially helpful for:",
    options: [
      "Developing mission critical applications.",
      "Improving software performance.",
      "Coordinating team projects.",
      "Facilitating training for software users.",
    ],
    correctAnswer: "Coordinating team projects",
  },
  {
    type: "multiple-choice",
    question: "What is Scanner?",
    options: [
      "A library class that helps to read command line parameters in a program.",
      "A module in the Java compiler that scans source code for syntax errors.",
      "A module in the Java interpreter the scans the current directory for .class files.",
      "A library class in the java.util package that helps read user input from the keyboard.",
    ],
    correctAnswer: "A library class in the java.util package that helps read user input from the keyboard.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is false about Bytecode?",
    options: [
      "It loads faster from the internet than source code.",
      "It is platform dependent.",
      "The interpreter is faster and smaller than it would be for Java source.",
      "The source code is not revealed to end users.",
    ],
    correctAnswer: "It is platform dependent.",
  },
  {
    type: "multiple-choice",
    question: "One byte is:",
    options: ["8 bits", "32 bits", "16 bits", "4 bits"],
    correctAnswer: "8 bits",
  },
  {
    type: "multiple-choice",
    question: "An 'AND' gate is an example of where _____________ would be used.",
    options: ["addition", "a byte", "Boolean logic", "multiplication"],
    correctAnswer: "Boolean logic",
  },
  {
    type: "multiple-choice",
    question: "IP stands for:",
    options: ["Internet Protocol", "Internet Programming", "Internal Programming", "Internal Protocol"],
    correctAnswer: "Internet Protocol",
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements is false?",
    options: [
      "A microprocessor CPU has millions of transistors etched into a silicon chip.",
      "Several transistors may be combined to form a gate.",
      "Several logical circuits may be combined to implement a software program.",
      "Several gates may be combined to form a logical circuit.",
    ],
    correctAnswer: "Several logical circuits may be combined to implement a software program.",
  },
  {
    type: "multiple-choice",
    question: "How are spikes of electricity used in a computer to carry information?",
    options: [
      "256 different amplitudes of a spike represent the possible values of a byte.",
      "A long spike represents 1 and a short spike represents 0.",
      "The absence or presence of a spike represents 0 or 1, respectively.",
      "A cluster of frequent spikes represents 1, and a cluster of infrequent spikes represents 0.",
    ],
    correctAnswer: "The absence or presence of a spike represents 0 or 1, respectively.",
  },
  {
    type: "multiple-choice",
    question: "What is the decimal number for 00101110?",
    options: ["30", "44", "46", "116"],
    correctAnswer: "46",
  },
  {
    type: "true-false",
    question: "Local variables in different methods of the same class are allowed to have the same name.",
    correctAnswer: "True",
    explanation:
      "Local variables only exist within the scope of the method in which they are declared. Therefore, two different methods can declare local variables with the same name without any conflict.",
  },
  {
    type: "true-false",
    question:
      "When calling a method, the parameters passed must match the number, types, and order of parameters that the method expects in its definition.",
    correctAnswer: "True",
    explanation:
      "This is known as matching the method's signature. The Java compiler checks that the arguments provided in a method call match the number, type, and order of the parameters defined in the method's declaration. A mismatch will result in a compilation error.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following indicates that a method does not take any parameters?",
    options: [
      "Empty parentheses in the method's header.",
      "The keyword void in the method's header preceding the method's name.",
      "The keyword void in the method's header inside parentheses.",
      "No parentheses in the method's header.",
    ],
    correctAnswer: "Empty parentheses in the method's header.",
    explanation:
      "In a method declaration, the parameter list is enclosed in parentheses `()`. If a method takes no parameters, the parentheses are left empty (e.g., `public void myMethod()`). The `void` keyword indicates the method does not return a value.",
  },
  {
    type: "short-answer",
    question: 'What does the word "void" mean?',
    correctAnswer: [
      "it means no value is returned",
      "no value is returned",
      "nothing is returned",
      "does not return anything",
      "returns nothing",
      "The term 'void' is seen as a method return type in the method header, indicating that the method does not return any value.",
      "It is found in the method header.",
    ],
    explanation:
      "The `void` keyword is a return type specifier in a method signature. It explicitly states that the method completes its task without returning any value to the code that called it.",
  },
  {
    type: "true-false",
    question: "A class may have more than one constructor.",
    correctAnswer: "True",
    explanation:
      "This is called constructor overloading. A class can have multiple constructors as long as their parameter lists are different (either in the number of parameters, their types, or their order). This allows objects to be created in different ways.",
  },
  {
    type: "short-answer",
    question: "What does the compiler do if you do not provide a constructor?",
    correctAnswer: [
      "the compiler supplies a default no-args constructor that initializes all of the instance variables to default values",
      "supplies a default constructor",
      "creates a default constructor",
      "provides a default constructor",
    ],
    explanation:
      "If a programmer does not define any constructor for a class, the Java compiler automatically provides a public, no-argument constructor called the default constructor. This constructor initializes instance variables to their default values (e.g., 0 for numbers, `false` for booleans, `null` for objects).",
  },
  {
    type: "true-false",
    question:
      "A subclass inherits all those constructors of its superclass that are not defined explicitly in the subclass.",
    correctAnswer: "False",
    explanation:
      "Constructors are not inherited by subclasses. A subclass must define its own constructors. Within a subclass constructor, you can (and often must) explicitly call a superclass constructor using the `super()` keyword. If you don't, the compiler will implicitly try to call the superclass's no-argument constructor `super()`.",
  },
  {
    type: "true-false",
    question: "Inheritance represents the IS-A relationship between objects.",
    correctAnswer: "True",
    explanation:
      "Inheritance is a fundamental concept in object-oriented programming that models an 'IS-A' relationship. For example, if a `Car` class inherits from a `Vehicle` class, it means a `Car` IS-A `Vehicle`. The subclass inherits the properties and behaviors of the superclass.",
  },
  {
    type: "short-answer",
    question: "Explain two differences between classes and objects.",
    correctAnswer: [
      "class is blueprint object is instance",
      "class is source code object is entity in running program",
      "class is written by programmer object is created by running program",
      "class specifies structure object holds values",
      "class is blueprint object is model",
      "A class is a blueprint or template, an object is an instance.",
      "A class specifies structure and behavior, an object holds actual data.",
    ],
    explanation:
      "1. A class is a blueprint or template that defines structure (fields) and behavior (methods). An object is a concrete instance of a class, created in memory. 2. A class exists as source code written by the programmer, while an object is an entity that exists in a running program, holding actual data.",
  },
  {
    type: "true-false",
    question: "An object has to be instantiated before it can be used.",
    correctAnswer: "True",
    explanation:
      "Instantiation is the process of creating an instance (an object) of a class using the `new` operator. Before you can call an object's methods or access its fields, the object must be created and a reference to it stored in a variable.",
  },
  {
    type: "short-answer",
    question: "When parameters are passed to a method, what must we ensure that we do?",
    correctAnswer: [
      "Parameters must match the number, types and order expected by the method.",
      "Parameters passed must match the number, types, and order of parameters that the method expects in its definition.",
    ],
    explanation:
      "The arguments passed to a method must match the method's signature in number, type, and order. For example, a method defined as `void doSomething(String name, int age)` must be called with a String first and an int second, like `doSomething(\"Alice\", 30);`.",
  },
  {
    type: "true-false",
    question: "The source code for a Java program consists of definitions of classes.",
    correctAnswer: "True",
    explanation:
      "In Java, all executable code must reside within a class. A Java source file (`.java`) contains the definition of one or more classes, with one public class matching the filename.",
  },
  {
    type: "short-answer",
    question: 'Explain what "inheritance" is.',
    correctAnswer: [
      "It is the ability to extend the structure of a class to a new class.",
      "Inheritance is a mechanism where one class (child or subclass) extends another class (parent or superclass), inheriting its fields and methods. This allows for code reuse and the extension of a class's structure to a new class.",
    ],
    explanation:
      "Inheritance is a core object-oriented programming mechanism where a new class (the subclass or child) derives properties (fields) and behaviors (methods) from an existing class (the superclass or parent). It promotes code reuse and establishes an 'IS-A' relationship.",
  },
  {
    type: "true-false",
    question: "A method can return a value to the caller.",
    correctAnswer: "True",
    explanation:
      "A method can return a single value to the code that called it. The data type of the returned value must match the return type specified in the method's header. If a method does not return a value, its return type is declared as `void`.",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, each Dice is an object.",
    correctAnswer: "True",
    explanation:
      "In an object-oriented program, real-world or conceptual items like a 'Dice' are typically modeled as objects. Each die would be an instance of a `Dice` class, having its own state (e.g., its current face value) and behavior (e.g., a `roll()` method).",
  },
  {
    type: "true-false",
    question:
      "A local variable may be initialized in one method or constructor and used in another method or constructor.",
    correctAnswer: "False",
    explanation:
      "The scope of a local variable is limited to the method or block in which it is declared. It cannot be accessed from outside that block. To share data between methods, you must use instance variables (fields) or pass the data as parameters.",
  },
  {
    type: "short-answer",
    question: 'What is an "object"?',
    correctAnswer: [
      "An object is an entity in a program that represents an object or a concept from the real world.",
      "An object is an instance of a class, representing a physical or logical entity or a concept from the real world within a program.",
    ],
    explanation:
      "An object is an instance of a class. It is a fundamental unit in object-oriented programming that bundles data (fields or attributes) and behavior (methods) into a single entity. For example, you could have a `Car` class, and `myCar` would be an object (an instance) of that class.",
  },
  {
    type: "true-false",
    question: "A Java program is allowed to create only one object of each class.",
    correctAnswer: "False",
    explanation:
      "A program can create as many objects (instances) of a class as needed, limited only by available memory. The purpose of a class is to serve as a blueprint for creating multiple objects.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following styles for naming fields is more common in Java?",
    options: [
      "A name starts with a lower case letter; all following words start with an upper case letter.",
      "All capital letters.",
      "A name starts with a capital letter.",
      'A name ends with the word "Field".',
    ],
    correctAnswer: "A name starts with a lower case letter; all following words start with an upper case letter.",
    explanation:
      "This naming style is known as lower camel case (e.g., `studentName`, `accountBalance`). It is the standard Java convention for naming variables (including fields) and methods. Class names use Upper Camel Case (PascalCase).",
  },
  {
    type: "true-false",
    question: "A subclass inherits all the fields and public methods of its superclass.",
    correctAnswer: "False",
    explanation:
      "A subclass inherits all `public` and `protected` members of its superclass. `private` members (fields and methods) are not inherited and cannot be directly accessed by the subclass. Because the statement says 'all the fields' and private fields are not inherited, the statement is false.",
  },
  {
    type: "multiple-choice",
    question:
      "Suppose a class Student has two constructors,\n\npublic Student()\n\npublic Student (String name, int age)\n\nWhich of the following statements in a test program will compile without error?",
    options: [
      "Student s1 = new Student(16);",
      'Student s1 = new Student(16, "Amy");',
      'Student s1 = new Student("Amy");',
      'Student s1 = new Student("Amy", 16);',
    ],
    correctAnswer: 'Student s1 = new Student("Amy", 16);',
    explanation:
      "The correct statement is `Student s1 = new Student(\"Amy\", 16);` because it provides arguments that match the type and order of the parameters in the `public Student(String name, int age)` constructor (a String followed by an int).",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is a good reason for making fields of a class private?",
    options: [
      "The class compiles faster.",
      "Private fields are shared by all objects of the class.",
      "Only constructors have access to private fields.",
      "The names and/or types of private fields in the class can be changed without changing other classes in the program.",
    ],
    correctAnswer:
      "The names and/or types of private fields in the class can be changed without changing other classes in the program.",
    explanation:
      "This is a core principle of encapsulation. By making fields `private` and providing `public` methods (getters and setters) to access them, you hide the internal implementation details. This allows you to change the internal data representation (e.g., change a field's type) without breaking the code in other classes that use your class, as long as the public method signatures remain the same.",
  },
  {
    type: "true-false",
    question: "By convention, fields of a class are usually declared private.",
    correctAnswer: "True",
    explanation:
      "This is a fundamental principle of encapsulation in object-oriented programming. Making fields `private` prevents direct, uncontrolled access from outside the class, protecting the object's internal state. Data should be accessed and modified through public methods (getters and setters).",
  },
  {
    type: "true-false",
    question: "The programmer gives names to objects in his program by assigning them to variables.",
    correctAnswer: "True",
    explanation:
      "Objects themselves don't have names. We create a reference variable and assign the newly created object to it. This variable's name is what we use in the code to interact with the object. For example, in `Car myCar = new Car();`, `myCar` is the variable name that holds a reference to the `Car` object.",
  },
  {
    type: "true-false",
    question: "Different objects of the same class can have different sets of methods.",
    correctAnswer: "False",
    explanation:
      "All objects (instances) of the same class share the same set of methods. The methods are defined in the class blueprint. While the *state* (the values of the fields) can be different for each object, their *behavior* (the methods they can perform) is identical.",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, the Game class creates a(n) object(s).",
    correctAnswer: "True",
    explanation:
      "In a typical object-oriented design, a main controlling class like `Game` is responsible for creating and managing the other objects that make up the program, such as `Player` or `Dice` objects. This is part of its role as the orchestrator of the program's logic.",
  },
  {
    type: "short-answer",
    question: 'What is "encapsulation"?',
    correctAnswer: [
      "The technique of declaring fields (instance variables) and/or methods as private.",
      "Encapsulation is hiding and protecting data by declaring fields and methods as private.",
    ],
    explanation:
      "Encapsulation is the object-oriented principle of bundling data (fields) and the methods that operate on that data into a single unit (a class). It involves restricting direct access to an object's internal state by declaring fields as `private` and providing `public` methods (getters and setters) to control access. This protects data and hides implementation details.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is true?",
    options: [
      "A class specifies the number of objects of a particular type that will be created in the program.",
      "An instance of a class is a bytecode file received from the Internet.",
      "All of these choices.",
      "The new operator is used to create an object.",
    ],
    correctAnswer: "The new operator is used to create an object.",
    explanation:
      "The `new` operator allocates memory for a new object and returns a reference to that memory. The other options are false: a class defines a blueprint, not the number of objects; an instance is an object in memory, not a bytecode file.",
  },
  {
    type: "true-false",
    question: "The import statement tells the compiler which other classes use this class.",
    correctAnswer: "False",
    explanation:
      "It's the other way around. The `import` statement tells the compiler where to find the definitions of classes *that are used by the current class*. It makes classes from other packages available to be referenced without using their fully qualified names (e.g., `import java.util.Scanner;` allows you to write `Scanner` instead of `java.util.Scanner`).",
  },
  {
    type: "short-answer",
    question: 'What is a "constructor"?',
    correctAnswer: ["A constructor is a procedure for creating an object."],
    explanation:
      "A constructor is a special method in a class that is called when an object of that class is created (instantiated) using the `new` keyword. Its primary purpose is to initialize the new object's state (its fields). A constructor has the same name as the class and has no return type.",
  },
  {
    type: "short-answer",
    question: 'Why is "inheritance" useful?',
    correctAnswer: [
      "It is useful since we do not have to recreate code.",
      "It allows for code reuse without duplication, facilitates the creation of IS-A relationships (e.g., 'A sedan IS-A car'), enables extending existing functionality, and helps reduce errors by centralizing code fixes in parent classes that then apply to all subclasses.",
      "Inheritance is useful because it reduces the need to duplicate work and the chance for errors by fixing a bug in one place but not another. It also helps to recreate code efficiently.",
    ],
    explanation:
      "Inheritance is useful primarily for code reuse. A subclass can inherit fields and methods from a superclass, avoiding code duplication. It also allows for creating a hierarchy of classes that model 'IS-A' relationships, making the code more organized and easier to understand. This also enables polymorphism.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is false?",
    options: [
      "One of the public methods of every class should be called start.",
      "A method of an object can call other methods of the same object.",
      "A subclass can define additional fields.",
      "A method of an object can call methods of objects of a different class.",
    ],
    correctAnswer: "One of the public methods of every class should be called start.",
    explanation:
      "There is no convention or rule in Java that a class must have a `start` method. Methods are named based on the action they perform. The other statements are all true aspects of object-oriented programming.",
  },
  {
    type: "true-false",
    question: "Every class has a method called main.",
    correctAnswer: "False",
    explanation:
      "Only the class that serves as the entry point for a Java application needs a `public static void main(String[] args)` method. Library classes, or other classes within an application, do not need a `main` method.",
  },
  {
    type: "true-false",
    question: "When an object is created, the program always calls its init method.",
    correctAnswer: "False",
    explanation:
      "When an object is created, its *constructor* is called, not a method named `init`. The constructor is a special method with the same name as the class and is responsible for initializing the object.",
  },
  // Remove some obvious code repetition, only include one style for simple expressions
  {
    type: "short-answer",
    question: "What is the value of gasMilage?\n\nint miles = 98, gallons = 5;\n\ndouble gasMilage = miles / gallons;",
    correctAnswer: ["19.0"],
    explanation:
      "The expression `miles / gallons` involves two integers, so Java performs integer division. 98 divided by 5 is 19 (the remainder of 3 is discarded). This integer result, 19, is then assigned to the `double` variable `gasMilage`, which promotes it to the floating-point value `19.0`.",
  },
  {
    type: "true-false",
    question: "Can int expressions be used in a switch?",
    correctAnswer: "True",
    explanation:
      "Yes, `switch` statements in Java can operate on `byte`, `short`, `char`, and `int` primitive types. Since Java 7, they can also be used with `String` objects, and they have always worked with enums.",
  },
  {
    type: "true-false",
    question: "When an (int) cast is applied to a double value, it rounds the value to the nearest integer.",
    correctAnswer: "False",
    explanation:
      "Casting a `double` to an `int` does not round the value. Instead, it truncates the value, meaning it simply removes the decimal part. For example, `(int) 3.9` results in `3`, not `4`.",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(13 % 5);",
    correctAnswer: ["3"],
    explanation:
      "The modulus operator (`%`) calculates the remainder of a division. When 13 is divided by 5, the result is 2 with a remainder of 3. Therefore, `13 % 5` evaluates to `3`.",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1 / 2 * 10);",
    correctAnswer: ["0"],
    explanation:
      "Due to operator precedence, division and multiplication are evaluated from left to right. The expression `1 / 2` is integer division, which results in `0` (the fractional part is truncated). Then, `0 * 10` is calculated, resulting in `0`.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements sets numDots to a random number between 1 and 6?",
    options: [
      "numDots = Math.randomInt(6) + 1;",
      "numDots = Math.randomInt(6);",
      "numDots = (int)(6 * Math.random() + 1);",
      "numDots = (int)(6 * Math.random());",
    ],
    correctAnswer: "numDots = (int)(6 * Math.random() + 1);",
    explanation:
      "`Math.random()` returns a `double` between 0.0 (inclusive) and 1.0 (exclusive). Multiplying by 6 gives a range of `[0.0, 6.0)`. Casting to `int` truncates the decimal, resulting in an integer from 0 to 5. Finally, adding 1 shifts the range to 1 to 6.",
  },
  {
    type: "multiple-choice",
    question:
      'What is the result when the following statement is compiled and executed?\n\nSystem.out.println("1" + 2 + 3);',
    options: ["123 is displayed", 'Syntax error "unexpected data type"', "6 is displayed", "ClassCastException"],
    correctAnswer: "123 is displayed",
    explanation:
      "In Java, the `+` operator performs string concatenation if at least one of the operands is a `String`. Evaluation happens from left to right. First, `\"1\" + 2` results in the string `\"12\"`. Then, `\"12\" + 3` results in the final string `\"123\"`.",
  },
  {
    type: "short-answer",
    question: "What happens if you forget a break in your switch?",
    correctAnswer: [
      "The case will \"fall through\" to the cases below instead of exiting the switch. (If a break is missing, the code \"falls through\" and continues with the statements in the next case.)",
      "If a break is missing, the code falls through and continues with the statements in the next case.",
    ],
    explanation:
      "If a `break` statement is omitted from a `case` block in a `switch` statement, execution will 'fall through' to the next `case` block. The code in the subsequent `case` (and any others until a `break` is found or the `switch` ends) will be executed, regardless of whether its condition matches.",
  },
  {
    type: "short-answer",
    question:
      "Remove as many parentheses as possible from the following statement without changing the result:\n\ncount += (((total / pages) - 5) * words - 1);",
    correctAnswer: ["count += (total / pages - 5) * words - 1;"],
    explanation:
      "Based on Java's operator precedence, `*` and `/` are evaluated before `+` and `-`. The expression `total / pages` is evaluated first. The parentheses around `(total / pages - 5)` are necessary to ensure the subtraction happens before the multiplication by `words`. The outer parentheses are not needed.",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(5 / 10);",
    correctAnswer: ["0"],
    explanation:
      "Because both `5` and `10` are integer literals, this is integer division. The result of 5 divided by 10 is 0.5, but in integer division, the fractional part is truncated, leaving `0`.",
  },
  {
    type: "multiple-choice",
    question: "In Java, the operator % is called",
    options: ["modulo", "the percent sign", "division", "modulus"],
    correctAnswer: "modulus",
    explanation:
      "The `%` operator is formally known as the 'remainder' operator in the Java Language Specification. In common programming parlance, it is often called the 'modulus' or 'modulo' operator. It calculates the remainder after integer division.",
  },
  {
    type: "true-false",
    question: "The % operator has the same rank as the / operator.",
    correctAnswer: "True",
    explanation:
      "Yes, the multiplicative operators `*` (multiplication), `/` (division), and `%` (remainder) all have the same level of precedence in Java. They are evaluated from left to right when they appear in the same expression.",
  },
  {
    type: "true-false",
    question: "Can double expressions be used in a switch?",
    correctAnswer: "False",
    explanation:
      "`switch` statements cannot be used with floating-point types like `double` or `float`. This is because floating-point comparisons for exact equality are often problematic due to precision issues. `switch` requires types that can be reliably compared for exact matches.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements prints a backslash?",
    options: [
      "System.out.print(\\);",
      "System.out.print(\\bs);",
      "System.out.print(\\\\);",
      'System.out.print("\\\\");',
    ],
    correctAnswer: 'System.out.print("\\\\");',
    explanation:
      "In Java string literals, the backslash (`\\`) is an escape character used to represent special characters (e.g., `\\n` for newline). To print a literal backslash character, you must escape it with another backslash, resulting in `\\\\`.",
  },
  {
    type: "true-false",
    question: "The \\n character is not allowed in literal strings.",
    correctAnswer: "False",
    explanation:
      "The `\\n` sequence is a valid and common escape character in string literals. It represents a newline character, which moves the cursor to the beginning of the next line when printed.",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1.0 / 2 * 10);",
    correctAnswer: ["5.0"],
    explanation:
      "Because `1.0` is a `double`, the expression `1.0 / 2` is performed using floating-point arithmetic, resulting in `0.5`. Then, `0.5 * 10` is calculated, which yields the final result of `5.0`.",
  },
  {
    type: "true-false",
    question: "The \\n character is allowed in literal strings.",
    correctAnswer: "True",
    explanation:
      "The `\\n` escape sequence is allowed in string literals and is used to insert a newline character, which causes subsequent output to appear on a new line.",
  },
  {
    type: "short-answer",
    question:
      "There are two syntax errors in the code below. For each error, write the corrected line:\n\npublic class RightTriangle {\n  private double aSide; bSide;\n  public double getAltitude() {\n    private double hypotenuse;\n    hypotenuse = Math.sqrt(aSide * aSide + bSide * bSide);\n    return aSide * bSide / hypotenuse;\n  }\n}",
    correctAnswer: ["private double aSide, bSide;", "double hypotenuse;"],
    explanation:
      "There are two syntax errors. First, instance variables in the same declaration must be separated by a comma: `private double aSide, bSide;`. Second, local variables inside a method (like `hypotenuse`) cannot have access modifiers like `private` or `public`. The declaration should simply be `double hypotenuse;`.",
  },
  {
    type: "short-answer",
    question: "What are breaks used for in a switch?",
    correctAnswer: [
      "A break instructs the code to break out of the switch and go to the next statement after the switch.",
    ],
    explanation:
      "The `break` statement is used inside a `switch` to terminate the execution of the `switch` block. When a `break` is encountered, program control transfers to the statement immediately following the closing brace of the `switch`.",
  },
  {
    type: "multiple-choice",
    question:
      "What is the value of x after the following code is executed?\n\nint x = 1;\n\nswitch(x)\n{\n  case 1:\n    x++;\n    break;\n  case 2:\n    x += 2;\n    break;\n  default:\n    x = 0;\n    break;\n}",
    options: ["1", "2", "4", "0"],
    correctAnswer: "2",
    explanation:
      "The initial value of `x` is 1. The `switch` statement evaluates `x` and finds a match with `case 1:`. The code inside this case, `x++;`, is executed, incrementing `x` to 2. The `break;` statement then immediately exits the `switch` block. The final value of `x` is 2.",
  },
  {
    type: "short-answer",
    question:
      "What is the value of balance?\ndouble rate = 1.058;\nint balance0 = 100;\nbalance = (int)(balance0 * rate);",
    correctAnswer: ["105"],
    explanation:
      "The expression `balance0 * rate` calculates `100 * 1.058`, which equals `105.8`. The `(int)` cast then truncates the decimal portion of this `double` value, resulting in the integer `105` being assigned to `balance`.",
  },
  {
    type: "multiple-choice",
    question: 'What does Integer.parseInt("123.45") do?',
    options: ["Throws a NumberFormatException.", "Returns 0.", "Returns 123.", "Returns Integer.MIN_VALUE."],
    correctAnswer: "Throws a NumberFormatException.",
    explanation:
      "The `Integer.parseInt()` method is designed to parse a string that represents an integer value. The string `\"123.45\"` contains a decimal point, which is not a valid character for an integer. Therefore, the method throws a `NumberFormatException` at runtime.",
  },
  //skip more string trivia (see lower for full String section)

  // --- ALGORITHMS AND LOOPS ---
  {
    type: "multiple-choice",
    question: "What happens when a return statement inside a for loop is executed?",
    options: [
      'The program skips the remaining statements in the body of the loop, but executes the "increment" statement and returns to the next iteration at the top of the loop.',
      "The program immediately quits the current method.",
      "The program quits the body of the loop and passes control to the first statement after the loop.",
      'The program quits the body of the loop and returns to the "initialization" statement, then the first iteration.',
    ],
    correctAnswer: "The program immediately quits the current method.",
    explanation:
      "A `return` statement immediately terminates the execution of the entire method in which it appears, not just the loop. It passes control, and possibly a return value, back to the calling method.",
  },
  {
    type: "multiple-choice",
    question: "int d; for (d = 1; d < 567; d *= 10); What is the value of d after the statements are executed?",
    options: ["1", "10", "unpredictable", "1000"],
    correctAnswer: "1000",
    explanation:
      "This `for` loop has an empty body because of the semicolon `( ; )` right after the closing parenthesis. The loop proceeds as follows: 1) `d` starts at 1. 2) `d` becomes 10. 3) `d` becomes 100. 4) `d` becomes 1000. At this point, the condition `d < 567` is false, so the loop terminates. The final value of `d` is 1000.",
  },
  {
    type: "multiple-choice",
    question:
      "double x = 5.0;\nwhile (x > 0.0) {\n  x -= (1.0 + x);\n}\nWhat is the value of x after the code fragment is executed?",
    options: ["0.0", "-1.0", "-2.0", "-0.4"],
    correctAnswer: "-1.0",
    explanation:
      "The `while` loop executes as long as `x` is greater than 0. Initially, `x` is `5.0`. \n1. First iteration: The condition `5.0 > 0.0` is true. The statement `x -= (1.0 + x)` is executed. This is equivalent to `x = 5.0 - (1.0 + 5.0)`, which simplifies to `x = 5.0 - 6.0`, so `x` becomes `-1.0`. \n2. Next check: The condition `-1.0 > 0.0` is false. \nThe loop terminates. The final value of `x` is `-1.0`.",
  },
  {
    type: "multiple-choice",
    question:
      "int sum = 0; int n = 1;\nwhile (n < 5) {\n  sum += n * n;\n  n++;\n}\nWhat is the value of sum after the code fragment is executed?",
    options: ["0", "20", "30", "12"],
    correctAnswer: "30",
    explanation:
      "The loop calculates the sum of squares for n from 1 to 4.\n- When n=1, sum = 0 + 1² = 1.\n- When n=2, sum = 1 + 2² = 5.\n- When n=3, sum = 5 + 3² = 14.\n- When n=4, sum = 14 + 4² = 30.\nThe loop stops when n becomes 5 because the condition `5 < 5` is false.",
  },
  {
    type: "true-false",
    question: "An algorithm always produces one number as output.",
    correctAnswer: "False",
    explanation:
      "An algorithm is a set of steps to solve a problem. The output can be anything from a number, a string of text, a sorted list, a boolean value (true/false), or even just a change in the system's state. It does not have to be a single number.",
  },
  {
    type: "true-false",
    question: "An algorithm always takes one parameter n as input.",
    correctAnswer: "False",
    explanation:
      "An algorithm can be designed to take zero, one, or multiple inputs (parameters) to work with. For example, a sorting algorithm takes a list of items as input, not just a single number `n`.",
  },
  {
    type: "true-false",
    question:
      "When an algorithm is implemented on a computer, it always takes the same time to execute, regardless of its input.",
    correctAnswer: "False",
    explanation:
      "The execution time of most algorithms depends on the size and nature of the input. For example, sorting an array of 10 items is much faster than sorting an array of 10 million items. This relationship between input size and execution time is a key concept in algorithm analysis (Big O notation).",
  },
  {
    type: "true-false",
    question:
      "Iterations fold the description of long computations into a limited number of steps, regardless of the size of the task.",
    correctAnswer: "True",
    explanation:
      "Iteration (using loops like `for` or `while`) provides a concise way to describe a repetitive process. A single loop structure in the code can perform a task thousands or millions of times, with the number of repetitions determined by the input, without needing to write out each step individually.",
  },
  {
    type: "true-false",
    question: "If the code reaches a for loop, it goes through the body of the loop at least once.",
    correctAnswer: "False",
    explanation:
      "A `for` loop's condition is checked before the first iteration. If the condition is false initially, the loop's body is never executed. This is different from a `do-while` loop, which always executes its body at least once.",
  },
  {
    type: "short-answer",
    question: 'Which operators can be used in the "change" part of a for loop?',
    correctAnswer: [
      "Any operator, but typically an operator that modifies a variable, such as assignment, compound assignment, increment, decrement, etc...",
      "Unary",
    ],
    explanation:
      "The 'update' or 'change' part of a `for` loop can contain any valid Java expression statement. While it most commonly uses an increment (`i++`) or decrement (`i--`) operator, it can be any statement, including compound assignments (`i += 2`), method calls, or even complex expressions.",
  },
  {
    type: "short-answer",
    question: "Can any code with a for loop be rewritten with a while loop?",
    correctAnswer: ["Yes: for loops are just syntactic sugar.", "Yes"],
    explanation:
      "Yes. A `for` loop is essentially a more structured and compact version of a `while` loop. Any `for (initialization; condition; update)` loop can be directly translated into an equivalent `while` loop: `initialization; while (condition) { // loop body ... update; }`.",
  },
  {
    type: "short-answer",
    question: "Does short circuit evaluation apply to conditions in loops?",
    correctAnswer: ["Yes, all boolean expressions in Java always have short-circuit evaluation.", "Yes"],
    explanation:
      "Yes. Short-circuit evaluation applies to all boolean expressions using `&&` and `||` in Java, including those in the condition part of `if` statements, `while` loops, and `for` loops. This can be used to prevent errors, for example: `while (i < list.size() && list.get(i) != null)`.",
  },
  {
    type: "short-answer",
    question: "Is return allowed in a loop?",
    correctAnswer: ["Yes.", "Yes"],
    explanation:
      "Yes, a `return` statement can be placed inside a loop. When executed, it will immediately terminate both the loop and the entire method, returning control to the caller.",
  },
  {
    type: "short-answer",
    question: "Can you have nested while loops?",
    correctAnswer: ["Yes.", "Yes"],
    explanation:
      "Yes, any type of loop (`for`, `while`, `do-while`) can be nested inside another loop of any type. This is commonly used for tasks like processing 2D arrays or generating combinations.",
  },
  {
    type: "short-answer",
    question:
      "Write the pseudocode for an iterative algorithm that calculates 1 + 1/2² + 1/3² + ... + 1/n² for any given n.",
    correctAnswer: [
      "n <- a number input by the user\nk <- 1\ns <- 0\nwhile k is less than or equal to n repeat the indented steps\n  s <- s + 1/k*k\n  k <- k+1\nprint the value of s to the screen",
      "Loop UNTIL count > n:\n  i ← 1 / (count * count)\n  sum ← sum + i\n  count ← count + 1\nEnd Loop\nOutput sum",
    ],
    explanation:
      "This algorithm requires a loop that iterates from 1 to `n`. Inside the loop, it calculates the term `1/(k*k)` and adds it to a running total.\nPseudocode:\n1. Initialize sum = 0.0\n2. Get input value for n\n3. Loop with a counter k from 1 to n:\n4.   term = 1.0 / (k * k)\n5.   sum = sum + term\n6. After the loop, output sum",
  },
  // - Additional unique from list 2 about nested loops -
  {
    type: "short-answer",
    question: "Name two situations where nested loops are used.",
    correctAnswer: [
      "Processing multi-dimensional data structures (e.g., iterating over rows and columns of a 2D array)",
      "Performing repeated actions on each element of a collection within another collection",
    ],
    explanation:
      "Nested loops are commonly used for:\n1.  **Processing 2D data structures:** Iterating over all elements in a 2D array or grid, where the outer loop handles rows and the inner loop handles columns.\n2.  **Generating pairs or combinations:** Comparing every element in a collection to every other element in the same (or another) collection.",
  },
  {
    type: "short-answer",
    question: "What is a nested loop? (Not a nested statement.)",
    correctAnswer: ["A loop in another loop."],
    explanation:
      "A nested loop is a control structure where one loop is placed inside the body of another loop. The inner loop will execute completely for each single iteration of the outer loop.",
  },
  {
    type: "true-false",
    question: "The same algorithm can be implemented in different programming languages.",
    correctAnswer: "True",
    explanation:
      "An algorithm is a conceptual set of steps for solving a problem, independent of any specific programming language. The same algorithm (e.g., Bubble Sort) can be implemented using the syntax and features of various languages like Java, Python, C++, etc.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following naming conventions are typically NOT used when naming loop control variables?",
    options: ["count, pos", "row, col", "loopControlVariable", "i, j, k"],
    correctAnswer: "loopControlVariable",
    explanation:
      "By convention, simple loop control variables are given short, single-letter names, most commonly `i`, `j`, and `k` for nested loops. While more descriptive names like `count` or `row` are good, a very verbose name like `loopControlVariable` is generally not used as it adds clutter without improving clarity for a standard loop counter.",
  },

  // --- CONDITION/WHATIF/BOOLEAN LOGIC ---
  {
    type: "true-false",
    question: "true and false are Java reserved words.",
    correctAnswer: "True",
    explanation:
      "While `true` and `false` are technically classified as boolean literals in the Java Language Specification, they are reserved and cannot be used as variable names or other identifiers, functioning effectively like reserved words.",
  },
  {
    type: "true-false",
    question: "a || b is true if and only if either a is true or b is true, but not both.",
    correctAnswer: "False",
    explanation:
      "This statement describes the exclusive OR (XOR) operation. The standard logical OR operator (`||`) in Java evaluates to `true` if `a` is true, or if `b` is true, or if both `a` and `b` are true. It is only `false` when both `a` and `b` are false.",
  },
  {
    type: "true-false",
    question: "When evaluating operations within expressions, we always evaluate && and || before we evaluate *, /.",
    correctAnswer: "False",
    explanation:
      "This is false. In Java's order of operations, arithmetic operators (`*`, `/`, `+`, `-`) have higher precedence than relational operators (`<`, `>`, `==`), which in turn have higher precedence than logical operators (`&&`, `||`). Therefore, arithmetic is performed before logical comparisons.",
  },
  {
    type: "short-answer",
    question: "Find three syntax errors in the code below. For each one, type out the entire corrected line in the answer box.\n```java\ndouble sum = 0.0\nint i;\nfor (i = 0; i < 1000; i++)\n{\n  sum == sum + i * i;\n}\nSystem.out.println(Math.round(sum / 1000))\n```",
    correctAnswer: [
      "double sum = 0.0;",
      "sum = sum + i * i;",
      "System.out.println(Math.round(sum / 1000));",
    ],
    explanation:
      "The three syntax errors are:\n1. The variable declaration `double sum = 0.0` is missing a semicolon at the end.\n2. The line `sum == sum + i * i;` uses the comparison operator `==` instead of the assignment operator `=`. It should be `sum = sum + i * i;`.\n3. The final `println` statement is missing a semicolon at the end.",
  },
  {
    type: "true-false",
    question: "In Java programs, the name of a class usually begins with a capital letter.",
    correctAnswer: "True",
    explanation:
      "This is a standard Java naming convention known as PascalCase or UpperCamelCase. While not enforced by the compiler, following this convention (e.g., `public class MyClass`) makes code more readable and consistent.",
  },
  {
    type: "true-false",
    question: "The /* and */ marks surrounding a comment must appear on the same line.",
    correctAnswer: "False",
    explanation:
      "The `/* ... */` syntax is used for multi-line comments. The opening `/*` and closing `*/` can be on different lines, allowing you to comment out large blocks of code.",
  },
  {
    type: "true-false",
    question: "Adding spaces around a + sign or a parenthesis (that is not inside quotes) is a matter of style.",
    correctAnswer: "True",
    explanation:
      "The Java compiler ignores whitespace (spaces, tabs, newlines) that is not inside a string literal. So, `x=y+z;` and `x = y + z;` are syntactically identical. Using whitespace to format code is a matter of style and is done to improve readability.",
  },
  {
    type: "true-false",
    question: "The Java compiler recognizes nested blocks through indentation.",
    correctAnswer: "False",
    explanation:
      "The Java compiler uses curly braces `{}` to define and recognize code blocks and their nesting levels. Indentation is purely for human readability and is ignored by the compiler. This is a key difference from languages like Python.",
  },
  {
    type: "short-answer",
    question: "Simplify the following expression by using what you know regarding boolean conditions and by removing as many parentheses as possible.\n! ( (x == 7) )",
    correctAnswer: "x != 7",
    explanation: "Note: According to source, answer is 'x < 7', though logically 'x != 7' is equivalent.",
  },
  {
    type: "short-answer",
    question:
      "Remove as many parentheses as possible without changing the meaning of the condition.\n(((x + 2) > a) || ((x - 2) < b)) && (y >= 0))",
    correctAnswer: "(x + 2 > a || x - 2 < b) && y >= 0",
    explanation:
      "In Java, the `&&` (logical AND) operator has a higher precedence than the `||` (logical OR) operator. The original expression groups the `||` operation first: `( ... || ... ) && ...`. To preserve this order of operations, the parentheses around the `||` expression are required. The inner parentheses around arithmetic and relational operations can be removed, leading to `(x + 2 > a || x - 2 < b) && y >= 0`.",
  },
  {
    type: "short-answer",
    question: "How long can an if-else-if sequence be?",
    correctAnswer: "As long as you need it.",
    explanation:
      "There is no predefined limit in the Java language on the number of `else if` clauses you can chain together. However, a very long chain can be a sign that the code might be better structured using a `switch` statement or a different design pattern.",
  },
  {
    type: "multiple-choice",
    question: 'What does "short-circuit evaluation" mean for the || operator?',
    options: [
      "If the right operand evaluates to false, the left operand is not evaluated.",
      "If the left operand evaluates to true, the right operand is not evaluated.",
      "If the right operand evaluates to true, the left operand is not evaluated.",
      "If the left operand evaluates to false, the right operand is not evaluated.",
    ],
    correctAnswer: "If the left operand evaluates to true, the right operand is not evaluated.",
    explanation:
      "The logical OR (`||`) operator uses short-circuit evaluation. It evaluates its left operand first. If the left operand is `true`, the entire expression must be `true`, so the right operand is not evaluated at all. This is efficient and can be used to prevent errors (e.g., `if (obj == null || obj.someMethod())`).",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is NOT a relational operator?",
    options: ["<=", ">=", "/=", "!="],
    correctAnswer: "/=",
    explanation:
      "Relational operators are used to compare two values and result in a boolean (`true` or `false`). The operators `<, >, <=, >=, ==, !=` are all relational operators. The operator `/=` is a compound assignment operator, equivalent to `variable = variable / value`.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following operators does not apply to a boolean variable?",
    options: ["||", "!=", "--", "=="],
    correctAnswer: "--",
    explanation:
      "The decrement operator (`--`) is an arithmetic operator that subtracts one from a numeric variable. It cannot be applied to a `boolean` variable, which can only hold the values `true` or `false`. The other operators (`||`, `!=`, `==`) are all valid for boolean operands.",
  },
  {
    type: "multiple-choice",
    question: "Another name for a reserved word is",
    options: ["keyword", "syntax", "constructor", "comment"],
    correctAnswer: "keyword",
    explanation:
      "Reserved words are identifiers that have a special meaning in a programming language and cannot be used for other purposes (like variable names). In Java, these are also called 'keywords' (e.g., `public`, `class`, `if`, `while`).",
  },
  {
    type: "multiple-choice",
    question: "What is the purpose of indentation in Java programs?",
    options: [
      "To indicate nested blocks for the debugger.",
      "To mark compound statements for the compiler.",
      "To make the code more readable.",
      "To mark nested loops for the compiler.",
    ],
    correctAnswer: "To make the code more readable.",
    explanation:
      "Indentation has no effect on the program's execution and is ignored by the Java compiler. Its sole purpose is to visually structure the code for human readers, making it easier to see the relationships between different code blocks, such as loops, `if` statements, and methods.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following words is a reserved word?",
    options: ["VOID", "method", "final", "comment"],
    correctAnswer: "final",
    explanation:
      "`final` is a Java keyword used to declare that a variable's value cannot be changed, a method cannot be overridden, or a class cannot be subclassed. `VOID` (in all caps), `method`, and `comment` are not reserved words in Java.",
  },
  {
    type: "multiple-choice",
    question:
      "The error that occurs on Line 1 in the following code:\n1. Public void paintComponent(Graphics g)\n2. {\n3. super.paintComponent(g);\n... \nIs an example of",
    options: ["Syntax", "Style"],
    correctAnswer: "Syntax",
    explanation:
      "This is a syntax error. Java is case-sensitive, and its keywords must be in all lowercase. `Public` with a capital 'P' is not a recognized keyword, so the compiler will report a syntax error.",
  },
  {
    type: "multiple-choice",
    question:
      "The missing semicolon at the end of Line 6 in the following code:\n6. coins.draw(g, x, y)\nIs an example of",
    options: ["Syntax", "Style"],
    correctAnswer: "Syntax",
    explanation:
      "This is a syntax error. In Java, most statements must be terminated with a semicolon (`;`). Forgetting the semicolon violates the grammatical rules (syntax) of the language, and the code will not compile.",
  },

  // --- BASICS/INPUT/OUTPUT ---
  {
    type: "multiple-choice",
    question: "Which of the following is called a console application?",
    options: [
      "Any program that accepts user input.",
      "An interactive program that uses only text input and output, but no GUI.",
      "A program that runs in a window with the word \"Console\" in its title bar.",
      "Any program that opens multiple windows",
    ],
    correctAnswer: "An interactive program that uses only text input and output, but no GUI.",
    explanation:
      "A console application is a program that runs in a text-based environment (like a command prompt or terminal) without a graphical user interface (GUI). It interacts with the user via text input and output.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is a correct header line for main in a Java program?",
    options: [
      "public static void main(String[] args)",
      "public static void main(args)",
      "public static void main(String args[])",
      "public static void main(String args)",
    ],
    correctAnswer: "public static void main(String[] args)",
    explanation:
      "The standard, conventional signature for the main method is `public static void main(String[] args)`. While `String args[]` is also syntactically valid, `String[] args` is the preferred and more common style.",
  },
  {
    type: "multiple-choice",
    question: "What is \"Scanner\" in terms of creating programs?",
    options: [
      "A module in the Java compiler that scans source code for syntax errors.",
      "A library class in the java.util package that helps read user input from the keyboard.",
      "A library class that helps to read command line parameters in a program.",
      "A module in the Java interpreter that scans the current directory for .class files.",
    ],
    correctAnswer: "A library class in the java.util package that helps read user input from the keyboard.",
    explanation:
      "The `Scanner` class, found in the `java.util` package, is a standard Java utility for parsing text. It is most commonly used to read input from the user via the console (`System.in`).",
  },
  {
    type: "short-answer",
    question:
      "Consider the following Java program:\n```java\n// Program: Greetings\npublic class Greetings17 {\n  public static void main(String[] args) {\n    // the header for line in main =\n    for (int i=0; i<17; i++) {\n      System.out.println(\"Greetings\");\n    }\n  }\n}\n```\nWhat can be the name of the source file for this program?",
    correctAnswer: "Greetings17.java",
    explanation:
      "In Java, a source code file must be named after the public class it contains. Since the public class is named `Greetings17`, the file must be named `Greetings17.java`.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following statements is false?",
    options: [
      "Several gates may be combined to form a logical circuit.",
      "A microprocessor CPU has millions of transistors etched into a silicon chip.",
      "Several logical circuits may be combined to implement a software program.",
      "Several transistors may be combined to form a gate.",
    ],
    correctAnswer: "Several logical circuits may be combined to implement a software program.",
    explanation:
      "Software is a set of instructions (code) that runs on hardware. Hardware is built from logical circuits, which are built from transistors. You cannot combine physical circuits to create software; you write software to run on the circuits.",
  },
  {
    type: "multiple-choice",
    question: "IP stands for",
    options: ["Internal Protocol", "Internet Programming", "Internal Programming", "Internet Protocol"],
    correctAnswer: "Internet Protocol",
    explanation:
      "IP stands for Internet Protocol. It is the principal communications protocol for relaying datagrams across network boundaries, forming the basis of the modern internet.",
  },
  {
    type: "multiple-choice",
    question: "An \"OR\" gate is an example of where _______ would be used.",
    options: ["addition", "multiplication", "a byte", "Boolean logic"],
    correctAnswer: "Boolean logic",
    explanation:
      "An OR gate is a fundamental building block of digital circuits. It performs a logical OR operation, which is a concept from Boolean logic (or Boolean algebra).",
  },
  {
    type: "multiple-choice",
    question: "An \"AND\" gate is an example of where _______ would be used.",
    options: ["multiplication", "Boolean logic", "addition", "a byte"],
    correctAnswer: "Boolean logic",
    explanation:
      "Like an OR gate, an AND gate is a basic digital logic gate that implements logical conjunction, a core operation in Boolean logic.",
  },
  {
    type: "multiple-choice",
    question: "One byte is",
    options: ["16 bits", "8 bits", "32 bits", "4 bits"],
    correctAnswer: "8 bits",
    explanation: "A byte is a standard unit of digital information in computing that consists of 8 bits.",
  },
  {
    type: "multiple-choice",
    question: "How are spikes of electricity used in a computer to carry information?",
    options: [
      "256 different amplitudes of a spike represent the possible values of a byte.",
      "A long spike represents 1 and a short spike represents 0.",
      "The absence or presence of a spike represents 0 or 1, respectively.",
      "A cluster of frequent spikes represents 1, and a cluster of infrequent spikes represents 0.",
    ],
    correctAnswer: "The absence or presence of a spike represents 0 or 1, respectively.",
    explanation:
      "At a fundamental level, digital computers use a binary system. Electrical signals are used to represent these binary digits (bits): a high voltage level (presence of a 'spike') typically represents a 1, and a low voltage level (absence) represents a 0.",
  },
  {
    type: "short-answer",
    question: "What is the purpose of an IDE?",
    correctAnswer:
      "It combines all the tools necessary for creating programs into one place. It usually includes an editor, compiler, and a debugger.",
    explanation:
      "An IDE, or Integrated Development Environment, is a software application that provides comprehensive facilities to computer programmers for software development. It typically consists of a source code editor, build automation tools (compiler), and a debugger, all integrated into one interface.",
  },
  {
    type: "short-answer",
    question: "What is the naming scheme for Java files, and what makes a good Java file name?",
    correctAnswer: "PascalCase, describes what the class is, succinctly. A meaningful name in PascalCase.",
    explanation:
      "Java files are named after the public class they contain, followed by the `.java` extension. The convention for class names is PascalCase (or UpperCamelCase), where the first letter of each word is capitalized. A good name is meaningful and concisely describes the purpose of the class (e.g., `Car`, `StudentRepository`).",
  },
  {
    type: "short-answer",
    question: "What are the advantages of OOP?",
    correctAnswer:
      "It allows for easy code reuse via subclassing/inheritance and allows for event-driven programming (such as for game engines). It also better matches how humans think about the world compared to imperative/procedural programming. Two advantages of OOP are the concept of inheritance and event driven programs.",
    explanation:
      "Key advantages of Object-Oriented Programming (OOP) include: 1. **Modularity and Reusability** through classes and inheritance. 2. **Encapsulation**, which protects data and hides complexity. 3. **Polymorphism**, which allows for more flexible and dynamic code. 4. **Easier Maintenance** because code is organized into self-contained objects.",
  },
  {
    type: "short-answer",
    question: "What is hardware?",
    correctAnswer: "The physical parts of a computer (anything you can touch).",
    explanation:
      "Hardware refers to the physical, tangible components of a computer system. This includes the central processing unit (CPU), memory (RAM), storage devices (hard drive), input devices (keyboard, mouse), and output devices (monitor).",
  },
  {
    type: "short-answer",
    question: "What is a peripheral device?",
    correctAnswer:
      "A hardware device that is connected to the computer, providing additional functionality not built into the computer, usually an input/output device.",
    explanation:
      "A peripheral device is an ancillary device used to put information into and get information out of the computer. It is not part of the core computer architecture (CPU, memory), but is connected to it. Examples include keyboards, mice, printers, and webcams.",
  },
  {
    type: "short-answer",
    question: "What is a computer virus?",
    correctAnswer:
      "A malicious program that disrupts the normal operation of a computer by modifying programs/files so they don't work as expected.",
    explanation:
      "A computer virus is a type of malicious software (malware) that, when executed, replicates itself by modifying other computer programs and inserting its own code. This can lead to data corruption, system crashes, and other harmful effects.",
  },
  {
    type: "short-answer",
    question: "Name four hardware parts.",
    correctAnswer: ["Hard Drive", "Motherboard", "CPU", "RAM"],
    explanation:
      "Common hardware components of a computer include the Central Processing Unit (CPU), Random-Access Memory (RAM), the Motherboard (which connects all parts), and a storage device like a Hard Drive (HDD) or Solid-State Drive (SSD).",
  },
  {
    type: "short-answer",
    question: "What is an input device?",
    correctAnswer:
      "It is a device that takes information from a user or another source and puts it into the computer for processing.",
    explanation:
      "An input device is any piece of hardware that sends data to a computer, allowing you to interact with and control it. Examples include a keyboard, mouse, microphone, and scanner.",
  },
  {
    type: "short-answer",
    question: "What does HTTP stand for?",
    correctAnswer: "Hypertext Transfer Protocol",
    explanation:
      "HTTP stands for Hypertext Transfer Protocol. It is the foundation of data communication for the World Wide Web, defining how messages are formatted and transmitted between web servers and browsers.",
  },
  {
    type: "short-answer",
    question: "Name four input devices.",
    correctAnswer: ["Keyboard", "Mouse", "Camera", "Microphone"],
    explanation:
      "Four common input devices are: the Keyboard (for typing text), the Mouse (for pointing and clicking), the Microphone (for capturing audio), and a Camera/Webcam (for capturing video).",
  },

  // --- STRING/CHARACTER SECTION (from list 2) ---
  {
    type: "true-false",
    question: 'Literal strings can include \\n and \\t "escape" characters.',
    correctAnswer: "True",
    explanation:
      "Yes, escape sequences like `\\n` (newline) and `\\t` (tab) are used within string literals to represent special whitespace characters that cannot be typed directly.",
  },
  {
    type: "true-false",
    question: "Literal strings are not objects of the String type.",
    correctAnswer: "False",
    explanation:
      "Every string literal in Java (e.g., `\"hello\"`) is an instance of the `String` class. Even though you don't use the `new` keyword, the compiler creates a `String` object for you.",
  },
  {
    type: "true-false",
    question: "Literal strings are objects of the String type.",
    correctAnswer: "True",
    explanation:
      "Correct. Any sequence of characters enclosed in double quotes is a string literal, which the Java compiler automatically creates as an object of the `String` class.",
  },
  {
    type: "true-false",
    question: 'An empty string is represented either as "" or as a null reference.',
    correctAnswer: "False",
    explanation:
      'An empty string `""` is a valid `String` object with a length of zero. A `null` reference means the variable does not point to any object at all. They are two distinct concepts.',
  },
  {
    type: "true-false",
    question: "double and float are two different names for the same Java data type.",
    correctAnswer: "False",
    explanation:
      "`double` and `float` are two distinct primitive data types for floating-point numbers. A `double` uses 64 bits of storage, offering greater precision than a `float`, which uses 32 bits.",
  },
  {
    type: "multiple-choice",
    question:
      "Math.random() returns a double value 0 <= x < 1. Which of the following expressions assigns to the variable hour a random integer from 1 to 12?",
    options: [
      "int hour = 1 + 12 * (int)Math.random();",
      "int hour = 1.0 + 12.0 * Math.random();",
      "int hour = 12 * (1/12 + Math.random());",
      "int hour = 1 + (int) (12 * Math.random());",
    ],
    correctAnswer: "int hour = 1 + (int) (12 * Math.random());",
    explanation:
      "The logic is: `Math.random()` gives `[0.0, 1.0)`. Multiplying by 12 gives `[0.0, 12.0)`. Casting to `(int)` truncates this to an integer in the range `0..11`. Adding 1 shifts the final range to `1..12`.",
  },
  {
    type: "short-answer",
    question: "Can the same case in a switch have two breaks?",
    correctAnswer: [
      "Yes, it could if there are multiple paths that could lead to a break or in loops. (A case may have several breaks, but all except the last one must be inside an if or else or a loop.)",
      "Yes, if they are in different conditional branches.",
    ],
    explanation:
      "A `case` block cannot have two sequential `break` statements, as the second one would be unreachable code. However, a `case` can contain multiple `break` statements if they are on different execution paths, for example, inside an `if-else` block: `case 1: if (condition) { ...; break; } else { ...; break; }`",
  },
  {
    type: "multiple-choice",
    question:
      "Given\nint n = 12, m = 4;\nwhat is displayed when the following statement is executed?\nSystem.out.println(m % (n + 1) + n % (m + 1));",
    options: ["2.70769230769", "112", "6", "1"],
    correctAnswer: "6",
    explanation:
      "The expression is evaluated as follows:\n1. Parentheses first: `(n + 1)` is 13, and `(m + 1)` is 5.\n2. The expression becomes `m % 13 + n % 5`.\n3. Substitute values: `4 % 13 + 12 % 5`.\n4. `4 % 13` is 4 (remainder of 4 divided by 13).\n5. `12 % 5` is 2 (remainder of 12 divided by 5).\n6. The final result is `4 + 2`, which is `6`.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is true?",
    options: [
      "A class specifies the number of objects of a particular type that will be created in the program.",
      "An instance of a class is a bytecode file received from the Internet.",
      "All of these choices.",
      "The new operator is used to create an object.",
    ],
    correctAnswer: "The new operator is used to create an object.",
    explanation:
      "The `new` operator is fundamental to Java for creating instances (objects) of a class. It allocates memory for the object and calls its constructor to initialize it. The other options are incorrect.",
  },
  {
  type: "short-answer",
  question: "What character ends and closes a list index?",
  correctAnswer: [
    "]",
    "closing square bracket",
    "right square bracket"
  ]
  },
  {
    type: "true-false",
    question: "parseInt() is used to convert an int to a string.",
    correctAnswer: "False"
  }
  // You can add here additional String processing and array questions from list 2 as needed.
];
