// Create a function that checks if the input/parameter is an even number.

function evenNum(i) {
    if (i % 2 === 0){
        alert("The number is an even number");
    }
    else{
        alert("The number is not an even number");
    }
    }
    
    evenNum(14);


// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter 

function printNum(n1, n2) {
    for(let i = n1; i <= n2; i++) {
      console.log(i);
    }
  }
  
  printNum(7, 12);


//   Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function calcFunc(Num1, Num2){
  let RangeSum = 0;
for(let i = Num1; i <= Num2; i++){
  RangeSum += i;
}
console.log(RangeSum);
}
calcFunc(10, 15);




