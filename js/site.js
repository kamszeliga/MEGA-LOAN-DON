//ALL IDs
// monthlyPayment

// totalPrincipal
// totalInterest
// totalCost

// newLoanForm
// newLoanAmount
// newLoanTerm
// loanInterest

// loanTableBody

// loanTableRowTemplate
// month
// payment
// principal
// interest
// totalInterest
// currentBalance


// var events = [{
//     event: "ComicCon",
//     city: "New York",
//     state: "New York",
//     attendance: 240000,
//     date: "06/01/2017",

function calculateMortgage() {

    //get loan data input by user
    let loanInfo = saveLoanData();

    //calculate the payment, principal, interest, total interest & current balance for each month
    let loanMonths = calculateMonthlyValues(loanInfo);

    // to put info on the table
    displayLoanData(loanMonths);

    displayTotals(loanMonths);

}

function saveLoanData() {
    let newLoanAmount = parseInt(document.getElementById('newLoanAmount').value);
    let newLoanTerm = parseInt(document.getElementById('newLoanTerm').value);
    let newLoanInterestRate = parseInt(document.getElementById('newLoanInterest').value);

    let newLoanRow = {
        loanAmount: newLoanAmount,
        loanTerm: newLoanTerm,
        loanInterestRate: newLoanInterestRate,
    };

    return newLoanRow;
}

//calculate the payment, principal, interest, total interest & current balance for each month
function calculateMonthlyValues(loan) {
    let totalMonthlyPayment = 0;
    let balance = loan.loanAmount;
    let interestPayment = 0;
    let principalPayment = 0;
    let loanInterestRate = loan.loanInterestRate;
    let totalInterest = 0;

    let newLoanRow = [];

    for (let month = 1; month <= loan.loanTerm; month++) {

        // Total Monthly Payment: (amountloaned) * (rate/1200) / (1-(1+rate/1200) ^number of Months)
        totalMonthlyPayment = ((loan.loanAmount) * (loan.loanInterestRate / 1200)) / (1 - Math.pow((1 + loanInterestRate / 1200), -loan.loanTerm))

        // // Initial Balance: Loan Amount - (Monthly Payment * Month)
        //     balance = loan.loanAmount - (totalMonthlyPayment * month)

        // Interest Payment: Previous Month Remaining Balance * rate/1200
        interestPayment = balance * (loanInterestRate / 1200)

        // Principal Payment total monthly payment - interest payment
        principalPayment = totalMonthlyPayment - interestPayment

        // Remaining Balance: Previous Month Remaining Balance - Principal Payment
        balance -= principalPayment
        // balance = balance - principalPayment

        totalInterest += interestPayment

        // Add new balance & term to array
        newLoanRow.push({
            month,
            totalMonthlyPayment,
            principalPayment,
            totalInterest,
            interestPayment,
            balance,
        })
    }
    return newLoanRow;
}


// to put info on the table
function displayLoanData(loan) {

    let tableBody = document.getElementById('loanTableBody');
    const tableRowTemplate = document.getElementById('loanTableRowTemplate');

    tableBody.innerHTML = '';

    for (let i = 0; i < loan.length; i++) {

        let loanRow = document.importNode(tableRowTemplate.content, true)
        let currentLoan = loan[i];

        let tableCells = loanRow.querySelectorAll("td")

        tableCells[0].textContent = currentLoan.month;
        tableCells[1].textContent = formatCurrency(currentLoan.totalMonthlyPayment);
        tableCells[2].textContent = formatCurrency(currentLoan.principalPayment);
        tableCells[3].textContent = formatCurrency(currentLoan.interestPayment);
        tableCells[4].textContent = formatCurrency(currentLoan.totalInterest);
        tableCells[5].textContent = formatCurrency(currentLoan.balance);

        tableBody.appendChild(loanRow);
    }
}

function displayTotals(loan) {

    let totalPrincipal = parseInt(document.getElementById('newLoanAmount').value);
    document.getElementById('totalPrincipal').textContent = formatCurrency(totalPrincipal);

    // let monthlyPayment = loan.totalMonthlyPayment;
    let monthlyPayment = loan[0].totalMonthlyPayment;
    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);

    let totalInterestPayment = loan[59].totalInterest;
    document.getElementById('totalInterest').textContent = formatCurrency(totalInterestPayment);

    let totalCost = totalInterestPayment + totalPrincipal;
    document.getElementById('totalCost').textContent = formatCurrency(totalCost);
}

function formatCurrency(value) {
    let formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });
    return formatter.format(Number(value));
}