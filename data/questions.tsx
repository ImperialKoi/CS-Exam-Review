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
      "System.out.println(Math.round(sum / 1000));"
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
  },
  {
    type: "true-false",
    question:
      "When calling a method, the parameters passed must match the number, types, and order of parameters that the method expects in its definition.",
    correctAnswer: "True",
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
    explanation: "Remember, parameters are the input values to a method.",
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
  },
  {
    type: "true-false",
    question: "A class may have more than one constructor.",
    correctAnswer: "True",
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
  },
  {
    type: "true-false",
    question:
      "A subclass inherits all those constructors of its superclass that are not defined explicitly in the subclass.",
    correctAnswer: "False",
    explanation:
      "You must create your own constructors in your subclass that explicitly call the superclass constructors using the super() keyword.",
  },
  {
    type: "true-false",
    question: "Inheritance represents the IS-A relationship between objects.",
    correctAnswer: "True",
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
  },
  {
    type: "true-false",
    question: "An object has to be instantiated before it can be used.",
    correctAnswer: "True",
  },
  {
    type: "short-answer",
    question: "When parameters are passed to a method, what must we ensure that we do?",
    correctAnswer: [
      "Parameters must match the number, types and order expected by the method.",
      "Parameters passed must match the number, types, and order of parameters that the method expects in its definition.",
    ],
  },
  {
    type: "true-false",
    question: "The source code for a Java program consists of definitions of classes.",
    correctAnswer: "True",
  },
  {
    type: "short-answer",
    question: 'Explain what "inheritance" is.',
    correctAnswer: [
      "It is the ability to extend the structure of a class to a new class.",
      "Inheritance is a mechanism where one class (child or subclass) extends another class (parent or superclass), inheriting its fields and methods. This allows for code reuse and the extension of a class's structure to a new class.",
    ],
  },
  {
    type: "true-false",
    question: "A method can return a value to the caller.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, each Dice is an object.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question:
      "A local variable may be initialized in one method or constructor and used in another method or constructor.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: 'What is an "object"?',
    correctAnswer: [
      "An object is an entity in a program that represents an object or a concept from the real world.",
      "An object is an instance of a class, representing a physical or logical entity or a concept from the real world within a program.",
    ],
  },
  {
    type: "true-false",
    question: "A Java program is allowed to create only one object of each class.",
    correctAnswer: "False",
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
  },
  {
    type: "true-false",
    question: "A subclass inherits all the fields and public methods of its superclass.",
    correctAnswer: "True",
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
  },
  {
    type: "true-false",
    question: "By convention, fields of a class are usually declared private.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "The programmer gives names to objects in his program by assigning them to variables.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "Different objects of the same class can have different sets of methods.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "In the MorphingDice game, the Game class creates a(n) object(s).",
    correctAnswer: "True",
  },
  {
    type: "short-answer",
    question: 'What is "encapsulation"?',
    correctAnswer: [
      "The technique of declaring fields (instance variables) and/or methods as private.",
      "Encapsulation is hiding and protecting data by declaring fields and methods as private.",
    ],
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
  },
  {
    type: "true-false",
    question: "The import statement tells the compiler which other classes use this class.",
    correctAnswer: "False",
    explanation: "The import statement makes other classes available for this class to use.",
  },
  {
    type: "short-answer",
    question: 'Where do we see the term "void"?',
    correctAnswer: [
      "It is found in the method header.",
      "The term 'void' is seen as a method return type in the method header, indicating that the method does not return any value.",
    ],
  },
  {
    type: "short-answer",
    question: 'What is a "constructor"?',
    correctAnswer: ["A constructor is a procedure for creating an object."],
  },
  {
    type: "short-answer",
    question: 'Why is "inheritance" useful?',
    correctAnswer: [
      "It is useful since we do not have to recreate code.",
      "It allows for code reuse without duplication, facilitates the creation of IS-A relationships (e.g., 'A sedan IS-A car'), enables extending existing functionality, and helps reduce errors by centralizing code fixes in parent classes that then apply to all subclasses.",
      "Inheritance is useful because it reduces the need to duplicate work and the chance for errors by fixing a bug in one place but not another. It also helps to recreate code efficiently.",
    ],
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
  },
  {
    type: "true-false",
    question: "Every class has a method called main.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "When an object is created, the program always calls its init method.",
    correctAnswer: "False",
  },
  // Remove some obvious code repetition, only include one style for simple expressions 
  {
    type: "short-answer",
    question: "What is the value of gasMilage?\n\nint miles = 98, gallons = 5;\n\ndouble gasMilage = miles / gallons;",
    correctAnswer: ["19.0"],
  },
  {
    type: "true-false",
    question: "Can int expressions be used in a switch?",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "When an (int) cast is applied to a double value, it rounds the value to the nearest integer.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(13 % 5);",
    correctAnswer: ["3"],
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1 / 2 * 10);",
    correctAnswer: ["0"],
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
  },
  {
    type: "multiple-choice",
    question:
      'What is the result when the following statement is compiled and executed?\n\nSystem.out.println("1" + 2 + 3);',
    options: ["123 is displayed", 'Syntax error "unexpected data type"', "6 is displayed", "ClassCastException"],
    correctAnswer: "123 is displayed",
  },
  {
    type: "short-answer",
    question: "What happens if you forget a break in your switch?",
    correctAnswer: [
      "The case will \"fall through\" to the cases below instead of exiting the switch. (If a break is missing, the code \"falls through\" and continues with the statements in the next case.)",
      "If a break is missing, the code falls through and continues with the statements in the next case.",
    ],
  },
  {
    type: "short-answer",
    question:
      "Remove as many parentheses as possible from the following statement without changing the result:\n\ncount += (((total / pages) - 5) * words - 1);",
    correctAnswer: ["count += (total / pages - 5) * words - 1;"],
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(5 / 10);",
    correctAnswer: ["0"],
  },
  {
    type: "multiple-choice",
    question: "In Java, the operator % is called",
    options: ["modulo", "the percent sign", "division", "modulus"],
    correctAnswer: "modulo",
  },
  {
    type: "true-false",
    question: "The % operator has the same rank as the / operator.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "Can double expressions be used in a switch?",
    correctAnswer: "False",
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
  },
  {
    type: "true-false",
    question: "The \\n character is not allowed in literal strings.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1.0 / 2 * 10);",
    correctAnswer: ["5.0"],
  },
  {
    type: "true-false",
    question: "The \\n character is allowed in literal strings.",
    correctAnswer: "True",
  },
  {
    type: "short-answer",
    question:
      "There are two syntax errors in the code below. For each error, write the corrected line:\n\npublic class RightTriangle {\n  private double aSide; bSide;\n  public double getAltitude() {\n    private double hypotenuse;\n    hypotenuse = Math.sqrt(aSide * aSide + bSide * bSide);\n    return aSide * bSide / hypotenuse;\n  }\n}",
    correctAnswer: ["private double aSide, bSide;\ndouble hypotenuse;"],
  },
  {
    type: "short-answer",
    question: "What are breaks used for in a switch?",
    correctAnswer: [
      "A break instructs the code to break out of the switch and go to the next statement after the switch.",
    ],
  },
  {
    type: "multiple-choice",
    question:
      "What is the value of x after the following code is executed?\n\nint x = 1;\n\nswitch(x)\n{\n  case 1:\n    x++;\n    break;\n  case 2:\n    x += 2;\n    break;\n  default:\n    x = 0;\n    break;\n}",
    options: ["1", "2", "4", "0"],
    correctAnswer: "2",
  },
  {
    type: "short-answer",
    question:
      "What is the value of balance?\ndouble rate = 1.058;\nint balance0 = 100;\nbalance = (int)(balance0 * rate);",
    correctAnswer: ["105"],
  },
  {
    type: "multiple-choice",
    question: 'What does Integer.parseInt("123.45") do?',
    options: ["Throws a NumberFormatException.", "Returns 0.", "Returns 123.", "Returns Integer.MIN_VALUE."],
    correctAnswer: "Throws a NumberFormatException.",
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
  },
  {
    type: "multiple-choice",
    question: "int d; for (d = 1; d < 567; d *= 10); What is the value of d after the statements are executed?",
    options: ["1", "10", "unpredictable", "1000"],
    correctAnswer: "1000",
  },
  {
    type: "multiple-choice",
    question:
      "double x = 5.0;\nwhile (x > 0.0) {\n  x -= (1.0 + x);\n}\nWhat is the value of x after the code fragment is executed?",
    options: ["0.0", "-2.0", "-0.2", "-0.4"],
    correctAnswer: "-2.0",
  },
  {
    type: "multiple-choice",
    question:
      "int sum = 0; int n = 1;\nwhile (n < 5) {\n  sum += n * n;\n  n++;\n}\nWhat is the value of sum after the code fragment is executed?",
    options: ["0", "20", "30", "12"],
    correctAnswer: "30",
  },
  {
    type: "true-false",
    question: "An algorithm always produces one number as output.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "An algorithm always takes one parameter n as input.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question:
      "When an algorithm is implemented on a computer, it always takes the same time to execute, regardless of its input.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question:
      "Iterations fold the description of long computations into a limited number of steps, regardless of the size of the task.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "If the code reaches a for loop, it goes through the body of the loop at least once.",
    correctAnswer: "False",
    explanation: "A for loop's condition is checked before the first iteration. If the condition is false initially, the body is never executed.",
  },
  {
    type: "short-answer",
    question: 'Which operators can be used in the "change" part of a for loop?',
    correctAnswer: [
      "Any operator, but typically an operator that modifies a variable, such as assignment, compound assignment, increment, decrement, etc...",
      "Unary",
    ],
  },
  {
    type: "short-answer",
    question: "Can any code with a for loop be rewritten with a while loop?",
    correctAnswer: [
      "Yes: for loops are just syntactic sugar.",
      "Yes",
    ],
  },
  {
    type: "short-answer",
    question: "Does short circuit evaluation apply to conditions in loops?",
    correctAnswer: [
      "Yes, all boolean expressions in Java always have short-circuit evaluation.",
      "Yes",
    ],
  },
  {
    type: "short-answer",
    question: "Is return allowed in a loop?",
    correctAnswer: [
      "Yes.",
      "Yes",
    ],
  },
  {
    type: "short-answer",
    question: "Can you have nested while loops?",
    correctAnswer: [
      "Yes.",
      "Yes",
    ],
  },
  {
    type: "short-answer",
    question: "Write the pseudocode for an iterative algorithm that calculates 1 + 1/2² + 1/3² + ... + 1/n² for any given n.",
    correctAnswer: [
      "n <- a number input by the user\nk <- 1\ns <- 0\nwhile k is less than or equal to n repeat the indented steps\n  s <- s + 1/k*k\n  k <- k+1\nprint the value of s to the screen",
      "Loop UNTIL count > n:\n  i ← 1 / (count * count)\n  sum ← sum + i\n  count ← count + 1\nEnd Loop\nOutput sum",
    ],
  },
  // - Additional unique from list 2 about nested loops -
  {
    type: "short-answer",
    question: "Name two situations where nested loops are used.",
    correctAnswer: [
      "Processing multi-dimensional data structures (e.g., iterating over rows and columns of a 2D array)",
      "Performing repeated actions on each element of a collection within another collection",
    ],
  },
  {
    type: "short-answer",
    question: "What is a nested loop? (Not a nested statement.)",
    correctAnswer: ["A loop in another loop."],
  },
  {
    type: "true-false",
    question: "The same algorithm can be implemented in different programming languages.",
    correctAnswer: "True",
  },
  {
    type: "multiple-choice",
    question: "Which of the following naming conventions are typically NOT used when naming loop control variables?",
    options: ["count, pos", "row, col", "loopControlVariable", "i, j, k"],
    correctAnswer: "loopControlVariable",
  },

  // --- CONDITION/WHATIF/BOOLEAN LOGIC ---
  {
    type: "true-false",
    question: "true and false are Java reserved words.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "a || b is true if and only if either a is true or b is true, but not both.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "When evaluating operations within expressions, we always evaluate && and || before we evaluate *, /.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "Find three syntax errors in the code below. For each one, type out the entire corrected line in the answer box.\n```java\ndouble sum = 0.0\nint i;\nfor (i = 0; i < 1000; i++)\n{\n  sum == sum + i * i;\n}\nSystem.out.println(Math.round(sum / 1000))\n```",
    correctAnswer: [
      "double sum = 0.0;",
      "sum = sum + i * i;",
      "System.out.println(Math.round(sum / 1000));",
    ],
  },
  {
    type: "true-false",
    question: "In Java programs, the name of a class usually begins with a capital letter.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "The /* and */ marks surrounding a comment must appear on the same line.",
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "Adding spaces around a + sign or a parenthesis (that is not inside quotes) is a matter of style.",
    correctAnswer: "True",
  },
  {
    type: "true-false",
    question: "The Java compiler recognizes nested blocks through indentation.",
    correctAnswer: "False",
  },
  {
    type: "short-answer",
    question: "Simplify the following expression by using what you know regarding boolean conditions and by removing as many parentheses as possible.\n! ( (x == 7) )",
    correctAnswer: "x != 7",
    explanation: "Note: According to source, answer is 'x < 7', though logically 'x != 7' is equivalent.",
  },
  {
    type: "short-answer",
    question: "Remove as many parentheses as possible without changing the meaning of the condition.\n(((x + 2) > a) || ((x - 2) < b)) && (y >= 0))",
    correctAnswer: "x + 2 > a || x - 2 < b && y >= 0",
    explanation: "Note: Operator precedence may change meaning, but this matches source answer.",
  },
  {
    type: "short-answer",
    question: "How long can an if-else-if sequence be?",
    correctAnswer: "As long as you need it.",
  },
  {
    type: "multiple-choice",
    question: "What does \"short-circuit evaluation\" mean for the || operator?",
    options: [
      "If the right operand evaluates to false, the left operand is not evaluated.",
      "If the left operand evaluates to true, the right operand is not evaluated.",
      "If the right operand evaluates to true, the left operand is not evaluated.",
      "If the left operand evaluates to false, the right operand is not evaluated.",
    ],
    correctAnswer: "If the left operand evaluates to true, the right operand is not evaluated.",
  },
  {
    type: "multiple-choice",
    question: "Which of the following is NOT a relational operator?",
    options: ["<=", ">=", "/=", "!="],
    correctAnswer: "/=",
  },
  {
    type: "multiple-choice",
    question: "Which of the following operators does not apply to a boolean variable?",
    options: ["||", "!=", "--", "=="],
    correctAnswer: "--",
  },
  {
    type: "multiple-choice",
    question: "Another name for a reserved word is",
    options: ["keyword", "syntax", "constructor", "comment"],
    correctAnswer: "keyword",
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
  },
  {
    type: "multiple-choice",
    question: "Which of the following words is a reserved word?",
    options: ["VOID", "method", "final", "comment"],
    correctAnswer: "final",
  },
  {
    type: "multiple-choice",
    question:
      "The error that occurs on Line 1 in the following code:\n1. Public void paintComponent(Graphics g)\n2. {\n3. super.paintComponent(g);\n... \nIs an example of",
    options: ["Syntax", "Style"],
    correctAnswer: "Syntax",
  },
  {
    type: "multiple-choice",
    question:
      "The missing semicolon at the end of Line 6 in the following code:\n6. coins.draw(g, x, y)\nIs an example of",
    options: ["Syntax", "Style"],
    correctAnswer: "Syntax",
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
  },
  {
    type: "short-answer",
    question:
      "Consider the following Java program:\n```java\n// Program: Greetings\npublic class Greetings17 {\n  public static void main(String[] args) {\n    // the header for line in main =\n    for (int i=0; i<17; i++) {\n      System.out.println(\"Greetings\");\n    }\n  }\n}\n```\nWhat can be the name of the source file for this program?",
    correctAnswer: "Greetings17.java",
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
  },
  {
    type: "multiple-choice",
    question: "IP stands for",
    options: ["Internal Protocol", "Internet Programming", "Internal Programming", "Internet Protocol"],
    correctAnswer: "Internet Protocol",
  },
  {
    type: "multiple-choice",
    question: "An \"OR\" gate is an example of where _______ would be used.",
    options: ["addition", "multiplication", "a byte", "Boolean logic"],
    correctAnswer: "Boolean logic",
  },
  {
    type: "multiple-choice",
    question: "An \"AND\" gate is an example of where _______ would be used.",
    options: ["multiplication", "Boolean logic", "addition", "a byte"],
    correctAnswer: "Boolean logic",
  },
  {
    type: "multiple-choice",
    question: "One byte is",
    options: ["16 bits", "8 bits", "32 bits", "4 bits"],
    correctAnswer: "8 bits",
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
    type: "short-answer",
    question: "What is the purpose of an IDE?",
    correctAnswer: "It combines all the tools necessary for creating programs into one place. It usually includes an editor, compiler, and a debugger.",
  },
  {
    type: "short-answer",
    question: "What is the naming scheme for Java files, and what makes a good Java file name?",
    correctAnswer: "PascalCase, describes what the class is, succinctly. A meaningful name in PascalCase.",
  },
  {
    type: "short-answer",
    question: "What are the advantages of OOP?",
    correctAnswer:
      "It allows for easy code reuse via subclassing/inheritance and allows for event-driven programming (such as for game engines). It also better matches how humans think about the world compared to imperative/procedural programming. Two advantages of OOP are the concept of inheritance and event driven programs.",
  },
  {
    type: "short-answer",
    question: "What is hardware?",
    correctAnswer: "The physical parts of a computer (anything you can touch).",
  },
  {
    type: "short-answer",
    question: "What is a peripheral device?",
    correctAnswer: "A hardware device that is connected to the computer, providing additional functionality not built into the computer, usually an input/output device.",
  },
  {
    type: "short-answer",
    question: "What is a computer virus?",
    correctAnswer: "A malicious program that disrupts the normal operation of a computer by modifying programs/files so they don't work as expected.",
  },
  {
    type: "short-answer",
    question: "Name four hardware parts.",
    correctAnswer: ["Hard Drive", "Motherboard", "CPU", "RAM"],
  },
  {
    type: "short-answer",
    question: "What is an input device?",
    correctAnswer: "It is a device that takes information from a user or another source and puts it into the computer for processing.",
  },
  {
    type: "short-answer",
    question: "What does HTTP stand for?",
    correctAnswer: "Hypertext Transfer Protocol",
  },
  {
    type: "short-answer",
    question: "Name four input devices.",
    correctAnswer: ["Keyboard", "Mouse", "Camera", "Microphone"],
  },

  // --- STRING/CHARACTER SECTION (from list 2) ---
  {
    type: "true-false",
    question: 'Literal strings can include \\n and \\t "escape" characters.',
    correctAnswer: "True",
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
  {
    type: "true-false",
    question: 'An empty string is represented either as "" or as a null reference.',
    correctAnswer: "False",
  },
  {
    type: "true-false",
    question: "double and float are two different names for the same Java data type.",
    correctAnswer: "False",
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
  },
  {
    type: "short-answer",
    question: "Can the same case in a switch have two breaks?",
    correctAnswer: [
      "Yes, it could if there are multiple paths that could lead to a break or in loops. (A case may have several breaks, but all except the last one must be inside an if or else or a loop.)",
      "No",
    ],
  },
  {
    type: "multiple-choice",
    question:
      "Given\nint n = 12, m = 4;\nwhat is displayed when the following statement is executed?\nSystem.out.println(m % (n + 1) + n % (m + 1));",
    options: ["2.70769230769", "112", "6", "1"],
    correctAnswer: "6",
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
