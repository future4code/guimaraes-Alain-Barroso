import { Request, Response } from "express";
import axios from "axios";
import { Turma } from "../types/Classes";
import connection from "../connection";
import express, {Express} from 'express';

const app: Express = express();


const baseUrl = "http://localhost:3003"

app.post(`${baseUrl}/turmas`, async (req: Request,res: Response) => {
    const turma: Turma = new Turma(Date.now().toString(), req.body.nome, req.body.modulo)
    console.log(turma)
    try {
        await connection("turma")
        .insert({
            turma
        })
        res.send("Success!")

    } catch (error) {
        console.error("Erro", error)
        return null
    }
})