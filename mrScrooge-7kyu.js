// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

const calculateYears = (p, i, t, desired) => {
  let myMoney = p;
  let numYears = 0;

  while (myMoney < desired) {
    let interest = myMoney * i;
    let tax = interest * t;
    myMoney += interest;
    myMoney -= tax;
    numYears += 1;
    console.log(myMoney);
  }
  return numYears;
};

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); //14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); //0
