"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  id: number
  type: "multiple-choice" | "true-false" | "short-answer"
  question: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
}

const questions: Question[] = [
  {
    id: 1,
    type: "true-false",
    question: "The names of classes are case-sensitive.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 2,
    type: "true-false",
    question: "Local variables in different methods of the same class are allowed to have the same name.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 3,
    type: "true-false",
    question:
      "When calling a method, the parameters passed must match the number, types, and order of parameters that the method expects in its definition.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Which of the following indicates that a method does not take any parameters?",
    options: [
      "The keyword void in the method's header preceding the method's name.",
      "Empty parentheses in the method's header.",
      "No parentheses in the method's header.",
      "The keyword void in the method's header inside parentheses.",
    ],
    correctAnswer: "Empty parentheses in the method's header.",
    explanation: "Remember, parameters are the input values to a method.",
  },
  {
    id: 5,
    type: "short-answer",
    question: 'What does the word "void" mean?',
    correctAnswer: [
      "it means no value is returned",
      "no value is returned",
      "nothing is returned",
      "does not return anything",
      "returns nothing",
    ],
  },
  {
    id: 6,
    type: "true-false",
    question: "A class may have more than one constructor.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 7,
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
    id: 8,
    type: "true-false",
    question:
      "A subclass inherits all those constructors of its superclass that are not defined explicitly in the subclass.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation:
      "You must create your own constructors in your subclass that explicitly call the superclass constructors using the super() keyword.",
  },
  {
    id: 9,
    type: "true-false",
    question: "Inheritance represents the IS-A relationship between objects.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 10,
    type: "short-answer",
    question: "Explain two differences between classes and objects.",
    correctAnswer: [
      "class is blueprint object is instance",
      "class is source code object is entity in running program",
      "class is written by programmer object is created by running program",
      "class specifies structure object holds values",
      "class is blueprint object is model",
    ],
  },
  {
    id: 11,
    type: "true-false",
    question: "An object has to be instantiated before it can be used.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 12,
    type: "short-answer",
    question: "When parameters are passed to a method, what must we ensure that we do?",
    correctAnswer: ["Parameters must match the number, types and order expected by the method."],
  },
  {
    id: 13,
    type: "true-false",
    question: "The source code for a Java program consists of definitions of classes.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 14,
    type: "short-answer",
    question: 'Explain what "inheritance" is.',
    correctAnswer: ["It is the ability to extend the structure of a class to a new class."],
  },
  {
    id: 15,
    type: "true-false",
    question: "A method can return a value to the caller.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 16,
    type: "true-false",
    question: "In the MorphingDice game, each Dice is an object.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 17,
    type: "true-false",
    question:
      "A local variable may be initialized in one method or constructor and used in another method or constructor.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 18,
    type: "short-answer",
    question: 'What is an "object"?',
    correctAnswer: ["An object is an entity in a program that represents an object or a concept from the real world."],
  },
  {
    id: 19,
    type: "true-false",
    question: "A Java program is allowed to create only one object of each class.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 20,
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
    id: 21,
    type: "true-false",
    question: "A subclass inherits all the fields and public methods of its superclass.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
    type: "true-false",
    question: "By convention, fields of a class are usually declared private.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 25,
    type: "true-false",
    question: "The programmer gives names to objects in his program by assigning them to variables.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 26,
    type: "true-false",
    question: "Different objects of the same class can have different sets of methods.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 27,
    type: "true-false",
    question: "In the MorphingDice game, the Game class creates a(n) object(s).",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 28,
    type: "short-answer",
    question: 'What is "encapsulation"?',
    correctAnswer: ["The technique of declaring fields (instance variables) and/or methods as private."],
  },
  {
    id: 29,
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
    id: 30,
    type: "true-false",
    question: "The import statement tells the compiler which other classes use this class.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 31,
    type: "short-answer",
    question: 'Where do we see the term "void"?',
    correctAnswer: ["It is found in the method header."],
  },
  {
    id: 32,
    type: "short-answer",
    question: 'What is a "constructor"?',
    correctAnswer: ["A constructor is a procedure for creating an object."],
  },
  {
    id: 33,
    type: "short-answer",
    question: 'Why is "inheritance" useful?',
    correctAnswer: ["It is useful since we do not have to recreate code."],
  },
  {
    id: 34,
    type: "multiple-choice",
    question: "Which of the following is false?",
    options: [
      "A method of an object can call other methods of the same object.",
      "A method of an object can call methods of objects of a different class.",
      "A subclass can define additional fields.",
      "One of the public methods of every class should be called start.",
    ],
    correctAnswer: "One of the public methods of every class should be called start.",
  },
  {
    id: 35,
    type: "true-false",
    question: "Every class has a method called main.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 36,
    type: "true-false",
    question: "When an object is created, the program always calls its init method.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 37,
    type: "short-answer",
    question: "What is the value of gasMilage?\n\nint miles = 98, gallons = 5;\n\ndouble gasMilage = miles / gallons;",
    correctAnswer: ["19.0"],
  },
  {
    id: 38,
    type: "true-false",
    question: "Can int expressions be used in a switch?",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 39,
    type: "true-false",
    question: "When an (int) cast is applied to a double value, it rounds the value to the nearest integer.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 40,
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(13 % 5);",
    correctAnswer: ["3"],
  },
  {
    id: 41,
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1 / 2 * 10);",
    correctAnswer: ["0"],
  },
  {
    id: 42,
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
    id: 43,
    type: "multiple-choice",
    question:
      'What is the result when the following statement is compiled and executed?\n\nSystem.out.println("1" + 2 + 3);',
    options: ["123 is displayed", 'Syntax error "unexpected data type"', "6 is displayed", "ClassCastException"],
    correctAnswer: "123 is displayed",
  },
  {
    id: 44,
    type: "short-answer",
    question: "What happens if you forget a break in your switch?",
    correctAnswer: [
      "If a break is missing, the code falls through and continues with the statements in the next case.",
    ],
  },
  {
    id: 45,
    type: "short-answer",
    question:
      "Remove as many parentheses as possible from the following statement without changing the result:\n\ncount += (((total / pages) - 5) * words - 1);",
    correctAnswer: ["count += (total / pages - 5) * words - 1;"],
  },
  {
    id: 46,
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(5 / 10);",
    correctAnswer: ["0"],
  },
  {
    id: 47,
    type: "multiple-choice",
    question: "In Java, the operator % is called",
    options: ["modulo", "the percent sign", "division", "modulus"],
    correctAnswer: "modulo",
  },
  {
    id: 48,
    type: "true-false",
    question: "The % operator has the same rank as the / operator.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 49,
    type: "true-false",
    question: "Can double expressions be used in a switch?",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 50,
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
    id: 51,
    type: "true-false",
    question: "The \\n character is not allowed in literal strings.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 52,
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1.0 / 2 * 10);",
    correctAnswer: ["5.0"],
  },
  {
    id: 53,
    type: "true-false",
    question: "The \\n character is allowed in literal strings.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 54,
    type: "short-answer",
    question:
      "There are two syntax errors in the code below. For each error, write the corrected line:\n\npublic class RightTriangle {\n  private double aSide; bSide;\n  public double getAltitude() {\n    private double hypotenuse;\n    hypotenuse = Math.sqrt(aSide * aSide + bSide * bSide);\n    return aSide * bSide / hypotenuse;\n  }\n}",
    correctAnswer: ["private double aSide, bSide;", "double hypotenuse;"],
  },
  {
    id: 55,
    type: "short-answer",
    question: "What are breaks used for in a switch?",
    correctAnswer: [
      "A break instructs the code to break out of the switch and go to the next statement after the switch.",
    ],
  },
  {
    id: 56,
    type: "multiple-choice",
    question:
      "What is the value of x after the following code is executed?\n\nint x = 1;\n\nswitch(x)\n{\n  case 1:\n    x++;\n    break;\n  case 2:\n    x += 2;\n    break;\n  default:\n    x = 0;\n    break;\n}",
    options: ["1", "2", "4", "0"],
    correctAnswer: "2",
  },
  {
    id: 57,
    type: "short-answer",
    question:
      "What is the value of balance?\n\ndouble rate = 1.058;\nint balance0 = 100, balance = (int)(balance0 * rate);",
    correctAnswer: ["105"],
  },
  {
    id: 58,
    type: "multiple-choice",
    question: 'What does Integer.parseInt("123.45") do?',
    options: ["Throws a NumberFormatException.", "Returns 0.", "Returns 123.", "Returns Integer.MIN_VALUE."],
    correctAnswer: "Throws a NumberFormatException.",
  },
  {
    id: 59,
    type: "short-answer",
    question: "What is the output of the following statement?\n\nSystem.out.print(1 / 2.0 * 10);",
    correctAnswer: ["5.0"],
  },
  {
    id: 60,
    type: "true-false",
    question: "Literal strings are not objects of the String type.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 61,
    type: "multiple-choice",
    question:
      "Given\n\nint sum = 3;\n\nwhat is the value of sum after the following statements are executed?\n\nsum *= 2;\nsum /= 5;\nsum++;",
    options: ["1", "2", "1.2", "2.2"],
    correctAnswer: "2",
  },
  {
    id: 62,
    type: "true-false",
    question: 'An empty string is represented either as "" or as a null reference.',
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 63,
    type: "true-false",
    question: "double and float are two different names for the same Java data type.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 64,
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
    id: 65,
    type: "short-answer",
    question: "Can the same case in a switch have two breaks?",
    correctAnswer: ["No"],
  },
  {
    id: 66,
    type: "true-false",
    question: 'Literal strings can include \\n and \\t "escape" characters.',
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 67,
    type: "true-false",
    question: "Literal strings are objects of the String type.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 68,
    type: "multiple-choice",
    question:
      "Given\n\nint n = 12, m = 4;\n\nwhat is displayed when the following statement is executed?\n\nSystem.out.println(m % (n + 1) + n % (m + 1));",
    options: ["112", "6", "2.70769230769", "1"],
    correctAnswer: "6",
  },
  {
    id: 69,
    type: "multiple-choice",
    question: "What does countX(324) return?",
    options: ["1", "2", "0", "4"],
    correctAnswer: "4",
  },
  {
    id: 70,
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
    id: 71,
    type: "multiple-choice",
    question: "What is the output of this code?",
    options: ["1 3 6 10 15 21 28 36 45", "1 3 5 7 9", "1 2 3 4 5 6 7 8 9", "1 4 9 16 25"],
    correctAnswer: "1 3 6 10 15 21 28 36 45",
  },
  {
    id: 72,
    type: "true-false",
    question:
      "When an algorithm is implemented on a computer, it always takes the same time to execute, regardless of its input.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 73,
    type: "true-false",
    question: "If the code reaches a for loop, it goes through the body of the loop at least once.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 74,
    type: "short-answer",
    question: "Name two situations where nested loops are used.",
    correctAnswer: [
      "Processing multi-dimensional data structures (e.g., iterating over rows and columns of a 2D array)",
      "Performing repeated actions on each element of a collection within another collection",
    ],
  },
  {
    id: 75,
    type: "multiple-choice",
    question: "Which of the following naming conventions are typically NOT used when naming loop control variables?",
    options: ["count, pos", "row, col", "loopControlVariable", "i, j, k"],
    correctAnswer: "loopControlVariable",
  },
  {
    id: 76,
    type: "short-answer",
    question: "Is return allowed in a loop?",
    correctAnswer: ["Yes"],
  },
  {
    id: 77,
    type: "true-false",
    question: "The same algorithm can be implemented in different programming languages.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 78,
    type: "short-answer",
    question: "Can you have nested while loops?",
    correctAnswer: ["Yes"],
  },
  {
    id: 79,
    type: "short-answer",
    question: "What is a nested loop? (Not a nested statement.)",
    correctAnswer: ["A loop in another loop."],
  },
  {
    id: 80,
    type: "true-false",
    question: "An algorithm always takes one parameter n as input.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 81,
    type: "multiple-choice",
    question: "What is the output from the algorithm shown in the flow chart when the input is n=17?",
    options: ["2", "-1", "14", "5"],
    correctAnswer: "2",
  },
  {
    id: 82,
    type: "true-false",
    question: "Flow charts and pseudocode are used to describe and teach algorithms.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 83,
    type: "true-false",
    question: "If break is used inside the body of a loop (not a switch), it should be inside an if-else statement.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 84,
    type: "multiple-choice",
    question: "Why is it a bad idea to use the same field for loop control variables in different methods of a class?",
    options: [
      "Because if a method is called from the body of the loop, it may reset the value of the variable used to control the loop.",
      "Because it wastes memory.",
      "Because it's not a good style to use the same names for variables in different methods.",
      "Because the loop will run much more slowly.",
    ],
    correctAnswer:
      "Because if a method is called from the body of the loop, it may reset the value of the variable used to control the loop.",
  },
  {
    id: 85,
    type: "true-false",
    question: "A break can be used in while and for loops, but not in do-while loops.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 86,
    type: "short-answer",
    question: "Can any code with a for loop be rewritten with a while loop?",
    correctAnswer: ["Yes"],
  },
  {
    id: 87,
    type: "true-false",
    question: "In nested loops, break in any of them passes control to the first statement after the outermost loop.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 88,
    type: "short-answer",
    question: "Are method calls allowed in a condition in a while loop?",
    correctAnswer: ["Yes"],
  },
  {
    id: 89,
    type: "multiple-choice",
    question: "What is the value of z after the code fragment is executed?",
    options: ["0.0", "-2.0", "-0.2", "-0.4"],
    correctAnswer: "-2.0",
  },
  {
    id: 90,
    type: "true-false",
    question: "An algorithm always produces one number as output.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 91,
    type: "multiple-choice",
    question: "What is the value of sum after the code fragment is executed?",
    options: ["30", "0", "20", "12"],
    correctAnswer: "20",
  },
  {
    id: 92,
    type: "multiple-choice",
    question: "What does countX(36) return?",
    options: ["2", "4", "1", "0"],
    correctAnswer: "2",
  },
  {
    id: 93,
    type: "short-answer",
    question: 'Which operators can be used in the "change" part of a for loop?',
    correctAnswer: ["Unary"],
  },
  {
    id: 94,
    type: "multiple-choice",
    question: "int d;\n\nfor (d = 1; d < 567; d *= 10);\n\nWhat is the value of d after the statements are executed?",
    options: ["1", "10", "unpredictable", "1000"],
    correctAnswer: "1000",
  },
  {
    id: 95,
    type: "short-answer",
    question: "Does short circuit evaluation apply to conditions in loops?",
    correctAnswer: ["Yes"],
  },
  {
    id: 96,
    type: "short-answer",
    question: "What is the difference between while and do-while?",
    correctAnswer: [
      "A do-while loop always executes its body at least once, whereas a while loop may not execute at all if the condition is initially false.",
    ],
  },
  {
    id: 97,
    type: "short-answer",
    question: "Name three iterative control statements in Java.",
    correctAnswer: ["for", "while", "do-while"],
  },
  {
    id: 98,
    type: "true-false",
    question:
      "Iterations fold the description of long computations into a limited number of steps, regardless of the size of the task.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 99,
    type: "short-answer",
    question:
      "Write the pseudocode for an iterative algorithm that calculates sum = ∑(1 / count²) for any given n.\n\nInput: n\nsum ← 0.0\ncount ← 1\n…\nOutput: sum",
    correctAnswer: [
      "Loop UNTIL count > n:\n  i ← 1 / (count * count)\n  sum ← sum + i\n  count ← count + 1\nEnd Loop\nOutput sum",
    ],
  },
  {
    id: 100,
    type: "short-answer",
    question:
      "Explain, using the correct terminology, what is happening in the flow chart (inputs n=31, b=3). What will be the final result?",
    correctAnswer: [
      "Initialize p = 1. While p ≤ n, subtract p from n and then multiply p by b. Repeat until p > n. Return the remaining n. For n=31, b=3 the final output is 18.",
    ],
  },
  {
    id: 101,
    type: "true-false",
    question: 'You cannot call a literal string\'s methods, as in "Hello".equals(str).',
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 102,
    type: "multiple-choice",
    question: `Given

String word1 = "at";

String word2 = "Cat";

what is returned by word1.compareTo(word2)?`,
    options: ["false", "true", "a negative integer", "a positive integer"],
    correctAnswer: "a positive integer",
  },
  {
    id: 103,
    type: "multiple-choice",
    question: `What is the output of the following code segment?

String str1 = "A";
String str2 = str1;
str2 += "B";
System.out.println(str1 + str2);`,
    options: ["ABAB", "AB", "BA", "AAB"],
    correctAnswer: "AAB",
  },
  {
    id: 104,
    type: "true-false",
    question: "append is a method in the StringBuffer class.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 105,
    type: "multiple-choice",
    question:
      "Given a String called stars, which of the following calls returns the position of the first occurrence of the '*' in it?",
    options: [`"*".indexIn(stars);`, `stars.charAt('*');`, `"*".findIn(stars);`, `stars.indexOf('*');`],
    correctAnswer: "stars.indexOf('*');",
  },
  {
    id: 106,
    type: "true-false",
    question: 'You can call a literal string\'s methods, as in "Hello".equals(str).',
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 107,
    type: "true-false",
    question: "The length method returns 0 for an empty string.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 108,
    type: "multiple-choice",
    question: `Given

String word1 = "at";

String word2 = "Cat";

what is returned by word2.compareTo(word1)?`,
    options: ["false", "a positive integer", "a negative integer", "true"],
    correctAnswer: "a negative integer",
  },
  {
    id: 109,
    type: "true-false",
    question: "The Character class contains the static method boolean isUpperCase(char ch).",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 110,
    type: "short-answer",
    question:
      "Write a method that returns true if a given string is not empty and ends with a star ('*'), false otherwise.",
    correctAnswer: [
      `public boolean endsWithStar(String s) {
  return s != null && !s.isEmpty() && s.endsWith("*");
}`,
    ],
  },
  {
    id: 111,
    type: "short-answer",
    question:
      "Write a return statement that returns a value of true if both s1 and s2 are not empty, and end with the same character.  Otherwise, return a value of false.",
    correctAnswer: [
      `return s1 != null && s2 != null && !s1.isEmpty() && !s2.isEmpty() && s1.charAt(s1.length() - 1) == s2.charAt(s2.length() - 1);`,
    ],
  },
  {
    id: 112,
    type: "true-false",
    question: "The length method returns null for an empty string.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 113,
    type: "multiple-choice",
    question: "What happens if str.length() is 8 and you call str.charAt(8)?",
    options: [
      "You get a StringIndexOutOfBoundsException.",
      "charAt returns the random character that happens to be stored after the string.",
      "charAt returns the last character of str.",
      "charAt returns -1.",
    ],
    correctAnswer: "You get a StringIndexOutOfBoundsException.",
  },
  {
    id: 114,
    type: "true-false",
    question: "A StringBuffer, once constructed, cannot be changed.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 115,
    type: "multiple-choice",
    question: "If s is a String, what does s.substring(5) do?",
    options: [
      "Nothing, s does not have such a method.",
      "Returns the end of s, starting from the sixth character.",
      "Returns a substring made of one character - the sixth character.",
      "Returns a substring made of the first 5 characters of s.",
    ],
    correctAnswer: "Returns the end of s, starting from the sixth character.",
  },
  {
    id: 116,
    type: "true-false",
    question: "A string, once constructed, cannot be changed.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 117,
    type: "multiple-choice",
    question: "If s is a String, what does s.substring(4) do?",
    options: [
      "Returns the end of s, starting from the fifth character.",
      "Nothing, s does not have such a method.",
      "Returns a substring made of the first 4 characters of s.",
      "Returns a substring made of one character - the fifth character.",
    ],
    correctAnswer: "Returns the end of s, starting from the fifth character.",
  },
]

export default function QuizSystem() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set())
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter((q) => !usedQuestions.has(q.id))

    if (availableQuestions.length === 0) {
      // Reset if all questions have been used
      setUsedQuestions(new Set())
      return questions[Math.floor(Math.random() * questions.length)]
    }

    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  }

  const loadNewQuestion = () => {
    const newQuestion = getRandomQuestion()
    setCurrentQuestion(newQuestion)
    setUserAnswer("")
    setShowFeedback(false)
    setIsCorrect(false)
    setUsedQuestions((prev) => new Set([...prev, newQuestion.id]))
  }

  useEffect(() => {
    loadNewQuestion()
  }, [])

  const checkShortAnswer = (userAnswer: string, correctAnswers: string[]): boolean => {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim()
    return correctAnswers.some(
      (correct) =>
        normalizedUserAnswer.includes(correct.toLowerCase()) || correct.toLowerCase().includes(normalizedUserAnswer),
    )
  }

  const handleSubmitAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return

    let correct = false

    if (currentQuestion.type === "short-answer") {
      correct = checkShortAnswer(userAnswer, currentQuestion.correctAnswer as string[])
    } else {
      correct = userAnswer === currentQuestion.correctAnswer
    }

    setIsCorrect(correct)
    setShowFeedback(true)
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }))
  }

  const handleNextQuestion = () => {
    loadNewQuestion()
  }

  const resetQuiz = () => {
    setUsedQuestions(new Set())
    setScore({ correct: 0, total: 0 })
    loadNewQuestion()
  }

  if (!currentQuestion) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Score: {score.correct}/{score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}
          %)
        </div>
        <Button variant="outline" size="sm" onClick={resetQuiz}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Java Quiz Question</CardTitle>
          <CardDescription>Answer the question below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">{currentQuestion.question}</p>

          {!showFeedback && (
            <>
              {currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false" ? (
                <RadioGroup value={userAnswer} onValueChange={setUserAnswer}>
                  {currentQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <Textarea
                  placeholder="Enter your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="min-h-[100px]"
                />
              )}

              <Button onClick={handleSubmitAnswer} disabled={!userAnswer.trim()} className="w-full">
                Submit Answer
              </Button>
            </>
          )}

          {showFeedback && (
            <div className="space-y-4">
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                }`}
              >
                {isCorrect ? (
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  <p className={`text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                    Your answer: {userAnswer}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-600 mt-1">
                      Correct answer:{" "}
                      {currentQuestion.type === "short-answer"
                        ? (currentQuestion.correctAnswer as string[])[0]
                        : currentQuestion.correctAnswer}
                    </p>
                  )}
                  {currentQuestion.explanation && (
                    <p className="text-sm text-blue-600 mt-2">{currentQuestion.explanation}</p>
                  )}
                </div>
              </div>

              <Button onClick={handleNextQuestion} className="w-full">
                Next Question
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
