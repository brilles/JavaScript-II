// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function cook(steakTemp) {
  //steakTemp must = rare or medium rare
  const mySteakTemp = steakTemp;
  console.log(`I'd like my steak cooked: ${mySteakTemp}.`)

  function rare() {
    const side = "beans"
    console.log(`Here is your ${steakTemp} steak.`);

    function sideDish() {
      console.log(`With your ${steakTemp} steak, here is your side of ${side}.`);
      //debugger;
    }

    sideDish();
  }

  rare();
}

cook("medium rare")

// ==== Challenge 2: Create a counter function ====
let count = 1;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  console.log(count++);
};

counter();
counter();
counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
