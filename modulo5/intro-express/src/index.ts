import express from 'express'
import { Request, Response } from "express"
import { AddressInfo } from 'net'
import fetch from 'node-fetch';
import { json } from 'stream/consumers';

const app = express()

app.use(express.json())

app.get('/message', (request: Request, response: Response) =>{
    response.status(200).send({ message: 'Message exibida com sucesso' })
})

app.get('/users', (req: Request, res: Response) =>{    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        res.send(json)
    }).catch((error)=>{ res.send(error) })
})

type UserModel = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

type PostModel = {
    userId: string,
    id: string,
    title: string,
    body: string
}

const User: UserModel[] = []
const Post: PostModel[] = []

app.post("/createUser", (req: Request, res: Response  ) => {
    const { id, name, phone, email, website } = req.body
    const model = {
        id,
        name,
        phone,
        email,
        website
    }

    User.push(model)

    res.status(200).send({message: "Registro criado com sucesso"})
})

app.get("/getUsers", (req: Request, res: Response) =>{
    res.status(200).send(User)
})

app.get('/posts', (req: Request, res: Response) =>{    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        Post.push(json)
        res.send(json)
    }).catch((error)=>{ res.send(error) })
})

app.post('/createPost', (req: Request, res: Response )=>{
    const {userId,id,title, body} = req.body
    const model = {
        userId,
        id,
        title,
        body
    }

    Post.push(...Post, model)
    res.status(201).send({ message: "Post criado com sucesso", doc: Post })
})

const server = app.listen(process.env.PORT || 3003, () =>{ 
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is runsning in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon strating server.`)
    }
}) 