# String Calculator TDD

This project implements a String Calculator using the principles of Test-Driven Development (TDD). The calculator is capable of adding numbers from a string input, with support for custom delimiters, handling newlines as delimiters, and throwing exceptions for negative numbers.

# Examples

1. Input: "", Output: 0
2. Input: "1", Output: 1
3. Input: "1,2", Output: 3
4. Input: "1\n2,3", Output: 6
5. Input: "//;\n1;2", Output: 3
6. Input: "1,-2,3", Throws exception: negative numbers not allowed -2

# How to run the project

You can use a code editor like Visual Studio Code

1. Clone the repository using Git
2. Open the repository
3. Open the terminal and run the command - npm install <br/>
   This command will install all the necessary dependencies in a directory called node_modules to run the project.
4. Now go inside the src directory using the terminal by the command - cd src
5. On the terminal, run the command - npm test <br/>
   This command will run all the tests specified in the file app.test.js in the test directory.
