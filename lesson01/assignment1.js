// Creating variables for each ES6 method
const method1 = document.querySelector('#method1');
const method2 = document.querySelector('#method2');
const method3 = document.querySelector('#method3');
const method4 = document.querySelector('#method4');

// Adding an event listener for the submit button and preventing it from sending
method1.addEventListener('submit', function(event){
  event.preventDefault();

  // Creating an array
  let data = [5, 9, 45, 65, -1];

  // Getting user input from input box
  const inputField = document.querySelector('#method1 .input');
  const userInput = inputField.value;
  const userNum = parseInt(userInput);

  // Reducing array and adding user input
  const result = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    userNum
);

  // Output results to html
  document.querySelector('#method1 .output').innerHTML = result;

});

// Repeating for second method
method2.addEventListener('submit', function(event){
  event.preventDefault();

  let data = [5, 9, 45, 65, -1];

  const inputField = document.querySelector('#method2 .input');
  const userInput = inputField.value;
  const userNum = parseInt(userInput);

  // Subtracting user input from each array element
  const result = data.map(value => value - userNum);

  document.querySelector('#method2 .output').innerHTML = result;
});

// Repeating for third method
method3.addEventListener('submit', function(event){
  event.preventDefault();

  let data = [5, 9, 45, 65, -1];

  const inputField = document.querySelector('#method3 .input');
  const userInput = inputField.value;
  const userNum = parseInt(userInput);

  //Checking if user input is one of the numbers in my array, output answer to html
  document.querySelector('#method3 .output').innerHTML = data.includes(userNum);
});

// Creating 4th method
method4.addEventListener('submit', function(event){
  event.preventDefault();

  let data = [5, 9, 45, 65, -1];

  const inputField = document.querySelector('#method4 .input');
  const userInput = inputField.value;
  const userNum = parseInt(userInput);

  // Creating function to check if the array element is less than the user input
  function checkNum(value) {
  return value < userNum;
}

// Using to filter to check which numbers pass the check function, output to html
document.querySelector('#method4 .output').innerHTML = data.filter(checkNum);
});
