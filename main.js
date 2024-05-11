import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter your friend name:"
    }]);
if (isFriend.name === "Shakir" || isFriend.name === "Hussain") {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
