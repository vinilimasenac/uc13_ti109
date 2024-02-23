const chalk = require("chalk");

const nota = 8;

if(nota > 7){
    console.log(chalk.green.bold("Parabéns jovem!❤😁"))
}else{
    console.log(chalk.bgRed.black("Falhou na missão😭😢😢"))
}