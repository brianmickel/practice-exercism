class Triangle {
    constructor(s1, s2, s3) {
        this.sides = [s1, s2, s3].sort((a, b) => a - b);
    }
    
    kind() {
        // Triangles must have three sides
        if (this.sides.length !== 3) throw new Error("Not a trinagle");
        // Triangle sides must be positive non-zero values
        if (this.sides.some(s => s <= 0)) throw new Error("Not a trinagle");
        // Sum of smaller two sides must be greater than third side
        if (this.sides[0] + this.sides[1] < this.sides[2]) throw new Error("Violates triangle equality");

        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
            return "equilateral";
        } else if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) {
            return "isosceles";
        } else {
            return "scalene";
        }
    }
}
  
export default Triangle;