// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`


//  using math 

const heights2 = [167, 190, 120, 165, 130];

const lowest = Math.min(...heights2);

// console.log(lowest);


//  using loop

let min = heights2[0]; // Assume the first number is the smallest

for (let i = 1; i < heights2.length; i++) {
    if (heights2[i] < min) {
        min = heights2[i]; // Update min if a smaller number is found
    }
}

// console.log(min); 

// using reduce 

const lowest1 = heights2.reduce((prev, curr) => (curr < prev ? curr : prev));

console.log(lowest1); 