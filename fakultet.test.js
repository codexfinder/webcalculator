import { fakultet } from './fakultet.js';

test('fakultet of 0 is 1', () => {
    expect(fakultet(0)).toBe(1);
});

test('fakultet of 5 is 120', () => {
    expect(fakultet(5)).toBe(120);
});

test('fakultet of negative number is undefined', () => {
    expect(fakultet(-1)).toBe(undefined);
});