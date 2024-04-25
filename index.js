import inquirer from "inquirer"; // Import inquirer library
let myBalance = 50000;
let myPin = 552852;
console.log("Welcome to ATM MACHINE for people");
async function startATM() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "Pin",
            type: "number",
            message: "Please enter your pin: ",
        },
    ]);
    if (pinAnswer.Pin === myPin) {
        console.log("Your Pin Is Correct, Login Successfully!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select an operation: ",
                choices: ["Withdraw Amount", "Check Balance"], // Corrected spelling of "Withdraw"
            },
        ]);
        if (operationAns.operation === "Withdraw Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Please enter the amount to withdraw: ", // Corrected spelling of "amount"
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance!");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdrawn Successfully!`); // Corrected spelling of "Withdrawn"
                console.log(`Your Remaining Balance Is: ${myBalance}`);
            }
        }
        else if (operationAns.operation === "Check Balance") {
            console.log(`Your Current Balance Is: ${myBalance}`);
        }
    }
    else {
        console.log("Your Pin Is Incorrect, Please Write Correct Pin!");
    }
}
startATM(); // Call the function to start the ATM
