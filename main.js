import { fakultet } from './fakultet.js';
import { fizzbuzz } from './fizzbuzz.js';
import { fibonacci } from './fibonacci.js';

window.calculateFactorial = function() {
    const input = document.getElementById('factorialInput').value;
    const result = fakultet(Number(input));
    document.getElementById('factorialResult').textContent = result;
    
    // Show calculation steps
    let steps = [];
    for(let i = 1; i <= input; i++) {
        steps.push(i);
    }
    document.getElementById('factorialSteps').textContent = steps.join(' × ');
};

window.calculateFizzBuzz = function() {
    const input = document.getElementById('fizzBuzzInput').value;
    const result = fizzbuzz(Number(input));
    document.getElementById('fizzBuzzResult').textContent = result;
    
    // Show sequence
    const sequence = [];
    for(let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) sequence.push('FizzBuzz');
        else if (i % 3 === 0) sequence.push('Fizz');
        else if (i % 5 === 0) sequence.push('Buzz');
        else sequence.push(i);
    }
    document.getElementById('fizzBuzzSequence').textContent = sequence.join(', ');
};

window.calculateFibonacci = function() {
    const input = document.getElementById('fibonacciInput').value;
    const result = fibonacci(Number(input));
    document.getElementById('fibonacciResult').textContent = result;
    
    // Show sequence
    const sequence = [0, 1];
    for(let i = 2; i <= input; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    document.getElementById('fibonacciSequence').textContent = sequence.join(', ');
};