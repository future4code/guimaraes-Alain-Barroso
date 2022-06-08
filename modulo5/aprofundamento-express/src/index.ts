import express from 'express'
import cors from 'cors'
import { getTarefas } from './exercicios/exercicio4'
import { postCriarTarefa } from './exercicios/exercicio5'
import { deletaTarefa } from './exercicios/exercicio7'

export const app = express()

app.use(express.json())
app.use(cors())
app.get('/tarefas', getTarefas)
app.post('/criar/tarefa', postCriarTarefa)
app.delete('/tarefa/:id', deletaTarefa)

app.listen(3003, () => console.log('Server run....'))