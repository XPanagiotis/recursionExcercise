function fibonacci(n) {
  if (n <= 0) return "Please enter a positive number";
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibonacci(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
console.log(fibonacci(-1)); //Excpected output: "Give a positive number"
console.log(fibonacci(0)); //Excpected output: "Give a positive number"
console.log(fibonacci(1)); //Excpected output: "[0]"
console.log(fibonacci(2)); //Excpected output: "[0, 1]"
console.log(fibonacci(4)); //Excpected output: "[0, 1, 1, 2]"
console.log(fibonacci(4)); //Excpected output: "[0, 1, 1, 2, 3]"
console.log(fibonacci(5)); //Excpected output: "[0, 1, 1, 2, 3]"
console.log(fibonacci(8)); //Excpected output: "[0, 1, 1, 2, 3, 5, 8, 13]"
console.log(fibonacci(15)); //Excpected output: "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]"
