function sum(...sums) {
  // Start coding here !
  return sums.reduce((accur,curr) => accur + curr,0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
