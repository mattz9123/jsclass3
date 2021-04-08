$(document).ready(function () {
    $("button").on("click", calculate);
})


function calculate() {


    let books = 0.25;
    let dvds = 0.50;
    let dailyFee = 0;

    let numBooks = parseFloat( $("#numOfBooks").val() );
    let numDvd = parseFloat( $("#numOfDvds").val() );
    let daysLate = parseFloat( $("#numDaysLate").val() );
    dailyFee = (numBooks * books) + (numDvd * dvds);
    let totalFee = dailyFee * daysLate
    totalFee = totalFee.toFixed(2);

    $("span#fee").text(totalFee);

    $(".output").show();
}