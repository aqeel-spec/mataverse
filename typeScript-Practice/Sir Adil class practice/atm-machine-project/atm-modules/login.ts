import users from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";

async function login() {
    const answer = await inquirer.prompt([
        {
            name : "accountNumber",
            type : "number",
            message : "Please enter your accont number",
        },
        {
            name : "pin",
            type : "password",
            message : "Enter your account pin"
        }
    ])
    let user = users.find(x => x.aoountNumber == answer.accountNumber 
        && x.pinCode == answer.pin
    );
    if (typeof user != "undefined"){
        console.log("Log in")
       console.log(user)
    }else {
        console.log('====================================');
        console.log("You'r pin or account number are invalid");
        console.log('====================================');
    }
}
export default login;













