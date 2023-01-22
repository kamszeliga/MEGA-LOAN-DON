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

    saveLoanData();

    //get loan data input by user
    let currLoan = getLoanData();

    displayStats(currLoan);

    displayLoanData(currLoan);

}

// to put info on the table
function displayLoanData(loanArray) {

    let tableBody = document.getElementById('loanTableBody');
    const tableRowTemplate = document.getElementById('loanTableRowTemplate');

    tableBody.innerHTML = '';

    for (let i = 0; i < loanArray.length; i++) {

        let loanRow = document.importNode(tableRowTemplate.content, true)
        let currentLoan = eventsArray[i];

        let tableCells = eventRow.querySelectorAll("td")

        tableCells[0].textContent = currentLoan.month;
        tableCells[1].textContent = currentLoan.payment;
        tableCells[2].textContent = currentLoan.principal;
        tableCells[3].textContent = currentLoan.interest;
        tableCells[4].textContent = currentLoan.totalInterest;
        tableCells[5].textContent = currentLoan.currentBalance;

        tableBody.appendChild(loanRow);
    }
}

function getLoanData() {
    let currentLoan = JSON.parse(localStorage.getItem('megaloandonData'));

    if (currentLoan == null) {
        currentLoan = loanData;
        localStorage.setItem('megaloandonData', JSON.stringify(currentLoan));
    }

    return currentLoan;
}

//get values
function saveLoanData() {
    let newLoanAmount = parseInt(document.getElementById('newLoanAmount').value);
    let newLoanTerm = parseInt(document.getElementById('newLoanTerm').value);
    let newLoanInterestRate = parseInt(document.getElementById('newLoanInterest').value);

    let newLoan = {
        loanAmount: newLoanAmount,
        loanTerm: newLoanTerm,
        loanInterestRate: newLoanInterestRate,
    };

    let currentLoan = getLoanData();
    currentLoan.push(newLoan);

    localStorage.setItem('megaloandonData', JSON.stringify(currentEvents));
}