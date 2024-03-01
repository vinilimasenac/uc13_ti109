const inquirer = require("inquirer")
const chalk = require('chalk')

//import chalk from "chalk"

const questions = [
    {
        type: 'input',
        name: 'name',
        mensagem: 'Qual o seu nome?',
        validate: function (value) {
            if(value.trim().length > 0){
                return true
            }else {
                return 'Por favor, digite seu nome: '
            }
        }
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log(chalk.bgGreen.black(`Olá, ${answers.name} !`))
    }) 
    .catch(error =>{
        console.log("Errouuu", error)
    })