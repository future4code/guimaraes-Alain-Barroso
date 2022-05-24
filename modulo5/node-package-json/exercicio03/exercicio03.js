/*

    Crie uma aplicação Node que receba uma string representando uma tarefa. 
    O programa deve adicionar a nova tarefa em uma variável que represente uma 
    lista de tarefas. A lista de tarefas pode estar criada antes da execução do 
    código. Após adicionar o item à lista, exiba a lista atualizada.

*/

const listaTarefa = [{id: 1, description: 'Levar cachorro para passear'}]

console.table(listaTarefa)

let tarefa = process.argv[2]
listaTarefa.push({id: 2, description: tarefa})

tarefa = process.argv[3]
listaTarefa.push({id: 3, description: tarefa})

console.table(listaTarefa)