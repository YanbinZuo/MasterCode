function reverse(str) {
    if(!str || typeof str != 'string' || str.length < 2) return str;

    const backwards = [];
    const n = str.length;
    for(let i=n-1; i>=0; i--) {
        // backwards[n-1-i] = str[i];
        backwards.push(str[i])
    }
    return backwards.join('');
}

function reverse2(str) {
    if(!str || typeof str != 'string' || str.length < 2) return str;
    return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

const reverseStr = reverse("Hi My name is Andrei")
console.log(reverseStr)
console.log(reverse('Timbits Hi'))
console.log(reverse('Timbits Hi'))
console.log(reverse3('Timbits Hi'))