// Develop a program that generate a random number between 1 and 100. Allow the user to guess the number and provide feedback whether the number is too high or too low.
//  Explain like you are explain to a five years old. Don't give me the code, break down the concept for me to understand and write the code myself

function randomNumberGenerator(userGuess){

    let randomValue = Math.floor(Math.random() * 100) + 1;

    if(randomValue === userGuess){ 

            console.log('Congratulations You are correct!');

    } else if(randomValue < userGuess){

            console.log(`Oops, your guess ${userGuess} is high`)

    } else if(randomValue > userGuess){
        
            console.log(`Oops, your guess ${userGuess} is  low`)
        }
        
        console.log(`The random number is ${randomValue}`);
}
randomNumberGenerator(90);



// Random number generator using while loop
// it will keep taking an input from the user till the User's guess matches the random number


// function randomNumberGenerator(userGuess){
//     let randomValue = Math.floor(Math.random() * 100) + 1;
// while(randomValue !== userGuess){
//     if(randomValue === userGuess){
//         console.log('Congratulations You are correct!')
// } else if(randomValue < userGuess){
//         console.log(`Your guess ${userGuess} is high`)
// } else if(randomValue > userGuess){
//         console.log(`Your guess ${userGuess} is  low`)
//     }
// console.log(`The random number is ${randomValue}`);
// }

// }
// randomNumberGenerator(90);