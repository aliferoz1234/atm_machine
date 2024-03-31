#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance=10000;// Dollar
let myPin=1234;

let pinAnswer=await inquirer.prompt(
    [
    {
    name:"pin",
    message:"enter your pin",
    type:"number"
    }
    ]
);

if(pinAnswer.pin===myPin){
    console.log("Correct pin code!!!")

    let operationAns=await inquirer.prompt(
        [
            {
            name:"accountType",
            message:"Select your account type",
            type:"list",
            choices:["Current Account","Savings Account"]

        },
            {
                name:"transMethod",
                message:"please select option",
                type:"list",
                choices:["fast cash","withdraw","check balance"]
     
            }

        ]
    );
    if(operationAns.transMethod==="withdraw"){
        let amountAns=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );
        if(amountAns.amount>0 && amountAns.amount<=myBalance)
       { myBalance-=amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
       }
       else{ console.log("You have insufficient balance")}
    }
    if(operationAns.transMethod==="fast cash"){
        let fastamountAns=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"list",
                    choices:["1000","5000","10000","20000"]
                }
            ]
        );
        if(fastamountAns.amount>0 && fastamountAns.amount<=myBalance)
       { myBalance-=fastamountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
       }
       else{ console.log("You have insufficient balance")}
    }
    else if(operationAns.transMethod==="check balance"){
        console.log(`Your balance is: ${myBalance}`);
    }
}

else{
    console.log("Incorrect pin number");
}