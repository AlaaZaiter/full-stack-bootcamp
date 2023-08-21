// Step 1: Functions

// Basic Function
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  console.log(addNumbers(5, 7));
  
  // Function with Conditional Statements
  function findMax(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both are equal";
    }
  }
  
  console.log(findMax(10, 5));
  
  // Nested Function
  function compute(num1, num2, operation) {
    function add(a, b) {
      return a + b;
    }
  
    function subtract(a, b) {
      return a - b;
    }
  
    function multiply(a, b) {
      return a * b;
    }
  
    function divide(a, b) {
      return a / b;
    }
  
    switch (operation) {
      case "add":
        return add(num1, num2);
      case "subtract":
        return subtract(num1, num2);
      case "multiply":
        return multiply(num1, num2);
      case "divide":
        return divide(num1, num2);
      default:
        return "Invalid operation";
    }
  }
  
  console.log(compute(10, 5, "add"));
  
  // Step 2: Arrow Functions and Scopes
  
  // Arrow Function
  const squareNumber = (number) => number * number;
  
  // Understanding Scopes
  const globalVar = 10; // Global scope
  
  console.log(globalVar); // Accessible from global scope
  
  function testScopes() {
    const localVar = 5; // Local scope within function
    console.log(localVar); // Accessible within function
  }
  
  testScopes();
  console.log(localVar); // Error: localVar is not defined in this scope
  
  // Step 3: Loops
  
  // For Loop
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // While Loop
  let j = 10;
  while (j >= 1) {
    console.log(j);
    j--;
  }
  
  // Do-While Loop with Conditionals
  let k = 1;
  do {
    if (k % 2 === 0) {
      console.log(k);
    }
    k++;
  } while (k <= 10);
  
  // Advanced Loop Challenge
  const favoriteFruits = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];
  
  for (const fruit of favoriteFruits) {
    if (fruit.length > 5) {
      console.log(fruit);
    }
  }
  
  // Bonus Step: Advanced Concepts
  
  // Higher Order Function
  function processArray(arr, callback) {
    const processedArray = [];
    for (const item of arr) {
      processedArray.push(callback(item));
    }
    return processedArray;
  }
  
  function doubleNumber(num) {
    return num * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(processArray(numbers, doubleNumber)); // [2, 4, 6, 8, 10]
  
  // Closures
  function multiplier(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  