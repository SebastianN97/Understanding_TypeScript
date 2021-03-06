function add(n1: number, n2: number, showResult: boolean, phrase: string) {

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result)
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: "

add(number1, number2, printResult, resultPhrase); 


// Object Types

const person: {
  name: string;
  age: number;
} = {
  name: "Sebastian",
  age: 23
};

console.log(person.name);


// Arrays Types

const person1 = {
  name: "Sebastian",
  age: 23,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}


// Tuples

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: "Sebastian",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"] //Tuple
};

// Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person3: {
  name: "Sebastian",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};


// Union 

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") [
    result = input1 + input2;
  ] else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// Aliases

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";


// Return types void

function add(n1: number n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// unknown and never type

let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";
if(typeof userInput === "string") {
  userName = userInput
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);