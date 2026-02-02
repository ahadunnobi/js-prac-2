// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// Using reduce()

const heights2 = ['rahim', 'robin', 'rafi', 'ronin', 'rashed'];

const smallestName = heights2.reduce((smallest, current) => {
    return current.length < smallest.length ? current : smallest;
});

// console.log(smallestName); 


// Using a for loop

let smallest = heights2[0]; 

for (let i = 1; i < heights2.length; i++) {
    if (heights2[i].length < smallest.length) {
        smallest = heights2[i]; 
    }
}

// console.log(smallest);

// Using sort()

const smallestName2 = [...heights2].sort((a, b) => a.length - b.length)[0];

console.log(smallestName2); 