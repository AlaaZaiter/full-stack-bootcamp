// Declare a variable 'age' and assign your age as a value
const age = 25;

// Using an if else statement, check whether the age is greater than or equal to 20
if (age >= 20) {
    console.log("You can enter this room.");
} else {
    console.log("You can't enter this room.");
}

// Research about boolean logic

// Declare and assign boolean expressions
const expression1 = 5 > 3;        // true
const expression2 = 10 === '10'; // false
const expression3 = true && false; // false
const expression4 = !expression3; // true

// Log the variables to the console to check the result of each
console.log("expression1:", expression1); // Should print: true
console.log("expression2:", expression2); // Should print: false
console.log("expression3:", expression3); // Should print: false
console.log("expression4:", expression4); // Should print: true

const age2 = 25;
const hasDriverLicense = true;
const hasCar = false;

// Declare a variable 'canDrive' and assign a default value of 'false'
let canDrive = false;

// Check if age is greater than or equal to 18 and hasDriverLicense is true
if (age >= 18 && hasDriverLicense) {
    canDrive = true;
}

// Declare a variable 'canRentCar' and assign a default value of 'false'
let canRentCar = false;

// Check if age is greater than or equal to 22, hasDriverLicense is true, and hasCar is false
if (age >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
}

// Declare a variable 'needDriver' and assign a default value of 'false'
let needDriver = false;

// Check if age is less than 18, hasDriverLicense is false, and hasCar is also false
if (age < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
}

console.log("canDrive:", canDrive);       // Should print: true
console.log("canRentCar:", canRentCar);   // Should print: false
console.log("needDriver:", needDriver);   // Should print: false

// Declare a variable "role" and assign "admin" as a default value
const role = "admin";

// Using switch case to determine access based on the role
switch (role) {
    case "admin":
        console.log("You have read and write access for the data");
        break;
    case "user":
        console.log("You have only read access for the data");
        break;
    case "guest":
        console.log("You have no access for the data");
        break;
    default:
        console.log("User role is not recognized");
}
