const chalk = require("chalk")
const inquirer = require("inquirer")
inquirer
    .prompt([
        {
            name: 'nome',
            message: 'Nome do aluno(a): '
        },
        {
            name: 'nota1',
            message: 'Primeira nota: '
        },
        {
            name: 'nota2',
            message: 'Segunda nota: '
        },
        {
            name: 'nota3',
            message: 'Terceira nota: '
        },
    ])
    .then((resposta) => {
        console.log(resposta)
        const media = (parseFloat(resposta.nota1) + parseFloat(resposta.nota2)+ parseFloat(resposta.nota3)) /3
       
        if(media >=7){
            console.log(chalk.bgGreen.black(`Média: ${media.toFixed(2)} -> ${resposta.nome} - Aprovado`))
            
        }else if(media >=5 && media < 7){
            console.log(chalk.bgYellow.black(`Média: ${media.toFixed(2)} -> ${resposta.nome} - Recuperação`))
        }else{
            console.log(chalk.bgRed.black(`Média: ${media.toFixed(2)} -> ${resposta.nome} - Reprovado`))
        }
    })
    .catch((err) => {
        console.log(err)
    })