function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    b = parseFloat(b);
    if(isNaN(b)) {
      throw new Error("Invalid input");
    }
  }
  return a + b;
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, "2"); //Safe handling of string
let result3 = addSafe(1, "hello") // throws error
console.log(result1); 
console.log(result2);
console.log(result3); 