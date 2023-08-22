// Step 1: Arrays and Objects

// Array Creation
const fiveNumbers = [1, 2, 3, 4, 5];

// Object Creation
const personalInfo = {
  name: "John Doe",
  age: 30,
  height: 180,
  locationInfo: "New York", // Renamed from "location" to "locationInfo"
  nationality: "American"
};

console.log(fiveNumbers);
console.log(personalInfo);

// Step 2: Spread Operator

// New Array with Spread
const nextThreeNumbers = [6, 7, 8];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

console.log(allNumbers);

// New Object with Spread
const additionalInfo = {
  occupation: "Software Developer",
  hobby: "Playing Guitar",
  education: "Bachelor's in Computer Science"
};

const fullInfo = { ...personalInfo, ...additionalInfo };

console.log(fullInfo);

// Step 3: Destructuring

// Destructuring Arrays
const [firstNum, secondNum, thirdNum] = fiveNumbers;

console.log(firstNum, secondNum, thirdNum);

// Destructuring Objects
const { name, locationInfo, nationality } = personalInfo;

console.log(name, locationInfo, nationality);

// Step 4: Advanced Operations

// Nested Destructuring
const nestedObject = {
  contactInfo: {
    email: "john@example.com",
    phone: "123-456-7890"
  }
};

const { contactInfo: { email, phone } } = nestedObject;

console.log(email, phone);

// Rest with Destructuring
const [num1, num2, ...restOfNumbers] = fiveNumbers;

console.log(num1, num2);
console.log(restOfNumbers);

// Merging and Overwriting with Spread
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
