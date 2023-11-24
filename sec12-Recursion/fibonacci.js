// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
const {performance} = require('perf_hooks')

// record the start time
const startTime = performance.now();


function fibonacciIterative(n){ // O(n)
    if(n<2) return n;

    let value = 1;
    let curr = 1;
    let prev = 0;
    for(let i=2; i<=n; i++) {
        value = curr + prev;
        prev = curr;
        curr = value;
    }
    return value;
  }
  console.log(fibonacciIterative(20));
  
  function fibonacciRecursive(n) {  // O(2^n)
    if(n < 2) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
  }
  
  console.log(fibonacciRecursive(20))

  const endTime = performance.now();
  const runTime = endTime - startTime;
  console.log(`Runtime: ${runTime} milliseconds`)