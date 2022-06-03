import { Request, Response } from 'express'
import { tarefas } from './exercicio3'

export const editarStatus = (req: Request, res: Response) => {
    try {



    } catch(error: any) {
        res.end(error.message)
    }
}