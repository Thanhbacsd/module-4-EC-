function lab05() {
    let miles;
    let gallons;
    let mpg;
    let again = 'y';

    do {
        miles = parseFloat(prompt('Enter miles driven'));
        gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
        if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
            mpg = miles / gallons;
            console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
        } else {
            alert('One or both entries are invalid.');
        }
        while(true) {
            again = prompt('Run application again? (y or n)', 'y');
            // Your job in this part of the assignment is to validate that entry. If it’s 
            // anything other than “y” or “n”, the prompt should simply reappear until 
            // the user enters a valid entry.
            if (again == 'y' || again == 'n') {
                break
            }
        }

    } while (again === 'y');
    console.log('Application has exited.');
}

function lab06() {
    // GLOBAL VARIABLES
    let futureValue;
    let investment;
    let rate;
    let years;

    // COLLECT VALUES FROM THE USER
    while(true) {
        label_1:
        investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
        console.log(typeof(investment))
        if(Number.isNaN(investment)) {
            continue
        } else {break}
    }
    while(true) {
        rate = parseFloat(prompt('Enter interest rate as xx.x % (numbers should > 0 and < 6)'));
        if(Number.isNaN(rate)) {
            continue
        } else {
            if (rate > 0 && rate < 6) {
                break
            } else {continue}

        }
    }
    while(true) {
        years = parseInt(prompt('Enter the number of years you want to invest for (numbers = 1-30)'));
        if(Number.isNaN(years)) {
            continue
        } else {
            if (years >= 1 && years <= 30) {
                break
            } else {continue}

        }
     }
    // CALCULATE FUTURE VALUE
    futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }

    // DISPLAY RESULT
    document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
    document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
    document.write(`Years: ${years}<br>`);
    document.write(`Future value: $${futureValue.toFixed(2)}`);
}