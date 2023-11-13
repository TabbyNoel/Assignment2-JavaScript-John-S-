const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateChange(totalCost, cashPayment, discountCode) {
    let discountRates = {
        0: 0,
        1: 0.10,
        2: 0.15,
        3: 0.25,
        4: 0.35,
        5: 0.40
    };

    if (!(discountCode in discountRates)) {
        return "Invalid Discount Code!";
    }

    let discount = discountRates[discountCode];
    let discountedTotal = totalCost - (totalCost * discount);
    let change = cashPayment - discountedTotal;

    if (change < 0) {
        return "Insufficient Payment!";
    }

    return `Change: $${change.toFixed(2)}`;
}

rl.question('Enter total cost: ', (totalCost) => {
    rl.question('Enter cash payment: ', (cashPayment) => {
        rl.question('Enter discount code: ', (discountCode) => {
            console.log(calculateChange(parseFloat(totalCost), parseFloat(cashPayment), parseInt(discountCode)));
            rl.close();
        });
    });
});
