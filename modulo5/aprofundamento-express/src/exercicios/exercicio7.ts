import { Request, Response } from 'express'
import { tarefas } from './exercicio3'

export const deletaTarefa = (req: Request, res: Response) => {
    try {

        const idTarefa = req.params.id

        tarefas.map((tarefa) => {
            if(tarefa.id === idTarefa) {
                return {}
            }
        })

        res.status(200).send('Tarefa deletada com sucesso')

    } catch(error: any) {
        res.end(error.message)
    }
}