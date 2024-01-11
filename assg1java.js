
//Write a JavaScript program to find the most frequent item of an array

arr = [ 27, 9, 56, 27, 45, 0, 1, 42, 67, 8, 27]; 

arr.sort((n1, n2) => n1 - n2); 

let count = 1; 
let	max = 0;
let	element; 

for (let i = 1; i < arr.length; ++i) { 
	if (arr[i] === arr[i - 1]) { 
		count++; 
	} else { 
		count = 1; 
	} 
	if (count > max) { 
		max = count; 
		element = arr[i]; 
	} 
} 
console.log("The most frequently occuring element is: " + element);

// Write a JavaScript program to find the sum of squares of the elements of an array.

const arr1 = [0, 1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i]*arr1[i];
}
console.log(sum);

// Write a JavaScript for loop that will iterate from 0 to 15. 
   //For each iteration, check if the current number is odd or even, 
   //and display the message to the screen as odd or even.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }

// Write a JavaScript function to get an array and to read the first element of an array. 
  //Check whether it is prime or not. 
  
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function checkFirstElement(arr) {
    if (arr.length === 0) {
      console.log('Array is empty');
      return;
    }
  
    const firstElement = arr[0];
  
    if (isPrime(firstElement)) {
      console.log(`${firstElement} is a prime number.`);
    } else {
      console.log(`${firstElement} is not a prime number.`);
    }
  }
  const myArray = [23, 7, 9, 11];
  checkFirstElement(myArray);

  


    
 
