import express, { Request, Response } from "express";
import cors from "cors"
import app from "./server" 
import { User, users, USER_TYPE } from "./data";

const servidor = app

app.get("/users/type", (req: Request, res: Response) => {
    try {const type = req.query.type as string
    if(!type){
        throw new Error("Não encontrado")
    }
    else{const userFiltro = users.filter(usuario => usuario.type.toLocaleLowerCase() === type.toLocaleLowerCase())
        if(!userFiltro.length){
            throw new Error("usuario não encontrado");
        }
        res.status(200).send(userFiltro)
    }

    } 
    catch (error) {
        res.status(500).send(error)
    }
})


app.get("/users/name", (req: Request, res: Response) => {
    try {
    const name = req.query.name as string
    if(!name){
        throw new Error("Não encontrado a key")
    }
    else{const userFiltro = users.filter(usuario => usuario.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        if(!userFiltro.length){
            throw new Error("usuario não encontrado");
        }
        res.status(200).send(userFiltro)
    }

    } 
    catch (error) {
        res.status(500).send(error)
    }
})