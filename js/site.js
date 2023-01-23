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
let loan = []
// var events = [{
//     event: "ComicCon",
//     city: "New York",
//     state: "New York",
//     attendance: 240000,
//     date: "06/01/2017",

function calculateMortgage() {

    //get loan data input by user
    saveLoanData();

    //calculate the payment, principal, interest, total interest & current balance for each month
    calculateMonthlyValues(loan);

    // to put info on the table
    displayLoanData(loan);

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
}

//calculate the payment, principal, interest, total interest & current balance for each month
function calculateMonthlyValues(loan) {
    let totalMonthlyPayment = 0;
    let balance = loan.loanAmount;
    let interestPayment = 0;
    let principalPayment = 0;
    let newLoanTerm = 0;
    let loanInterestRate = loan.loanInterestRate;

    let newLoanRow = [];

    for (let month = 1; month <= loan[month].loanTerm; month++) {

        // Total Monthly Payment: (amountloaned) * (rate/1200) / (1-(1+rate/1200) ^number of Months)
        totalMonthlyPayment = (loan[month].loanAmount) * (loan[month].loanTerm / 1200) / Math.pow((1 - (1 + loanInterestRate / 1200)), loan[month].loanTerm)

        // // Initial Balance: Loan Amount - (Monthly Payment * Month)
        //     balance = loan.loanAmount - (totalMonthlyPayment * month)

        // Interest Payment: Previous Month Remaining Balance * rate/1200
        interestPayment = balance * loanInterestRate / 1200

        // Principal Payment total monthly payment - interest payment
        principalPayment = totalMonthlyPayment - interestPayment

        // Remaining Balance: Previous Month Remaining Balance - Principal Payment
        balance -= principalPayment
        // balance = balance - principalPayment

        newLoanTerm = loan[month].loanTerm - month

        // Add new balance & term to array
        newLoanRow = {
            balance,
            newLoanTerm,
            loanInterestRate
        }
    }
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
        tableCells[1].textContent = currentLoan.payment;
        tableCells[2].textContent = currentLoan.principal;
        tableCells[3].textContent = currentLoan.interest;
        tableCells[4].textContent = currentLoan.totalInterest;
        tableCells[5].textContent = currentLoan.currentBalance;

        tableBody.appendChild(loanRow);
    }
}