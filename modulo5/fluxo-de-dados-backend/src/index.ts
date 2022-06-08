import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { toDoList } from './data'
import { error } from 'console'

const app = express()
app.use(express.json())
app.use(cors())

const errors = {
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar o authorization"},

}

//--------------------------------------EXERCÍCIOS PROPOSTOS--------------------------------------//

//Exercício 1.

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API funcionando!')
})


//Exercício 3

app.post('/new/product', (req: Request, res: Response)=>{
    try{
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price

        toDoList.push({
            id: id,
            name: name,
            price: price
        })

        res.status(200).send(toDoList)
    }
    catch{
        res.status(400).send('Produto não inserido')
    }
})


//Exercício 4

app.get('/list', (req: Request, res: Response)=>{
    try{
        toDoList.map((element)=>{
            return element
        })

        res.status(200).send(toDoList)
    }
    catch{
        res.status(400).send('Lista não encontrada')
    }
})


//Exercício 5

app.put('/list/:id', (req: Request, res: Response)=>{
    try{
        const id = req.params.id
        const price = req.body.price

        toDoList.forEach((e) =>{
            if(e.id === id){
                e.price = price
            }
        })

        res.status(200).send(toDoList)
    }
    catch{
        res.status(400).send('Preço não alterado')
    }
})


//Exercício 6

app.delete('/delete/:id', (req: Request, res: Response)=>{
    try{
        const id = req.params.id

        toDoList.filter((u, i)=>{
            if(u.id === id){
                toDoList.splice(i, 1)
            }
        })
        res.status(200).send(toDoList)
    }
    catch{

    }
})


//Exercício 7

app.post('/new/product', (req: Request, res: Response)=>{

    let errorCode :number = 0

    try{
        const { id, name, price } = req.body

        if(!id || !name || !price){
            errorCode = 422
            throw new Error('Ausência de parâmetros a serem passados. Preencha corretamente o body')
        }

        if(typeof name !== 'string'){
            errorCode = 400
            throw new Error('Precisa ser string')
        }

        toDoList.push({
            id: id,
            name: name,
            price: price
        })

        res.status(200).send(toDoList)
    }
    catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


//Exercício 8


app.put('/list/:id', (req: Request, res: Response)=>{

    let errorCode :number = 0

    try{
        const id = req.params.id
        const price = req.body.price

        if(price === null || undefined){
            errorCode = 400
            throw new Error('Faltou passar o preço da requisição, favor corrigir')
        }

        if(typeof price !== 'number' || price < 0){
            errorCode = 400
            throw new Error('O preço não é um number ou é menor que zero')
        }

        toDoList.forEach((e) =>{
            if(e.id === id){
                e.price = price
            }
        })

        res.status(200).send(toDoList)
    }
    catch (error :any) {
        res.status(errorCode).send(error.message)
    }
})


//Exercício 9


app.delete('/delete/:id', (req: Request, res: Response)=>{
    try{
        const name = req.params.name

        toDoList.forEach((u, i)=>{
            if(u.name === name){
                toDoList.splice(i, 1)
            }
        })
        res.status(200).send(toDoList)
    }
    catch{

    }
})


//
app.listen(3003, () => {
    console.log('Servidor de pé')
})