const method1 = document.querySelector('#method1')
const method2 = document.querySelector('#method2')
const method3 = document.querySelector('#method3')
const method4 = document.querySelector('#method4')

method1.addEventListener('submit', function(event){
  event.preventDefault()

  let data = [4, 9, 45, 65]

  const inputField = document.querySelector('#method1 .input')
  const userInput = inputField.value

  data.push(userInput)

  const result = data.reduce(myFunc);

  function myFunc(total, num) {
    return total + num;
  }

  document.querySelector('#method1 .output').innerHTML = result

});
