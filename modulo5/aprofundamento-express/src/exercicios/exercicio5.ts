import { Request, Response } from 'express'
import { tarefas } from './exercicio3'
import { v4 as generateId } from 'uuid'

export const postCriarTarefa = (req: Request, res: Response) => {
    try {

        const titleName = req.body.title
        if (!titleName) throw new Error('É necessário informar uma tarefa')

        const novaTarefa = {
            id: generateId(),
            title: titleName,
            completed: false
        }

        tarefas.push(novaTarefa)

        res.status(200).send(tarefas)

    } catch(error: any) {
        res.end(error.message)
    }
}