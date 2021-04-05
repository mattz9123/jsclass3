let books = 0.25;
let dvds = 0.50;
let dailyFee = 0;

let numBooks = prompt('How many books do you have? ');
let numDvd = prompt('How many DVDs do you have? ');
let daysLate = prompt('How many days late are your books and DVDs? ');
dailyFee = (numBooks * books) + (numDvd * dvds);
totalFee = dailyFee * daysLate
totalFee = totalFee.toFixed(2);

alert(`You have ${numBooks} books and ${numDvd} DVDs that are ${daysLate} 
days late, costing a total of $${totalFee}`)