const strings = ['a', 'b', 'c','d']

console.log(strings[2])     // O(1)
strings.push('e')           // O(1)
strings.push('f')           
strings.pop();              // O(1)
strings.unshift('x')        // O(n)
strings.splice(2, 0, 'alien') // O(n)

console.log(strings)