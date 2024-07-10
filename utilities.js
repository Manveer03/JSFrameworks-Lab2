// utilities.js

// First function: Greeting with multiple parameters
export function greet(title, firstName, lastName) {
    console.log(`Welcome ${title} ${firstName} ${lastName} to G@I College`);
}

// Second function: Unit conversion from kilometers to miles
export function convert(kilometers) {
    return kilometers * 0.621371; // Convert kilometers to miles
}

// Third function: Math operation to calculate the sum of an array of numbers
export function calculate(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Fourth function: Advanced function to check if a number is prime
export function advancedFunction(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    console.log(`${number} is a prime number`);
    return true;
}
