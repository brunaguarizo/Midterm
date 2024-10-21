const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/* ----------------------------------- INSTRUCTIONS  -----------------------------------

Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

 CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

----------------------------------- INSTRUCTIONS  ----------------------------------- */

/* ----------------------------------- PLANNING -----------------------------------
Question: What is your name?
variable personName

Question: How much money do you have for lunch?
variable personMoney

Question: Which item do you want for lunch?
variable lunchItem
hamburger
pasta
wrap
else - not found

variable lunchPrice
$6
$10
$4

personMoney >= lunchPrice: personName, "purchased" ,lunchItem, "purchased!"
personMoney < lunchPrice: personName, "does not have sufficient funds to buy" ,lunchItem

----------------------------------- PLANNING ----------------------------------- */

//determine a proper function name and parameter variable name
function LunchSystem(personName, personMoney, lunchItem) {
  let lunchPrice;

  // Lunch items and prices
  if (lunchItem === "hamburger") {
    lunchPrice = 6;
  } else if (lunchItem === "pasta") {
    lunchPrice = 10;
  } else if (lunchItem === "wrap") {
    lunchPrice = 4;
  } else {
    console.log("Item not found.");
    return; 
  }

  // Money vs Price
  if (personMoney >= lunchPrice) {
    console.log(`${personName} purchased ${lunchItem} purchased!`);
  }
}

function StartApp() {
  readline.question("What is your name? ", (_personName) => {
    if (_personName === "quit") {
      readline.close();
      return;
    }
    
    readline.question("How much money do you have for lunch? ", (_personMoney) => {
      readline.question("Which item do you want for lunch? ", (_lunchItem) => {
        
        // Call your function here
        LunchSystem(_personName, Number(_personMoney), _lunchItem);
        StartApp(); 
      });
    });
  });
}
StartApp();
