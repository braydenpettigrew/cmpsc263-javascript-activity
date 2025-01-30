// Objective: Create variables of different data types and print them.

console.log(
  "Objective: Create variables of different data types and print them."
);
let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;
console.log(score);
console.log(temperature);
console.log(greeting);
console.log(isLearningFun);

// Objective: Create an object and an array, then access and modify their elements.

console.log(
  "\nObjective: Create an object and an array, then access and modify their elements."
);
const student = {
  name: "Brayden",
  age: 21,
  subjects: ["Math", "Science", "English"],
};
student["isGraduated"] = false;
primeNumbers = [2, 3, 5, 7, 11];
primeNumbers[1] = 4;
console.log(primeNumbers[1], "is not a prime number, mistake detected!");
primeNumbers[1] = 3;
for (number of primeNumbers) {
  console.log(number);
}

// Objective: Perform operations using different operators and understand their results.

console.log(
  "\nObjective: Perform operations using different operators and understand their results."
);

const sumTwoNumbers = (x, y) => {
  return x + y;
};

const multiplyTwoNumbers = (x, y) => {
  return x * y;
};

const modulusTwoNumbers = (x, y) => {
  return x % y;
};

const compareTwoNumbers = (x, y) => {
  return x === y, x > y, x < y, x >= y, x <= y;
};

const combineTwoBooleanExpressions = (x, y) => {
  return x && y, x || y;
};

console.log(sumTwoNumbers(5, 10));
console.log(multiplyTwoNumbers(5, 10));
console.log(modulusTwoNumbers(5, 10));
console.log(compareTwoNumbers(5, 10));
console.log(combineTwoBooleanExpressions(true, false));

// Objective: Write conditional statements and loops using control flow operators.

console.log(
  "\nObjective: Write conditional statements and loops using control flow operators."
);

const checkScore = (score) => {
  if (score > 50) {
    console.log("Great job!");
  } else {
    console.log("Keep trying!");
  }
};

const printPrimeNumbers = (primeNumbers) => {
  for (number of primeNumbers) {
    console.log(number);
  }
};

const decrementScore = (score) => {
  while (score > 0) {
    if (score % 20 === 0) {
      console.log(score);
    }
    score--;
  }
};

checkScore(score);
printPrimeNumbers(primeNumbers);
decrementScore(score);

// Objective: Understand JS functions

console.log("\nObjective: Understand JS functions");

// This function takes in some date, calculates the time difference between the event date and now, and returns the time remaining until the event.
function eventCountdown(eventDate) {
  const now = new Date();
  const event = new Date(eventDate);
  const timeDiff = event - now;

  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
}

// The next two lines of code call the eventCountdown function with the event date as an argument and logs the result to the console.
const countdownMessage = eventCountdown("December 31, 2024 23:59:59");
console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

const swapValues = (a, b, c) => {
  let temp = a;
  a = b;
  b = c;
  c = temp;
  console.log("Swap values 1, 2, 3:", a, b, c);
};
swapValues(1, 2, 3);

function findLongestWord(sentence) {
  const words = sentence.split(" "); // words is an array of all the words in the sentence
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
