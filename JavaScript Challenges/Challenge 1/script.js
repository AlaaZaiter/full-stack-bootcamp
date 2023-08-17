console.log('I am linked now!');
var name=" Alaa";
alert(name);
//step2
// Method 1: Using var
var ageVar = 20;

// Method 2: Using let
let NameLet = "Alaa";

// Method 3: Using const
const DOBConst = "1998-08-17";

// Changing variable values
ageVar = 10;
NameLet = "Ahmad";

// Since 'DOBConst' is declared as a constant, you can't reassign it.
// Uncommenting the following line will result in an error:
// DOBConst = "2000-01-01";

// Logging variables to the console
console.log("ageVar:", ageVar);
console.log("lastNameLet:", NameLet);
console.log("DOBConst:", DOBConst);
// Log data types of given values
console.log(typeof "This is a text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1215);
console.log(typeof "999");
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);

// Declare variables with different data types
var stringValue = "Hello, world!";
var booleanValue = true;
var numberValue = 42;
var objectValue = { key: "value" };
var arrayValue = [1, 2, 3];
var nullValue = null;

// Log variables and their data types
console.log("stringValue:", stringValue, typeof stringValue);
console.log("booleanValue:", booleanValue, typeof booleanValue);
console.log("numberValue:", numberValue, typeof numberValue);
console.log("objectValue:", objectValue, typeof objectValue);
console.log("arrayValue:", arrayValue, typeof arrayValue);
console.log("nullValue:", nullValue, typeof nullValue);
// Declare and assign a string variable using double quotations
const doubleQuote = "This is my text using double quotations";

// Declare and assign a string variable using single quotations
const singleQuote = 'This is my text using single quotations';

// Declare and assign a string variable using backticks (template literals) with interpolation
const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;

// Declare and assign a string variable using backticks and more complex interpolation
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

// Log all variables to the console
console.log("doubleQuote:", doubleQuote);
console.log("singleQuote:", singleQuote);
console.log("backtick:", backtick);
console.log("tryThisAlso:", tryThisAlso);

// Explanation of differences between string declaration methods
console.log("Explanation:");
console.log("1. doubleQuote uses double quotations.");
console.log("2. singleQuote uses single quotations.");
console.log("3. backtick uses backticks (template literals) and allows easy interpolation of variables using `${}` syntax.");
console.log("4. tryThisAlso demonstrates more complex interpolation, including arithmetic operations.");
// Declare two string variables
const firstName = "Alaa";
const lastName = "Zaiter";

// Declare a new variable and concatenate the first two variables
const result = firstName + " " + lastName;

// Log the concatenated result to the console
console.log("Full Name:", result);
//Step 7
console.log(5 === 5);     // true (strict equality)
console.log(5 === '5');   // false (different data types)

console.log(5 !== 10);    // true (strict inequality)
console.log(5 !== '5');   // true (different data types)

console.log(5 == 5);     // true (loose equality)
console.log(5 == '5');   // true (values are equal after type coercion)

console.log(5 != 10);    // true (loose inequality)
console.log(5 != '5');   // false (values are equal after type coercion)

console.log(10 > 5);     // true
console.log(5 >= 5);     // true
console.log(5 < 10);     // true
console.log(5 <= 5);     // true
//Step 8
// Declare a variable and assign the value of the equation 5 + 3 * 2
const result0 = 5 + 3 * 2;

// Anticipate the answer: 5 + 3 * 2 = 5 + 6 = 11

// Declare variables and assign values to equations
const result1 = 10 / 2 + 3;
const result2 = 10 / (2 + 3);

// Anticipate the answers:
// result1: 10 / 2 + 3 = 5 + 3 = 8
// result2: 10 / (2 + 3) = 10 / 5 = 2

// Log the values of the variables
console.log("result0:", result0); // Should print: 11
console.log("result1:", result1); // Should print: 8
console.log("result2:", result2); // Should print: 2

// Explanation of the difference between result1 and result2:
console.log("Explanation:");
console.log("result1 calculates (10 / 2) + 3, resulting in 8.");
console.log("result2 calculates 10 / (2 + 3), where the parentheses force the addition first, resulting in 10 / 5, which equals 2.");



