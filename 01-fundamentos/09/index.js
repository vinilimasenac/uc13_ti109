// Exemplo 01 - solicita ao usuário que informe sua linguagem preferida e, em seguida, exibe a resposta no console. 
const chalk = require("chalk")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual a sua linguagem preferida?`, (language) => { 
    if(language === "javascript"){
        console.log(chalk.green.bold("💎 Parabéns jovem, boa escolha!"))
    } else{
        console.log(chalk.red(`${language} 🥺 é... tá bom!!`))
    }
    readline.close()
})

