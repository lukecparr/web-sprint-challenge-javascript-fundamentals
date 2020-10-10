// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nestedFunction can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
//myFunction();

// Explanation: 
// nestedFunction can access the variable `internal` because it is part of it's lexical scope. nestedFunction has access to anything outside of itself that it needs to create a closure and complete the function.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

//function summation(param) {
//	let count = 0;
//	
//	for (let i = 0; i < (param + 1); ++i) {
//		count += i;
//	};
//	
//	return count;
//}

function summation() {
	let count = 0;
	
	return function (param) {
		for (let i = 0; i < (param + 1); ++i) {
			count += i;
		};
		return count;
	};
	
}

const newCounter = summation();

//console.log(newCounter(5));
