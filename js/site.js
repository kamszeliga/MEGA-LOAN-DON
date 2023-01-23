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


function calculateMortgage() {

    //get loan data input by user
    saveLoanData();

    //calculate the payment, principal, interest, total interest & current balance for each month
    calculateMonthlyValues(newLoan);

    // to put info on the table
    displayLoanData();

}

function saveLoanData() {
    let newLoanAmount = parseInt(document.getElementById('newLoanAmount').value);
    let newLoanTerm = parseInt(document.getElementById('newLoanTerm').value);
    let newLoanInterestRate = parseInt(document.getElementById('newLoanInterest').value);

    let newLoan = {
        loanAmount: newLoanAmount,
        loanTerm: newLoanTerm,
        loanInterestRate: newLoanInterestRate,
    };

    currentLoan.push(newLoan);
}

//calculate the payment, principal, interest, total interest & current balance for each month
function calculateMonthlyValues(newLoan) {

    let newLoan = loanArray

    for (let i = 0; i < loanArray.length; i++) {

        // Total Monthly Payment: (amountloaned) * (rate/1200) / (1-(1+rate/1200) **-number of Months)
        // Remaining Balace: Loan Amount - (Monthly Payment * Month)
        // Interest Payment: Previous Month Remaining Balance - Interest Payment
        // Remaining Balance: Previous Month Remaining Balance - Principal Payment

        // single function for one monthly payment  
    }
}

// to put info on the table
function displayLoanData(loanArray) {

    let tableBody = document.getElementById('loanTableBody');
    const tableRowTemplate = document.getElementById('loanTableRowTemplate');

    tableBody.innerHTML = '';

    for (let i = 0; i < loanArray.length; i++) {

        let loanRow = document.importNode(tableRowTemplate.content, true)
        let currentLoan = loanArray[i];

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