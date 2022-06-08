import { Request, Response } from 'express'
import { tarefas } from './exercicio3'

export const getTarefas = (req: Request, res: Response) => {
    try {

        const listaTarefa = tarefas.map((tarefa) => {
            if (tarefa.completed === false) {
                return tarefa
            }
        })

        res.status(200).send(listaTarefa)

    } catch(error: any) {
        res.end(error.message)
    }
}