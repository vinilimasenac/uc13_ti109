const inquirer = require("inquirer")


const questions = [
    {
        type: 'list',
        name: 'animal',
        message: 'Qual é o seu animal favorito?',
        choices: ['Cachorro', 'Gato', 'Cavalo', 'Macaco', 'Iguana']
    }
]

inquirer
    .prompt(questions)
    .then(answers =>{
        console.log(`Seu animal preferio é: ${answers.animal}` )
    })
    .catch(error =>{
        console.log('Ocorreu erro', error)
    })