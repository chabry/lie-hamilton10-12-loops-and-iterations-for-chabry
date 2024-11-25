// forStatement.js

// Function 1
function sumOfNumbers(start, end) {
  // Your code here
  let sum = 0
  for(let i = start; i <= end; i++){
    sum += i
  }
  return sum
}

// Function 2
function generatePattern(rows) {
  // Your code here
  // Pattern:
  // if rows = 1 -> "*\n"
  // if rows = 3 -> "*\n**\n***\n"
  // if rows = 5 -> "*\n**\n***\n****\n*****\n"

  let pattern = ''

  for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
      pattern += '*'
    }
    pattern += '\n'
  }
  return pattern

}

// Function 3
function reverseString(str) {
  // Your code here
  let reversedString = ''

  for(let i = str.length - 1; i >= 0; i--){
    reversedString += str[i]
  }

  return reversedString
}

// Function 4
function filterOddNumbers(arr) {
  // Your code here
  let result = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      result.push(arr[i])
    }
  }
  return result
}

module.exports = {
  sumOfNumbers,
  generatePattern,
  reverseString,
  filterOddNumbers,
};
