const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function calculateTotalMonthlySalary(employeeList) {
    let totalCompanyCost = 0;
    for (const employee of employeeList) {
        const currentSalary = employee.starting + (employee.experience * employee.increment);
        totalCompanyCost += currentSalary;
    }

    return totalCompanyCost;
}

// const totalBudget = calculateTotalMonthlySalary(employees);
// console.log(`Total monthly salary to be provided: ${totalBudget} tk`);

const totalBudget2 = employees.reduce((sum, emp) => sum + (emp.starting + (emp.experience * emp.increment)), 0);
const totalBudget = calculateTotalMonthlySalary(employees);
console.log(`Total monthly salary to be provided: ${totalBudget} tk`);