var loanData = [{
},
]

function calculateMortgage() {

    saveLoanData();

    //get loan data input by user
    let currLoan = getLoanData();

    displayStats(currLoan);

    displayLoanData(currLoan);

}

// function displayStats(loanArray) {
//     // let totalAttendance = calculateTotal(eventsArray);
//     // let averageAttendance = calculateAverage(eventsArray);
//     // let mostAttendance = calculateMost(eventsArray);
//     // let leastAttendance = calculateMin(eventsArray);

//     let stats = calculateStats(eventsArray);

//     document.getElementById('total').textContent = stats.totalAttendance.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0, });
//     document.getElementById('average').textContent = stats.averageAttendance.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0, });
//     document.getElementById('most').textContent = stats.mostAttendance.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0, });
//     document.getElementById('least').textContent = stats.leastAttendance.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0, });
// }

// function calculateStats(loanArray) {

//     let sum = 0;
//     let aver = 0;
//     let max = eventsArray[0].attendance;
//     let min = eventsArray[0].attendance;

//     for (let index = 0; index < eventsArray.length; index++) {
//         let currentEvent = eventsArray[index];
//         sum = sum + currentEvent.attendance; }
//     }

//     aver = sum / eventsArray.length;

//     let stats = {
//         totalAttendance: sum,
//         averageAttendance: aver,
//         mostAttendance: max,
//         leastAttendance: min,
//     }
//     return stats;
// }

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

// function getEvents(element) {
//     let currentEvents = getEventData();
//     let cityName = element.getAttribute('data-string');

//     let filteredEvents = currentEvents;

//     if (cityName != 'All') {
//         filteredEvents = currentEvents.filter(
//             function (event) {
//                 if (cityName == event.city) {
//                     return event;
//                 }
//             }
//         );
//     }
//     document.getElementById('statsHeader').textContent = cityName;
//     displayStats(filteredEvents);
//     displayEventData(filteredEvents);
// }


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