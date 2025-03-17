import { fibonacci } from './fibonacci.js';

test('fibonacci of 1 is 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('fibonacci of 2 is 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('fibonacci of 3 is 2', () => {
    expect(fibonacci(3)).toBe(2);
});

test('fibonacci of 5 is 5', () => {
    expect(fibonacci(5)).toBe(5);
});

test('fibonacci of 10 is 55', () => {
    expect(fibonacci(10)).toBe(55);
});