export function steps(n) {
    if (n <= 0) throw new Error('Error: Only positive numbers are allowed');
    return stepRec(n, 0);

    function stepRec(n, steps) {
        if (n === 1) {
            return steps;
        } else if (n % 2 === 0) {
            return stepRec(n/2, steps + 1);
        } else {
            return stepRec((3 * n) + 1, steps + 1);
        }
    }
}
