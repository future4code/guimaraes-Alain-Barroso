import { Request, Response } from 'express'
import { app } from '../index'

app.get('/ping', (req: Request, res: Response) => {
   res.status(200).send('Pong! 🏓')
})