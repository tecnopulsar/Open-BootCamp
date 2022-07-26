function Fibonacci(num) {
  if (num === 1) return [1];
  if (num === 2) return [1, 1];
  let list = [1, 1];
  for (let i = 3; i <= num; i++) {
    list.push(list[i-2] + list[i - 3]);
  }
  return list;
}

console.log(Fibonacci(12));
