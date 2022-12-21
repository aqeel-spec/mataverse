import inquirer from "inquirer";

async function mainScreen(balance : number) {
  const options = await inquirer.prompt([
    {
      name: "manu",
      type: "list",
      choices: [
        "Balance inquiry",
        "Cash deposit",
        "Cash withdraw",
        "Tranfer",
        "Utility bills",
        "Exit",
      ],
      message : "Please select your transaction type",
    },
  ]);
  switch (options.manu) {
    case "Balance inquiry":
      console.log(`Your current balance is ${balance}`);
      break;
    case "Cash deposit":
      console.log("balance");
      break;
    case "Cash withdraw":
      console.log("balance");
      break;
    case "Tranfer":
      console.log("balance");
      break;
    case "Utility bills":
      console.log("balance");
      break;
    case "Exit":
      console.log("exit");
      break;
  }
}
export default mainScreen;