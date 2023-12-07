// Factorial Calculator:Write a function that calculates the factorial of a given number. 
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE


function numfact(num) {
    let valFact = 1;
  
    for (let n = num; n > 0; n--) {
      valFact *= n;
    }
  
    console.log(valFact + " is the factorial of " + num);
  
    return valFact;
  }
  

  numfact(6);
  
  