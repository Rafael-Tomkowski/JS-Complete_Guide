const defaultResult = 0;
let currentResult = defaultResult
let logEntries = [];

function getUserNumberInput(){
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier,
   prevResult,
    operationNumber,
     newResult) {
      const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
      };
      logEntries.push(logEntry);
      console.log(logEntries);
}


function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  
  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVISION' ||
    !enteredNumber
    ) {
      return;
    }
    
    // if (
      //   calculationType === 'ADD'||
      //   calculationType === 'SUBTRACT' ||
      //   calculationType === 'MULTIPLY' ||
      //   calculationType === 'DIVIDE'
      // ) {

  const initialResult = currentResult;
  let mathOperator;
        
  if (calculationType === 'ADD') {
          currentResult += enteredNumber;
    mathOperator = '+'
  } else if(calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-'
  } else if(calculationType === 'DIVISION'){
    currentResult /=  enteredNumber;
    mathOperator = '/'
  }else if (calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*'
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

function add(){
  calculateResult('ADD');
} 

function sub(){
  calculateResult('SUBTRACT');
} 

function div(){
  calculateResult('DIVISION')
} 

function mult(){
  calculateResult('MULTIPLY')
} 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
divideBtn.addEventListener('click', div);
multiplyBtn.addEventListener('click', mult);


//========================================================================//

// TEST CODE 1
// let a = 5;
// let b = 3;

//TEST CODE 2
// function subtract(num1, num2){
//   const result1 = num1 - num2;
//   return result1
// } 

//TEST CODE 3
// function stringify(num3){
//   const result2 = (`Result: ${num3}`);
//   return result2
// } 
// subtract(12, 10);
// stringfy(10);
// const sum = (a + b);
// console.log(sum);

//TEST CODE 4
// function double(x){
//   return (x * 2);
// }
// function transform(a, double){
//  const resulta =  double(a);
//  console.log(resulta);
//  return resulta;
// }
// transform(10, double);

//TEST CODE 5
// let numbers = [10, 3, -1];
// function solve() {
//     numbers.push(8, 2);
//     console.log(numbers);
// }
// solve();

// TEST CODE 6
// let courseData = {
//   title: "JavaScript - The Complete Guide",
//   duration: 30,
//   levels: ["Beginner", "Advanced"]
// }

//TEST CODE 7
// let userCategory;
// let age = 30;

// function solve() {
//    if(age<18){
//       userCategory = 'child';
//    }else if(age < 65){
//       userCategory = 'adult';
//    }else {
//     userCategory = 'senior' ;      
//    }
// }

//Operator Precedence
//Ordem de precedência: Define em que ordem os operadores serão executados.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
