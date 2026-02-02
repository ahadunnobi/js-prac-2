// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    
    const totalLaptopCost = laptopQuantity * laptopPrice;
    const totalTabletCost = tabletQuantity * tabletPrice;
    const totalMobileCost = mobileQuantity * mobilePrice;

    const totalRequired = totalLaptopCost + totalTabletCost + totalMobileCost;

    return totalRequired;
}

const myBudget = calculateElectronicsBudget(2, 2, 1); 
console.log(`Total money required: ${myBudget} tk`); 
