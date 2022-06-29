import { Request, Response } from "express";
import connection from "../data/connection";

export default async function selectAllUsers(name:String):Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio where name like "%${name}%";`)

  return result[0]}

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  let statusCode=500
  try {
    let name=req.query.name as string
    if(!name){
      name="%"
    }
     const users = await selectAllUsers(name)

     if(!users.length){
        statusCode = 404
        throw new Error("No Users found")
     }

     res.status(200).send(users)

  } catch (error:any) {
     console.log(error)
     res.status(statusCode|| 400).send(error.message || error.sqlMessage)
  }
}