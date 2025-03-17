export function fakultet(n) {
    if (n < 0) return undefined;
    if (n === 0) return 1;
    return n * fakultet(n - 1);
}