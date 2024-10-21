const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/* ----------------------------------- INSTRUCTIONS  -----------------------------------

Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"

----------------------------------- INSTRUCTIONS  ----------------------------------- */

/* ----------------------------------- PLANNING -----------------------------------
Function: checkPassword

Question: Define your password:
Question: Type your password:

variable password 
variable guess 

guess is equal to the password: Access Granted!
guess is different to the password: Access Denied! 
guess is forgot: Here is a hint
guess if reset: Let's reset your account

guess is quit OR gameEnded: game ends

>>>> CHALLENGE

if the passWord is forgot or reset: This password you set should not be used because it glitches the system

if the passWord is <5 characters: Password is inadequate. It need to be characters or more.

----------------------------------- PLANNING ----------------------------------- */


//determine a proper function name and parameter variable name
function checkPassword(password, guess) {
  
    //write your code here
  if (guess === "forgot") {
    console.log("Here is a hint");
  } else if (guess === "reset") {
    console.log("Let's reset your account");
  } else if (password === guess) {
    console.log("Access Granted!");
    if (password === "forgot" || password === "reset") {
      console.log("This password you set should not be used because it glitches the system");
    }
    return true;
  } else {
    console.log("Access Denied!");
  }
  return false; 
}

      //call your function here.
      function StartApp() {
  
  readline.question("Define your password: ", (password) => {
    if (password.length < 5) {
      console.log("Password is inadequate. It needs to be 5 characters or more.");
      StartApp(); 
    
    } else if (password === "forgot" || password === "reset") {
      console.log("This password you set should not be used because it glitches the system");
      startGame(); 
   
    } else {
      readline.question("Now, try to guess the password: ", (guess) => {
        
      // readline.close();
      if(guess !== "quit"){
        StartApp();
      } else {
        readline.close();

        }
      });
    }
  });
}

StartApp();
