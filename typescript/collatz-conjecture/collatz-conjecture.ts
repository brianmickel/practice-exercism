class CollatzConjecture {
    static steps(n: number) {
    if (n <= 0) {
        throw new Error('Only positive numbers are allowed.');
    }
    let stepCount = 0;
        while(n != 1) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3*n + 1;
            }
            stepCount++
        }
        return stepCount;
    }
}

export default CollatzConjecture
