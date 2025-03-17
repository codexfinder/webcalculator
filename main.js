import { fakultet } from './fakultet.js';
import { fizzBuzz } from './fizzbuzz.js';
import { fibonacci } from './fibonacci.js';

window.calculateFactorial = function() {
    const input = document.getElementById('factorialInput').value;
    const result = fakultet(Number(input));
    document.getElementById('factorialResult').textContent = result;
}

window.calculateFizzBuzz = function() {
    const input = document.getElementById('fizzBuzzInput').value;
    const result = fizzBuzz(Number(input));
    document.getElementById('fizzBuzzResult').textContent = result;
}

window.calculateFibonacci = function() {
    const input = document.getElementById('fibonacciInput').value;
    const result = fibonacci(Number(input));
    document.getElementById('fibonacciResult').textContent = result;
}